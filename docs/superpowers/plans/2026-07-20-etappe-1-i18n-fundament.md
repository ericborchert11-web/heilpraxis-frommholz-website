# Mehrsprachigkeit Etappe 1 — Fundament Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Die Website unter `/en`, `/es`, `/it` vollständig ausliefern — mit Sprachschalter, hreflang und übersetzten URLs — wobei die englische Startseite fertig übersetzt ist und alle übrigen Inhalte sichtbar auf Deutsch zurückfallen.

**Architecture:** Zwei Root-Layouts über Route-Groups: `app/(de)/*` behält jeden bestehenden deutschen Pfad unverändert, `app/(intl)/[lang]/*` liefert `en`/`es`/`it` mit eigenem `<html lang>`. Der Seiteninhalt zieht in `components/pages/*` um und bekommt eine `lang`-Prop, sodass es je Seite eine Implementierung gibt statt vier. Oberflächentexte kommen aus Wörterbüchern mit Rückfall auf Deutsch.

**Tech Stack:** Next.js 16 (App Router, React 19), TypeScript, Tailwind 4, Vitest (neu, nur für die reinen i18n-Funktionen)

---

## Vorbemerkungen für die ausführende Person

**Der Bestand ist live und indexiert.** Canonicals, Sitemap und JSON-LD sind gepflegt. Oberste Regel: **kein einziger bestehender deutscher Pfad darf sich ändern.** Task 4 ist reines Verschieben ohne Verhaltensänderung — wenn danach eine deutsche URL anders aussieht als vorher, ist etwas falsch.

**Es gibt bisher keine Tests im Projekt.** Task 1 richtet Vitest ein, aber nur für die reinen Funktionen in `lib/i18n/` (Slug-Zuordnung, Wörterbuch-Rückfall). Für Routing und Rendering ist `npm run build` plus die manuelle Prüfliste am Ende die Absicherung — keine Komponententests, das wäre für diesen Zuschnitt Overhead ohne Nutzen.

**Anker-IDs bleiben in allen Sprachen deutsch** (`#kontakt`, `#leistungen`, `#qualitaet`, `#ablauf`, `#faq`, `#familienbereich`). Sie sind nicht suchmaschinenrelevant, und stabile IDs ersparen eine vierte Zuordnungstabelle.

**Inhalte (Leistungs-, Standort-, Themen-Texte) werden in dieser Etappe nicht übersetzt** — nur die Oberfläche und die englische Startseite. Die Slugs werden aber schon jetzt übersetzt, damit die URLs ab E1 stabil sind und sich zwischen den Etappen nicht mehr ändern.

---

## Dateiübersicht

**Neu:**

| Datei | Verantwortung |
|---|---|
| `vitest.config.ts` | Testkonfiguration, `@`-Alias |
| `lib/i18n/config.ts` | Locale-Typ, Listen, OG- und HTML-Sprachcodes |
| `lib/i18n/slugs.ts` | Segment- und Slug-Zuordnungen, Pfadübersetzung in beide Richtungen |
| `lib/i18n/dictionaries/de.ts` | Deutsche Oberflächentexte — definiert den Typ `Dictionary` |
| `lib/i18n/dictionaries/en.ts` | Englische Oberflächentexte |
| `lib/i18n/dictionaries/index.ts` | `getDictionary(lang)` mit Rückfall auf Deutsch |
| `components/SiteShell.tsx` | Gemeinsames HTML-Gerüst beider Root-Layouts |
| `components/LanguageSwitcher.tsx` | Sprachschalter |
| `components/pages/*.tsx` | Seiteninhalte mit `lang`-Prop (eine Datei je Seite) |
| `app/(de)/layout.tsx` | Root-Layout Deutsch |
| `app/(intl)/[lang]/layout.tsx` | Root-Layout EN/ES/IT |
| `app/(intl)/[lang]/**/page.tsx` | Übersetzter Routenbaum |
| `tests/i18n/*.test.ts` | Tests der reinen i18n-Funktionen |

**Verschoben:** alle bestehenden `app/<route>/page.tsx` → `app/(de)/<route>/page.tsx`
**Gelöscht:** `app/layout.tsx` (Inhalt geht in `SiteShell` + die beiden Root-Layouts)

**Geändert:** `components/{Nav,Footer,A11yBar,KontaktSection,Hero,TrustStrip,LeistungenGrid,QualitaetSection,AblaufSection,FamilienbereichSection,FaqSection,LeistungCard}.tsx`, `lib/site-config.ts`, `app/sitemap.ts`, `app/actions/send-contact.ts`, `package.json`

---

## Task 1: Vitest-Setup und Locale-Grundlagen

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `lib/i18n/config.ts`
- Test: `tests/i18n/config.test.ts`

- [ ] **Step 1: Vitest installieren**

```bash
npm install -D vitest@^3
```

- [ ] **Step 2: Test-Script eintragen**

In `package.json` im `scripts`-Block ergänzen:

```json
    "test": "vitest run",
    "test:watch": "vitest"
```

- [ ] **Step 3: `vitest.config.ts` anlegen**

```ts
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: { '@': root.replace(/\/$/, '') },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 4: Den fehlschlagenden Test schreiben**

`tests/i18n/config.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { LOCALES, INTL_LOCALES, DEFAULT_LOCALE, isLocale, isIntlLocale, OG_LOCALE } from '@/lib/i18n/config';

describe('locale config', () => {
  it('kennt genau vier Sprachen, Deutsch als Standard', () => {
    expect(LOCALES).toEqual(['de', 'en', 'es', 'it']);
    expect(DEFAULT_LOCALE).toBe('de');
  });

  it('INTL_LOCALES ist LOCALES ohne Deutsch', () => {
    expect(INTL_LOCALES).toEqual(['en', 'es', 'it']);
  });

  it('isLocale erkennt gueltige und ungueltige Werte', () => {
    expect(isLocale('de')).toBe(true);
    expect(isLocale('it')).toBe(true);
    expect(isLocale('fr')).toBe(false);
    expect(isLocale('leistungen')).toBe(false);
  });

  it('isIntlLocale schliesst Deutsch aus', () => {
    expect(isIntlLocale('en')).toBe(true);
    expect(isIntlLocale('de')).toBe(false);
  });

  it('liefert je Sprache einen OpenGraph-Code', () => {
    expect(OG_LOCALE.de).toBe('de_DE');
    expect(OG_LOCALE.en).toBe('en_GB');
    expect(OG_LOCALE.es).toBe('es_ES');
    expect(OG_LOCALE.it).toBe('it_IT');
  });
});
```

- [ ] **Step 5: Test laufen lassen — muss fehlschlagen**

Run: `npm test`
Expected: FAIL, `Failed to resolve import "@/lib/i18n/config"`

- [ ] **Step 6: `lib/i18n/config.ts` schreiben**

```ts
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
```

- [ ] **Step 7: Test laufen lassen — muss bestehen**

Run: `npm test`
Expected: PASS, 5 Tests

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vitest.config.ts lib/i18n/config.ts tests/i18n/config.test.ts
git commit -m "feat(i18n): Locale-Grundlagen + Vitest-Setup"
```

---

## Task 2: Slug- und Pfadübersetzung

**Files:**
- Create: `lib/i18n/slugs.ts`
- Test: `tests/i18n/slugs.test.ts`

Der Sprachschalter braucht beide Richtungen: aktuellen Pfad → deutscher Referenzpfad → Pfad in der Zielsprache. Darum zwei Funktionen, die sich gegenseitig aufheben.

- [ ] **Step 1: Den fehlschlagenden Test schreiben**

`tests/i18n/slugs.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { localizedHref, deHrefFrom } from '@/lib/i18n/slugs';
import { LOCALES } from '@/lib/i18n/config';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';

describe('localizedHref', () => {
  it('laesst deutsche Pfade unveraendert', () => {
    expect(localizedHref('/leistungen', 'de')).toBe('/leistungen');
    expect(localizedHref('/', 'de')).toBe('/');
  });

  it('uebersetzt die Startseite', () => {
    expect(localizedHref('/', 'en')).toBe('/en');
    expect(localizedHref('/', 'it')).toBe('/it');
  });

  it('uebersetzt Segmentnamen', () => {
    expect(localizedHref('/leistungen', 'en')).toBe('/en/services');
    expect(localizedHref('/standorte', 'es')).toBe('/es/ubicaciones');
    expect(localizedHref('/themen', 'it')).toBe('/it/guide');
  });

  it('uebersetzt Leistungs-Slugs', () => {
    expect(localizedHref('/leistungen/sitzwachen-berlin', 'en')).toBe('/en/services/bedside-companion-berlin');
  });

  it('laesst Ortsteil-Slugs unveraendert — Eigennamen', () => {
    expect(localizedHref('/standorte/moabit', 'en')).toBe('/en/locations/moabit');
    expect(localizedHref('/standorte/moabit', 'it')).toBe('/it/sedi/moabit');
  });

  it('behaelt Anker bei', () => {
    expect(localizedHref('/#kontakt', 'en')).toBe('/en#kontakt');
    expect(localizedHref('/leistungen#faq', 'es')).toBe('/es/servicios#faq');
  });

  it('faellt bei nicht uebersetzten Seiten auf die Sprachstartseite zurueck', () => {
    expect(localizedHref('/karriere', 'en')).toBe('/en');
    expect(localizedHref('/impressum', 'en')).toBe('/en');
    expect(localizedHref('/karriere/pflegefachkraft', 'es')).toBe('/es');
  });
});

describe('deHrefFrom', () => {
  it('ist die Umkehrung von localizedHref', () => {
    const paths = ['/', '/leistungen', '/leistungen/sitzwachen-berlin', '/standorte/moabit', '/themen/demenz-begleitung', '/familienbereich'];
    for (const lang of LOCALES) {
      for (const p of paths) {
        expect(deHrefFrom(localizedHref(p, lang), lang)).toBe(p);
      }
    }
  });

  it('gibt deutsche Pfade unveraendert zurueck', () => {
    expect(deHrefFrom('/leistungen/sitzwachen-berlin', 'de')).toBe('/leistungen/sitzwachen-berlin');
  });
});

describe('Vollstaendigkeit der Slug-Tabellen', () => {
  it('kennt jeden SEO-Leistungs-Slug in jeder Sprache', () => {
    for (const lang of LOCALES) {
      for (const l of LEISTUNGEN_SEO) {
        const href = localizedHref(`/leistungen/${l.slug}`, lang);
        expect(href, `${lang}/${l.slug}`).not.toBe(`/${lang}`);
      }
    }
  });

  it('kennt jeden Themen-Slug in jeder Sprache', () => {
    for (const lang of LOCALES) {
      for (const t of THEMEN) {
        const href = localizedHref(`/themen/${t.slug}`, lang);
        expect(href, `${lang}/${t.slug}`).not.toBe(`/${lang}`);
      }
    }
  });

  it('erzeugt je Sprache eindeutige Leistungs- und Themen-Slugs', () => {
    for (const lang of LOCALES) {
      const leistung = LEISTUNGEN_SEO.map((l) => localizedHref(`/leistungen/${l.slug}`, lang));
      expect(new Set(leistung).size, `${lang} Leistungen`).toBe(leistung.length);
      const themen = THEMEN.map((t) => localizedHref(`/themen/${t.slug}`, lang));
      expect(new Set(themen).size, `${lang} Themen`).toBe(themen.length);
    }
  });

  it('behaelt alle Standort-Slugs unveraendert', () => {
    for (const s of STANDORTE) {
      expect(localizedHref(`/standorte/${s.slug}`, 'en')).toBe(`/en/locations/${s.slug}`);
    }
  });
});
```

- [ ] **Step 2: Test laufen lassen — muss fehlschlagen**

Run: `npm test`
Expected: FAIL, `Failed to resolve import "@/lib/i18n/slugs"`

- [ ] **Step 3: `lib/i18n/slugs.ts` schreiben**

```ts
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

import { DEFAULT_LOCALE, type Locale } from './config';

/** Erste Pfadebene. Was hier fehlt, existiert nur auf Deutsch. */
const SEGMENTS = {
  leistungen: { en: 'services', es: 'servicios', it: 'servizi' },
  standorte: { en: 'locations', es: 'ubicaciones', it: 'sedi' },
  themen: { en: 'guides', es: 'guias', it: 'guide' },
  familienbereich: { en: 'family-portal', es: 'area-familiar', it: 'area-famiglie' },
  'soziales-engagement': { en: 'social-commitment', es: 'compromiso-social', it: 'impegno-sociale' },
} as const satisfies Record<string, Record<Exclude<Locale, 'de'>, string>>;

type TranslatedSegment = keyof typeof SEGMENTS;

/**
 * Detailseiten unter /leistungen/… — das sind die NEUN Eintraege aus
 * `lib/leistungen-seo.ts`, nicht die sechs Karten aus `lib/leistungen.ts`.
 */
const LEISTUNG_SLUGS = {
  'sitzwachen-berlin': { en: 'bedside-companion-berlin', es: 'acompanamiento-al-paciente-berlin', it: 'assistenza-al-capezzale-berlino' },
  'systemsprenger-betreuung': { en: 'complex-needs-one-to-one-care', es: 'atencion-individual-casos-complejos', it: 'assistenza-individuale-casi-complessi' },
  'pflegedienst-selbstzahler': { en: 'private-pay-nursing-berlin', es: 'servicio-privado-de-enfermeria-berlin', it: 'assistenza-privata-berlino' },
  '24-stunden-betreuung': { en: '24-hour-care-berlin', es: 'atencion-24-horas-berlin', it: 'assistenza-24-ore-berlino' },
  'pflegeberatung-berlin': { en: 'care-consulting-berlin', es: 'asesoramiento-en-cuidados-berlin', it: 'consulenza-assistenziale-berlino' },
  'nachtwachen-berlin': { en: 'night-care-berlin', es: 'atencion-nocturna-berlin', it: 'assistenza-notturna-berlino' },
  'hospiz-sitzwachen': { en: 'hospice-companion-care', es: 'acompanamiento-en-hospicio', it: 'accompagnamento-in-hospice' },
  'reisebegleitung-senioren': { en: 'senior-travel-companion', es: 'acompanante-de-viaje-para-mayores', it: 'accompagnatore-di-viaggio-anziani' },
  'klinik-begleitung-berlin': { en: 'hospital-companion-berlin', es: 'acompanamiento-hospitalario-berlin', it: 'accompagnamento-ospedaliero-berlino' },
} as const satisfies Record<string, Record<Exclude<Locale, 'de'>, string>>;

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
} as const satisfies Record<string, Record<Exclude<Locale, 'de'>, string>>;

/** Segmente mit uebersetzten Detail-Slugs. Standorte fehlen hier bewusst. */
const DETAIL_SLUGS: Partial<Record<TranslatedSegment, Record<string, Record<Exclude<Locale, 'de'>, string>>>> = {
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
  table: Record<string, Record<Exclude<Locale, 'de'>, string>>,
  lang: Exclude<Locale, 'de'>,
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
  if (lang === DEFAULT_LOCALE) return deHref;

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
  if (lang === DEFAULT_LOCALE) return href;

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
export function translatedSlugsFor(segment: TranslatedSegment, lang: Exclude<Locale, 'de'>): string[] {
  const table = DETAIL_SLUGS[segment];
  if (!table) return [];
  return Object.values(table).map((t) => t[lang]);
}

/** Uebersetztes Segment — fuer `generateStaticParams` der Segment-Route. */
export function segmentFor(segment: TranslatedSegment, lang: Exclude<Locale, 'de'>): string {
  return SEGMENTS[segment][lang];
}

export { SEGMENTS, type TranslatedSegment };
```

- [ ] **Step 4: Test laufen lassen — muss bestehen**

Run: `npm test`
Expected: PASS. Schlägt der Eindeutigkeits- oder Vollständigkeitstest fehl, fehlt ein Slug in einer der drei Tabellen — ergänzen, nicht den Test aufweichen.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n/slugs.ts tests/i18n/slugs.test.ts
git commit -m "feat(i18n): uebersetzte Slugs und Pfadumrechnung in beide Richtungen"
```

---

## Task 3: Wörterbücher mit Rückfall auf Deutsch

**Files:**
- Create: `lib/i18n/dictionaries/de.ts`
- Create: `lib/i18n/dictionaries/en.ts`
- Create: `lib/i18n/dictionaries/index.ts`
- Test: `tests/i18n/dictionaries.test.ts`

`de.ts` definiert über `typeof` den Typ `Dictionary`; `en.ts` wird dagegen typisiert. Fehlt dort ein Schlüssel, schlägt `npm run typecheck` fehl. Für `es`/`it` gibt es in dieser Etappe noch kein Wörterbuch — `getDictionary` liefert dann Deutsch.

- [ ] **Step 1: Den fehlschlagenden Test schreiben**

`tests/i18n/dictionaries.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { de } from '@/lib/i18n/dictionaries/de';
import { en } from '@/lib/i18n/dictionaries/en';

describe('getDictionary', () => {
  it('liefert das passende Woerterbuch', () => {
    expect(getDictionary('de')).toBe(de);
    expect(getDictionary('en')).toBe(en);
  });

  it('faellt fuer noch nicht uebersetzte Sprachen auf Deutsch zurueck', () => {
    expect(getDictionary('es')).toBe(de);
    expect(getDictionary('it')).toBe(de);
  });

  it('das englische Woerterbuch hat exakt dieselben Schluessel wie das deutsche', () => {
    const keys = (obj: object, prefix = ''): string[] =>
      Object.entries(obj).flatMap(([k, v]) =>
        v !== null && typeof v === 'object' && !Array.isArray(v)
          ? keys(v, `${prefix}${k}.`)
          : [`${prefix}${k}`],
      );
    expect(keys(en).sort()).toEqual(keys(de).sort());
  });

  it('enthaelt keine deutschen Restbestaende im englischen Woerterbuch', () => {
    const flat = JSON.stringify(en);
    for (const wort of ['Pflege', 'Beratung', 'Angehörige', 'Erstgespräch']) {
      expect(flat, `"${wort}" steht noch im englischen Woerterbuch`).not.toContain(wort);
    }
  });
});
```

- [ ] **Step 2: Test laufen lassen — muss fehlschlagen**

Run: `npm test`
Expected: FAIL, `Failed to resolve import "@/lib/i18n/dictionaries"`

- [ ] **Step 3: `lib/i18n/dictionaries/de.ts` schreiben**

Die Texte stammen wörtlich aus den bestehenden Komponenten — hier wird nichts neu formuliert, nur zentralisiert.

```ts
/**
 * Deutsche Oberflaechentexte. Diese Datei ist die Referenz: `Dictionary`
 * ergibt sich aus ihrer Struktur, alle uebrigen Sprachen werden dagegen
 * typisiert und muessen vollstaendig sein.
 *
 * Inhalte (Leistungs-, Standort-, Themen-Texte) stehen NICHT hier, sondern
 * bleiben in lib/leistungen.ts, lib/standorte.ts, lib/themen.ts.
 */
export const de = {
  meta: {
    skipLink: 'Zum Inhalt springen',
    languageSwitcherLabel: 'Sprache wählen',
  },
  a11y: {
    sizeNormal: 'Schriftgröße normal',
    sizeLarge: 'Schriftgröße größer',
    sizeXlarge: 'Schriftgröße sehr groß',
    contrast: 'Kontrast',
    contrastToggle: 'Hochkontrast umschalten',
  },
  nav: {
    leistungen: 'Leistungen',
    standorte: 'Standorte',
    familienbereich: 'Familienbereich',
    qualitaet: 'Qualität',
    kontakt: 'Kontakt',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    logoAlt: 'Wappen',
    tagline: 'Pflege · Beratung · Begleitung',
  },
  hero: {
    eyebrow: 'Pflege & Beratung in ganz Berlin',
    h1Line1: 'Pflege, die',
    h1Emphasis: 'zuhört.',
    h1Line2: 'Beratung, die trägt.',
    lead: 'Wir sind nah am Menschen — mit über 15 Jahren Erfahrung in Pflege, Beratung und Begleitung in Berlin.',
    body: 'Stundenweise Alltagsbegleitung, 24-Stunden-Schichtbetreuung, Pflege- und Inklusionsberatung: Wir bringen Ruhe und Fachlichkeit dorthin, wo Menschen sie brauchen — zu Hause, im vertrauten Umfeld, bei Ihnen.',
    ctaContact: 'Erstgespräch anfragen',
    ctaServices: 'Unsere Leistungen',
    ctaCall: 'Anrufen',
    imageAlt: 'Das Team der Heilpraxis Frommholz mit einem Klienten in der häuslichen und stationären Begleitung',
    promise: 'Wir sehen den Menschen. Nicht den Pflegegrad.',
    promiseLabel: '— Unser Versprechen',
  },
  trust: {
    yearsLabel: 'Jahre Pflegeerfahrung',
    reachableNum: '24/7',
    reachableLabel: 'Verlässlich erreichbar',
    employedNum: '100 %',
    employedLabel: 'fest angestellt',
    regionNum: 'Berlin',
    regionLabel: '& Umland',
  },
  leistungenSection: {
    eyebrow: 'Unser Angebot',
    h2Line1: 'Sechs Wege,',
    h2Emphasis: 'nah zu sein.',
    lead: 'Wir betreuen Privatkundinnen und -kunden in ihrer eigenen Häuslichkeit. Manche brauchen nur ein paar Stunden in der Woche, andere eine durchgehende Begleitung — und manche zunächst nur ein gutes Gespräch.',
    all: 'Alle Leistungen ansehen →',
    more: 'Mehr erfahren →',
  },
  qualitaet: {
    eyebrow: 'Qualität & Sicherheit',
    h2Line1: 'Worauf Sie sich',
    h2Emphasis: 'verlassen können.',
    lead: 'Gute Pflege beginnt bei der Frage, wer zu Ihnen ins Haus kommt — und unter welchen Bedingungen. Das regeln wir sauber, nachprüfbar und ohne Grauzonen.',
    points: [
      {
        title: '100 % fest angestellt',
        text: 'Alle Mitarbeitenden sind bei uns sozialversicherungspflichtig angestellt — keine Honorar-Rotation, kein Graumarkt.',
      },
      {
        title: 'Erweitertes Führungszeugnis',
        text: 'Jede Pflegekraft legt ein erweitertes polizeiliches Führungszeugnis vor, bevor sie zu Ihnen ins Haus kommt.',
      },
      {
        title: 'Deutsch auf Augenhöhe',
        text: 'Muttersprache Deutsch oder mindestens C1. Verständigung ist bei uns nie das Problem.',
      },
      {
        title: 'Feste Bezugspersonen',
        text: 'Ein kleines, festes Team: 2–4 vertraute Gesichter je Klient:in statt täglich wechselnder Kräfte.',
      },
      {
        title: '24/7 – legal im Wechselschichtmodell',
        text: 'Rund-um-die-Uhr-Betreuung im legalen Wechselschicht-Team, nicht als Live-in-Graumarkt.',
      },
    ],
  },
  ablauf: {
    eyebrow: 'So läuft es ab',
    h2Line1: 'Drei Schritte,',
    h2Emphasis: 'keine Eile.',
    steps: [
      { title: 'Kennenlernen', text: 'Ein erstes Gespräch — telefonisch oder bei Ihnen zu Hause. Wir hören zu und klären, was wirklich gebraucht wird.' },
      { title: 'Planung', text: 'Gemeinsam mit Ihnen erstellen wir ein passgenaues Pflege- und Begleitkonzept — flexibel, jederzeit anpassbar.' },
      { title: 'Begleitung', text: 'Ein kleines, festes Team begleitet Sie. Mit regelmäßigem Austausch und einer Person, die immer ansprechbar ist.' },
    ],
    outroBefore: 'Und danach bleiben Sie im Bild:',
    outroLink: 'Ihr Familienbereich für Angehörige →',
  },
  familienbereich: {
    eyebrow: 'Für Angehörige',
    h2Line1: 'Ihr Familienbereich —',
    h2Emphasis: 'immer im Bild,',
    h2Line2: 'ohne nachfragen zu müssen.',
    lead: 'Pflege betrifft die ganze Familie. In Ihrem geschützten Familienbereich sehen Sie jederzeit, wer wann da ist, was abgerechnet wird und was dokumentiert wurde — an einem Ort, für alle unsere Klient:innen inklusive.',
    bausteine: [
      { title: 'Dienstpläne', text: 'Wer kommt wann? Der aktuelle Dienstplan Ihrer/Ihres Angehörigen — jederzeit einsehbar, immer aktuell.' },
      { title: 'Rechnungen', text: 'Alle Rechnungen übersichtlich an einem Ort, transparent aufgeschlüsselt und jederzeit abrufbar.' },
      { title: 'Dokumentation', text: 'Was ist passiert? Die Pflegedokumentation — nachvollziehbar für berechtigte Angehörige, nah am Alltag Ihrer/Ihres Liebsten.' },
    ],
    note: 'Geschützter, verschlüsselter Zugang — nur für berechtigte Angehörige. Wir richten ihn individuell für Ihre Familie ein.',
    ctaMore: 'Mehr erfahren →',
    ctaSetup: 'Im Erstgespräch einrichten',
  },
  faq: {
    eyebrow: 'Häufig gestellte Fragen',
    h2Line1: 'Was viele',
    h2Emphasis: 'vorher fragen.',
  },
  kontakt: {
    eyebrow: 'Kontakt aufnehmen',
    h2Line1: 'Beginnen wir mit einem',
    h2Emphasis: 'Gespräch.',
    lead: 'Sie überlegen, ob unsere Begleitung passt? Wir nehmen uns Zeit für ein erstes, unverbindliches Gespräch — am Telefon, per E-Mail oder direkt bei Ihnen.',
    successTitle: 'Danke — wir haben Ihre Nachricht erhalten.',
    successFallback: 'Wir melden uns innerhalb weniger Tage zurück. In dringenden Fällen erreichen Sie uns direkt unter ',
    honeypotLabel: 'Bitte leer lassen',
    requiredNote: '* Pflichtfeld',
    labelName: 'Name *',
    placeholderName: 'Ihr Name',
    labelReach: 'Telefon oder E-Mail *',
    placeholderReach: 'Wie dürfen wir Sie erreichen?',
    labelSubject: 'Worum geht es? *',
    subjects: [
      'Erstgespräch zur Pflege',
      'Sitzwache / Nachtwache',
      '24-Stunden-Betreuung',
      'Pflegeberatung',
      'Reisebegleitung',
      'Hospiz-Sitzwache',
      'Etwas anderes',
    ],
    labelMessage: 'Ihre Nachricht (optional)',
    placeholderMessage: 'Erzählen Sie uns kurz, was Sie umtreibt…',
    consentBefore: '* Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. Hinweise zur Datenverarbeitung finden Sie in der ',
    consentLink: 'Datenschutzerklärung',
    consentAfter: '.',
    submit: 'Nachricht senden',
    submitting: 'Wird gesendet …',
  },
  footer: {
    familyLink: '→ Familienbereich für Angehörige',
    headingLeistungen: 'Leistungen',
    headingThemen: 'Themen',
    headingStandorte: 'Pflege in Ihrem Kiez',
    allLeistungen: '→ Alle Leistungen',
    allThemen: '→ Alle Themen',
    allStandorte: '→ Alle Standorte',
    hauptstandort: 'Hauptstandort',
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    agb: 'AGB',
    karriere: 'Karriere',
    schichtplaner: 'Schichtplaner',
    schichtplanerTitle: 'Mitarbeiterbereich (Schichtplaner) — externe Seite',
    /** Nur in den uebersetzten Fassungen sichtbar. Auf Deutsch leer. */
    germanOnlyNote: '',
  },
} as const;

export type Dictionary = typeof de;
```

- [ ] **Step 4: `lib/i18n/dictionaries/en.ts` schreiben**

Zwei Stellen sind bewusst **keine wörtliche Übersetzung**, sondern an die tatsächliche Sprachkompetenz angepasst (siehe Spec, Abschnitt „Sprachkompetenz"):

- `qualitaet.points[2]` — „Deutsch auf Augenhöhe / Muttersprache Deutsch oder mindestens C1" ist auf einer englischen Seite ein Fremdkörper. Es wird zum Vorteil umformuliert: fließendes Deutsch **und** verlässliches Englisch.
- `footer.germanOnlyNote` — Hinweis, dass Rechtstexte und Karriere nur auf Deutsch vorliegen.

```ts
import type { Dictionary } from './de';

export const en: Dictionary = {
  meta: {
    skipLink: 'Skip to content',
    languageSwitcherLabel: 'Choose language',
  },
  a11y: {
    sizeNormal: 'Normal text size',
    sizeLarge: 'Larger text size',
    sizeXlarge: 'Very large text size',
    contrast: 'Contrast',
    contrastToggle: 'Toggle high contrast',
  },
  nav: {
    leistungen: 'Services',
    standorte: 'Locations',
    familienbereich: 'Family portal',
    qualitaet: 'Standards',
    kontakt: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    logoAlt: 'crest',
    tagline: 'Care · Counsel · Companionship',
  },
  hero: {
    eyebrow: 'Private care and counsel across Berlin',
    h1Line1: 'Care that',
    h1Emphasis: 'listens.',
    h1Line2: 'Counsel that holds.',
    lead: 'We stay close to the people we look after — with more than 15 years of experience in care, counsel and companionship in Berlin.',
    body: 'Hourly support at home, round-the-clock shift care, care and inclusion counselling: we bring calm and professional judgement to where people need it — at home, in familiar surroundings, with you. Our team works in English throughout.',
    ctaContact: 'Request a first conversation',
    ctaServices: 'Our services',
    ctaCall: 'Call us',
    imageAlt: 'The Heilpraxis Frommholz team with a client during home and inpatient support',
    promise: 'We see the person. Not the care level.',
    promiseLabel: '— Our promise',
  },
  trust: {
    yearsLabel: 'years of care experience',
    reachableNum: '24/7',
    reachableLabel: 'reliably reachable',
    employedNum: '100 %',
    employedLabel: 'directly employed',
    regionNum: 'Berlin',
    regionLabel: '& surroundings',
  },
  leistungenSection: {
    eyebrow: 'What we offer',
    h2Line1: 'Six ways',
    h2Emphasis: 'to be close.',
    lead: 'We look after private clients in their own homes. Some need only a few hours a week, others continuous companionship — and some, at first, simply a good conversation.',
    all: 'View all services →',
    more: 'Learn more →',
  },
  qualitaet: {
    eyebrow: 'Standards & safeguards',
    h2Line1: 'What you can',
    h2Emphasis: 'rely on.',
    lead: 'Good care begins with the question of who enters your home — and on what terms. We settle that cleanly, verifiably and without grey areas.',
    points: [
      {
        title: '100 % directly employed',
        text: 'Every member of staff is employed by us with full social insurance — no rotating freelancers, no grey market.',
      },
      {
        title: 'Enhanced background check',
        text: 'Every carer presents an enhanced police background certificate before entering your home.',
      },
      {
        title: 'German and English, fluently',
        text: 'Our carers speak native-level German, and English-speaking care is available throughout — from the first call to daily companionship.',
      },
      {
        title: 'Consistent, familiar faces',
        text: 'A small, settled team: two to four familiar faces per client instead of a different carer every day.',
      },
      {
        title: '24/7 — lawful rotating shifts',
        text: 'Round-the-clock care delivered by a lawful rotating shift team, not as a grey-market live-in arrangement.',
      },
    ],
  },
  ablauf: {
    eyebrow: 'How it works',
    h2Line1: 'Three steps,',
    h2Emphasis: 'no rush.',
    steps: [
      { title: 'Getting to know you', text: 'A first conversation — by phone or at your home. We listen and establish what is genuinely needed.' },
      { title: 'Planning', text: 'Together we draw up a care and companionship plan that fits — flexible and adjustable at any time.' },
      { title: 'Companionship', text: 'A small, settled team accompanies you, with regular contact and one person always available to you.' },
    ],
    outroBefore: 'And afterwards you stay informed:',
    outroLink: 'your family portal for relatives →',
  },
  familienbereich: {
    eyebrow: 'For relatives',
    h2Line1: 'Your family portal —',
    h2Emphasis: 'always informed,',
    h2Line2: 'without having to ask.',
    lead: 'Care concerns the whole family. In your protected family portal you can see at any time who is there and when, what is being billed and what has been documented — in one place, included for every client.',
    bausteine: [
      { title: 'Schedules', text: 'Who is coming, and when? Your relative’s current care schedule — visible at any time, always up to date.' },
      { title: 'Invoices', text: 'Every invoice in one clear place, itemised transparently and available whenever you need it.' },
      { title: 'Documentation', text: 'What happened? The care record — traceable for authorised relatives, close to your loved one’s daily life.' },
    ],
    note: 'Protected, encrypted access — for authorised relatives only. We set it up individually for your family.',
    ctaMore: 'Learn more →',
    ctaSetup: 'Set it up in the first conversation',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    h2Line1: 'What people',
    h2Emphasis: 'ask beforehand.',
  },
  kontakt: {
    eyebrow: 'Get in touch',
    h2Line1: 'Let us start with a',
    h2Emphasis: 'conversation.',
    lead: 'Wondering whether our support is the right fit? We take the time for a first conversation, with no obligation — by phone, by email or at your home.',
    successTitle: 'Thank you — we have received your message.',
    successFallback: 'We will get back to you within a few days. In urgent cases you can reach us directly on ',
    honeypotLabel: 'Please leave this empty',
    requiredNote: '* required field',
    labelName: 'Name *',
    placeholderName: 'Your name',
    labelReach: 'Phone or email *',
    placeholderReach: 'How may we reach you?',
    labelSubject: 'What is this about? *',
    subjects: [
      'First conversation about care',
      'Bedside or night companion',
      '24-hour care',
      'Care consulting',
      'Travel companion care',
      'Hospice companion',
      'Something else',
    ],
    labelMessage: 'Your message (optional)',
    placeholderMessage: 'Tell us briefly what is on your mind…',
    consentBefore: '* I consent to my details being stored and processed in order to handle my enquiry. Information on data processing can be found in the ',
    consentLink: 'privacy policy',
    consentAfter: ' (in German).',
    submit: 'Send message',
    submitting: 'Sending …',
  },
  footer: {
    familyLink: '→ Family portal for relatives',
    headingLeistungen: 'Services',
    headingThemen: 'Guides',
    headingStandorte: 'Care in your neighbourhood',
    allLeistungen: '→ All services',
    allThemen: '→ All guides',
    allStandorte: '→ All locations',
    hauptstandort: 'main office',
    rights: 'All rights reserved.',
    impressum: 'Legal notice',
    datenschutz: 'Privacy policy',
    agb: 'Terms',
    karriere: 'Careers',
    schichtplaner: 'Staff scheduler',
    schichtplanerTitle: 'Staff area (scheduler) — external site',
    germanOnlyNote: 'Legal notice, privacy policy, terms and careers are available in German only.',
  },
};
```

- [ ] **Step 5: `lib/i18n/dictionaries/index.ts` schreiben**

```ts
import type { Locale } from '../config';
import { de, type Dictionary } from './de';
import { en } from './en';

/**
 * Bewusst kein Deep-Merge: eine Sprache hat ihr Woerterbuch entweder
 * vollstaendig (der Typ erzwingt das) oder gar nicht. Fehlt es, erscheint die
 * Oberflaeche auf Deutsch — sichtbar unfertig statt halb uebersetzt.
 * Spanisch und Italienisch kommen in Etappe 3 und 4 dazu.
 */
const DICTIONARIES: Partial<Record<Locale, Dictionary>> = { de, en };

export function getDictionary(lang: Locale): Dictionary {
  return DICTIONARIES[lang] ?? de;
}

export type { Dictionary };
```

- [ ] **Step 6: Tests und Typprüfung laufen lassen**

Run: `npm test && npm run typecheck`
Expected: PASS. Meldet der Typecheck fehlende Schlüssel in `en.ts`, ergänzen.

- [ ] **Step 7: Commit**

```bash
git add lib/i18n/dictionaries tests/i18n/dictionaries.test.ts
git commit -m "feat(i18n): Woerterbuecher de/en mit typgesichertem Rueckfall"
```

---

## Task 4: Route-Groups — deutsche Routen verschieben, Verhalten unverändert

**Files:**
- Create: `components/SiteShell.tsx`
- Create: `app/(de)/layout.tsx`
- Delete: `app/layout.tsx`
- Move: alle `app/<route>/` außer `sitemap.ts`, `robots.ts`, `globals.css`, `favicon.ico`, `actions/`

Diese Aufgabe ändert **kein sichtbares Verhalten**. Sie schafft nur Platz für das zweite Root-Layout.

- [ ] **Step 1: Referenz-Routenliste vor dem Umbau festhalten**

```bash
npm run build 2>&1 | tee /tmp/routes-before.txt
```

Die Routentabelle in der Ausgabe ist der Soll-Zustand. Nach dem Umbau muss sie identisch sein.

- [ ] **Step 2: `components/SiteShell.tsx` anlegen**

Inhalt aus dem bisherigen `app/layout.tsx`, um `lang` erweitert:

```tsx
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { A11yBar } from '@/components/A11yBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MedicalBusinessJsonLd } from '@/components/SEO/JsonLd';
import { a11yInitScript } from '@/lib/a11y-init';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * Gemeinsames HTML-Geruest beider Root-Layouts. `<html lang>` kann nur in
 * einem Root-Layout gesetzt werden — darum gibt es zwei davon (Route-Groups
 * `(de)` und `(intl)`), die beide diese Komponente rendern.
 */
export function SiteShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const t = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
        <MedicalBusinessJsonLd />
      </head>
      <body className="bg-cream text-anthracite font-sans antialiased">
        <a href="#main" className="skip-link">{t.meta.skipLink}</a>
        <A11yBar lang={lang} />
        <Nav lang={lang} />
        <main id="main" className="pt-[122px]">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
```

`globals.css` wird hier **nicht** importiert — der Import zieht in die beiden Root-Layouts, damit er pro Root-Layout genau einmal vorkommt.

- [ ] **Step 3: Deutsche Routen verschieben**

```bash
mkdir -p "app/(de)"
git mv app/page.tsx "app/(de)/page.tsx"
git mv app/not-found.tsx "app/(de)/not-found.tsx"
for d in leistungen standorte themen karriere familienbereich soziales-engagement impressum datenschutz agb; do
  git mv "app/$d" "app/(de)/$d"
done
git mv app/layout.tsx "app/(de)/layout.tsx"
```

`app/sitemap.ts`, `app/robots.ts`, `app/globals.css`, `app/favicon.ico` und `app/actions/` bleiben unverändert an ihrem Platz.

- [ ] **Step 4: `app/(de)/layout.tsx` auf `SiteShell` umstellen**

Datei vollständig ersetzen durch:

```tsx
import type { Metadata } from 'next';
import '../globals.css';
import { SiteShell } from '@/components/SiteShell';
import { SITE, pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Pflege, Sitzwachen & Begleitung Berlin – ${SITE.name}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  ...pageMeta('/'),
  robots: { index: true, follow: true },
};

export default function DeRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
```

- [ ] **Step 5: `lang`-Prop in Nav, Footer und A11yBar aufnehmen**

Vorerst nur die Prop annehmen und ignorieren, damit der Build durchläuft. Die Lokalisierung folgt in Task 7 und 8.

In `components/Nav.tsx` die Signatur ändern:

```tsx
export function Nav({ lang }: { lang: Locale }) {
```

und oben ergänzen:

```tsx
import type { Locale } from '@/lib/i18n/config';
```

Dasselbe in `components/Footer.tsx` und `components/A11yBar.tsx`.

Damit ESLint nicht über die ungenutzte Prop stolpert, in jeder der drei Komponenten direkt nach der Signatur einfügen:

```tsx
  void lang; // wird in Task 7/8 verwendet
```

- [ ] **Step 6: Build laufen lassen und mit der Referenz vergleichen**

```bash
npm run build 2>&1 | tee /tmp/routes-after.txt
diff <(grep -E '^[├└│]|^Route' /tmp/routes-before.txt) <(grep -E '^[├└│]|^Route' /tmp/routes-after.txt)
```

Expected: `diff` gibt nichts aus. Jede Abweichung bedeutet, dass eine deutsche URL sich geändert hat — beheben, bevor es weitergeht.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor(routing): deutsche Routen in Route-Group (de), Layout als SiteShell"
```

---

## Task 5: Seiteninhalte nach `components/pages/` mit `lang`-Prop

**Files:**
- Create: `components/pages/HomePage.tsx`, `LeistungenPage.tsx`, `LeistungDetailPage.tsx`, `StandortePage.tsx`, `StandortDetailPage.tsx`, `ThemenPage.tsx`, `ThemaDetailPage.tsx`, `FamilienbereichPage.tsx`, `SozialesEngagementPage.tsx`, `NotFoundPage.tsx`
- Modify: die zugehörigen `app/(de)/**/page.tsx`

Regel für jede Seite: Der komplette Rückgabewert der bisherigen Seitenkomponente zieht unverändert in `components/pages/<Name>Page.tsx` um, die Komponente bekommt `{ lang }: { lang: Locale }` und reicht `lang` an die Sektionskomponenten weiter. Die Datei unter `app/(de)/` behält ihre `metadata`- bzw. `generateMetadata`- und `generateStaticParams`-Exporte und rendert nur noch die neue Komponente.

- [ ] **Step 1: `components/pages/HomePage.tsx` anlegen**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { QualitaetSection } from '@/components/QualitaetSection';
import { AblaufSection } from '@/components/AblaufSection';
import { FamilienbereichSection } from '@/components/FamilienbereichSection';
import { FaqSection } from '@/components/FaqSection';
import { KontaktSection } from '@/components/KontaktSection';
import type { Locale } from '@/lib/i18n/config';

export function HomePage({ lang }: { lang: Locale }) {
  return (
    <>
      <Hero lang={lang} />
      <TrustStrip lang={lang} />
      <LeistungenGrid lang={lang} />
      <QualitaetSection lang={lang} />
      <AblaufSection lang={lang} />
      <FamilienbereichSection lang={lang} />
      <FaqSection lang={lang} />
      <KontaktSection lang={lang} />
    </>
  );
}
```

- [ ] **Step 2: `app/(de)/page.tsx` ersetzen**

```tsx
import { HomePage } from '@/components/pages/HomePage';

export default function Page() {
  return <HomePage lang="de" />;
}
```

- [ ] **Step 3: Dieselbe Umstellung für die übrigen neun Seiten**

Für jede der folgenden Dateien: Rückgabewert nach `components/pages/<Name>Page.tsx` verschieben, `lang`-Prop ergänzen, Metadaten und `generateStaticParams` in der Routendatei belassen.

| Routendatei | Neue Komponente | Props |
|---|---|---|
| `app/(de)/leistungen/page.tsx` | `LeistungenPage` | `lang` |
| `app/(de)/leistungen/[slug]/page.tsx` | `LeistungDetailPage` | `lang`, `slug` (deutscher Slug) |
| `app/(de)/standorte/page.tsx` | `StandortePage` | `lang` |
| `app/(de)/standorte/[slug]/page.tsx` | `StandortDetailPage` | `lang`, `slug` |
| `app/(de)/themen/page.tsx` | `ThemenPage` | `lang` |
| `app/(de)/themen/[slug]/page.tsx` | `ThemaDetailPage` | `lang`, `slug` |
| `app/(de)/familienbereich/page.tsx` | `FamilienbereichPage` | `lang` |
| `app/(de)/soziales-engagement/page.tsx` | `SozialesEngagementPage` | `lang` |
| `app/(de)/not-found.tsx` | `NotFoundPage` | `lang` |

Die Detail-Komponenten nehmen **immer den deutschen Slug** entgegen. Die Umrechnung aus dem übersetzten Slug passiert in Task 6 in der Routendatei — so bleibt in den Seitenkomponenten nur eine Slug-Welt.

Muster für eine Detailseite, am Beispiel Leistungen:

```tsx
// components/pages/LeistungDetailPage.tsx
import type { Locale } from '@/lib/i18n/config';

export function LeistungDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
  // bisheriger Rumpf der Seite, `params.slug` durch `slug` ersetzt
}
```

```tsx
// app/(de)/leistungen/[slug]/page.tsx — Metadaten und generateStaticParams bleiben
import { LeistungDetailPage } from '@/components/pages/LeistungDetailPage';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LeistungDetailPage lang="de" slug={slug} />;
}
```

- [ ] **Step 4: Karriere bleibt unangetastet**

`app/(de)/karriere/**`, `app/(de)/impressum`, `app/(de)/datenschutz`, `app/(de)/agb` werden **nicht** umgestellt — sie existieren nur auf Deutsch und brauchen keine `lang`-Prop.

- [ ] **Step 5: Build und Routenvergleich**

```bash
npm run build 2>&1 | tee /tmp/routes-after5.txt
diff <(grep -E '^[├└│]|^Route' /tmp/routes-before.txt) <(grep -E '^[├└│]|^Route' /tmp/routes-after5.txt)
```

Expected: `diff` gibt nichts aus.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor(pages): Seiteninhalte als Komponenten mit lang-Prop"
```

---

## Task 6: Übersetzter Routenbaum unter `app/(intl)/[lang]/`

**Files:**
- Create: `app/(intl)/[lang]/layout.tsx`, `page.tsx`, `not-found.tsx`
- Create: `app/(intl)/[lang]/[services]/page.tsx` und die übrigen Segment-Routen

Next.js kann pro Ebene nur **ein** dynamisches Segment haben. Da die Segmentnamen je Sprache verschieden sind (`services`/`servicios`/`servizi`), wird die zweite Ebene ebenfalls dynamisch: `[segment]` und `[segment]/[slug]`. Welche Seite gemeint ist, entscheidet `deHrefFrom`.

- [ ] **Step 1: `app/(intl)/[lang]/layout.tsx` anlegen**

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../globals.css';
import { SiteShell } from '@/components/SiteShell';
import { INTL_LOCALES, isIntlLocale, OG_LOCALE } from '@/lib/i18n/config';
import { SITE } from '@/lib/site-config';

export function generateStaticParams() {
  return INTL_LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isIntlLocale(lang)) return {};
  return {
    metadataBase: new URL(SITE.url),
    title: { template: `%s · ${SITE.name}` },
    openGraph: { locale: OG_LOCALE[lang] },
    robots: { index: true, follow: true },
  };
}

export default async function IntlRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
```

- [ ] **Step 2: Sprachstartseiten anlegen**

`app/(intl)/[lang]/page.tsx`:

```tsx
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/pages/HomePage';
import { isIntlLocale } from '@/lib/i18n/config';
import { intlPageMeta } from '@/lib/site-config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) return {};
  return intlPageMeta('/', lang);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isIntlLocale(lang)) notFound();
  return <HomePage lang={lang} />;
}
```

`intlPageMeta` entsteht in Task 9. Bis dahin kann der Import auf `pageMeta` zeigen; Task 9 stellt es um.

- [ ] **Step 3: Segment-Route anlegen**

`app/(intl)/[lang]/[segment]/page.tsx`:

```tsx
import { notFound } from 'next/navigation';
import { LeistungenPage } from '@/components/pages/LeistungenPage';
import { StandortePage } from '@/components/pages/StandortePage';
import { ThemenPage } from '@/components/pages/ThemenPage';
import { FamilienbereichPage } from '@/components/pages/FamilienbereichPage';
import { SozialesEngagementPage } from '@/components/pages/SozialesEngagementPage';
import { INTL_LOCALES, isIntlLocale } from '@/lib/i18n/config';
import { SEGMENTS, deHrefFrom, type TranslatedSegment } from '@/lib/i18n/slugs';
import { intlPageMeta } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return INTL_LOCALES.flatMap((lang) =>
    (Object.keys(SEGMENTS) as TranslatedSegment[]).map((key) => ({
      lang,
      segment: SEGMENTS[key][lang],
    })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; segment: string }> }) {
  const { lang, segment } = await params;
  if (!isIntlLocale(lang)) return {};
  return intlPageMeta(deHrefFrom(`/${lang}/${segment}`, lang), lang);
}

export default async function Page({ params }: { params: Promise<{ lang: string; segment: string }> }) {
  const { lang, segment } = await params;
  if (!isIntlLocale(lang)) notFound();

  const dePath = deHrefFrom(`/${lang}/${segment}`, lang);

  switch (dePath) {
    case '/leistungen': return <LeistungenPage lang={lang} />;
    case '/standorte': return <StandortePage lang={lang} />;
    case '/themen': return <ThemenPage lang={lang} />;
    case '/familienbereich': return <FamilienbereichPage lang={lang} />;
    case '/soziales-engagement': return <SozialesEngagementPage lang={lang} />;
    default: notFound();
  }
}
```

- [ ] **Step 4: Detail-Route anlegen**

`app/(intl)/[lang]/[segment]/[slug]/page.tsx`:

```tsx
import { notFound } from 'next/navigation';
import { LeistungDetailPage } from '@/components/pages/LeistungDetailPage';
import { StandortDetailPage } from '@/components/pages/StandortDetailPage';
import { ThemaDetailPage } from '@/components/pages/ThemaDetailPage';
import { INTL_LOCALES, isIntlLocale } from '@/lib/i18n/config';
import { deHrefFrom, localizedHref } from '@/lib/i18n/slugs';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { intlPageMeta } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  const dePaths = [
    ...leistungenWithDetail().map((l) => `/leistungen/${l.slug}`),
    ...THEMEN.map((t) => `/themen/${t.slug}`),
    ...STANDORTE.map((s) => `/standorte/${s.slug}`),
  ];

  return INTL_LOCALES.flatMap((lang) =>
    dePaths.map((dePath) => {
      const parts = localizedHref(dePath, lang).split('/').filter(Boolean);
      return { lang, segment: parts[1], slug: parts[2] };
    }),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; segment: string; slug: string }> }) {
  const { lang, segment, slug } = await params;
  if (!isIntlLocale(lang)) return {};
  return intlPageMeta(deHrefFrom(`/${lang}/${segment}/${slug}`, lang), lang);
}

export default async function Page({ params }: { params: Promise<{ lang: string; segment: string; slug: string }> }) {
  const { lang, segment, slug } = await params;
  if (!isIntlLocale(lang)) notFound();

  const dePath = deHrefFrom(`/${lang}/${segment}/${slug}`, lang);
  const [, deSegment, deSlug] = dePath.split('/');

  if (!deSlug) notFound();

  switch (deSegment) {
    case 'leistungen': return <LeistungDetailPage lang={lang} slug={deSlug} />;
    case 'themen': return <ThemaDetailPage lang={lang} slug={deSlug} />;
    case 'standorte': return <StandortDetailPage lang={lang} slug={deSlug} />;
    default: notFound();
  }
}
```

- [ ] **Step 5: 404 für die übersetzten Fassungen**

`app/(intl)/[lang]/not-found.tsx`:

```tsx
import { NotFoundPage } from '@/components/pages/NotFoundPage';

export default function NotFound() {
  // In not-found.tsx sind keine params verfuegbar. Englisch als sinnvollste
  // Naeherung fuer alle nicht-deutschen Fassungen.
  return <NotFoundPage lang="en" />;
}
```

- [ ] **Step 6: Build laufen lassen**

```bash
npm run build
```

Expected: Die Routentabelle listet zusätzlich `/[lang]`, `/[lang]/[segment]` und `/[lang]/[segment]/[slug]`. Die Zahl der vorgerenderten Seiten steigt um `3 × (5 Segmente + 9 Leistungen + 8 Themen + Anzahl Standorte)`. Alle bisherigen deutschen Routen stehen unverändert in der Liste.

- [ ] **Step 7: Stichprobe im Dev-Server**

```bash
npm run dev
```

Aufrufen und je eine HTTP-200-Antwort erwarten:
`/en`, `/es/servicios`, `/it/servizi/assistenza-24-ore-berlino`, `/en/locations/moabit`, `/en/guides/dementia-support`

Ebenso prüfen: `/leistungen` und `/standorte/moabit` liefern weiterhin die deutsche Seite.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(i18n): uebersetzter Routenbaum unter /en, /es, /it"
```

---

## Task 7: Nav und Footer lokalisieren

**Files:**
- Modify: `components/Nav.tsx`, `components/Footer.tsx`

Alle internen Links werden weiterhin als **deutsche** Pfade geschrieben und durch `localizedHref` geschickt. Damit gibt es je Link genau eine Stelle mit der Wahrheit.

- [ ] **Step 1: `components/Nav.tsx` umstellen**

`LINKS` wird zu einer Funktion des Wörterbuchs, `void lang;` aus Task 4 entfällt:

```tsx
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function Nav({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: localizedHref('/leistungen', lang), label: t.nav.leistungen },
    { href: localizedHref('/standorte', lang), label: t.nav.standorte },
    { href: localizedHref('/familienbereich', lang), label: t.nav.familienbereich },
    { href: `${localizedHref('/', lang)}#qualitaet`, label: t.nav.qualitaet },
  ];
  const kontaktHref = `${localizedHref('/', lang)}#kontakt`;
  // …
```

Weiter ersetzen:
- Logo-`href="/"` → `href={localizedHref('/', lang)}`
- `alt={`${SITE.name} Wappen`}` → `alt={`${SITE.name} ${t.nav.logoAlt}`}`
- Der Untertitel `Pflege · Beratung · Begleitung` → `{t.nav.tagline}`
- `LINKS.map` → `links.map` (beide Vorkommen: Desktop-Liste und Mobil-Menü)
- Beide `href="/#kontakt"` → `href={kontaktHref}`
- Beide `Kontakt`-Beschriftungen → `{t.nav.kontakt}`
- `aria-label={open ? 'Menü schließen' : 'Menü öffnen'}` → `aria-label={open ? t.nav.menuClose : t.nav.menuOpen}`

Der Markenname `Heilpraxis Frommholz` bleibt in allen Sprachen unverändert — Eigenname.

- [ ] **Step 2: `components/Footer.tsx` umstellen**

```tsx
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

export function Footer({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const year = new Date().getFullYear();
  const isGerman = lang === DEFAULT_LOCALE;
  // …
```

Ersetzungen:
- Alle Überschriften und Linktexte aus `t.footer.*`
- Jedes interne `href` durch `localizedHref('<deutscher pfad>', lang)`
- `· Hauptstandort` → `· {t.footer.hauptstandort}`
- `Alle Rechte vorbehalten.` → `{t.footer.rights}`

Die Rechts- und Karriere-Links bleiben in allen Sprachen auf die deutschen Pfade zeigen — sie existieren nur dort:

```tsx
<Link href="/impressum" className="hover:text-gold-soft">{t.footer.impressum}</Link>
<Link href="/datenschutz" className="hover:text-gold-soft">{t.footer.datenschutz}</Link>
<Link href="/agb" className="hover:text-gold-soft">{t.footer.agb}</Link>
<Link href="/karriere" className="hover:text-gold-soft">{t.footer.karriere}</Link>
```

Direkt unter dieser Linkzeile den Hinweis ergänzen, dass diese Dokumente nur deutsch vorliegen:

```tsx
{!isGerman && t.footer.germanOnlyNote && (
  <p className="mt-3 text-xs text-warm-gray">{t.footer.germanOnlyNote}</p>
)}
```

Die Listen selbst (`LEISTUNGEN_SEO`, `THEMEN`, `STANDORTE`) bleiben in dieser Etappe deutsch beschriftet — die Inhaltsübersetzung kommt in E2 bis E4.

- [ ] **Step 3: Prüfen**

```bash
npm run typecheck && npm run lint && npm run build
```
Expected: alle drei ohne Fehler

- [ ] **Step 4: Commit**

```bash
git add components/Nav.tsx components/Footer.tsx
git commit -m "feat(i18n): Navigation und Footer lokalisiert"
```

---

## Task 8: Sprachschalter

**Files:**
- Create: `components/LanguageSwitcher.tsx`
- Modify: `components/A11yBar.tsx`

- [ ] **Step 1: `components/LanguageSwitcher.tsx` anlegen**

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_LABEL, LOCALE_NAME, type Locale } from '@/lib/i18n/config';
import { deHrefFrom, localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';

/**
 * Fuehrt auf dieselbe Seite in der Zielsprache. Der aktuelle Pfad wird dafuer
 * erst auf seinen deutschen Referenzpfad zurueckgerechnet. Seiten, die es in
 * der Zielsprache nicht gibt (Karriere, Rechtstexte), landen auf deren
 * Startseite — `localizedHref` regelt das.
 *
 * Bewusst echte Links statt eines Dropdowns: crawlbar, mit Tastatur bedienbar,
 * kein JavaScript noetig, um zu funktionieren.
 */
export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? '/';
  const t = getDictionary(lang);
  const dePath = deHrefFrom(pathname, lang);

  return (
    <div className="flex items-center gap-1" aria-label={t.meta.languageSwitcherLabel} role="group">
      {LOCALES.map((target, i) => {
        const active = target === lang;
        return (
          <span key={target} className="flex items-center">
            {i > 0 && <span aria-hidden="true" className="px-1 text-cream/30">·</span>}
            <Link
              href={localizedHref(dePath, target)}
              hrefLang={target}
              lang={target}
              aria-current={active ? 'true' : undefined}
              className={
                active
                  ? 'px-1 text-xs tracking-wider text-gold font-medium'
                  : 'px-1 text-xs tracking-wider text-cream/70 hover:text-gold-soft transition'
              }
            >
              <span className="sr-only">{LOCALE_NAME[target]}</span>
              <span aria-hidden="true">{LOCALE_LABEL[target]}</span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: In `components/A11yBar.tsx` einsetzen**

`void lang;` aus Task 4 entfernen und stattdessen:

```tsx
import { getDictionary } from '@/lib/i18n/dictionaries';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Locale } from '@/lib/i18n/config';

export function A11yBar({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  // … bestehender State bleibt unveraendert
```

Die `aria-label`- und Beschriftungstexte der vier Buttons aus dem Wörterbuch ziehen:

```tsx
<button onClick={() => applySize('normal')} className={`${btnBase} ${size === 'normal' ? btnActive : ''}`} aria-label={t.a11y.sizeNormal} aria-pressed={size === 'normal'}>A</button>
<button onClick={() => applySize('large')} className={`${btnBase} ${size === 'large' ? btnActive : ''}`} aria-label={t.a11y.sizeLarge} aria-pressed={size === 'large'}>A+</button>
<button onClick={() => applySize('xlarge')} className={`${btnBase} ${size === 'xlarge' ? btnActive : ''}`} aria-label={t.a11y.sizeXlarge} aria-pressed={size === 'xlarge'}>A++</button>
<button onClick={toggleContrast} className={`${btnBase} ${contrast ? btnActive : ''}`} aria-label={t.a11y.contrastToggle} aria-pressed={contrast}>{t.a11y.contrast}</button>
```

Den Sprachschalter zwischen Telefonnummer und Buttons setzen — dazu den rechten Container ersetzen durch:

```tsx
      <div className="flex items-center gap-3">
        <LanguageSwitcher lang={lang} />
        <span aria-hidden="true" className="hidden sm:block h-4 w-px bg-cream/20" />
        <div className="flex items-center gap-1.5">
          {/* die vier Buttons von oben */}
        </div>
      </div>
```

- [ ] **Step 3: Im Browser prüfen**

```bash
npm run dev
```

- `/` zeigt DE hervorgehoben; Klick auf EN führt auf `/en`
- `/leistungen` → Klick auf IT führt auf `/it/servizi`
- `/en/locations/moabit` → Klick auf ES führt auf `/es/ubicaciones/moabit`
- `/karriere` → Klick auf EN führt auf `/en`
- Mit `Tab` erreichbar, aktive Sprache trägt `aria-current="true"`

- [ ] **Step 4: Commit**

```bash
git add components/LanguageSwitcher.tsx components/A11yBar.tsx
git commit -m "feat(i18n): Sprachschalter im Kopfbereich"
```

---

## Task 9: hreflang, Canonical und og:locale

**Files:**
- Modify: `lib/site-config.ts`
- Test: `tests/i18n/meta.test.ts`

- [ ] **Step 1: Den fehlschlagenden Test schreiben**

`tests/i18n/meta.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { intlPageMeta, pageMeta } from '@/lib/site-config';
import { SITE } from '@/lib/site-config';

describe('pageMeta (deutsch)', () => {
  it('setzt Canonical auf die deutsche URL und listet alle Sprachen', () => {
    const meta = pageMeta('/leistungen');
    expect(meta.alternates.canonical).toBe(`${SITE.url}/leistungen`);
    expect(meta.alternates.languages).toEqual({
      de: `${SITE.url}/leistungen`,
      en: `${SITE.url}/en/services`,
      es: `${SITE.url}/es/servicios`,
      it: `${SITE.url}/it/servizi`,
      'x-default': `${SITE.url}/leistungen`,
    });
  });

  it('setzt fuer Seiten ohne Uebersetzung keine hreflang-Verweise', () => {
    const meta = pageMeta('/karriere');
    expect(meta.alternates.languages).toBeUndefined();
  });
});

describe('intlPageMeta', () => {
  it('setzt Canonical auf die uebersetzte URL', () => {
    const meta = intlPageMeta('/leistungen', 'en');
    expect(meta.alternates.canonical).toBe(`${SITE.url}/en/services`);
  });

  it('setzt og:locale passend zur Sprache', () => {
    expect(intlPageMeta('/', 'it').openGraph.locale).toBe('it_IT');
  });

  it('verweist wechselseitig auf alle Fassungen', () => {
    expect(intlPageMeta('/leistungen', 'es').alternates.languages).toEqual(
      pageMeta('/leistungen').alternates.languages,
    );
  });
});
```

- [ ] **Step 2: Test laufen lassen — muss fehlschlagen**

Run: `npm test`
Expected: FAIL, `intlPageMeta is not a function`

- [ ] **Step 3: `lib/site-config.ts` erweitern**

`OG_BASE` bleibt, verliert aber das feste `locale`; dafür kommen die neuen Funktionen ans Ende der Datei:

```ts
import { LOCALES, OG_LOCALE, DEFAULT_LOCALE, type Locale } from './i18n/config';
import { localizedHref } from './i18n/slugs';

/** Absolute URL fuer einen deutschen Referenzpfad in der Sprache `lang`. */
function absoluteUrl(deHref: string, lang: Locale): string {
  const path = localizedHref(deHref, lang);
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

/**
 * Existiert die Seite ueberhaupt uebersetzt? Nicht uebersetzte Seiten
 * (Karriere, Impressum, Datenschutz, AGB) duerfen keine hreflang-Verweise
 * tragen — sie zeigten sonst auf Seiten, die es nicht gibt.
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
```

`pageMeta` vollständig ersetzen durch:

```ts
/**
 * Canonical + og:url + hreflang fuer einen deutschen Seitenpfad.
 * `path` beginnt mit '/'. Startseite: pageMeta('/') → SITE.url.
 */
export function pageMeta(path: string) {
  return intlPageMeta(path, DEFAULT_LOCALE);
}

/** Dasselbe fuer eine uebersetzte Fassung. `dePath` ist der deutsche Referenzpfad. */
export function intlPageMeta(dePath: string, lang: Locale) {
  const url = absoluteUrl(dePath, lang);
  // `languages` bewusst immer als Schluessel, notfalls undefined — ein
  // bedingtes Objekt ergaebe einen Union-Typ, an dem `.languages` im Test
  // nicht mehr zugreifbar waere.
  const languages = languageAlternates(dePath);
  return {
    alternates: { canonical: url, languages },
    openGraph: {
      ...OG_BASE,
      images: [...OG_BASE.images],
      locale: OG_LOCALE[lang],
      url,
    },
  };
}
```

In `OG_BASE` die Zeile `locale: 'de_DE',` entfernen — sie wird jetzt je Aufruf gesetzt.

- [ ] **Step 4: `intlPageMeta`-Importe in den intl-Routen richtigstellen**

In `app/(intl)/[lang]/page.tsx`, `[segment]/page.tsx` und `[segment]/[slug]/page.tsx` den in Task 6 gesetzten Platzhalter-Import auf `intlPageMeta` umstellen, falls dort noch `pageMeta` steht.

- [ ] **Step 5: Prüfen**

```bash
npm test && npm run typecheck && npm run build
```
Expected: alle PASS

- [ ] **Step 6: Ausgelieferte Metadaten stichprobenartig ansehen**

```bash
npm run dev
```

```bash
curl -s http://localhost:3000/en/services | grep -Ei 'rel="(canonical|alternate)"|og:locale'
```

Expected: ein Canonical auf `/en/services`, vier `alternate`-Verweise plus `x-default`, `og:locale` = `en_GB`

- [ ] **Step 7: Commit**

```bash
git add lib/site-config.ts tests/i18n/meta.test.ts app/\(intl\)
git commit -m "feat(seo): hreflang, Canonical und og:locale je Sprache"
```

---

## Task 10: Sitemap um die Sprachfassungen erweitern

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: `app/sitemap.ts` umbauen**

Die bestehende Struktur bleibt; die übersetzbaren Einträge werden über die Sprachen vervielfacht. Karriere und Rechtstexte bleiben einsprachig.

```ts
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { KARRIERE } from '@/lib/karriere';
import { LOCALES } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/slugs';

// Bewusst statisch statt `new Date()` — sonst meldet jeder Deploy ALLE URLs als
// frisch geändert, was bei einer jungen, noch wenig gecrawlten Domain schadet.
// Dieses Datum nur bewusst hochsetzen, wenn sich Inhalte tatsächlich ändern.
const LAST_MODIFIED = new Date('2026-07-20');

type Entry = { dePath: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number };

/** Seiten, die es in allen vier Sprachen gibt. */
const TRANSLATED: Entry[] = [
  { dePath: '/', changeFrequency: 'weekly', priority: 1.0 },
  { dePath: '/leistungen', changeFrequency: 'monthly', priority: 0.9 },
  { dePath: '/themen', changeFrequency: 'monthly', priority: 0.8 },
  { dePath: '/standorte', changeFrequency: 'monthly', priority: 0.8 },
  { dePath: '/soziales-engagement', changeFrequency: 'yearly', priority: 0.5 },
  { dePath: '/familienbereich', changeFrequency: 'monthly', priority: 0.6 },
  ...leistungenWithDetail().map((l) => ({ dePath: `/leistungen/${l.slug}`, changeFrequency: 'monthly' as const, priority: 0.9 })),
  ...THEMEN.map((t) => ({ dePath: `/themen/${t.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ...STANDORTE.map((s) => ({ dePath: `/standorte/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
];

/** Nur auf Deutsch vorhanden — bewusst ohne Sprachfassungen. */
const GERMAN_ONLY: Entry[] = [
  { dePath: '/karriere', changeFrequency: 'monthly', priority: 0.7 },
  { dePath: '/impressum', changeFrequency: 'yearly', priority: 0.3 },
  { dePath: '/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
  { dePath: '/agb', changeFrequency: 'yearly', priority: 0.3 },
  ...KARRIERE.map((k) => ({ dePath: `/karriere/${k.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
];

function url(dePath: string, lang: (typeof LOCALES)[number]): string {
  const path = localizedHref(dePath, lang);
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const translated = TRANSLATED.flatMap((e) =>
    LOCALES.map((lang) => ({
      url: url(e.dePath, lang),
      lastModified: LAST_MODIFIED,
      changeFrequency: e.changeFrequency,
      // Uebersetzte Fassungen etwas niedriger — Deutsch bleibt die Hauptfassung.
      priority: lang === 'de' ? e.priority : Math.max(0.1, e.priority - 0.1),
    })),
  );

  const germanOnly = GERMAN_ONLY.map((e) => ({
    url: `${SITE.url}${e.dePath}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  return [...translated, ...germanOnly];
}
```

- [ ] **Step 2: Sitemap ansehen**

```bash
npm run dev
```

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c '<url>'
curl -s http://localhost:3000/sitemap.xml | grep -c '/en/'
curl -s http://localhost:3000/sitemap.xml | grep '/karriere'
```

Expected: Gesamtzahl deutlich höher als vorher; `/en/`-Einträge vorhanden; Karriere-Einträge kommen **nur** ohne Sprachpräfix vor.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(seo): Sitemap um EN/ES/IT erweitert, Karriere und Rechtstexte einsprachig"
```

---

## Task 11: Kontaktformular lokalisieren und Anfragesprache melden

**Files:**
- Modify: `components/KontaktSection.tsx`, `app/actions/send-contact.ts`

- [ ] **Step 1: `sendContact` um die Sprache erweitern**

In `app/actions/send-contact.ts` den Typ `Sanitized` und `sanitize` ergänzen:

```ts
type Sanitized = {
  name: string;
  contact: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot: string;
  lang: string;
};

function sanitize(formData: FormData): Sanitized {
  const get = (key: string) => String(formData.get(key) ?? '').trim().slice(0, 5000);
  return {
    name: get('name'),
    contact: get('contact'),
    subject: get('subject'),
    message: get('message'),
    consent: formData.get('consent') === 'on',
    honeypot: get('website'),
    lang: get('lang') || 'de',
  };
}
```

Oberhalb des Mail-Aufbaus einfügen:

```ts
const LANGUAGE_HINT: Record<string, string> = {
  de: 'Deutsch',
  en: 'Englisch — bitte auf Englisch antworten',
  es: 'Spanisch — Anfrage auf Spanisch, Betreuung auf Deutsch oder Englisch',
  it: 'Italienisch — Anfrage auf Italienisch, Betreuung auf Deutsch oder Englisch',
};
const languageHint = LANGUAGE_HINT[data.lang] ?? data.lang;
```

In `textBody` nach der `Thema:`-Zeile ergänzen:

```ts
    `Sprache:  ${languageHint}`,
```

In `htmlBody` nach der `Thema:`-Zeile ergänzen:

```ts
    `<b>Sprache:</b> ${escapeHtml(languageHint)}</p>`,
```

Dabei das schließende `</p>` der bisherigen `Thema:`-Zeile durch `<br>` ersetzen, damit der Absatz zusammenbleibt.

Die **Rückmeldungen an die Nutzerin** (Feldfehler, Rate-Limit, Erfolg) bleiben in dieser Etappe deutsch. Grund: sie werden von der Server-Action erzeugt, und die Übersetzung dieser Meldungen gehört sinnvoll zu E2. Damit die englische Seite trotzdem keine deutschen Texte zeigt, überschreibt `KontaktSection` in Step 2 die Erfolgsmeldung mit der Fassung aus dem Wörterbuch.

- [ ] **Step 2: `components/KontaktSection.tsx` lokalisieren**

```tsx
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

export function KontaktSection({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const [state, formAction, pending] = useActionState(sendContact, initialContactState);
  const success = state.status === 'success';
  const errorField = (key: 'name' | 'contact' | 'subject' | 'consent') => state.fieldErrors?.[key];
  // …
```

Ersetzungen im JSX, jeweils der offensichtliche Schlüssel aus `t.kontakt.*`. Vier Stellen brauchen mehr als reines Austauschen:

Verstecktes Sprachfeld ins Formular, direkt nach dem Honeypot:

```tsx
<input type="hidden" name="lang" value={lang} />
```

Erfolgsmeldung — auf nicht-deutschen Seiten nie die deutsche Server-Meldung zeigen:

```tsx
<div className="bg-cream-deep border border-gold/40 p-8">
  <p className="font-serif text-xl text-anthracite">{t.kontakt.successTitle}</p>
  <p className="mt-3 text-[15px] text-anthracite-soft leading-relaxed">
    {lang === DEFAULT_LOCALE && state.message ? (
      state.message
    ) : (
      <>
        {t.kontakt.successFallback}
        <a href={`tel:${BUSINESS.phone}`} className="underline hover:text-gold-deep">{BUSINESS.phoneDisplay}</a>.
      </>
    )}
  </p>
</div>
```

Auswahlliste aus dem Wörterbuch:

```tsx
<select
  id="contact-subject"
  name="subject"
  required
  defaultValue={t.kontakt.subjects[0]}
  className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:border-gold-deep"
>
  {t.kontakt.subjects.map((s) => (
    <option key={s}>{s}</option>
  ))}
</select>
```

Datenschutz-Link — er zeigt in allen Sprachen auf die deutsche Seite:

```tsx
<span>
  {t.kontakt.consentBefore}
  <a href="/datenschutz" className="underline hover:text-gold-deep">{t.kontakt.consentLink}</a>
  {t.kontakt.consentAfter}
</span>
```

- [ ] **Step 3: Prüfen**

```bash
npm run typecheck && npm run lint && npm run build
```
Expected: alle ohne Fehler

- [ ] **Step 4: Formular tatsächlich absenden**

```bash
npm run dev
```

Auf `/en#kontakt` das Formular ausfüllen und abschicken. In der eintreffenden Mail muss `Sprache: Englisch — bitte auf Englisch antworten` stehen.

Ist `RESEND_API_KEY` lokal nicht gesetzt, erscheint stattdessen die Fehlermeldung „Versand aktuell nicht möglich" — dann den Sprachvermerk stattdessen über eine Konsolenausgabe direkt vor dem `fetch` prüfen und diese danach wieder entfernen.

- [ ] **Step 5: Commit**

```bash
git add components/KontaktSection.tsx app/actions/send-contact.ts
git commit -m "feat(i18n): Kontaktformular lokalisiert, Anfragesprache in der Benachrichtigung"
```

---

## Task 12: Startseiten-Sektionen an die Wörterbücher anschließen

**Files:**
- Modify: `components/Hero.tsx`, `TrustStrip.tsx`, `LeistungenGrid.tsx`, `QualitaetSection.tsx`, `AblaufSection.tsx`, `FamilienbereichSection.tsx`, `FaqSection.tsx`, `LeistungCard.tsx`

Für jede Komponente dasselbe Muster: `{ lang }: { lang: Locale }` annehmen, `const t = getDictionary(lang);`, jeden festen deutschen String durch den passenden Schlüssel ersetzen, jedes interne `href` durch `localizedHref(…, lang)`.

- [ ] **Step 1: `components/Hero.tsx`**

```tsx
import Image from 'next/image';
import { BUSINESS } from '@/lib/site-config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function Hero({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const home = localizedHref('/', lang);
  // …
```

Zuordnung der Texte:

| Bisher | Neu |
|---|---|
| `Pflege & Beratung in ganz Berlin` | `{t.hero.eyebrow}` |
| `Pflege, die` / `zuhört.` / `Beratung, die trägt.` | `{t.hero.h1Line1}` / `{t.hero.h1Emphasis}` / `{t.hero.h1Line2}` |
| Der kursive Absatz | `{t.hero.lead}` |
| Der Fließtext darunter | `{t.hero.body}` |
| `Erstgespräch anfragen` | `{t.hero.ctaContact}` |
| `Unsere Leistungen` | `{t.hero.ctaServices}` |
| `Anrufen: {BUSINESS.phoneDisplay}` | `{t.hero.ctaCall}: {BUSINESS.phoneDisplay}` |
| `alt="Das Team …"` | `alt={t.hero.imageAlt}` |
| `Wir sehen den Menschen…` | `{t.hero.promise}` |
| `— Unser Versprechen` | `{t.hero.promiseLabel}` |

Die beiden Anker-Links werden absolut, damit sie auch von Unterseiten aus funktionieren:
`href="#kontakt"` → `href={`${home}#kontakt`}`, `href="#leistungen"` → `href={`${home}#leistungen`}`

- [ ] **Step 2: `components/TrustStrip.tsx`**

Das Modul-konstante `ITEMS` wird zu einer Funktion des Wörterbuchs. Die Jahreszahl steht bewusst weiter im Code, nur die Beschriftung kommt aus dem Wörterbuch:

```tsx
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

export function TrustStrip({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const items = [
    { num: '20+', label: t.trust.yearsLabel },
    { num: t.trust.reachableNum, label: t.trust.reachableLabel },
    { num: t.trust.employedNum, label: t.trust.employedLabel },
    { num: t.trust.regionNum, label: t.trust.regionLabel },
  ];
  // JSX unveraendert, `ITEMS.map` → `items.map`
```

- [ ] **Step 3: `components/LeistungenGrid.tsx` und `components/LeistungCard.tsx`**

In `LeistungenGrid`: `t.leistungenSection.eyebrow`, `h2Line1`, `h2Emphasis`, `lead`, `all`; der Link `href="/leistungen"` → `href={localizedHref('/leistungen', lang)}`; `lang` an `LeistungCard` durchreichen.

In `LeistungCard`: Signatur zu `{ leistung, lang }: { leistung: Leistung; lang: Locale }`, `Mehr erfahren →` → `{t.leistungenSection.more}`, `href={leistung.href}` → `href={localizedHref(leistung.href, lang)}`.

Titel und Kurztext der Karten bleiben in dieser Etappe deutsch — sie stammen aus `lib/leistungen.ts` und werden in E2 übersetzt.

- [ ] **Step 4: `components/QualitaetSection.tsx`**

`POINTS` entfällt; stattdessen `t.qualitaet.points` verwenden. Da die Liste jetzt fünf Einträge aus dem Wörterbuch hat, bleibt `CARD_DELAYS` unverändert:

```tsx
{t.qualitaet.points.map((p, i) => (
  <Reveal key={p.title} delay={CARD_DELAYS[i]}>
    <div className="h-full bg-anthracite p-8">
      <div className="font-serif text-lg text-gold">{p.title}</div>
      <p className="mt-3 text-[14px] leading-relaxed text-cream/80">{p.text}</p>
    </div>
  </Reveal>
))}
```

Ebenso `eyebrow`, `h2Line1`, `h2Emphasis`, `lead` ersetzen.

- [ ] **Step 5: `components/AblaufSection.tsx`**

`STEPS` entfällt zugunsten von `t.ablauf.steps`. Die römischen Ziffern bleiben im Code, weil sie sprachunabhängig sind:

```tsx
const NUMERALS = ['I', 'II', 'III'];
// …
{t.ablauf.steps.map((s, i) => (
  <Reveal key={NUMERALS[i]} delay={((i + 1) as 1 | 2 | 3)}>
    <div className="text-center">
      <div className="font-serif text-6xl font-light text-gold-deep tracking-wide">{NUMERALS[i]}</div>
      <h3 className="mt-4 font-serif text-2xl font-medium text-anthracite">{s.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{s.text}</p>
    </div>
  </Reveal>
))}
```

Der Schlusssatz: `{t.ablauf.outroBefore}` plus `<Link href={localizedHref('/familienbereich', lang)}>{t.ablauf.outroLink}</Link>`

- [ ] **Step 6: `components/FamilienbereichSection.tsx`**

`BAUSTEINE` → `t.familienbereich.bausteine`; die übrigen Texte aus `t.familienbereich.*`. Die beiden Links:
`/familienbereich` → `localizedHref('/familienbereich', lang)`, `/#kontakt` → `` `${localizedHref('/', lang)}#kontakt` ``

- [ ] **Step 7: `components/FaqSection.tsx`**

`eyebrow`, `h2Line1`, `h2Emphasis` aus `t.faq.*`. Die Fragen selbst kommen weiter aus `GLOBAL_FAQ` und bleiben deutsch — Übersetzung in E2. Damit Google keine deutschsprachigen FAQ als englische ausweist, wird das FAQ-JSON-LD auf nicht-deutschen Seiten weggelassen:

```tsx
import { DEFAULT_LOCALE } from '@/lib/i18n/config';
// …
{lang === DEFAULT_LOCALE && <FaqJsonLd items={GLOBAL_FAQ} />}
```

- [ ] **Step 8: Prüfen**

```bash
npm test && npm run typecheck && npm run lint && npm run build
```
Expected: alle PASS

- [ ] **Step 9: Englische Startseite ansehen**

```bash
npm run dev
```

`/en` aufrufen. Erwartung: Kopfbereich, Hero, Vertrauensleiste, Abschnittsüberschriften, Qualitätspunkte, Ablauf, Familienbereich, Kontaktformular und Footer vollständig auf Englisch. Deutsch bleiben in dieser Etappe: die sechs Leistungskarten-Texte, die FAQ-Einträge und die Listen im Footer. Auf `/es` und `/it` ist die gesamte Oberfläche deutsch — das ist der beabsichtigte Zustand am Ende von E1.

- [ ] **Step 10: Commit**

```bash
git add components
git commit -m "feat(i18n): Startseiten-Sektionen aus den Woerterbuechern, englische Startseite fertig"
```

---

## Task 13: Abschlussprüfung

**Files:** keine

- [ ] **Step 1: Vollständiger Durchlauf**

```bash
npm test && npm run typecheck && npm run lint && npm run build
```
Expected: alle vier ohne Fehler

- [ ] **Step 2: Deutsche URLs gegen den Ausgangszustand prüfen**

```bash
diff <(grep -E '^[├└│]|^Route' /tmp/routes-before.txt | grep -v '\[lang\]') <(npm run build 2>&1 | grep -E '^[├└│]|^Route' | grep -v '\[lang\]')
```

Expected: keine Ausgabe. **Das ist die wichtigste Prüfung der ganzen Etappe.**

- [ ] **Step 3: Manuelle Prüfliste im Browser**

```bash
npm run dev
```

| Prüfung | Erwartung |
|---|---|
| `/`, `/leistungen`, `/standorte/moabit` | unverändert wie vorher |
| `/en`, `/es`, `/it` | laden, `<html lang>` jeweils korrekt |
| `/en/services/24-hour-care-berlin` | lädt |
| `/it/sedi/moabit` | lädt |
| `/es/guias/acompanamiento-en-demencia` | lädt |
| Sprachschalter von `/en/locations/moabit` nach ES | landet auf `/es/ubicaciones/moabit` |
| Sprachschalter von `/karriere` nach EN | landet auf `/en` |
| Quelltext `/en` | Canonical `/en`, vier `hreflang` plus `x-default` |
| Quelltext `/karriere` | keine `hreflang`-Verweise |
| `/sitemap.xml` | enthält `/en/`, `/es/`, `/it/`; Karriere nur einsprachig |
| Tastaturbedienung Sprachschalter | erreichbar, aktive Sprache mit `aria-current` |
| `/en#kontakt` Formular absenden | Mail enthält den Sprachvermerk |

- [ ] **Step 4: Änderungsprotokoll ergänzen**

In `CHANGELOG.md` oben einen Eintrag ergänzen:

```markdown
## Mehrsprachigkeit Etappe 1 — Fundament (2026-07-20)

- EN/ES/IT unter eigenen Pfaden (`/en`, `/es`, `/it`) mit übersetzten Slugs
- Sprachschalter im Kopfbereich, hreflang und Canonical je Sprache, Sitemap erweitert
- Englische Startseite und gesamte Oberfläche auf Englisch; ES/IT fallen auf Deutsch zurück
- Deutsche URLs unverändert
```

- [ ] **Step 5: Commit**

```bash
git add CHANGELOG.md
git commit -m "docs: CHANGELOG-Eintrag Mehrsprachigkeit Etappe 1"
```

---

## Was am Ende von Etappe 1 gilt

**Fertig:** Routing, Sprachschalter, SEO-Verdrahtung, englische Oberfläche und englische Startseite.

**Bewusst noch deutsch, kommt in E2 bis E4:** Leistungs-, Standort- und Themen-Inhalte, die FAQ-Einträge, die Footer-Listen, die Fehlermeldungen der Server-Action sowie die spanische und italienische Oberfläche. Auf `/es` und `/it` erscheint die Seite am Ende von E1 vollständig auf Deutsch — sichtbar unfertig statt halb übersetzt, und genau darum sollte E1 nicht ohne E2 live gehen.
