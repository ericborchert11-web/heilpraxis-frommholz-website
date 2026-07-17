'use server';

import { headers } from 'next/headers';
import { BUSINESS, SITE } from '@/lib/site-config';

/**
 * Server Action für das Kontaktformular auf der Startseite.
 * Sendet die Anfrage per Resend an die Inhaber-Mailbox.
 *
 * Required env vars:
 *   - RESEND_API_KEY: API-Key aus dem Resend-Dashboard
 *   - MAIL_FROM: Versender-Adresse, z. B. "Heilpraxis Frommholz <kontakt@heilpraxis-frommholz.de>".
 *     Domain muss in Resend verifiziert sein, sonst "onboarding@resend.dev" als Fallback.
 *   - MAIL_TO: Empfänger-Adresse, default = simeon@heilpraxis-frommholz.de
 */

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<'name' | 'contact' | 'subject' | 'consent', string>>;
};

export const initialContactState: ContactState = { status: 'idle' };

// Sehr einfaches In-Memory-Rate-Limit pro IP (best effort — der Zustand lebt
// nur in dieser Serverless-Instanz und wird bei Kaltstart/Skalierung über
// mehrere Instanzen NICHT geteilt. Für eine belastbare Lösung bräuchte es
// einen persistenten Store wie Upstash Redis.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissionTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionTimestamps.get(ip) ?? []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissionTimestamps.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionTimestamps.set(ip, recent);
  return false;
}

type Sanitized = {
  name: string;
  contact: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot: string;
};

function sanitize(formData: FormData): Sanitized {
  const get = (key: string) => String(formData.get(key) ?? '').trim().slice(0, 5000);
  return {
    name: get('name'),
    contact: get('contact'),
    subject: get('subject'),
    message: get('message'),
    consent: formData.get('consent') === 'on',
    honeypot: get('website'),
  };
}

function isEmailLike(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const data = sanitize(formData);

  // Honeypot: Bots füllen das versteckte "website"-Feld. Wir tun, als sei
  // alles ok, senden aber nichts.
  if (data.honeypot.length > 0) {
    return { status: 'success' };
  }

  // Validierung
  const fieldErrors: NonNullable<ContactState['fieldErrors']> = {};
  if (data.name.length < 2) fieldErrors.name = 'Bitte Ihren Namen angeben.';
  if (data.contact.length < 3) fieldErrors.contact = 'Bitte Telefon oder E-Mail angeben, damit wir uns melden können.';
  if (data.subject.length === 0) fieldErrors.subject = 'Bitte ein Thema wählen.';
  if (!data.consent) fieldErrors.consent = 'Bitte der Datenverarbeitung zustimmen.';

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Bitte überprüfen Sie die markierten Felder.',
      fieldErrors,
    };
  }

  const ip = (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return {
      status: 'error',
      message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact-form] RESEND_API_KEY ist nicht gesetzt.');
    return {
      status: 'error',
      message: 'Versand aktuell nicht möglich. Bitte rufen Sie uns direkt an oder schicken Sie eine E-Mail an ' + BUSINESS.email + '.',
    };
  }

  if (!process.env.MAIL_FROM) {
    console.warn('MAIL_FROM ist nicht gesetzt — Fallback-Absender wird verwendet');
  }
  const from = process.env.MAIL_FROM ?? 'Heilpraxis Frommholz <onboarding@resend.dev>';
  const to = process.env.MAIL_TO ?? BUSINESS.email;

  // Plain-Text-Body — Resend rendert das ohnehin als Text-Mail
  const textBody = [
    'Neue Anfrage über das Kontaktformular der Heilpraxis Frommholz',
    '',
    `Name:     ${data.name}`,
    `Kontakt:  ${data.contact}`,
    `Thema:    ${data.subject}`,
    '',
    'Nachricht:',
    data.message.length > 0 ? data.message : '(keine Nachricht angegeben)',
    '',
    '---',
    `Gesendet über ${SITE.url}/#kontakt`,
  ].join('\n');

  const htmlBody = [
    '<p><strong>Neue Anfrage über das Kontaktformular der Heilpraxis Frommholz</strong></p>',
    `<p><b>Name:</b> ${escapeHtml(data.name)}<br>`,
    `<b>Kontakt:</b> ${escapeHtml(data.contact)}<br>`,
    `<b>Thema:</b> ${escapeHtml(data.subject)}</p>`,
    '<p><b>Nachricht:</b><br>',
    data.message.length > 0
      ? escapeHtml(data.message).replace(/\n/g, '<br>')
      : '<i>(keine Nachricht angegeben)</i>',
    '</p>',
    `<hr><p style="color:#888;font-size:12px">Gesendet über ${SITE.url}/#kontakt</p>`,
  ].join('');

  const payload: Record<string, unknown> = {
    from,
    to,
    subject: `Kontaktformular: ${data.subject} – ${data.name}`,
    text: textBody,
    html: htmlBody,
  };

  // Reply-To setzen, wenn der Kontakt eine E-Mail ist — dann kann Simeon
  // direkt aus der Mail antworten.
  if (isEmailLike(data.contact)) {
    payload.reply_to = data.contact;
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[contact-form] Resend-Fehler', res.status, errText);
      return {
        status: 'error',
        message: 'Versand fehlgeschlagen. Bitte versuchen Sie es später erneut — oder erreichen Sie uns direkt unter ' + BUSINESS.phoneDisplay + '.',
      };
    }
  } catch (err) {
    console.error('[contact-form] Netzwerkfehler', err);
    return {
      status: 'error',
      message: 'Netzwerkfehler beim Versand. Bitte später erneut versuchen.',
    };
  }

  return {
    status: 'success',
    message: 'Nachricht angekommen — wir melden uns innerhalb weniger Tage zurück.',
  };
}
