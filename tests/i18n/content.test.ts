import { describe, it, expect } from 'vitest';
import { getLeistungenSeo, getThemen, getStandorte, getLeistungen, getGlobalFaq } from '@/lib/i18n/content';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { LEISTUNGEN } from '@/lib/leistungen';
import { GLOBAL_FAQ } from '@/lib/faq-global';

describe('Rückfall auf Deutsch', () => {
  it('liefert für Deutsch exakt die Quelldaten', () => {
    expect(getLeistungenSeo('de')).toEqual(LEISTUNGEN_SEO);
    expect(getThemen('de')).toEqual(THEMEN);
    expect(getStandorte('de')).toEqual(STANDORTE);
    expect(getLeistungen('de')).toEqual(LEISTUNGEN);
    expect(getGlobalFaq('de')).toEqual(GLOBAL_FAQ);
  });

  it('liefert für Spanisch und Italienisch die deutschen Daten', () => {
    for (const lang of ['es', 'it'] as const) {
      expect(getLeistungenSeo(lang)).toEqual(LEISTUNGEN_SEO);
      expect(getThemen(lang)).toEqual(THEMEN);
      expect(getStandorte(lang)).toEqual(STANDORTE);
    }
  });
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
