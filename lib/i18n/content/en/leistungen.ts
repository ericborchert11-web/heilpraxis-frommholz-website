import type { Overlay } from '../types';
import type { Leistung } from '@/lib/leistungen';

/**
 * Englische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/en` weiterhin auf Deutsch.
 *
 * `slug`, `numeral`, `iconKey` und `href` bleiben unverändert: Der href ist ein
 * deutscher Referenzpfad und wird erst beim Rendern lokalisiert. `detail` ist
 * in der deutschen Quelle für alle sechs Einträge leer und bleibt es hier auch.
 */
const emptyDetail: Leistung['detail'] = {
  hero: { h1: '', lead: '' },
  wasWirTun: [],
  fuerWen: [],
  ablauf: [],
  faq: [],
};

export const LEISTUNGEN_EN: Overlay<Leistung> = {
  '24h-betreuung': {
    slug: '24h-betreuung',
    numeral: 'I.',
    title: 'Round-the-clock care',
    iconKey: 'clock',
    card: {
      lead: 'Continuous care and companionship in your own home, on a rotating-shift model. With a small, permanent team — so that trust has room to grow.',
    },
    href: '/leistungen/24-stunden-betreuung',
    detail: emptyDetail,
  },
  alltagsbegleitung: {
    slug: 'alltagsbegleitung',
    numeral: 'II.',
    title: 'Everyday support',
    iconKey: 'home',
    card: {
      lead: 'Help with daily life by the hour — shopping, medical appointments, walks, company. Booked flexibly, from a single hour to a full day.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
  verhinderungspflege: {
    slug: 'verhinderungspflege',
    numeral: 'III.',
    title: 'Respite care (Verhinderungspflege)',
    iconKey: 'rotate',
    card: {
      lead: 'For when a family carer needs time away — a holiday, an illness, or simply room to breathe. We take over, reliably.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
  pflegeberatung: {
    slug: 'pflegeberatung',
    numeral: 'IV.',
    title: 'Care advice',
    iconKey: 'document',
    card: {
      lead: 'Independent advice on care levels (Pflegegrade), benefit entitlements and funding. We help you find your way through the system — clearly, and without being rushed.',
    },
    href: '/leistungen/pflegeberatung-berlin',
    detail: emptyDetail,
  },
  inklusionsberatung: {
    slug: 'inklusionsberatung',
    numeral: 'V.',
    title: 'Inclusion advice',
    iconKey: 'people',
    card: {
      lead: 'Drawn from many years of practice in participation and assistance: advice on participation benefits, assistive equipment and personal assistance — for people with disabilities and their families.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
};
