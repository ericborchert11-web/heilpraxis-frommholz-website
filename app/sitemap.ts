import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { KARRIERE } from '@/lib/karriere';

// Bewusst statisch statt `new Date()` — sonst meldet jeder Deploy ALLE URLs als
// frisch geändert, was bei einer jungen, noch wenig gecrawlten Domain schadet.
// Dieses Datum nur bewusst hochsetzen, wenn sich Inhalte tatsächlich ändern
// (ideal wäre langfristig ein echtes updatedAt je Inhalt).
const LAST_MODIFIED = new Date('2026-07-17');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/leistungen`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/themen`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/standorte`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/karriere`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/soziales-engagement`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE.url}/familienbereich`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/impressum`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/datenschutz`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/agb`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const leistungsPages: MetadataRoute.Sitemap = leistungenWithDetail().map((l) => ({
    url: `${SITE.url}/leistungen/${l.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const themenPages: MetadataRoute.Sitemap = THEMEN.map((t) => ({
    url: `${SITE.url}/themen/${t.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const standortPages: MetadataRoute.Sitemap = STANDORTE.map((s) => ({
    url: `${SITE.url}/standorte/${s.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const karrierePages: MetadataRoute.Sitemap = KARRIERE.map((k) => ({
    url: `${SITE.url}/karriere/${k.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...leistungsPages, ...themenPages, ...standortPages, ...karrierePages];
}
