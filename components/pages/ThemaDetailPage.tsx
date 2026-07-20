import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { getThema } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

/** `slug` ist immer der deutsche Slug — übersetzte Slugs werden vorher zurückgerechnet. */
export function ThemaDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
  const d = getDictionary(lang);
  const t = getThema(slug, lang);
  if (!t) {
    notFound();
  }

  // Identität statt Inhalt: ohne Überlagerung liefert `getThema` denselben
  // deutschen Eintrag zurück — dann ist dieser Eintrag nachweislich noch
  // unübersetzt. Sobald die Überlagerung steht, schaltet sich das JSON-LD von
  // selbst zu.
  const istUebersetzt = t !== getThema(slug, DEFAULT_LOCALE);

  const crumbs = [
    { name: d.crumbs.start, href: localizedHref('/', lang) },
    { name: d.crumbs.themen, href: localizedHref('/themen', lang) },
    { name: t.title, href: localizedHref(`/themen/${t.slug}`, lang) },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {t.h1}
      </h1>
      <SeoDetailContent detail={t.detail} lang={lang} />
      {/* Strukturierte FAQ-Daten nur, wenn sie auch in der Seitensprache vorliegen. */}
      {(lang === DEFAULT_LOCALE || istUebersetzt) && <FaqJsonLd items={t.detail.faq} />}
    </article>
  );
}
