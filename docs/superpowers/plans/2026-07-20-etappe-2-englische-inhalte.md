# Mehrsprachigkeit Etappe 2 — Englische Inhalte Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/en` vollständig auf Englisch — Leistungen, Standorte, Themen, FAQ, Formularmeldungen — sodass die englische Fassung ohne deutsche Reste auslieferbar ist.

**Architecture:** Die deutschen Datendateien in `lib/` bleiben unverändert die Quelle der Wahrheit. Je Sprache liegt daneben eine Überlagerung in `lib/i18n/content/<lang>/`, nach deutschem Slug gekeyt und gegen die deutschen Typen typisiert. Zugriff ausschließlich über Zugriffsfunktionen, die je Eintrag auf Deutsch zurückfallen.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Vitest

---

## Ausgangslage

Etappe 1 ist fertig: Routing, Sprachschalter, hreflang, Sitemap, englische Oberfläche und englische Startseite stehen. Was auf `/en` noch deutsch ist:

| Bereich | Umfang |
|---|---|
| `lib/leistungen.ts` | 6 Startseiten-Karten (Titel + Kurztext) |
| `lib/leistungen-seo.ts` | 9 Leistungs-Detailseiten mit vollem Fließtext |
| `lib/themen.ts` | 8 Ratgeberseiten |
| `lib/standorte.ts` | 16 Standortseiten |
| `lib/faq-global.ts` | FAQ der Startseite |
| `app/actions/send-contact.ts` | Feldfehler, Rate-Limit, Fehlermeldungen |

Rund 2.400 Zeilen deutscher Fließtext.

## Leitplanken für die Übersetzung

**Sprachkompetenz — bindend.** Englischsprachige Betreuung darf offensiv beworben werden: sie ist in Erstkontakt und laufender Betreuung gesichert. Keine Aussage darf Spanisch oder Italienisch in der laufenden Betreuung versprechen.

**Zielgruppe.** Wohlhabende internationale Familien in Berlin. Die Standortseiten treffen das besonders gut — Charlottenburg, Grunewald, Dahlem, Zehlendorf, Wannsee sind genau die Bezirke, in denen diese Familien wohnen. Entsprechend sorgfältig übersetzen, nicht mechanisch.

**Kein Marketing-Zuwachs.** Übersetzt wird, was dasteht. Keine neuen Versprechen, keine zusätzlichen Superlative, keine erfundenen Zahlen.

**Rechtliche und fachliche Begriffe** bleiben identifizierbar. Deutsche Sozialrechtsbegriffe haben keine echte englische Entsprechung — Vorgehen: englische Erklärung mit dem deutschen Begriff in Klammern, beim ersten Vorkommen je Seite.

| Deutsch | Englisch |
|---|---|
| Pflegegrad | care level (*Pflegegrad*) |
| Pflegekasse | statutory long-term care insurance (*Pflegekasse*) |
| Verhinderungspflege | respite care (*Verhinderungspflege*) |
| Entlastungsbudget | relief budget (*Entlastungsbudget*) |
| MDK / Medizinischer Dienst | the medical review board (*Medizinischer Dienst*) |
| Selbstzahler | private-pay |
| Heilpraktiker | Heilpraktiker (staatlich geprüfter Heilpraktiker — non-medical practitioner licensed under German law) |
| Sitzwache | bedside companion |
| Verfügungsberechtigung | authority to act |

**Heilpraktiker nicht als „alternative practitioner" oder „naturopath" übersetzen** — das ist ein geschützter deutscher Rechtsstatus, und eine falsche Übersetzung wäre gegenüber einer internationalen Zielgruppe irreführend.

**Britisches Englisch** (`en_GB` ist als og:locale gesetzt): *organised*, *recognised*, *neighbourhood*, *centre*.

---

## Dateiübersicht

**Neu:**

| Datei | Verantwortung |
|---|---|
| `lib/i18n/content/index.ts` | Zugriffsfunktionen mit Rückfall auf Deutsch |
| `lib/i18n/content/en/leistungen.ts` | 6 Startseiten-Karten |
| `lib/i18n/content/en/leistungen-seo.ts` | 9 Leistungs-Detailseiten |
| `lib/i18n/content/en/themen.ts` | 8 Ratgeberseiten |
| `lib/i18n/content/en/standorte.ts` | 16 Standortseiten |
| `lib/i18n/content/en/faq.ts` | FAQ der Startseite |
| `tests/i18n/content.test.ts` | Schlüssel-Parität und Rückfall |

**Geändert:** `components/pages/*.tsx`, `components/{Footer,LeistungenGrid,FaqSection,SeoDetailContent}.tsx`, `lib/i18n/dictionaries/{de,en}.ts`, `app/actions/send-contact.ts`

**Unverändert:** `lib/leistungen.ts`, `lib/leistungen-seo.ts`, `lib/themen.ts`, `lib/standorte.ts`, `lib/faq-global.ts` — die deutsche Quelle wird nicht angefasst.

---

## Task 1: Überlagerungs-Infrastruktur

**Files:**
- Create: `lib/i18n/content/index.ts`
- Test: `tests/i18n/content.test.ts`

Die Zugriffsfunktionen liefern in dieser Aufgabe noch überall Deutsch — die Übersetzungsdateien kommen in Task 4 bis 7. Damit ist Task 1 für sich lauffähig und verändert nichts Sichtbares.

- [ ] **Step 1: Den fehlschlagenden Test schreiben**

`tests/i18n/content.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { getLeistungenSeo, getThemen, getStandorte, getLeistungen, getGlobalFaq } from '@/lib/i18n/content';
import { LEISTUNGEN_SEO } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { LEISTUNGEN } from '@/lib/leistungen';
import { GLOBAL_FAQ } from '@/lib/faq-global';

describe('Rückfall auf Deutsch', () => {
  it('liefert für Deutsch exakt die Quelldaten', () => {
    expect(getLeistungenSeo('de')).toEqual(LEISTUNGEN_SEO);
    expect(getThemen('de')).toEqual(THEMEN);
    expect(getStandorte('de')).toEqual(STANDORTE);
    expect(getLeistungen('de')).toEqual(LEISTUNGEN);
    expect(getGlobalFaq('de')).toEqual(GLOBAL_FAQ);
  });

  it('liefert für Spanisch und Italienisch die deutschen Daten', () => {
    for (const lang of ['es', 'it'] as const) {
      expect(getLeistungenSeo(lang)).toEqual(LEISTUNGEN_SEO);
      expect(getThemen(lang)).toEqual(THEMEN);
      expect(getStandorte(lang)).toEqual(STANDORTE);
    }
  });
});

describe('Reihenfolge und Vollständigkeit', () => {
  it('behält für jede Sprache Anzahl und Reihenfolge der Slugs bei', () => {
    for (const lang of ['de', 'en', 'es', 'it'] as const) {
      expect(getLeistungenSeo(lang).map((l) => l.slug)).toEqual(LEISTUNGEN_SEO.map((l) => l.slug));
      expect(getThemen(lang).map((t) => t.slug)).toEqual(THEMEN.map((t) => t.slug));
      expect(getStandorte(lang).map((s) => s.slug)).toEqual(STANDORTE.map((s) => s.slug));
      expect(getLeistungen(lang).map((l) => l.slug)).toEqual(LEISTUNGEN.map((l) => l.slug));
    }
  });

  it('lässt slug, geo, plz und Icon-Schlüssel unübersetzt', () => {
    const de = getStandorte('de');
    getStandorte('en').forEach((s, i) => {
      expect(s.slug).toBe(de[i].slug);
      expect(s.geo).toEqual(de[i].geo);
      expect(s.plz).toEqual(de[i].plz);
    });
    getLeistungen('en').forEach((l, i) => {
      expect(l.iconKey).toBe(getLeistungen('de')[i].iconKey);
      expect(l.numeral).toBe(getLeistungen('de')[i].numeral);
    });
  });
});
```

- [ ] **Step 2: Test laufen lassen — muss fehlschlagen**

Run: `npm test`
Expected: FAIL, `Failed to resolve import "@/lib/i18n/content"`

- [ ] **Step 3: `lib/i18n/content/index.ts` schreiben**

```ts
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

/** Überlagerung nach deutschem Slug. Fehlende Schlüssel bleiben deutsch. */
export type Overlay<T> = Partial<Record<string, T>>;

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
```

- [ ] **Step 4: Leere englische Überlagerungsdateien anlegen**

Damit die Importe auflösen, bevor die Übersetzungen da sind. Je Datei nach diesem Muster, hier `lib/i18n/content/en/leistungen-seo.ts`:

```ts
import type { Overlay } from '../index';
import type { SeoLeistung } from '@/lib/leistungen-seo';

/**
 * Englische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/en` weiterhin auf Deutsch.
 */
export const LEISTUNGEN_SEO_EN: Overlay<SeoLeistung> = {};
```

Analog `themen.ts` (`THEMEN_EN`, `SeoThema`), `standorte.ts` (`STANDORTE_EN`, `SeoStandort`), `leistungen.ts` (`LEISTUNGEN_EN`, `Leistung`).

`lib/i18n/content/en/faq.ts` weicht ab — die FAQ ist eine Liste, keine Tabelle:

```ts
import type { FaqItem } from '@/lib/faq-global';

/** Leer lassen heißt: die Startseite zeigt auf `/en` die deutsche FAQ. */
export const GLOBAL_FAQ_EN: readonly FaqItem[] | undefined = undefined;
```

Achtung auf den Zirkelbezug: `Overlay` wird aus `../index` importiert, das seinerseits die `en/`-Dateien importiert. Falls das in der Praxis Probleme macht, `Overlay` in eine eigene `lib/i18n/content/types.ts` ziehen und von beiden Seiten importieren — sauberer und ohne Zyklus. **Prüfe das und wähle die Variante, die ohne Zyklus auskommt.**

- [ ] **Step 5: Tests und Gates**

Run: `npm test && npm run build && npm run typecheck && npm run lint`
Expected: alle grün. Der `getGlobalFaq('en')`-Test muss zu diesem Zeitpunkt noch Deutsch liefern.

- [ ] **Step 6: Commit**

```bash
git add lib/i18n/content tests/i18n/content.test.ts
git commit -m "feat(i18n): Inhaltsueberlagerung je Sprache mit Rueckfall auf Deutsch"
```

---

## Task 2: Seiten auf die Zugriffsfunktionen umstellen

**Files:** `components/pages/{LeistungenPage,LeistungDetailPage,StandortePage,StandortDetailPage,ThemenPage,ThemaDetailPage}.tsx`, `components/{Footer,LeistungenGrid,FaqSection,SeoDetailContent}.tsx`, `app/(intl)/[lang]/**/page.tsx`, `app/(de)/**/page.tsx`

Noch immer keine sichtbare Änderung — die Zugriffsfunktionen liefern Deutsch. Danach hängen aber alle Seiten an der Überlagerung, und Task 4 bis 7 wirken sofort.

- [ ] **Step 1: Direktimporte durch Zugriffsfunktionen ersetzen**

Überall dort, wo eine Komponente `LEISTUNGEN_SEO`, `THEMEN`, `STANDORTE`, `LEISTUNGEN` oder `GLOBAL_FAQ` direkt importiert und `lang` zur Verfügung hat, auf `getLeistungenSeo(lang)` usw. umstellen. Betroffen sind mindestens:

- `components/Footer.tsx` — die drei Listen
- `components/LeistungenGrid.tsx` — die Karten
- `components/FaqSection.tsx` — `GLOBAL_FAQ` und das JSON-LD
- die sechs Seitenkomponenten oben

- [ ] **Step 2: `generateMetadata` und `generateStaticParams` prüfen**

`generateStaticParams` muss **weiterhin die deutschen Slugs** aufzählen — die Slug-Menge ist sprachunabhängig. Dort NICHT auf die Zugriffsfunktionen umstellen.

`generateMetadata` in den intl-Routen SOLL die Zugriffsfunktionen nutzen, damit `metaTitle` und `metaDescription` mitübersetzt werden.

- [ ] **Step 3: href-Werte in den Inhaltsdaten lokalisieren**

`SeoLeistungDetail.cta.href` und `relatedLinks[].href` enthalten deutsche Pfade. `components/SeoDetailContent.tsx` muss sie durch `localizedHref(href, lang)` schicken, sonst zeigt die englische Detailseite auf deutsche URLs. Dafür bekommt `SeoDetailContent` eine `lang`-Prop.

**Diesen Punkt gezielt verifizieren:** auf `/en/services/24-hour-care-berlin` jeden Link im Fließtext und im CTA anklicken bzw. per HTTP prüfen — alle müssen auf `/en/...` zeigen und 200 liefern.

- [ ] **Step 4: FAQ-JSON-LD wieder einschalten, sobald übersetzt**

In Etappe 1 wurde `FaqJsonLd` auf nicht-deutschen Seiten unterdrückt, weil die FAQ deutsch war. Die Bedingung ändern: ausgeben, wenn für die Sprache eine echte Übersetzung vorliegt.

```tsx
import { getGlobalFaq } from '@/lib/i18n/content';
import { GLOBAL_FAQ } from '@/lib/faq-global';
// …
const faq = getGlobalFaq(lang);
const istUebersetzt = faq !== GLOBAL_FAQ;
// …
{(lang === DEFAULT_LOCALE || istUebersetzt) && <FaqJsonLd items={faq} />}
```

Damit erscheint das Schema auf `/en` automatisch, sobald Task 4 die FAQ liefert, und bleibt auf `/es` und `/it` aus, solange dort Deutsch steht.

- [ ] **Step 5: Deutsche Ausgabe gegenprüfen**

Build vorher und nachher, gerenderte Seiten von `/`, `/leistungen`, `/leistungen/sitzwachen-berlin`, `/standorte/moabit`, `/themen/demenz-begleitung` vergleichen. Erwartung: keine Textänderung. Route-Tabelle unverändert.

- [ ] **Step 6: Commit**

```bash
git add components app/\(de\) app/\(intl\)
git commit -m "refactor(i18n): Seiten lesen Inhalte ueber die Sprach-Zugriffsfunktionen"
```

---

## Task 3: Formularmeldungen und Restbestände

**Files:** `lib/i18n/dictionaries/{de,en}.ts`, `app/actions/send-contact.ts`, `components/KontaktSection.tsx`

Die Server-Action gibt bisher deutsche Meldungen zurück, auch auf `/en`.

- [ ] **Step 1: Meldungen ins Wörterbuch aufnehmen**

Neue Gruppe `kontaktMeldungen` in `de.ts` mit den vorhandenen Texten aus `send-contact.ts`:

```ts
  kontaktMeldungen: {
    fieldName: 'Bitte Ihren Namen angeben.',
    fieldContact: 'Bitte Telefon oder E-Mail angeben, damit wir uns melden können.',
    fieldSubject: 'Bitte ein Thema wählen.',
    fieldConsent: 'Bitte der Datenverarbeitung zustimmen.',
    checkFields: 'Bitte überprüfen Sie die markierten Felder.',
    rateLimited: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
    sendUnavailable: 'Versand aktuell nicht möglich. Bitte rufen Sie uns direkt an oder schicken Sie eine E-Mail an ',
    sendFailed: 'Versand fehlgeschlagen. Bitte versuchen Sie es später erneut — oder erreichen Sie uns direkt unter ',
    networkError: 'Netzwerkfehler beim Versand. Bitte später erneut versuchen.',
    success: 'Nachricht angekommen — wir melden uns innerhalb weniger Tage zurück.',
  },
```

Englische Entsprechungen in `en.ts`:

```ts
  kontaktMeldungen: {
    fieldName: 'Please tell us your name.',
    fieldContact: 'Please give us a phone number or email address so we can reply.',
    fieldSubject: 'Please choose a topic.',
    fieldConsent: 'Please consent to your details being processed.',
    checkFields: 'Please check the highlighted fields.',
    rateLimited: 'Too many enquiries. Please try again later.',
    sendUnavailable: 'Sending is not possible at the moment. Please call us directly or write to ',
    sendFailed: 'Sending failed. Please try again later — or reach us directly on ',
    networkError: 'A network error occurred while sending. Please try again later.',
    success: 'Your message has arrived — we will get back to you within a few days.',
  },
```

- [ ] **Step 2: Die Action die Sprache verwenden lassen**

`sendContact` validiert `lang` bereits über `isLocale` (aus Etappe 1). Diese geprüfte Sprache verwenden, um das Wörterbuch zu holen, und alle Rückgabemeldungen daraus speisen. Die `LANGUAGE_HINT`-Tabelle für die Benachrichtigungsmail bleibt **deutsch** — sie geht an das Team, nicht an die anfragende Person.

- [ ] **Step 3: Die Erfolgsmeldung im Client vereinfachen**

`KontaktSection.tsx` unterdrückt derzeit die Servermeldung auf nicht-deutschen Seiten (`lang === DEFAULT_LOCALE && state.message`). Da die Meldung nun übersetzt ankommt, kann die Sonderbehandlung weg — `state.message` in jeder Sprache anzeigen, mit dem Wörterbuch-Text als Rückfall.

- [ ] **Step 4: Prüfen**

Formular auf `/en` absenden und die englischen Meldungen sehen — sowohl den Erfolgsfall als auch mindestens einen Feldfehler (Formular ohne Namen abschicken) und den Fall ohne `RESEND_API_KEY`.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n/dictionaries app/actions/send-contact.ts components/KontaktSection.tsx
git commit -m "feat(i18n): Meldungen des Kontaktformulars uebersetzt"
```

---

## Tasks 4–7: die Übersetzungen

Diese vier Aufgaben sind voneinander unabhängig und können parallel laufen. Für jede gilt dasselbe Vorgehen und dieselben Leitplanken (siehe oben).

**Gemeinsame Regeln:**

1. Gekeyt nach dem **deutschen** Slug. `slug`, `geo`, `plz`, `iconKey`, `numeral` und alle `href`-Werte werden **nicht** übersetzt.
2. `metaTitle` bleibt unter 60 Zeichen, `metaDescription` unter 160 — das sind SEO-Grenzen, und Englisch gerät leicht länger als Deutsch. Nachmessen, nicht schätzen.
3. `primaryKeyword` und `secondaryKeywords` werden zu **echten englischen Suchbegriffen**, nicht zu Übersetzungen der deutschen. Beispiel: „Pflegedienst Moabit" wird zu „private nursing care Moabit Berlin", nicht zu „nursing service Moabit".
4. Struktur bleibt erhalten: gleiche Anzahl `sections`, `paragraphs`, `list`-Einträge, `faq`-Paare. Nichts weglassen, nichts hinzuerfinden.
5. Britisches Englisch.
6. Nach jeder Datei: `npm run typecheck` — der Typ erzwingt die vollständige Struktur.

### Task 4: FAQ und Startseiten-Karten

**Files:** `lib/i18n/content/en/faq.ts`, `lib/i18n/content/en/leistungen.ts`

Der kleinste Brocken, deshalb zuerst — er validiert das Vorgehen.

- [ ] `GLOBAL_FAQ_EN` mit allen Einträgen aus `lib/faq-global.ts` füllen (Typ von `readonly FaqItem[] | undefined` auf `readonly FaqItem[]` ändern)
- [ ] `LEISTUNGEN_EN` mit allen 6 Karten aus `lib/leistungen.ts` füllen — Achtung: einige haben ein leeres `detail`, das bleibt leer
- [ ] `npm run typecheck && npm test && npm run build`
- [ ] `/en` prüfen: Kartentitel und FAQ englisch; FAQ-JSON-LD ist auf `/en` jetzt vorhanden (Task 2, Step 4), auf `/es` weiterhin nicht
- [ ] Commit: `feat(i18n): FAQ und Startseiten-Karten auf Englisch`

### Task 5: Leistungs-Detailseiten

**Files:** `lib/i18n/content/en/leistungen-seo.ts`

Alle 9 Einträge aus `lib/leistungen-seo.ts`.

- [ ] Jeden der 9 Einträge vollständig übersetzen, inklusive `detail.intro`, allen `sections`, `faq` und `relatedLinks[].label` (die `href` bleiben deutsch)
- [ ] Besonders sorgfältig bei `systemsprenger-betreuung`: der Text beschreibt komplexe psychiatrische Verläufe über alle Altersgruppen. Nicht als Jugendhilfe rahmen.
- [ ] `npm run typecheck && npm test && npm run build`
- [ ] Alle 9 Seiten unter `/en/services/...` aufrufen und auf deutsche Reste prüfen
- [ ] Commit: `feat(i18n): Leistungs-Detailseiten auf Englisch`

### Task 6: Themenseiten

**Files:** `lib/i18n/content/en/themen.ts`

Alle 8 Einträge aus `lib/themen.ts`. Hier steckt die Masse der Sozialrechtsbegriffe — die Begriffstabelle oben konsequent anwenden.

- [ ] Alle 8 übersetzen
- [ ] `npm run typecheck && npm test && npm run build`
- [ ] Alle 8 Seiten unter `/en/guides/...` prüfen
- [ ] Commit: `feat(i18n): Themenseiten auf Englisch`

### Task 7: Standortseiten

**Files:** `lib/i18n/content/en/standorte.ts`

Alle 16 Einträge aus `lib/standorte.ts`. Der größte Brocken und der wertvollste — Grunewald, Dahlem, Zehlendorf, Wannsee und Charlottenburg sind genau die Bezirke der Zielgruppe.

- [ ] Alle 16 übersetzen. Ortsteil- und Bezirksnamen bleiben unverändert (Eigennamen), ebenso `plz` und `geo`
- [ ] „Kiez" ist unübersetzbar — mit *neighbourhood* wiedergeben, den deutschen Begriff höchstens beim ersten Vorkommen einmal einführen
- [ ] `npm run typecheck && npm test && npm run build`
- [ ] Stichprobe von 5 Seiten unter `/en/locations/...`, darunter Moabit (Hauptstandort) und Grunewald
- [ ] Commit: `feat(i18n): Standortseiten auf Englisch`

---

## Task 8: Abschlussprüfung

- [ ] **Step 1: Vollständigkeitstest ergänzen**

In `tests/i18n/content.test.ts`:

```ts
describe('Englische Übersetzung ist vollständig', () => {
  it('übersetzt jede Leistung, jedes Thema und jeden Standort', () => {
    getLeistungenSeo('en').forEach((l, i) => {
      expect(l, `Leistung ${l.slug} fehlt auf Englisch`).not.toBe(LEISTUNGEN_SEO[i]);
    });
    getThemen('en').forEach((t, i) => {
      expect(t, `Thema ${t.slug} fehlt auf Englisch`).not.toBe(THEMEN[i]);
    });
    getStandorte('en').forEach((s, i) => {
      expect(s, `Standort ${s.slug} fehlt auf Englisch`).not.toBe(STANDORTE[i]);
    });
    expect(getGlobalFaq('en')).not.toBe(GLOBAL_FAQ);
  });
});
```

- [ ] **Step 2: Deutsche Reste auf `/en` suchen**

Alle englischen Seiten abrufen und den sichtbaren Text auf typisch deutsche Muster prüfen: `ä`, `ö`, `ü`, `ß`, sowie die Wörter `und`, `oder`, `nicht`, `Pflege`, `wir`, `Sie`. Treffer sind erlaubt, wenn sie ein bewusst stehengelassener deutscher Fachbegriff sind (`Pflegegrad`, `Heilpraktiker`, Ortsnamen) — jeden Treffer einzeln bewerten und die Bewertung berichten.

- [ ] **Step 3: Volle Prüfung**

- `npm test`, `npm run build`, `npm run typecheck`, `npm run lint`
- Deutsche Route-Tabelle unverändert
- Alle Sitemap-URLs liefern 200
- hreflang weiterhin wechselseitig
- Alle Links auf den englischen Detailseiten zeigen auf `/en/...` und liefern 200
- Sprachschalter auf einer englischen Detailseite führt auf das deutsche Gegenstück

- [ ] **Step 4: CHANGELOG ergänzen und committen**

---

## Was am Ende von Etappe 2 gilt

`/en` ist vollständig englisch und allein auslieferbar. `/es` und `/it` zeigen weiterhin deutsche Inhalte bei englischer URL-Struktur — sie kommen in Etappe 3 und 4. Solange sollten `/es` und `/it` nicht beworben werden.
