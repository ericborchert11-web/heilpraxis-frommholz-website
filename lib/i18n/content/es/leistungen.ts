import type { Overlay } from '../types';
import type { Leistung } from '@/lib/leistungen';

/**
 * Spanische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/es` weiterhin auf Deutsch.
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

export const LEISTUNGEN_ES: Overlay<Leistung> = {
  '24h-betreuung': {
    slug: '24h-betreuung',
    numeral: 'I.',
    title: 'Atención las veinticuatro horas',
    iconKey: 'clock',
    card: {
      lead: 'Cuidado y acompañamiento continuos en el propio hogar, en un modelo de turnos rotativos. Con un equipo reducido y estable — para que la confianza pueda crecer.',
    },
    href: '/leistungen/24-stunden-betreuung',
    detail: emptyDetail,
  },
  alltagsbegleitung: {
    slug: 'alltagsbegleitung',
    numeral: 'II.',
    title: 'Acompañamiento en el día a día',
    iconKey: 'home',
    card: {
      lead: 'Ayuda en la vida cotidiana por horas — compras, citas médicas, paseos, compañía. Reservable con flexibilidad, desde una sola hora hasta el día completo.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
  verhinderungspflege: {
    slug: 'verhinderungspflege',
    numeral: 'III.',
    title: 'Cuidado de sustitución (Verhinderungspflege)',
    iconKey: 'rotate',
    card: {
      lead: 'Para cuando un familiar cuidador necesita un respiro — unas vacaciones, una enfermedad o, sencillamente, un momento para tomar aliento. Nosotros asumimos el relevo, con toda fiabilidad.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
  pflegeberatung: {
    slug: 'pflegeberatung',
    numeral: 'IV.',
    title: 'Asesoramiento en materia de cuidados',
    iconKey: 'document',
    card: {
      lead: 'Asesoramiento independiente sobre los grados de dependencia (Pflegegrade), los derechos a prestaciones y la financiación. Le ayudamos a orientarse en el sistema — de forma comprensible y sin prisas.',
    },
    href: '/leistungen/pflegeberatung-berlin',
    detail: emptyDetail,
  },
  inklusionsberatung: {
    slug: 'inklusionsberatung',
    numeral: 'V.',
    title: 'Asesoramiento en materia de inclusión',
    iconKey: 'people',
    card: {
      lead: 'Fruto de muchos años de práctica en participación y asistencia: asesoramiento sobre prestaciones de participación, ayudas técnicas y asistencia personal — para personas con discapacidad y sus familias.',
    },
    href: '/leistungen',
    detail: emptyDetail,
  },
};
