# Changelog

Alle nennenswerten Änderungen an diesem Repo. Format an „Keep a Changelog" angelehnt.

## [Klinik-Begleitung Berlin als 9. Money-Page] – 2026-05-15

Neue Premium-Leistungsseite `/leistungen/klinik-begleitung-berlin` aus dem Mobile-Briefing („Klinik-Begleitung Berlin"). Zielgruppe: gut situierte Familien, deren Eltern im Krankenhaus liegen und 1:1-Begleitung neben dem überlasteten Klinikpersonal brauchen.

### Drin

- **9. Eintrag in `lib/leistungen-seo.ts`**: `klinik-begleitung-berlin` mit vollem Detail — Hero/Intro über das 18-Patientinnen-Verhältnis im Krankenhaus, drei Sections (Was wir konkret tun, Wann macht das Sinn, Was uns auszeichnet), 12 FAQs (für FAQPage-Rich-Snippets), CTA, drei relatedLinks.
- **Position 9 ans Ende der Liste** — bestehende Reihenfolge im Footer und im Hub bleibt unverändert.
- **Automatische Folgerungen** dank daten-getriebener Architektur: Footer-Spalte „Leistungen" zeigt Klinik-Begleitung; Sitemap-Eintrag via `leistungenWithDetail()`; `/leistungen` Hub zeigt 9. Karte; Service- + FAQPage- + BreadcrumbList-JSON-LD durch `app/leistungen/[slug]/page.tsx`-Template.
- **Interne Verlinkung ausgebaut**:
  - `/leistungen/sitzwachen-berlin` → relatedLink ergänzt
  - `/leistungen/24-stunden-betreuung` → relatedLink ergänzt
  - `/themen/krankenhaus-begleitung` → Brücken-Hinweis im Intro + Klinik-Begleitung als erster relatedLink
  - `/themen/demenz-begleitung` → relatedLink ergänzt

### Entscheidung: parallele Seiten statt 301

`/themen/krankenhaus-begleitung` (informativ, „was ist das, wann brauche ich das?") und `/leistungen/klinik-begleitung-berlin` (transaktional, „wir bieten das an") bleiben beide live — bedienen unterschiedliche Suchintents. Themen-Seite bekommt einen prominenten Bridge-Link auf die Leistungsseite.

### Memory-konform

FAQ-Frage 1 („Was kostet …?") nennt **keine** konkreten Stundensätze (auch keine Bereiche), sondern verweist auf das kostenlose Erstgespräch — bleibt linientreu zu [[feedback-no-prices-on-site]].

### Stand der Build

- 46 statisch generierte Pages (vorher 45)
- Sitemap auf 36 URLs (vorher 35)

---

## [Preise raus] – 2026-05-14

Eric: „Es darf keine Preise geben." Sämtliche konkreten €-Beträge für eigene Leistungen und Mitarbeitergehälter sind aus dem öffentlichen Content entfernt. Stattdessen einheitlich der Hinweis: konkrete Kalkulation im kostenlosen Erstgespräch bzw. Bewerbungsgespräch.

### Was raus ist

- Money-Pages (`lib/leistungen-seo.ts`): Stundensätze, Tagessätze, Monatspakete für Selbstzahler-Pflege, 24-Stunden-Betreuung, Pflegeberatung, Nachtwachen, Hospiz-Sitzwachen, Reisebegleitung. „Was es kostet"-Sektionen umformuliert auf Bedarfsklärung.
- Themen-Pages (`lib/themen.ts`): MDK-Begleitung-Pauschale, Demenz-Begleitung-Stundensatz, Krankenhaus-Begleitung-Tarife, Wohnungsauflösung-Stundensätze.
- Standorte (`lib/standorte.ts`): zwei FAQ-Antworten in Wilmersdorf und Schmargendorf, in denen konkrete Preise standen.
- Startseiten-FAQ (`lib/faq-global.ts`): „Was kostet 1:1-Betreuung?"-Antwort.
- Karriere (`lib/karriere.ts`): alle Stundensätze, Monatsschätzungen und Beispielsrechnungen aus den 5 Recruiting-Seiten. Tonfall: „deutlich über Branchendurchschnitt der ambulanten Pflege, Zuschläge nach § 3b EStG voll ausgezahlt — konkrete Sätze im Bewerbungsgespräch".
- JSON-LD `priceRange: €€€` aus `lib/site-config.ts` und `components/SEO/JsonLd.tsx`.

### Was bleibt

- Alle SGB-XI-Beträge der Pflegekasse: Pflegegeld-Tabelle (332/573/765/947 €), Sachleistungs-Beträge, Entlastungsbetrag (125 €), Verhinderungspflege (1.612 € + bis 806 € aus Kurzzeitpflege), Kurzzeitpflege-Übertrag, Wohnraumanpassung (bis 4.000 €), 70 € Verzugsanspruch bei MDK-Fristüberschreitung. Das sind staatliche Fakten, nicht unsere Preise.
- AGB § 4 Zuschläge nach § 3b EStG (25 % nachts, 50 % Sonn-/Feiertag): Vertragsstruktur, kein absoluter Preis.

---

## [SEO-Fixes nach mobilem Live-Check] – 2026-05-14

Reaktion auf das mobile-Claude-Briefing (`briefings/SEO-FIXES-BRIEFING.md`, gitignored). Drei zusammenhängende Bugs identifiziert, hier der Code-Anteil:

### Drin

- **JSON-LD `@type` korrigiert**: war `MedicalBusiness` (Heilkundler-Cluster). Jetzt `["LocalBusiness", "HomeHealthCareService"]` — Pflegedienst-Cluster, dem Geschäftsmodell entsprechend, Google routet in den richtigen lokalen Index.
- **`sameAs` in JSON-LD ergänzt**: aktuell mit `simeonfrommholz.de`. In `lib/site-config.ts` als Liste, weitere Profile (Google Business, LinkedIn, Facebook) durch Eric ergänzbar.
- **Site-URL konfigurierbar via `NEXT_PUBLIC_SITE_URL`**: Default bleibt Apex `https://heilpraxis-frommholz.de`. Falls jemals auf www umgestellt werden soll, reicht eine Env-Var-Änderung + Redeploy — kein Code-Change. Greift auf Canonicals, Sitemap, robots.txt und JSON-LD.

### Bewusst nicht im Code (gehört zu Vercel/DNS)

- **Apex-404 (GitHub-Pages-Residue)**: `heilpraxis-frommholz.de` zeigt aktuell auf alte GitHub-Pages-IPs (`185.199.108-111.x`) gemischt mit einer Vercel-IP — Kollege Round-Robin zwischen tot und lebendig. Fix bei **Ionos-DNS** (NS-Records zeigen `ui-dns.*`, nicht Vercel) — die A-Records auf GitHub müssen weg, stattdessen Vercel-Apex-IP `76.76.21.21` setzen. Anleitung im Recap an Eric.
- **Canonicals/Sitemap/robots.txt**: stimmen aktuell für Apex-als-primary. Sobald DNS gefixt ist, ist alles konsistent — ohne weiteren Eingriff.

---

## [Kontaktformular + LPR-Kooperation + Schichtplaner-Link] – 2026-05-14

### Drin

- **Kontaktformular ist live**: Server Action `app/actions/send-contact.ts` ruft die Resend-HTTP-API auf und sendet an `simeon@heilpraxis-frommholz.de`. Validierung, Honeypot-Spam-Schutz, DSGVO-Consent-Checkbox, freundliche Error-States.
- **KontaktSection** refactored: nutzt `useActionState` (React 19), zeigt Pending-/Success-/Error-Zustände inline, behält die Designsprache.
- **`.env.example`** im Repo, mit Doku zu `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_TO`.
- **LPR-Kooperation referenziert**: auf `/leistungen/sitzwachen-berlin`, `/leistungen/hospiz-sitzwachen` und `/leistungen/reisebegleitung-senioren` jeweils ein Hinweis auf den Partnerverein „Leben Pflegen Reisen e.V." in der Intro.
- **Schichtplaner-Link im Footer**: externer Link auf `zuhause.heilpraxis-frommholz.de` (separates Repo, interner Mitarbeiterbereich), unten neben Impressum/Datenschutz/AGB/Karriere. Tote `/ueber-uns`-Link aus der Bottom-Row entfernt, AGB-Link ergänzt.

### Konfiguration in Vercel (vor dem nächsten Deploy einmal eintragen)

| Variable | Wert |
|---|---|
| `RESEND_API_KEY` | API-Key aus dem Resend-Dashboard |
| `MAIL_FROM` | `Heilpraxis Frommholz <kontakt@heilpraxis-frommholz.de>` (nur wenn Domain in Resend verifiziert ist; sonst `Heilpraxis Frommholz <onboarding@resend.dev>`) |
| `MAIL_TO` | optional, default ist `simeon@heilpraxis-frommholz.de` |

Solange `RESEND_API_KEY` fehlt, zeigt das Formular nach dem Klick einen kurzen Fehlerhinweis und weist auf Telefon/E-Mail hin — niemand bekommt eine kaputte Seite zu sehen.

### Nicht drin

- **LPR-Website-Link**: URL des Partnervereins noch nicht eingetragen — sobald Eric sie liefert, lege ich `PARTNERS.lpr.url` in `lib/site-config.ts` an und mache die Erwähnungen klickbar.

---

## [SEO Welle 3] – 2026-05-14

Dritte (und letzte) Welle des SEO-Mega-Briefings: vollständige lokale SEO-Abdeckung über 11 Stadtteil-Seiten + 5 Recruiting-Seiten. Damit ist das Briefing inhaltlich abgearbeitet.

### Drin

- **`/standorte` Hub + 11 Detail-Seiten**: Moabit (Hauptstandort), Tiergarten, Berlin-Mitte, Hansaviertel, Charlottenburg, Wilmersdorf, Westend, Grunewald, Zehlendorf, Dahlem, Schmargendorf. Pro Standort: Schwerpunkt-Beschreibung, Krankenhäuser, Anfahrtszeit, Stadtteil-FAQs, Service-Schema mit `areaServed`.
- **`/karriere` Hub + 5 Detail-Seiten**: Pflegejob ohne Schichtdienst, Pflege ohne Zeitdruck, Pflege ohne körperliche Belastung, In der Rente weiterarbeiten, Bezahltes Ehrenamt (Sitzwachen).
- **Daten**: `lib/standorte.ts` (11 Einträge mit PLZ, Geo, Bezirks-Zuordnung, vollem Detail-Content), `lib/karriere.ts` (5 Recruiting-Einträge).
- **Routen-Konflikt aufgelöst**: `lib/bezirke.ts` entfernt (12 Verwaltungsbezirke, Footer linkte auf 404-`/pflege-in-{slug}`-Routen). Stattdessen 11 Ortsteile aus dem Briefing — keyword-stärker.
- **Footer aktualisiert**: rechte Spalte heißt jetzt „Pflege in Ihrem Kiez", listet 11 Ortsteile + Link zum Hub. Karriere-Link in der Bottom-Nav führt jetzt auf eine echte Seite, nicht mehr 404.
- **Sitemap auf 35 URLs**: Startseite, 4 Hubs, 8 Money-Pages, 8 Themen, 11 Standorte, 5 Karriere, 3 Rechtsseiten.

### Briefing-Konflikt: 12 Bezirke → 11 Ortsteile

`lib/bezirke.ts` listete die 12 Berliner Verwaltungsbezirke (`mitte`, `charlottenburg-wilmersdorf`, `pankow`, …). Briefing definiert stattdessen 11 Ortsteile/Quartiere (`moabit`, `wilmersdorf`, `grunewald` separat usw.) für SEO. Bezirks-Datei ersatzlos gestrichen, Footer und alle Verweise auf das Ortsteil-Modell umgestellt. Die alten `/pflege-in-{bezirk}`-Routen waren ohnehin 404, niemand verliert echten Traffic.

### Nicht drin (bewusst)

- Karten-Komponente auf `/standorte` (Briefing schlägt Leaflet + OpenStreetMap vor) — vertagt, weil sie eine Client-Komponente + DSGVO-Check + Map-Tile-Subkosten braucht; aktueller Hub mit gruppierter Liste reicht für SEO.
- Hero-Sektion-Umbau (TEIL 7.2 voll) — Hero-Komponente bleibt unangetastet, weil sie mit dem Team-Foto kuratiert ist; nur die Page-Title-Default-Variante wurde in Welle 2 angepasst.
- OG-Default-Bild — weiterhin offen
- Berufshaftpflicht-Versicherer im Impressum — weiterhin als `[wird nachgereicht]` markiert

---

## [SEO Welle 2] – 2026-05-14

Zweite Welle des SEO-Mega-Briefings: alle 8 Money-Pages haben jetzt Voll-Inhalt, der komplette Themen-Hub mit 8 informativen Seiten ist live, Footer hat eine Themen-Spalte, Startseiten-Title ist keyword-stärker.

### Drin

- **5 Money-Pages fertig ausgearbeitet** (vorher Stubs): 24-Stunden-Betreuung, Pflegeberatung Berlin, Nachtwachen Berlin, Hospiz-Sitzwachen, Reisebegleitung für Senioren — alle mit Service- & FAQ-Schema, Breadcrumbs, related Links.
- **Themen-Hub `/themen` + 8 Detail-Seiten**:
  - `/themen/pflegegrad-beantragen`
  - `/themen/verhinderungspflege`
  - `/themen/entlastungsbudget`
  - `/themen/mdk-begutachtung`
  - `/themen/demenz-begleitung`
  - `/themen/palliativ-zuhause`
  - `/themen/krankenhaus-begleitung`
  - `/themen/wohnungsaufloesung-pflegefall`
- **Refactor**: `components/SeoDetailContent.tsx` als wiederverwendbares Render-Modul für Leistungs- und Themen-Detail-Seiten.
- **Sitemap erweitert**: jetzt 17 URLs (Startseite + Hubs + 8 Money + 8 Themen + 3 Legal).
- **Footer**: zusätzliche Themen-Spalte (8 Themen + Hub-Link), Grid auf 4 Spalten umgestellt.
- **Startseiten-Title**: jetzt `Pflege, Sitzwachen & Begleitung Berlin – Heilpraxis Frommholz` (Briefing TEIL 7.2, abgespeckt — Hero selbst bleibt unverändert).
- **Daten**: `lib/themen.ts` mit 8 Themen-Einträgen, `lib/leistungen-seo.ts` um `trailingParagraphs` erweitert.

### Nicht drin (Welle 3 ausstehend)

- 11 Stadtteilseiten + Standorte-Hub mit Karte
- 5 Recruiting-Seiten + Karriere-Hub
- Hero-Sektion-Umbau auf neue H1-Variante (Briefing TEIL 7.2 voll)
- OG-Default-Bild (`/og-default.jpg`) — weiterhin offen
- Berufshaftpflicht-Versicherer im Impressum

---

## [SEO Welle 1] – 2026-05-14

Erste Welle des SEO-Mega-Briefings: technisches Fundament, Rechtspflichtseiten, drei Money-Pages, globale FAQ. Quelle: `briefings/SEO-MEGA-BRIEFING.md` (untracked, lokal). Plan: `docs/superpowers/specs/2026-05-14-seo-phase-1.md`.

### Drin

- **Technisches SEO**: `app/sitemap.ts`, `app/robots.ts`, MedicalBusiness-JSON-LD im Root-Layout, OG/Canonical/Robots in `metadata`
- **SEO-Komponenten**: `components/SEO/{JsonLd,FaqJsonLd,BreadcrumbJsonLd,Breadcrumbs}.tsx`, `components/PageLayout.tsx`, `components/FaqAccordion.tsx`, `components/FaqSection.tsx`
- **Rechtsseiten**: `/impressum`, `/datenschutz`, `/agb` mit vollständigen Pflichtinhalten (Berufshaftpflicht-Versicherer als `[wird nachgereicht]` markiert)
- **Money-Pages**: `/leistungen` (Hub, 8 Karten) + 3 Detailseiten mit Service- & FAQ-Schema:
  - `/leistungen/sitzwachen-berlin`
  - `/leistungen/systemsprenger-betreuung`
  - `/leistungen/pflegedienst-selbstzahler`
- **Globale FAQ** auf Startseite (8 Fragen) mit FAQPage-Schema
- **Daten**: `lib/leistungen-seo.ts` (8 Einträge), `lib/faq-global.ts` (8 FAQs), `lib/site-config.ts` erweitert (Geo, Beruf, USt, Versicherung, Service-Areas)
- **Footer-Fix**: Leistungs-Spalte zeigt jetzt die 8 SEO-Slugs (3 verlinkt, 5 graustichig) + „Alle Leistungen"-Link auf Hub

### Konflikte mit Briefing-Wortlaut bewusst aufgelöst

- Briefing nennt Festnetz `030 6446 1243` / `kontakt@…` → Code & Memory nutzen Handy `0151 14140251` / `simeon@…` (gewinnt).
- Briefing legt Daten unter `content/*.ts` → Repo-Konvention `lib/*.ts` (bleibt).
- Briefing zeigt statische Ordner-Routen pro Slug → dynamische Route `app/leistungen/[slug]/page.tsx` mit `generateStaticParams` (URLs identisch).

### Nicht drin (Welle 2 + 3 ausstehend)

- 8 Themen-Seiten (`/themen/*`)
- Restliche 5 Money-Pages (24h, Pflegeberatung, Nachtwachen, Hospiz, Reise) — als Stubs im Hub gelistet
- Startseiten-Hero-Umbau (TEIL 7.2)
- 11 Stadtteilseiten + Standorte-Hub mit Karte
- 5 Recruiting-Seiten + Karriere-Hub
- OG-Default-Bild (`/og-default.jpg`) muss noch geliefert werden
- Berufshaftpflicht-Versicherer im Impressum

---

## [Etappe 1] – 2026-05-14 — vorläufig geschlossen für Vercel-Deploy

Etappe 1 ist hier vorläufig abgeschlossen, damit die Seite heute Abend live gehen kann. Feinschliff folgt in Etappe 1.5 / 2.

### Drin (in `main`)

- Next.js 16.2.6 (App Router, TypeScript strict, Turbopack)
- Tailwind CSS 4.3.0 mit `@theme`-Block (Senfgold/Anthrazit/Crème + Cormorant Garamond + Manrope)
- Komplette Startseite, alle 7 Sektionen verdrahtet:
  - Hero (mit echtem Team-Foto, Klinik-Szene aus Sana-Klinikum)
  - TrustStrip (20+ Jahre / 24/7 / § 3b / Berlin)
  - LeistungenGrid (6 Leistungs-Karten, römische Ziffern, ohne Detailseiten-Links)
  - HaltungSection (sozial-anstellige Pflege, Statistik „7 Mitarbeitende aus dem zweiten Arbeitsmarkt")
  - Testimonials (Code gebaut, hardcoded `SHOW_TESTIMONIALS=false` — UWG § 5)
  - AblaufSection (Kennenlernen / Planung / Begleitung)
  - KontaktSection (Stub-Formular, kein Versand)
- Layout-Chrome: A11y-Bar (Schriftgröße + Kontrast, persistent via `localStorage`, FOUC-frei), Nav (Desktop + Mobile-Hamburger, Scroll-Shrink), Footer (Adresse, 6 Leistungen, 12 Bezirke, Legal-Links)
- 404-Seite (`app/not-found.tsx`)
- Daten-Layer: `lib/site-config.ts` (echte Adresse, Telefon, E-Mail, Öffnungszeiten), `lib/leistungen.ts` (6 Einträge mit Karten-Texten), `lib/bezirke.ts` (12 Berliner Bezirke, Mitte als Hauptstandort), `lib/a11y-init.ts` (Inline-Script)

### Nicht drin (vertagt auf Etappe 1.5 oder Etappe 2)

- **Hero-Copy-Erweiterung um Klinik-Begleitung** — der Lead-Satz „zu Hause, im vertrauten Umfeld, bei Ihnen" schließt aktuell Klinik-Begleitung aus. Das Team-Foto zeigt aber genau das (Sana-Klinikum-Setting). Copy sollte ergänzt werden, sobald wir Ruhe haben.
- **Geo-Koordinaten** der Stephanstr. 46 (Wert in `lib/site-config.ts` ist eine Schätzung, mit Google-Geocode bestätigen)
- **Mailbox `simeon@heilpraxis-frommholz.de`** aktiv prüfen
- **Bezirks-Liste finalisieren** (Eric wollte die 12 nochmal durchgehen)
- **Leistungs-Detailseiten** (Etappe 4) — Detail-Felder in `lib/leistungen.ts` sind leer-getypt, „Mehr erfahren"-Links sind deshalb noch nicht da
- **Bezirks-Landingpages** (Etappe 5) — Hero/Meta-Felder in `lib/bezirke.ts` sind leer, Routen `/pflege-in-<slug>` 404'en
- **Sub-Seiten** (Etappe 3): `/soziales-engagement`, `/kontakt`, `/ueber-uns`, `/karriere`, `/impressum`, `/datenschutz` — alles 404, von der custom `not-found.tsx` aufgefangen
- **Versand-Backend** für Kontaktformular (Resend/Formspree, später)
- **Sitemap + Robots** (Etappe 2 zusammen mit Vercel-Setup)
- **Schema.org / LocalBusiness** (Etappe 5 zusammen mit Bezirks-Seiten)
- **Echte Klienten-Testimonials** (nach Go-Live, mit Freigabe)

### Bekannte Limitierungen / Lessons Learned

- **Turbopack hält CSS-Cache zäh:** Nach Änderungen an `app/globals.css` (insb. `@theme`-Block) braucht es manchmal `rm -rf .next && npm run dev` für korrekte Recompilation. HMR allein reicht nicht immer.
- **`suppressHydrationWarning` auf `<html>` Pflicht** wegen Inline-A11y-Script in `<head>`. Etappe-1-Plan-Doc (`docs/superpowers/plans/2026-05-14-etappe-1-foundation.md`) zeigt das in Task 6 nicht — Update bei nächster Re-Execution wünschenswert.
- `next-env.d.ts` ist gitignored, weil Next.js den Inhalt zwischen Dev- und Build-Mode automatisch flippt.

### Verweise

- Design-Spec: `docs/superpowers/specs/2026-05-14-website-design.md`
- Implementation-Plan: `docs/superpowers/plans/2026-05-14-etappe-1-foundation.md`
- Original-Mockup (Design-Referenz): `mockup.html` im Repo-Root

---

## [Etappe 0] – 2026-05-14

- Initial commit (README, .gitignore)
- Design-Spec geschrieben und committed
- Etappe-1-Implementation-Plan geschrieben und committed
