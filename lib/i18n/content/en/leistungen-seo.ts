import type { Overlay } from '../types';
import type { SeoLeistung } from '@/lib/leistungen-seo';

/**
 * Englische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/en` weiterhin auf Deutsch.
 */
export const LEISTUNGEN_SEO_EN: Overlay<SeoLeistung> = {};
