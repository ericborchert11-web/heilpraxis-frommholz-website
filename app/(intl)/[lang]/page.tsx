import { notFound } from 'next/navigation';
import { HomePage } from '@/components/pages/HomePage';
import { isIntlLocale } from '@/lib/i18n/config';
import { getDictionary, hatUebersetzung } from '@/lib/i18n/dictionaries';
import { intlPageMeta } from '@/lib/site-config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) return {};

  const basis = intlPageMeta('/', lang);
  // Ohne eigenes Wörterbuch bleibt es beim neutralen Sitename aus dem Layout:
  // ein deutscher <title> auf einer spanischen Seite wäre schlechter als
  // gar keiner.
  if (!hatUebersetzung(lang)) return basis;

  const meta = getDictionary(lang).indexMeta.home;
  return { ...basis, title: { absolute: meta.title }, description: meta.description };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) notFound();
  return <HomePage lang={lang} />;
}
