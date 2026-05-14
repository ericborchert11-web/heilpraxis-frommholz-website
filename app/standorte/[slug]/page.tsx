import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { ServiceJsonLd } from '@/components/SEO/JsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { SITE } from '@/lib/site-config';
import { STANDORTE, getStandort } from '@/lib/standorte';

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return STANDORTE.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getStandort(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `${SITE.url}/standorte/${s.slug}` },
    robots: { index: true, follow: true },
    keywords: [s.primaryKeyword, `Pflege ${s.name}`, `Sitzwache ${s.name}`],
  };
}

export default async function StandortDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
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
