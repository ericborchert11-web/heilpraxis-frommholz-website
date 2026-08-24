# Krankenhaus raus — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Jeden Hinweis auf Sitzwachen und Krankenhausbegleitung von der Website entfernen und das Angebot auf privat gezahlte 1:1-Betreuung zu Hause ausrichten — in allen vier Sprachen.

**Architecture:** Die deutschen Datendateien in `lib/` sind die Quelle der Wahrheit; je Sprache liegt in `lib/i18n/content/<lang>/` eine nach deutschem Slug gekeyte Überlagerung. Wird ein deutscher Eintrag gelöscht, verschwindet die Seite in allen Sprachen automatisch — die Überlagerungen müssen nur mitgelöscht werden, damit kein toter Schlüssel zurückbleibt. `lib/i18n/dictionaries/de.ts` ist der Typ-Ursprung: eine Schlüsseländerung dort erzwingt sie in en/es/it.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Vitest

Spec: `docs/superpowers/specs/2026-08-24-krankenhaus-raus-design.md`

---

## Ausgangslage

| Datei | Was dort steht |
|---|---|
| `lib/leistungen-seo.ts` | 9 Money-Pages, davon 3 zu löschen, 1 neue anzulegen |
| `lib/themen.ts` | 8 Ratgeberseiten, davon `krankenhaus-begleitung` zu löschen |
| `lib/standorte.ts` | 14 Standorte mit „Kliniken in der Nähe"-Blöcken |
| `lib/karriere.ts` | 5 Stellenkonzepte, davon `bezahltes-ehrenamt` komplett auf „Sitzwache" gebaut (nur Deutsch, `/karriere` ist nicht übersetzt) |
| `lib/faq-global.ts` | eine Antwort nennt Sitzwachen |
| `lib/i18n/slugs.ts` | Slug-Register aller vier Sprachen |
| `lib/i18n/content/{en,es,it}/*` | Überlagerungen |
| `lib/i18n/dictionaries/{de,en,es,it}.ts` | Oberflächentexte, Formular-Betreffe, Meta-Titel |
| `tests/i18n/slugs.test.ts`, `tests/i18n/meta.test.ts` | benutzen `sitzwachen-berlin` als Fixture |

## Sprachregelung — bindend für alle Tasks

| Alt | Neu |
|---|---|
| Sitzwache, Sitzwachen | 1:1-Betreuung |
| bedside companion (en) | one-to-one care |
| acompañamiento al paciente (es) | atención individual |
| assistenza al capezzale (it) | assistenza individuale |
| Nachtwache | bleibt Nachtwache |

Kein Satz darf Krankenhaus, Klinik, Klinikum, Station, Psychiatrie, Hospiz oder Palliativstation als Einsatzort nennen. Ausgenommen sind ausschließlich die beiden in der Spec benannten Stellen (AGB-Absageklausel, Karriere-Bewerberherkunft).

Keine neuen Versprechen. Was gestrichen wird, wird nicht durch Superlative ersetzt.

---

## Task 1: Slug-Register umziehen

**Files:**
- Modify: `lib/i18n/slugs.ts:30-40` (LEISTUNG_SLUGS), `lib/i18n/slugs.ts:43-53` (THEMA_SLUGS)
- Test: `tests/i18n/slugs.test.ts`, `tests/i18n/meta.test.ts`

- [ ] **Step 1: Tests auf die neue Seite umschreiben (schlagen fehl)**

In `tests/i18n/slugs.test.ts` jedes Vorkommen von `sitzwachen-berlin` ersetzen:

```ts
expect(localizedHref('/leistungen/1-zu-1-betreuung-berlin', 'en')).toBe('/en/services/one-to-one-care-at-home-berlin');
```

```ts
const paths = ['/', '/leistungen', '/leistungen/1-zu-1-betreuung-berlin', '/standorte/moabit', '/themen/demenz-begleitung', '/familienbereich'];
```

```ts
expect(deHrefFrom('/leistungen/1-zu-1-betreuung-berlin', 'de')).toBe('/leistungen/1-zu-1-betreuung-berlin');
```

In `tests/i18n/meta.test.ts:91` ebenso auf `/leistungen/1-zu-1-betreuung-berlin` bzw. `/en/services/one-to-one-care-at-home-berlin` ziehen.

- [ ] **Step 2: Neuen Test ergänzen, der die Löschungen festhält**

Am Ende von `tests/i18n/slugs.test.ts` innerhalb der bestehenden `describe`-Struktur:

```ts
it('kennt die entfernten Krankenhaus-Seiten nicht mehr', () => {
  const entfernt = [
    '/leistungen/sitzwachen-berlin',
    '/leistungen/hospiz-sitzwachen',
    '/leistungen/klinik-begleitung-berlin',
    '/themen/krankenhaus-begleitung',
  ];
  for (const pfad of entfernt) {
    // Ohne Registereintrag bleibt der Slug unübersetzt stehen — das ist das
    // Erkennungszeichen dafür, dass der Eintrag wirklich weg ist.
    const seg = pfad.split('/')[1];
    const slug = pfad.split('/')[2];
    expect(localizedHref(pfad, 'en')).toContain(slug);
    expect(localizedHref(pfad, 'en')).not.toContain(seg === 'leistungen' ? 'bedside' : 'hospital');
  }
});
```

- [ ] **Step 3: Tests laufen lassen, Fehlschlag bestätigen**

Run: `npm test`
Expected: FAIL — `localizedHref('/leistungen/1-zu-1-betreuung-berlin', 'en')` liefert noch den unübersetzten Pfad.

- [ ] **Step 4: Register anpassen**

In `lib/i18n/slugs.ts` aus `LEISTUNG_SLUGS` die drei Zeilen `'sitzwachen-berlin'`, `'hospiz-sitzwachen'` und `'klinik-begleitung-berlin'` entfernen und stattdessen aufnehmen:

```ts
  '1-zu-1-betreuung-berlin': { en: 'one-to-one-care-at-home-berlin', es: 'atencion-individual-en-casa-berlin', it: 'assistenza-individuale-a-domicilio-berlino' },
```

Aus `THEMA_SLUGS` die Zeile `'krankenhaus-begleitung'` entfernen.

Den Kommentar über `LEISTUNG_SLUGS` von „das sind die NEUN Einträge" auf „die SIEBEN Einträge" korrigieren.

- [ ] **Step 5: Tests laufen lassen**

Run: `npm test`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add lib/i18n/slugs.ts tests/i18n/
git commit -m "refactor(i18n): Slug-Register auf 1:1-Betreuung umgestellt, Krankenhaus-Slugs entfernt"
```

---

## Task 2: Neue deutsche Money-Page

**Files:**
- Modify: `lib/leistungen-seo.ts`

- [ ] **Step 1: Neuen Eintrag als Money Page 1 an den Anfang des Arrays setzen**

```ts
  // === Money Page 1: 1:1-Betreuung zu Hause ====================================
  {
    slug: '1-zu-1-betreuung-berlin',
    title: '1:1-Betreuung zu Hause',
    short: 'Eine Person, ein Mensch, ungeteilte Aufmerksamkeit — stundenweise bis rund um die Uhr in der eigenen Wohnung.',
    metaTitle: '1:1-Betreuung Berlin – private Begleitung zu Hause',
    metaDescription: 'Privat gezahlte 1:1-Betreuung in Berlin: eine feste Bezugsperson zu Hause, stundenweise bis durchgehend. Bei Demenz, Sturzgefahr, in der letzten Lebensphase. Erstgespräch kostenlos.',
    h1: '1:1-Betreuung zu Hause — ungeteilte Aufmerksamkeit für einen Menschen',
    primaryKeyword: '1:1-Betreuung Berlin',
    secondaryKeywords: ['private Betreuung zu Hause Berlin', 'Einzelbetreuung Demenz Berlin', 'Betreuungskraft Selbstzahler Berlin'],
    detail: {
      intro: [
        'In der ambulanten Pflege ist die Uhr immer im Raum. Fünfzehn Minuten für den Toilettengang, zwölf für das Frühstück, dann der nächste Haushalt. Was dabei zuerst verloren geht, ist das, worauf es ankommt: Zeit, in der niemand weitermuss.',
        '1:1-Betreuung heißt: Eine Mitarbeiterin ist für einen einzigen Menschen da. Keine Tour, keine Parallelversorgung, keine Übergabe mitten im Gespräch. In der eigenen Wohnung, in vertrauter Umgebung, mit den eigenen Gewohnheiten. Stundenweise, für einzelne Nächte, für eine schwierige Phase oder dauerhaft.',
        'Wir arbeiten ausschließlich als Selbstzahler-Pflegedienst mit einem kleinen festen Team. Das ist eine bewusste Entscheidung: Sie hat einen Preis, aber sie schafft den Rahmen, in dem diese Art von Zeit überhaupt möglich ist.',
      ],
      sections: [
        {
          heading: 'Wann 1:1-Betreuung der richtige Weg ist',
          paragraphs: [
            'Nicht jede Situation braucht eine ständige Begleitung. Diese hier tun es meistens:',
          ],
          stronglist: [
            { label: 'Demenz mit nächtlicher Unruhe', text: 'Aufstehen, Wandern, Verwirrung über Tag und Nacht. Angehörige halten das wenige Wochen durch, dann sind sie selbst am Ende. Eine feste Begleitperson bringt Struktur zurück — und Schlaf für die Familie.' },
            { label: 'Sturzgefahr', text: 'Wer nachts aufsteht und nicht mehr sicher steht, gehört nicht allein in die Wohnung. Wir sind da, wenn aufgestanden wird, helfen rechtzeitig und verhindern Stürze, die sonst eine ganze Lebensphase prägen.' },
            { label: 'Die letzte Lebensphase zu Hause', text: 'Viele Menschen möchten zu Hause sterben. Damit das gelingt, braucht die Familie jemanden, der die langen Stunden mitträgt — wach, ruhig, erfahren, ohne Hektik.' },
            { label: 'Nach einer Operation', text: 'Die ersten Nächte in der Genesungsphase sind die kritischsten: Verwirrtheit, Unsicherheit beim Aufstehen, Schmerz. Eine Begleitung überbrückt, bis Stabilität zurück ist.' },
            { label: 'Wenn Angehörige an ihre Grenze kommen', text: 'Pflegende Angehörige brauchen Nächte, in denen sie durchschlafen, und Tage, an denen sie nicht erreichbar sein müssen. Wir übernehmen diese Stunden verlässlich.' },
          ],
        },
        {
          heading: 'Was eine Betreuungskraft bei uns tut',
          stronglist: [
            { label: 'Da sein', text: 'Anwesend, aufmerksam, ansprechbar. Reden, wenn jemand reden will. Schweigen, wenn jemand schweigen will.' },
            { label: 'Beobachten und einordnen', text: 'Veränderungen bemerken und sachlich weitergeben — an die Familie, an den Hausarzt, an den Pflegedienst. Aus über 15 Jahren Erfahrung wissen unsere Kräfte, was wichtig ist und was warten kann.' },
            { label: 'Den Alltag halten', text: 'Essen und Trinken anreichen, Toilettengänge begleiten, beim Lagewechsel helfen, Medikamente nach Plan geben, für Ruhe und Ordnung sorgen.' },
            { label: 'Begleiten, wohin es nötig ist', text: 'Zum Hausarzt, zum Facharzt, zum Spaziergang, zur Familienfeier. Niemand wartet allein im Flur.' },
            { label: 'Die Familie entlasten', text: 'Sie müssen nicht jeden Abend hetzen. Sie wissen: Jemand ist da, und Sie erfahren, was war.' },
          ],
        },
        {
          heading: 'Wache Begleitung oder Bereitschaft?',
          paragraphs: ['Für die Nachtstunden unterscheiden wir zwei Modelle — der Unterschied schlägt deutlich auf den Preis durch:'],
          stronglist: [
            { label: 'Aktive (wache) Begleitung', text: 'Die Mitarbeiterin bleibt durchgehend wach, beobachtet aktiv, dokumentiert regelmäßig. Sinnvoll bei akuten Situationen — Sterbephase, schwere Verwirrtheit, hohe Sturzgefahr.' },
            { label: 'Bereitschaft', text: 'Die Mitarbeiterin schläft in einem angrenzenden Raum oder in einem Schlafstuhl im selben Zimmer und wird bei jedem Geräusch geweckt. Sinnvoll, wenn nachts meist Ruhe herrscht, aber niemand allein bleiben soll.' },
          ],
          trailingParagraphs: ['Welches Modell passt, klären wir im Erstgespräch. Wechseln ist jederzeit möglich, wenn sich die Lage ändert.'],
        },
        {
          heading: 'Was 1:1-Betreuung kostet',
          paragraphs: [
            '1:1-Betreuung ist eine Selbstzahler-Leistung. Die gesetzliche Pflegekasse übernimmt sie nicht direkt. Bei vorhandenem Pflegegrad lassen sich aber häufig die Verhinderungspflege (§ 39 SGB XI) oder der Entlastungsbetrag (§ 45b SGB XI) einsetzen — Sie reichen unsere Rechnung dann selbst ein. Wir beraten Sie, was in Ihrem Fall möglich ist.',
            'Pauschalpreise nennen wir nicht, weil die Situationen zu unterschiedlich sind: Der Stundensatz hängt von der erforderlichen Qualifikation, vom Umfang und davon ab, ob es eine wache Begleitung oder eine Bereitschaft ist. Im kostenlosen Erstgespräch hören wir erst zu und machen danach einen konkreten, transparenten Vorschlag mit Stundensatz und voraussichtlicher Gesamtsumme.',
            'Zuschläge nach § 3b EStG weisen wir offen aus: nachts 25 %, sonn- und feiertags 50 %.',
          ],
        },
      ],
      faq: [
        { question: 'Wie schnell können Sie anfangen?', answer: 'Bei planbaren Situationen genügen zwei bis drei Tage Vorlauf. In akuten Fällen versuchen wir, innerhalb von 24 Stunden eine erste Begleitung zu stellen — je nach Wochentag und Tageszeit auch schneller. Rufen Sie an, dann sagen wir Ihnen ehrlich, was geht.' },
        { question: 'Können wir nur einzelne Nächte buchen?', answer: 'Ja. Viele Einsätze sind genau das: eine, zwei oder drei Nächte in einer kritischen Phase. Einzelne Wochenendnächte oder eine feste Nacht pro Woche gehen ebenso wie eine durchgehende Begleitung über Monate.' },
        { question: 'Ist es immer dieselbe Person?', answer: 'So weit es geht, ja. Wir arbeiten mit einem kleinen festen Team und setzen bei längeren Begleitungen zwei bis drei Kräfte im Wechsel ein, damit auch bei Krankheit oder Urlaub ein vertrautes Gesicht kommt. Ständig wechselndes Personal wäre das Gegenteil dessen, wofür 1:1-Betreuung da ist.' },
        { question: 'Was, wenn meine Mutter die Person nicht mag?', answer: 'Dann tauschen wir sie aus. Meistens ist die Fremdheit nach der ersten Stunde vorbei, aber persönliche Chemie ist in dieser Arbeit kein Nebenaspekt. Sagen Sie uns Bescheid, wir organisieren das ohne Diskussion.' },
        { question: 'Welche Qualifikation haben die Kräfte?', answer: 'Das richtet sich nach der Situation. Bei pflegerisch anspruchsvollen Lagen kommt eine examinierte Pflegefachkraft. Wo es um Anwesenheit, Aufmerksamkeit und Alltag geht, ist eine erfahrene Betreuungskraft oft die bessere Wahl. Was Ihr Fall braucht, klären wir vorher — nicht hinterher.' },
        { question: 'Übernimmt die Krankenkasse das?', answer: 'Nein. Die gesetzliche Krankenkasse zahlt medizinische Behandlung, nicht die durchgehende Anwesenheit einer Betreuungsperson. Manche privaten Zusatzversicherungen erstatten anteilig — das lohnt sich vorab zu klären.' },
        { question: 'Brauchen wir ein eigenes Zimmer für die Betreuungskraft?', answer: 'Bei Bereitschaft reicht ein Sofa, ein Sessel oder ein Schlafstuhl — ein Bett ist nicht nötig. Bei wacher Begleitung genügt ein Stuhl und Licht zum Lesen. Wir richten uns nach Ihrer Wohnung, nicht umgekehrt.' },
        { question: 'Was passiert in einem Notfall?', answer: 'Die Betreuungskraft verständigt den Notarzt (112), informiert die Angehörigen und bleibt bei der Person, bis Hilfe da ist. Was zu tun ist, wird bei Beginn der Begleitung mit Ihnen und — sofern gewünscht — mit dem Hausarzt schriftlich festgelegt.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nächte abgedeckt werden müssen' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung', note: 'durchgehende Versorgung im Wechseldienst' },
        { label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung', note: 'Hintergrund zur Begleitung Demenzerkrankter' },
      ],
    },
  },
```

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: keine Ausgabe

- [ ] **Step 3: Commit**

```bash
git add lib/leistungen-seo.ts
git commit -m "feat(leistungen): neue Money-Page 1:1-Betreuung zu Hause"
```

---

## Task 3: Drei Leistungsseiten und die Themenseite löschen

**Files:**
- Modify: `lib/leistungen-seo.ts`, `lib/themen.ts`

- [ ] **Step 1: Die drei Einträge entfernen**

In `lib/leistungen-seo.ts` die kompletten Objekte mit `slug: 'sitzwachen-berlin'`, `slug: 'hospiz-sitzwachen'` und `slug: 'klinik-begleitung-berlin'` löschen, einschließlich ihrer `// === Money Page N: … ===`-Kommentarzeilen. Die verbleibenden Kommentare durchnummerieren: 1 = 1:1-Betreuung, 2 = Systemsprenger-Betreuung, 3 = Pflegedienst für Selbstzahler, 4 = 24-Stunden-Betreuung, 5 = Pflegeberatung Berlin, 6 = Nachtwachen Berlin, 7 = Reisebegleitung für Senioren.

- [ ] **Step 2: In `lib/themen.ts` den Eintrag `slug: 'krankenhaus-begleitung'` komplett löschen**

- [ ] **Step 3: Tote Querverweise reparieren**

Run: `grep -rn "sitzwachen-berlin\|hospiz-sitzwachen\|klinik-begleitung-berlin\|krankenhaus-begleitung" lib/ components/ app/`

Jeden Treffer in einem `relatedLinks`-Block durch einen lebenden Verweis ersetzen. Konkret in `lib/leistungen-seo.ts`:

```ts
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'ungeteilte Aufmerksamkeit, stundenweise bis durchgehend' },
```

Wo bisher `{ label: 'Hospiz-Sitzwachen', … }` stand (Nachtwachen-Seite), ersatzlos streichen — der Block hat dann noch zwei Einträge, das reicht.

In `lib/themen.ts` und `lib/standorte.ts` alle `href: '/themen/krankenhaus-begleitung'`-Verweise ersatzlos entfernen.

- [ ] **Step 4: Typecheck und Test**

Run: `npm run typecheck && npm test`
Expected: keine Typfehler, Tests grün

- [ ] **Step 5: Commit**

```bash
git add lib/leistungen-seo.ts lib/themen.ts lib/standorte.ts
git commit -m "feat: Sitzwachen- und Krankenhausseiten entfernt"
```

---

## Task 4: Nachtwachen-Seite entkrankenhausen

**Files:**
- Modify: `lib/leistungen-seo.ts` (Eintrag `nachtwachen-berlin`)

- [ ] **Step 1: Meta-Description ersetzen**

```ts
    metaDescription: 'Nachtwachen in Berlin für die eigene Wohnung. Erfahrenes Team, kurzfristig verfügbar. Bei Demenz, Sturzgefahr und in der letzten Lebensphase.',
```

- [ ] **Step 2: Den Baustein „Nach Klinikentlassung" ersetzen**

```ts
            { label: 'In der Genesungsphase nach einer Operation', text: 'Die ersten Nächte nach einem Eingriff sind oft die kritischsten — Unsicherheit beim Aufstehen, Verwirrtheit, Schmerz. Eine Nachtwache überbrückt, bis Stabilität zurückgekehrt ist.' },
```

- [ ] **Step 3: Prüfen**

Run: `grep -n "Klinik\|Krankenhaus\|Hospiz" lib/leistungen-seo.ts`
Expected: keine Ausgabe

- [ ] **Step 4: Commit**

```bash
git add lib/leistungen-seo.ts
git commit -m "feat(nachtwachen): Krankenhaus- und Hospizbezug entfernt"
```

---

## Task 5: Standortseiten bereinigen (Deutsch)

**Files:**
- Modify: `lib/standorte.ts`

Vierzehn Einträge, jeweils gleiche Behandlung.

- [ ] **Step 1: Nähe-Listen entfernen**

Jeder Standort hat einen Abschnitt, dessen `list` Klinikadressen mit Fahrzeiten aufzählt („DRK Kliniken Westend — 10 Minuten."). Diesen Abschnitt komplett entfernen. Ist die Überschrift des Abschnitts allein auf Kliniken gemünzt („Kliniken in der Nähe", „Versorgungslandschaft"), fällt sie mit weg. Enthält der Abschnitt daneben andere Orientierungspunkte (Ärztehäuser, Apotheken, Verkehrsanbindung), bleiben nur diese stehen.

- [ ] **Step 2: Leistungsversprechen mit Klinikbezug ersetzen**

Betroffen sind unter anderem:

- Berlin-Mitte, `metaDescription`: neu →
  `'Pflege und 1:1-Betreuung in Berlin-Mitte. Private Begleitung zu Hause, stundenweise bis rund um die Uhr.'`
- Berlin-Mitte, `h1`: neu →
  `'Pflege und 1:1-Betreuung in Berlin-Mitte — schnell vor Ort'`
- Berlin-Mitte, Abschnitt „Sitzwachen in der Charité Mitte" → ersetzen durch
  `{ label: '1:1-Betreuung zu Hause', text: 'Ungeteilte Aufmerksamkeit in der eigenen Wohnung — bei Demenz, nach einer Operation, in der letzten Lebensphase.' }`
- Alle Varianten von „Übergänge bei Klinikentlassungen" → `'Übergänge nach einem stationären Aufenthalt'` ist NICHT zulässig (nennt weiterhin den Ort). Stattdessen: `{ label: 'Wenn die Versorgung zu Hause neu beginnt', text: 'Wenn sich die Lage plötzlich ändert, brauchen Familien eine Brücke. Wir übernehmen die ersten Wochen, bis der Alltag wieder trägt.' }`
- Zielgruppenzeilen wie „Mieter, deren Angehörige im Krankenhaus liegen und Begleitung brauchen." und „Patientinnen aus dem nahegelegenen Bundeswehrkrankenhaus…" → ersatzlos streichen.
- Wannsee, `{ label: 'Nähe zum eigenen Krankenhaus', … }` → ersatzlos streichen.
- Potsdam, `{ label: 'Eigene Klinik-Landschaft', … }` → ersatzlos streichen.
- FAQ-Einträge wie „Wie schnell kommen Sie in einem Krankenhaus an?", „Welches Krankenhaus ist im Ernstfall am nächsten?", „Welches Krankenhaus ist bei uns vor Ort das wichtigste?", „Mein Mann kommt bald aus dem Immanuel Krankenhaus zurück…" → ersatzlos streichen. Behält ein Standort danach weniger als drei FAQ-Einträge, mit einer allgemeinen Frage auffüllen:
  `{ question: 'Wie schnell sind Sie bei uns?', answer: 'Für Ersteinsätze brauchen wir in der Regel zwei bis drei Tage Vorlauf, in akuten Situationen versuchen wir es innerhalb von 24 Stunden. Rufen Sie an, dann sagen wir Ihnen, was geht.' }`

- [ ] **Step 3: Restwörter ersetzen**

Jedes verbliebene „Sitzwache/Sitzwachen" in dieser Datei wird zu „1:1-Betreuung".

- [ ] **Step 4: Prüfen**

Run: `grep -in "sitzwach\|klinik\|krankenhaus\|hospiz\|palliativstation" lib/standorte.ts`
Expected: keine Ausgabe

- [ ] **Step 5: Typecheck, Test, Commit**

```bash
npm run typecheck && npm test
git add lib/standorte.ts
git commit -m "feat(standorte): Klinikbezuege entfernt, Wording auf 1:1-Betreuung"
```

---

## Task 6: Wörterbücher, Komponenten, Routen-Metadaten (Deutsch)

**Files:**
- Modify: `lib/i18n/dictionaries/de.ts`, `lib/faq-global.ts`, `components/pages/SozialesEngagementPage.tsx`, `components/pages/StandortDetailPage.tsx:41`, `app/(de)/layout.tsx:9`, `app/(de)/leistungen/page.tsx:7`, `app/(de)/standorte/[slug]/page.tsx:27`

- [ ] **Step 1: `lib/i18n/dictionaries/de.ts` anpassen**

Formular-Betreffe (`kontakt.subjects`) — „Sitzwache / Nachtwache" und „Hospiz-Sitzwache" ersetzen:

```ts
    subjects: [
      'Erstgespräch zur Pflege',
      '1:1-Betreuung / Nachtwache',
      '24-Stunden-Betreuung',
      'Pflegeberatung',
      'Reisebegleitung',
      'Begleitung in der letzten Lebensphase',
      'Etwas anderes',
    ],
```

`leistungenPage.lead`:

```ts
    lead: 'Sieben Wege, in denen wir Menschen in Berlin begleiten — von der stundenweisen 1:1-Betreuung bis zur 24-Stunden-Versorgung zu Hause. Alle als Selbstzahler-Leistung, mit kleinem festem Team.',
```

`sozialesEngagementPage`: die Schlüssel `vereinLinkSitzwachen`, `vereinBetween1` und `vereinLinkHospiz` entfallen. Der Satz läuft künftig nur noch über die Reisebegleitung:

```ts
    vereinBefore: 'Für',
    vereinLinkReise: 'Reisebegleitung',
    vereinAfterLinks: 'arbeiten wir eng mit dem gemeinnützigen Verein',
```

`vereinAfter` neu, ohne den Verweis auf letzte Stunden am Bett:

```ts
    vereinAfter: 'zusammen. Der Verein bringt ein ehrenamtliches Netzwerk und langjährige Erfahrung in der Begleitung pflegebedürftiger Menschen auf Reisen mit — eine Ergänzung zu unseren bezahlten pflegerischen Schichten.',
```

`karriereLinkEhrenamt`:

```ts
    karriereLinkEhrenamt: 'Bezahltes Ehrenamt: 1:1-Betreuung',
```

`indexMeta.home.title` und `indexMeta.leistungen.description`:

```ts
      title: 'Pflege, 1:1-Betreuung & Begleitung Berlin – Heilpraxis Frommholz',
```

```ts
      description: '1:1-Betreuung, Pflege für Selbstzahler, 24-Stunden-Betreuung, Pflegeberatung — die Leistungen der Heilpraxis Frommholz in Berlin.',
```

- [ ] **Step 2: `components/pages/SozialesEngagementPage.tsx` anpassen**

Die beiden `<Link>`-Elemente auf `/leistungen/sitzwachen-berlin` und `/leistungen/hospiz-sitzwachen` samt der Trenntexte `vereinBetween1` und `vereinBetween2` entfernen. Übrig bleibt der Link auf `/leistungen/reisebegleitung-senioren` mit `p.vereinLinkReise`.

- [ ] **Step 3: Übrige Einzelstellen**

`components/pages/StandortDetailPage.tsx:41`:

```tsx
        serviceName={`Pflege & 1:1-Betreuung in ${s.name}`}
```

`app/(de)/layout.tsx:9`:

```ts
    default: `Pflege, 1:1-Betreuung & Begleitung Berlin – ${SITE.name}`,
```

`app/(de)/leistungen/page.tsx:7`:

```ts
  description: '1:1-Betreuung, Pflege für Selbstzahler, 24-Stunden-Betreuung, Pflegeberatung — die Leistungen der Heilpraxis Frommholz in Berlin.',
```

`app/(de)/standorte/[slug]/page.tsx:27`:

```ts
    keywords: [s.primaryKeyword, `Pflege ${s.name}`, `1:1-Betreuung ${s.name}`],
```

`lib/faq-global.ts:22` — die Antwort nennt „Sitzwachen, Nachtwachen":

```ts
      'Bei akuten Anfragen (1:1-Betreuung, Nachtwachen) oft am gleichen Tag oder innerhalb von 24-48 Stunden. Bei längerfristigen Engagements (24-Stunden-Betreuung, Heimüberbrückung) brauchen wir in der Regel wenige Tage Vorlauf.',
```

Den bestehenden Satzrest ab „Bei längerfristigen Engagements" unverändert übernehmen, falls er vom obigen Wortlaut abweicht.

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: Fehler in `en.ts`, `es.ts`, `it.ts` wegen der entfallenen `sozialesEngagementPage`-Schlüssel. Das ist erwartet und wird in Task 8 behoben.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n/dictionaries/de.ts lib/faq-global.ts components/ "app/(de)"
git commit -m "feat(de): Wording auf 1:1-Betreuung, Vereinsverweise ohne Krankenhausbezug"
```

---

## Task 7: Karriere-Seite (nur Deutsch)

**Files:**
- Modify: `lib/karriere.ts`, `app/(de)/karriere/page.tsx:56`

`/karriere` steht nicht im Segment-Register und existiert deshalb nur auf Deutsch.

- [ ] **Step 1: Eintrag `bezahltes-ehrenamt` umschreiben**

Der Slug `bezahltes-ehrenamt` bleibt — er enthält das Wort nicht, also entsteht keine tote URL. Zu ersetzen:

```ts
    title: 'Bezahltes Ehrenamt: 1:1-Betreuung',
    short: '1:1-Betreuung und Begleitung als bezahltes Ehrenamt.',
    metaTitle: 'Bezahltes Ehrenamt Berlin — 1:1-Betreuung mit Sinn',
    metaDescription: '1:1-Betreuung und Begleitung als bezahltes Ehrenamt. Ideal für Studierende, Quereinsteiger*innen, Sinnsuchende. Berlin.',
    h1: 'Bezahltes Ehrenamt: 1:1-Betreuung bei Heilpraxis Frommholz',
```

Im `intro` „Wir suchen solche Menschen für Sitzwachen." → `'Wir suchen solche Menschen für die 1:1-Betreuung.'`

Abschnittsüberschrift „Was Sitzwachen tun" → `'Was Betreuungskräfte tun'`. Im Text darunter „Sie rufen die Pflege, wenn etwas Pflegerisches ansteht." bleibt so — „die Pflege" meint hier den Pflegedienst, keinen Ort.

„Sitzwachen werden marktüblich vergütet" → `'Betreuungskräfte werden marktüblich vergütet'`.

„Ihre ersten 2-3 Sitzwachen machen Sie zusammen mit einer erfahrenen Kollegin." → `'Ihre ersten 2-3 Einsätze machen Sie zusammen mit einer erfahrenen Kollegin.'`

FAQ „Kann ich Sitzwachen mit Studium oder Hauptberuf kombinieren?" → `'Kann ich die Einsätze mit Studium oder Hauptberuf kombinieren?'`, Antwort: `'Ja — die meisten Schichten finden abends, nachts oder am Wochenende statt. Genau dafür entworfen.'`

`relatedLinks`: der Verweis auf `/leistungen/sitzwachen-berlin` wird zu

```ts
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'die Leistung, die Sie übernehmen' },
```

- [ ] **Step 2: Eintrag `pflegejob-ohne-schichtdienst` anpassen**

Abschnitt „Was Sie tun":

```ts
            'Stundenweise oder schichtweise 1:1-Betreuung von Selbstzahler-Klient*innen in Berlin. Konkret: Begleitung zu Hause, Nachtwachen, Pflege in der eigenen Wohnung.',
```

Den Rest des Satzes ab „Klassische a…" aus dem Bestand unverändert anhängen.

Der Satz „Erfahrung in Psychiatrie, Palliative Care, Demenzbegleitung" beschreibt Qualifikationen von Bewerbenden, keinen Einsatzort — er bleibt. Ebenso bleibt die FAQ „Verdiene ich weniger als in der Klinik?" und die Zielgruppenzeile „Pflegekräfte, die aus der Klinik in einen weniger belastenden Bereich wollen." (siehe Spec, Abschnitt „Bewusst unverändert").

- [ ] **Step 3: `app/(de)/karriere/page.tsx:56` anpassen**

```tsx
          <li>Quereinsteiger*innen mit Lebenserfahrung (oft die besten Betreuungskräfte).</li>
```

- [ ] **Step 4: Prüfen**

Run: `grep -in "sitzwach" lib/karriere.ts "app/(de)/karriere/page.tsx"`
Expected: keine Ausgabe

- [ ] **Step 5: Commit**

```bash
git add lib/karriere.ts "app/(de)/karriere/page.tsx"
git commit -m "feat(karriere): Stellenkonzepte auf 1:1-Betreuung umgestellt"
```

---

## Task 8: Englische Überlagerung

**Files:**
- Modify: `lib/i18n/content/en/leistungen-seo.ts`, `lib/i18n/content/en/themen.ts`, `lib/i18n/content/en/standorte.ts`, `lib/i18n/dictionaries/en.ts`

- [ ] **Step 1: Tote Schlüssel entfernen**

In `lib/i18n/content/en/leistungen-seo.ts` die Objekte unter den Schlüsseln `'sitzwachen-berlin'`, `'hospiz-sitzwachen'` und `'klinik-begleitung-berlin'` komplett löschen. In `lib/i18n/content/en/themen.ts` den Schlüssel `'krankenhaus-begleitung'` löschen.

- [ ] **Step 2: Neuen Schlüssel `'1-zu-1-betreuung-berlin'` anlegen**

Den deutschen Eintrag aus Task 2 übersetzen. Struktur, Reihenfolge und Anzahl der Elemente müssen identisch sein; `slug` bleibt `'1-zu-1-betreuung-berlin'`, `href`-Werte in `cta` und `relatedLinks` bleiben deutsche Referenzpfade. Leitplanken aus `docs/superpowers/plans/2026-07-20-etappe-2-englische-inhalte.md` gelten unverändert: Sozialrechtsbegriffe mit englischer Erklärung und dem deutschen Begriff in Klammern beim ersten Vorkommen je Seite, keine neuen Versprechen. Beispiel für den Kopf:

```ts
  '1-zu-1-betreuung-berlin': {
    slug: '1-zu-1-betreuung-berlin',
    title: 'One-to-One Care at Home',
    short: 'One carer, one person, undivided attention — by the hour or around the clock, in your own home.',
    metaTitle: 'One-to-One Care Berlin – Private Support at Home',
    metaDescription: 'Privately funded one-to-one care in Berlin: a constant companion at home, by the hour or around the clock. For dementia, fall risk, the final phase of life. First conversation free.',
    h1: 'One-to-one care at home — undivided attention for one person',
    primaryKeyword: 'one-to-one care Berlin',
    secondaryKeywords: ['private carer at home Berlin', 'dementia one-to-one care Berlin', 'private pay carer Berlin'],
```

- [ ] **Step 3: `lib/i18n/content/en/standorte.ts` bereinigen**

Dieselben Streichungen wie in Task 5, an denselben Stellen. Nach dem Durchgang darf `grep -in "hospital\|clinic\|hospice\|psychiatric\|bedside" lib/i18n/content/en/standorte.ts` nichts mehr finden.

- [ ] **Step 4: `lib/i18n/dictionaries/en.ts` an den geänderten Typ anpassen**

`vereinLinkSitzwachen`, `vereinBetween1`, `vereinLinkHospiz` entfernen; `vereinAfter` entsprechend kürzen; `karriereLinkEhrenamt` auf `'Paid volunteering: one-to-one care'`; `kontakt.subjects` auf sieben Einträge mit `'One-to-one care / night care'` und `'Support in the final phase of life'`; `leistungenPage.lead` von „Eight ways" auf „Seven ways" und ohne Krankenhausbezug; `indexMeta.home.title` und `indexMeta.leistungen.description` ohne „bedside".

- [ ] **Step 5: Prüfen**

Run: `npm run typecheck && npm test`
Expected: keine Fehler

Run: `grep -in "bedside\|hospital\|hospice\|clinic\|psychiatric" lib/i18n/content/en/ lib/i18n/dictionaries/en.ts`
Expected: keine Ausgabe

- [ ] **Step 6: Commit**

```bash
git add lib/i18n/content/en lib/i18n/dictionaries/en.ts
git commit -m "feat(i18n en): Krankenhausinhalte entfernt, 1:1-Betreuung uebersetzt"
```

---

## Task 9: Spanische Überlagerung

**Files:**
- Modify: `lib/i18n/content/es/leistungen-seo.ts`, `lib/i18n/content/es/themen.ts`, `lib/i18n/content/es/standorte.ts`, `lib/i18n/dictionaries/es.ts`

- [ ] **Step 1: Dieselben vier Schlüssel löschen wie in Task 8, Schritt 1**

- [ ] **Step 2: Schlüssel `'1-zu-1-betreuung-berlin'` anlegen**

Übersetzung des deutschen Eintrags. Der Sprachhinweis für Spanisch bleibt unverändert bestehen: Spanisch ist nur für den Erstkontakt zugesichert, nicht für die laufende Betreuung. Kein Satz auf dieser Seite darf spanischsprachige Betreuung versprechen. Kopf:

```ts
  '1-zu-1-betreuung-berlin': {
    slug: '1-zu-1-betreuung-berlin',
    title: 'Atención individual en casa',
    short: 'Una persona, un cuidador, atención sin dividir — por horas o las veinticuatro horas, en el propio domicilio.',
    metaTitle: 'Atención individual Berlín – acompañamiento privado en casa',
    metaDescription: 'Atención individual privada en Berlín: una persona de referencia en el propio domicilio, por horas o de forma continua. En caso de demencia, riesgo de caídas o en la última etapa de la vida.',
    h1: 'Atención individual en casa — toda la atención para una sola persona',
    primaryKeyword: 'atención individual Berlín',
    secondaryKeywords: ['cuidador privado en casa Berlín', 'atención individual demencia Berlín', 'cuidados privados Berlín'],
```

- [ ] **Step 3: `lib/i18n/content/es/standorte.ts` wie in Task 5 bereinigen**

Nach dem Durchgang darf `grep -in "hospital\|clínica\|clinica\|hospicio\|psiquiátric\|psiquiatric" lib/i18n/content/es/standorte.ts` nichts mehr finden.

- [ ] **Step 4: `lib/i18n/dictionaries/es.ts` an den geänderten Typ anpassen** — dieselben Schlüssel wie in Task 8, Schritt 4.

- [ ] **Step 5: Prüfen und committen**

```bash
npm run typecheck && npm test
git add lib/i18n/content/es lib/i18n/dictionaries/es.ts
git commit -m "feat(i18n es): Krankenhausinhalte entfernt, atencion individual uebersetzt"
```

---

## Task 10: Italienische Überlagerung

**Files:**
- Modify: `lib/i18n/content/it/leistungen-seo.ts`, `lib/i18n/content/it/themen.ts`, `lib/i18n/content/it/standorte.ts`, `lib/i18n/dictionaries/it.ts`

- [ ] **Step 1: Dieselben vier Schlüssel löschen wie in Task 8, Schritt 1**

- [ ] **Step 2: Schlüssel `'1-zu-1-betreuung-berlin'` anlegen**

Wie Task 9, mit derselben Leitplanke: Italienisch ist nur für den Erstkontakt zugesichert. Kopf:

```ts
  '1-zu-1-betreuung-berlin': {
    slug: '1-zu-1-betreuung-berlin',
    title: 'Assistenza individuale a domicilio',
    short: 'Una persona, un operatore, attenzione non divisa — a ore o ventiquattr\'ore su ventiquattro, nella propria casa.',
    metaTitle: 'Assistenza individuale Berlino – accompagnamento privato a casa',
    metaDescription: 'Assistenza individuale privata a Berlino: una figura di riferimento fissa a domicilio, a ore o in modo continuativo. In caso di demenza, rischio di cadute o nell\'ultima fase della vita.',
    h1: 'Assistenza individuale a domicilio — tutta l\'attenzione per una sola persona',
    primaryKeyword: 'assistenza individuale Berlino',
    secondaryKeywords: ['badante privata a domicilio Berlino', 'assistenza demenza Berlino', 'assistenza privata Berlino'],
```

- [ ] **Step 3: `lib/i18n/content/it/standorte.ts` wie in Task 5 bereinigen**

Nach dem Durchgang darf `grep -in "ospedal\|clinica\|hospice\|psichiatric\|capezzale" lib/i18n/content/it/standorte.ts` nichts mehr finden.

- [ ] **Step 4: `lib/i18n/dictionaries/it.ts` an den geänderten Typ anpassen** — dieselben Schlüssel wie in Task 8, Schritt 4.

- [ ] **Step 5: Prüfen und committen**

```bash
npm run typecheck && npm test
git add lib/i18n/content/it lib/i18n/dictionaries/it.ts
git commit -m "feat(i18n it): Krankenhausinhalte entfernt, assistenza individuale uebersetzt"
```

---

## Task 11: HTTP 410 für die alten Adressen

**Files:**
- Create: `middleware.ts`
- Test: `tests/middleware.test.ts`

- [ ] **Step 1: Test schreiben (schlägt fehl)**

```ts
import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { middleware } from '@/middleware';

function req(pfad: string) {
  return new NextRequest(new URL(`https://heilpraxis-frommholz.de${pfad}`));
}

describe('410 für entfernte Krankenhaus-Seiten', () => {
  const entfernt = [
    '/leistungen/sitzwachen-berlin',
    '/leistungen/hospiz-sitzwachen',
    '/leistungen/klinik-begleitung-berlin',
    '/themen/krankenhaus-begleitung',
    '/en/services/bedside-companion-berlin',
    '/en/services/hospice-companion-care',
    '/en/services/hospital-companion-berlin',
    '/en/guides/hospital-support',
    '/es/servicios/acompanamiento-al-paciente-berlin',
    '/es/servicios/acompanamiento-en-hospicio',
    '/es/servicios/acompanamiento-hospitalario-berlin',
    '/es/guias/acompanamiento-hospitalario',
    '/it/servizi/assistenza-al-capezzale-berlino',
    '/it/servizi/accompagnamento-in-hospice',
    '/it/servizi/accompagnamento-ospedaliero-berlino',
    '/it/guide/accompagnamento-ospedaliero',
  ];

  it('beantwortet alle 16 Adressen mit 410', () => {
    expect(entfernt).toHaveLength(16);
    for (const pfad of entfernt) {
      expect(middleware(req(pfad)).status, pfad).toBe(410);
    }
  });

  it('laesst lebende Adressen durch', () => {
    for (const pfad of ['/', '/leistungen/1-zu-1-betreuung-berlin', '/en/services/night-care-berlin']) {
      expect(middleware(req(pfad)).status, pfad).not.toBe(410);
    }
  });
});
```

- [ ] **Step 2: Test laufen lassen, Fehlschlag bestätigen**

Run: `npm test -- tests/middleware.test.ts`
Expected: FAIL — `middleware.ts` existiert nicht

- [ ] **Step 3: `middleware.ts` im Projektwurzelverzeichnis anlegen**

```ts
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Die Heilpraxis bietet keine Sitzwachen und keine Begleitung im Krankenhaus
 * mehr an; diese Seiten sind ersatzlos entfallen. 410 statt 404, damit
 * Suchmaschinen sie zügig aus dem Index nehmen, statt monatelang
 * weiterzuprobieren. Bewusst keine Weiterleitung: es gibt kein Ziel, das
 * dasselbe verspricht.
 */
const ENTFERNT = new Set([
  '/leistungen/sitzwachen-berlin',
  '/leistungen/hospiz-sitzwachen',
  '/leistungen/klinik-begleitung-berlin',
  '/themen/krankenhaus-begleitung',
  '/en/services/bedside-companion-berlin',
  '/en/services/hospice-companion-care',
  '/en/services/hospital-companion-berlin',
  '/en/guides/hospital-support',
  '/es/servicios/acompanamiento-al-paciente-berlin',
  '/es/servicios/acompanamiento-en-hospicio',
  '/es/servicios/acompanamiento-hospitalario-berlin',
  '/es/guias/acompanamiento-hospitalario',
  '/it/servizi/assistenza-al-capezzale-berlino',
  '/it/servizi/accompagnamento-in-hospice',
  '/it/servizi/accompagnamento-ospedaliero-berlino',
  '/it/guide/accompagnamento-ospedaliero',
]);

export function middleware(request: NextRequest) {
  const pfad = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  if (ENTFERNT.has(pfad)) {
    return new NextResponse(null, { status: 410 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/leistungen/:slug', '/themen/:slug', '/:lang(en|es|it)/:segment/:slug'],
};
```

- [ ] **Step 4: Test laufen lassen**

Run: `npm test -- tests/middleware.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add middleware.ts tests/middleware.test.ts
git commit -m "feat: 410 Gone fuer die entfernten Krankenhaus-Adressen"
```

---

## Task 12: Abschlussprüfung

**Files:** keine Änderung außer `CHANGELOG.md`

- [ ] **Step 1: Wortkontrolle**

Run:

```bash
grep -rin "sitzwach" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=docs --exclude=CHANGELOG.md .
```

Expected: nur Treffer in `middleware.ts` und `tests/middleware.test.ts` (die alten Adressen).

Run:

```bash
grep -rin "klinik\|krankenhaus\|hospiz\|bedside\|hospital\|hospice\|ospedal\|hospicio" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=docs --exclude=CHANGELOG.md .
```

Expected: nur `middleware.ts`, `tests/middleware.test.ts`, die AGB-Absageklausel (`app/(de)/agb/page.tsx`) und die zwei Karriere-Stellen zur Bewerberherkunft (`lib/karriere.ts`, `app/(de)/karriere/page.tsx`). Jeder andere Treffer ist ein Fehler und wird behoben.

- [ ] **Step 2: Vollständige Prüfung**

Run: `npm run typecheck && npm run lint && npm test && npm run build`
Expected: alles grün, Build erzeugt die Route `/leistungen/1-zu-1-betreuung-berlin` sowie ihre drei Übersetzungen und keine der vier entfernten Routen.

- [ ] **Step 3: Sitemap gegenprüfen**

Run: `grep -c "<loc>" .next/server/app/sitemap.xml.body 2>/dev/null || echo "Sitemap zur Laufzeit erzeugt — im Dev-Server unter /sitemap.xml prüfen"`

Die Sitemap darf keine der vier entfernten Adressen mehr enthalten und muss die neue in allen vier Sprachen führen.

- [ ] **Step 4: CHANGELOG ergänzen und committen**

```bash
git add CHANGELOG.md
git commit -m "docs: CHANGELOG Krankenhaus-Bezug entfernt"
```
