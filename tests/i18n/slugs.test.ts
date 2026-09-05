import { describe, it, expect } from 'vitest';
import { localizedHref, deHrefFrom } from '@/lib/i18n/slugs';
import { LOCALES } from '@/lib/i18n/config';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';

describe('localizedHref', () => {
  it('lässt deutsche Pfade unverändert', () => {
    expect(localizedHref('/leistungen', 'de')).toBe('/leistungen');
    expect(localizedHref('/', 'de')).toBe('/');
  });

  it('übersetzt die Startseite', () => {
    expect(localizedHref('/', 'en')).toBe('/en');
    expect(localizedHref('/', 'it')).toBe('/it');
  });

  it('übersetzt Segmentnamen', () => {
    expect(localizedHref('/leistungen', 'en')).toBe('/en/services');
    expect(localizedHref('/standorte', 'es')).toBe('/es/ubicaciones');
    expect(localizedHref('/themen', 'it')).toBe('/it/guide');
  });

  it('übersetzt Leistungs-Slugs', () => {
    expect(localizedHref('/leistungen/1-zu-1-betreuung-berlin', 'en')).toBe('/en/services/one-to-one-care-at-home-berlin');
  });

  it('kennt die an den Verein abgegebenen Seiten nicht mehr', () => {
    // Ohne Registereintrag fällt localizedHref auf die Sprachstartseite
    // zurück — genau das belegt, dass der Slug wirklich verschwunden ist.
    const abgegeben = [
      '/leistungen/sitzwachen-berlin',
      '/leistungen/hospiz-sitzwachen',
      '/leistungen/klinik-begleitung-berlin',
      '/themen/krankenhaus-begleitung',
      '/leistungen/reisebegleitung-senioren',
      '/leistungen/nachtwachen-berlin',
      '/themen/verhinderungspflege',
      '/themen/demenz-begleitung',
      '/themen/palliativ-zuhause',
    ];
    for (const pfad of abgegeben) {
      expect(localizedHref(pfad, 'en'), pfad).toBe('/en');
    }
  });

  it('lässt Ortsteil-Slugs unverändert — Eigennamen', () => {
    expect(localizedHref('/standorte/moabit', 'en')).toBe('/en/locations/moabit');
    expect(localizedHref('/standorte/moabit', 'it')).toBe('/it/sedi/moabit');
  });

  it('behält Anker bei', () => {
    expect(localizedHref('/#kontakt', 'en')).toBe('/en#kontakt');
    expect(localizedHref('/leistungen#faq', 'es')).toBe('/es/servicios#faq');
  });

  it('fällt bei nicht übersetzten Seiten auf die Sprachstartseite zurück', () => {
    expect(localizedHref('/karriere', 'en')).toBe('/en');
    expect(localizedHref('/impressum', 'en')).toBe('/en');
    expect(localizedHref('/karriere/pflegefachkraft', 'es')).toBe('/es');
  });
});

describe('deHrefFrom', () => {
  it('ist die Umkehrung von localizedHref', () => {
    const paths = ['/', '/leistungen', '/leistungen/1-zu-1-betreuung-berlin', '/standorte/moabit', '/themen/pflegegrad-beantragen', '/familienbereich'];
    for (const lang of LOCALES) {
      for (const p of paths) {
        expect(deHrefFrom(localizedHref(p, lang), lang)).toBe(p);
      }
    }
  });

  it('gibt deutsche Pfade unverändert zurück', () => {
    expect(deHrefFrom('/leistungen/1-zu-1-betreuung-berlin', 'de')).toBe('/leistungen/1-zu-1-betreuung-berlin');
  });
});

describe('Vollständigkeit der Slug-Tabellen', () => {
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

  it('behält alle Standort-Slugs unverändert', () => {
    for (const s of STANDORTE) {
      expect(localizedHref(`/standorte/${s.slug}`, 'en')).toBe(`/en/locations/${s.slug}`);
    }
  });
});
