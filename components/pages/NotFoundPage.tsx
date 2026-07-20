import Link from 'next/link';
import { BUSINESS } from '@/lib/site-config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function NotFoundPage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const home = localizedHref('/', lang);

  return (
    <section className="px-6 md:px-12 py-24 text-center max-w-2xl mx-auto">
      <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">{t.notFound.eyebrow}</span>
      <h1 className="mt-4 font-serif text-4xl font-light text-anthracite">{t.notFound.title}</h1>
      <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
        {t.notFound.lead}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href={home}
          className="inline-block bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
        >
          {t.notFound.ctaHome}
        </Link>
        <Link
          href={localizedHref('/leistungen', lang)}
          className="inline-block text-sm text-anthracite hover:text-gold-deep underline"
        >
          {t.notFound.ctaServices}
        </Link>
        <Link
          href={`${home}#kontakt`}
          className="inline-block text-sm text-anthracite hover:text-gold-deep underline"
        >
          {t.notFound.ctaContact}
        </Link>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-block text-sm text-anthracite hover:text-gold-deep underline"
        >
          {t.notFound.callBefore}{BUSINESS.phoneDisplay}{t.notFound.callAfter}
        </a>
      </div>
    </section>
  );
}
