import { notFound } from 'next/navigation';
import { LeistungenPage } from '@/components/pages/LeistungenPage';
import { StandortePage } from '@/components/pages/StandortePage';
import { ThemenPage } from '@/components/pages/ThemenPage';
import { FamilienbereichPage } from '@/components/pages/FamilienbereichPage';
import { SozialesEngagementPage } from '@/components/pages/SozialesEngagementPage';
import { INTL_LOCALES, isIntlLocale } from '@/lib/i18n/config';
import { SEGMENTS, deHrefFrom, type TranslatedSegment } from '@/lib/i18n/slugs';
import { getDictionary, hatUebersetzung, type Dictionary } from '@/lib/i18n/dictionaries';
import { intlPageMeta } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((lang) =>
    (Object.keys(SEGMENTS) as TranslatedSegment[]).map((key) => ({
      lang,
      segment: SEGMENTS[key][lang],
    })),
  );
}

/** Titel und Beschreibung der Übersichtsseite zu einem deutschen Referenzpfad. */
function indexMetaFor(dePath: string, t: Dictionary) {
  switch (dePath) {
    case '/leistungen':
      return t.indexMeta.leistungen;
    case '/standorte':
      return t.indexMeta.standorte;
    case '/themen':
      return t.indexMeta.themen;
    case '/familienbereich':
      return t.indexMeta.familienbereich;
    case '/soziales-engagement':
      return t.indexMeta.sozialesEngagement;
    default:
      return undefined;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; segment: string }>;
}) {
  const { lang, segment } = await params;
  if (!isIntlLocale(lang)) return {};

  const dePath = deHrefFrom(`/${lang}/${segment}`, lang);
  const basis = intlPageMeta(dePath, lang);
  // Ohne eigenes Wörterbuch bleibt es beim neutralen Sitename aus dem Layout:
  // ein deutscher <title> auf einer italienischen Seite wäre schlechter als
  // gar keiner.
  if (!hatUebersetzung(lang)) return basis;

  const meta = indexMetaFor(dePath, getDictionary(lang));
  if (!meta) return basis;

  return { ...basis, title: { absolute: meta.title }, description: meta.description };
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
