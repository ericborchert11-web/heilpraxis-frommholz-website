# Etappe 2 — Trust-Sektion & Vereins-Framing (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Startseite von der Zweiter-Arbeitsmarkt-Erzählung auf Qualitäts-/Vertrauenssignale umstellen; soziale Story wandert markenseitig zum Partnerverein; `/soziales-engagement` bleibt erreichbar, aber mit Vereins-Framing.

**Architecture:** Neue Komponente `QualitaetSection` ersetzt `HaltungSection` in `app/page.tsx` (Anker `#haltung` → `#qualitaet`, Nav mitgezogen). `TrustStrip`-Badge entschärft. `/soziales-engagement` inhaltlich neu gerahmt. Inklusionsberatungs-Lead neutralisiert. **Alle Inhalte aus bestehenden FAQ-Aussagen belegt — nichts erfunden.**

**Tech Stack:** Next.js 16, React 19, Tailwind v4, TypeScript. Kein Test-Runner → Verifikation per `next build` + Sichtprüfung + Anker-Check.

> ⚠️ **FREIGABE-CHECKPOINT:** Eric muss den Wortlaut von (a) Trust-Sektion, (b) `/soziales-engagement`-Neufassung, (c) `TrustStrip`-Badge **vor dem Push** freigeben (Briefing-Rückfrage 2). Die Entwürfe stehen unten. Bauen + Sichtprüfen ist ohne Freigabe okay; **Push erst nach Freigabe.**

---

## Belegquellen für die Trust-Aussagen (nichts erfunden)

- „100 % sozialversicherungspflichtig angestellt / erweitertes Führungszeugnis / Deutsch Muttersprache oder C1" → `lib/faq-global.ts:37`
- „24/7 im legalen Wechselschicht-Modell, kein Live-in" → `lib/faq-global.ts:42`
- „festes kleines Team, 2–4 Bezugspersonen" → `lib/faq-global.ts:12` („klein und fest") + `lib/standorte.ts:643` („kleine feste Teams (2-4 Personen)")

---

## Betroffene Dateien

- Create: `components/QualitaetSection.tsx`
- Delete: `components/HaltungSection.tsx`
- Modify: `app/page.tsx` (Import + Verwendung), `components/Nav.tsx` (LINKS-Label + Anker), `components/TrustStrip.tsx` (Badge), `app/soziales-engagement/page.tsx` (Neufassung), `lib/leistungen.ts:91` (Inklusionsberatungs-Lead)

---

## Task 1: `QualitaetSection` erstellen und `HaltungSection` ersetzen

**DRAFT-COPY (Freigabe nötig):** Eyebrow „Qualität & Sicherheit", 5 Vertrauenspunkte.

**Files:**
- Create: `components/QualitaetSection.tsx`
- Modify: `app/page.tsx`
- Delete: `components/HaltungSection.tsx`

- [ ] **Step 1: Neue Komponente anlegen**

`components/QualitaetSection.tsx`:

```tsx
import { Reveal } from './Reveal';

const POINTS = [
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
];

export function QualitaetSection() {
  return (
    <section id="qualitaet" className="bg-anthracite text-cream py-24 px-6 md:px-12 scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold">Qualität & Sicherheit</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light">
            Worauf Sie sich <em className="text-gold not-italic font-medium">verlassen können.</em>
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/85">
            Gute Pflege beginnt bei der Frage, wer zu Ihnen ins Haus kommt — und unter welchen Bedingungen. Das regeln wir sauber, nachprüfbar und ohne Grauzonen.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i + 1, 4)}>
              <div className="h-full bg-anthracite p-8">
                <div className="font-serif text-lg text-gold">{p.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/80">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

> Hinweis: `Reveal`-Props (`as`, `delay`) exakt wie in `HaltungSection.tsx` verwendet — API bestätigt. Grid `gap-px` + `bg-gold/20` erzeugt feine Trennlinien (bestehendes Stilmittel: Hairlines in Gold). Bei ungeraden Karten in der letzten Reihe ist das visuell okay (Sichtprüfung).

- [ ] **Step 2: `app/page.tsx` umstellen**

- Import `import { HaltungSection } from '@/components/HaltungSection';` → `import { QualitaetSection } from '@/components/QualitaetSection';`
- Im JSX `<HaltungSection />` → `<QualitaetSection />`

- [ ] **Step 3: Alte Komponente löschen**

```bash
git rm components/HaltungSection.tsx
```
Danach prüfen, dass nichts mehr `HaltungSection` importiert:
```bash
grep -rn "HaltungSection" app components
```
Expected: 0 Treffer.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: erfolgreich, keine ungenutzten Imports.

- [ ] **Step 5: Commit**

```bash
git add components/QualitaetSection.tsx app/page.tsx
git commit -m "feat(home): Qualitäts-/Vertrauens-Sektion ersetzt Haltung-Sektion"
```

---

## Task 2: Nav-Anker & Label anpassen

**Files:**
- Modify: `components/Nav.tsx:8-12`

- [ ] **Step 1: LINKS-Eintrag ändern**

In `components/Nav.tsx` den Eintrag
```ts
  { href: '/#haltung', label: 'Unsere Haltung' },
```
ersetzen durch
```ts
  { href: '/#qualitaet', label: 'Qualität' },
```

- [ ] **Step 2: Keine toten Anker**

```bash
grep -rn "#haltung" app components   # erwartet: 0 (Anker heißt jetzt #qualitaet)
grep -rn "#qualitaet\|id=\"qualitaet\"" app components   # Nav-Link + Section-id vorhanden
```
Weitere bestehende Anker (`#leistungen`, `#ablauf`, `#kontakt`, `#faq`) unverändert — Gegencheck, dass sie noch existieren:
```bash
for a in leistungen ablauf kontakt faq qualitaet; do echo -n "$a: "; grep -rl "id=\"$a\"" components | wc -l; done
```
Expected: jede Zeile `1`.

- [ ] **Step 3: Build + Commit**

```bash
npm run build
git add components/Nav.tsx
git commit -m "feat(nav): Anker 'Unsere Haltung' → 'Qualität' (#qualitaet)"
```

---

## Task 3: TrustStrip-Badge entschärfen (Insider-Jargon raus)

**DRAFT (Freigabe nötig):** `§ 3b` / `Korrekte Abrechnung` → `100 %` / `fest angestellt`.

**Files:**
- Modify: `components/TrustStrip.tsx:4`

- [ ] **Step 1: Badge ersetzen**

In `components/TrustStrip.tsx` die Zeile
```ts
  { num: '§ 3b', label: 'Korrekte Abrechnung' },
```
ersetzen durch
```ts
  { num: '100 %', label: 'fest angestellt' },
```

- [ ] **Step 2: Build + Sichtprüfung** — Stats-Leiste auf `/`: „20+ / 24/7 / 100 % / Berlin". Kein Umbruch-Problem.

- [ ] **Step 3: Commit**

```bash
git add components/TrustStrip.tsx
git commit -m "feat(home): TrustStrip-Badge '§ 3b' → kundenverständlich '100 % fest angestellt'"
```

---

## Task 4: `/soziales-engagement` neu rahmen (URL/SEO erhalten)

**DRAFT (Freigabe nötig).** Ziel: Seite bleibt unter gleicher URL erreichbar, aber die soziale Story läuft jetzt markenseitig über den Partnerverein **Leben Pflegen Reisen e.V.** Die HPF-eigene gemeinnützige Herkunft bleibt als kurzer, ehrlicher Absatz erhalten (ist faktisch wahr), wird aber nicht mehr zum Haupt-Narrativ der Marke gemacht. „Sieben Mitarbeitende"-Zahl von der Startseite ist bereits raus (Task 1); auf dieser Seite wird sie zu einer neutraleren Formulierung entschärft.

**Files:**
- Modify: `app/soziales-engagement/page.tsx`

- [ ] **Step 1: Metadata-Lead/Description anpassen**

`metadata.description` (Zeile 8) neu:
```
'Soziales Engagement der Heilpraxis Frommholz: getragen gemeinsam mit unserem Partnerverein Leben Pflegen Reisen e.V. Pflege als soziale Aufgabe — Herkunft, Haltung, Kooperation.'
```
`PageLayout`-`lead` (Zeile 17) neu:
```
"Soziale Verantwortung gehört für uns zur Pflege — ein großer Teil davon läuft heute über unseren gemeinnützigen Partnerverein Leben Pflegen Reisen e.V. Hier zeigen wir, woher diese Haltung kommt und wie die Zusammenarbeit aussieht."
```

- [ ] **Step 2: Sektions-Reihenfolge & Inhalt umstellen**

Neue Struktur der Sektionen (Reihenfolge wichtig: Verein zuerst als Träger der sozialen Mission):

1. **„Getragen mit dem Partnerverein Leben Pflegen Reisen e.V."** (aus bestehender Kooperations-Sektion Zeile 58–75 hochziehen, an den Anfang). Text leicht erweitern: der Verein bündelt heute das ehrenamtliche/soziale Engagement; HPF stellt die bezahlten pflegerischen Schichten. Bestehende Links (Sitzwachen/Hospiz/Reisebegleitung) bleiben.
2. **„Woher unsere Haltung kommt"** (bestehende Sektion „Wurzeln in der gemeinnützigen Krankenpflege Frommholz", Zeile 33–56, unverändert übernehmen — faktisch korrekt, erklärt die DNA).
3. **„Wer bei uns arbeitet"** (bestehende Sektion Zeile 23–31): den Satz mit „Sieben unserer aktuellen Mitarbeitenden…" entschärfen zu einer Formulierung ohne fixe Zahl, z. B.:
   - alt: `Sieben unserer aktuellen Mitarbeitenden sind über genau diesen Weg zu uns gekommen.`
   - neu: `Etliche unserer Mitarbeitenden sind über genau diesen Weg zu uns gekommen.`
4. **„Ausbildungs- und Praktikumsplätze"** (Zeile 77–97) unverändert.
5. **„Was das für unsere Klient*innen heißt"** (Zeile 99–107) unverändert.
6. Abschluss-CTA (Zeile 109–128) unverändert.

> Umsetzung: Es werden nur Reihenfolge + der eine Zahlen-Satz + Lead/Description geändert. Kein Faktenverlust, keine erfundenen Aussagen. Der Rest des JSX bleibt 1:1.

- [ ] **Step 3: Build + Sichtprüfung** — `/soziales-engagement` lädt, Verein steht oben, alle internen Links funktionieren (Sitzwachen, Hospiz, Reisebegleitung, Karriere).

- [ ] **Step 4: Commit**

```bash
git add app/soziales-engagement/page.tsx
git commit -m "content(soziales-engagement): Vereins-Framing, soziale Story über Leben Pflegen Reisen e.V."
```

---

## Task 5: Inklusionsberatungs-Lead neutralisieren (Querverweis)

Die Leistung bleibt bestehen; nur die Formulierung, die auf die gemeinnützige Vorgeschichte referenziert, wird neutral/auf den Verein bzw. die Erfahrung bezogen.

**Files:**
- Modify: `lib/leistungen.ts:91`

- [ ] **Step 1: Lead anpassen**

`lib/leistungen.ts:91`:
- alt: `lead: 'Aus jahrelanger Erfahrung in der gemeinnützigen Krankenpflege Frommholz: Beratung zu Teilhabe, Hilfsmitteln, persönlicher Assistenz — für Menschen mit Behinderung und ihre Familien.'`
- neu: `lead: 'Aus vielen Jahren Praxis in Teilhabe und Assistenz: Beratung zu Teilhabeleistungen, Hilfsmitteln und persönlicher Assistenz — für Menschen mit Behinderung und ihre Familien.'`

> Prüfen, ob im Detailtext dieser Leistung (`lib/leistungen-seo.ts`, slug `inklusionsberatung`) weitere „gemeinnützige"-Formulierungen stehen, die im gleichen Sinn neutralisiert werden sollten:
```bash
grep -n "inklusionsberatung" lib/leistungen-seo.ts   # Detail-Block finden, dann Absatz sichten
```
Falls dort eine analoge Formulierung steht: gleich mit entschärfen (im Zweifel Eric fragen — Wording-Freigabe).

- [ ] **Step 2: Build + Commit**

```bash
npm run build
git add lib/leistungen.ts lib/leistungen-seo.ts
git commit -m "content(inklusionsberatung): Formulierung neutral/vereinsbezogen, Leistung bleibt"
```

---

## Task 6: Freigabe & Push

- [ ] **Step 1: Wortlaut Eric vorlegen** — Trust-Sektion (Task 1), soziales-engagement-Neufassung (Task 4), TrustStrip-Badge (Task 3). **Push blockiert bis Freigabe.**
- [ ] **Step 2: Ggf. Wording-Korrekturen einarbeiten** (separate Commits).
- [ ] **Step 3: Push**
```bash
git push
```
- [ ] **Step 4: Vercel-Preview** — Startseite ohne Zweiter-Arbeitsmarkt-Narrativ; Trust-Sektion sichtbar; Nav-Link „Qualität" scrollt zu `#qualitaet`; `/soziales-engagement` erreichbar mit Vereins-Framing.

---

## Akzeptanzkriterien (aus Briefing)

- [ ] Startseite ohne Zweiter-Arbeitsmarkt-Narrativ (keine „7 Mitarbeitende"-Stat, keine „zweiter Arbeitsmarkt"-Erzählung).
- [ ] Trust-Sektion live, alle 5 Aussagen FAQ-belegt.
- [ ] Nav-Label „Qualität", Anker `#qualitaet` funktioniert, kein toter `#haltung`-Link.
- [ ] TrustStrip-Badge ohne „§ 3b"-Jargon.
- [ ] `/soziales-engagement` erreichbar (URL erhalten, in Sitemap), Vereins-Framing.
- [ ] Inklusionsberatung bleibt als Leistung bestehen, Formulierung neutral.
- [ ] **Wording-Freigabe durch Eric VOR Push eingeholt.**
