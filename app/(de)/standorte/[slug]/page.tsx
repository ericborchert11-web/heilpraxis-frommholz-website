import type { Metadata } from 'next';
import { StandortDetailPage } from '@/components/pages/StandortDetailPage';
import { pageMeta } from '@/lib/site-config';
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
