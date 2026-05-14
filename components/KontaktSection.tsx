'use client';

import { useState } from 'react';
import { BUSINESS } from '@/lib/site-config';
import { Reveal } from './Reveal';

export function KontaktSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="kontakt" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Kontakt aufnehmen</span>
          </Reveal>
          <Reveal delay={1} as="h2">
            <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
              Beginnen wir mit einem <em className="text-gold-deep not-italic font-medium">Gespräch.</em>
            </span>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
              Sie überlegen, ob unsere Begleitung passt? Wir nehmen uns Zeit für ein erstes, unverbindliches Gespräch — am Telefon, per E-Mail oder direkt bei Ihnen.
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
          <form onSubmit={onSubmit} className="bg-cream-deep border border-gold/20 p-8 space-y-5">
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Name</label>
              <input type="text" required placeholder="Ihr Name" className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep" />
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Telefon oder E-Mail</label>
              <input type="text" required placeholder="Wie dürfen wir Sie erreichen?" className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep" />
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Worum geht es?</label>
              <select className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep">
                <option>Erstgespräch zur Pflege</option>
                <option>Pflegeberatung</option>
                <option>Inklusionsberatung</option>
                <option>Reisebegleitung</option>
                <option>Etwas anderes</option>
              </select>
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Ihre Nachricht (optional)</label>
              <textarea rows={4} placeholder="Erzählen Sie uns kurz, was Sie umtreibt…" className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep" />
            </div>
            <button type="submit" disabled={sent} className="w-full bg-anthracite text-cream py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors disabled:opacity-60">
              {sent ? 'Nachricht erhalten — danke!' : 'Nachricht senden'}
            </button>
            <p className="text-[11px] text-warm-gray italic">
              Hinweis: Versand ist in dieser Vorschauversion noch nicht angeschlossen. Bitte nutzen Sie Telefon oder E-Mail.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
