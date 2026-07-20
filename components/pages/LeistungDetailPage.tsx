import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { ServiceJsonLd } from '@/components/SEO/JsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { hasDetail } from '@/lib/leistungen-seo';
import { getLeistungSeo } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

/** `slug` ist immer der deutsche Slug — übersetzte Slugs werden vorher zurückgerechnet. */
export function LeistungDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
  const l = getLeistungSeo(slug, lang);
  if (!l || !hasDetail(l)) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: localizedHref('/', lang) },
    { name: 'Leistungen', href: localizedHref('/leistungen', lang) },
    { name: l.title, href: localizedHref(`/leistungen/${l.slug}`, lang) },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {l.h1}
      </h1>
      <SeoDetailContent detail={l.detail!} lang={lang} />
      <ServiceJsonLd serviceName={l.title} serviceDescription={l.metaDescription} />
      <FaqJsonLd items={l.detail!.faq} />
    </article>
  );
}
