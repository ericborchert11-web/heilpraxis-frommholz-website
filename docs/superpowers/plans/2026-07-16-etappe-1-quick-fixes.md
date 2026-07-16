# Etappe 1 — Technische & sprachliche Quick Fixes (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** og:url auf jeder Unterseite gleich Canonical, zwei Standort-/vier Leistungs-Sprachfehler korrigiert, Vereinsname vereinheitlicht.

**Architecture:** Ein zentraler SEO-Helper in `lib/site-config.ts` erzeugt Canonical + og:url synchron; alle Seiten spreaden ihn. Sprach- und Vereinsnamen-Fixes sind exakte String-Ersetzungen (jeweils vorab als eindeutig verifiziert).

**Tech Stack:** Next.js 16 (App Router, Metadata API), TypeScript. **Kein Test-Runner im Projekt** — verifiziert wird per `next build` + gerendertem HTML (`curl`) + Sichtprüfung.

> **Next-Metadata-Regel (belegt):** Setzt eine Seite ein eigenes `openGraph`, ersetzt das **das komplette** `openGraph` des Layouts (kein Deep-Merge) — Quelle: `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`, Abschnitt „Overwriting fields" (Zeilen 1358/1416). Deshalb liefert der Helper die gemeinsamen OG-Felder mit, damit siteName/images/type/locale nicht verloren gehen. Die aktuelle Ursache des Bugs: Unterseiten setzen **kein** `openGraph` → erben alle OG-Felder des Layouts inkl. `url` (Startseite).

---

## Betroffene Dateien

- Modify: `lib/site-config.ts` — neuer Export `OG_BASE` + Funktion `pageMeta(path)`
- Modify (je 1 Zeile `alternates` → `...pageMeta(...)`):
  - `app/layout.tsx`
  - `app/leistungen/page.tsx`, `app/leistungen/[slug]/page.tsx`
  - `app/standorte/page.tsx`, `app/standorte/[slug]/page.tsx`
  - `app/themen/page.tsx`, `app/themen/[slug]/page.tsx`
  - `app/karriere/page.tsx`, `app/karriere/[slug]/page.tsx`
  - `app/soziales-engagement/page.tsx`
  - `app/impressum/page.tsx`, `app/datenschutz/page.tsx`, `app/agb/page.tsx`
- Modify (Sprachfehler): `lib/standorte.ts`, `lib/leistungen-seo.ts`
- Modify (Vereinsname): `lib/leistungen.ts`

---

## Task 1: SEO-Helper `pageMeta` (og:url === canonical)

**Files:**
- Modify: `lib/site-config.ts` (am Ende, nach `SHOW_TESTIMONIALS`)

- [ ] **Step 1: Helper anlegen**

In `lib/site-config.ts` ganz unten anhängen:

```ts
/**
 * Gemeinsame OpenGraph-Basisfelder. Nach Next-Metadata-Regeln ersetzt eine
 * Seite, die `openGraph` setzt, das komplette `openGraph`-Objekt des Layouts
 * (kein Deep-Merge). Ohne diese Basis würden Unterseiten siteName/images/type
 * verlieren, sobald sie eine eigene og:url setzen.
 * Quelle: node_modules/next/dist/docs/.../generate-metadata.md (Overwriting fields)
 */
export const OG_BASE = {
  type: 'website',
  locale: 'de_DE',
  siteName: SITE.name,
  images: [SITE.defaultOgImage],
} as const;

/**
 * Baut Canonical + og:url für einen Seitenpfad synchron, sodass beide immer
 * identisch sind. `path` beginnt mit '/'. Startseite: pageMeta('/') → SITE.url.
 */
export function pageMeta(path: string) {
  const url = path === '/' ? SITE.url : `${SITE.url}${path}`;
  return {
    alternates: { canonical: url },
    openGraph: { ...OG_BASE, url },
  };
}
```

- [ ] **Step 2: Root-Layout auf Helper umstellen**

In `app/layout.tsx` den Import erweitern und `alternates` + `openGraph` durch `...pageMeta('/')` ersetzen.

Import ändern:
```ts
import { SITE, pageMeta } from '@/lib/site-config';
```

Im `metadata`-Objekt diesen Block:
```ts
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: SITE.name,
    url: SITE.url,
    images: [SITE.defaultOgImage],
  },
```
ersetzen durch:
```ts
  ...pageMeta('/'),
```
(Die restlichen Felder `metadataBase`, `title`, `description`, `robots` bleiben unverändert. `metadataBase` bleibt.)

- [ ] **Step 3: Statische Seiten umstellen (10 Dateien)**

In jeder der folgenden Dateien: (a) Import auf `import { SITE, pageMeta } from '@/lib/site-config';` erweitern (falls `SITE` nicht mehr sonst gebraucht wird, kann er stehen bleiben — schadet nicht), (b) die Zeile `alternates: { canonical: \`${SITE.url}/<pfad>\` },` durch `...pageMeta('/<pfad>'),` ersetzen.

| Datei | alt | neu |
|---|---|---|
| `app/leistungen/page.tsx:10` | `alternates: { canonical: \`${SITE.url}/leistungen\` },` | `...pageMeta('/leistungen'),` |
| `app/standorte/page.tsx:10` | `alternates: { canonical: \`${SITE.url}/standorte\` },` | `...pageMeta('/standorte'),` |
| `app/themen/page.tsx:10` | `alternates: { canonical: \`${SITE.url}/themen\` },` | `...pageMeta('/themen'),` |
| `app/karriere/page.tsx:10` | `alternates: { canonical: \`${SITE.url}/karriere\` },` | `...pageMeta('/karriere'),` |
| `app/soziales-engagement/page.tsx:9` | `alternates: { canonical: \`${SITE.url}/soziales-engagement\` },` | `...pageMeta('/soziales-engagement'),` |
| `app/impressum/page.tsx:8` | `alternates: { canonical: \`${SITE.url}/impressum\` },` | `...pageMeta('/impressum'),` |
| `app/datenschutz/page.tsx:8` | `alternates: { canonical: \`${SITE.url}/datenschutz\` },` | `...pageMeta('/datenschutz'),` |
| `app/agb/page.tsx:8` | `alternates: { canonical: \`${SITE.url}/agb\` },` | `...pageMeta('/agb'),` |

- [ ] **Step 4: Dynamische [slug]-Seiten umstellen (4 Dateien)**

In jeder `generateMetadata`-Rückgabe die `alternates`-Zeile durch `...pageMeta(...)` ersetzen (Import auf `{ ..., pageMeta }` erweitern):

| Datei | alt | neu |
|---|---|---|
| `app/leistungen/[slug]/page.tsx:29` | `alternates: { canonical: \`${SITE.url}/leistungen/${l.slug}\` },` | `...pageMeta(\`/leistungen/${l.slug}\`),` |
| `app/standorte/[slug]/page.tsx:28` | `alternates: { canonical: \`${SITE.url}/standorte/${s.slug}\` },` | `...pageMeta(\`/standorte/${s.slug}\`),` |
| `app/themen/[slug]/page.tsx:27` | `alternates: { canonical: \`${SITE.url}/themen/${t.slug}\` },` | `...pageMeta(\`/themen/${t.slug}\`),` |
| `app/karriere/[slug]/page.tsx:27` | `alternates: { canonical: \`${SITE.url}/karriere/${k.slug}\` },` | `...pageMeta(\`/karriere/${k.slug}\`),` |

> Hinweis: `SITE` bleibt in den [slug]-Dateien evtl. für andere Felder (z. B. `ServiceJsonLd` nutzt `SITE.url` gar nicht direkt in der Metadata) im Import — unbenutzte Imports meldet `eslint`; dann `SITE` aus dem Import entfernen, wo er nicht mehr referenziert wird.

- [ ] **Step 5: Build + Lint**

Run: `npm run build && npm run lint`
Expected: Build erfolgreich, keine TS-Fehler, keine ungenutzten Imports.

- [ ] **Step 6: og:url === canonical verifizieren (Akzeptanz)**

Run (in einem Terminal `npx next start` nach dem Build, in einem zweiten):
```bash
for p in "" "/leistungen/systemsprenger-betreuung" "/standorte/dahlem"; do
  echo "=== /$p ==="
  curl -s "http://localhost:3000$p" | grep -Eo '<meta property="og:url" content="[^"]*"|<link rel="canonical" href="[^"]*"'
done
```
Expected je Seite: `og:url` und `canonical` zeigen auf **dieselbe** absolute URL:
- `/` → `https://heilpraxis-frommholz.de`
- `/leistungen/systemsprenger-betreuung` → `.../leistungen/systemsprenger-betreuung`
- `/standorte/dahlem` → `.../standorte/dahlem`
Außerdem prüfen: `og:site_name` und `og:image` sind weiterhin vorhanden (nicht durch das Ersetzen verloren gegangen).

- [ ] **Step 7: Commit**

```bash
git add lib/site-config.ts app/**/page.tsx app/layout.tsx
git commit -m "fix(seo): og:url je Seite gleich Canonical via pageMeta-Helper"
```

---

## Task 2: Sprach- & Grammatikfehler (Etappe 1.2 + 1.3)

Funde aus dem Korrekturlauf (`themen.ts` war fehlerfrei). Jede Ersetzung wurde als **eindeutig** (genau 1 Vorkommen) verifiziert.

**Files:**
- Modify: `lib/standorte.ts`, `lib/leistungen-seo.ts`

- [ ] **Step 1: standorte.ts — 2 Fixes**

- `lib/standorte.ts:549` (Dahlem, Etappe 1.2): `das Botanische Garten` → `der Botanische Garten`
- `lib/standorte.ts:497` (Zehlendorf): `soviel sie kann` → `so viel sie kann`

- [ ] **Step 2: leistungen-seo.ts — 4 Fixes**

- `:185` `mit dem Betreuer als Vertretungsberechtigten zustande` → `mit dem Betreuer als Vertretungsberechtigtem zustande` (Kasus/Apposition Dativ)
- `:363` `wenn Erwartungen aneinander prallen` → `wenn Erwartungen aneinanderprallen` (Verb zusammen)
- `:505` `Trauerbegleitung-Ausbildung` → `Trauerbegleitungs-Ausbildung` (Fugen-s)
- `:590` `der Klient während der Reise medizinisch verschlechtert` → `der Klient sich während der Reise medizinisch verschlechtert` (fehlendes Reflexivpronomen)

- [ ] **Step 3: Verifizieren, dass alte Formen weg und neue da sind**

```bash
cd ~/Code/heilpraxis-frommholz-website
# Alte Formen dürfen NICHT mehr auftauchen (jeweils 0):
grep -Fc "das Botanische Garten" lib/standorte.ts
grep -Fc "soviel sie kann" lib/standorte.ts
grep -Fc "als Vertretungsberechtigten" lib/leistungen-seo.ts
grep -Fc "aneinander prallen" lib/leistungen-seo.ts
grep -Fc "Trauerbegleitung-Ausbildung" lib/leistungen-seo.ts
```
Expected: alle `0`.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: erfolgreich (Strings sind reine Content-Werte, keine Typänderung).

- [ ] **Step 5: Commit**

```bash
git add lib/standorte.ts lib/leistungen-seo.ts
git commit -m "fix(content): Rechtschreib- und Grammatikkorrekturen Standort-/Leistungsseiten"
```

---

## Task 3: Vereinsname vereinheitlichen (Etappe 1.4)

Offizieller Name: **Leben Pflegen Reisen e.V.** Alle anderen Vorkommen (`lib/leistungen-seo.ts`, `app/soziales-engagement/page.tsx`) sind bereits korrekt. Einziger Ausreißer: die Ampersand-Variante.

**Files:**
- Modify: `lib/leistungen.ts:71`

- [ ] **Step 1: Ersetzen**

`lib/leistungen.ts:71`, im `lead`:
- alt: `In Kooperation mit unserem Partnerverein „Leben & Pflegen & Reisen".`
- neu: `In Kooperation mit unserem Partnerverein Leben Pflegen Reisen e.V.`

(String exakt so ersetzen — inkl. Entfernen der deutschen Anführungszeichen, konsistent zu den anderen Fundstellen, die den Namen ohne Quotes und mit „e.V." führen.)

- [ ] **Step 2: Verifizieren, dass keine Variante mehr existiert**

```bash
grep -rn "Leben & Pflegen\|Leben&Pflegen\|Leben, Pflegen" lib app components   # erwartet: keine Treffer
grep -rn "Leben Pflegen Reisen" lib app components                              # alle Treffer mit „e.V." bzw. korrektem Namen
```
Expected: erste Zeile 0 Treffer; zweite Zeile nur die korrekte Schreibweise.

- [ ] **Step 3: Build + Commit**

```bash
npm run build
git add lib/leistungen.ts
git commit -m "fix(content): Vereinsname auf 'Leben Pflegen Reisen e.V.' vereinheitlicht"
```

---

## Task 4: Etappe abschließen

- [ ] **Step 1: Sichtprüfung** — `npm run dev`, im Browser `/`, `/standorte/dahlem`, `/leistungen/reisebegleitung-senioren` öffnen; Dahlem-Absatz, Reisebegleitungs-Lead und Startseite optisch prüfen (kein kaputtes Layout).
- [ ] **Step 2: Push**
```bash
git push
```
- [ ] **Step 3: Vercel-Preview** öffnen und Akzeptanz-Stichproben aus Task 1 Step 6 gegen die Preview-URL wiederholen (og:url === canonical).

---

## Akzeptanzkriterien (aus Briefing)

- [ ] og:url === canonical auf jeder Seite; Stichproben `/`, `/leistungen/systemsprenger-betreuung`, `/standorte/dahlem` bestätigt.
- [ ] `og:site_name` / `og:image` auf Unterseiten weiterhin vorhanden (kein Regressions-Verlust durch openGraph-Overwrite).
- [ ] Sprachfehler-Liste (6 Fixes) abgearbeitet, alte Formen per grep verschwunden.
- [ ] Vereinsname überall „Leben Pflegen Reisen e.V.", Ampersand-Variante entfernt.
