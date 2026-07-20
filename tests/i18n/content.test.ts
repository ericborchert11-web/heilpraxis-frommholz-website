import { describe, it, expect } from 'vitest';
import { getLeistungenSeo, getThemen, getStandorte, getLeistungen, getGlobalFaq } from '@/lib/i18n/content';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { LEISTUNGEN } from '@/lib/leistungen';
import { GLOBAL_FAQ } from '@/lib/faq-global';
import { LEISTUNGEN_SEO_EN } from '@/lib/i18n/content/en/leistungen-seo';
import { THEMEN_EN } from '@/lib/i18n/content/en/themen';
import { STANDORTE_EN } from '@/lib/i18n/content/en/standorte';
import { LEISTUNGEN_EN } from '@/lib/i18n/content/en/leistungen';
import { LEISTUNGEN_SEO_ES } from '@/lib/i18n/content/es/leistungen-seo';
import { THEMEN_ES } from '@/lib/i18n/content/es/themen';
import { STANDORTE_ES } from '@/lib/i18n/content/es/standorte';
import { LEISTUNGEN_ES } from '@/lib/i18n/content/es/leistungen';
import { LEISTUNGEN_SEO_IT } from '@/lib/i18n/content/it/leistungen-seo';
import { THEMEN_IT } from '@/lib/i18n/content/it/themen';
import { STANDORTE_IT } from '@/lib/i18n/content/it/standorte';
import { LEISTUNGEN_IT } from '@/lib/i18n/content/it/leistungen';

describe('Rückfall auf Deutsch', () => {
  it('liefert für Deutsch exakt die Quelldaten', () => {
    expect(getLeistungenSeo('de')).toEqual(LEISTUNGEN_SEO);
    expect(getThemen('de')).toEqual(THEMEN);
    expect(getStandorte('de')).toEqual(STANDORTE);
    expect(getLeistungen('de')).toEqual(LEISTUNGEN);
    expect(getGlobalFaq('de')).toEqual(GLOBAL_FAQ);
  });

});

describe('Alle Sprachen sind vollständig übersetzt', () => {
  // Identität statt Inhalt: der Rückfall in `merge` gibt bei fehlender
  // Übersetzung exakt das deutsche Objekt zurück. Ein Eintrag, der === dem
  // deutschen ist, wurde also nie übersetzt. Nach Etappe 2–4 darf das für
  // keine der drei Sprachen mehr vorkommen.
  for (const lang of ['en', 'es', 'it'] as const) {
    it(`${lang}: jede Leistung, jedes Thema, jeder Standort, jede Karte und die FAQ`, () => {
      getLeistungenSeo(lang).forEach((l, i) => {
        expect(l, `${lang}: Leistung ${l.slug} fehlt`).not.toBe(LEISTUNGEN_SEO[i]);
      });
      getThemen(lang).forEach((t, i) => {
        expect(t, `${lang}: Thema ${t.slug} fehlt`).not.toBe(THEMEN[i]);
      });
      getStandorte(lang).forEach((s, i) => {
        expect(s, `${lang}: Standort ${s.slug} fehlt`).not.toBe(STANDORTE[i]);
      });
      getLeistungen(lang).forEach((l, i) => {
        expect(l, `${lang}: Karte ${l.slug} fehlt`).not.toBe(LEISTUNGEN[i]);
      });
      expect(getGlobalFaq(lang), `${lang}: FAQ fehlt`).not.toBe(GLOBAL_FAQ);
    });
  }
});

describe('Reihenfolge und Vollständigkeit', () => {
  it('behält für jede Sprache Anzahl und Reihenfolge der Slugs bei', () => {
    for (const lang of ['de', 'en', 'es', 'it'] as const) {
      expect(getLeistungenSeo(lang).map((l) => l.slug)).toEqual(LEISTUNGEN_SEO.map((l) => l.slug));
      expect(getThemen(lang).map((t) => t.slug)).toEqual(THEMEN.map((t) => t.slug));
      expect(getStandorte(lang).map((s) => s.slug)).toEqual(STANDORTE.map((s) => s.slug));
      expect(getLeistungen(lang).map((l) => l.slug)).toEqual(LEISTUNGEN.map((l) => l.slug));
    }
  });

  it('lässt slug, geo, plz und Icon-Schlüssel unübersetzt', () => {
    const de = getStandorte('de');
    getStandorte('en').forEach((s, i) => {
      expect(s.slug).toBe(de[i].slug);
      expect(s.geo).toEqual(de[i].geo);
      expect(s.plz).toEqual(de[i].plz);
    });
    const deL = getLeistungen('de');
    getLeistungen('en').forEach((l, i) => {
      expect(l.iconKey).toBe(deL[i].iconKey);
      expect(l.numeral).toBe(deL[i].numeral);
    });
  });
});

describe('Überlagerungs-Schlüssel zeigen auf echte Einträge', () => {
  // Ein vertippter Slug in einer Übersetzungsdatei würde sonst stillschweigend
  // ignoriert — der Eintrag bliebe deutsch, ohne dass irgendetwas fehlschlägt.
  const faelle = [
    { name: 'en/leistungen-seo', overlay: LEISTUNGEN_SEO_EN, quelle: LEISTUNGEN_SEO },
    { name: 'en/themen', overlay: THEMEN_EN, quelle: THEMEN },
    { name: 'en/standorte', overlay: STANDORTE_EN, quelle: STANDORTE },
    { name: 'en/leistungen', overlay: LEISTUNGEN_EN, quelle: LEISTUNGEN },
    { name: 'es/leistungen-seo', overlay: LEISTUNGEN_SEO_ES, quelle: LEISTUNGEN_SEO },
    { name: 'es/themen', overlay: THEMEN_ES, quelle: THEMEN },
    { name: 'es/standorte', overlay: STANDORTE_ES, quelle: STANDORTE },
    { name: 'es/leistungen', overlay: LEISTUNGEN_ES, quelle: LEISTUNGEN },
    { name: 'it/leistungen-seo', overlay: LEISTUNGEN_SEO_IT, quelle: LEISTUNGEN_SEO },
    { name: 'it/themen', overlay: THEMEN_IT, quelle: THEMEN },
    { name: 'it/standorte', overlay: STANDORTE_IT, quelle: STANDORTE },
    { name: 'it/leistungen', overlay: LEISTUNGEN_IT, quelle: LEISTUNGEN },
  ];

  it.each(faelle)('$name: jeder Schlüssel existiert auf Deutsch', ({ overlay, quelle }) => {
    const bekannt = new Set(quelle.map((e) => e.slug));
    for (const key of Object.keys(overlay)) {
      expect(bekannt.has(key), `Slug "${key}" gibt es in der deutschen Quelle nicht`).toBe(true);
    }
  });

  it.each(faelle)('$name: der Eintrag behält seinen Slug', ({ overlay }) => {
    for (const [key, eintrag] of Object.entries(overlay)) {
      expect(eintrag?.slug, `Eintrag "${key}" trägt einen abweichenden slug`).toBe(key);
    }
  });
});

