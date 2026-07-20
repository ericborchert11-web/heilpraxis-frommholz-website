# Mehrsprachigkeit Etappe 3 + 4 — Spanisch und Italienisch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** `/es` und `/it` vollständig in ihrer Sprache, mit einem sichtbaren und ehrlichen Hinweis zur Betreuungssprache.

**Warum eine gemeinsame Datei:** Etappe 3 und 4 sind strukturell dieselbe Arbeit — dieselben Dateien, dieselben Typen, dieselben Prüfungen, nur eine andere Sprache. Ein Plan je Sprache wäre zweimal derselbe Text. Die Aufgaben sind trotzdem je Sprache getrennt und einzeln abhaklbar.

**Architecture:** Unverändert aus Etappe 2 — Wörterbuch je Sprache in `lib/i18n/dictionaries/`, Inhaltsüberlagerung je Sprache in `lib/i18n/content/<lang>/`, gekeyt nach deutschem Slug, mit Rückfall auf Deutsch je Eintrag. Sobald ein Wörterbuch existiert, schalten sich Titel, Beschreibungen und das FAQ-Schema für diese Sprache von selbst ein.

---

## Die inhaltlich wichtigste Anforderung

Englisch ist in Erstkontakt **und** laufender Betreuung gesichert. **Spanisch und Italienisch sind es nicht** — dort ist nur der Erstkontakt in der jeweiligen Sprache möglich, die laufende Betreuung findet auf Deutsch oder Englisch statt.

Eine spanische Website, die das verschweigt, erzeugt genau die Erwartung, die dann gebrochen wird. Das kostet mehr Vertrauen, als die Übersetzung einbringt.

**Deshalb — nicht verhandelbar:**

1. Ein Sprachhinweis erscheint auf `/es` und `/it` **sichtbar im Kontaktbereich**, nicht im Kleingedruckten und nicht nur im Footer.
2. Keine Formulierung auf `/es` oder `/it` darf muttersprachliche Pflegekräfte oder laufende Betreuung in diesen Sprachen versprechen.
3. Der Qualitätspunkt zur Sprachkompetenz wird für ES/IT **nicht wörtlich** aus dem Deutschen übersetzt. Er benennt: Deutsch und Englisch in der Betreuung, Spanisch bzw. Italienisch im Erstkontakt.
4. Das Kontaktformular führt weiterhin die Anfragesprache in der Benachrichtigungsmail mit — das steht seit Etappe 1 und muss erhalten bleiben.

---

## Task 1: Sprachhinweis und Verdrahtung

**Files:** `lib/i18n/dictionaries/{de,en,index}.ts`, `lib/i18n/content/index.ts`, `components/KontaktSection.tsx`, neue leere Überlagerungsdateien unter `lib/i18n/content/{es,it}/`

- [ ] Neue Wörterbuchgruppe `sprachhinweis` mit einem Feld `text`. Auf Deutsch und Englisch **leer** — dort gibt es nichts zu erklären.
- [ ] `components/KontaktSection.tsx` rendert den Hinweis über dem Formular, wenn er nicht leer ist. Sichtbar gestaltet, nicht als Fußnote.
- [ ] Leere Überlagerungsdateien für `es` und `it` anlegen, analog zu `en/`, und in `lib/i18n/content/index.ts` eintragen.
- [ ] Wörterbuch-Registrierung in `lib/i18n/dictionaries/index.ts` für `es` und `it` vorbereiten.
- [ ] Prüfen: Deutsch und Englisch rendern unverändert, `/es` und `/it` weiterhin auf Deutsch zurückgefallen.

## Tasks 2–3: Wörterbücher

- [ ] **Task 2:** `lib/i18n/dictionaries/es.ts`
- [ ] **Task 3:** `lib/i18n/dictionaries/it.ts`

Typisiert gegen `Dictionary` aus `de.ts` — ein fehlender Schlüssel ist ein Übersetzungsfehler zur Bauzeit. Enthält den `sprachhinweis`, den Sprachkompetenz-Qualitätspunkt in der oben beschriebenen ehrlichen Fassung, sowie die sechs Titel und Beschreibungen der Übersichtsseiten.

## Tasks 4–11: Inhalte

Je Sprache vier Dateien, alle voneinander unabhängig:

| | Spanisch | Italienisch |
|---|---|---|
| FAQ + Startseiten-Karten | Task 4 | Task 8 |
| 9 Leistungs-Detailseiten | Task 5 | Task 9 |
| 8 Themenseiten | Task 6 | Task 10 |
| 16 Standortseiten | Task 7 | Task 11 |

**Gemeinsame Regeln, unverändert aus Etappe 2:**

1. Gekeyt nach dem **deutschen** Slug. `slug`, `geo`, `plz`, `iconKey`, `numeral`, `name`, `bezirk`, `isHauptstandort`, `hideInFooter` und alle `href`-Werte werden **nicht** übersetzt.
2. Struktur bleibt exakt erhalten: gleiche Anzahl `sections`, `paragraphs`, `list`, `stronglist`, `faq`, `relatedLinks`. Per Skript prüfen, nicht per Augenmaß.
3. `metaTitle` höchstens 60 Zeichen, `metaDescription` höchstens 160 — nachmessen.
4. `primaryKeyword` wird ein **echter** Suchbegriff der Zielsprache, keine Übersetzung des deutschen.
5. **Keine Markdown-Sternchen.** Die Strings werden als reiner Text ausgegeben, auch ins JSON-LD. Deutsche Fachbegriffe in runden Klammern: `grado de dependencia (Pflegegrad)`.
6. Beträge, Prozentwerte, Paragraphen und Fristen: **Ziffern exakt übernehmen**, Schreibweise der Zielsprache anpassen. Spanisch und Italienisch nutzen wie Deutsch den Punkt als Tausendertrennzeichen — hier also `1.612 €` beibehalten, anders als im Englischen.
7. Deutsche Rechtsbegriffe haben keine Entsprechung: zielsprachliche Erklärung, deutscher Begriff in Klammern bei der ersten Nennung je Eintrag.
8. `Heilpraktiker` bleibt unübersetzt — geschützter deutscher Rechtsstatus, keine Wiedergabe als „naturópata" oder „naturopata".

## Task 12: Abschlussprüfung

- [ ] Vollständigkeitstest auf `es` und `it` erweitern
- [ ] Auf deutsche Reste in beiden Sprachen prüfen, jeden Treffer einzeln bewerten
- [ ] Titel, Beschreibungen und FAQ-Schema schalten sich für ES/IT ein — prüfen, dass die Fragen dort in der jeweiligen Sprache stehen
- [ ] Der Sprachhinweis ist auf `/es` und `/it` sichtbar, auf `/` und `/en` nicht vorhanden
- [ ] Alle Sitemap-URLs liefern 200, hreflang wechselseitig, `<html lang>` korrekt
- [ ] Deutsche Seiten weiterhin byteweise unverändert
- [ ] CHANGELOG ergänzen

---

## Danach

Alle vier Sprachen sind vollständig. Offen bleiben die bewussten Auslassungen: Karriere sowie Impressum, Datenschutz und AGB nur auf Deutsch. Der Datenschutzhinweis auf einer international beworbenen Seite bleibt der Punkt, den Eric noch entscheiden muss.
