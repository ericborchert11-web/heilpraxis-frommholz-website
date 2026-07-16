import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { pageMeta } from '@/lib/site-config';
import { KARRIERE, getKarriere } from '@/lib/karriere';

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return KARRIERE.map((k) => ({ slug: k.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const k = getKarriere(slug);
  if (!k) return {};
  return {
    title: k.metaTitle,
    description: k.metaDescription,
    ...pageMeta(`/karriere/${k.slug}`),
    robots: { index: true, follow: true },
    keywords: [k.primaryKeyword],
  };
}

export default async function KarriereDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const k = getKarriere(slug);
  if (!k) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: '/' },
    { name: 'Karriere', href: '/karriere' },
    { name: k.title, href: `/karriere/${k.slug}` },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {k.h1}
      </h1>
      <SeoDetailContent detail={k.detail} />
      <FaqJsonLd items={k.detail.faq} />
    </article>
  );
}
