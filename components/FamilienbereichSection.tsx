import Link from 'next/link';
import { Reveal } from './Reveal';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function FamilienbereichSection({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <section id="familienbereich" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <Reveal>
        <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">{t.familienbereich.eyebrow}</span>
      </Reveal>
      <Reveal delay={1} as="h2">
        <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
          {t.familienbereich.h2Line1} <em className="text-gold-deep not-italic font-medium">{t.familienbereich.h2Emphasis}</em> {t.familienbereich.h2Line2}
        </span>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-anthracite-soft">
          {t.familienbereich.lead}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
        {t.familienbereich.bausteine.map((b, i) => (
          <Reveal key={b.title} delay={(i + 1) as 1 | 2 | 3}>
            <div className="h-full bg-cream p-8">
              <div className="font-serif text-lg text-gold-deep">{b.title}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-anthracite-soft">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={3}>
        <p className="mt-8 text-[13px] leading-relaxed text-anthracite-light">
          {t.familienbereich.note}
        </p>
      </Reveal>

      <Reveal delay={4}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={localizedHref('/familienbereich', lang)}
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            {t.familienbereich.ctaMore}
          </Link>
          <Link
            href={`${localizedHref('/', lang)}#kontakt`}
            className="inline-block border border-anthracite text-anthracite px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors"
          >
            {t.familienbereich.ctaSetup}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
