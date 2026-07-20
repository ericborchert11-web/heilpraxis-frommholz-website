import { notFound } from 'next/navigation';
import { LeistungDetailPage } from '@/components/pages/LeistungDetailPage';
import { StandortDetailPage } from '@/components/pages/StandortDetailPage';
import { ThemaDetailPage } from '@/components/pages/ThemaDetailPage';
import { INTL_LOCALES, isIntlLocale } from '@/lib/i18n/config';
import { deHrefFrom, localizedHref } from '@/lib/i18n/slugs';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { pageMeta } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  // Standorte kommen bewusst direkt aus STANDORTE: ihre Slugs sind nicht
  // übersetzt und stehen darum nicht in DETAIL_SLUGS — `translatedSlugsFor`
  // liefert für sie eine leere Liste.
  const dePaths = [
    ...leistungenWithDetail().map((l) => `/leistungen/${l.slug}`),
    ...THEMEN.map((t) => `/themen/${t.slug}`),
    ...STANDORTE.map((s) => `/standorte/${s.slug}`),
  ];

  return INTL_LOCALES.flatMap((lang) =>
    dePaths.map((dePath) => {
      const parts = localizedHref(dePath, lang).split('/').filter(Boolean);
      return { lang, segment: parts[1], slug: parts[2] };
    }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; segment: string; slug: string }>;
}) {
  const { lang, segment, slug } = await params;
  if (!isIntlLocale(lang)) return {};
  return pageMeta(deHrefFrom(`/${lang}/${segment}/${slug}`, lang));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; segment: string; slug: string }>;
}) {
  const { lang, segment, slug } = await params;
  if (!isIntlLocale(lang)) notFound();

  const dePath = deHrefFrom(`/${lang}/${segment}/${slug}`, lang);
  const [, deSegment, deSlug] = dePath.split('/');

  if (!deSlug) notFound();

  switch (deSegment) {
    case 'leistungen':
      return <LeistungDetailPage lang={lang} slug={deSlug} />;
    case 'themen':
      return <ThemaDetailPage lang={lang} slug={deSlug} />;
    case 'standorte':
      return <StandortDetailPage lang={lang} slug={deSlug} />;
    default:
      notFound();
  }
}
