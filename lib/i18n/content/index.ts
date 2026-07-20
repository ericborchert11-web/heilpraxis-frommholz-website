/**
 * Inhaltsüberlagerung je Sprache. Die deutschen Dateien in `lib/` bleiben die
 * Quelle der Wahrheit; hier liegt je Sprache eine Tabelle, die einzelne
 * Einträge überschreibt — gekeyt nach dem DEUTSCHEN Slug, weil das Routing
 * intern durchgängig mit deutschen Slugs arbeitet.
 *
 * Fehlt ein Eintrag, erscheint der deutsche. Das ist gewollt: eine Lücke ist
 * sichtbar unübersetzt statt leer, und keine Übersetzungslücke kann den Build
 * brechen.
 *
 * Nicht übersetzt werden slug, geo, plz, iconKey, numeral und alle href-Werte
 * — Letztere sind deutsche Referenzpfade und werden erst beim Rendern durch
 * `localizedHref` geschickt.
 */

import type { Locale } from '../config';
import { LEISTUNGEN_SEO, type SeoLeistung } from '@/lib/leistungen-seo';
import { THEMEN, type SeoThema } from '@/lib/themen';
import { STANDORTE, type SeoStandort } from '@/lib/standorte';
import { LEISTUNGEN, type Leistung } from '@/lib/leistungen';
import { GLOBAL_FAQ, type FaqItem } from '@/lib/faq-global';

import { LEISTUNGEN_SEO_EN } from './en/leistungen-seo';
import { THEMEN_EN } from './en/themen';
import { STANDORTE_EN } from './en/standorte';
import { LEISTUNGEN_EN } from './en/leistungen';
import { GLOBAL_FAQ_EN } from './en/faq';
import type { Overlay } from './types';

function merge<T extends { slug: string }>(source: readonly T[], overlay: Overlay<T> | undefined): readonly T[] {
  if (!overlay) return source;
  return source.map((entry) => overlay[entry.slug] ?? entry);
}

const LEISTUNGEN_SEO_BY_LANG: Partial<Record<Locale, Overlay<SeoLeistung>>> = { en: LEISTUNGEN_SEO_EN };
const THEMEN_BY_LANG: Partial<Record<Locale, Overlay<SeoThema>>> = { en: THEMEN_EN };
const STANDORTE_BY_LANG: Partial<Record<Locale, Overlay<SeoStandort>>> = { en: STANDORTE_EN };
const LEISTUNGEN_BY_LANG: Partial<Record<Locale, Overlay<Leistung>>> = { en: LEISTUNGEN_EN };
const FAQ_BY_LANG: Partial<Record<Locale, readonly FaqItem[]>> = { en: GLOBAL_FAQ_EN };

export function getLeistungenSeo(lang: Locale): readonly SeoLeistung[] {
  return merge(LEISTUNGEN_SEO, LEISTUNGEN_SEO_BY_LANG[lang]);
}

export function getThemen(lang: Locale): readonly SeoThema[] {
  return merge(THEMEN, THEMEN_BY_LANG[lang]);
}

export function getStandorte(lang: Locale): readonly SeoStandort[] {
  return merge(STANDORTE, STANDORTE_BY_LANG[lang]);
}

export function getLeistungen(lang: Locale): readonly Leistung[] {
  return merge(LEISTUNGEN, LEISTUNGEN_BY_LANG[lang]);
}

/** Die FAQ hat keine Slugs — sie wird als Ganzes ersetzt oder gar nicht. */
export function getGlobalFaq(lang: Locale): readonly FaqItem[] {
  return FAQ_BY_LANG[lang] ?? GLOBAL_FAQ;
}

/** Einzelabruf mit Rückfall — für die Detailseiten. */
export function getLeistungSeo(slug: string, lang: Locale): SeoLeistung | undefined {
  return getLeistungenSeo(lang).find((l) => l.slug === slug);
}

export function getThema(slug: string, lang: Locale): SeoThema | undefined {
  return getThemen(lang).find((t) => t.slug === slug);
}

export function getStandort(slug: string, lang: Locale): SeoStandort | undefined {
  return getStandorte(lang).find((s) => s.slug === slug);
}
