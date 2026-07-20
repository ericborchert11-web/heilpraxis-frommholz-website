import { describe, it, expect } from 'vitest';
import { localizedHref, deHrefFrom } from '@/lib/i18n/slugs';
import { LOCALES } from '@/lib/i18n/config';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';

describe('localizedHref', () => {
  it('laesst deutsche Pfade unveraendert', () => {
    expect(localizedHref('/leistungen', 'de')).toBe('/leistungen');
    expect(localizedHref('/', 'de')).toBe('/');
  });

  it('uebersetzt die Startseite', () => {
    expect(localizedHref('/', 'en')).toBe('/en');
    expect(localizedHref('/', 'it')).toBe('/it');
  });

  it('uebersetzt Segmentnamen', () => {
    expect(localizedHref('/leistungen', 'en')).toBe('/en/services');
    expect(localizedHref('/standorte', 'es')).toBe('/es/ubicaciones');
    expect(localizedHref('/themen', 'it')).toBe('/it/guide');
  });

  it('uebersetzt Leistungs-Slugs', () => {
    expect(localizedHref('/leistungen/sitzwachen-berlin', 'en')).toBe('/en/services/bedside-companion-berlin');
  });

  it('laesst Ortsteil-Slugs unveraendert — Eigennamen', () => {
    expect(localizedHref('/standorte/moabit', 'en')).toBe('/en/locations/moabit');
    expect(localizedHref('/standorte/moabit', 'it')).toBe('/it/sedi/moabit');
  });

  it('behaelt Anker bei', () => {
    expect(localizedHref('/#kontakt', 'en')).toBe('/en#kontakt');
    expect(localizedHref('/leistungen#faq', 'es')).toBe('/es/servicios#faq');
  });

  it('faellt bei nicht uebersetzten Seiten auf die Sprachstartseite zurueck', () => {
    expect(localizedHref('/karriere', 'en')).toBe('/en');
    expect(localizedHref('/impressum', 'en')).toBe('/en');
    expect(localizedHref('/karriere/pflegefachkraft', 'es')).toBe('/es');
  });
});

describe('deHrefFrom', () => {
  it('ist die Umkehrung von localizedHref', () => {
    const paths = ['/', '/leistungen', '/leistungen/sitzwachen-berlin', '/standorte/moabit', '/themen/demenz-begleitung', '/familienbereich'];
    for (const lang of LOCALES) {
      for (const p of paths) {
        expect(deHrefFrom(localizedHref(p, lang), lang)).toBe(p);
      }
    }
  });

  it('gibt deutsche Pfade unveraendert zurueck', () => {
    expect(deHrefFrom('/leistungen/sitzwachen-berlin', 'de')).toBe('/leistungen/sitzwachen-berlin');
  });
});

describe('Vollstaendigkeit der Slug-Tabellen', () => {
  it('kennt jeden SEO-Leistungs-Slug in jeder Sprache', () => {
    for (const lang of LOCALES) {
      for (const l of LEISTUNGEN_SEO) {
        const href = localizedHref(`/leistungen/${l.slug}`, lang);
        expect(href, `${lang}/${l.slug}`).not.toBe(`/${lang}`);
      }
    }
  });

  it('kennt jeden Themen-Slug in jeder Sprache', () => {
    for (const lang of LOCALES) {
      for (const t of THEMEN) {
        const href = localizedHref(`/themen/${t.slug}`, lang);
        expect(href, `${lang}/${t.slug}`).not.toBe(`/${lang}`);
      }
    }
  });

  it('erzeugt je Sprache eindeutige Leistungs- und Themen-Slugs', () => {
    for (const lang of LOCALES) {
      const leistung = LEISTUNGEN_SEO.map((l) => localizedHref(`/leistungen/${l.slug}`, lang));
      expect(new Set(leistung).size, `${lang} Leistungen`).toBe(leistung.length);
      const themen = THEMEN.map((t) => localizedHref(`/themen/${t.slug}`, lang));
      expect(new Set(themen).size, `${lang} Themen`).toBe(themen.length);
    }
  });

  it('behaelt alle Standort-Slugs unveraendert', () => {
    for (const s of STANDORTE) {
      expect(localizedHref(`/standorte/${s.slug}`, 'en')).toBe(`/en/locations/${s.slug}`);
    }
  });
});
