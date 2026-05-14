export const SITE = {
  name: 'Heilpraxis Frommholz',
  tagline: 'Pflege · Beratung · Begleitung',
  description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland. Stundenweise bis 24/7. Mit Erfahrung, Sorgfalt und Haltung.',
  url: 'https://heilpraxis-frommholz.de',
} as const;

export const BUSINESS = {
  address: {
    street: 'Stephanstr. 46',
    zip: '10559',
    city: 'Berlin',
    country: 'DE',
    district: 'Mitte',
    ortsteil: 'Moabit',
  },
  geo: { lat: 52.5302, lng: 13.3438 },
  phone: '+4915114140251',
  phoneDisplay: '0151 14140251',
  email: 'simeon@heilpraxis-frommholz.de',
  hours: {
    weekdays: { opens: '08:00', closes: '16:30' },
    label: 'Mo–Fr 08:00–16:30',
  },
} as const;

// UWG § 5 Schutzschalter — bewusste, sichtbare Aktivierung vor Go-Live nötig
export const SHOW_TESTIMONIALS = false;
