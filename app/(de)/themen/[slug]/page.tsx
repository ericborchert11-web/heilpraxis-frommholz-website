import type { Metadata } from 'next';
import { ThemaDetailPage } from '@/components/pages/ThemaDetailPage';
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

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  return <ThemaDetailPage lang="de" slug={slug} />;
}
