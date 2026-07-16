# Etappe 3 — Neue Kiez-/Standortseiten (West/Südwest + Brandenburg) (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Fünf neue Standortseiten nach bestehendem Template — Nikolassee, Wannsee, Frohnau, Kleinmachnow, Potsdam (Brandenburg-Erweiterung durch Eric freigegeben, 2026-07-16). Live, in Sitemap, og:url/canonical korrekt, untereinander + mit Nachbarn verlinkt.

**Architecture:** Reines Daten-Feature: je Standort ein `SeoStandort`-Objekt im Array `STANDORTE` (`lib/standorte.ts`). Template, Route (`app/standorte/[slug]/page.tsx`), Sitemap (`app/sitemap.ts` mappt `STANDORTE`) und Index (`app/standorte/page.tsx` mappt `STANDORTE`) existieren bereits und ziehen neue Einträge automatisch. Canonical/og:url kommen ab Etappe 1 aus `pageMeta()`.

> **Footer-Warnung (Briefing):** `components/Footer.tsx:76` mappt **alle** `STANDORTE` → neue Einträge würden die Footer-Liste automatisch von 11 auf 16 aufblähen. Das widerspricht „Footer-Liste nicht endlos verlängern". Gegenmaßnahme: optionales Feld `hideInFooter?: boolean` + Footer-Filter (Task 4). Anbindung der neuen Seiten läuft laut Briefing über `/standorte`-Index + Nachbar-Links, nicht über den Footer.

**Tech Stack:** Next.js 16 (SSG via `generateStaticParams`), TypeScript. Kein Test-Runner → Verifikation per `next build` + Route-Check + Sitemap-Check + Sichtprüfung.

> **Voraussetzung:** Etappe 1 (og:url-Fix / `pageMeta`) ist gemerged — die neuen Seiten erben den Fix automatisch.

---

## Datentyp (Referenz, existiert)

`SeoStandort` (`lib/standorte.ts:11-27`): `slug, name, bezirk, plz[], geo{lat,lng}, hook, isHauptstandort?, metaTitle, metaDescription, h1, primaryKeyword, detail`. **Neu in dieser Etappe:** optionales Feld `hideInFooter?: boolean` (siehe Task 4) — steuert, ob ein Standort im Footer erscheint.
`detail` (Typ `SeoLeistungDetail` aus `lib/leistungen-seo.ts`): `intro[]`, `sections[]` (mit `heading`, optional `paragraphs`, `list`, `stronglist[{label,text}]`, `trailingParagraphs`), `faq[{question,answer}]`, `cta{text,href}`, `relatedLinks[{label,href,note?}]`.

**Vorlage zum Nachbauen:** die Einträge `dahlem` (`lib/standorte.ts:537-594`) und `schmargendorf` (`:598-653`). Aufbau je Seite: `intro` (2 Absätze, lokale Verankerung), Sektion „Wer … zu uns kommt", Sektion „Was Pflege in … ausmacht" (`stronglist`), Sektion „Krankenhäuser & Anfahrt" (`list` + `trailingParagraphs` mit Fahrzeit ab Moabit), 3 FAQ, `cta`, `relatedLinks` (3–4, mit Nachbar-Verlinkung).

---

## Verifizierte Faktenbasis je Standort (recherchiert, Quellen geprüft)

> Anfahrtszeiten ab **Moabit, Stephanstraße 46, 10559 Berlin** (Pkw, Näherung). Koordinaten sind Zentrums-Näherungen (~3 Dezimalstellen).

### 1. Nikolassee
- **slug:** `nikolassee` · **name:** `Nikolassee` · **bezirk:** `Steglitz-Zehlendorf`
- **plz:** `['14109', '14129', '14163']` (Haupt: 14129) · **geo:** `{ lat: 52.434, lng: 13.201 }`
- **Krankenhäuser:** Helios Klinikum Emil von Behring (Zehlendorf) ~4 km; Krankenhaus Waldfriede ~3 km; Immanuel Krankenhaus Wannsee ~3–4 km
- **Anfahrt:** ca. 20–30 Min (über AVUS/A115)
- **Charakter:** historische Villenkolonie (1901), sehr wohlhabende Seenlage (Schlachtensee/Nikolassee), ältere Eigentümer-Demografie
- **relatedLinks-Nachbarn:** Wannsee (neu), Grunewald, Zehlendorf + eine Leistung (z. B. `/leistungen/pflegedienst-selbstzahler`)
- **primaryKeyword:** `Pflegedienst Nikolassee`

### 2. Wannsee
- **slug:** `wannsee` · **name:** `Wannsee` · **bezirk:** `Steglitz-Zehlendorf`
- **plz:** `['14109']` · **geo:** `{ lat: 52.421, lng: 13.163 }`
- **Krankenhäuser:** Immanuel Krankenhaus Wannsee (im Ortsteil, Königstr. 63); Helios Emil von Behring ~6 km; Klinikum Ernst von Bergmann Potsdam ~8 km
- **Anfahrt:** ca. 25–35 Min (A115/AVUS)
- **Charakter:** Seenlage (Großer Wannsee/Havel), wohlhabend, grün; etablierte ältere Anwohner in Villen-/Wasserlagen
- **relatedLinks-Nachbarn:** Nikolassee (neu), Kleinmachnow (neu), Zehlendorf + eine Leistung
- **primaryKeyword:** `Pflegedienst Wannsee`

### 3. Frohnau
- **slug:** `frohnau` · **name:** `Frohnau` · **bezirk:** `Reinickendorf`
- **plz:** `['13465']` · **geo:** `{ lat: 52.640, lng: 13.291 }`
- **Krankenhäuser:** Vivantes Humboldt-Klinikum (Am Nordgraben, Reinickendorf) ~5–6 km; für Vollversorgung Humboldt-Klinikum als Referenz
- **Anfahrt:** ca. 25–35 Min (A111)
- **Charakter:** geplante Gartenstadt/Villenkolonie (1910), nördlichster Berliner Ortsteil; ruhig, wohlhabend, Ein­familien­häuser, etablierte Senioren-Eigentümer
- **relatedLinks (Sonderfall):** **geografisch isoliert** — KEINE „direkt angrenzende" Standortseite erfinden. Verlinken auf Moabit (HQ, `note: 'unser Sitz'`) + 2 Leistungen/Themen (z. B. `/leistungen/24-stunden-betreuung`, `/themen/demenz-begleitung`). Kein falscher „benachbart"-Vermerk.
- **primaryKeyword:** `Pflegedienst Frohnau`

### 4. Kleinmachnow (Brandenburg)
- **slug:** `kleinmachnow` · **name:** `Kleinmachnow` · **bezirk:** `Potsdam-Mittelmark (Brandenburg)`
- **plz:** `['14532']` · **geo:** `{ lat: 52.408, lng: 13.225 }`
- **Krankenhäuser:** Helios Emil von Behring (Zehlendorf) ~5–6 km (nächstes großes Akuthaus); Klinikum Ernst von Bergmann Potsdam ~12 km; Ev. KH Ludwigsfelde-Teltow ~6–8 km
- **Anfahrt:** ca. 25–40 Min (A115)
- **Charakter:** wohlhabende Kommune direkt an der Berliner Grenze (~20.000 EW), viele Villen/EFH, starkes Wachstum nach 1990
- **relatedLinks-Nachbarn:** Zehlendorf (grenznah), Wannsee (neu), Potsdam (neu) + eine Leistung. `note` bei Zehlendorf/Wannsee z. B. `'jenseits der Stadtgrenze'`
- **primaryKeyword:** `Pflegedienst Kleinmachnow`
- **Hinweis:** ist eine Gemeinde, **kein** Berliner Ortsteil — Formulierungen entsprechend (Brandenburg, Einsatz über die Stadtgrenze).

### 5. Potsdam (Brandenburg)
- **slug:** `potsdam` · **name:** `Potsdam` · **bezirk:** `Landeshauptstadt Brandenburg` (kreisfrei — **kein** Landkreis!)
- **plz:** `['14467', '14469', '14471', '14473', '14476', '14478', '14480', '14482']` (zentral: 14467) · **geo:** `{ lat: 52.399, lng: 13.066 }`
- **Krankenhäuser:** Klinikum Ernst von Bergmann (Charlottenstr. 72, ~1.100 Betten, größtes Haus); Oberlinklinik Babelsberg (Ortho); St. Josefs-Krankenhaus Potsdam-Sanssouci
- **Anfahrt:** ca. 35–50 Min (A115/AVUS)
- **Charakter:** Landeshauptstadt (~180.000 EW), wohlhabende Villenviertel (Babelsberg, Berliner Vorstadt), historische Mitte, Seenlagen; nennenswerte Senioren-/Besserverdiener-Quartiere im Westen/an den Seen
- **relatedLinks-Nachbarn:** Wannsee (neu), Kleinmachnow (neu), Grunewald (über die Havel) + eine Leistung
- **primaryKeyword:** `Pflegedienst Potsdam`
- **Hinweis:** Potsdam ist kreisfrei — nicht als Teil eines Landkreises darstellen. Weitere Anfahrt (35–50 Min) im Text ehrlich benennen; Brandenburg-Einsatz.

---

## Task 1: Standort-Einträge anlegen (5 × `SeoStandort`)

**Files:**
- Modify: `lib/standorte.ts` (neue Objekte ins `STANDORTE`-Array, vor der schließenden `];` in Zeile 654)

- [ ] **Step 1: Reihenfolge & Positionierung** — Die 5 Objekte am Ende des Arrays (nach `schmargendorf`) einfügen, jeweils mit Kommentar-Header im bestehenden Stil (`// === 12. Nikolassee ===` … `// === 16. Potsdam ===`).

- [ ] **Step 2: Je Standort ein vollständiges Objekt schreiben** — Felder exakt aus der Faktenbasis oben (slug/name/bezirk/plz/geo/metaTitle/metaDescription/h1/primaryKeyword/hook). `detail` nach der Dahlem/Schmargendorf-Vorlage mit **lokal spezifischem** Prosa-Inhalt (nicht generisch, nicht kopiert) füllen:
  - `intro`: 2 Absätze, konkrete lokale Verankerung (Seen/Villenkolonie/Grenze/Landeshauptstadt), 2. Absatz mit Bezug „Wir kommen zu Ihnen / Einsatz über die Stadtgrenze".
  - Sektion 1 „Wer in <Ort> zu uns kommt": `list`, 3–4 realistische Klient-Profile passend zum Charakter.
  - Sektion 2 „Was Pflege in <Ort> ausmacht": `stronglist`, 3 Punkte (`label` + `text`).
  - Sektion 3 „Krankenhäuser & Anfahrt": `list` (die o. g. Kliniken), `trailingParagraphs` mit ehrlicher Fahrzeit ab Moabit.
  - `faq`: genau 3 Fragen, lokal relevant (z. B. Frohnau/Potsdam: „Kommen Sie auch bis <Ort>? / Anfahrtspauschale?" — ehrlich beantworten).
  - `cta`: `{ text: 'Erstgespräch anfragen', href: '/#kontakt' }`.
  - `relatedLinks`: 3–4 laut Nachbar-Vorgaben oben (Frohnau: kein „benachbart"; Brandenburg: „jenseits der Stadtgrenze").
- **Ehrlichkeits-Leitplanke:** Für Brandenburg (Kleinmachnow/Potsdam) und Frohnau die größere Entfernung/Anfahrtspauschale transparent machen — nicht so tun, als läge es „um die Ecke".

> **Wortlaut-Checkpoint:** Standort-Prosa ist Marketing-Text auf der öffentlichen Seite. Entwürfe vor dem Push Eric zur Durchsicht geben (analog Etappe-2-Praxis), insbesondere Brandenburg-Framing.

- [ ] **Step 3: Typecheck/Build**

Run: `npm run build`
Expected: erfolgreich; `generateStaticParams` erzeugt jetzt 16 Standort-Seiten (vorher 11). In der Build-Ausgabe erscheinen `/standorte/nikolassee` … `/standorte/potsdam` als statische Routen.

- [ ] **Step 4: Commit**

```bash
git add lib/standorte.ts
git commit -m "feat(standorte): 5 neue Standortseiten (Nikolassee, Wannsee, Frohnau, Kleinmachnow, Potsdam)"
```

---

## Task 2: Nachbar-Verlinkung von bestehenden Seiten (bidirektional)

Damit die neuen Seiten nicht „Sackgassen" sind, in passenden **bestehenden** Standorten `relatedLinks` um die neuen ergänzen (Akzeptanz: „untereinander verlinkt").

**Files:**
- Modify: `lib/standorte.ts` (relatedLinks bestehender Einträge)

- [ ] **Step 1: Ergänzen**
  - `zehlendorf` (`:478`): relatedLink auf `/standorte/nikolassee` (`note: 'benachbart'`), `/standorte/wannsee` (`note: 'benachbart'`), `/standorte/kleinmachnow` (`note: 'jenseits der Stadtgrenze'`) — sparsam, nicht alle vier erzwingen; 1–2 sinnvolle ergänzen.
  - `grunewald` (`:424`): relatedLink auf `/standorte/nikolassee` bzw. `/standorte/wannsee` (`note: 'benachbart'`).
  - `dahlem` (`:537`): relatedLink auf `/standorte/kleinmachnow` (`note: 'grenznah'`).
- Bestehende `relatedLinks` nicht auf > 4–5 aufblähen; ggf. eine schwache Verlinkung ersetzen.

- [ ] **Step 2: Verifizieren, dass Verlinkung beidseitig ist**

```bash
grep -n "standorte/nikolassee\|standorte/wannsee\|standorte/frohnau\|standorte/kleinmachnow\|standorte/potsdam" lib/standorte.ts
```
Expected: jede neue Seite wird von mind. einer anderen Seite referenziert (außer Frohnau, das laut Faktenlage isoliert ist — dort reicht Anbindung über Index + ausgehende Links).

- [ ] **Step 3: Build + Commit**

```bash
npm run build
git add lib/standorte.ts
git commit -m "feat(standorte): Nachbar-Verlinkung bestehender Seiten auf neue Standorte"
```

---

## Task 3: `SERVICE_AREAS` erweitern (Local-SEO / JSON-LD `areaServed`)

**Files:**
- Modify: `lib/site-config.ts` (`SERVICE_AREAS`, Zeile mit dem Array)

- [ ] **Step 1: Neue Orte anhängen**

`SERVICE_AREAS` um `'Nikolassee', 'Wannsee', 'Frohnau', 'Kleinmachnow', 'Potsdam'` erweitern. (Wird in `MedicalBusinessJsonLd` als `areaServed` City-Liste ausgespielt.)

- [ ] **Step 2: Build + Commit**

```bash
npm run build
git add lib/site-config.ts
git commit -m "feat(seo): SERVICE_AREAS um neue Standorte (inkl. Brandenburg) erweitert"
```

---

## Task 4: Footer bounded halten (`hideInFooter`)

Verhindert, dass die 5 neuen Standorte die Footer-Liste aufblähen (Briefing).

**Files:**
- Modify: `lib/standorte.ts` (Typ `SeoStandort` + neue Einträge)
- Modify: `components/Footer.tsx:76`

- [ ] **Step 1: Typ erweitern** — in `SeoStandort` (nach `isHauptstandort?`) ergänzen:
```ts
  /** Aus der Footer-Standortliste ausblenden (Anbindung via Index + Nachbarn). */
  hideInFooter?: boolean;
```

- [ ] **Step 2: Neue Einträge flaggen** — in den 5 neuen Objekten aus Task 1 jeweils `hideInFooter: true` setzen. (Damit bleibt der Footer bei den 11 etablierten Berliner Ortsteilen; die neuen Seiten sind über `/standorte`-Index und Nachbar-Links erreichbar.)

- [ ] **Step 3: Footer filtern** — in `components/Footer.tsx` Zeile 76 `STANDORTE.map(...)` ändern zu `STANDORTE.filter((s) => !s.hideInFooter).map(...)`.

- [ ] **Step 4: Verifizieren**
```bash
npm run build
grep -n "hideInFooter" components/Footer.tsx lib/standorte.ts   # Filter + 5 Flags
```
Danach im Browser Footer prüfen: weiterhin 11 Standort-Links (keine 16).

- [ ] **Step 5: Commit**
```bash
git add lib/standorte.ts components/Footer.tsx
git commit -m "feat(footer): neue Standorte via hideInFooter aus Footer-Liste halten"
```

---

## Task 5: Verifikation & Abschluss

- [ ] **Step 1: Routen live** — `npx next start` nach Build, dann:
```bash
for s in nikolassee wannsee frohnau kleinmachnow potsdam; do
  echo -n "/standorte/$s → "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000/standorte/$s"
done
```
Expected: alle `200`.

- [ ] **Step 2: og:url === canonical (Erbe aus Etappe 1)**
```bash
curl -s http://localhost:3000/standorte/potsdam | grep -Eo '<meta property="og:url" content="[^"]*"|<link rel="canonical" href="[^"]*"'
```
Expected: beide `https://heilpraxis-frommholz.de/standorte/potsdam`.

- [ ] **Step 3: Sitemap enthält neue Seiten**
```bash
curl -s http://localhost:3000/sitemap.xml | grep -Eo 'standorte/(nikolassee|wannsee|frohnau|kleinmachnow|potsdam)'
```
Expected: alle 5 gelistet.

- [ ] **Step 4: Index verlinkt neue Seiten** — `/standorte` im Browser: die 5 neuen Kacheln erscheinen (Index mappt `STANDORTE` automatisch). Sichtprüfung Layout.

- [ ] **Step 5: Sichtprüfung Inhalt** — je neue Seite einmal öffnen; lokale Verankerung, Kliniken, Anfahrt, FAQ, interne Links prüfen; Brandenburg-Ehrlichkeit (Entfernung) kontrollieren.

- [ ] **Step 6: Wortlaut-Freigabe Eric** (Brandenburg-Framing) → dann **Push**
```bash
git push
```
- [ ] **Step 7: Vercel-Preview** — Stichprobe `/standorte/potsdam` + `/standorte/nikolassee`, Sitemap, interne Links.

---

## Akzeptanzkriterien (aus Briefing)

- [ ] 5 Seiten live (`200`), im `/standorte`-Index verlinkt.
- [ ] In `sitemap.xml` enthalten.
- [ ] og:url/canonical je Seite korrekt (identisch, via `pageMeta`).
- [ ] Untereinander/mit Nachbarn verlinkt (Frohnau isoliert → Anbindung via Index + ausgehende Links).
- [ ] Brandenburg-Entfernungen ehrlich dargestellt; Potsdam korrekt als kreisfrei.
- [ ] Footer-Liste NICHT aufgebläht: bleibt bei 11 Links (neue Standorte via `hideInFooter` ausgeblendet, Anbindung über Index/Nachbarn).
