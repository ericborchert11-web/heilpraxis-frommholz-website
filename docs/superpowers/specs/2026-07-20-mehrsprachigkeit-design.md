# Mehrsprachigkeit: Englisch, Spanisch, Italienisch

**Datum:** 2026-07-20
**Status:** Design abgestimmt, Umsetzung offen

## Ziel

Die Website in Englisch, Spanisch und Italienisch anbieten, umschaltbar über einen
Schalter im Kopfbereich.

**Zielgruppe:** Wohlhabende internationale Familien in Berlin — Patientenakquise.
Nicht Recruiting. Die Übersetzungen zahlen auf Seriosität und Professionalität ein;
eine erkennbar schlechte oder halbfertige Fassung schadet mehr, als sie nutzt.

## Umfang

**Übersetzt wird:**

- Startseite (Hero, Leistungen, Qualität, Familienbereich, FAQ, Kontakt)
- Leistungen: Übersicht und alle Detailseiten
- Standorte: Übersicht und alle Detailseiten
- Themen: alle Ratgeberseiten
- Familienbereich, Soziales Engagement
- Navigation, Footer, Formulare, Fehlermeldungen, 404-Seite

**Deutsch bleibt:**

- Karriere (Übersicht und Detailseiten) — in EN/ES/IT aus der Navigation ausgeblendet
- Impressum, Datenschutz, AGB — rechtlich verbindliche Fassung. In den übersetzten
  Fassungen verlinkt mit sichtbarem Hinweis, dass das Dokument auf Deutsch vorliegt.

**Übersetzungsquelle:** Von Claude erstellt, direkt live — ohne vorgeschaltetes
Muttersprachler-Lektorat. Bewusste Entscheidung des Auftraggebers.

## Sprachkompetenz — bindende Leitplanke für die Texte

Was das Team tatsächlich leisten kann, bestimmt, was die Seiten versprechen dürfen:

| Sprache | Erstkontakt | Laufende Betreuung |
|---|---|---|
| Deutsch | ja | ja |
| Englisch | ja | ja |
| Spanisch | ja | nein — auf Deutsch oder Englisch |
| Italienisch | ja | nein — auf Deutsch oder Englisch |

Daraus folgt:

- Die **englische** Fassung bewirbt englischsprachige Betreuung offensiv als Vorteil.
- Die **spanische und italienische** Fassung stellen klar und sichtbar (Startseite und
  Kontaktbereich, nicht im Kleingedruckten) fest: Anfragen werden in der jeweiligen
  Sprache beantwortet, die laufende Betreuung erfolgt auf Deutsch oder Englisch.
- Keine Fassung behauptet muttersprachliche Pflegekräfte in ES/IT, solange das nicht
  zugesichert werden kann.

## Architektur

### Sprachen und URLs

Locales: `de` (Standard, ohne Präfix), `en`, `es`, `it`.

Die Seite ist live und indexiert; Canonicals, Sitemap und JSON-LD sind gepflegt.
**Kein bestehender deutscher Pfad ändert sich.** Die übersetzten Fassungen kommen als
eigene, statisch vorgerenderte Pfade daneben.

```
/                          de
/leistungen                de
/standorte/moabit          de
/en  /es  /it              übersetzte Startseiten
/en/services               /es/servicios          /it/servizi
/en/locations/moabit       /es/ubicaciones/moabit /it/sedi/moabit
```

**Slugs werden übersetzt.** Im Einzelnen:

| Ebene | Verhalten | Beispiel |
|---|---|---|
| Segmentnamen | übersetzt | `leistungen` → `services` / `servicios` / `servizi` |
| Leistungs-Slugs | übersetzt | `24h-betreuung` → `24h-care` |
| Themen-Slugs | übersetzt | Ratgebertitel sind Sachbegriffe, keine Eigennamen |
| Ortsteil-Slugs | unverändert | Moabit heißt in jeder Sprache Moabit |

Begründung: eine englische
URL mit deutschem Slug wirkt vor der Zielgruppe halbfertig, und genau darum geht es hier.
Kosten: je Sprache eine Zuordnungstabelle Slug↔Slug plus Sorgfalt bei internen Links.

### Routing: zwei Root-Layouts über Route-Groups

`<html lang="…">` kann nur in einem Root-Layout gesetzt werden und muss von der ersten
ausgelieferten Antwort an korrekt sein — für Google wie für Screenreader. Next.js erlaubt
mehrere Root-Layouts, sofern sie in Route-Groups liegen; Groups erscheinen nicht in der URL.

```
app/(de)/layout.tsx                    <html lang="de">
app/(de)/page.tsx                      → /
app/(de)/leistungen/page.tsx           → /leistungen
app/(de)/…                             alle bestehenden deutschen Routen

app/(intl)/[lang]/layout.tsx           <html lang="en|es|it">
app/(intl)/[lang]/page.tsx             → /en, /es, /it
app/(intl)/[lang]/[servicesSeg]/…      → /en/services, …
```

- Das bisherige `app/layout.tsx` entfällt; sein Inhalt wird zu einem gemeinsamen
  `components/SiteShell.tsx`, den beide Root-Layouts mit unterschiedlicher `lang`-Prop
  rendern. Schriftarten, `globals.css`, A11y-Init und JSON-LD bleiben zentral.
- `generateStaticParams` liefert `en`, `es`, `it` — alles statisch, keine Middleware,
  keine Laufzeitkosten.
- `app/sitemap.ts`, `app/robots.ts`, `app/favicon.ico`, `app/globals.css` bleiben, wo sie sind.
- Ein Sprachwechsel ist ein Wechsel zwischen Root-Layouts und löst einen vollständigen
  Seitenaufbau aus statt einer Client-Navigation. Für einen Sprachwechsel ist das richtig.

### Seiteninhalte als geteilte Komponenten

Der Inhalt jeder Seite zieht nach `components/pages/<Name>Page.tsx` und bekommt eine
`lang`-Prop. Die Routendateien sind danach dünne Hüllen:

```tsx
// app/(de)/leistungen/page.tsx
export default function Page() { return <LeistungenPage lang="de" /> }

// app/(intl)/[lang]/[seg]/page.tsx
export default async function Page({ params }) {
  const { lang } = await params
  return <LeistungenPage lang={lang} />
}
```

Damit gibt es je Seite genau eine Implementierung, nicht vier.

### Ablage der Übersetzungen

```
lib/i18n/config.ts                  Locale-Typ, Liste, Standard, Pfadhelfer
lib/i18n/slugs.ts                   Segment- und Slug-Zuordnungen je Sprache
lib/i18n/dictionaries/{en,es,it}.ts Oberflächentexte
lib/i18n/content/{en,es,it}/
    leistungen.ts  standorte.ts  themen.ts  faq.ts  seiten.ts
```

- Die deutschen `lib/*.ts` bleiben **unverändert** die Quelle der Wahrheit.
- Übersetzungsdateien sind per Slug gekeyt und **gegen die deutschen Typen typisiert**.
  Fehlt ein Feld, schlägt `npm run typecheck` fehl, statt dass es live auffällt.
- Zugriff ausschließlich über `getLeistungen(lang)`, `getStandorte(lang)`, `t(lang, key)`
  usw. Jede dieser Funktionen **fällt auf Deutsch zurück**, wenn eine Übersetzung fehlt:
  eine Lücke erzeugt nie eine leere Seite und bricht nie den Build.

### Sprachschalter

Position: rechts in der bestehenden dunklen Leiste ganz oben (`A11yBar`), neben
A / A+ / A++ / Kontrast. Kostet keine zusätzliche Höhe und liegt im Kopfbereich.

```
📞 0151 14140251                DE · EN · ES · IT     A  A+  A++  Kontrast
```

- Darstellung als **Textkürzel, nicht als Flaggen**. Flaggen bezeichnen Länder, nicht
  Sprachen, und wirken bei einem seriösen Haus touristisch.
- Aktive Sprache ist visuell markiert und trägt `aria-current="true"`; die Leiste selbst
  bekommt ein `aria-label`. Jeder Eintrag ist ein echter Link mit `hreflang`.
- Der Schalter führt auf **dieselbe Seite** in der Zielsprache. Existiert sie dort nicht
  (Karriere, Rechtstexte), führt er auf die Startseite der Zielsprache.
- Auf Mobilgeräten dieselbe Leiste, kompakter Satz.
- **Keine automatische Weiterleitung** anhand der Browsersprache: sie überrascht Nutzer,
  verhindert das gezielte Ansteuern einer Fassung und stört Caching wie Indexierung.

### SEO

- `alternates.languages` auf jeder Seite mit allen vier Fassungen plus `x-default` → Deutsch
- Canonical je Sprachfassung auf sich selbst
- `app/sitemap.ts` um alle Sprachversionen erweitert
- `og:locale` je Sprache (`de_DE`, `en_GB`, `es_ES`, `it_IT`), `OG_BASE` entsprechend parametrisiert
- JSON-LD: `inLanguage` gesetzt, Beschreibungstexte übersetzt; Adresse, Geo, Telefon und
  Öffnungszeiten bleiben in allen Fassungen identisch
- Nicht übersetzte Seiten (Karriere, Rechtstexte) erscheinen nur in der deutschen Sitemap
  und tragen keine `hreflang`-Verweise auf nicht existierende Fassungen

### Kontaktformular

- Labels, Platzhalter, Pflichtfeldhinweise, Erfolgs- und Fehlermeldungen kommen aus dem
  Wörterbuch der jeweiligen Sprache.
- Die Server-Action `app/actions/send-contact.ts` bekommt die Anfragesprache übergeben und
  vermerkt sie in der Benachrichtigungsmail, damit der Rückruf in der richtigen Sprache
  erfolgt.
- Die Rate-Limit- und Timeout-Logik bleibt unverändert.

## Etappen

Jede Etappe ist für sich lauffähig und deploybar.

| Etappe | Inhalt |
|---|---|
| **E1 — Fundament** | `lib/i18n/*`, Route-Groups, `SiteShell`, Seitenkomponenten mit `lang`-Prop, Sprachschalter, hreflang, Sitemap, `og:locale`. Nachweis: englische Startseite vollständig, ES/IT fallen sichtbar auf Deutsch zurück. |
| **E2 — Englisch** | Alle Inhalte auf Englisch: Leistungen, Standorte, Themen, Familienbereich, Soziales Engagement, Formulare, 404. |
| **E3 — Spanisch** | Dasselbe auf Spanisch, inklusive Sprachhinweis zur Betreuungssprache. |
| **E4 — Italienisch** | Dasselbe auf Italienisch, inklusive Sprachhinweis zur Betreuungssprache. |

Volumen zur Einordnung: rund 2.400 Zeilen deutscher Inhaltsdaten je Sprache.

## Prüfung

Automatisiert, je Etappe:

- `npm run typecheck` — deckt fehlende Übersetzungsfelder auf
- `npm run lint`
- `npm run build` — muss alle Sprachrouten statisch erzeugen

Manuell, je Sprache vor dem Deploy:

- Startseite, eine Leistungs-Detailseite, eine Standort-Detailseite, eine Themenseite
- Sprachschalter hin und zurück, auch von einer Unterseite aus
- Kontaktformular absenden; Mail enthält den Sprachvermerk
- Seitenquelltext: `<html lang>` korrekt, `hreflang`-Verweise vollständig und wechselseitig,
  Canonical zeigt auf sich selbst
- Karriere und Rechtstexte in der übersetzten Navigation nicht vorhanden bzw. mit
  Sprachhinweis verlinkt

## Bewusst nicht Teil dieser Arbeit

- Muttersprachliches Lektorat der Übersetzungen
- Übersetzung von Karriere und Rechtstexten
- Eine Übersetzungsoberfläche oder ein CMS — Übersetzungen liegen im Repository
- Automatische Spracherkennung und Weiterleitung
- Sprachabhängige Preise, Formulare oder Leistungsangebote
