import { describe, it, expect } from 'vitest';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { de } from '@/lib/i18n/dictionaries/de';
import { en } from '@/lib/i18n/dictionaries/en';

describe('getDictionary', () => {
  it('liefert das passende Wörterbuch', () => {
    expect(getDictionary('de')).toBe(de);
    expect(getDictionary('en')).toBe(en);
  });

  it('fällt für noch nicht übersetzte Sprachen auf Deutsch zurück', () => {
    expect(getDictionary('es')).toBe(de);
    expect(getDictionary('it')).toBe(de);
  });

  it('das englische Wörterbuch hat exakt dieselben Schlüssel wie das deutsche', () => {
    const keys = (obj: object, prefix = ''): string[] =>
      Object.entries(obj).flatMap(([k, v]) =>
        v !== null && typeof v === 'object' && !Array.isArray(v)
          ? keys(v, `${prefix}${k}.`)
          : [`${prefix}${k}`],
      );
    expect(keys(en).sort()).toEqual(keys(de).sort());
  });

  it('enthält keine deutschen Restbestände im englischen Wörterbuch', () => {
    const flat = JSON.stringify(en);
    for (const wort of ['Pflege', 'Beratung', 'Angehörige', 'Erstgespräch']) {
      expect(flat, `"${wort}" steht noch im englischen Wörterbuch`).not.toContain(wort);
    }
  });
});
