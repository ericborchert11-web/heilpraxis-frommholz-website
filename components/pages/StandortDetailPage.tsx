import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { ServiceJsonLd } from '@/components/SEO/JsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { getStandort } from '@/lib/standorte';
import type { Locale } from '@/lib/i18n/config';

/** `slug` ist immer der deutsche Slug — übersetzte Slugs werden vorher zurückgerechnet. */
export function StandortDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
  // lang wird ab Aufgabe 12 für die Übersetzung gebraucht.
  void lang;
  const s = getStandort(slug);
  if (!s) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: '/' },
    { name: 'Standorte', href: '/standorte' },
    { name: s.name, href: `/standorte/${s.slug}` },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {s.h1}
      </h1>
      <SeoDetailContent detail={s.detail} />
      <ServiceJsonLd
        serviceName={`Pflege & Sitzwachen in ${s.name}`}
        serviceDescription={s.metaDescription}
        areaServed={[s.name]}
      />
      <FaqJsonLd items={s.detail.faq} />
    </article>
  );
}
