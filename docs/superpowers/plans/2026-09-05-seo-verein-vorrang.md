# SEO Verein-Vorrang — Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Die Heilpraxis-Website gibt ihre Sitzwachen- und Reise-Adressen per 301 an lebenpflegenreisen.de ab, damit die Ranking-Kraft beim Verein landet statt zu verfallen.

**Architecture:** `middleware.ts` hält eine einzige Abbildung `Pfad → Verein-URL` und antwortet mit 301. Die zugehörigen Seiten fallen aus den Datenquellen (`lib/leistungen-seo.ts`, `lib/themen.ts`, deren Übersetzungen, `lib/i18n/slugs.ts`) heraus; Sitemap und Übersichtsseiten erzeugen sich aus genau diesen Arrays und räumen sich dadurch selbst auf. Interne Verweise werden umgehängt, damit die Website nicht auf ihre eigenen Weiterleitungen zeigt.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript, Vitest 3, Deploy über Vercel bei Push auf `main`.

**Spec:** `docs/superpowers/specs/2026-09-05-seo-verein-vorrang-design.md`

**Baseline vor Beginn:** `npm test` → 210 Tests grün, `npm run typecheck` → keine Ausgabe. Wenn das nicht stimmt, erst klären, nicht weiterbauen.

---

### Task 1: Weiterleitungs-Landkarte anlegen und auf die Next-16-Konvention wechseln

Zwei Dinge in einem Schritt, weil sie dieselbe Datei betreffen:

1. **410 wird 301.** Die Abbildung enthält von Anfang an alle 36 Adressen. Die fünf noch existierenden Seiten werden dadurch sofort von der Weiterleitung verdeckt — das ist gewollt, die Löschung in Task 2–4 ist danach nur noch Aufräumen.
2. **`middleware.ts` wird `proxy.ts`.** Next.js 16 hat die Datei umbenannt und den Export von `middleware` auf `proxy` gedreht; die alte Form ist deprecated (`node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`). `AGENTS.md` verlangt, Deprecation-Hinweise zu beachten.

Die Landkarte liegt in `lib/weiterleitungen.ts`, nicht in `proxy.ts`: Die API-Referenz sagt, die Proxy-Datei solle genau eine Funktion plus `config` exportieren (`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`). Getrennt ist die Landkarte außerdem ohne Next-Laufzeit testbar.

**Files:**
- Create: `lib/weiterleitungen.ts`
- Create: `proxy.ts`
- Delete: `middleware.ts`
- Test: `tests/weiterleitungen.test.ts` (neu), `tests/middleware.test.ts` (gelöscht)

- [ ] **Step 1: Test schreiben**

Neue Datei `tests/weiterleitungen.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { WEITERLEITUNGEN } from '@/lib/weiterleitungen';
import { proxy } from '@/proxy';

function anfrage(pfad: string) {
  return new NextRequest(new URL(`https://heilpraxis-frommholz.de${pfad}`));
}

describe('301 auf den Verein', () => {
  it('deckt neun Seiten in vier Sprachen ab — 36 Adressen', () => {
    // 4 alte Krankenhaus-Adressen + 5 neue, jeweils de/en/es/it.
    expect(Object.keys(WEITERLEITUNGEN)).toHaveLength(36);
  });

  it('zeigt ausschliesslich auf Adressen des Vereins', () => {
    for (const [pfad, ziel] of Object.entries(WEITERLEITUNGEN)) {
      expect(ziel, pfad).toMatch(/^https:\/\/lebenpflegenreisen\.de\/[a-z-]+\/$/);
    }
  });

  it('antwortet auf jede Adresse mit 301 und dem hinterlegten Ziel', () => {
    for (const [pfad, ziel] of Object.entries(WEITERLEITUNGEN)) {
      const antwort = proxy(anfrage(pfad));
      expect(antwort.status, pfad).toBe(301);
      expect(antwort.headers.get('location'), pfad).toBe(ziel);
    }
  });

  it('leitet auch mit abschliessendem Schraegstrich weiter', () => {
    for (const pfad of Object.keys(WEITERLEITUNGEN)) {
      expect(proxy(anfrage(`${pfad}/`)).status, pfad).toBe(301);
    }
  });

  it('schickt die vier Sprachfassungen auf dasselbe deutsche Ziel', () => {
    expect(WEITERLEITUNGEN['/leistungen/sitzwachen-berlin']).toBe(
      WEITERLEITUNGEN['/en/services/bedside-companion-berlin'],
    );
    expect(WEITERLEITUNGEN['/themen/verhinderungspflege']).toBe(
      WEITERLEITUNGEN['/it/guide/assistenza-sostitutiva'],
    );
  });

  it('trifft die in der Spec festgelegten Ziele', () => {
    expect(WEITERLEITUNGEN['/leistungen/sitzwachen-berlin']).toBe('https://lebenpflegenreisen.de/sitzwachen/');
    expect(WEITERLEITUNGEN['/leistungen/hospiz-sitzwachen']).toBe('https://lebenpflegenreisen.de/beistand-lebensende/');
    expect(WEITERLEITUNGEN['/leistungen/klinik-begleitung-berlin']).toBe('https://lebenpflegenreisen.de/sitzwache-krankenhaus/');
    expect(WEITERLEITUNGEN['/themen/krankenhaus-begleitung']).toBe('https://lebenpflegenreisen.de/sitzwache-krankenhaus/');
    expect(WEITERLEITUNGEN['/leistungen/reisebegleitung-senioren']).toBe('https://lebenpflegenreisen.de/betreute-seniorenreisen/');
    expect(WEITERLEITUNGEN['/leistungen/nachtwachen-berlin']).toBe('https://lebenpflegenreisen.de/nachtwache-krankenhaus/');
    expect(WEITERLEITUNGEN['/themen/verhinderungspflege']).toBe('https://lebenpflegenreisen.de/verhinderungspflege/');
    expect(WEITERLEITUNGEN['/themen/demenz-begleitung']).toBe('https://lebenpflegenreisen.de/sitzwache-demenz/');
    expect(WEITERLEITUNGEN['/themen/palliativ-zuhause']).toBe('https://lebenpflegenreisen.de/beistand-lebensende/');
  });

  it('laesst lebende Adressen durch', () => {
    const lebend = [
      '/',
      '/leistungen',
      '/themen',
      '/leistungen/1-zu-1-betreuung-berlin',
      '/leistungen/24-stunden-betreuung',
      '/themen/pflegegrad-beantragen',
      '/en/services/one-to-one-care-at-home-berlin',
      '/es/servicios/atencion-individual-en-casa-berlin',
      '/it/servizi/assistenza-individuale-a-domicilio-berlino',
    ];
    for (const pfad of lebend) {
      expect(proxy(anfrage(pfad)).status, pfad).not.toBe(301);
    }
  });
});
```

- [ ] **Step 2: Test laufen lassen, Fehlschlag bestaetigen**

Run: `npm test -- tests/weiterleitungen.test.ts`
Expected: FAIL — weder `@/lib/weiterleitungen` noch `@/proxy` existieren.

- [ ] **Step 3: Die Landkarte anlegen**

Neue Datei `lib/weiterleitungen.ts`:

```ts
/**
 * Sitzwachen und begleitete Reisen sind Sache des gemeinnuetzigen Vereins
 * Leben Pflegen Reisen e.V., nicht der Heilpraxis. Damit beide Domains sich
 * nicht laenger auf denselben Suchanfragen gegenseitig ausbieten, gibt die
 * Heilpraxis diese Adressen an den Verein ab.
 *
 * 301 statt 410: Eine dauerhafte Weiterleitung uebertraegt die aufgebaute
 * Ranking-Kraft an das Ziel, ein 410 wirft sie weg. Die vier Sprachfassungen
 * zeigen auf dieselbe deutsche Vereinsseite — der Verein hat keine
 * Uebersetzungen, und ein Sprachbruch ist besser als eine tote Adresse.
 *
 * Absichtlich getrennt von `proxy.ts`: Die Proxy-Datei soll laut Next-16-Doku
 * genau eine Funktion plus `config` exportieren.
 */
const VEREIN = 'https://lebenpflegenreisen.de';

export const WEITERLEITUNGEN: Record<string, string> = {
  // Sitzwachen — das Angebot im Ueberblick
  '/leistungen/sitzwachen-berlin': `${VEREIN}/sitzwachen/`,
  '/en/services/bedside-companion-berlin': `${VEREIN}/sitzwachen/`,
  '/es/servicios/acompanamiento-al-paciente-berlin': `${VEREIN}/sitzwachen/`,
  '/it/servizi/assistenza-al-capezzale-berlino': `${VEREIN}/sitzwachen/`,

  // Hospiz- und Sterbebegleitung
  '/leistungen/hospiz-sitzwachen': `${VEREIN}/beistand-lebensende/`,
  '/en/services/hospice-companion-care': `${VEREIN}/beistand-lebensende/`,
  '/es/servicios/acompanamiento-en-hospicio': `${VEREIN}/beistand-lebensende/`,
  '/it/servizi/accompagnamento-in-hospice': `${VEREIN}/beistand-lebensende/`,

  // Begleitung in der Klinik
  '/leistungen/klinik-begleitung-berlin': `${VEREIN}/sitzwache-krankenhaus/`,
  '/en/services/hospital-companion-berlin': `${VEREIN}/sitzwache-krankenhaus/`,
  '/es/servicios/acompanamiento-hospitalario-berlin': `${VEREIN}/sitzwache-krankenhaus/`,
  '/it/servizi/accompagnamento-ospedaliero-berlino': `${VEREIN}/sitzwache-krankenhaus/`,

  '/themen/krankenhaus-begleitung': `${VEREIN}/sitzwache-krankenhaus/`,
  '/en/guides/hospital-support': `${VEREIN}/sitzwache-krankenhaus/`,
  '/es/guias/acompanamiento-hospitalario': `${VEREIN}/sitzwache-krankenhaus/`,
  '/it/guide/accompagnamento-ospedaliero': `${VEREIN}/sitzwache-krankenhaus/`,

  // Reisebegleitung
  '/leistungen/reisebegleitung-senioren': `${VEREIN}/betreute-seniorenreisen/`,
  '/en/services/senior-travel-companion': `${VEREIN}/betreute-seniorenreisen/`,
  '/es/servicios/acompanante-de-viaje-para-mayores': `${VEREIN}/betreute-seniorenreisen/`,
  '/it/servizi/accompagnatore-di-viaggio-anziani': `${VEREIN}/betreute-seniorenreisen/`,

  // Nachtwachen
  '/leistungen/nachtwachen-berlin': `${VEREIN}/nachtwache-krankenhaus/`,
  '/en/services/night-care-berlin': `${VEREIN}/nachtwache-krankenhaus/`,
  '/es/servicios/atencion-nocturna-berlin': `${VEREIN}/nachtwache-krankenhaus/`,
  '/it/servizi/assistenza-notturna-berlino': `${VEREIN}/nachtwache-krankenhaus/`,

  // Verhinderungspflege — Ratgeber
  '/themen/verhinderungspflege': `${VEREIN}/verhinderungspflege/`,
  '/en/guides/respite-care': `${VEREIN}/verhinderungspflege/`,
  '/es/guias/cuidado-de-respiro': `${VEREIN}/verhinderungspflege/`,
  '/it/guide/assistenza-sostitutiva': `${VEREIN}/verhinderungspflege/`,

  // Demenz
  '/themen/demenz-begleitung': `${VEREIN}/sitzwache-demenz/`,
  '/en/guides/dementia-support': `${VEREIN}/sitzwache-demenz/`,
  '/es/guias/acompanamiento-en-demencia': `${VEREIN}/sitzwache-demenz/`,
  '/it/guide/accompagnamento-nella-demenza': `${VEREIN}/sitzwache-demenz/`,

  // Palliativ zu Hause
  '/themen/palliativ-zuhause': `${VEREIN}/beistand-lebensende/`,
  '/en/guides/palliative-care-at-home': `${VEREIN}/beistand-lebensende/`,
  '/es/guias/cuidados-paliativos-en-casa': `${VEREIN}/beistand-lebensende/`,
  '/it/guide/cure-palliative-a-domicilio': `${VEREIN}/beistand-lebensende/`,
};
```

- [ ] **Step 4: `proxy.ts` anlegen und `middleware.ts` loeschen**

```bash
git rm middleware.ts tests/middleware.test.ts
```

Neue Datei `proxy.ts`:

```ts
import { NextResponse, type NextRequest } from 'next/server';
import { WEITERLEITUNGEN } from '@/lib/weiterleitungen';

/**
 * Heisst `proxy` und nicht mehr `middleware`: Next.js 16 hat die Konvention
 * umbenannt, die alte Form ist deprecated.
 */
export function proxy(request: NextRequest) {
  const pfad = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  const ziel = WEITERLEITUNGEN[pfad];
  if (ziel) {
    return NextResponse.redirect(ziel, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/leistungen/:slug', '/themen/:slug', '/:lang(en|es|it)/:segment/:slug'],
};
```

- [ ] **Step 5: Test laufen lassen, Erfolg bestaetigen**

Run: `npm test -- tests/weiterleitungen.test.ts`
Expected: PASS, 7 Tests.

- [ ] **Step 6: Pruefen, dass Next die neue Datei annimmt**

Run: `npm run build`
Expected: erfolgreicher Bau, **keine** Deprecation-Warnung zu `middleware`. Erscheint eine Warnung, dass keine Proxy-Datei gefunden wurde, liegt `proxy.ts` im falschen Verzeichnis — sie gehoert neben `app/`, also ins Projektwurzelverzeichnis.

- [ ] **Step 7: Committen**

```bash
git add lib/weiterleitungen.ts proxy.ts tests/weiterleitungen.test.ts
git commit -m "feat: 36 Adressen per 301 an den Verein, middleware.ts auf proxy.ts gedreht"
```

---

### Task 2: Die fünf Seiten aus den deutschen Datenquellen löschen

**Files:**
- Modify: `lib/leistungen-seo.ts` (Einträge `nachtwachen-berlin` ab Zeile 407, `reisebegleitung-senioren` ab Zeile 464)
- Modify: `lib/themen.ts` (Einträge `verhinderungspflege` ab Zeile 88, `demenz-begleitung` ab Zeile 287, `palliativ-zuhause` ab Zeile 356)
- Test: `tests/seo-verein-vorrang.test.ts` (neu)

- [ ] **Step 1: Test schreiben, der die Abwesenheit belegt**

Neue Datei `tests/seo-verein-vorrang.test.ts`:

```ts
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
```

- [ ] **Step 2: Test laufen lassen, Fehlschlag bestätigen**

Run: `npm test -- tests/seo-verein-vorrang.test.ts`
Expected: FAIL — alle drei Tests, weil die Einträge noch da sind.

- [ ] **Step 3: Die beiden Leistungen aus `lib/leistungen-seo.ts` löschen**

Den kompletten Objektliteral-Block von `slug: 'nachtwachen-berlin'` bis zum schließenden `},` vor `// === Money Page 7` entfernen, ebenso den Block ab `// === Money Page 7: Reisebegleitung für Senioren` bis zum schließenden `},` vor `] as const;`. Auch die Kommentarzeilen `// === Money Page 6…` und `// === Money Page 7…` mitnehmen. Übrig bleiben fünf Einträge.

- [ ] **Step 4: Die drei Themen aus `lib/themen.ts` löschen**

Die Objektliteral-Blöcke mit `slug: 'verhinderungspflege'`, `slug: 'demenz-begleitung'` und `slug: 'palliativ-zuhause'` jeweils vollständig entfernen. Übrig bleiben vier Einträge.

- [ ] **Step 5: Test laufen lassen**

Run: `npm test -- tests/seo-verein-vorrang.test.ts`
Expected: Die ersten beiden Tests PASS, der dritte („zeigt nirgends auf eine eigene Weiterleitung") FAIL — die internen Verweise kommen in Task 3 dran.

- [ ] **Step 6: Committen**

```bash
git add lib/leistungen-seo.ts lib/themen.ts tests/seo-verein-vorrang.test.ts
git commit -m "feat: Reisebegleitung, Nachtwachen und drei Ratgeberseiten entfernt"
```

---

### Task 3: Interne Verlinkung umhängen

Ohne diesen Schritt zeigt die Website auf ihre eigenen Weiterleitungen — Google wertet das als vermeidbaren Umweg, und Nutzer landen unvermittelt beim Verein.

**Files:**
- Modify: `lib/leistungen.ts:67`, `lib/leistungen.ts:71-79`
- Modify: `lib/standorte.ts:133`, `:231`, `:513`, `:564`, `:719`
- Modify: `lib/themen.ts:80`, `:209` (Zeilennummern vor der Löschung aus Task 2 — nach Slug suchen, nicht nach Zeile)
- Modify: `lib/leistungen-seo.ts:111`, `:113`, `:328`, `:401` (dito)

- [ ] **Step 1: Die Reisebegleitungs-Karte aus `lib/leistungen.ts` entfernen**

Den Eintrag mit `slug: 'reisebegleitung'` (Zeilen 71–79) vollständig löschen, und `'reisebegleitung'` aus dem Vereinigungstyp `LeistungSlug` (Zeile 6) sowie `'travel'` aus `IconKey` entfernen, falls kein anderer Eintrag dieses Symbol nutzt. Übrig bleiben fünf Karten.

- [ ] **Step 2: Die Verhinderungspflege-Karte umhängen**

In `lib/leistungen.ts` beim Eintrag `slug: 'verhinderungspflege'`:

```ts
    href: '/leistungen',
```

statt `href: '/themen/verhinderungspflege',`. Die Karte bleibt — Verhinderungspflege *erbringen* ist ein bezahltes Angebot der Heilpraxis, nur die Ratgeberseite geht an den Verein.

- [ ] **Step 3: Verweise in `lib/standorte.ts` entfernen**

Diese fünf `relatedLinks`-Einträge ersatzlos streichen (die umgebenden Listen behalten ihre übrigen Einträge):

```ts
{ label: 'Reisebegleitung für Senioren', href: '/leistungen/reisebegleitung-senioren', note: 'oft für Heimreisen diplomatischer Klient*innen relevant' },
{ label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' },
{ label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung' },
```

(zwei Vorkommen von „Nachtwachen Berlin", zwei von „Demenz-Begleitung", eines von „Reisebegleitung für Senioren")

- [ ] **Step 4: Die Antwort zur Mutter aus Bayern umschreiben**

In `lib/standorte.ts` die FAQ-Antwort, die mit „Wir helfen. Reisebegleitung von Bayern hierher" beginnt, ersetzen durch:

```ts
answer: 'Wir helfen bei der Versorgung nach der Ankunft: Betreuung in Zehlendorf, Aufbau der Versorgungsstruktur, Begleitung zu Terminen. Erstgespräch am besten 4-6 Wochen vor dem geplanten Umzug.',
```

- [ ] **Step 5: Verweise in `lib/themen.ts` und `lib/leistungen-seo.ts` entfernen**

Diese `relatedLinks`-Einträge ersatzlos streichen:

```ts
{ label: 'Verhinderungspflege nutzen', href: '/themen/verhinderungspflege' },
{ label: 'Verhinderungspflege', href: '/themen/verhinderungspflege' },
{ label: 'Verhinderungspflege', href: '/themen/verhinderungspflege', note: 'der oft unterschätzte Anspruch' },
{ label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nächte abgedeckt werden müssen' },
{ label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nacht abgedeckt werden muss' },
{ label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung', note: 'Hintergrund zur Begleitung Demenzerkrankter' },
```

Die beiden `{ label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' }` in `lib/themen.ts` (in `demenz-begleitung` und `palliativ-zuhause`) verschwinden bereits mit Task 2.

- [ ] **Step 6: Test laufen lassen**

Run: `npm test -- tests/seo-verein-vorrang.test.ts`
Expected: PASS, alle drei Tests. Falls der dritte noch Treffer meldet, nennt die Fehlermeldung die verbliebenen Pfade — die auch noch entfernen.

- [ ] **Step 7: Committen**

```bash
git add lib/leistungen.ts lib/standorte.ts lib/themen.ts lib/leistungen-seo.ts
git commit -m "fix: interne Verweise auf die abgegebenen Seiten entfernt"
```

---

### Task 4: Übersetzungen und Slug-Register aufräumen

**Files:**
- Modify: `lib/i18n/slugs.ts:36-37`, `:46-47`, und der `verhinderungspflege`-Eintrag in `THEMA_SLUGS`
- Modify: `lib/i18n/content/{en,es,it}/leistungen-seo.ts`
- Modify: `lib/i18n/content/{en,es,it}/themen.ts`
- Modify: `lib/i18n/content/{en,es,it}/leistungen.ts`
- Modify: `lib/i18n/content/{en,es,it}/standorte.ts`
- Test: `tests/i18n/slugs.test.ts`

- [ ] **Step 1: Den Slug-Test erweitern**

In `tests/i18n/slugs.test.ts` den Test `'kennt die entfernten Krankenhaus-Seiten nicht mehr'` umbenennen und die fünf neuen Pfade ergänzen:

```ts
  it('kennt die an den Verein abgegebenen Seiten nicht mehr', () => {
    // Ohne Registereintrag fällt localizedHref auf die Sprachstartseite
    // zurück — genau das belegt, dass der Slug wirklich verschwunden ist.
    const abgegeben = [
      '/leistungen/sitzwachen-berlin',
      '/leistungen/hospiz-sitzwachen',
      '/leistungen/klinik-begleitung-berlin',
      '/themen/krankenhaus-begleitung',
      '/leistungen/reisebegleitung-senioren',
      '/leistungen/nachtwachen-berlin',
      '/themen/verhinderungspflege',
      '/themen/demenz-begleitung',
      '/themen/palliativ-zuhause',
    ];
    for (const pfad of abgegeben) {
      expect(localizedHref(pfad, 'en'), pfad).toBe('/en');
    }
  });
```

Außerdem in `describe('deHrefFrom')` die Zeile mit `'/themen/demenz-begleitung'` ersetzen durch `'/themen/pflegegrad-beantragen'` — das Thema gibt es nicht mehr.

- [ ] **Step 2: Test laufen lassen, Fehlschlag bestätigen**

Run: `npm test -- tests/i18n/slugs.test.ts`
Expected: FAIL — die fünf neuen Slugs stehen noch im Register.

- [ ] **Step 3: Slug-Register kürzen**

In `lib/i18n/slugs.ts` aus `LEISTUNG_SLUGS` die Zeilen `'nachtwachen-berlin'` und `'reisebegleitung-senioren'` löschen, aus `THEMA_SLUGS` die Zeilen `'verhinderungspflege'`, `'demenz-begleitung'` und `'palliativ-zuhause'`.

- [ ] **Step 4: Übersetzungen löschen**

Für jede der drei Sprachen `en`, `es`, `it`:
- in `leistungen-seo.ts` die Schlüssel `'nachtwachen-berlin'` und `'reisebegleitung-senioren'` samt Wert entfernen
- in `themen.ts` die Schlüssel `verhinderungspflege`, `'demenz-begleitung'` und `'palliativ-zuhause'` samt Wert entfernen
- in `leistungen.ts` den Schlüssel `reisebegleitung` samt Wert entfernen und beim Schlüssel `verhinderungspflege` das `href` auf `'/leistungen'` setzen
- in `standorte.ts` die `relatedLinks`-Einträge entfernen, deren `href` auf `/leistungen/reisebegleitung-senioren`, `/leistungen/nachtwachen-berlin` oder `/themen/demenz-begleitung` zeigt

- [ ] **Step 5: Alle Tests laufen lassen**

Run: `npm test`
Expected: PASS. `tests/i18n/content.test.ts` prüft, dass jede verbliebene deutsche Seite in allen drei Sprachen übersetzt ist — wenn dort etwas fehlschlägt, wurde ein Schlüssel zu viel gelöscht.

- [ ] **Step 6: Committen**

```bash
git add lib/i18n tests/i18n/slugs.test.ts
git commit -m "chore: Slug-Register und Übersetzungen der abgegebenen Seiten entfernt"
```

---

### Task 5: Sitemap-Datum und Abgrenzung der 1:1-Betreuung

**Files:**
- Modify: `app/sitemap.ts:13`
- Modify: `lib/leistungen-seo.ts` (Eintrag `1-zu-1-betreuung-berlin`)

- [ ] **Step 1: Sitemap-Datum hochsetzen**

In `app/sitemap.ts`:

```ts
const LAST_MODIFIED = new Date('2026-09-05');
```

Der Kommentar darüber sagt, dass das Datum nur bei echten Inhaltsänderungen hochgesetzt wird — fünf entfernte Seiten sind eine.

- [ ] **Step 2: Die 1:1-Betreuung gegen das Vereinsangebot abgrenzen**

Im Eintrag `slug: '1-zu-1-betreuung-berlin'` von `lib/leistungen-seo.ts` diese drei Felder ersetzen:

```ts
    metaTitle: '1:1-Betreuung zu Hause Berlin – privat gezahlt, examinierte Kraft',
    metaDescription: 'Privat gezahlte 1:1-Betreuung in der eigenen Wohnung in Berlin: eine examinierte Pflegekraft, ungeteilte Aufmerksamkeit, feste Bezugsperson. Kein Krankenhaus, keine Vermittlung.',
    secondaryKeywords: ['1:1-Betreuung zu Hause', 'Privat gezahlte Einzelbetreuung Berlin', 'Examinierte Pflegekraft Einzelbetreuung'],
```

Der Zweck: Google soll diese Seite von `/einzelbetreuung/` beim Verein unterscheiden können — dort geht es um ehrenamtliche Begleitung, hier um eine bezahlte Fachkraft zu Hause.

- [ ] **Step 3: Alle Tests laufen lassen**

Run: `npm test`
Expected: PASS.

- [ ] **Step 4: Committen**

```bash
git add app/sitemap.ts lib/leistungen-seo.ts
git commit -m "feat: Sitemap-Datum und schärfere Abgrenzung der 1:1-Betreuung"
```

---

### Task 6: Gesamtprüfung vor dem Push

- [ ] **Step 1: Tests, Typecheck, Lint**

```bash
npm test && npm run typecheck && npm run lint
```

Expected: Tests grün, `typecheck` ohne Ausgabe, `lint` ohne Fehler. Die Baseline vor Beginn war 210 Tests grün — jetzt sind es mehr, weil `tests/seo-verein-vorrang.test.ts` dazugekommen ist.

- [ ] **Step 2: Produktionsbau**

```bash
npm run build
```

Expected: erfolgreicher Bau. Hier fallen tote interne Links auf, die den Tests entgangen sind.

- [ ] **Step 3: Sitemap gegenprüfen**

Server in einem eigenen Terminal starten und dort laufen lassen:

```bash
npx next start -p 3210
```

In einem zweiten Terminal:

```bash
curl -s http://localhost:3210/sitemap.xml \
  | grep -cE 'reisebegleitung|nachtwachen|verhinderungspflege|demenz-begleitung|palliativ-zuhause|sitzwachen|hospiz|klinik-begleitung|krankenhaus'
```

Expected: `0`. Jede andere Zahl heißt, dass eine abgegebene Adresse noch in der Sitemap steht. Den Server erst nach Schritt 4 beenden.

- [ ] **Step 4: Weiterleitungen lokal prüfen**

Im zweiten Terminal, mit weiterhin laufendem `next start`:

```bash
for p in /leistungen/sitzwachen-berlin /leistungen/reisebegleitung-senioren /leistungen/nachtwachen-berlin /themen/verhinderungspflege /themen/demenz-begleitung /themen/palliativ-zuhause; do
  echo "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "http://localhost:3210$p")  $p"
done
```

Expected: jede Zeile beginnt mit `301` und nennt eine `https://lebenpflegenreisen.de/…`-Adresse.

- [ ] **Step 5: Push und Deploy**

```bash
git checkout main && git merge --no-ff feat/seo-verein-vorrang && git push
```

Vercel baut bei Push auf `main` automatisch, rund 45 Sekunden.

- [ ] **Step 6: Live gegenprüfen**

Nach dem Deploy:

```bash
for p in /leistungen/sitzwachen-berlin /leistungen/hospiz-sitzwachen /leistungen/klinik-begleitung-berlin /themen/krankenhaus-begleitung /leistungen/reisebegleitung-senioren /leistungen/nachtwachen-berlin /themen/verhinderungspflege /themen/demenz-begleitung /themen/palliativ-zuhause /en/services/senior-travel-companion /es/guias/cuidado-de-respiro /it/guide/cure-palliative-a-domicilio; do
  echo "$(curl -s -o /dev/null -w '%{http_code} → %{redirect_url}' "https://heilpraxis-frommholz.de$p")  $p"
done
```

Expected: zwölfmal `301` mit einem Ziel bei `lebenpflegenreisen.de`.

Und die Gegenprobe, dass nichts zu viel weitergeleitet wird:

```bash
for p in / /leistungen /themen /leistungen/1-zu-1-betreuung-berlin /leistungen/24-stunden-betreuung /themen/pflegegrad-beantragen; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' "https://heilpraxis-frommholz.de$p")  $p"
done
```

Expected: sechsmal `200`.

---

### Task 7: Search Console nachziehen

Kein Code — Handarbeit in der Search Console, Konto `kontakt@ericborchert.de` (`/u/1/`).

- [ ] **Step 1: Sitemap neu einreichen**

Property `heilpraxis-frommholz.de` → Sitemaps → `sitemap.xml` erneut einreichen.

- [ ] **Step 2: Neu-Crawl der Hauptadressen anstoßen**

Per URL-Prüfung „Indexierung beantragen" für die fünf deutschen Adressen mit Traffic:
`/leistungen/sitzwachen-berlin`, `/leistungen/hospiz-sitzwachen`, `/leistungen/nachtwachen-berlin`, `/leistungen/reisebegleitung-senioren`, `/themen/verhinderungspflege`.

Google erlaubt nur wenige Anträge am Tag — bei einer Kontingentmeldung am Folgetag weitermachen, nicht erzwingen.

- [ ] **Step 3: Zielseiten beim Verein prüfen**

Property `lebenpflegenreisen.de` → URL-Prüfung für `/sitzwachen/`, `/sitzwache-krankenhaus/`, `/beistand-lebensende/`, `/nachtwache-krankenhaus/`, `/betreute-seniorenreisen/`, `/verhinderungspflege/`, `/sitzwache-demenz/`. Alle müssen „URL ist auf Google" melden.

- [ ] **Step 4: Das Entfernen-Werkzeug NICHT anfassen**

Es wirkt nur sechs Monate und würde die Weiterleitung vor Google verstecken, statt sie auszuwerten.

- [ ] **Step 5: Nachmessung terminieren**

In vier bis acht Wochen (ab 2026-10-03) beide Properties erneut auf 3 Monate ansehen. Vergleichswerte aus der Spec:

| | Heilpraxis | Verein |
|---|---|---|
| Klicks gesamt | 124 | 371 |
| Impressionen | 3.590 | 18.031 |
| `sitzwache berlin` | 5 Klicks / 76 Impr. | 4 / 85 |
| `sitzwache` | 1 / 54 | 7 / 363 |
| `sitzwache krankenhaus` | 1 / 16 | 4 / 265 |

Erwartung: Vereinsklicks auf `sitzwache*` steigen, Heilpraxis fällt dort auf null. Ein Rückgang der Heilpraxis-Gesamtklicks ist Teil des Plans, kein Fehler.
