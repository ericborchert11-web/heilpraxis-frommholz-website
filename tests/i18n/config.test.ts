import { describe, it, expect } from 'vitest';
import { LOCALES, INTL_LOCALES, DEFAULT_LOCALE, isLocale, isIntlLocale, OG_LOCALE } from '@/lib/i18n/config';

describe('locale config', () => {
  it('kennt genau vier Sprachen, Deutsch als Standard', () => {
    expect(LOCALES).toEqual(['de', 'en', 'es', 'it']);
    expect(DEFAULT_LOCALE).toBe('de');
  });

  it('INTL_LOCALES ist LOCALES ohne Deutsch', () => {
    expect(INTL_LOCALES).toEqual(['en', 'es', 'it']);
  });

  it('isLocale erkennt gueltige und ungueltige Werte', () => {
    expect(isLocale('de')).toBe(true);
    expect(isLocale('it')).toBe(true);
    expect(isLocale('fr')).toBe(false);
    expect(isLocale('leistungen')).toBe(false);
  });

  it('isIntlLocale schliesst Deutsch aus', () => {
    expect(isIntlLocale('en')).toBe(true);
    expect(isIntlLocale('de')).toBe(false);
  });

  it('liefert je Sprache einen OpenGraph-Code', () => {
    expect(OG_LOCALE.de).toBe('de_DE');
    expect(OG_LOCALE.en).toBe('en_GB');
    expect(OG_LOCALE.es).toBe('es_ES');
    expect(OG_LOCALE.it).toBe('it_IT');
  });
});
