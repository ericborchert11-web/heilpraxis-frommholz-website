# SEO: Heilpraxis raus aus Sitzwachen und Reisen

**Datum:** 2026-09-05
**Ziel:** Maximaler Suchmaschinen-Traffic für Leben Pflegen Reisen e.V. in den
Feldern Sitzwachen und Reisen. Die Heilpraxis Frommholz zieht sich aus beiden
Feldern zurück und gibt ihre aufgebaute Ranking-Kraft an den Verein weiter.

## Warum

Beide Domains gehören demselben Betreiber und bieten sich in der Google-Suche
gegenseitig aus. Search Console, 3 Monate (04.06.–02.09.2026):

| Suchanfrage | heilpraxis-frommholz.de | lebenpflegenreisen.de |
|---|---|---|
| `sitzwache berlin` | 5 Klicks / 76 Impr. | 4 Klicks / 85 Impr. |
| `sitzwache` | 1 / 54 | 7 / 363 |
| `sitzwache krankenhaus` | 1 / 16 | 4 / 265 |

Zwei eigene Domains auf derselben Suchanfrage teilen die Klicks, statt sie zu
bündeln. Der Verein ist die richtige Adresse: Er ist gemeinnützig, das Angebot
liegt tatsächlich bei ihm, und er wächst (371 Klicks / 18.031 Impressionen
gegenüber 124 / 3.590 bei der Heilpraxis).

Dazu ein ungenutzter Wert: `/leistungen/sitzwachen-berlin` war mit 26 Klicks und
872 Impressionen die **zweitstärkste Seite der gesamten Heilpraxis-Website** —
und steht seit dem 24.08.2026 auf 410. Ein 410 wirft die aufgebaute Autorität
weg. Eine 301-Weiterleitung gibt sie dem Verein.

## Entscheidungen

1. **301 statt 410.** Kehrt die Entscheidung vom 24.08.2026 („410 ersatzlos,
   auch keine Weiterleitung auf lebenpflegenreisen.de") bewusst um. Damals hieß
   das Ziel „spurlos", heute „Traffic zum Verein". Der Verweis auf den Verein
   ist jetzt erwünscht, nicht mehr zu vermeiden.
2. **Voller Umfang.** Nicht nur die Sitzwachen-Reste, sondern auch Nachtwachen,
   Reisebegleitung und die drei Ratgeberseiten, die dem Verein Sichtbarkeit
   nehmen.
3. **Bewusst in Kauf genommen:** `/leistungen/nachtwachen-berlin` (3 Klicks /
   66 Impr.) und `/themen/verhinderungspflege` sind bezahlte Akquise der
   Heilpraxis. Verhinderungspflege ist typischerweise ein Haupt-Einstieg für
   Angehörige, die anschließend eine bezahlte Betreuung buchen. Beides wird
   abgegeben.

## Weiterleitungs-Landkarte

36 Adressen, alle als **301 Moved Permanently** auf `lebenpflegenreisen.de`.

### Bestehende 410 werden zu 301 (16 Adressen)

| Heilpraxis (de) | en / es / it | → Verein |
|---|---|---|
| `/leistungen/sitzwachen-berlin` | `/en/services/bedside-companion-berlin`, `/es/servicios/acompanamiento-al-paciente-berlin`, `/it/servizi/assistenza-al-capezzale-berlino` | `/sitzwachen/` |
| `/leistungen/hospiz-sitzwachen` | `/en/services/hospice-companion-care`, `/es/servicios/acompanamiento-en-hospicio`, `/it/servizi/accompagnamento-in-hospice` | `/beistand-lebensende/` |
| `/leistungen/klinik-begleitung-berlin` | `/en/services/hospital-companion-berlin`, `/es/servicios/acompanamiento-hospitalario-berlin`, `/it/servizi/accompagnamento-ospedaliero-berlino` | `/sitzwache-krankenhaus/` |
| `/themen/krankenhaus-begleitung` | `/en/guides/hospital-support`, `/es/guias/acompanamiento-hospitalario`, `/it/guide/accompagnamento-ospedaliero` | `/sitzwache-krankenhaus/` |

Offene Alternative für Zeile 1: `/sitzwache-berlin/` statt `/sitzwachen/`. Diese
Seite rankt beim Verein stärker (30 Klicks / 944 Impr.) und trifft die
Suchanfrage `sitzwache berlin` wörtlich. Gewählt ist trotzdem `/sitzwachen/`,
weil es derselbe Seitentyp ist — ein Angebot, keine Ratgeberseite — und Nutzer
dort den Anfrageweg finden.

### Neu hinzu (20 Adressen)

| Heilpraxis (de) | en / es / it | → Verein |
|---|---|---|
| `/leistungen/reisebegleitung-senioren` | `senior-travel-companion`, `acompanante-de-viaje-para-mayores`, `accompagnatore-di-viaggio-anziani` | `/betreute-seniorenreisen/` |
| `/leistungen/nachtwachen-berlin` | `night-care-berlin`, `atencion-nocturna-berlin`, `assistenza-notturna-berlino` | `/nachtwache-krankenhaus/` |
| `/themen/verhinderungspflege` | `respite-care`, `cuidado-de-respiro`, `assistenza-sostitutiva` | `/verhinderungspflege/` |
| `/themen/demenz-begleitung` | `dementia-support`, `acompanamiento-en-demencia`, `accompagnamento-nella-demenza` | `/sitzwache-demenz/` |
| `/themen/palliativ-zuhause` | `palliative-care-at-home`, `cuidados-paliativos-en-casa`, `cure-palliative-a-domicilio` | `/beistand-lebensende/` |

Die fremdsprachigen Fassungen zeigen auf **dieselben deutschen** Vereinsseiten —
der Verein hat keine Übersetzungen. Das ist ein Sprachbruch für den Nutzer, aber
besser als eine tote Adresse; der Traffic dort liegt bei null.

Alle zwölf Zielseiten sind geprüft: HTTP 200 und in der Search Console des
Vereins als indexiert und rankend belegt.

## Umbau im Code

**`middleware.ts`** — die Datei tut das bereits, nur mit Status 410. Die
`ENTFERNT`-Menge wird durch eine Abbildung `Pfad → Verein-URL` ersetzt, die
Antwort wird `NextResponse.redirect(ziel, 301)`. Der `matcher` deckt alle 36
Pfade schon ab und bleibt unverändert.

**Seiten löschen** in allen vier Sprachen:
- `lib/leistungen-seo.ts`: `reisebegleitung-senioren`, `nachtwachen-berlin`
- `lib/themen.ts`: `verhinderungspflege`, `demenz-begleitung`, `palliativ-zuhause`
- `lib/i18n/slugs.ts`: die fünf Einträge aus `LEISTUNG_SLUGS` / `THEMA_SLUGS`
- `lib/i18n/content/{en,es,it}/`: die entsprechenden Übersetzungen

Danach hat die Heilpraxis **5 Leistungsseiten und 4 Themenseiten** statt 7 und 7.

**Die sechs Karten in `lib/leistungen.ts`** sind eine eigene Liste und dürfen
nicht mit den Detailseiten verwechselt werden. Zwei zeigen auf Seiten, die
verschwinden:

- Karte `reisebegleitung` (→ `/leistungen/reisebegleitung-senioren`) wird
  **gelöscht**. Die Heilpraxis bietet keine Reisebegleitung mehr an; die Karte
  stehen zu lassen würde weiter dafür werben.
- Karte `verhinderungspflege` (→ `/themen/verhinderungspflege`) **bleibt**, wird
  aber auf `/leistungen` umgehängt. Verhinderungspflege *erbringen* ist ein
  bezahltes Angebot der Heilpraxis und weder Sitzwache noch Reise — nur die
  Ratgeberseite geht an den Verein, weil sie ihm Sichtbarkeit nimmt.

Die Heilpraxis hat danach fünf statt sechs Karten. Eine `nachtwachen`-Karte gibt
es nicht; `/leistungen/nachtwachen-berlin` ist nur über die Leistungsübersicht
und interne Links erreichbar.

**Interne Verlinkung** muss umgehängt werden, sonst zeigt die Website auf ihre
eigenen Weiterleitungen: `relatedLinks` in `leistungen-seo.ts` und `themen.ts`,
sowie `lib/standorte.ts` (u. a. der Verweis auf Reisebegleitung bei den
diplomatischen Klient*innen und die Antwort zur Mutter aus Bayern).

**Sitemap** braucht keine Änderung: `app/sitemap.ts` erzeugt die Einträge aus
genau diesen Arrays und räumt sich damit selbst auf. Das `LAST_MODIFIED` wird
auf den 2026-09-05 gesetzt — hier ändern sich Inhalte tatsächlich.

**Tests**: `tests/middleware.test.ts` prüft heute auf 410 und muss auf Status 301
plus Ziel-URL umgestellt werden. `tests/i18n/slugs.test.ts` kennt die gelöschten
Slugs.

## Abgrenzung der Seiten, die bleiben

`/leistungen/1-zu-1-betreuung-berlin` bleibt — das ist das bezahlte Kerngeschäft.
Es kollidiert aber begrifflich mit `/einzelbetreuung/` beim Verein. Die Seite
wird sprachlich geschärft auf **„zu Hause, privat gezahlt, examinierte
Pflegekraft"**, damit Google sie von der ehrenamtlichen Begleitung des Vereins
unterscheiden kann. Gleiches Prinzip auf den Standortseiten.

Unangetastet bleiben die im August festgelegten Ausnahmen: die
Krankenhaus-Bezüge in der AGB-Absageklausel und die Karriere-Sätze zur
Bewerberherkunft.

## Search Console nach dem Deploy

1. Sitemap auf der Heilpraxis-Property neu einreichen.
2. Die fünf deutschen Hauptadressen per URL-Prüfung zum Neu-Crawlen anstoßen,
   damit Google die Weiterleitungen schnell sieht.
3. Auf der Vereins-Property prüfen, ob die zwölf Zielseiten weiter sauber
   indexiert sind.

Das **„Entfernen"-Werkzeug wird nicht benutzt**: Es wirkt nur sechs Monate und
würde die Weiterleitung vor Google verstecken, statt sie auszuwerten.

## Nachmessung

Baseline oben ist der Vergleichswert. Nach vier bis acht Wochen erneut messen:
Klicks des Vereins auf `sitzwache*`- und `reise*`-Anfragen sollen steigen, die
der Heilpraxis auf null fallen. Ein Rückgang der Heilpraxis-Gesamtklicks ist
erwartet und kein Fehler.

## Risiken

- **Der Traffic kommt nicht vollständig an.** Eine Weiterleitung überträgt
  Rankingsignale, garantiert aber keine Position. Besonders bei
  `/leistungen/nachtwachen-berlin` → `/nachtwache-krankenhaus/` unterscheiden
  sich die Inhalte (bezahlte Nachtwache zu Hause gegenüber ehrenamtlicher
  Begleitung in der Klinik); Google kann das als schwaches Ziel werten und die
  alte Adresse einfach fallen lassen. Immer noch besser als 410.
- **Die Heilpraxis verliert Anfragen.** Siehe Entscheidung 3 — bewusst
  akzeptiert.
- **Die Website schrumpft.** Neun statt vierzehn Unterseiten schwächen die
  thematische Breite der Domain. Vertretbar, weil die verbleibenden Seiten das
  tatsächliche Angebot schärfer treffen.
