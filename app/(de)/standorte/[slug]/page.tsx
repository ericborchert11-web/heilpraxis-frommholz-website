import type { Metadata } from 'next';
import { StandortDetailPage } from '@/components/pages/StandortDetailPage';
import { pageMeta } from '@/lib/site-config';
import { STANDORTE } from '@/lib/standorte';
import { getStandort } from '@/lib/i18n/content';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return STANDORTE.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getStandort(slug, DEFAULT_LOCALE);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    ...pageMeta(`/standorte/${s.slug}`),
    robots: { index: true, follow: true },
    keywords: [s.primaryKeyword, `Pflege ${s.name}`, `Sitzwache ${s.name}`],
  };
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  return <StandortDetailPage lang="de" slug={slug} />;
}
