# Changelog

Alle nennenswerten Änderungen an diesem Repo. Format an „Keep a Changelog" angelehnt.

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
