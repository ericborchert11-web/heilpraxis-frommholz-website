import Image from 'next/image';
import { BUSINESS } from '@/lib/site-config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function Hero({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  // Absolute Anker, damit die Sprunglinks auch von Unterseiten aus funktionieren.
  const home = localizedHref('/', lang);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center px-6 md:px-12 py-20 lg:py-28 min-h-[80vh]">
      <div>
        <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">
          {t.hero.eyebrow}
        </span>
        <h1 className="block font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-light text-anthracite mt-5">
          {t.hero.h1Line1} <em className="text-gold-deep not-italic font-medium">{t.hero.h1Emphasis}</em>
          <br />
          {t.hero.h1Line2}
        </h1>
        <p className="mt-7 font-serif text-[clamp(1.15rem,1.8vw,1.45rem)] leading-relaxed text-anthracite-light italic">
          {t.hero.lead}
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft max-w-xl">
          {t.hero.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`${home}#kontakt`} className="bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors">
            {t.hero.ctaContact}
          </a>
          <a href={`${home}#leistungen`} className="border border-anthracite text-anthracite px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors">
            {t.hero.ctaServices}
          </a>
          <a href={`tel:${BUSINESS.phone}`} className="border border-anthracite text-anthracite px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors">
            {t.hero.ctaCall}: {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-[3/2] bg-cream-deep border border-gold/30 relative overflow-hidden">
          <Image
            src="/hero-team.jpg"
            alt={t.hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-6 pl-6 border-l-2 border-gold">
          <p className="font-serif text-lg italic text-anthracite-light leading-relaxed">
            {t.hero.promise}
          </p>
          <span className="block mt-2 font-sans text-[11px] uppercase tracking-[2px] text-gold-deep">
            {t.hero.promiseLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
