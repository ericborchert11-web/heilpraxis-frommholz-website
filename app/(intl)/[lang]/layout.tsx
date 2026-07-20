import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../globals.css';
import { SiteShell } from '@/components/SiteShell';
import { INTL_LOCALES, isIntlLocale, OG_LOCALE } from '@/lib/i18n/config';
import { SITE } from '@/lib/site-config';

export function generateStaticParams() {
  return INTL_LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isIntlLocale(lang)) return {};
  return {
    metadataBase: new URL(SITE.url),
    // `template` verlangt ein `default` als Geschwister. Der neutrale
    // Sitename statt eines deutschen Satzes — die sprachspezifischen Titel
    // kommen mit den Übersetzungen (Aufgabe 11/12).
    title: { default: SITE.name, template: `%s · ${SITE.name}` },
    openGraph: { locale: OG_LOCALE[lang] },
    robots: { index: true, follow: true },
  };
}

export default async function IntlRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
