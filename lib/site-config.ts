// Wenn Eric jemals von Apex auf www (oder umgekehrt) wechseln will,
// reicht das Setzen von NEXT_PUBLIC_SITE_URL in den Vercel-Project-ENVs
// + ein Redeploy. Kein Code-Change nötig.
const RUNTIME_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ??
  'https://heilpraxis-frommholz.de';

export const SITE = {
  name: 'Heilpraxis Frommholz',
  legalName: 'Heilpraxis Frommholz – Inh. Simeon Frommholz',
  tagline: 'Pflege · Beratung · Begleitung',
  description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland. Stundenweise bis 24/7. Mit Erfahrung, Sorgfalt und Haltung.',
  url: RUNTIME_SITE_URL,
  defaultOgImage: '/og-default.jpg',
  /**
   * Profile + verbundene Seiten — wichtig als „sameAs"-Trust-Signal für
   * Google. Hier erweitern, sobald LinkedIn/Facebook/Google-Business-URLs
   * existieren. Leere Einträge stillschweigend ignoriert.
   */
  sameAs: [
    'https://simeonfrommholz.de',
    // 'https://www.google.com/maps/place/?q=place_id:XXXX',  // Google Business Profile
    // 'https://www.linkedin.com/company/heilpraxis-frommholz',
    // 'https://www.facebook.com/heilpraxisfrommholz',
  ],
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

export const SERVICE_AREAS = ['Berlin', 'Moabit', 'Tiergarten', 'Mitte', 'Charlottenburg', 'Wilmersdorf', 'Westend', 'Grunewald', 'Zehlendorf', 'Dahlem', 'Schmargendorf', 'Nikolassee', 'Wannsee', 'Frohnau', 'Kleinmachnow', 'Potsdam'] as const;

// UWG § 5 Schutzschalter — bewusste, sichtbare Aktivierung vor Go-Live nötig
export const SHOW_TESTIMONIALS = false;

/**
 * Gemeinsame OpenGraph-Basisfelder. Nach Next-Metadata-Regeln ersetzt eine
 * Seite, die `openGraph` setzt, das komplette `openGraph`-Objekt des Layouts
 * (kein Deep-Merge). Ohne diese Basis würden Unterseiten siteName/images/type
 * verlieren, sobald sie eine eigene og:url setzen.
 * Quelle: node_modules/next/dist/docs/.../generate-metadata.md (Overwriting fields)
 */
export const OG_BASE = {
  type: 'website',
  locale: 'de_DE',
  siteName: SITE.name,
  images: [SITE.defaultOgImage],
} as const;

/**
 * Baut Canonical + og:url für einen Seitenpfad synchron, sodass beide immer
 * identisch sind. `path` beginnt mit '/'. Startseite: pageMeta('/') → SITE.url.
 */
export function pageMeta(path: string) {
  const url = path === '/' ? SITE.url : `${SITE.url}${path}`;
  return {
    alternates: { canonical: url },
    // images bewusst als frische, veränderbare Kopie — Next's OpenGraph-Typ
    // akzeptiert das `readonly`-Tupel aus `OG_BASE` (as const) nicht.
    openGraph: { ...OG_BASE, images: [...OG_BASE.images], url },
  };
}
