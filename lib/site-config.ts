import { LOCALES, OG_LOCALE, DEFAULT_LOCALE, type Locale } from './i18n/config';
import { localizedHref } from './i18n/slugs';

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
  // TODO: durch ein eigens erstelltes 1200×630 OG-Bild ersetzen; bis dahin
  // ein existierendes Bild, damit Social-Previews nicht 404en.
  defaultOgImage: '/hero-team.jpg',
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
    // Echte Versicherer-Daten noch nicht eingetragen — bis dahin verweist das
    // Impressum auf "Angaben auf Anfrage", statt diesen Platzhalter zu drucken.
    // Sobald Eric die Daten liefert, hier eintragen.
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
  siteName: SITE.name,
  images: [SITE.defaultOgImage],
} as const;

/** Absolute URL für einen deutschen Referenzpfad in der Sprache `lang`. */
function absoluteUrl(deHref: string, lang: Locale): string {
  const path = localizedHref(deHref, lang);
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

/**
 * Existiert die Seite überhaupt übersetzt? Nicht übersetzte Seiten
 * (Karriere, Impressum, Datenschutz, AGB) dürfen keine hreflang-Verweise
 * tragen — sie zeigten sonst auf Seiten, die es nicht gibt.
 *
 * Das Kriterium ist die Rückfall-Semantik von `localizedHref`: alles ohne
 * Übersetzung landet auf der Sprachstartseite. Einzige Ausnahme ist die
 * Startseite selbst, die dort legitim landet. `tests/i18n/meta.test.ts`
 * prüft das gegen jeden echten Seitenpfad der Site.
 */
function hasTranslations(deHref: string): boolean {
  return localizedHref(deHref, 'en') !== '/en' || deHref === '/';
}

function languageAlternates(deHref: string): Record<string, string> | undefined {
  if (!hasTranslations(deHref)) return undefined;
  const entries: Record<string, string> = {};
  for (const lang of LOCALES) entries[lang] = absoluteUrl(deHref, lang);
  entries['x-default'] = absoluteUrl(deHref, DEFAULT_LOCALE);
  return entries;
}

/**
 * Canonical + og:url + hreflang für einen deutschen Seitenpfad.
 * `path` beginnt mit '/'. Startseite: pageMeta('/') → SITE.url.
 */
export function pageMeta(path: string) {
  return intlPageMeta(path, DEFAULT_LOCALE);
}

/** Dasselbe für eine übersetzte Fassung. `dePath` ist der deutsche Referenzpfad. */
export function intlPageMeta(dePath: string, lang: Locale) {
  const url = absoluteUrl(dePath, lang);
  // `languages` bewusst immer als Schlüssel, notfalls undefined — ein
  // bedingtes Objekt ergäbe einen Union-Typ, an dem `.languages` im Test
  // nicht mehr zugreifbar wäre.
  const languages = languageAlternates(dePath);
  return {
    alternates: { canonical: url, languages },
    // images bewusst als frische, veränderbare Kopie — Next's OpenGraph-Typ
    // akzeptiert das `readonly`-Tupel aus `OG_BASE` (as const) nicht.
    openGraph: {
      ...OG_BASE,
      images: [...OG_BASE.images],
      locale: OG_LOCALE[lang],
      url,
    },
  };
}
