# Familienbereich Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) oder superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Einen „Familienbereich" (geschützter Online-Zugang für Angehörige: Dienstpläne, Rechnungen, Dokumentation) als Standard-Perk für alle Klient:innen auf der Website sichtbar machen — Startseiten-Sektion + Unterseite `/familienbereich`.

**Architecture:** Neue Präsentations-Komponente `FamilienbereichSection` (Muster wie `QualitaetSection`) auf der Startseite nach „So läuft es". Neue Unterseite `app/familienbereich/page.tsx` über `PageLayout` (Muster wie `app/soziales-engagement/page.tsx`), Inhalt inline. Canonical/og:url via `pageMeta`, FAQ via `FaqAccordion` + `FaqJsonLd`. Sitemap- und Footer-Verlinkung. **Kein Login/Auth, keine öffentliche Login-URL, kein Nav-Button.**

**Tech Stack:** Next.js 16, React 19, Tailwind v4, TypeScript. Kein Test-Runner → Verifikation per `next build` + `curl` + Sichtprüfung.

> **Spec:** `docs/superpowers/specs/2026-07-17-familienbereich-design.md`. Draft-Copy dort/hier ist **freigabepflichtig vor Push** (Sicherheits-/Datenschutzaussagen!).

> **Reveal-API-Hinweis (aus Etappe 2 bekannt):** `Reveal`-Prop `delay` ist die Literal-Union `1|2|3|4|5|6`, NICHT `number`. Keine `Math.min(...)`-Ausdrücke an `delay` übergeben — feste Literale verwenden.

---

## Betroffene Dateien

- Create: `components/FamilienbereichSection.tsx`
- Create: `app/familienbereich/page.tsx`
- Modify: `app/page.tsx` (Sektion einbinden)
- Modify: `app/sitemap.ts` (Route ergänzen)
- Modify: `components/Footer.tsx` (Verweis)
- Modify: `components/AblaufSection.tsx` (dezenter Verweis)

---

## Task 1: `FamilienbereichSection` (Startseiten-Sektion)

**Files:**
- Create: `components/FamilienbereichSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Komponente anlegen**

`components/FamilienbereichSection.tsx`:

```tsx
import Link from 'next/link';
import { Reveal } from './Reveal';

const BAUSTEINE = [
  {
    title: 'Dienstpläne',
    text: 'Wer kommt wann? Der aktuelle Dienstplan Ihrer/Ihres Angehörigen — jederzeit einsehbar, immer aktuell.',
  },
  {
    title: 'Rechnungen',
    text: 'Alle Rechnungen übersichtlich an einem Ort, transparent aufgeschlüsselt und jederzeit abrufbar.',
  },
  {
    title: 'Dokumentation',
    text: 'Was ist passiert? Die Pflegedokumentation — nachvollziehbar für berechtigte Angehörige, nah am Alltag Ihrer/Ihres Liebsten.',
  },
];

export function FamilienbereichSection() {
  return (
    <section id="familienbereich" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <Reveal>
        <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Für Angehörige</span>
      </Reveal>
      <Reveal delay={1} as="h2">
        <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
          Ihr Familienbereich — <em className="text-gold-deep not-italic font-medium">immer im Bild,</em> ohne nachfragen zu müssen.
        </span>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-anthracite-soft">
          Pflege betrifft die ganze Familie. In Ihrem geschützten Familienbereich sehen Sie jederzeit, wer wann da ist, was abgerechnet wird und was dokumentiert wurde — an einem Ort, für alle unsere Klient:innen inklusive.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
        {BAUSTEINE.map((b, i) => (
          <Reveal key={b.title} delay={(i + 1) as 1 | 2 | 3}>
            <div className="h-full bg-cream p-8">
              <div className="font-serif text-lg text-gold-deep">{b.title}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-anthracite-soft">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={3}>
        <p className="mt-8 text-[13px] leading-relaxed text-anthracite-light">
          Geschützter, verschlüsselter Zugang — nur für berechtigte Angehörige. Wir richten ihn individuell für Ihre Familie ein.
        </p>
      </Reveal>

      <Reveal delay={4}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/familienbereich"
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            Mehr erfahren →
          </Link>
          <Link
            href="/#kontakt"
            className="inline-block border border-anthracite text-anthracite px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors"
          >
            Im Erstgespräch einrichten
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
```

> Vor dem Schreiben `components/QualitaetSection.tsx` + `components/Reveal.tsx` öffnen und bestätigen: `Reveal`-Props (`as`, `delay` als Literal-Union) und die Tailwind-Farbtokens (`gold-deep`, `anthracite-soft`, `anthracite-light`, `cream`, `gold/20`) existieren. Falls ein Token nicht existiert, das in `QualitaetSection`/`SeoDetailContent` verwendete Äquivalent nehmen. `delay={(i + 1) as 1 | 2 | 3}` erfüllt die Literal-Union bei 3 Karten.

- [ ] **Step 2: In `app/page.tsx` einbinden (nach „So läuft es")**

- Import ergänzen: `import { FamilienbereichSection } from '@/components/FamilienbereichSection';`
- Im JSX **direkt nach** `<AblaufSection />` und **vor** `<FaqSection />` einfügen: `<FamilienbereichSection />`

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: erfolgreich, keine TS-Fehler.

- [ ] **Step 4: Render-Check**
```bash
npx next start -p 3100 & sleep 5
curl -s http://localhost:3100/ | grep -o 'id="familienbereich"\|Ihr Familienbereich\|Dokumentation'
pkill -f "next start -p 3100"
```
Expected: `id="familienbereich"` und `Ihr Familienbereich` vorhanden.

- [ ] **Step 5: Commit**
```bash
git add components/FamilienbereichSection.tsx app/page.tsx
git commit -m "feat(home): Familienbereich-Sektion (geschützter Zugang für Angehörige)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Unterseite `/familienbereich`

**Files:**
- Create: `app/familienbereich/page.tsx`

- [ ] **Step 1: Muster ansehen** — `app/soziales-engagement/page.tsx` (PageLayout-Nutzung, Metadata mit `...pageMeta(...)`), `components/FaqAccordion.tsx` (Props: `items: FaqItem[]`), `components/SEO/FaqJsonLd.tsx`, `lib/faq-global.ts` (Typ `FaqItem = {question, answer}`).

- [ ] **Step 2: Seite anlegen**

`app/familienbereich/page.tsx`:

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { FaqAccordion } from '@/components/FaqAccordion';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import type { FaqItem } from '@/lib/faq-global';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Familienbereich — geschützter Online-Zugang für Angehörige',
  description:
    'Als Angehörige jederzeit im Bild: Dienstpläne, Rechnungen und Pflegedokumentation im geschützten Familienbereich. Für alle Klient:innen der Heilpraxis Frommholz inklusive.',
  ...pageMeta('/familienbereich'),
  robots: { index: true, follow: true },
};

const FAQ: readonly FaqItem[] = [
  {
    question: 'Wer bekommt Zugang?',
    answer: 'Sie und die Angehörigen, die Sie benennen. Jeder Zugang wird individuell und geschützt eingerichtet.',
  },
  {
    question: 'Was kostet der Familienbereich?',
    answer: 'Nichts extra — er ist für alle unsere Klient:innen inklusive.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'Der Zugang ist geschützt und verschlüsselt, die Verarbeitung erfolgt nach den Vorgaben der DSGVO, und nur berechtigte Angehörige sehen die Inhalte. Details in unserer Datenschutzerklärung.',
  },
];

export default function FamilienbereichPage() {
  return (
    <PageLayout
      title="Ihr Familienbereich — alles Wichtige an einem geschützten Ort"
      lead="Wenn ein Mensch gepflegt wird, wollen Angehörige wissen, was passiert — auch wenn sie nicht daneben stehen können. Der Familienbereich gibt Ihnen genau das: einen geschützten Online-Zugang zu Dienstplänen, Rechnungen und Dokumentation. Für alle unsere Klient:innen inklusive."
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Familienbereich', href: '/familienbereich' },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Warum ein Familienbereich</h2>
        <p className="mt-3">
          Pflege betrifft nie nur eine Person, sondern die ganze Familie. Gerade wer nicht täglich vor Ort sein kann, möchte trotzdem wissen: Wer ist gerade da? Was wurde gemacht? Was kostet es? Der Familienbereich beantwortet diese Fragen, ohne dass Sie nachtelefonieren müssen — und nimmt Angehörigen ein Stück Sorge ab.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Die drei Bausteine</h2>
        <p className="mt-3">
          <strong className="text-anthracite">Dienstpläne.</strong> Sie sehen, wer wann zu Ihrer/Ihrem Angehörigen kommt — immer aktuell, jederzeit einsehbar.
        </p>
        <p className="mt-3">
          <strong className="text-anthracite">Rechnungen.</strong> Alle Rechnungen an einem Ort, transparent aufgeschlüsselt, mit allen Zuschlägen sichtbar und jederzeit abrufbar.
        </p>
        <p className="mt-3">
          <strong className="text-anthracite">Dokumentation.</strong> Was wurde geleistet und beobachtet? Die Pflegedokumentation ist für berechtigte Angehörige nachvollziehbar — nah am Alltag, ohne Fachchinesisch.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Für alle Klient:innen inklusive</h2>
        <p className="mt-3">
          Der Familienbereich kostet nichts extra. Er gehört zu unserem Verständnis von ehrlicher, transparenter Pflege: Wer uns beauftragt, soll jederzeit sehen können, was passiert — nicht auf Nachfrage, sondern selbstverständlich.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Sicherheit &amp; Datenschutz</h2>
        <p className="mt-3">
          Der Zugang ist geschützt und verschlüsselt. Es sehen ausschließlich die Angehörigen, die Sie berechtigen. Wir verarbeiten die Daten nach den Vorgaben der DSGVO und behandeln die besonders sensiblen Inhalte der Pflegedokumentation mit entsprechender Sorgfalt. Wie wir mit Ihren Daten umgehen, lesen Sie in unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-gold-deep">Datenschutzerklärung</Link>.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Individuell nach Bedarf eingerichtet</h2>
        <p className="mt-3">
          Wir richten den Familienbereich für jede Familie individuell ein und erweitern ihn bei Bedarf — etwa um weitere berechtigte Angehörige oder zusätzliche Inhalte. Was Sie brauchen, setzen wir um.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Häufige Fragen</h2>
        <FaqAccordion items={FAQ} />
      </section>

      <section className="mt-10 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">Zugang im Erstgespräch einrichten</p>
        <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">
          Sie überlegen, ob Betreuung durch uns das Richtige ist? Im kostenlosen Erstgespräch richten wir auf Wunsch gleich Ihren Familienbereich mit ein.
        </p>
        <div className="mt-5">
          <Link
            href="/#kontakt"
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            Erstgespräch anfragen
          </Link>
        </div>
      </section>

      <FaqJsonLd items={FAQ} />
    </PageLayout>
  );
}
```

> `PageLayout`-Props (`title`, `lead`, `crumbs`) exakt wie in `soziales-engagement`. Falls `FaqAccordion` ein Client-Component ist ('use client'), ist der Import in diese Server-Component unproblematisch (Next rendert es als Client-Island). Tailwind-Tokens gegen bestehende Seiten prüfen.

- [ ] **Step 3: Build + Render-Check**
```bash
npm run build
npx next start -p 3100 & sleep 5
echo -n "status: "; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3100/familienbereich
curl -s http://localhost:3100/familienbereich | grep -Eo '<meta property="og:url" content="[^"]*"|<link rel="canonical" href="[^"]*"|"@type":"FAQPage"'
pkill -f "next start -p 3100"
```
Expected: HTTP `200`; `og:url` === `canonical` (beide `https://heilpraxis-frommholz.de/familienbereich`); ein `"@type":"FAQPage"`.

- [ ] **Step 4: Commit**
```bash
git add app/familienbereich/page.tsx
git commit -m "feat(familienbereich): Unterseite mit Detail, Datenschutz, FAQ + Schema

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Verlinkung (Sitemap, Footer, Ablauf)

**Files:**
- Modify: `app/sitemap.ts`, `components/Footer.tsx`, `components/AblaufSection.tsx`

- [ ] **Step 1: Sitemap** — in `app/sitemap.ts` zu `staticPages` ergänzen (nach dem `/soziales-engagement`-Eintrag):
```ts
{ url: `${SITE.url}/familienbereich`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
```

- [ ] **Step 2: Footer** — in `components/Footer.tsx` in der **ersten Spalte** direkt nach `<p className="mt-3 text-sm">{BUSINESS.hours.label}</p>` (Zeile ~28) ergänzen:
```tsx
<Link href="/familienbereich" className="mt-4 inline-block text-sm text-gold hover:text-gold-soft underline">
  → Familienbereich für Angehörige
</Link>
```
(`Link` ist in Footer.tsx bereits importiert.)

- [ ] **Step 3: Ablauf-Verweis** — `components/AblaufSection.tsx` öffnen. Am Ende des Sektions-Inhalts (vor dem schließenden Container der `<section id="ablauf">`) einen dezenten Abschluss-Link ergänzen, Styling an die Sektion angepasst:
```tsx
<p className="mt-10 text-[14px] text-anthracite-light">
  Und danach bleiben Sie im Bild:{' '}
  <Link href="/familienbereich" className="text-gold-deep underline hover:text-gold">
    Ihr Familienbereich für Angehörige →
  </Link>
</p>
```
Falls `Link` dort noch nicht importiert ist: `import Link from 'next/link';` ergänzen. Falls die Sektion ein dunkler/heller Hintergrund ist, Farbtoken passend wählen (Kontrast prüfen).

- [ ] **Step 4: Build + Verifikation**
```bash
npm run build
npx next start -p 3100 & sleep 5
curl -s http://localhost:3100/sitemap.xml | grep -o 'familienbereich'
curl -s http://localhost:3100/ | grep -o 'familienbereich' | head
pkill -f "next start -p 3100"
```
Expected: `familienbereich` in Sitemap; Footer-/Ablauf-Link auf der Startseite vorhanden.

- [ ] **Step 5: Commit**
```bash
git add app/sitemap.ts components/Footer.tsx components/AblaufSection.tsx
git commit -m "feat(familienbereich): Sitemap-Eintrag, Footer- und Ablauf-Verweis

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Sichtprüfung, Freigabe, Push

- [ ] **Step 1: Visuelle Prüfung** — `npx next start`, Startseite (Sektion nach „So läuft es") und `/familienbereich` im Browser ansehen (Layout, Lesbarkeit, Karten-Raster, CTAs, Breadcrumb, FAQ-Accordion). Screenshots für Eric.
- [ ] **Step 2: Wording-Freigabe Eric** — insbesondere Sicherheits-/Datenschutzaussagen. **Push blockiert bis Freigabe.**
- [ ] **Step 3: Push** (nach Freigabe): `git push`
- [ ] **Step 4: Vercel/Live-Check** — `/familienbereich` erreichbar, og:url===canonical, in Sitemap; danach in Search Console als neue Seite zur Indexierung einreichen (nächste Tranche).

---

## Akzeptanzkriterien

- [ ] Startseite: Familienbereich-Sektion nach „So läuft es", 3 Bausteine, CTAs funktionieren, `id="familienbereich"`.
- [ ] `/familienbereich` live (200), og:url===canonical, FAQPage-JSON-LD, in Sitemap.
- [ ] Footer- und Ablauf-Verweis vorhanden; **kein** Nav-Login-Button, keine öffentliche Login-URL.
- [ ] Positionierung „für alle inklusive", Datenschutz prominent, keine erfundenen Belege/Zertifikate.
- [ ] Wording-Freigabe durch Eric vor Push.
