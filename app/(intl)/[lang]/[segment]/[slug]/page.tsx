import { notFound } from 'next/navigation';
import { LeistungDetailPage } from '@/components/pages/LeistungDetailPage';
import { StandortDetailPage } from '@/components/pages/StandortDetailPage';
import { ThemaDetailPage } from '@/components/pages/ThemaDetailPage';
import { DEFAULT_LOCALE, INTL_LOCALES, isIntlLocale, type Locale } from '@/lib/i18n/config';
import { deHrefFrom, localizedHref } from '@/lib/i18n/slugs';
import { getLeistungSeo, getStandort, getThema } from '@/lib/i18n/content';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { intlPageMeta } from '@/lib/site-config';

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

/**
 * Titel und Beschreibung eines Eintrags — oder undefined, solange die Sprache
 * für diesen Eintrag keine eigene Fassung hat. Der Vergleich läuft über die
 * Objektidentität: ohne Überlagerung liefern die Zugriffsfunktionen exakt
 * denselben deutschen Eintrag zurück.
 */
function uebersetzteMeta(
  deSegment: string,
  deSlug: string,
  lang: Locale,
): { metaTitle: string; metaDescription: string } | undefined {
  const lade = (l: Locale) => {
    switch (deSegment) {
      case 'leistungen':
        return getLeistungSeo(deSlug, l);
      case 'themen':
        return getThema(deSlug, l);
      case 'standorte':
        return getStandort(deSlug, l);
      default:
        return undefined;
    }
  };

  const eintrag = lade(lang);
  if (!eintrag || eintrag === lade(DEFAULT_LOCALE)) return undefined;
  return { metaTitle: eintrag.metaTitle, metaDescription: eintrag.metaDescription };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; segment: string; slug: string }>;
}) {
  const { lang, segment, slug } = await params;
  if (!isIntlLocale(lang)) return {};

  const dePath = deHrefFrom(`/${lang}/${segment}/${slug}`, lang);
  const basis = intlPageMeta(dePath, lang);

  // Solange der Eintrag unübersetzt ist, bleibt es beim neutralen Sitename
  // aus dem Layout — ein deutscher <title> auf einer englischen Seite wäre
  // schlechter als gar keiner. Sobald die Überlagerung da ist, greift das
  // hier von selbst.
  const [, deSegment, deSlug] = dePath.split('/');
  const meta = deSlug ? uebersetzteMeta(deSegment, deSlug, lang) : undefined;
  if (!meta) return basis;

  return {
    ...basis,
    title: { absolute: meta.metaTitle },
    description: meta.metaDescription,
  };
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
