import { notFound } from 'next/navigation';
import { LeistungenPage } from '@/components/pages/LeistungenPage';
import { StandortePage } from '@/components/pages/StandortePage';
import { ThemenPage } from '@/components/pages/ThemenPage';
import { FamilienbereichPage } from '@/components/pages/FamilienbereichPage';
import { SozialesEngagementPage } from '@/components/pages/SozialesEngagementPage';
import { INTL_LOCALES, isIntlLocale } from '@/lib/i18n/config';
import { SEGMENTS, deHrefFrom, type TranslatedSegment } from '@/lib/i18n/slugs';
import { pageMeta } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((lang) =>
    (Object.keys(SEGMENTS) as TranslatedSegment[]).map((key) => ({
      lang,
      segment: SEGMENTS[key][lang],
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; segment: string }>;
}) {
  const { lang, segment } = await params;
  if (!isIntlLocale(lang)) return {};
  return pageMeta(deHrefFrom(`/${lang}/${segment}`, lang));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; segment: string }>;
}) {
  const { lang, segment } = await params;
  if (!isIntlLocale(lang)) notFound();

  const dePath = deHrefFrom(`/${lang}/${segment}`, lang);

  switch (dePath) {
    case '/leistungen':
      return <LeistungenPage lang={lang} />;
    case '/standorte':
      return <StandortePage lang={lang} />;
    case '/themen':
      return <ThemenPage lang={lang} />;
    case '/familienbereich':
      return <FamilienbereichPage lang={lang} />;
    case '/soziales-engagement':
      return <SozialesEngagementPage lang={lang} />;
    default:
      notFound();
  }
}
