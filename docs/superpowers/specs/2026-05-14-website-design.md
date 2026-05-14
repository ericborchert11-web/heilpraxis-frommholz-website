# Heilpraxis Frommholz – Marketing-Website Design

**Datum:** 2026-05-14
**Status:** Entwurf, zur Review
**Ziel-Repo:** `ericborchert11-web/heilpraxis-frommholz-website`

---

## 1. Ziel

Marketing-Website für die Heilpraxis Frommholz — private Pflege, Alltagsbegleitung
und Beratung in Berlin. Statische Site auf Vercel, alle Inhalte als TypeScript-
Konfiguration, kein CMS, kein Backend, kein Tracking.

Zielgruppe: Privatkund\*innen in Berlin und Umland, die hochwertige private
Begleitung suchen (Selbstzahler oder mit Pflegegrad).

## 2. Nicht-Ziele

- Keine echten Klienten-Testimonials zum Launch (UWG § 5: erfundene Testimonials
  sind in DE abmahnfähig). Sektion ist gebaut, hardcoded ausgeschaltet.
- Keine echten Fotos zum Launch (Foto-Shooting folgt). Mockup-Platzhalter.
- Kein Versand-Backend für Kontaktformular (UI-Stub mit Toast).
- Kein Cookie-Banner, kein Tracking, keine Analytics (kommt mit DSGVO-Check
  später, wenn überhaupt).
- Keine Mehrsprachigkeit. Deutsch-only.
- Keine Datenbank, keine Auth, kein CMS.

## 3. Stack

| Bereich | Wahl |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript strict) |
| Styling | Tailwind CSS 4, Theme erweitert um Senfgold/Anthrazit/Crème + Fonts |
| Fonts | `next/font/google`: Cormorant Garamond (Display), Manrope (Body) |
| Hosting | Vercel (Preview: `heilpraxis-frommholz.vercel.app`, Production: `heilpraxis-frommholz.de` via Ionos-DNS in Etappe 6) |
| Datenhaltung | Pure TypeScript-Module unter `lib/` |
| Komponenten | React Server Components als Default, Client nur wo nötig (`A11yBar`, `Nav`, `Reveal`) |
| State-Management | useState + localStorage (für A11y), sonst keiner |
| UI-Libraries | Keine. Tailwind + custom SVG, keine Radix, kein Shadcn |

## 4. Ordnerstruktur

```
heilpraxis-frommholz-website/
├── app/
│   ├── layout.tsx                  # Fonts, A11y-Inline-Script, <A11yBar>, <Nav>, <Footer>
│   ├── page.tsx                    # Startseite — Mockup komponentiert
│   ├── globals.css                 # Reset, Reveal, A11y-Overrides
│   ├── sitemap.ts                  # statisch + LEISTUNGEN + BEZIRKE
│   ├── robots.ts
│   ├── leistungen/[slug]/page.tsx  # 6 Detail-Seiten (Etappe 4)
│   ├── pflege-in-[bezirk]/page.tsx # 12 Bezirks-Seiten (Etappe 5)
│   ├── soziales-engagement/page.tsx
│   ├── kontakt/page.tsx            # Etappe 3, nur UI
│   ├── ueber-uns/page.tsx          # inkl. integrierter Teamfotos-Platzhalter
│   └── karriere/page.tsx
├── components/
│   ├── A11yBar.tsx                 # Client (localStorage + Klassen-Toggle)
│   ├── Nav.tsx                     # Client (Scroll-State + Mobile-Hamburger)
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── LeistungenGrid.tsx
│   ├── LeistungCard.tsx
│   ├── HaltungSection.tsx
│   ├── Testimonials.tsx            # Early-return wenn !SHOW_TESTIMONIALS
│   ├── TestimonialCard.tsx
│   ├── AblaufSection.tsx
│   ├── KontaktSection.tsx          # Stub-Formular
│   ├── Reveal.tsx                  # IntersectionObserver-Wrapper (Client)
│   ├── LeistungIcon.tsx            # SVG-Map für die 6 Leistungs-Icons
│   └── LocalBusinessSchema.tsx     # JSON-LD für Bezirks-Seiten
├── lib/
│   ├── site-config.ts              # SITE, BUSINESS, SHOW_TESTIMONIALS
│   ├── leistungen.ts               # 6 Leistungen, strukturiert
│   ├── bezirke.ts                  # 12 Bezirke (trivial austauschbar)
│   └── a11y-init.ts                # Inline-Script-String für <head>
├── public/
│   └── logo.png                    # einmalig aus mockup.html extrahiert
├── docs/superpowers/specs/
│   └── 2026-05-14-website-design.md
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── mockup.html                     # bleibt im Repo als visuelle Referenz, von Build ignoriert
```

**Bewusst nicht im Plan:**
- `app/team/` → konsolidiert in `app/ueber-uns/`
- `app/leichte-sprache/` → wird gebaut, wenn echte Leichte-Sprache-Texte vorliegen
- `app/blog/` → kommt später, wenn überhaupt

## 5. Daten-Layer (`lib/`)

### `lib/site-config.ts`

```ts
export const SITE = {
  name: 'Heilpraxis Frommholz',
  tagline: 'Pflege · Beratung · Begleitung',
  description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland.',
  url: 'https://heilpraxis-frommholz.de',  // Final-Domain (Etappe 6)
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
  geo: { lat: 52.5302, lng: 13.3438 },        // 10559 Moabit — in Etappe 1 mit Google-Geocode verifizieren
  phone: '+4915114140251',                    // tel:-Link, E.164
  phoneDisplay: '0151 14140251',              // sichtbarer Text
  email: 'simeon@heilpraxis-frommholz.de',
  hours: {
    weekdays: { opens: '08:00', closes: '16:30' },
    label: 'Mo–Fr 08:00–16:30',
  },
} as const;

// Schalter — bewusste Aktivierung vor Go-Live (UWG § 5)
export const SHOW_TESTIMONIALS = false;
```

### `lib/leistungen.ts`

```ts
export type Leistung = {
  slug: '24h-betreuung' | 'alltagsbegleitung' | 'verhinderungspflege'
      | 'reisebegleitung' | 'pflegeberatung' | 'inklusionsberatung';
  numeral: string;                          // 'I.' bis 'VI.'
  title: string;
  iconKey: IconKey;
  card: {
    lead: string;                           // 2 Sätze für Startseiten-Karte
  };
  detail: {                                 // gefüllt in Etappe 4
    hero: { h1: string; lead: string };
    wasWirTun: string[];                    // Absätze
    fuerWen: string[];                      // wer profitiert
    ablauf: { step: string; text: string }[];  // 3–5 Schritte
    faq: { q: string; a: string }[];        // 3–6 FAQ
  };
};

export const LEISTUNGEN: readonly Leistung[] = [/* 6 Einträge */] as const;
```

Slugs (URL):
`24h-betreuung`, `alltagsbegleitung`, `verhinderungspflege`,
`reisebegleitung`, `pflegeberatung`, `inklusionsberatung`.

### `lib/bezirke.ts`

```ts
export type Bezirk = {
  slug: string;                             // 'mitte', 'pankow', ...
  name: string;
  isHauptstandort?: boolean;                // true für 'mitte'
  geo?: { lat: number; lng: number };
  hero: { h1: string; lead: string };
  leistungenIntro: string;
  meta: { title: string; description: string };
};

export const BEZIRKE: readonly Bezirk[] = [/* 12 Einträge */] as const;
```

Default-Liste (12 echte Berliner Bezirke): Mitte, Friedrichshain-Kreuzberg,
Pankow, Charlottenburg-Wilmersdorf, Spandau, Steglitz-Zehlendorf,
Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick, Marzahn-Hellersdorf,
Lichtenberg, Reinickendorf. **Liste ist trivial austauschbar — Eric überarbeitet
sie ggf. vor Etappe 5.**

`generateStaticParams` und Footer-Block lesen aus `BEZIRKE`, kein manueller Sync nötig.

## 6. Komponenten — Server vs. Client

| Component | Typ | Begründung |
|---|---|---|
| `A11yBar` | Client | localStorage + DOM-Klassen-Toggle |
| `Nav` | Client | Scroll-State, Mobile-Hamburger |
| `Reveal` | Client | IntersectionObserver |
| Alle anderen | Server | Reines Rendering aus Daten |

**Layout-Struktur:**

```tsx
// app/layout.tsx
<html lang="de">
  <head>
    <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
  </head>
  <body className={`${cormorant.variable} ${manrope.variable} font-sans bg-cream text-anthracite`}>
    <A11yBar />
    <Nav />
    <main>{children}</main>
    <Footer />
  </body>
</html>
```

## 7. A11y-Mechanismus

### Anforderung

Schriftgröße (normal / large / xlarge) und Kontrast-Modus persistieren
seitenübergreifend, **ohne Flash of Unstyled Content** beim Reload.

### Lösung — drei Teile

**(a) Inline-Script im `<head>` vor jedem Stylesheet:**

```ts
// lib/a11y-init.ts
export const a11yInitScript = `
(function(){
  try {
    var size = localStorage.getItem('hpf:a11y:size');
    var contrast = localStorage.getItem('hpf:a11y:contrast');
    if (size === 'large') document.documentElement.classList.add('a11y-large');
    if (size === 'xlarge') document.documentElement.classList.add('a11y-xlarge');
    if (contrast === '1') document.documentElement.classList.add('a11y-contrast');
  } catch(e) {}
})();
`;
```

Script läuft synchron, **bevor** Tailwind angewandt wird → Klasse steht auf
`<html>`, kein FOUC.

**(b) `<A11yBar>` Client-Component** — vier Buttons (A / A+ / A++ / Kontrast).
Toggelt Klassen auf `<html>` und schreibt in `localStorage`. Aktive Buttons werden
in `useEffect` aus `localStorage` gelesen und hervorgehoben.

**(c) CSS-Overrides** in `app/globals.css`:

```css
html.a11y-large { font-size: 19px; }
html.a11y-xlarge { font-size: 22px; }
html.a11y-contrast { background: #000; color: #fff; }
html.a11y-contrast .bg-cream { background: #000 !important; }
html.a11y-contrast .text-anthracite { color: #fff !important; }
html.a11y-contrast .text-gold,
html.a11y-contrast .text-gold-deep { color: #ff0 !important; }
html.a11y-contrast section,
html.a11y-contrast .border-gold\\/30 { border-color: #ff0 !important; }
```

WCAG-AA-konformer Hochkontrast: schwarz/gelb auf weiß-Text.

**Bewusst entfernt:** Der „Leichte Sprache"-Button aus dem Mockup ist im Code-
Stand 1 nicht enthalten. Wird wieder eingefügt, sobald echte Leichte-Sprache-
Versionen existieren.

## 8. SEO / Metadata / Schema.org

### Metadata in drei Schichten

1. **Default** in `app/layout.tsx`: Title-Template `'%s · Heilpraxis Frommholz'`,
   default Description, OG-Defaults, Robots `index,follow`, `metadataBase`.
2. **Statische Seiten** exportieren eigene `metadata`-Konstante.
3. **Dynamische Seiten** (`/leistungen/[slug]`, `/pflege-in-[bezirk]`) nutzen
   `generateMetadata({ params })` und ziehen aus `lib/leistungen.ts` /
   `lib/bezirke.ts`.

### Schema.org

**`<LocalBusinessSchema>`** wird auf jeder Bezirks-Seite eingebunden:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/HomeHealthCare",
  "name": "Heilpraxis Frommholz",
  "address": { "@type": "PostalAddress",
                "streetAddress": "Stephanstr. 46",
                "postalCode": "10559",
                "addressLocality": "Berlin",
                "addressCountry": "DE" },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.5302, "longitude": 13.3438 },
  "telephone": "+4915114140251",
  "email": "simeon@heilpraxis-frommholz.de",
  "url": "https://heilpraxis-frommholz.de",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00", "closes": "16:30"
  },
  "areaServed": { "@type": "AdministrativeArea", "name": "Charlottenburg-Wilmersdorf" },
  "priceRange": "€€"
}
```

Pro Bezirk variiert nur `areaServed.name`. Adresse und Geo bleiben echt.

**Bewusst NICHT `MedicalBusiness`** (vom User abgelehnt — würde Google-Disclaimer
triggern).

**FAQ-Schema** auf Leistungs-Detailseiten (`@type: FAQPage` aus
`leistung.detail.faq`) — Chance auf Google-Rich-Snippets.

### Canonical & Sitemap

- Jede Bezirks-Seite hat eigenes `<link rel="canonical">` auf sich selbst.
  Auch Mitte (Hauptstandort), damit der Bezirks-SEO-Wert nicht entwertet wird.
- `app/sitemap.ts` iteriert über alle statischen Routes, `LEISTUNGEN` und
  `BEZIRKE` — Liste wächst automatisch mit den Daten-Modulen.
- `app/robots.ts`: bis Etappe 6 indexierbar (Vercel-Preview wird ohnehin nicht
  indexiert), in Etappe 6 Cross-Check bei Domain-Switch.

## 9. Testimonials-Sicherheitsschalter

**Risiko:** Erfundene Testimonials sind in DE nach § 5 UWG irreführende Werbung
und abmahnfähig.

**Lösung:** `SHOW_TESTIMONIALS = false` in `lib/site-config.ts`. Die `<Testimonials>`-
Komponente macht `if (!SHOW_TESTIMONIALS) return null;` als erste Zeile. Die zwei
Demo-Texte bleiben im Code (unter dem Schalter) als Design-Anker, aber sind auf
der ausgelieferten Site nicht zu sehen.

Vor Go-Live mit echten Testimonials wird der Schalter manuell auf `true` gesetzt
— bewusste, sichtbare Code-Änderung, nicht versehentlich via Dashboard
aktivierbar.

## 10. Etappen-Plan

| # | Inhalt | Abnahme-Kriterium |
|---|---|---|
| **1** | Next.js 16 init, Tailwind-Setup mit Theme-Erweiterung, Logo extrahieren, Fonts, A11yBar (4 Buttons), Nav (Desktop + Mobile), Footer mit 12 Bezirken, Startseite komponentiert (alle Mockup-Sektionen), `site-config.ts` mit echter Adresse/Telefon/E-Mail. **`lib/leistungen.ts` nur mit `slug`, `numeral`, `title`, `iconKey`, `card.lead` (aus Mockup) — Detail-Felder bleiben leer-getypt bis Etappe 4.** | `npm run dev` zeigt die Startseite, A11y-Wahl persistiert über Reload, Mobile-Nav funktioniert |
| **2** | Push, Vercel-Deploy auf `heilpraxis-frommholz.vercel.app`, `sitemap.ts` + `robots.ts`, Lighthouse-Smoke-Test | Live-URL erreichbar, Lighthouse ≥ 90 für Performance & A11y, manueller Mobile-Test ok |
| **3** | Sub-Seiten: `/soziales-engagement`, `/kontakt` (UI-Stub), `/ueber-uns` (inkl. Teamfotos-Platzhalter), `/karriere` | Alle Nav-Links erreichen reale Inhalte, kein 404 |
| **4** | `/leistungen/[slug]` mit `generateStaticParams` + `generateMetadata` + FAQ-Schema. Eric liefert 2 vollständige Texte (z. B. 24h-Betreuung + Pflegeberatung), Claude schreibt die anderen 4 in dem Ton, Eric redigiert | 6 statische Detail-Seiten gebaut, „Mehr erfahren"-Links der Startseite zeigen drauf |
| **5** | `/pflege-in-[bezirk]` mit `<LocalBusinessSchema>`. Mitte als Hauptstandort-Variante. Eric liefert 2–3 Beispieltexte, Claude schreibt die anderen 9–10 nach demselben Schema | 12 (oder finale Anzahl) Bezirks-Seiten gebaut, jede mit eigener H1/Lead/Meta, schema.org validiert |
| **6** | DNS-Umstellung bei Ionos (A-Record / CNAME auf Vercel), Vercel Custom-Domain `heilpraxis-frommholz.de`, `SITE.url` final setzen, Robots/Sitemap-Check | Domain zeigt auf Vercel, HTTPS via Vercel, Google Search Console eingerichtet (optional) |

Nach jeder Etappe: pushen, Vercel-Preview testen, dann Etappe N+1.

## 11. Offene Punkte / TODOs

| Punkt | Wer | Wann |
|---|---|---|
| Geo-Koordinaten Stephanstr. 46 mit Google-Geocode verifizieren (aktuell ~52.5302, 13.3438) | Claude | Etappe 1 |
| Existiert `simeon@heilpraxis-frommholz.de` als funktionierende Mailbox? | Eric | vor Go-Live |
| Final-Liste der Bezirke (12 oder andere Auswahl) | Eric | vor Etappe 5 |
| 2–3 Beispieltexte für Bezirks-Seiten | Eric | Etappe 5 |
| 2 vollständige Leistungs-Detailtexte als Stilanker | Eric | Etappe 4 |
| Echte Klienten-Testimonials einholen (DSGVO + Freigabe) | Eric/Simeon | nach Go-Live |
| Echte Fotos (Begegnung, Praxis, Berliner Lichtsituation) | Eric (Shooting) | nach Go-Live |
| Versand-Backend für Kontaktformular (Resend / Formspree) | Eric + Claude | nach Etappe 6 |
| Cookie/Tracking-Strategie + DSGVO-Check | Eric (Anwalt?) | wenn Tracking gewünscht |

## 12. Architektur-Risiken & Trade-offs

- **Reveal-Animationen sind Client-only** — Server-Komponenten können nicht
  beobachtet werden. Lösung: `<Reveal>` als Client-Wrapper, der die Children
  unverändert rendert und nur `.visible` toggelt. Children bleiben Server-
  Components.
- **A11y-Inline-Script läuft synchron** — minimale Code-Größe (~300 Bytes),
  Latenz vernachlässigbar. Würde es asynchron laufen, gäbe es FOUC.
- **Tailwind-Theme statt CSS-Variablen** — schöne DX, aber der Kontrast-Modus
  muss via `!important`-Overrides auf Tailwind-Utility-Klassen wirken. Sauberer
  als zwei Theme-Layer, aber jeder neuen Tailwind-Farbe muss eine Override-Regel
  im Kontrast-CSS folgen.
- **12 Bezirks-Seiten mit ähnlicher Struktur und nur Textunterschied** —
  Duplicate-Content-Risiko, falls die Hero-Texte zu generisch werden. Mitigation:
  jede Seite braucht ≥ 2 individuelle Absätze mit lokalem Bezug. Wird in Etappe 5
  redaktionell gewährleistet, nicht im Code.

## 13. Aus Scope ausgeschlossen

Alles aus Abschnitt 2 (Nicht-Ziele) plus: kein E2E-Test, kein Storybook, kein
i18n, kein PWA-Manifest, kein Service-Worker, keine MDX-Inhalte, kein Headless-
CMS-Adapter. Wenn eines davon später relevant wird, eigenes Spec.
