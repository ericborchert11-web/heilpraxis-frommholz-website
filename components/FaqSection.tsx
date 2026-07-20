import { FaqAccordion } from './FaqAccordion';
import { FaqJsonLd } from './SEO/FaqJsonLd';
import { GLOBAL_FAQ } from '@/lib/faq-global';
import { Reveal } from './Reveal';
import type { Locale } from '@/lib/i18n/config';

export function FaqSection({ lang }: { lang: Locale }) {
  // lang wird ab Aufgabe 12 für die Übersetzung gebraucht.
  void lang;
  return (
    <section id="faq" className="bg-cream-deep px-6 md:px-12 py-24 scroll-mt-32">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">
            Häufig gestellte Fragen
          </span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            Was viele <em className="text-gold-deep not-italic font-medium">vorher fragen.</em>
          </span>
        </Reveal>
        <FaqAccordion items={GLOBAL_FAQ} />
      </div>
      <FaqJsonLd items={GLOBAL_FAQ} />
    </section>
  );
}
