/**
 * Sprachgrundlagen. Deutsch ist der Standard und liegt ohne Praefix auf `/`;
 * en/es/it liegen unter `/<lang>/…`. Diese Trennung zieht sich durch das
 * gesamte Routing (Route-Groups `(de)` und `(intl)`).
 */

export const LOCALES = ['de', 'en', 'es', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'de';

/** Die praefigierten Sprachen — genau die Werte von `generateStaticParams`. */
export const INTL_LOCALES = ['en', 'es', 'it'] as const;
export type IntlLocale = (typeof INTL_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isIntlLocale(value: string): value is IntlLocale {
  return (INTL_LOCALES as readonly string[]).includes(value);
}

/** og:locale je Sprache. en_GB statt en_US — die Zielgruppe sitzt in Europa. */
export const OG_LOCALE: Record<Locale, string> = {
  de: 'de_DE',
  en: 'en_GB',
  es: 'es_ES',
  it: 'it_IT',
};

/** Beschriftung im Sprachschalter. */
export const LOCALE_LABEL: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  es: 'ES',
  it: 'IT',
};

/** Ausgeschriebener Sprachname in der jeweiligen Sprache — fuer aria-label. */
export const LOCALE_NAME: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  it: 'Italiano',
};
