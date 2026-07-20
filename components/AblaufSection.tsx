import Link from 'next/link';
import { Reveal } from './Reveal';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

/** Römische Ziffern sind sprachneutral und bleiben deshalb im Code. */
const NUMERALS = ['I', 'II', 'III'];

export function AblaufSection({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <section id="ablauf" className="bg-cream-deep py-24 px-6 md:px-12 scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">{t.ablauf.eyebrow}</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            {t.ablauf.h2Line1} <em className="text-gold-deep not-italic font-medium">{t.ablauf.h2Emphasis}</em>
          </span>
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {t.ablauf.steps.map((s, i) => (
          <Reveal key={NUMERALS[i]} delay={((i + 1) as 1 | 2 | 3)}>
            <div className="text-center">
              <div className="font-serif text-6xl font-light text-gold-deep tracking-wide">{NUMERALS[i]}</div>
              <h3 className="mt-4 font-serif text-2xl font-medium text-anthracite">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-[14px] text-anthracite-light text-center max-w-2xl mx-auto">
        {t.ablauf.outroBefore}{' '}
        <Link href={localizedHref('/familienbereich', lang)} className="text-gold-deep underline hover:text-gold">
          {t.ablauf.outroLink}
        </Link>
      </p>
    </section>
  );
}
