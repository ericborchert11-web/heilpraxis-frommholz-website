import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { KARRIERE } from '@/lib/karriere';
import { LOCALES } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/slugs';

// Bewusst statisch statt `new Date()` — sonst meldet jeder Deploy ALLE URLs als
// frisch geändert, was bei einer jungen, noch wenig gecrawlten Domain schadet.
// Dieses Datum nur bewusst hochsetzen, wenn sich Inhalte tatsächlich ändern.
const LAST_MODIFIED = new Date('2026-07-20');

type Entry = { dePath: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number };

/** Seiten, die es in allen vier Sprachen gibt. */
const TRANSLATED: Entry[] = [
  { dePath: '/', changeFrequency: 'weekly', priority: 1.0 },
  { dePath: '/leistungen', changeFrequency: 'monthly', priority: 0.9 },
  { dePath: '/themen', changeFrequency: 'monthly', priority: 0.8 },
  { dePath: '/standorte', changeFrequency: 'monthly', priority: 0.8 },
  { dePath: '/soziales-engagement', changeFrequency: 'yearly', priority: 0.5 },
  { dePath: '/familienbereich', changeFrequency: 'monthly', priority: 0.6 },
  ...leistungenWithDetail().map((l) => ({ dePath: `/leistungen/${l.slug}`, changeFrequency: 'monthly' as const, priority: 0.9 })),
  ...THEMEN.map((t) => ({ dePath: `/themen/${t.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ...STANDORTE.map((s) => ({ dePath: `/standorte/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
];

/** Nur auf Deutsch vorhanden — bewusst ohne Sprachfassungen. */
const GERMAN_ONLY: Entry[] = [
  { dePath: '/karriere', changeFrequency: 'monthly', priority: 0.7 },
  { dePath: '/impressum', changeFrequency: 'yearly', priority: 0.3 },
  { dePath: '/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
  { dePath: '/agb', changeFrequency: 'yearly', priority: 0.3 },
  ...KARRIERE.map((k) => ({ dePath: `/karriere/${k.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
];

function url(dePath: string, lang: (typeof LOCALES)[number]): string {
  const path = localizedHref(dePath, lang);
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const translated = TRANSLATED.flatMap((e) =>
    LOCALES.map((lang) => ({
      url: url(e.dePath, lang),
      lastModified: LAST_MODIFIED,
      changeFrequency: e.changeFrequency,
      // Übersetzte Fassungen etwas niedriger — Deutsch bleibt die Hauptfassung.
      priority: lang === 'de' ? e.priority : Math.max(0.1, e.priority - 0.1),
    })),
  );

  const germanOnly = GERMAN_ONLY.map((e) => ({
    url: `${SITE.url}${e.dePath}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  return [...translated, ...germanOnly];
}
