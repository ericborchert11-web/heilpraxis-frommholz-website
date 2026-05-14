import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { KARRIERE } from '@/lib/karriere';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/leistungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/themen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/standorte`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/karriere`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/agb`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const leistungsPages: MetadataRoute.Sitemap = leistungenWithDetail().map((l) => ({
    url: `${SITE.url}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const themenPages: MetadataRoute.Sitemap = THEMEN.map((t) => ({
    url: `${SITE.url}/themen/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const standortPages: MetadataRoute.Sitemap = STANDORTE.map((s) => ({
    url: `${SITE.url}/standorte/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const karrierePages: MetadataRoute.Sitemap = KARRIERE.map((k) => ({
    url: `${SITE.url}/karriere/${k.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...leistungsPages, ...themenPages, ...standortPages, ...karrierePages];
}
