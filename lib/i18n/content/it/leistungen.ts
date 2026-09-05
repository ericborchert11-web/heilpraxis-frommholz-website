import type { Overlay } from '../types';
import type { Leistung } from '@/lib/leistungen';

/**
 * Versioni italiane, indicizzate secondo lo slug tedesco. Ciò che manca qui
 * continua ad apparire in tedesco su `/it`.
 *
 * `slug`, `numeral`, `iconKey` e `href` restano invariati: l’href è un percorso
 * di riferimento tedesco e viene localizzato solo al momento del rendering.
 * `detail` è vuoto per tutte e sei le voci nella fonte tedesca e rimane vuoto
 * anche qui.
 */
const emptyDetail: Leistung['detail'] = {
  hero: { h1: '', lead: '' },
  wasWirTun: [],
  fuerWen: [],
  ablauf: [],
  faq: [],
};

export const LEISTUNGEN_IT: Overlay<Leistung> = {
  '24h-betreuung': {
    slug: '24h-betreuung',
    numeral: 'I.',
    title: 'Assistenza continuativa 24 ore su 24',
    iconKey: 'clock',
    card: {
      lead: 'Assistenza e accompagnamento continui nel proprio domicilio, secondo un modello a turni avvicendati. Con un team piccolo e stabile — perché la fiducia abbia lo spazio per crescere.',
    },
    href: '/leistungen/24-stunden-betreuung',
    detail: emptyDetail,
  },
  alltagsbegleitung: {
    slug: 'alltagsbegleitung',
    numeral: 'II.',
    title: 'Accompagnamento quotidiano',
    iconKey: 'home',
    card: {
      lead: 'Aiuto nella vita di tutti i giorni a ore — spesa, visite mediche, passeggiate, compagnia. Prenotabile in modo flessibile, da una sola ora all’intera giornata.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
  verhinderungspflege: {
    slug: 'verhinderungspflege',
    numeral: 'III.',
    title: 'Assistenza sostitutiva (Verhinderungspflege)',
    iconKey: 'rotate',
    card: {
      lead: 'Per quando un familiare che assiste ha bisogno di una pausa — una vacanza, una malattia, o semplicemente un momento per respirare. Subentriamo noi, con affidabilità.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
  pflegeberatung: {
    slug: 'pflegeberatung',
    numeral: 'IV.',
    title: 'Consulenza sull’assistenza',
    iconKey: 'document',
    card: {
      lead: 'Consulenza indipendente sui livelli di assistenza (Pflegegrade), sui diritti alle prestazioni e sul finanziamento. La aiutiamo a orientarsi nel sistema — in modo comprensibile e con calma.',
    },
    href: '/leistungen/pflegeberatung-berlin',
    detail: emptyDetail,
  },
  inklusionsberatung: {
    slug: 'inklusionsberatung',
    numeral: 'V.',
    title: 'Consulenza sull’inclusione',
    iconKey: 'people',
    card: {
      lead: 'Frutto di molti anni di pratica nella partecipazione e nell’assistenza personale: consulenza su prestazioni per la partecipazione, ausili e assistenza personale — per persone con disabilità e le loro famiglie.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
};
