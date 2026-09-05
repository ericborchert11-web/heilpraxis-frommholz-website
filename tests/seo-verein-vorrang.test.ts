import { describe, it, expect } from 'vitest';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { LEISTUNGEN } from '@/lib/leistungen';
import { STANDORTE } from '@/lib/standorte';
import { WEITERLEITUNGEN } from '@/lib/weiterleitungen';

/** Jeder interne Link, den die Website irgendwo ausgibt. */
function alleInternenLinks(): string[] {
  const links: string[] = [];
  const sammeln = (wert: unknown) => {
    if (Array.isArray(wert)) {
      wert.forEach(sammeln);
      return;
    }
    if (wert && typeof wert === 'object') {
      for (const [schluessel, v] of Object.entries(wert)) {
        if (schluessel === 'href' && typeof v === 'string') links.push(v);
        else sammeln(v);
      }
    }
  };
  sammeln([LEISTUNGEN_SEO, THEMEN, LEISTUNGEN, STANDORTE]);
  return links;
}

describe('Sitzwachen und Reisen liegen beim Verein', () => {
  it('kennt die abgegebenen Leistungen nicht mehr', () => {
    const slugs = LEISTUNGEN_SEO.map((l) => l.slug);
    expect(slugs).not.toContain('reisebegleitung-senioren');
    expect(slugs).not.toContain('nachtwachen-berlin');
    expect(slugs).toHaveLength(5);
  });

  it('kennt die abgegebenen Themen nicht mehr', () => {
    const slugs = THEMEN.map((t) => t.slug);
    expect(slugs).not.toContain('verhinderungspflege');
    expect(slugs).not.toContain('demenz-begleitung');
    expect(slugs).not.toContain('palliativ-zuhause');
    expect(slugs).toHaveLength(4);
  });

  it('zeigt nirgends auf eine eigene Weiterleitung', () => {
    const abgegeben = new Set(Object.keys(WEITERLEITUNGEN));
    const treffer = alleInternenLinks().filter((h) => abgegeben.has(h.split('#')[0]));
    expect(treffer, `interne Links auf abgegebene Seiten: ${treffer.join(', ')}`).toEqual([]);
  });
});
