# Etappe 1 — Foundation + Startseite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lokal lauffähige Heilpraxis-Frommholz-Website mit der vollständigen Startseite (entspricht `mockup.html`), Layout-Chrome (A11y-Bar, Nav, Footer mit 12 Bezirken), persistierender A11y-Wahl ohne FOUC, und allen Daten-Modulen unter `lib/` (Leistungen vorerst nur mit Karten-Texten, Bezirke nur mit Slug+Name).

**Architecture:** Next.js 16 App Router (TS strict), Tailwind v4 mit `@theme`-Block (CSS-first Theming), Server Components als Default, Client nur für `A11yBar`, `Nav`, `Reveal`, `KontaktSection`. Daten als TypeScript-Module unter `lib/`. Inline-Script im `<head>` setzt A11y-Klassen vor dem ersten Paint.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, `next/font/google` (Cormorant Garamond + Manrope), keine UI-Library, keine Test-Framework-Installation.

**Out of scope (gehört in spätere Etappen):**
- Vercel-Deployment, Sitemap, Robots → Etappe 2
- Sub-Seiten `/soziales-engagement`, `/kontakt`, `/ueber-uns`, `/karriere`, `/impressum`, `/datenschutz` → Etappe 3
- Leistungs-Detailseiten + Detail-Inhalt in `lib/leistungen.ts` → Etappe 4
- Bezirks-Landingpages + Detail-Inhalt in `lib/bezirke.ts` → Etappe 5
- Custom-Domain → Etappe 6

**Was am Ende von Etappe 1 existiert / nicht existiert:**

| Status | Detail |
|---|---|
| ✅ Existiert | Lokales `npm run dev` zeigt die volle Startseite. `npm run build && npm run start` lokal funktioniert. Alle Commits liegen lokal auf `main`. |
| ❌ Existiert NICHT | Push auf GitHub. Vercel-Projekt. `heilpraxis-frommholz.vercel.app`. Subdomain ist Etappe 2. |
| ❌ Existiert NICHT | `heilpraxis-frommholz.de` zeigt unverändert auf Ionos/GitHub-Pages. DNS bleibt in Etappe 1 unangetastet. |

**Task-Granularität:** Jeder Task endet mit Commit + Browser-Check. Budget pro Task: ~15–25 Min. Nach jedem Task pausiert die Ausführung für Eric's Abnahme.

---

## File Structure (was am Ende von Etappe 1 existiert)

```
heilpraxis-frommholz-website/
├── app/
│   ├── layout.tsx              # Fonts, A11y-Init-Script, A11yBar, Nav, Footer
│   ├── page.tsx                # Startseite — alle Sektionen verdrahtet
│   ├── globals.css             # Tailwind-Import, @theme, Reset, A11y-Overrides, Reveal
│   ├── favicon.ico             # vom create-next-app, evtl. später ersetzen
│   └── not-found.tsx           # einfache 404-Seite (Sub-Seiten existieren noch nicht)
├── components/
│   ├── A11yBar.tsx
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx
│   ├── LeistungIcon.tsx
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── LeistungCard.tsx
│   ├── LeistungenGrid.tsx
│   ├── HaltungSection.tsx
│   ├── Testimonials.tsx
│   ├── TestimonialCard.tsx
│   ├── AblaufSection.tsx
│   └── KontaktSection.tsx
├── lib/
│   ├── site-config.ts
│   ├── leistungen.ts
│   ├── bezirke.ts
│   └── a11y-init.ts
├── public/
│   └── logo.png
├── docs/superpowers/{specs,plans}/   # bereits vorhanden
├── mockup.html                       # bereits vorhanden
├── README.md
├── .gitignore
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json
```

---

## Task 1: Next.js 16 Projekt initialisieren

**Files:** alle Files von `create-next-app` (Root-Configs + `app/` Starter).

- [ ] **Step 1.1: `create-next-app` ausführen**

Im Projekt-Root:

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias '@/*' \
  --eslint \
  --no-turbopack \
  --use-npm
```

Falls Conflicts (`README.md`, `.gitignore`, `mockup.html`, `docs/`): existierende Files **nicht überschreiben**. Falls `README.md` doch überschrieben wurde: `git checkout README.md`.

Expected: neue Files unter `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/favicon.ico`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `package.json`, `package-lock.json`, `eslint.config.mjs`.

- [ ] **Step 1.2: Dev-Server-Smoke-Test**

```bash
npm run dev
```

Browser auf `http://localhost:3000` → Next.js-Starter-Seite. Stoppen mit `Ctrl+C`.

- [ ] **Step 1.3: Build + TypeCheck**

```bash
npm run build
```

Erwartet: erfolgreich, keine TS-Fehler.

- [ ] **Step 1.4: Tailwind-Version verifizieren**

```bash
npm ls tailwindcss
```

Erwartet: 4.x.y. Bei v3.x: **STOP** und Eric fragen — Task 2 setzt auf v4 `@theme`-Block.

- [ ] **Step 1.5: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
Bootstrap Next.js 16 app with App Router + Tailwind + TS

Created via create-next-app: app/layout.tsx, app/page.tsx (starter),
app/globals.css, next.config.ts, tsconfig.json, postcss.config.mjs,
eslint.config.mjs, package.json. README.md preserved.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** `npm run dev` → Next.js-Starter sichtbar auf `localhost:3000`.

---

## Task 2: Tailwind-Theme, Fonts, globals.css

**Files:** `app/layout.tsx`, `app/globals.css` (beide ersetzen).

- [ ] **Step 2.1: `app/layout.tsx` mit Fonts**

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Heilpraxis Frommholz – Private Pflege & Beratung in Berlin',
  description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland. Stundenweise bis 24/7. Mit Erfahrung, Sorgfalt und Haltung.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-cream text-anthracite font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2.2: `app/globals.css` mit Theme + Reset + A11y-CSS**

```css
@import "tailwindcss";

@theme {
  --color-gold: #C9A352;
  --color-gold-deep: #A8862F;
  --color-gold-soft: #E8D49C;
  --color-anthracite: #1a1a1a;
  --color-anthracite-light: #2a2a2a;
  --color-anthracite-soft: #3d3d3d;
  --color-cream: #fbf8f1;
  --color-cream-deep: #f3ede0;
  --color-paper: #ece4d2;
  --color-warm-gray: #8a8278;
  --color-warm-gray-light: #b8b0a3;

  --font-serif: var(--font-serif), Georgia, serif;
  --font-sans: var(--font-sans), system-ui, sans-serif;
}

html { font-size: 17px; scroll-behavior: smooth; }
body { line-height: 1.7; font-weight: 300; overflow-x: hidden; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-cream); }
::-webkit-scrollbar-thumb { background: var(--color-gold); }

html.a11y-large { font-size: 19px; }
html.a11y-xlarge { font-size: 22px; }

html.a11y-contrast body { background: #000; color: #fff; }
html.a11y-contrast .bg-cream,
html.a11y-contrast .bg-cream-deep,
html.a11y-contrast .bg-paper { background: #000 !important; }
html.a11y-contrast .text-anthracite,
html.a11y-contrast .text-anthracite-light,
html.a11y-contrast .text-warm-gray,
html.a11y-contrast .text-warm-gray-light { color: #fff !important; }
html.a11y-contrast .text-gold,
html.a11y-contrast .text-gold-deep,
html.a11y-contrast .text-gold-soft { color: #ff0 !important; }
html.a11y-contrast .border-gold,
html.a11y-contrast section { border-color: #ff0 !important; }

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal.delay-1 { transition-delay: 0.1s; }
.reveal.delay-2 { transition-delay: 0.2s; }
.reveal.delay-3 { transition-delay: 0.3s; }
.reveal.delay-4 { transition-delay: 0.4s; }
.reveal.delay-5 { transition-delay: 0.5s; }
.reveal.delay-6 { transition-delay: 0.6s; }
```

- [ ] **Step 2.3: Build-Check**

```bash
npm run build
```

Erwartet: erfolgreich.

- [ ] **Step 2.4: Browser-Verifikation**

```bash
npm run dev
```

`http://localhost:3000`: Next.js-Starter, **aber** Hintergrund jetzt cremig (statt weiß), Body-Text in Manrope. DevTools → Network → Font: `cormorantgaramond-*.woff2` und `manrope-*.woff2` werden geladen. Stoppen.

- [ ] **Step 2.5: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "$(cat <<'EOF'
Configure Tailwind v4 theme, Google Fonts, A11y CSS

@theme block defines Heilpraxis palette (gold/anthracite/cream) and
CSS variables for Cormorant Garamond + Manrope (loaded via
next/font/google). globals.css contains reset, scrollbar, A11y
overrides (html.a11y-large/xlarge/contrast), and reveal-animation
classes.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Starter-Seite hat jetzt cremigen Hintergrund + saubere Fonts.

---

## Task 3: Logo aus mockup.html extrahieren

**Files:** `public/logo.png`.

- [ ] **Step 3.1: Extraktion**

```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('mockup.html', 'utf8');
const match = html.match(/data:image\/png;base64,([A-Za-z0-9+\/=]+)/);
if (!match) { console.error('FEHLER'); process.exit(1); }
fs.writeFileSync('public/logo.png', Buffer.from(match[1], 'base64'));
console.log('public/logo.png:', fs.statSync('public/logo.png').size, 'Bytes');
"
```

- [ ] **Step 3.2: PNG-Validität**

```bash
file public/logo.png && ls -la public/logo.png
```

Erwartet: `PNG image data, ...`, Größe ~200–800 KB.

- [ ] **Step 3.3: Visuelle Kontrolle**

```bash
open public/logo.png
```

Heilpraxis-Wappen, transparenter Hintergrund. Fenster schließen.

- [ ] **Step 3.4: Commit**

```bash
git add public/logo.png
git commit -m "$(cat <<'EOF'
Extract Heilpraxis logo from mockup.html to public/logo.png

Source: first data:image/png;base64 occurrence in mockup.html
(identical in nav + footer). Used at 56px (nav) and 52px (footer).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** `public/logo.png` ist da, Vorschau zeigt das Wappen.

---

## Task 4: Daten-Layer (`lib/`)

**Files:** `lib/site-config.ts`, `lib/a11y-init.ts`, `lib/leistungen.ts`, `lib/bezirke.ts`.

- [ ] **Step 4.1: `lib/site-config.ts`**

```ts
export const SITE = {
  name: 'Heilpraxis Frommholz',
  tagline: 'Pflege · Beratung · Begleitung',
  description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland. Stundenweise bis 24/7. Mit Erfahrung, Sorgfalt und Haltung.',
  url: 'https://heilpraxis-frommholz.de',
} as const;

export const BUSINESS = {
  address: {
    street: 'Stephanstr. 46',
    zip: '10559',
    city: 'Berlin',
    country: 'DE',
    district: 'Mitte',
    ortsteil: 'Moabit',
  },
  geo: { lat: 52.5302, lng: 13.3438 },
  phone: '+4915114140251',
  phoneDisplay: '0151 14140251',
  email: 'simeon@heilpraxis-frommholz.de',
  hours: {
    weekdays: { opens: '08:00', closes: '16:30' },
    label: 'Mo–Fr 08:00–16:30',
  },
} as const;

// UWG § 5 Schutzschalter — bewusste, sichtbare Aktivierung vor Go-Live nötig
export const SHOW_TESTIMONIALS = false;
```

- [ ] **Step 4.2: `lib/a11y-init.ts`**

```ts
// Inline-Script, läuft im <head> vor dem ersten Paint.
export const a11yInitScript = `(function(){try{var s=localStorage.getItem('hpf:a11y:size');var c=localStorage.getItem('hpf:a11y:contrast');if(s==='large')document.documentElement.classList.add('a11y-large');if(s==='xlarge')document.documentElement.classList.add('a11y-xlarge');if(c==='1')document.documentElement.classList.add('a11y-contrast');}catch(e){}})();`;
```

- [ ] **Step 4.3: `lib/leistungen.ts`**

```ts
export type IconKey = 'clock' | 'home' | 'rotate' | 'travel' | 'document' | 'people';

export type LeistungSlug =
  | '24h-betreuung'
  | 'alltagsbegleitung'
  | 'verhinderungspflege'
  | 'reisebegleitung'
  | 'pflegeberatung'
  | 'inklusionsberatung';

export type Leistung = {
  slug: LeistungSlug;
  numeral: string;
  title: string;
  iconKey: IconKey;
  card: { lead: string };
  detail: {
    hero: { h1: string; lead: string };
    wasWirTun: string[];
    fuerWen: string[];
    ablauf: { step: string; text: string }[];
    faq: { q: string; a: string }[];
  };
};

const emptyDetail: Leistung['detail'] = {
  hero: { h1: '', lead: '' },
  wasWirTun: [],
  fuerWen: [],
  ablauf: [],
  faq: [],
};

export const LEISTUNGEN: readonly Leistung[] = [
  {
    slug: '24h-betreuung',
    numeral: 'I.',
    title: '24-Stunden-Betreuung',
    iconKey: 'clock',
    card: {
      lead: 'Durchgehende Pflege und Begleitung im eigenen Zuhause, im Wechselschicht-Modell. Mit festem, kleinem Team — damit Vertrauen wachsen kann.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'alltagsbegleitung',
    numeral: 'II.',
    title: 'Alltagsbegleitung',
    iconKey: 'home',
    card: {
      lead: 'Stundenweise Hilfe im Alltag — Einkäufe, Arztbesuche, Spaziergänge, Gesellschaft. Flexibel buchbar, von einer Stunde bis zum ganzen Tag.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'verhinderungspflege',
    numeral: 'III.',
    title: 'Verhinderungspflege',
    iconKey: 'rotate',
    card: {
      lead: 'Wenn pflegende Angehörige eine Auszeit brauchen — Urlaub, Krankheit, oder einfach einmal durchatmen. Wir übernehmen verlässlich.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'reisebegleitung',
    numeral: 'IV.',
    title: 'Reisebegleitung',
    iconKey: 'travel',
    card: {
      lead: 'Begleitete Reisen für pflegebedürftige Menschen — Kur, Familienbesuch, Urlaub. In Kooperation mit unserem Partnerverein „Leben & Pflegen & Reisen".',
    },
    detail: emptyDetail,
  },
  {
    slug: 'pflegeberatung',
    numeral: 'V.',
    title: 'Pflegeberatung',
    iconKey: 'document',
    card: {
      lead: 'Unabhängige Beratung zu Pflegegraden, Leistungsansprüchen und Finanzierung. Wir helfen, sich im System zurechtzufinden — verständlich, in Ruhe.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'inklusionsberatung',
    numeral: 'VI.',
    title: 'Inklusionsberatung',
    iconKey: 'people',
    card: {
      lead: 'Aus jahrelanger Erfahrung in der gemeinnützigen Krankenpflege Frommholz: Beratung zu Teilhabe, Hilfsmitteln, persönlicher Assistenz — für Menschen mit Behinderung und ihre Familien.',
    },
    detail: emptyDetail,
  },
] as const;

export function hasDetailPage(leistung: Leistung): boolean {
  return leistung.detail.hero.h1.length > 0;
}
```

- [ ] **Step 4.4: `lib/bezirke.ts`**

```ts
export type Bezirk = {
  slug: string;
  name: string;
  isHauptstandort?: boolean;
  geo?: { lat: number; lng: number };
  hero: { h1: string; lead: string };
  leistungenIntro: string;
  meta: { title: string; description: string };
};

const emptyHero: Bezirk['hero'] = { h1: '', lead: '' };
const emptyMeta: Bezirk['meta'] = { title: '', description: '' };

export const BEZIRKE: readonly Bezirk[] = [
  { slug: 'mitte', name: 'Mitte', isHauptstandort: true, hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'friedrichshain-kreuzberg', name: 'Friedrichshain-Kreuzberg', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'pankow', name: 'Pankow', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'charlottenburg-wilmersdorf', name: 'Charlottenburg-Wilmersdorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'spandau', name: 'Spandau', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'steglitz-zehlendorf', name: 'Steglitz-Zehlendorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'tempelhof-schoeneberg', name: 'Tempelhof-Schöneberg', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'neukoelln', name: 'Neukölln', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'treptow-koepenick', name: 'Treptow-Köpenick', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'marzahn-hellersdorf', name: 'Marzahn-Hellersdorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'lichtenberg', name: 'Lichtenberg', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
  { slug: 'reinickendorf', name: 'Reinickendorf', hero: emptyHero, leistungenIntro: '', meta: emptyMeta },
] as const;

export function hasBezirksLandingpage(bezirk: Bezirk): boolean {
  return bezirk.hero.h1.length > 0;
}
```

- [ ] **Step 4.5: TypeCheck**

```bash
npx tsc --noEmit
```

Erwartet: keine Fehler.

- [ ] **Step 4.6: Commit**

```bash
git add lib/
git commit -m "$(cat <<'EOF'
Add data layer: site-config, leistungen, bezirke, a11y-init

site-config.ts: real address, phone, email, hours, SHOW_TESTIMONIALS=false.
leistungen.ts: 6 entries with card-level copy (mockup), detail fields
  empty (Etappe 4 fills them). hasDetailPage() helper.
bezirke.ts: 12 Berliner Bezirke (Mitte = Hauptstandort), hero/meta
  empty (Etappe 5 fills them).
a11y-init.ts: minified inline script for <head>, FOUC-free.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** keine sichtbare Änderung (Daten-only). `npx tsc --noEmit` zeigt 0 Fehler.

---

## Task 5: UI-Primitive (`Reveal`, `LeistungIcon`)

**Files:** `components/Reveal.tsx`, `components/LeistungIcon.tsx`.

- [ ] **Step 5.1: `components/Reveal.tsx`**

```tsx
'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'div' | 'section' | 'p' | 'h1' | 'h2' | 'h3' | 'span';
};

export function Reveal({ children, delay, className = '', as = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  const classes = ['reveal', delay ? `delay-${delay}` : '', visible ? 'visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={classes}>
      {children}
    </Tag>
  );
}
```

- [ ] **Step 5.2: `components/LeistungIcon.tsx`**

```tsx
import type { IconKey } from '@/lib/leistungen';

type Props = { iconKey: IconKey; className?: string };

export function LeistungIcon({ iconKey, className = '' }: Props) {
  const common = {
    viewBox: '0 0 56 56',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (iconKey) {
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="28" cy="28" r="20" />
          <path d="M28 16 L28 28 L36 32" />
        </svg>
      );
    case 'home':
      return (
        <svg {...common}>
          <path d="M14 42 L14 22 L28 12 L42 22 L42 42 Z" />
          <path d="M22 42 L22 30 L34 30 L34 42" />
        </svg>
      );
    case 'rotate':
      return (
        <svg {...common}>
          <path d="M10 28 C10 18 18 10 28 10 C38 10 46 18 46 28" />
          <path d="M10 28 L10 38 C10 42 14 46 18 46 L38 46 C42 46 46 42 46 38 L46 28" />
        </svg>
      );
    case 'travel':
      return (
        <svg {...common}>
          <path d="M8 38 L28 18 L48 38" />
          <path d="M14 32 L14 46 L42 46 L42 32" />
          <path d="M24 46 L24 36 L32 36 L32 46" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common}>
          <rect x="12" y="14" width="32" height="28" rx="2" />
          <line x1="18" y1="22" x2="38" y2="22" />
          <line x1="18" y1="28" x2="34" y2="28" />
          <line x1="18" y1="34" x2="36" y2="34" />
        </svg>
      );
    case 'people':
      return (
        <svg {...common}>
          <circle cx="20" cy="22" r="6" />
          <circle cx="36" cy="22" r="6" />
          <path d="M10 42 C10 36 14 32 20 32 C26 32 30 36 30 42" />
          <path d="M26 42 C26 36 30 32 36 32 C42 32 46 36 46 42" />
        </svg>
      );
  }
}
```

- [ ] **Step 5.3: TypeCheck**

```bash
npx tsc --noEmit
```

- [ ] **Step 5.4: Commit**

```bash
git add components/Reveal.tsx components/LeistungIcon.tsx
git commit -m "$(cat <<'EOF'
Add UI primitives: Reveal + LeistungIcon

Reveal: client wrapper using IntersectionObserver, toggles .visible
class once on intersect. Supports delay 1-6 and tag override.

LeistungIcon: server SVG map for the 6 Leistungs-Icons
(clock/home/rotate/travel/document/people), normalized to
currentColor stroke.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** noch nichts sichtbar (Primitive sind unangewandt). `npx tsc --noEmit` 0 Fehler.

---

## Task 6: A11yBar + layout.tsx-Integration

**Files:** `components/A11yBar.tsx` (neu), `app/layout.tsx` (modifizieren).

- [ ] **Step 6.1: `components/A11yBar.tsx`**

```tsx
'use client';

import { useEffect, useState } from 'react';
import { BUSINESS } from '@/lib/site-config';

type Size = 'normal' | 'large' | 'xlarge';

export function A11yBar() {
  const [size, setSize] = useState<Size>('normal');
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    const storedSize = (localStorage.getItem('hpf:a11y:size') as Size | null) ?? 'normal';
    const storedContrast = localStorage.getItem('hpf:a11y:contrast') === '1';
    setSize(storedSize);
    setContrast(storedContrast);
  }, []);

  const applySize = (next: Size) => {
    const root = document.documentElement;
    root.classList.remove('a11y-large', 'a11y-xlarge');
    if (next === 'large') root.classList.add('a11y-large');
    if (next === 'xlarge') root.classList.add('a11y-xlarge');
    localStorage.setItem('hpf:a11y:size', next);
    setSize(next);
  };

  const toggleContrast = () => {
    const next = !contrast;
    document.documentElement.classList.toggle('a11y-contrast', next);
    localStorage.setItem('hpf:a11y:contrast', next ? '1' : '0');
    setContrast(next);
  };

  const btnBase =
    'border border-cream/20 px-2.5 py-1 text-xs font-normal tracking-wider rounded-sm transition hover:border-gold hover:text-gold-soft';
  const btnActive = 'bg-gold !text-anthracite !border-gold';

  return (
    <div className="fixed inset-x-0 top-0 z-[200] flex items-center justify-between bg-anthracite px-6 py-2 text-cream text-xs border-b border-gold">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex items-center gap-2.5 font-normal tracking-wide hover:text-gold-soft"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-gold">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        {BUSINESS.phoneDisplay}
      </a>
      <div className="flex items-center gap-1.5">
        <button onClick={() => applySize('normal')} className={`${btnBase} ${size === 'normal' ? btnActive : ''}`} aria-label="Schriftgröße normal">A</button>
        <button onClick={() => applySize('large')} className={`${btnBase} ${size === 'large' ? btnActive : ''}`} aria-label="Schriftgröße größer">A+</button>
        <button onClick={() => applySize('xlarge')} className={`${btnBase} ${size === 'xlarge' ? btnActive : ''}`} aria-label="Schriftgröße sehr groß">A++</button>
        <button onClick={toggleContrast} className={`${btnBase} ${contrast ? btnActive : ''}`} aria-label="Hochkontrast umschalten">Kontrast</button>
      </div>
    </div>
  );
}
```

- [ ] **Step 6.2: `app/layout.tsx` mit A11yBar + Inline-Script**

Komplettes Ersetzen von `app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { A11yBar } from '@/components/A11yBar';
import { a11yInitScript } from '@/lib/a11y-init';
import { SITE } from '@/lib/site-config';

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

export const metadata: Metadata = {
  title: `${SITE.name} – Private Pflege & Beratung in Berlin`,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
      </head>
      <body className="bg-cream text-anthracite font-sans antialiased">
        <A11yBar />
        <main className="pt-12">{children}</main>
      </body>
    </html>
  );
}
```

- [ ] **Step 6.3: TypeCheck**

```bash
npx tsc --noEmit
```

- [ ] **Step 6.4: Dev-Test**

```bash
npm run dev
```

`http://localhost:3000`:
- Schwarze A11y-Bar oben mit Telefonnummer + 4 Buttons (A / A+ / A++ / Kontrast)
- Darunter Next.js-Starter (noch da, mit etwas Padding-Top)
- Klick A+ → Schrift wird größer
- Reload → größere Schrift bleibt (kein FOUC, A11y-Klasse ist sofort gesetzt)
- Klick Kontrast → schwarz/weiß-Schema, bleibt nach Reload
- Klick A → zurück auf normal
- localStorage in DevTools → Application: `hpf:a11y:size` und `hpf:a11y:contrast` werden geschrieben

Stoppen.

- [ ] **Step 6.5: Commit**

```bash
git add components/A11yBar.tsx app/layout.tsx
git commit -m "$(cat <<'EOF'
Add A11yBar + integrate inline init script into layout

A11yBar (client): phone link + 4 buttons (A/A+/A++/Kontrast).
Reads localStorage on mount for active state, writes back on toggle.
Inline script in <head> (from lib/a11y-init.ts) applies class to
<html> before paint — no FOUC after reload.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** schwarze A11y-Bar oben sichtbar mit Telefonnummer + 4 Buttons. Schriftgröße + Kontrast funktionieren, persistieren über Reload.

---

## Task 7: Nav + layout.tsx-Erweiterung

**Files:** `components/Nav.tsx` (neu), `app/layout.tsx` (modifizieren).

- [ ] **Step 7.1: `components/Nav.tsx`**

```tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site-config';

const LINKS = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#haltung', label: 'Unsere Haltung' },
  { href: '/#ablauf', label: 'So läuft es' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-[38px] z-[100] flex items-center justify-between px-6 md:px-12 bg-cream/95 backdrop-blur-md border-b border-anthracite/5 transition-all duration-300 ${
        scrolled ? 'h-[68px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]' : 'h-[84px]'
      }`}
    >
      <Link href="/" className="flex items-center gap-3.5 no-underline">
        <Image src="/logo.png" alt={`${SITE.name} Wappen`} width={56} height={56} className="shrink-0 object-contain" priority />
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[22px] font-medium text-anthracite tracking-wide">Heilpraxis Frommholz</span>
          <span className="font-sans text-[10px] font-normal uppercase tracking-[3px] text-gold-deep mt-0.5">Pflege · Beratung · Begleitung</span>
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-sans text-[13px] font-normal uppercase tracking-[1.5px] text-anthracite hover:text-gold-deep transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#kontakt"
            className="bg-anthracite text-cream px-5 py-2.5 rounded-sm font-sans text-[13px] uppercase tracking-[1.2px] hover:bg-gold-deep transition-colors"
          >
            Kontakt
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menü öffnen"
        aria-expanded={open}
      >
        <span className={`block h-[2px] w-6 bg-anthracite transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-[2px] w-6 bg-anthracite transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-[2px] w-6 bg-anthracite transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {open && (
        <ul className="md:hidden absolute left-0 right-0 top-full flex flex-col items-stretch bg-cream border-b border-anthracite/10 list-none">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-sans text-sm uppercase tracking-[1.5px] text-anthracite border-b border-anthracite/5 hover:bg-cream-deep"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="block px-6 py-4 bg-anthracite text-cream font-sans text-sm uppercase tracking-[1.5px]"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
```

- [ ] **Step 7.2: `app/layout.tsx` mit Nav erweitern**

Anpassung: Import + Nav in body + main bekommt `pt-[122px]` statt `pt-12`.

Komplette neue Version:

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { A11yBar } from '@/components/A11yBar';
import { Nav } from '@/components/Nav';
import { a11yInitScript } from '@/lib/a11y-init';
import { SITE } from '@/lib/site-config';

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

export const metadata: Metadata = {
  title: `${SITE.name} – Private Pflege & Beratung in Berlin`,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
      </head>
      <body className="bg-cream text-anthracite font-sans antialiased">
        <A11yBar />
        <Nav />
        <main className="pt-[122px]">{children}</main>
      </body>
    </html>
  );
}
```

- [ ] **Step 7.3: TypeCheck**

```bash
npx tsc --noEmit
```

- [ ] **Step 7.4: Dev-Test**

```bash
npm run dev
```

`http://localhost:3000`:
- A11y-Bar oben (wie vorher)
- Nav darunter mit Wappen-Logo + „Heilpraxis Frommholz" + Subline + 3 Links + schwarzem Kontakt-Button
- Beim Scrollen: Nav-Höhe schrumpft (84px → 68px)
- DevTools-Responsive ≤ 768px: Links verschwinden, Hamburger erscheint → öffnet vollbreites Drawer-Menü mit Links
- Hamburger schließt nach Klick auf Link

Stoppen.

- [ ] **Step 7.5: Commit**

```bash
git add components/Nav.tsx app/layout.tsx
git commit -m "$(cat <<'EOF'
Add Nav + integrate into layout

Nav (client): fixed under A11yBar, scroll-state shrinks height
(84→68px), mobile hamburger with full-width drawer. Brand link +
3 anchor links + Kontakt CTA. Wappen logo from /logo.png at 56px,
priority loading.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Nav unter A11y-Bar mit Logo + 3 Links + Kontakt-Button. Scroll-Shrink-Effekt. Mobile Hamburger öffnet/schließt.

---

## Task 8: Footer + finales Layout-Polish

**Files:** `components/Footer.tsx` (neu), `app/layout.tsx` (modifizieren).

- [ ] **Step 8.1: `components/Footer.tsx`**

```tsx
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SITE } from '@/lib/site-config';
import { BEZIRKE } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-cream/70 pt-20 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-3.5">
            <Image src="/logo.png" alt={`${SITE.name} Wappen`} width={52} height={52} className="object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-[19px] font-medium text-cream">Heilpraxis Frommholz</span>
              <span className="font-sans text-[10px] uppercase tracking-[3px] text-gold mt-0.5">Pflege · Beratung · Begleitung</span>
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            {BUSINESS.address.street}<br />
            {BUSINESS.address.zip} {BUSINESS.address.city}<br />
            <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold-soft">{BUSINESS.phoneDisplay}</a><br />
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-soft">{BUSINESS.email}</a>
          </p>
          <p className="mt-3 text-sm">{BUSINESS.hours.label}</p>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Leistungen</h4>
          <ul className="list-none space-y-2.5">
            {LEISTUNGEN.map((l) => (
              <li key={l.slug}>
                <Link href={`/leistungen/${l.slug}`} className="text-sm hover:text-gold-soft">{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Pflege in Ihrem Bezirk</h4>
          <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-2">
            {BEZIRKE.map((b) => (
              <li key={b.slug}>
                <Link href={`/pflege-in-${b.slug}`} className="text-[13px] hover:text-gold-soft">
                  {b.name}
                  {b.isHauptstandort && <span className="text-gold/80"> · Hauptstandort</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row md:justify-between text-xs text-warm-gray gap-3">
        <span>© {year} {SITE.name}. Alle Rechte vorbehalten.</span>
        <div className="flex gap-5">
          <Link href="/impressum" className="hover:text-gold-soft">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-gold-soft">Datenschutz</Link>
          <Link href="/ueber-uns" className="hover:text-gold-soft">Über uns</Link>
          <Link href="/karriere" className="hover:text-gold-soft">Karriere</Link>
        </div>
      </div>
    </footer>
  );
}
```

Hinweis: Alle Footer-Links auf `/impressum`, `/datenschutz`, `/ueber-uns`, `/karriere`, `/leistungen/...`, `/pflege-in-...` führen in Etappe 1 zu 404. Das fängt `app/not-found.tsx` (Task 16) ab. Etappe 3 baut Impressum/Datenschutz/Über-uns/Karriere, Etappe 4 die Leistungs-Seiten, Etappe 5 die Bezirke.

- [ ] **Step 8.2: `app/layout.tsx` mit Footer + metadataBase + Title-Template**

Komplette neue Version:

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { A11yBar } from '@/components/A11yBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { a11yInitScript } from '@/lib/a11y-init';
import { SITE } from '@/lib/site-config';

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – Private Pflege & Beratung in Berlin`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
      </head>
      <body className="bg-cream text-anthracite font-sans antialiased">
        <A11yBar />
        <Nav />
        <main className="pt-[122px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 8.3: TypeCheck**

```bash
npx tsc --noEmit
```

- [ ] **Step 8.4: Dev-Test**

```bash
npm run dev
```

`http://localhost:3000`:
- A11y-Bar + Nav wie vorher
- Starter-Inhalt mittig
- **Footer ganz unten:** Wappen + „Heilpraxis Frommholz", Adresse Stephanstr. 46, Telefon, E-Mail, Öffnungszeiten, 6 Leistungen-Links, 12 Bezirke (Mitte mit „· Hauptstandort"), Bottom-Zeile mit Copyright + 4 Legal-Links
- Klick auf Bezirks-Link → 404-Seite (noch keine `not-found.tsx`, also Next.js-Default-404)

Stoppen.

- [ ] **Step 8.5: Commit**

```bash
git add components/Footer.tsx app/layout.tsx
git commit -m "$(cat <<'EOF'
Add Footer + finalize layout (metadata template, OG defaults)

Footer (server): brand + address/phone/email/hours block, 6
Leistungen list, 12 Bezirke grid (Mitte flagged "Hauptstandort"),
bottom legal links (Impressum / Datenschutz / Über uns / Karriere).
All target routes return 404 in Etappe 1 — Etappen 3-5 fill them.

Layout: metadataBase + title template + OG defaults wired up.
Chrome stack now complete (A11yBar + Nav + main + Footer).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Footer unten sichtbar mit Adresse, 6 Leistungen, 12 Bezirken (Mitte als Hauptstandort gekennzeichnet), Legal-Links.

---

## Task 9: Startseite — Hero

**Files:** `components/Hero.tsx` (neu), `app/page.tsx` (ersetzen).

- [ ] **Step 9.1: `components/Hero.tsx`**

```tsx
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center px-6 md:px-12 py-20 lg:py-28 min-h-[80vh]">
      <div>
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">
            Pflege & Beratung in ganz Berlin
          </span>
        </Reveal>
        <Reveal delay={1} as="h1">
          <span className="block font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-light text-anthracite mt-5">
            Pflege, die <em className="text-gold-deep not-italic font-medium">zuhört.</em>
            <br />
            Beratung, die trägt.
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 font-serif text-[clamp(1.15rem,1.8vw,1.45rem)] leading-relaxed text-anthracite-light italic">
            Wir sind nah am Menschen — mit Erfahrung aus über zwei Jahrzehnten Pflege, Beratung und Begleitung in Berlin.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft max-w-xl">
            Stundenweise Alltagsbegleitung, 24-Stunden-Schichtbetreuung, Pflege- und Inklusionsberatung: Wir bringen Ruhe und Fachlichkeit dorthin, wo Menschen sie brauchen — zu Hause, im vertrauten Umfeld, bei Ihnen.
          </p>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#kontakt" className="bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors">
              Erstgespräch anfragen
            </a>
            <a href="#leistungen" className="border border-anthracite text-anthracite px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors">
              Unsere Leistungen
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={2} className="relative">
        <div className="aspect-[4/5] bg-cream-deep border border-gold/30 relative overflow-hidden">
          <div className="absolute inset-4 border border-gold/40 flex items-center justify-center text-center p-8">
            <p className="font-sans text-sm text-warm-gray italic leading-relaxed">
              Hier kommt später ein echtes Foto<br />
              — Begegnung, Wärme, Berliner Lichtsituation —<br />
              <span className="text-xs text-warm-gray-light">Platzhalter</span>
            </p>
          </div>
        </div>
        <div className="mt-6 pl-6 border-l-2 border-gold">
          <p className="font-serif text-lg italic text-anthracite-light leading-relaxed">
            Wir sehen den Menschen. Nicht den Pflegegrad.
          </p>
          <span className="block mt-2 font-sans text-[11px] uppercase tracking-[2px] text-gold-deep">
            — Unser Versprechen
          </span>
        </div>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 9.2: `app/page.tsx` ersetzen**

```tsx
import { Hero } from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
```

- [ ] **Step 9.3: TypeCheck + Dev-Test**

```bash
npx tsc --noEmit
npm run dev
```

`http://localhost:3000`:
- Hero-Sektion zwischen Nav und Footer
- Linke Spalte: Eyebrow, große H1 mit „zuhört." im Gold-Akzent, italic Lead-Satz, Body-Text, zwei CTAs
- Rechte Spalte: Foto-Platzhalter im Goldrahmen, Pull-Quote „Wir sehen den Menschen…"
- Mobile (≤ 768px): Single Column

Stoppen.

- [ ] **Step 9.4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add Hero section to homepage

Hero: split layout (lg:1.1fr/0.9fr). Left column = eyebrow + H1
("Pflege, die zuhört.") + italic lead + body copy + two CTAs.
Right column = framed photo placeholder + pull-quote. Anchor
targets #kontakt and #leistungen (sections not added yet, will
work after Tasks 10-15).

page.tsx replaces Next.js starter with <Hero />.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Hero mit Senfgold-Akzent in der Headline, Foto-Platzhalter rechts, zwei CTAs.

---

## Task 10: Startseite — TrustStrip

**Files:** `components/TrustStrip.tsx` (neu), `app/page.tsx` (modifizieren).

- [ ] **Step 10.1: `components/TrustStrip.tsx`**

```tsx
const ITEMS = [
  { num: '20+', label: 'Jahre Pflegeerfahrung' },
  { num: '24/7', label: 'Verlässlich erreichbar' },
  { num: '§ 3b', label: 'Korrekte Abrechnung' },
  { num: 'Berlin', label: '& Umland' },
];

export function TrustStrip() {
  return (
    <section className="bg-cream-deep border-y border-gold/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 px-6 md:px-12 py-12 max-w-6xl mx-auto">
        {ITEMS.map((item) => (
          <div key={item.label} className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-gold-deep">{item.num}</div>
            <div className="mt-2 font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 10.2: `app/page.tsx` erweitern**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
    </>
  );
}
```

- [ ] **Step 10.3: TypeCheck + Dev-Test**

```bash
npx tsc --noEmit
npm run dev
```

Unter dem Hero: 4 zentrierte Zahlen-Felder auf cremig-tieferem Hintergrund. Stoppen.

- [ ] **Step 10.4: Commit**

```bash
git add components/TrustStrip.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add TrustStrip under hero

Four trust builders (20+ years / 24/7 / § 3b / Berlin) on cream-deep
band with gold-deep numerals. 4-col on md+, 2-col on mobile.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** 4-Spalten Trust-Strip unter dem Hero.

---

## Task 11: Startseite — LeistungenGrid (+ LeistungCard)

**Files:** `components/LeistungCard.tsx` (neu), `components/LeistungenGrid.tsx` (neu), `app/page.tsx` (modifizieren).

- [ ] **Step 11.1: `components/LeistungCard.tsx`**

```tsx
import Link from 'next/link';
import { type Leistung, hasDetailPage } from '@/lib/leistungen';
import { LeistungIcon } from './LeistungIcon';

export function LeistungCard({ leistung }: { leistung: Leistung }) {
  const showLink = hasDetailPage(leistung);

  return (
    <article className="relative p-8 bg-cream border border-gold/20 hover:border-gold/60 transition-colors">
      <span className="absolute top-6 right-6 font-serif text-2xl text-gold/50">{leistung.numeral}</span>
      <div className="text-gold-deep w-14 h-14">
        <LeistungIcon iconKey={leistung.iconKey} className="w-full h-full" />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-medium text-anthracite">{leistung.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{leistung.card.lead}</p>
      {showLink && (
        <Link
          href={`/leistungen/${leistung.slug}`}
          className="inline-block mt-5 font-sans text-[12px] uppercase tracking-[1.5px] text-gold-deep border-b border-gold-deep/30 hover:border-gold-deep pb-1"
        >
          Mehr erfahren
        </Link>
      )}
    </article>
  );
}
```

- [ ] **Step 11.2: `components/LeistungenGrid.tsx`**

```tsx
import { LEISTUNGEN } from '@/lib/leistungen';
import { LeistungCard } from './LeistungCard';
import { Reveal } from './Reveal';

export function LeistungenGrid() {
  return (
    <section id="leistungen" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Unser Angebot</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            Sechs Wege, <em className="text-gold-deep not-italic font-medium">nah zu sein.</em>
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
            Wir betreuen Privatkundinnen und -kunden in ihrer eigenen Häuslichkeit. Manche brauchen nur ein paar Stunden in der Woche, andere eine durchgehende Begleitung — und manche zunächst nur ein gutes Gespräch.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEISTUNGEN.map((l, i) => (
          <Reveal key={l.slug} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
            <LeistungCard leistung={l} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 11.3: `app/page.tsx` erweitern**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
    </>
  );
}
```

- [ ] **Step 11.4: TypeCheck + Dev-Test**

```bash
npx tsc --noEmit
npm run dev
```

Unter Trust-Strip: Sektion mit Eyebrow „Unser Angebot", H2 „Sechs Wege, nah zu sein.", Lead-Absatz. Dann 3×2-Grid (md+) mit 6 Karten — Römische Ziffer rechts oben, Icon, Titel, Lead-Text. **Keine „Mehr erfahren"-Links** (weil `hasDetailPage()` false ist). Anker `#leistungen` funktioniert über Nav-Link.

Stoppen.

- [ ] **Step 11.5: Commit**

```bash
git add components/LeistungCard.tsx components/LeistungenGrid.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add LeistungenGrid (+ LeistungCard) to homepage

LeistungCard: server component, renders 1 of 6 service cards with
numeral, icon, title, lead. "Mehr erfahren" link only renders when
hasDetailPage() returns true — false until Etappe 4 fills detail.

LeistungenGrid: centered section intro + 3-col (lg) / 2-col (md) /
1-col (mobile) grid of 6 cards. Anchor #leistungen wired up.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** 6 Leistungs-Karten in 3-Spalten-Grid, Nav-Link „Leistungen" springt zum Anker.

---

## Task 12: Startseite — HaltungSection

**Files:** `components/HaltungSection.tsx` (neu), `app/page.tsx` (modifizieren).

- [ ] **Step 12.1: `components/HaltungSection.tsx`**

```tsx
import Link from 'next/link';
import { Reveal } from './Reveal';

export function HaltungSection() {
  return (
    <section id="haltung" className="bg-anthracite text-cream py-24 px-6 md:px-12 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
        <div>
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold">Unsere Haltung</span>
          </Reveal>
          <Reveal delay={1} as="h2">
            <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light">
              Pflege ist auch <em className="text-gold not-italic font-medium">eine soziale Aufgabe.</em>
            </span>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-[15px] leading-relaxed text-cream/85">
              Aus der <strong className="text-cream">gemeinnützigen Krankenpflege Frommholz</strong> bringen wir eine Überzeugung mit: Gute Pflege ist nicht nur eine Frage von Fachlichkeit. Sie ist auch eine Frage, wem wir eine Chance geben — als Klient und als Mitarbeiter.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/85">
              Deshalb arbeiten bei uns Menschen, denen das Regelsystem den Wiedereinstieg schwer gemacht hat: Langzeitarbeitslose, Quereinsteigerinnen, FSJler. Wir bilden sie aus, begleiten sie — und merken jeden Tag, wie viel Wärme und Lebenserfahrung sie in die Pflege bringen.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <Link
              href="/soziales-engagement"
              className="inline-block mt-7 font-sans text-[12px] uppercase tracking-[1.5px] text-gold border-b border-gold/30 hover:border-gold pb-1"
            >
              Soziales Engagement →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="bg-anthracite-light border border-gold/30 p-10 text-center">
            <div className="font-serif text-7xl text-gold">7</div>
            <div className="mt-3 font-sans text-[11px] uppercase tracking-[2px] text-cream/80">
              Mitarbeitende aus dem zweiten Arbeitsmarkt
            </div>
            <p className="mt-6 font-serif text-base italic text-cream/85 leading-relaxed">
              „Hier wurde ich nicht als Fall gesehen, sondern als jemand, der etwas beitragen kann."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 12.2: `app/page.tsx` erweitern**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { HaltungSection } from '@/components/HaltungSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <HaltungSection />
    </>
  );
}
```

- [ ] **Step 12.3: TypeCheck + Dev-Test**

```bash
npx tsc --noEmit
npm run dev
```

Unter Leistungen-Grid: dunkler Anthrazit-Streifen mit linker Spalte (Text + „Soziales Engagement →"-Link) und rechter Stat-Card („7 Mitarbeitende aus dem zweiten Arbeitsmarkt" + Zitat). Nav-Link „Unsere Haltung" springt hierher. Stoppen.

- [ ] **Step 12.4: Commit**

```bash
git add components/HaltungSection.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add HaltungSection (dark social-employment band)

Dark anthracite band with social-employment statement: gemeinnützige
Krankenpflege Frommholz, Langzeitarbeitslose / Quereinsteigerinnen /
FSJler. Right-side stat card (7 Mitarbeitende + quote). Link to
/soziales-engagement (route added in Etappe 3).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** dunkle Haltungs-Sektion mit Stat-Card, Anker `#haltung` funktioniert.

---

## Task 13: Startseite — Testimonials (mit Sicherheitsschalter)

**Files:** `components/TestimonialCard.tsx` (neu), `components/Testimonials.tsx` (neu), `app/page.tsx` (modifizieren).

- [ ] **Step 13.1: `components/TestimonialCard.tsx`**

```tsx
export type TestimonialData = {
  quote: string;
  initial: string;
  name: string;
  location: string;
};

export function TestimonialCard({ t }: { t: TestimonialData }) {
  return (
    <article className="bg-cream border border-gold/20 p-8">
      <p className="font-serif text-lg leading-relaxed italic text-anthracite-light">„{t.quote}"</p>
      <div className="mt-6 flex items-center gap-4 border-t border-gold/20 pt-5">
        <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center font-serif text-xl text-gold-deep">
          {t.initial}
        </div>
        <div>
          <div className="font-sans text-sm font-medium text-anthracite">{t.name}</div>
          <div className="font-sans text-xs text-warm-gray">{t.location}</div>
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 13.2: `components/Testimonials.tsx`**

```tsx
import { SHOW_TESTIMONIALS } from '@/lib/site-config';
import { TestimonialCard, type TestimonialData } from './TestimonialCard';
import { Reveal } from './Reveal';

// PLACEHOLDER — UWG § 5: nie live ohne echte, freigegebene Zitate.
// SHOW_TESTIMONIALS=false hält diesen Block aus dem Output.
const PLACEHOLDER_TESTIMONIALS: TestimonialData[] = [
  {
    quote: 'Nach dem Schlaganfall meiner Mutter wussten wir nicht weiter. Frau Frommholz hat sich Zeit genommen, hat zugehört und einen Plan gemacht, der wirklich zu uns passt — nicht zu einem Standard-Pflegegrad-Schema. Heute haben wir ein festes, kleines Team, das meine Mutter beim Namen kennt. Das gibt uns Ruhe.',
    initial: 'K',
    name: 'Familie K.',
    location: 'Pankow · seit 2025',
  },
  {
    quote: 'Ich hatte lange Angst, fremde Menschen in meine Wohnung zu lassen. Hier kommt nicht jeden Tag jemand anderes, sondern immer dieselben zwei, drei Gesichter. Das ist viel wert. Und mir wurde nie das Gefühl gegeben, dass ich nur ein Auftrag bin.',
    initial: 'H',
    name: 'Frau H., 78 Jahre',
    location: 'Steglitz · seit 2024',
  },
];

export function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <section id="testimonials" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Stimmen</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            Was Menschen über uns <em className="text-gold-deep not-italic font-medium">sagen.</em>
          </span>
        </Reveal>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PLACEHOLDER_TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 13.3: `app/page.tsx` erweitern**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { HaltungSection } from '@/components/HaltungSection';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <HaltungSection />
      <Testimonials />
    </>
  );
}
```

- [ ] **Step 13.4: TypeCheck + Dev-Test mit Gate-Verifikation**

```bash
npx tsc --noEmit
npm run dev
```

`http://localhost:3000`: **Zwischen HaltungSection und (späterer) AblaufSection ist nichts zu sehen.** Korrekt — `SHOW_TESTIMONIALS=false` blockt die ganze Sektion. DevTools-DOM-Inspect zeigt keinen `<section id="testimonials">`.

**Gate-Test (optional):** Temporär `SHOW_TESTIMONIALS = true` in `lib/site-config.ts` setzen, Dev-Server neu laden → Sektion „Was Menschen über uns sagen." mit 2 Karten erscheint. **Zurückstellen auf `false`**, nicht committen.

Stoppen.

- [ ] **Step 13.5: Commit**

```bash
git add components/TestimonialCard.tsx components/Testimonials.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add Testimonials section behind SHOW_TESTIMONIALS gate

Testimonials: returns null when SHOW_TESTIMONIALS=false (UWG § 5
protection). Two placeholder TestimonialData entries (Familie K.
Pankow, Frau H. Steglitz) kept inline as design anchors, behind
the gate. To activate before go-live: replace with real, signed-off
client quotes AND set SHOW_TESTIMONIALS=true in site-config.ts.

TestimonialCard: card with italic quote, avatar circle (initial),
name + location.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Keine Testimonials-Sektion sichtbar (gewollt, Gate ist zu). Test mit temporärem `true`-Toggle bestätigt, dass die Sektion gebaut ist.

---

## Task 14: Startseite — AblaufSection

**Files:** `components/AblaufSection.tsx` (neu), `app/page.tsx` (modifizieren).

- [ ] **Step 14.1: `components/AblaufSection.tsx`**

```tsx
import { Reveal } from './Reveal';

const STEPS = [
  {
    num: 'i',
    title: 'Kennenlernen',
    text: 'Ein erstes Gespräch — telefonisch oder bei Ihnen zu Hause. Wir hören zu und klären, was wirklich gebraucht wird.',
  },
  {
    num: 'ii',
    title: 'Planung',
    text: 'Gemeinsam mit Ihnen erstellen wir ein passgenaues Pflege- und Begleitkonzept — flexibel, jederzeit anpassbar.',
  },
  {
    num: 'iii',
    title: 'Begleitung',
    text: 'Ein kleines, festes Team begleitet Sie. Mit regelmäßigem Austausch und einer Person, die immer ansprechbar ist.',
  },
];

export function AblaufSection() {
  return (
    <section id="ablauf" className="bg-cream-deep py-24 px-6 md:px-12 scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">So läuft es ab</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            Drei Schritte, <em className="text-gold-deep not-italic font-medium">keine Eile.</em>
          </span>
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {STEPS.map((s, i) => (
          <Reveal key={s.num} delay={((i + 1) as 1 | 2 | 3)}>
            <div className="text-center">
              <div className="font-serif text-5xl text-gold-deep italic">{s.num}</div>
              <h3 className="mt-4 font-serif text-2xl font-medium text-anthracite">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 14.2: `app/page.tsx` erweitern**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { HaltungSection } from '@/components/HaltungSection';
import { Testimonials } from '@/components/Testimonials';
import { AblaufSection } from '@/components/AblaufSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <HaltungSection />
      <Testimonials />
      <AblaufSection />
    </>
  );
}
```

- [ ] **Step 14.3: TypeCheck + Dev-Test**

```bash
npx tsc --noEmit
npm run dev
```

Unter Haltungs-Sektion: cremig-tieferer Hintergrund, Eyebrow „So läuft es ab", H2 „Drei Schritte, keine Eile.", 3 Spalten mit i/ii/iii in italic Gold + Schritt-Titel + Beschreibung. Nav-Link „So läuft es" funktioniert. Stoppen.

- [ ] **Step 14.4: Commit**

```bash
git add components/AblaufSection.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add AblaufSection (3-step process)

Three steps (Kennenlernen / Planung / Begleitung) with italic
lowercase-roman numerals. Centered, cream-deep background.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Ablauf-Sektion mit 3 Schritten, Nav-Link springt korrekt.

---

## Task 15: Startseite — KontaktSection

**Files:** `components/KontaktSection.tsx` (neu), `app/page.tsx` (modifizieren).

- [ ] **Step 15.1: `components/KontaktSection.tsx`**

```tsx
'use client';

import { useState } from 'react';
import { BUSINESS } from '@/lib/site-config';
import { Reveal } from './Reveal';

export function KontaktSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="kontakt" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Kontakt aufnehmen</span>
          </Reveal>
          <Reveal delay={1} as="h2">
            <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
              Beginnen wir mit einem <em className="text-gold-deep not-italic font-medium">Gespräch.</em>
            </span>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
              Sie überlegen, ob unsere Begleitung passt? Wir nehmen uns Zeit für ein erstes, unverbindliches Gespräch — am Telefon, per E-Mail oder direkt bei Ihnen.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 space-y-3">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 text-anthracite hover:text-gold-deep">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-base">{BUSINESS.phoneDisplay}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-anthracite hover:text-gold-deep">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-base">{BUSINESS.email}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <form onSubmit={onSubmit} className="bg-cream-deep border border-gold/20 p-8 space-y-5">
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Name</label>
              <input type="text" required placeholder="Ihr Name" className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep" />
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Telefon oder E-Mail</label>
              <input type="text" required placeholder="Wie dürfen wir Sie erreichen?" className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep" />
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Worum geht es?</label>
              <select className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep">
                <option>Erstgespräch zur Pflege</option>
                <option>Pflegeberatung</option>
                <option>Inklusionsberatung</option>
                <option>Reisebegleitung</option>
                <option>Etwas anderes</option>
              </select>
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light mb-2">Ihre Nachricht (optional)</label>
              <textarea rows={4} placeholder="Erzählen Sie uns kurz, was Sie umtreibt…" className="w-full px-4 py-3 bg-cream border border-gold/20 font-sans text-sm focus:outline-none focus:border-gold-deep" />
            </div>
            <button type="submit" disabled={sent} className="w-full bg-anthracite text-cream py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors disabled:opacity-60">
              {sent ? 'Nachricht erhalten — danke!' : 'Nachricht senden'}
            </button>
            <p className="text-[11px] text-warm-gray italic">
              Hinweis: Versand ist in dieser Vorschauversion noch nicht angeschlossen. Bitte nutzen Sie Telefon oder E-Mail.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 15.2: `app/page.tsx` erweitern**

```tsx
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { HaltungSection } from '@/components/HaltungSection';
import { Testimonials } from '@/components/Testimonials';
import { AblaufSection } from '@/components/AblaufSection';
import { KontaktSection } from '@/components/KontaktSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <HaltungSection />
      <Testimonials />
      <AblaufSection />
      <KontaktSection />
    </>
  );
}
```

- [ ] **Step 15.3: TypeCheck + Dev-Test**

```bash
npx tsc --noEmit
npm run dev
```

Unter Ablauf: Kontakt-Sektion mit linker Spalte (Eyebrow + H2 + Lead + Telefon/E-Mail-Direkt-Links) und rechtem Formular (Name, Telefon/E-Mail, Anliegen-Select mit 5 Optionen, Nachricht, Senden-Button). Klick „Nachricht senden" → Button-Text wechselt auf „Nachricht erhalten — danke!", reset nach 5s. Nav-Link „Kontakt" springt zum Anker, Hero-CTA „Erstgespräch anfragen" auch. Stoppen.

- [ ] **Step 15.4: Commit**

```bash
git add components/KontaktSection.tsx app/page.tsx
git commit -m "$(cat <<'EOF'
Add KontaktSection (stub form)

Split layout: left = eyebrow + H2 + lead + direct phone/email links.
Right = client form with 4 fields (Name, Tel/E-Mail, Anliegen select,
Nachricht). onSubmit calls preventDefault and toggles in-button
success state (resets after 5s). Inline note clarifies the form
does not actually send yet — direct phone/email is the active path.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Browser-Check für Eric:** Kontakt-Sektion mit Formular-UI, „Senden" zeigt Erfolg-Feedback. Alle Nav-Anchors (Leistungen / Haltung / Ablauf / Kontakt) springen jetzt korrekt.

---

## Task 16: not-found-Seite + Production-Smoke-Test

**Files:** `app/not-found.tsx` (neu).

- [ ] **Step 16.1: `app/not-found.tsx`**

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="px-6 md:px-12 py-24 text-center max-w-2xl mx-auto">
      <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">404</span>
      <h1 className="mt-4 font-serif text-4xl font-light text-anthracite">Diese Seite ist noch nicht da.</h1>
      <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
        Wir bauen die Heilpraxis-Frommholz-Website gerade auf. Einige Seiten existieren noch nicht — sie kommen in den nächsten Etappen.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
      >
        Zur Startseite
      </Link>
    </section>
  );
}
```

- [ ] **Step 16.2: Production-Build**

```bash
npm run build
```

Erwartet: erfolgreich, ohne TS-Fehler, ohne Tailwind-Warnings.

- [ ] **Step 16.3: Production-Server + voller Smoke-Test**

```bash
npm run start
```

`http://localhost:3000` durchklicken:

**Visuelle Checks:**
- A11y-Bar schwarz oben mit Telefon-Link + 4 Buttons
- Nav mit Wappen + Schriftzug + 3 Anchor-Links + Kontakt-CTA
- Hero, TrustStrip, LeistungenGrid (6 Karten), HaltungSection (dunkel), AblaufSection (cremig), KontaktSection (Formular)
- Footer: Adresse Stephanstr. 46, Telefon, E-Mail, 6 Leistungen, 12 Bezirke (Mitte „· Hauptstandort"), Legal-Links
- Fonts: Cormorant Garamond für Headings, Manrope für Body
- Senfgold-Akzente sichtbar

**Funktionale Checks:**
- A11y-Bar: A+/A++/A → Schriftgröße bleibt nach Reload
- A11y-Bar: Kontrast → Hochkontrast-Modus bleibt nach Reload
- Nav-Anchors: Leistungen → `#leistungen`, Haltung → `#haltung`, Ablauf → `#ablauf`, Kontakt → `#kontakt`
- Hero-CTAs: „Erstgespräch anfragen" → `#kontakt`, „Unsere Leistungen" → `#leistungen`
- Telefon-Links (A11y-Bar / Footer / Kontakt) öffnen `tel:+4915114140251`
- E-Mail-Links (Footer / Kontakt) öffnen `mailto:simeon@heilpraxis-frommholz.de`
- Kontakt-Formular: Senden → Erfolgs-State, reset nach 5s
- DevTools-Responsive ≤ 768px: Single-Column-Layout, Hamburger-Menü
- Reveal-Animationen: beim Scrollen fadet jeder Block sanft ein

**Testimonials-Sicherheit:**
- Auf Startseite **nicht sichtbar** — Sektion existiert im Code, aber `SHOW_TESTIMONIALS=false` blockt sie
- Test (optional): temporär `lib/site-config.ts` SHOW_TESTIMONIALS=true setzen, Dev-Server neu, Sektion erscheint, **zurückstellen auf false**, nicht committen

**404-Checks:**
- `http://localhost:3000/leistungen/24h-betreuung` → custom 404-Seite mit „Diese Seite ist noch nicht da." und Link zurück
- `http://localhost:3000/pflege-in-pankow` → 404
- `http://localhost:3000/impressum` → 404
- `http://localhost:3000/karriere` → 404
- `http://localhost:3000/` → Startseite (kein 404)

Stoppen mit `Ctrl+C`.

- [ ] **Step 16.4: Geo-Verifikation der Praxis-Adresse**

Per Google-Maps die Geokoordinaten von „Stephanstr. 46, 10559 Berlin" prüfen. Falls sie deutlich vom Default `{ lat: 52.5302, lng: 13.3438 }` abweichen (> 0.001°): in `lib/site-config.ts` korrigieren und separaten Commit machen. Falls innerhalb der Toleranz: nicht ändern.

Falls Änderung nötig:

```bash
git add lib/site-config.ts
git commit -m "$(cat <<'EOF'
Correct BUSINESS.geo coordinates from Google Maps verification

Stephanstr. 46, 10559 Berlin: lat=<actual>, lng=<actual>.
Previous estimate (52.5302, 13.3438) was off by <X> meters.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 16.5: Final-Commit**

```bash
git add app/not-found.tsx
git commit -m "$(cat <<'EOF'
Add custom 404 page + end-of-Etappe-1 milestone

not-found.tsx: friendly 404 explaining the site is under
construction (Footer + LeistungCard links to /impressum,
/datenschutz, /ueber-uns, /karriere, /leistungen/<slug>,
/pflege-in-<slug> all 404 until Etappen 3-5 add them).

End of Etappe 1: full homepage works in npm run dev and
npm run start. No push, no Vercel — those are Etappe 2.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 16.6: Git-Log inspizieren**

```bash
git log --oneline
```

Erwartet: ~17 Commits auf `main` (Initial + Spec + 15 Etappe-1-Commits, evtl. + Geo-Korrektur). Branch ist `git status` zufolge N Commits vor `origin/main`. Push erfolgt **nicht** in Etappe 1.

**Browser-Check für Eric:** 404-Seite testen, voller Production-Smoke-Test absolviert. Etappe 1 ist abnahmebereit.

---

## Self-Review

**Spec-Coverage:**

| Spec-Sektion | Plan-Task(s) |
|---|---|
| § 3 Stack (Next.js 16, Tailwind v4) | Task 1, 2 |
| § 4 Ordnerstruktur (Etappe-1-Anteil) | Tasks 4–16 |
| § 5 Daten-Layer (site-config, leistungen, bezirke, a11y-init) | Task 4 |
| § 6 Server vs. Client (Reveal/A11yBar/Nav/Kontakt sind Client) | Tasks 5, 6, 7, 15 |
| § 7 A11y-Mechanismus (Inline-Script + A11yBar + globals.css) | Task 2.2 (CSS), 4.2 (Script), 6 (Bar + Wiring) |
| § 8 SEO Metadata Default | Task 8.2 |
| § 8 schema.org `<LocalBusinessSchema>` | **NICHT in Etappe 1** — Etappe 5 ✓ |
| § 9 Testimonials-Sicherheitsschalter | Task 4.1 (Flag), Task 13 (Gate-Implementierung) |
| § 10 Etappe 1 Abnahme-Kriterium | Task 16.3 (voller Smoke-Test) |
| § 11 Geo-Verifikation TODO | Task 16.4 |

**Etappe-1-Reinheit:**
- Vercel-Push: nicht im Plan ✓ (Etappe 2)
- Sitemap/Robots: nicht im Plan ✓ (Etappe 2)
- Schema.org-Component: nicht im Plan ✓ (Etappe 5)
- Sub-Seiten (`/soziales-engagement` etc.): nicht im Plan ✓ (Etappe 3)
- Leistungs-Detailseiten: nicht im Plan, nur leere `detail`-Felder als Stub ✓ (Etappe 4)
- Bezirks-Landingpages: nicht im Plan, nur Footer-Links ✓ (Etappe 5)
- DNS / Domain: nicht im Plan ✓ (Etappe 6)
- Impressum/Datenschutz: nur als Footer-Link, Seiten 404 bis Etappe 3

**Task-Atomarität:** Jeder Task (außer 1 und 4, die hauptsächlich Setup-/Daten-Tipp-Arbeit sind) endet mit:
1. TypeCheck
2. `npm run dev`
3. Eine konkrete Veränderung im Browser, die Eric sieht
4. Commit

Geschätzte Task-Dauer: 10–25 Min pro Task. Längster Task: 15 (KontaktSection) ~25 Min wegen Formular-Markup.

**Placeholder-Scan:** Alle Code-Blöcke enthalten echten Inhalt. Bewusste Stubs:
- `emptyDetail` in `lib/leistungen.ts` (Etappe 4 füllt)
- `emptyHero`/`emptyMeta` in `lib/bezirke.ts` (Etappe 5 füllt)
- `PHONE_TBD` — nicht vorhanden, echte Nummer (`+4915114140251`) ist im Code
- `ADDRESS_TBD` — nicht vorhanden, echte Adresse ist im Code

**Type-Konsistenz:**
- `IconKey` (Task 4.3) konsumiert in `LeistungIcon.tsx` (Task 5.2) ✓
- `Leistung` (Task 4.3) konsumiert in `LeistungCard.tsx` (Task 11.1) und `Footer.tsx` (Task 8.1) ✓
- `Bezirk` (Task 4.4) konsumiert in `Footer.tsx` (Task 8.1) ✓
- `BUSINESS`/`SITE` (Task 4.1) konsistent in `A11yBar`, `Nav`, `Footer`, `KontaktSection`, `app/layout.tsx` ✓
- `Reveal`-Delay-Typ `1|2|3|4|5|6` ✓ (mit `as` cast bei dynamischer Berechnung)
- `hasDetailPage(leistung)` (Task 4.3) → `LeistungCard.tsx` (Task 11.1) ✓

**Bekannte 404s bei Etappe-1-Ende** (akzeptiert, durch `not-found.tsx` abgefangen):
- `/leistungen/<slug>` (alle 6) — Etappe 4
- `/pflege-in-<slug>` (alle 12) — Etappe 5
- `/soziales-engagement`, `/ueber-uns`, `/karriere`, `/kontakt` — Etappe 3
- `/impressum`, `/datenschutz` — Etappe 3 (rechtlich Pflicht vor Go-Live)
