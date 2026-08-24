import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { middleware } from '@/middleware';

function anfrage(pfad: string) {
  return new NextRequest(new URL(`https://heilpraxis-frommholz.de${pfad}`));
}

describe('410 für die entfernten Krankenhaus-Seiten', () => {
  const entfernt = [
    '/leistungen/sitzwachen-berlin',
    '/leistungen/hospiz-sitzwachen',
    '/leistungen/klinik-begleitung-berlin',
    '/themen/krankenhaus-begleitung',
    '/en/services/bedside-companion-berlin',
    '/en/services/hospice-companion-care',
    '/en/services/hospital-companion-berlin',
    '/en/guides/hospital-support',
    '/es/servicios/acompanamiento-al-paciente-berlin',
    '/es/servicios/acompanamiento-en-hospicio',
    '/es/servicios/acompanamiento-hospitalario-berlin',
    '/es/guias/acompanamiento-hospitalario',
    '/it/servizi/assistenza-al-capezzale-berlino',
    '/it/servizi/accompagnamento-in-hospice',
    '/it/servizi/accompagnamento-ospedaliero-berlino',
    '/it/guide/accompagnamento-ospedaliero',
  ];

  it('deckt alle vier Pfade in allen vier Sprachen ab', () => {
    expect(entfernt).toHaveLength(16);
  });

  it('beantwortet jede entfernte Adresse mit 410', () => {
    for (const pfad of entfernt) {
      expect(middleware(anfrage(pfad)).status, pfad).toBe(410);
    }
  });

  it('beantwortet sie auch mit abschließendem Schrägstrich mit 410', () => {
    for (const pfad of entfernt) {
      expect(middleware(anfrage(`${pfad}/`)).status, pfad).toBe(410);
    }
  });

  it('lässt lebende Adressen durch', () => {
    const lebend = [
      '/',
      '/leistungen',
      '/leistungen/1-zu-1-betreuung-berlin',
      '/leistungen/nachtwachen-berlin',
      '/themen/palliativ-zuhause',
      '/en/services/one-to-one-care-at-home-berlin',
      '/en/services/night-care-berlin',
      '/es/servicios/atencion-individual-en-casa-berlin',
      '/it/servizi/assistenza-individuale-a-domicilio-berlino',
    ];
    for (const pfad of lebend) {
      expect(middleware(anfrage(pfad)).status, pfad).not.toBe(410);
    }
  });
});
