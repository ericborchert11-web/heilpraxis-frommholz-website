import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { pageMeta } from '@/lib/site-config';
import { THEMEN, getThema } from '@/lib/themen';

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return THEMEN.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const t = getThema(slug);
  if (!t) return {};
  return {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    ...pageMeta(`/themen/${t.slug}`),
    robots: { index: true, follow: true },
    keywords: [t.primaryKeyword],
  };
}

export default async function ThemenDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const t = getThema(slug);
  if (!t) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: '/' },
    { name: 'Themen', href: '/themen' },
    { name: t.title, href: `/themen/${t.slug}` },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {t.h1}
      </h1>
      <SeoDetailContent detail={t.detail} />
      <FaqJsonLd items={t.detail.faq} />
    </article>
  );
}
