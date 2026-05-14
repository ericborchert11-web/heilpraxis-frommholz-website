export const SITE = {
  name: 'Heilpraxis Frommholz',
  legalName: 'Heilpraxis Frommholz – Inh. Simeon Frommholz',
  tagline: 'Pflege · Beratung · Begleitung',
  description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland. Stundenweise bis 24/7. Mit Erfahrung, Sorgfalt und Haltung.',
  url: 'https://heilpraxis-frommholz.de',
  defaultOgImage: '/og-default.jpg',
  priceRange: '€€€',
} as const;

export const BUSINESS = {
  owner: 'Simeon Frommholz',
  jobTitle: 'Heilpraktiker & Inhaber',
  address: {
    street: 'Stephanstr. 46',
    streetLong: 'Stephanstraße 46',
    zip: '10559',
    city: 'Berlin',
    region: 'Berlin',
    country: 'DE',
    countryName: 'Deutschland',
    district: 'Mitte',
    ortsteil: 'Moabit',
  },
  geo: { lat: 52.5349, lng: 13.3432 },
  phone: '+4915114140251',
  phoneDisplay: '0151 14140251',
  email: 'simeon@heilpraxis-frommholz.de',
  hours: {
    weekdays: { opens: '08:00', closes: '16:30' },
    label: 'Mo–Fr 08:00–16:30',
  },
  // Pflegerische Bereitschaft: 24/7 (siehe FAQ + JSON-LD)
  reachability: 'Mo–So 00:00–23:59',
  beruf: {
    bezeichnung: 'Heilpraktiker',
    verliehenIn: 'Berlin',
    aufsichtsbehoerde: 'Bezirksamt Mitte von Berlin, Amt für Gesundheit',
    aufsichtsbehoerdeAdresse: 'Müllerstraße 146-147, 13353 Berlin',
    rechtsgrundlage: 'Heilpraktikergesetz (HeilprG) sowie 1. DVO zum HeilprG',
    rechtsgrundlageUrl: 'https://www.gesetze-im-internet.de/heilprg/',
  },
  ustBefreiung: '§ 4 Nr. 14 UStG (Heilbehandlungen) und § 4 Nr. 16 UStG (pflegerische Leistungen)',
  versicherung: {
    // Sobald Eric die Daten liefert, hier eintragen
    name: '[wird nachgereicht]',
    geltungsraum: 'Deutschland',
  },
} as const;

export const SERVICE_AREAS = ['Berlin', 'Moabit', 'Tiergarten', 'Mitte', 'Charlottenburg', 'Wilmersdorf', 'Westend', 'Grunewald', 'Zehlendorf', 'Dahlem', 'Schmargendorf'] as const;

// UWG § 5 Schutzschalter — bewusste, sichtbare Aktivierung vor Go-Live nötig
export const SHOW_TESTIMONIALS = false;
