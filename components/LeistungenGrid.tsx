import Link from 'next/link';
import { getLeistungen } from '@/lib/i18n/content';
import { LeistungCard } from './LeistungCard';
import { Reveal } from './Reveal';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function LeistungenGrid({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const leistungen = getLeistungen(lang);
  return (
    <section id="leistungen" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">{t.leistungenSection.eyebrow}</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            {t.leistungenSection.h2Line1} <em className="text-gold-deep not-italic font-medium">{t.leistungenSection.h2Emphasis}</em>
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
            {t.leistungenSection.lead}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leistungen.map((l, i) => (
          <Reveal key={l.slug} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
            <LeistungCard leistung={l} lang={lang} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={6}>
        <div className="mt-12 text-center">
          <Link
            href={localizedHref('/leistungen', lang)}
            className="inline-block border border-anthracite text-anthracite px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors"
          >
            {t.leistungenSection.all}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
