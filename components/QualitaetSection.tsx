import { Reveal } from './Reveal';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

const CARD_DELAYS: (1 | 2 | 3 | 4 | 5 | 6)[] = [1, 2, 3, 4, 4];

export function QualitaetSection({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <section id="qualitaet" className="bg-anthracite text-cream py-24 px-6 md:px-12 scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold">{t.qualitaet.eyebrow}</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light">
            {t.qualitaet.h2Line1} <em className="text-gold not-italic font-medium">{t.qualitaet.h2Emphasis}</em>
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/85">
            {t.qualitaet.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
          {t.qualitaet.points.map((p, i) => (
            <Reveal key={p.title} delay={CARD_DELAYS[i]}>
              <div className="h-full bg-anthracite p-8">
                <div className="font-serif text-lg text-gold">{p.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/80">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
