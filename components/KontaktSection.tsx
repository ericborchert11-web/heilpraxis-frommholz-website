'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/site-config';
import { Reveal } from './Reveal';
import { sendContact } from '@/app/actions/send-contact';
import { initialContactState } from '@/lib/contact-state';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export function KontaktSection({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const [state, formAction, pending] = useActionState(sendContact, initialContactState);
  const success = state.status === 'success';
  const errorField = (key: 'name' | 'contact' | 'subject' | 'consent') =>
    state.fieldErrors?.[key];

  return (
    <section id="kontakt" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">{t.kontakt.eyebrow}</span>
          </Reveal>
          <Reveal delay={1} as="h2">
            <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
              {t.kontakt.h2Line1} <em className="text-gold-deep not-italic font-medium">{t.kontakt.h2Emphasis}</em>
            </span>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
              {t.kontakt.lead}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 space-y-3">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 text-anthracite hover:text-gold-deep">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-base">{BUSINESS.phoneDisplay}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-anthracite hover:text-gold-deep">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-base">{BUSINESS.email}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          {/*
            Sichtbarer Hinweis zur Betreuungssprache — nur gefüllt für Sprachen,
            in denen die laufende Betreuung nicht in der Seitensprache erfolgt
            (Spanisch, Italienisch). Bewusst über dem Formular, nicht im Footer.
          */}
          {t.sprachhinweis.text && (
            <p className="mb-6 border-l-2 border-gold bg-cream-deep px-5 py-4 text-[14px] leading-relaxed text-anthracite-soft">
              {t.sprachhinweis.text}
            </p>
          )}
          {success ? (
            <div className="bg-cream-deep border border-gold/40 p-8">
              <p className="font-serif text-xl text-anthracite">{t.kontakt.successTitle}</p>
              <p className="mt-3 text-[15px] text-anthracite-soft leading-relaxed">
                {/*
                  Die Server-Action liefert die Meldung in der Seitensprache;
                  der Wörterbuch-Text ist der Rückfall, wenn keine kam.
                */}
                {state.message ? (
                  state.message
                ) : (
                  <>
                    {t.kontakt.successFallback}
                    <a href={`tel:${BUSINESS.phone}`} className="underline hover:text-gold-deep">{BUSINESS.phoneDisplay}</a>.
                  </>
                )}
              </p>
            </div>
          ) : (
            <form action={formAction} className="bg-cream-deep border border-gold/20 p-8 space-y-5">
              {/* Honeypot — von echten Nutzer*innen nicht sichtbar */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  {t.kontakt.honeypotLabel}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {/* Anfragesprache — landet als Hinweis in der Benachrichtigungsmail. */}
              <input type="hidden" name="lang" value={lang} />

              <p className="text-[11px] text-anthracite-light">{t.kontakt.requiredNote}</p>

              <div>
                <label htmlFor="contact-name" className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">
                  {t.kontakt.labelName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder={t.kontakt.placeholderName}
                  aria-invalid={Boolean(errorField('name'))}
                  aria-describedby={errorField('name') ? 'err-name' : undefined}
                  className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:border-gold-deep aria-[invalid=true]:border-red-700"
                />
                {errorField('name') && (
                  <p id="err-name" className="mt-1 text-xs text-red-700">{errorField('name')}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-reach" className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">
                  {t.kontakt.labelReach}
                </label>
                <input
                  id="contact-reach"
                  type="text"
                  name="contact"
                  required
                  placeholder={t.kontakt.placeholderReach}
                  aria-invalid={Boolean(errorField('contact'))}
                  aria-describedby={errorField('contact') ? 'err-contact' : undefined}
                  className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:border-gold-deep aria-[invalid=true]:border-red-700"
                />
                {errorField('contact') && (
                  <p id="err-contact" className="mt-1 text-xs text-red-700">{errorField('contact')}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">
                  {t.kontakt.labelSubject}
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue={t.kontakt.subjects[0]}
                  className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:border-gold-deep"
                >
                  {t.kontakt.subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">
                  {t.kontakt.labelMessage}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder={t.kontakt.placeholderMessage}
                  className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:border-gold-deep"
                />
              </div>

              <label className="flex items-start gap-3 text-[12px] text-anthracite-soft leading-relaxed">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  aria-invalid={Boolean(errorField('consent'))}
                  aria-describedby={errorField('consent') ? 'err-consent' : undefined}
                  className="mt-1 shrink-0"
                />
                <span>
                  {t.kontakt.consentBefore}
                  <Link href="/datenschutz" className="underline hover:text-gold-deep">{t.kontakt.consentLink}</Link>
                  {t.kontakt.consentAfter}
                </span>
              </label>
              {errorField('consent') && (
                <p id="err-consent" className="-mt-3 text-xs text-red-700">{errorField('consent')}</p>
              )}

              {state.status === 'error' && state.message && (
                <p role="alert" className="text-[13px] text-red-700">{state.message}</p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="w-full bg-anthracite text-cream py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors disabled:opacity-60"
              >
                {pending ? t.kontakt.submitting : t.kontakt.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
