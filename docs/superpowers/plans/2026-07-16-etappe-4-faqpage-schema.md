# Etappe 4 — FAQPage-Schema (Audit + ggf. Ergänzung) (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) oder superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Sicherstellen, dass jede FAQ-Sektion FAQPage-JSON-LD ausgibt. **Erwartung gedämpft:** Google zeigt Rich Snippets für FAQPage seit 2023 kaum noch für normale Sites — Schema trotzdem sauber, kostet nichts.

**Architecture:** Reiner Audit. Vor-Analyse zeigt: Schema ist bereits flächendeckend vorhanden. Diese Etappe verifiziert das belastbar und ergänzt nur, falls eine FAQ-Sektion ohne JSON-LD gefunden wird.

**Tech Stack:** Next.js 16, `components/SEO/FaqJsonLd.tsx` (rendert `@type: FAQPage`). Kein Test-Runner → Verifikation per gerendertem HTML + Google Rich Results Test (optional).

---

## Ist-Zustand (Vor-Analyse, bereits erhoben)

FAQPage-JSON-LD wird ausgegeben von:
- **Startseite:** `components/FaqSection.tsx:22` (`<FaqJsonLd items={GLOBAL_FAQ} />`) ✓
- **Leistungs-Detailseiten:** `app/leistungen/[slug]/page.tsx:61` ✓
- **Standort-Detailseiten:** `app/standorte/[slug]/page.tsx:64` ✓ (gilt auch für die 5 neuen aus Etappe 3 — Template)
- **Themen-Detailseiten:** `app/themen/[slug]/page.tsx:58` ✓
- **Karriere-Detailseiten:** `app/karriere/[slug]/page.tsx:58` ✓

Index-Seiten (`/leistungen`, `/standorte`, `/themen`) haben **keine** FAQ-Sektion (nur Lead + CTA) → dort ist kein FAQPage-Schema nötig/sinnvoll.

**Erwartung:** Diese Etappe endet voraussichtlich ohne Code-Änderung — nur mit dokumentiertem Audit-Ergebnis.

---

## Task 1: Audit — jede sichtbare FAQ hat JSON-LD

**Files:** (nur lesend)

- [ ] **Step 1: Sichtbare FAQ-Sektionen finden** (Accordion = sichtbare FAQ)
```bash
cd ~/Code/heilpraxis-frommholz-website
grep -rn "FaqAccordion\|FaqSection" app components
```
Erwartet: `FaqSection` (Startseite) und `FaqAccordion` in `components/SeoDetailContent.tsx` (alle Detailseiten) sowie `components/FaqSection.tsx`.

- [ ] **Step 2: Zu jeder FAQ-Quelle das JSON-LD gegenprüfen**
```bash
grep -rn "FaqJsonLd" app components
```
Erwartet: Startseite via `FaqSection`, und je Detail-Route (`leistungen/standorte/themen/karriere/[slug]`) ein `<FaqJsonLd .../>`. → Jede sichtbare FAQ hat ein Schema. **Falls eine FAQ-Quelle ohne zugehöriges `FaqJsonLd` gefunden wird → Task 2.**

- [ ] **Step 3: Gerendertes HTML stichprobenartig prüfen**
```bash
# nach: npm run build && npx next start
for p in "" "/leistungen/systemsprenger-betreuung" "/standorte/dahlem" "/themen/pflegegrad-beantragen"; do
  echo "=== /$p ==="; curl -s "http://localhost:3000$p" | grep -o '"@type":"FAQPage"' | head -1
done
```
Erwartet: je Seite mit FAQ genau ein `"@type":"FAQPage"`.

- [ ] **Step 4: Ergebnis dokumentieren** — Falls (erwartet) alles abgedeckt: Etappe ohne Code-Change abschließen; Audit-Ergebnis im PR/Commit-Kommentar festhalten. Falls Lücke → Task 2.

---

## Task 2: (Nur falls Lücke gefunden) FAQPage-Schema ergänzen

**Files:**
- Modify: die Seite/Komponente mit sichtbarer FAQ ohne Schema

- [ ] **Step 1: `FaqJsonLd` einbinden** — analog zu `components/FaqSection.tsx`:
```tsx
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
// ...
<FaqJsonLd items={<dieselbe FaqItem-Liste wie im sichtbaren Accordion>} />
```
Wichtig: `items` muss **exakt** die im Accordion sichtbaren Fragen/Antworten sein (Schema muss dem sichtbaren Inhalt entsprechen — Google-Richtlinie).

- [ ] **Step 2: Validieren**
```bash
curl -s "http://localhost:3000/<pfad>" | grep -o '"@type":"FAQPage"'
```
Erwartet: `"@type":"FAQPage"` vorhanden.

- [ ] **Step 3: Build + Commit**
```bash
npm run build
git add <datei>
git commit -m "feat(seo): FAQPage-JSON-LD für <Seite> ergänzt"
```

---

## Task 3: (Optional) JSON-LD-Gültigkeit prüfen

- [ ] **Step 1:** Eine gerenderte Seite durch den [Google Rich Results Test](https://search.google.com/test/rich-results) oder [Schema Markup Validator](https://validator.schema.org/) schicken (Vercel-Preview-URL). Erwartet: FAQPage erkannt, keine Fehler. (Reines Nice-to-have; blockiert nichts.)

---

## Task 4: Abschluss

- [ ] **Step 1:** Falls Code-Change: `git push`. Falls reines Audit ohne Change: Ergebnis kurz an Eric melden („Schema bereits vollständig, nichts zu tun").

---

## Akzeptanzkriterien (aus Briefing)

- [ ] Jede sichtbare FAQ-Sektion (Startseite + alle Detailseiten, inkl. neuer Standorte aus Etappe 3) gibt FAQPage-JSON-LD aus.
- [ ] Stichproben im gerenderten HTML bestätigen `"@type":"FAQPage"`.
- [ ] Erwartungshaltung dokumentiert: Rich Snippets unwahrscheinlich, Schema dennoch sauber gesetzt.
