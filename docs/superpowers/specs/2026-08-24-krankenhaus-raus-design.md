# Krankenhaus raus — Fokus privat gezahlte 1:1-Betreuung (Design)

**Datum:** 2026-08-24
**Status:** freigegeben

## Anlass

Die Heilpraxis Frommholz bietet keine Sitzwachen und keine Begleitung im
Krankenhaus mehr an. Dieses Feld gehört ausschließlich dem gemeinnützigen
Verein Leben Pflegen Reisen e. V. Die Website führt jedoch drei Leistungsseiten
und eine Ratgeberseite, die genau das bewerben, dazu Klinikbezüge auf allen
Standortseiten und in Navigation, FAQ, Karriere und Schema-Markup — in vier
Sprachen.

Das Angebot der Heilpraxis ist künftig: **privat gezahlte 1:1-Betreuung in der
häuslichen Umgebung.**

## Entschiedene Leitplanken

Diese Punkte sind vom Auftraggeber entschieden und nicht neu zu verhandeln:

1. **Die drei Sitzwachen-/Klinikseiten werden komplett gelöscht**, nicht
   umgeschrieben. Auch die Hospizseite.
2. **Spurlos.** Kein Verweis darauf, dass der Verein das Krankenhaus übernimmt.
   Kein Klinikname, keine Nähe-Liste, kein Krankenhauswort im Leistungskontext.
3. **410 Gone, ersatzlos.** Keine Weiterleitungen auf Ersatzseiten und keine
   Weiterleitung auf lebenpflegenreisen.de.
4. **Das Wort „Sitzwache" verschwindet vollständig** und wird durch
   „1:1-Betreuung" ersetzt. „Nachtwache" bleibt als eigenständiger Begriff.
5. **Eine neue Money-Page ersetzt die drei gelöschten** — in allen vier Sprachen.

## Umfang

### A. Löschungen

| Deutscher Pfad | Mit übersetzten Slugs und Overlays |
|---|---|
| `/leistungen/sitzwachen-berlin` | en `bedside-companion-berlin`, es `acompanamiento-al-paciente-berlin`, it `assistenza-al-capezzale-berlino` |
| `/leistungen/hospiz-sitzwachen` | en `hospice-companion-care`, es `acompanamiento-en-hospicio`, it `accompagnamento-in-hospice` |
| `/leistungen/klinik-begleitung-berlin` | en `hospital-companion-berlin`, es `acompanamiento-hospitalario-berlin`, it `accompagnamento-ospedaliero-berlino` |
| `/themen/krankenhaus-begleitung` | en `hospital-support`, es `acompanamiento-hospitalario`, it `accompagnamento-ospedaliero` |

Danach: 6 bestehende Leistungs-Detailseiten (+1 neue = 7), 7 Themenseiten.

### B. Neue Seite

`/leistungen/1-zu-1-betreuung-berlin` — „1:1-Betreuung zu Hause in Berlin"

Übersetzte Slugs:

| Sprache | Slug |
|---|---|
| en | `one-to-one-care-at-home-berlin` |
| es | `atencion-individual-en-casa-berlin` |
| it | `assistenza-individuale-a-domicilio-berlino` |

Inhaltliche Bausteine, übernommen und auf Zuhause gedreht aus den gelöschten
Seiten: Demenz mit nächtlicher Unruhe, Sturzgefahr, letzte Lebensphase zu
Hause, Entlastung der Familie, stundenweise bis durchgehend, wache Begleitung
gegenüber Bereitschaft, Kosten als Selbstzahlerleistung mit Hinweis auf
Verhinderungspflege (§ 39 SGB XI) und Entlastungsbetrag (§ 45b SGB XI),
Zuschläge nach § 3b EStG.

Ausgeschlossen: jede Einrichtung, das Argument „Personal versorgt 18 Patienten
parallel", jeder Vereinsbezug.

### C. Textbereinigung

**Standortseiten (14 Einträge, vier Sprachen).** Die Blöcke „Kliniken in der
Nähe" entfallen ersatzlos oder werden durch Kiez-Orientierung ersetzt.
Leistungsversprechen mit Klinikbezug entfallen. Die Berlin-Mitte-Seite braucht
neue Metadaten und eine neue H1, weil ihre bisherige Positionierung
(„klinikennah") wegfällt.

**Wording.** „Sitzwache/Sitzwachen" wird durchgehend zu „1:1-Betreuung" — in
Navigation, Titel-Template, globaler FAQ, Standort-Keywords, `serviceName` im
Schema-Markup und den Wörterbüchern aller vier Sprachen.

**Nachtwachen-Seite.** Bleibt bestehen. Meta-Description verliert Krankenhaus
und Hospiz. Der Baustein „Nach Klinikentlassung" wird zu „In der Genesungsphase
nach einer Operation".

**Soziales Engagement.** Die zwei Links auf gelöschte Seiten entfallen. Der
Verein bleibt als allgemeiner Partner stehen, ohne Krankenhauskontext.

**Karriere.** Die Stellenbeschreibung „Sitzwachen, Nachtwachen, Begleitung in
Krankenhaus und Hospiz" wird auf 1:1-Betreuung und Nachtwachen reduziert.

### D. Technik

`middleware.ts` beantwortet die 16 alten Adressen (vier Pfade in vier Sprachen)
mit **HTTP 410 Gone**. Sitemap und Wörterbuch-Zähler folgen automatisch aus den
Datenquellen. Die Testfixtures in `tests/i18n/slugs.test.ts` und
`tests/i18n/meta.test.ts` verwenden bisher `sitzwachen-berlin` als Beispiel und
ziehen auf die neue Seite um.

## Bewusst unverändert

**AGB.** Die Klausel zur Absage nennt „Krankenhausaufenthalt der betreuten
Person" als Beispiel für einen nicht erforderlichen Einsatz. Das ist eine
Rechtsfolge, kein Leistungsversprechen; die Streichung würde die Klausel unklar
machen.

**Karriere, Zielgruppe der Bewerbung.** „Examinierte Pflegekräfte aus Kliniken,
die nicht mehr im Schichtdienst arbeiten wollen" beschreibt die Herkunft von
Bewerberinnen und Bewerbern, nicht das Angebot an Kundinnen und Kunden.

## Erfolgskriterien

1. `grep -ri "sitzwach"` findet außerhalb von `docs/` und `CHANGELOG.md` keinen
   Treffer mehr.
2. `grep -ri "klinik\|krankenhaus"` findet außerhalb von `docs/`,
   `CHANGELOG.md`, der AGB-Klausel und der Karriere-Zielgruppe keinen Treffer.
3. Die 16 alten Adressen antworten mit 410.
4. `npm test` und `npm run build` laufen durch.
5. Die neue Seite existiert in allen vier Sprachen und ist von der
   Leistungsübersicht aus erreichbar.
