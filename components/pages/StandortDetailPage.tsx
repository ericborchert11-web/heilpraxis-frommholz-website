import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { ServiceJsonLd } from '@/components/SEO/JsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { getStandort } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

/** `slug` ist immer der deutsche Slug — übersetzte Slugs werden vorher zurückgerechnet. */
export function StandortDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
  const t = getDictionary(lang);
  const s = getStandort(slug, lang);
  if (!s) {
    notFound();
  }

  // Identität statt Inhalt: ohne Überlagerung liefert `getStandort` denselben
  // deutschen Eintrag zurück — dann ist dieser Eintrag nachweislich noch
  // unübersetzt. Sobald die Überlagerung steht, schaltet sich das JSON-LD von
  // selbst zu.
  const istUebersetzt = s !== getStandort(slug, DEFAULT_LOCALE);

  const crumbs = [
    { name: t.crumbs.start, href: localizedHref('/', lang) },
    { name: t.crumbs.standorte, href: localizedHref('/standorte', lang) },
    { name: s.name, href: localizedHref(`/standorte/${s.slug}`, lang) },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {s.h1}
      </h1>
      <SeoDetailContent detail={s.detail} lang={lang} />
      <ServiceJsonLd
        serviceName={`Pflege & 1:1-Betreuung in ${s.name}`}
        serviceDescription={s.metaDescription}
        areaServed={[s.name]}
      />
      {/* Strukturierte FAQ-Daten nur, wenn sie auch in der Seitensprache vorliegen. */}
      {(lang === DEFAULT_LOCALE || istUebersetzt) && <FaqJsonLd items={s.detail.faq} />}
    </article>
  );
}
