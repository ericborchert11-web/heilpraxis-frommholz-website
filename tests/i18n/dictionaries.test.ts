import { describe, it, expect } from 'vitest';
import { getDictionary, hatUebersetzung } from '@/lib/i18n/dictionaries';
import { de } from '@/lib/i18n/dictionaries/de';
import { en } from '@/lib/i18n/dictionaries/en';
import { es } from '@/lib/i18n/dictionaries/es';
import { it as itDict } from '@/lib/i18n/dictionaries/it';

describe('getDictionary', () => {
  it('liefert das passende Wörterbuch', () => {
    expect(getDictionary('de')).toBe(de);
    expect(getDictionary('en')).toBe(en);
    expect(getDictionary('es')).toBe(es);
    expect(getDictionary('it')).toBe(itDict);
  });

  const keys = (obj: object, prefix = ''): string[] =>
    Object.entries(obj).flatMap(([k, v]) =>
      v !== null && typeof v === 'object' && !Array.isArray(v)
        ? keys(v, `${prefix}${k}.`)
        : [`${prefix}${k}`],
    );

  it.each([
    { lang: 'en', dict: en },
    { lang: 'es', dict: es },
    { lang: 'it', dict: itDict },
  ])('$lang hat exakt dieselben Schlüssel wie das deutsche Wörterbuch', ({ dict }) => {
    expect(keys(dict).sort()).toEqual(keys(de).sort());
  });

  it('enthält keine deutschen Restbestände im englischen Wörterbuch', () => {
    // Eigennamen bleiben in jeder Sprache stehen und werden vor der Prüfung
    // herausgeschnitten — „Leben Pflegen Reisen e.V." ist der eingetragene
    // Name des Partnervereins, nicht unübersetzter Fließtext.
    const EIGENNAMEN = ['Leben Pflegen Reisen e.V.'];
    let flat = JSON.stringify(en);
    for (const name of EIGENNAMEN) flat = flat.split(name).join('');

    for (const wort of ['Pflege', 'Beratung', 'Angehörige', 'Erstgespräch']) {
      expect(flat, `"${wort}" steht noch im englischen Wörterbuch`).not.toContain(wort);
    }
  });

  it('erkennt alle drei Übersetzungen als übersetzt, Deutsch nicht', () => {
    // Deutsch ist die Referenz, nicht eine Übersetzung.
    expect(hatUebersetzung('de')).toBe(false);
    for (const lang of ['en', 'es', 'it'] as const) {
      expect(hatUebersetzung(lang), `${lang} ist übersetzt`).toBe(true);
    }
  });
});
