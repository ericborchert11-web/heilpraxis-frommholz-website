import type { Metadata } from 'next';
import { LeistungDetailPage } from '@/components/pages/LeistungDetailPage';
import { pageMeta } from '@/lib/site-config';
import { LEISTUNGEN_SEO, hasDetail } from '@/lib/leistungen-seo';
import { getLeistungSeo } from '@/lib/i18n/content';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';

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
  const l = getLeistungSeo(slug, DEFAULT_LOCALE);
  if (!l || !hasDetail(l)) return {};
  return {
    title: { absolute: l.metaTitle },
    description: l.metaDescription,
    ...pageMeta(`/leistungen/${l.slug}`),
    robots: { index: true, follow: true },
    keywords: [l.primaryKeyword, ...l.secondaryKeywords],
  };
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  return <LeistungDetailPage lang="de" slug={slug} />;
}
