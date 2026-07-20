import type { Metadata } from 'next';
import { ThemaDetailPage } from '@/components/pages/ThemaDetailPage';
import { pageMeta } from '@/lib/site-config';
import { THEMEN } from '@/lib/themen';
import { getThema } from '@/lib/i18n/content';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return THEMEN.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const t = getThema(slug, DEFAULT_LOCALE);
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
