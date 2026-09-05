import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { WEITERLEITUNGEN } from '@/lib/weiterleitungen';
import { proxy } from '@/proxy';

function anfrage(pfad: string) {
  return new NextRequest(new URL(`https://heilpraxis-frommholz.de${pfad}`));
}

describe('301 auf den Verein', () => {
  it('deckt neun Seiten in vier Sprachen ab — 36 Adressen', () => {
    // 4 alte Krankenhaus-Adressen + 5 neue, jeweils de/en/es/it.
    expect(Object.keys(WEITERLEITUNGEN)).toHaveLength(36);
  });

  it('zeigt ausschließlich auf Adressen des Vereins', () => {
    for (const [pfad, ziel] of Object.entries(WEITERLEITUNGEN)) {
      expect(ziel, pfad).toMatch(/^https:\/\/lebenpflegenreisen\.de\/[a-z-]+\/$/);
    }
  });

  it('antwortet auf jede Adresse mit 301 und dem hinterlegten Ziel', () => {
    for (const [pfad, ziel] of Object.entries(WEITERLEITUNGEN)) {
      const antwort = proxy(anfrage(pfad));
      expect(antwort.status, pfad).toBe(301);
      expect(antwort.headers.get('location'), pfad).toBe(ziel);
    }
  });

  it('leitet auch mit abschließendem Schrägstrich weiter', () => {
    for (const pfad of Object.keys(WEITERLEITUNGEN)) {
      expect(proxy(anfrage(`${pfad}/`)).status, pfad).toBe(301);
    }
  });

  it('schickt die vier Sprachfassungen auf dasselbe deutsche Ziel', () => {
    expect(WEITERLEITUNGEN['/leistungen/sitzwachen-berlin']).toBe(
      WEITERLEITUNGEN['/en/services/bedside-companion-berlin'],
    );
    expect(WEITERLEITUNGEN['/themen/verhinderungspflege']).toBe(
      WEITERLEITUNGEN['/it/guide/assistenza-sostitutiva'],
    );
  });

  it('trifft die in der Spec festgelegten Ziele', () => {
    expect(WEITERLEITUNGEN['/leistungen/sitzwachen-berlin']).toBe('https://lebenpflegenreisen.de/sitzwachen/');
    expect(WEITERLEITUNGEN['/leistungen/hospiz-sitzwachen']).toBe('https://lebenpflegenreisen.de/beistand-lebensende/');
    expect(WEITERLEITUNGEN['/leistungen/klinik-begleitung-berlin']).toBe('https://lebenpflegenreisen.de/sitzwache-krankenhaus/');
    expect(WEITERLEITUNGEN['/themen/krankenhaus-begleitung']).toBe('https://lebenpflegenreisen.de/sitzwache-krankenhaus/');
    expect(WEITERLEITUNGEN['/leistungen/reisebegleitung-senioren']).toBe('https://lebenpflegenreisen.de/betreute-seniorenreisen/');
    expect(WEITERLEITUNGEN['/leistungen/nachtwachen-berlin']).toBe('https://lebenpflegenreisen.de/nachtwache-krankenhaus/');
    expect(WEITERLEITUNGEN['/themen/verhinderungspflege']).toBe('https://lebenpflegenreisen.de/verhinderungspflege/');
    expect(WEITERLEITUNGEN['/themen/demenz-begleitung']).toBe('https://lebenpflegenreisen.de/sitzwache-demenz/');
    expect(WEITERLEITUNGEN['/themen/palliativ-zuhause']).toBe('https://lebenpflegenreisen.de/beistand-lebensende/');
  });

  it('lässt lebende Adressen durch', () => {
    const lebend = [
      '/',
      '/leistungen',
      '/themen',
      '/leistungen/1-zu-1-betreuung-berlin',
      '/leistungen/24-stunden-betreuung',
      '/themen/pflegegrad-beantragen',
      '/en/services/one-to-one-care-at-home-berlin',
      '/es/servicios/atencion-individual-en-casa-berlin',
      '/it/servizi/assistenza-individuale-a-domicilio-berlino',
    ];
    for (const pfad of lebend) {
      expect(proxy(anfrage(pfad)).status, pfad).not.toBe(301);
    }
  });
});
