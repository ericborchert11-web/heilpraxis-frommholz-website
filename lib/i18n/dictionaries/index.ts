import type { Locale } from '../config';
import { de, type Dictionary } from './de';
import { en } from './en';

/**
 * Bewusst kein Deep-Merge: eine Sprache hat ihr Wörterbuch entweder
 * vollständig (der Typ erzwingt das) oder gar nicht. Fehlt es, erscheint die
 * Oberfläche auf Deutsch — sichtbar unfertig statt halb übersetzt.
 * Spanisch und Italienisch kommen in Etappe 3 und 4 dazu.
 */
const DICTIONARIES: Partial<Record<Locale, Dictionary>> = { de, en };

export function getDictionary(lang: Locale): Dictionary {
  return DICTIONARIES[lang] ?? de;
}

export type { Dictionary };
