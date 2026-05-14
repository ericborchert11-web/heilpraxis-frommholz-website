export type Bezirk = {
  slug: string;
  name: string;
  isHauptstandort?: boolean;
  geo?: { lat: number; lng: number };
  hero: { h1: string; lead: string };
  leistungenIntro: string;
  meta: { title: string; description: string };
};

const emptyHero: Bezirk['hero'] = { h1: '', lead: '' };
const emptyMeta: Bezirk['meta'] = { title: '', description: '' };

export const BEZIRKE: readonly Bezirk[] = [
  { slug: 'mitte', name: 'Mitte', isHauptstandort: true, hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'friedrichshain-kreuzberg', name: 'Friedrichshain-Kreuzberg', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'pankow', name: 'Pankow', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'charlottenburg-wilmersdorf', name: 'Charlottenburg-Wilmersdorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'spandau', name: 'Spandau', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'steglitz-zehlendorf', name: 'Steglitz-Zehlendorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'tempelhof-schoeneberg', name: 'Tempelhof-Schöneberg', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'neukoelln', name: 'Neukölln', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'treptow-koepenick', name: 'Treptow-Köpenick', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'marzahn-hellersdorf', name: 'Marzahn-Hellersdorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'lichtenberg', name: 'Lichtenberg', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'reinickendorf', name: 'Reinickendorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
] as const;

export function hasBezirksLandingpage(bezirk: Bezirk): boolean {
  return bezirk.hero.h1.length > 0;
}
