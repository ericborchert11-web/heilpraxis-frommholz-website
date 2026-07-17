# Familienbereich — geschützter Online-Zugang für Angehörige (Design/Spec)

**Datum:** 2026-07-17 · **Repo:** heilpraxis-frommholz-website

## Ziel

Ein neues Website-Angebot sichtbar machen: einen **geschützten Online-Bereich für Angehörige** („Familienbereich"), in dem Familien jederzeit **Dienstpläne, Rechnungen und Pflegedokumentation** ihrer/ihres Angehörigen einsehen. Positioniert als **Standard-Leistung für alle Klient:innen** (kein Aufpreis) — ein Transparenz-/Vertrauensmerkmal, das die bestehende Selbstzahler-/Qualitäts-Erzählung verstärkt.

## Entscheidungen (mit Eric abgestimmt, 2026-07-17)

- **Positionierung:** Standard-Perk für **alle** Kunden (nicht Premium-Upsell). → Bleibt sauber getrennt vom zurückgestellten Premium-/Concierge-Thema (Simeon + USt).
- **Platzierung:** **Startseiten-Sektion** (nach „So läuft es"/AblaufSection) **+ eigene Unterseite** `/familienbereich` (Detail/SEO).
- **Status/Anspruch:** Fertiges, sofort verfügbares Portal; wird je Familie **individuell nach Bedarf eingerichtet**.
- **Zugang:** **Individuell beim Onboarding** — Familien erhalten ihre Zugangsdaten im Erstgespräch/bei Betreuungsbeginn. **Kein öffentlicher Login-Button** in der Nav, **keine öffentliche Login-URL** auf der Website.
- **Name/Slug:** „Familienbereich" · `/familienbereich`.
- **Inhalt:** drei Bausteine — Dienstpläne · Rechnungen · Dokumentation.

## Ehrlichkeits-Leitplanken (verbindlich)

- **Keine erfundenen Belege:** keine fiktiven Screenshots, Zertifikate (ISO o. ä.), Nutzerzahlen oder Testimonials.
- **Sicherheitsaussagen nur so weit wie zutreffend:** „geschützter, verschlüsselter Zugang", „nach Vorgaben der DSGVO", „nur für berechtigte Angehörige". Keine spezifische Zertifizierung behaupten, solange nicht bestätigt.
- **„Individuell eingerichtet"** statt Self-Service-SaaS-Behauptung — der Zugang wird pro Familie aufgesetzt.
- **Sensible Daten (Pflegedokumentation = Gesundheitsdaten):** Datenschutz prominent, Verweis auf `/datenschutz`.
- ⚠️ **Wording-Freigabe durch Eric vor Push** (analog Etappe 2), insbesondere die Sicherheits-/Datenschutzaussagen — sie müssen zum realen Setup passen.

---

## Komponenten & Dateien

- **Create** `components/FamilienbereichSection.tsx` — Startseiten-Sektion (Muster wie `QualitaetSection`, nutzt `Reveal`), `id="familienbereich"`, `scroll-mt-32`.
- **Modify** `app/page.tsx` — `<FamilienbereichSection />` **nach** `<AblaufSection />`, vor `<FaqSection />`.
- **Create** `app/familienbereich/page.tsx` — Unterseite über `PageLayout` (Muster wie `app/soziales-engagement/page.tsx`), Inhalt inline (kein neues lib-Datenfile nötig). Metadata via `...pageMeta('/familienbereich')`, `robots: index,follow`, plus `FaqJsonLd` für die FAQ.
- **Modify** `app/sitemap.ts` — `/familienbereich` zu `staticPages` (changeFrequency `yearly`/`monthly`, priority ~0.6).
- **Modify** `components/Footer.tsx` — hervorgehobener Link „→ Familienbereich für Angehörige" in der **ersten Spalte** (Kontakt/Marke-Block, unter den Öffnungszeiten). (Prüfen, wo `soziales-engagement`/`karriere` verlinkt sind, und konsistent platzieren.)
- **Modify** `components/AblaufSection.tsx` — dezenter Abschlusssatz/Link „Und danach? In Ihrem Familienbereich bleiben Sie jederzeit im Bild → " auf `/familienbereich` (optional, klein).
- **Nav:** **keine Änderung** (kein Login-Button; Sektion via Scroll + Footer + Ablauf-Verweis auffindbar).

---

## Draft-Copy (Freigabe nötig)

### Startseiten-Sektion (`FamilienbereichSection`)

- **Eyebrow:** `Für Angehörige`
- **Headline:** `Ihr Familienbereich — immer im Bild, ohne nachfragen zu müssen.`
- **Lead:** `Pflege betrifft die ganze Familie. In Ihrem geschützten Familienbereich sehen Sie jederzeit, wer wann da ist, was abgerechnet wird und was dokumentiert wurde — an einem Ort, für alle unsere Klient:innen inklusive.`
- **3 Karten:**
  - **Dienstpläne** — `Wer kommt wann? Der aktuelle Dienstplan Ihrer/Ihres Angehörigen — jederzeit einsehbar, immer aktuell.`
  - **Rechnungen** — `Alle Rechnungen übersichtlich an einem Ort, transparent aufgeschlüsselt und jederzeit abrufbar.`
  - **Dokumentation** — `Was ist passiert? Die Pflegedokumentation — nachvollziehbar für berechtigte Angehörige, nah am Alltag Ihrer/Ihres Liebsten.`
- **Sicherheitshinweis (klein):** `Geschützter, verschlüsselter Zugang — nur für berechtigte Angehörige. Wir richten ihn individuell für Ihre Familie ein.`
- **CTAs:** `Mehr erfahren →` (→ `/familienbereich`) · `Im Erstgespräch einrichten` (→ `/#kontakt`)

### Unterseite `/familienbereich`

- **metaTitle (title):** `Familienbereich — geschützter Online-Zugang für Angehörige`
- **metaDescription:** `Als Angehörige jederzeit im Bild: Dienstpläne, Rechnungen und Pflegedokumentation im geschützten Familienbereich. Für alle Klient:innen der Heilpraxis Frommholz inklusive.`
- **PageLayout title:** `Ihr Familienbereich — alles Wichtige an einem geschützten Ort`
- **PageLayout lead:** `Wenn ein Mensch gepflegt wird, wollen Angehörige wissen, was passiert — auch wenn sie nicht daneben stehen können. Der Familienbereich gibt Ihnen genau das: einen geschützten Online-Zugang zu Dienstplänen, Rechnungen und Dokumentation. Für alle unsere Klient:innen inklusive.`
- **Sektionen:**
  1. **„Warum ein Familienbereich"** — Pflege betrifft die Familie; Transparenz statt Nachfragen; entlastet Angehörige, die nicht vor Ort sein können.
  2. **„Die drei Bausteine"** — je Absatz/Stronglist: *Dienstpläne* (wer, wann, immer aktuell), *Rechnungen* (transparent aufgeschlüsselt, alle Zuschläge sichtbar, jederzeit abrufbar), *Dokumentation* (was wurde geleistet/beobachtet, nachvollziehbar für berechtigte Angehörige).
  3. **„Für alle Klient:innen inklusive"** — kein Aufpreis; gehört zu unserem Verständnis von ehrlicher, transparenter Pflege.
  4. **„Sicherheit & Datenschutz"** — geschützter, verschlüsselter Zugang; nur von Ihnen berechtigte Angehörige; Verarbeitung nach DSGVO; sensible Gesundheitsdaten besonders geschützt; Verweis auf `/datenschutz`. *(Keine spezifischen Zertifikate behaupten.)*
  5. **„Individuell nach Bedarf eingerichtet"** — wir richten den Zugang je Familie ein und erweitern ihn bei Bedarf (z. B. weitere Angehörige, zusätzliche Inhalte).
  6. **FAQ (3):**
     - `Wer bekommt Zugang?` → `Sie und die Angehörigen, die Sie benennen. Jeder Zugang wird individuell und geschützt eingerichtet.`
     - `Was kostet der Familienbereich?` → `Nichts extra — er ist für alle unsere Klient:innen inklusive.`
     - `Wie sicher sind meine Daten?` → `Der Zugang ist geschützt und verschlüsselt, die Verarbeitung erfolgt nach den Vorgaben der DSGVO, und nur berechtigte Angehörige sehen die Inhalte. Details in unserer Datenschutzerklärung.`
  7. **CTA-Box:** „Erstgespräch anfragen" (→ `/#kontakt`).
- **FaqJsonLd** mit denselben 3 FAQ.

---

## Verifikation (kein Test-Runner → build + curl + Sichtprüfung)

- `npm run build` erfolgreich; `/familienbereich` als statische Route generiert.
- `curl` auf `/familienbereich`: HTTP 200; `og:url` === `canonical` (via `pageMeta`); genau ein `"@type":"FAQPage"`.
- `sitemap.xml` enthält `/familienbereich`.
- Startseite: `id="familienbereich"` vorhanden; Sektion nach „So läuft es"; CTAs verlinken korrekt.
- Footer-Link vorhanden; Ablauf-Verweis (falls umgesetzt) führt auf `/familienbereich`.
- Sichtprüfung Startseiten-Sektion + Unterseite (Layout, Lesbarkeit).
- **Wording-Freigabe Eric vor Push.**

## Bewusst NICHT im Scope

- Kein echtes Portal/Login-System, keine Auth, keine öffentliche Login-URL (Zugang läuft individuell beim Onboarding).
- Kein Nav-Login-Button.
- Keine Premium-/Preisstaffelung (Standard für alle).
