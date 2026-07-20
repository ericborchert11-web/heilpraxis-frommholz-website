import { DEFAULT_LOCALE, type Locale } from '../config';
import { de, type Dictionary } from './de';
import { en } from './en';
import { es } from './es';
import { it } from './it';

/**
 * Bewusst kein Deep-Merge: eine Sprache hat ihr Wörterbuch entweder
 * vollständig (der Typ erzwingt das) oder gar nicht. Fehlt es, erscheint die
 * Oberfläche auf Deutsch — sichtbar unfertig statt halb übersetzt.
 */
const DICTIONARIES: Partial<Record<Locale, Dictionary>> = { de, en, es, it };

export function getDictionary(lang: Locale): Dictionary {
  return DICTIONARIES[lang] ?? de;
}

/**
 * Liegen die Oberflächentexte in dieser Sprache wirklich übersetzt vor?
 *
 * Identität statt Inhalt, wie in `lib/i18n/content`: ohne eigenes Wörterbuch
 * liefert `getDictionary` exakt das deutsche zurück — dann ist die Sprache
 * nachweislich noch unübersetzt. Die übersetzten Routen hängen daran, ob sie
 * `<title>` und Beschreibung setzen dürfen: ein deutscher Titel auf einer als
 * spanisch ausgelieferten Seite wäre schlechter als gar keiner. Sobald `es.ts`
 * oder `it.ts` dazukommen, schaltet sich das von selbst um.
 *
 * Für Deutsch selbst ist die Frage gegenstandslos — die deutschen Routen
 * tragen ihre Metadaten unmittelbar.
 */
export function hatUebersetzung(lang: Locale): boolean {
  return lang !== DEFAULT_LOCALE && getDictionary(lang) !== getDictionary(DEFAULT_LOCALE);
}

export type { Dictionary };
