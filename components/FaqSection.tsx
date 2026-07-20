import { FaqAccordion } from './FaqAccordion';
import { FaqJsonLd } from './SEO/FaqJsonLd';
import { GLOBAL_FAQ } from '@/lib/faq-global';
import { Reveal } from './Reveal';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

export function FaqSection({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <section id="faq" className="bg-cream-deep px-6 md:px-12 py-24 scroll-mt-32">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">
            {t.faq.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            {t.faq.h2Line1} <em className="text-gold-deep not-italic font-medium">{t.faq.h2Emphasis}</em>
          </span>
        </Reveal>
        <FaqAccordion items={GLOBAL_FAQ} />
      </div>
      {/*
        Die FAQ-Einträge selbst sind noch deutsch (Übersetzung folgt in Etappe 2).
        Strukturierte Daten deshalb nur auf der deutschen Seite ausliefern —
        sonst bekäme Google deutsche Inhalte als englische deklariert.
      */}
      {lang === DEFAULT_LOCALE && <FaqJsonLd items={GLOBAL_FAQ} />}
    </section>
  );
}
