import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { SeoDetailContent } from '@/components/SeoDetailContent';
import { getThema } from '@/lib/themen';
import type { Locale } from '@/lib/i18n/config';

/** `slug` ist immer der deutsche Slug — übersetzte Slugs werden vorher zurückgerechnet. */
export function ThemaDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
  // lang wird ab Aufgabe 12 für die Übersetzung gebraucht.
  void lang;
  const t = getThema(slug);
  if (!t) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: '/' },
    { name: 'Themen', href: '/themen' },
    { name: t.title, href: `/themen/${t.slug}` },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {t.h1}
      </h1>
      <SeoDetailContent detail={t.detail} />
      <FaqJsonLd items={t.detail.faq} />
    </article>
  );
}
