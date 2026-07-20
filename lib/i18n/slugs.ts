/**
 * Uebersetzte URLs. Die deutsche Fassung ist die Referenz: jeder interne Link
 * wird als deutscher Pfad geschrieben und per `localizedHref` in die aktuelle
 * Sprache gebracht. `deHrefFrom` ist die Gegenrichtung und wird vom
 * Sprachschalter gebraucht, um von der aktuellen Seite auf ihr Gegenstueck
 * in einer anderen Sprache zu kommen.
 *
 * Ortsteil-Slugs werden bewusst NICHT uebersetzt — Moabit heisst in jeder
 * Sprache Moabit. Anker-IDs bleiben ebenfalls deutsch (`#kontakt`), sie sind
 * nicht suchmaschinenrelevant.
 */

import { isIntlLocale, type IntlLocale, type Locale } from './config';

/** Erste Pfadebene. Was hier fehlt, existiert nur auf Deutsch. */
const SEGMENTS = {
  leistungen: { en: 'services', es: 'servicios', it: 'servizi' },
  standorte: { en: 'locations', es: 'ubicaciones', it: 'sedi' },
  themen: { en: 'guides', es: 'guias', it: 'guide' },
  familienbereich: { en: 'family-portal', es: 'area-familiar', it: 'area-famiglie' },
  'soziales-engagement': { en: 'social-commitment', es: 'compromiso-social', it: 'impegno-sociale' },
} as const satisfies Record<string, Record<IntlLocale, string>>;

type TranslatedSegment = keyof typeof SEGMENTS;

/**
 * Detailseiten unter /leistungen/… — das sind die NEUN Eintraege aus
 * `lib/leistungen-seo.ts`, nicht die sechs Karten aus `lib/leistungen.ts`.
 */
const LEISTUNG_SLUGS = {
  'sitzwachen-berlin': { en: 'bedside-companion-berlin', es: 'acompanamiento-al-paciente-berlin', it: 'assistenza-al-capezzale-berlino' },
  'systemsprenger-betreuung': { en: 'complex-needs-youth-care', es: 'apoyo-a-jovenes-con-necesidades-complejas', it: 'supporto-giovani-bisogni-complessi' },
  'pflegedienst-selbstzahler': { en: 'private-pay-nursing-berlin', es: 'servicio-privado-de-enfermeria-berlin', it: 'assistenza-privata-berlino' },
  '24-stunden-betreuung': { en: '24-hour-care-berlin', es: 'atencion-24-horas-berlin', it: 'assistenza-24-ore-berlino' },
  'pflegeberatung-berlin': { en: 'care-consulting-berlin', es: 'asesoramiento-en-cuidados-berlin', it: 'consulenza-assistenziale-berlino' },
  'nachtwachen-berlin': { en: 'night-care-berlin', es: 'atencion-nocturna-berlin', it: 'assistenza-notturna-berlino' },
  'hospiz-sitzwachen': { en: 'hospice-companion-care', es: 'acompanamiento-en-hospicio', it: 'accompagnamento-in-hospice' },
  'reisebegleitung-senioren': { en: 'senior-travel-companion', es: 'acompanante-de-viaje-para-mayores', it: 'accompagnatore-di-viaggio-anziani' },
  'klinik-begleitung-berlin': { en: 'hospital-companion-berlin', es: 'acompanamiento-hospitalario-berlin', it: 'accompagnamento-ospedaliero-berlino' },
} as const satisfies Record<string, Record<IntlLocale, string>>;

/** Ratgeberseiten unter /themen/… */
const THEMA_SLUGS = {
  'pflegegrad-beantragen': { en: 'applying-for-a-care-level', es: 'solicitar-grado-de-dependencia', it: 'richiedere-il-grado-di-assistenza' },
  'verhinderungspflege': { en: 'respite-care', es: 'cuidado-de-respiro', it: 'assistenza-sostitutiva' },
  'entlastungsbudget': { en: 'relief-budget', es: 'presupuesto-de-alivio', it: 'budget-di-sollievo' },
  'mdk-begutachtung': { en: 'care-level-assessment', es: 'evaluacion-del-grado-de-dependencia', it: 'valutazione-del-grado-di-assistenza' },
  'demenz-begleitung': { en: 'dementia-support', es: 'acompanamiento-en-demencia', it: 'accompagnamento-nella-demenza' },
  'palliativ-zuhause': { en: 'palliative-care-at-home', es: 'cuidados-paliativos-en-casa', it: 'cure-palliative-a-domicilio' },
  'krankenhaus-begleitung': { en: 'hospital-support', es: 'acompanamiento-hospitalario', it: 'accompagnamento-ospedaliero' },
  'wohnungsaufloesung-pflegefall': { en: 'clearing-a-home-when-care-begins', es: 'vaciado-de-vivienda-por-cuidados', it: 'svuotare-casa-inizio-assistenza' },
} as const satisfies Record<string, Record<IntlLocale, string>>;

/** Segmente mit uebersetzten Detail-Slugs. Standorte fehlen hier bewusst. */
const DETAIL_SLUGS: Partial<Record<TranslatedSegment, Record<string, Record<IntlLocale, string>>>> = {
  leistungen: LEISTUNG_SLUGS,
  themen: THEMA_SLUGS,
};

function isTranslatedSegment(seg: string): seg is TranslatedSegment {
  return seg in SEGMENTS;
}

function splitHash(path: string): [string, string] {
  const i = path.indexOf('#');
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)];
}

/** Umkehrtabelle bauen: uebersetzter Slug → deutscher Slug. */
function invert(
  table: Record<string, Record<IntlLocale, string>>,
  lang: IntlLocale,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [de, translations] of Object.entries(table)) {
    out[translations[lang]] = de;
  }
  return out;
}

/**
 * Deutscher Pfad → Pfad in `lang`.
 * Seiten ohne Uebersetzung (Karriere, Impressum, Datenschutz, AGB) liefern die
 * Sprachstartseite statt einer 404.
 */
export function localizedHref(deHref: string, lang: Locale): string {
  // Nicht-praefigiert = Deutsch, der Referenzpfad bleibt unveraendert.
  // `isIntlLocale` engt `lang` zugleich auf die praefigierten Sprachen ein.
  if (!isIntlLocale(lang)) return deHref;

  const [pathname, hash] = splitHash(deHref);
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) return `/${lang}${hash}`;

  const [segment, slug] = parts;
  if (!isTranslatedSegment(segment)) return `/${lang}`;

  const translatedSegment = SEGMENTS[segment][lang];
  if (!slug) return `/${lang}/${translatedSegment}${hash}`;

  const detailTable = DETAIL_SLUGS[segment];
  // Kein Eintrag in DETAIL_SLUGS = Slug bleibt wie er ist (Standorte).
  if (!detailTable) return `/${lang}/${translatedSegment}/${slug}${hash}`;

  const translatedSlug = detailTable[slug]?.[lang];
  if (!translatedSlug) return `/${lang}`;

  return `/${lang}/${translatedSegment}/${translatedSlug}${hash}`;
}

/**
 * Pfad in `lang` → deutscher Referenzpfad. Gegenstueck zu `localizedHref`;
 * der Sprachschalter verkettet beide.
 */
export function deHrefFrom(href: string, lang: Locale): string {
  if (!isIntlLocale(lang)) return href;

  const [pathname, hash] = splitHash(href);
  const parts = pathname.split('/').filter(Boolean);

  // parts[0] ist der Sprachpraefix
  if (parts.length <= 1) return `/${hash}`;

  const translatedSegment = parts[1];
  const deSegment = (Object.keys(SEGMENTS) as TranslatedSegment[]).find(
    (key) => SEGMENTS[key][lang] === translatedSegment,
  );
  if (!deSegment) return '/';

  const translatedSlug = parts[2];
  if (!translatedSlug) return `/${deSegment}${hash}`;

  const detailTable = DETAIL_SLUGS[deSegment];
  if (!detailTable) return `/${deSegment}/${translatedSlug}${hash}`;

  const deSlug = invert(detailTable, lang)[translatedSlug];
  if (!deSlug) return `/${deSegment}${hash}`;

  return `/${deSegment}/${deSlug}${hash}`;
}

/** Alle uebersetzten Slugs eines Segments — fuer `generateStaticParams`. */
export function translatedSlugsFor(segment: TranslatedSegment, lang: IntlLocale): string[] {
  const table = DETAIL_SLUGS[segment];
  if (!table) return [];
  return Object.values(table).map((t) => t[lang]);
}

/** Uebersetztes Segment — fuer `generateStaticParams` der Segment-Route. */
export function segmentFor(segment: TranslatedSegment, lang: IntlLocale): string {
  return SEGMENTS[segment][lang];
}

export { SEGMENTS, type TranslatedSegment };
