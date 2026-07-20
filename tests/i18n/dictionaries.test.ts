import { describe, it, expect } from 'vitest';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { de } from '@/lib/i18n/dictionaries/de';
import { en } from '@/lib/i18n/dictionaries/en';

describe('getDictionary', () => {
  it('liefert das passende Woerterbuch', () => {
    expect(getDictionary('de')).toBe(de);
    expect(getDictionary('en')).toBe(en);
  });

  it('faellt fuer noch nicht uebersetzte Sprachen auf Deutsch zurueck', () => {
    expect(getDictionary('es')).toBe(de);
    expect(getDictionary('it')).toBe(de);
  });

  it('das englische Woerterbuch hat exakt dieselben Schluessel wie das deutsche', () => {
    const keys = (obj: object, prefix = ''): string[] =>
      Object.entries(obj).flatMap(([k, v]) =>
        v !== null && typeof v === 'object' && !Array.isArray(v)
          ? keys(v, `${prefix}${k}.`)
          : [`${prefix}${k}`],
      );
    expect(keys(en).sort()).toEqual(keys(de).sort());
  });

  it('enthaelt keine deutschen Restbestaende im englischen Woerterbuch', () => {
    const flat = JSON.stringify(en);
    for (const wort of ['Pflege', 'Beratung', 'Angehörige', 'Erstgespräch']) {
      expect(flat, `"${wort}" steht noch im englischen Woerterbuch`).not.toContain(wort);
    }
  });
});
