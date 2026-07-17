import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { ServiceJsonLd } from '@/components/SEO/JsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { pageMeta } from '@/lib/site-config';
import { LEISTUNGEN_SEO, hasDetail } from '@/lib/leistungen-seo';

type RouteParams = { slug: string };

// Nur Slugs mit ausgearbeitetem Detail werden statisch generiert.
export async function generateStaticParams(): Promise<RouteParams[]> {
  return LEISTUNGEN_SEO.filter(hasDetail).map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const l = LEISTUNGEN_SEO.find((x) => x.slug === slug);
  if (!l || !hasDetail(l)) return {};
  return {
    title: { absolute: l.metaTitle },
    description: l.metaDescription,
    ...pageMeta(`/leistungen/${l.slug}`),
    robots: { index: true, follow: true },
    keywords: [l.primaryKeyword, ...l.secondaryKeywords],
  };
}

export default async function LeistungDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const l = LEISTUNGEN_SEO.find((x) => x.slug === slug);
  if (!l || !hasDetail(l)) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: l.title, href: `/leistungen/${l.slug}` },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {l.h1}
      </h1>
      <SeoDetailContent detail={l.detail!} />
      <ServiceJsonLd serviceName={l.title} serviceDescription={l.metaDescription} />
      <FaqJsonLd items={l.detail!.faq} />
    </article>
  );
}
