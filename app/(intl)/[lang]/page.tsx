import { notFound } from 'next/navigation';
import { HomePage } from '@/components/pages/HomePage';
import { isIntlLocale } from '@/lib/i18n/config';
import { intlPageMeta } from '@/lib/site-config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) return {};
  return intlPageMeta('/', lang);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) notFound();
  return <HomePage lang={lang} />;
}
