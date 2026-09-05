/**
 * Themen-Seiten aus SEO-Mega-Briefing TEIL 4. Informativer Content
 * (How-to, Erklär-Artikel), die Suchanfragen mit Informations-Intent
 * abfangen. Unterscheiden sich von Leistungen darin, dass sie keine
 * Verkaufs-Seiten sind — der CTA leitet auf die Pflegeberatung weiter.
 */

import type { SeoLeistungDetail } from './leistungen-seo';

export type SeoThema = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  detail: SeoLeistungDetail;
};

export const THEMEN: readonly SeoThema[] = [
  // === Thema 1: Pflegegrad beantragen ==========================================
  {
    slug: 'pflegegrad-beantragen',
    title: 'Pflegegrad beantragen',
    short: 'Schritt für Schritt vom Antrag bis zum Bescheid.',
    metaTitle: 'Pflegegrad beantragen 2026 – Anleitung für Berlin',
    metaDescription: 'Pflegegrad in Berlin beantragen: Schritte, Fristen, MDK-Begutachtung. Praktische Anleitung mit Erfahrungen aus über 15 Jahren Pflegeberatung.',
    h1: 'Pflegegrad beantragen — die Schritte im Detail',
    primaryKeyword: 'Pflegegrad beantragen',
    detail: {
      intro: [
        'Ein Pflegegrad öffnet die Tür zu Leistungen, die Pflege bezahlbarer machen: Pflegegeld, Sachleistungen, Verhinderungspflege, Entlastungsbetrag, Wohnraumanpassung. Bevor diese Leistungen fließen, muss aber der Antrag gestellt und der Pflegegrad festgestellt werden. Wir erklären, wie das geht und worauf zu achten ist.',
      ],
      sections: [
        {
          heading: 'Schritt 1: Antrag bei der Pflegekasse stellen',
          paragraphs: [
            'Der Antrag geht an die Pflegekasse — das ist die mit der Krankenversicherung verbundene Stelle. Formlos ausreichend ist eine einzelne Zeile: „Hiermit beantrage ich Leistungen nach dem Pflegeversicherungsgesetz."',
            'Wichtig: Der Antrag zählt rückwirkend zum Antragsdatum. Leistungen werden ab diesem Tag gezahlt, sobald der Bescheid kommt. Deshalb sollte der Antrag schnell raus, auch wenn noch nicht alle Unterlagen vorliegen.',
          ],
        },
        {
          heading: 'Schritt 2: MDK-Begutachtungstermin',
          paragraphs: [
            'Innerhalb von 4-6 Wochen meldet sich der Medizinische Dienst der Krankenversicherung (MD, in Berlin: MD Nord) und vereinbart einen Hausbesuch. Die Begutachtung dauert 1-2 Stunden.',
            'Was bewertet wird: Selbstständigkeit in 6 Bereichen (Mobilität, kognitive und kommunikative Fähigkeiten, Verhalten und psychische Problemlagen, Selbstversorgung, Bewältigung von Krankheitsanforderungen, Gestaltung des Alltagslebens).',
            'Was Sie vorbereiten sollten: ein Pflegetagebuch (mindestens 1 Woche), eine Liste aller Medikamente, alle Befunde der letzten 2 Jahre, eine Hilfsmittel-Übersicht.',
          ],
        },
        {
          heading: 'Schritt 3: Bescheid und ggf. Widerspruch',
          paragraphs: [
            'Innerhalb von 5 Wochen nach Antragstellung muss der Bescheid kommen — gesetzliche Frist nach § 18 SGB XI. Wenn die Frist nicht eingehalten wird, haben Sie Anspruch auf 70 € pro angefangene Woche Verzug.',
            'Wenn der Pflegegrad zu niedrig ausfällt: 4 Wochen Widerspruchsfrist ab Zugang des Bescheids. Widerspruch ist formlos möglich, sollte aber mit Begründung und neuen Belegen versehen werden.',
          ],
        },
        {
          heading: 'Pflegegrade im Überblick (Stand 2026)',
          paragraphs: [
            'Pflegegrad 1 (12,5–26,9 Punkte): kein Pflegegeld, kein Sachleistungsbudget — nur Entlastungsbetrag und einzelne Leistungen.',
            'Pflegegrad 2 (27–47,4 Punkte): 332 € Pflegegeld, 761 € Sachleistung pro Monat.',
            'Pflegegrad 3 (47,5–69,9 Punkte): 573 € Pflegegeld, 1.432 € Sachleistung.',
            'Pflegegrad 4 (70–89,9 Punkte): 765 € Pflegegeld, 1.778 € Sachleistung.',
            'Pflegegrad 5 (ab 90 Punkten): 947 € Pflegegeld, 2.200 € Sachleistung.',
            'Plus jeweils 125 € Entlastungsbetrag und bis 1.612 € jährlich Verhinderungspflege.',
          ],
        },
      ],
      faq: [
        { question: 'Wie schnell kommt der Pflegegrad?', answer: 'Gesetzlich 5 Wochen ab Antragsdatum. In Berlin aktuell oft 6-8 Wochen. Leistungen werden rückwirkend zum Antragsdatum gezahlt.' },
        { question: 'Kann ich einen Pflegegrad rückwirkend beantragen?', answer: 'Ja, der Antrag wirkt ab dem Tag der Antragstellung. Wenn Sie also heute beantragen und der Bescheid kommt in 6 Wochen, bekommen Sie die Leistung für diese 6 Wochen nachgezahlt.' },
        { question: 'Was passiert, wenn der Pflegegrad zu niedrig ist?', answer: 'Sie können innerhalb von 4 Wochen Widerspruch einlegen. Begründet — am besten mit einem neuen Pflegetagebuch und ärztlichen Attesten. Wir unterstützen bei Widersprüchen.' },
        { question: 'Brauche ich für den Antrag schon einen Arztbericht?', answer: 'Nein. Aber der Gutachter wird Befunde der letzten 2 Jahre sehen wollen. Bereiten Sie diese vor dem MDK-Termin vor.' },
        { question: 'Wer hilft beim Antrag?', answer: 'Wir bieten Pflegeberatung an, die genau das tut: Antrag formulieren, MDK-Termin vorbereiten, Widerspruch begründen.' },
      ],
      cta: { text: 'Pflegeberatung anfragen', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'MDK-Begutachtung vorbereiten', href: '/themen/mdk-begutachtung' },
        { label: 'Verhinderungspflege nutzen', href: '/themen/verhinderungspflege' },
        { label: 'Entlastungsbudget', href: '/themen/entlastungsbudget' },
      ],
    },
  },

  // === Thema 3: Entlastungsbudget ==============================================
  {
    slug: 'entlastungsbudget',
    title: 'Entlastungsbudget',
    short: '125 € im Monat — oft ungenutzt, aber zustehend.',
    metaTitle: 'Entlastungsbudget – 125 € monatlich richtig nutzen',
    metaDescription: 'Entlastungsbetrag nach § 45b SGB XI: 125 € pro Monat für Betreuung. Wir erklären, wofür Sie ihn nutzen können und wie die Abrechnung funktioniert.',
    h1: 'Entlastungsbudget — 125 € pro Monat, oft nicht genutzt',
    primaryKeyword: 'Entlastungsbudget',
    detail: {
      intro: [
        '125 € pro Monat. Pro Jahr macht das 1.500 €. Dieses Geld steht Ihnen zu, wenn ein Pflegegrad ab 1 besteht — und es bleibt in den meisten Familien ungenutzt. Wir erklären, was Sie damit machen können und wie die Abrechnung funktioniert.',
      ],
      sections: [
        {
          heading: 'Was ist der Entlastungsbetrag?',
          paragraphs: [
            'Der Entlastungsbetrag nach § 45b SGB XI ist eine zweckgebundene Leistung für „Leistungen zur Entlastung". Gemeint sind Angebote, die die Pflegeperson entlasten und die pflegebedürftige Person fördern.',
            'Höhe: 125 € pro Monat ab Pflegegrad 1.',
          ],
        },
        {
          heading: 'Wofür kann ich das Geld nutzen?',
          paragraphs: ['Nicht für alles. Erstattungsfähig sind nur Leistungen von anerkannten Anbietern nach § 45a SGB XI — also nicht jede beliebige Hilfe.'],
          stronglist: [
            { label: 'Typisch genutzt für', text: 'stundenweise Betreuung durch zertifizierte Betreuungsdienste, Tagespflege (oft anteilig kombiniert), Kurzzeitpflege (bis 50 % übertragbar), Haushaltshilfen durch anerkannte Dienste, Angebote zur Unterstützung im Alltag (Demenzbegleiter, Alltagshelfer).' },
            { label: 'Nicht erstattungsfähig', text: 'private Hilfen ohne Trägerstatus, klassische Pflegekräfte (das läuft über Pflegegeld/Sachleistung), Heimkosten und Kosten stationärer Behandlung.' },
          ],
        },
        {
          heading: 'Wie die Abrechnung läuft',
          paragraphs: [
            'Sie zahlen erst, der Anbieter stellt eine Rechnung aus, Sie reichen die Rechnung bei der Pflegekasse ein, die Pflegekasse erstattet Ihnen die Kosten — bis zu 125 € pro Monat.',
            'Wichtig: Nicht verbrauchte Beträge können bis zum 30. Juni des Folgejahres nachgenutzt werden. Wer also Januar bis Dezember keine 125 € pro Monat ausgibt, kann den Rest bis 30.06. nutzen. Danach verfällt der Rest.',
          ],
        },
        {
          heading: 'Wie wir Sie unterstützen können',
          paragraphs: [
            'Wir sind als anerkannter Anbieter nach § 45a SGB XI nicht aktiv (das wäre ein anderes Geschäftsmodell). Wir beraten Sie aber, welche anerkannten Anbieter in Berlin gut sind und wie Sie Ihre 125 € optimal kombinieren.',
          ],
        },
      ],
      faq: [
        { question: 'Steht der Entlastungsbetrag auch bei Pflegegrad 1?', answer: 'Ja. Pflegegrad 1 ist sogar darauf angewiesen — andere Geldleistungen gibt es bei Pflegegrad 1 nicht.' },
        { question: 'Kann ich das Geld einfach bar einsetzen?', answer: 'Nein. Sie zahlen den Anbieter, der eine Rechnung stellt; die Pflegekasse erstattet Ihnen den Betrag.' },
        { question: 'Was passiert, wenn ich 125 € nicht jeden Monat brauche?', answer: 'Der Rest sammelt sich an und kann bis zum 30. Juni des Folgejahres genutzt werden.' },
        { question: 'Können Sie diese Leistung anbieten?', answer: 'Wir sind kein anerkannter § 45a-Anbieter, aber wir helfen, einen geeigneten zu finden.' },
      ],
      cta: { text: 'Pflegeberatung anfragen', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Verhinderungspflege', href: '/themen/verhinderungspflege' },
        { label: 'Pflegegrad beantragen', href: '/themen/pflegegrad-beantragen' },
      ],
    },
  },

  // === Thema 4: MDK-Begutachtung ===============================================
  {
    slug: 'mdk-begutachtung',
    title: 'MDK-Begutachtung',
    short: 'Worauf es beim Termin mit dem Medizinischen Dienst ankommt.',
    metaTitle: 'MDK-Begutachtung vorbereiten – Tipps vom Pflegeprofi',
    metaDescription: 'Vor der MDK-Begutachtung: Was wichtig ist, was Sie dokumentieren sollten, welche Fehler vermieden werden. Mit Checkliste.',
    h1: 'MDK-Begutachtung vorbereiten — worauf es ankommt',
    primaryKeyword: 'MDK Begutachtung',
    detail: {
      intro: [
        'Die Begutachtung durch den Medizinischen Dienst (MD, früher MDK) entscheidet darüber, welchen Pflegegrad Sie bekommen. Und damit, ob Sie 332 € oder 947 € monatlich Pflegegeld erhalten — und welche weiteren Leistungen Ihnen zustehen.',
        'Eine gute Vorbereitung kann den Unterschied zwischen einem und zwei Pflegegraden ausmachen. Wir erklären, worauf es ankommt.',
      ],
      sections: [
        {
          heading: 'Was beim Termin passiert',
          paragraphs: ['Der*die Gutachter*in kommt zu Ihnen nach Hause. Der Termin dauert 1-2 Stunden. Bewertet wird die Selbstständigkeit in sechs Modulen:'],
          list: [
            'Mobilität (10 % Gewichtung) — Aufstehen, Gehen, Treppensteigen.',
            'Kognitive und kommunikative Fähigkeiten (15 % oder 7,5 %) — Erkennen, Orientieren, Mitteilen.',
            'Verhalten und psychische Problemlagen (gemeinsam mit 2: 15 %) — Aggression, Ängste, Wahn.',
            'Selbstversorgung (40 %) — Körperpflege, Essen, Kleiden.',
            'Bewältigung von und selbstständiger Umgang mit krankheits-/therapiebedingten Anforderungen (20 %) — Medikamente, Verbandwechsel.',
            'Gestaltung des Alltagslebens und sozialer Kontakte (15 %) — Planung, Beschäftigung, Sozialkontakte.',
          ],
          trailingParagraphs: ['Pro Modul wird ein Punktwert ermittelt, alle Module zusammen ergeben einen Gesamtpunktwert, der dem Pflegegrad zugeordnet wird.'],
        },
        {
          heading: 'Vier häufige Fehler bei der Begutachtung',
          stronglist: [
            { label: 'Fehler 1: Schamhaft auftreten', text: 'Viele Pflegebedürftige spielen vor Fremden ihre Defizite herunter — aus Stolz, aus Höflichkeit. Das wird vom Gutachter notiert und führt zu zu niedrigem Pflegegrad. Sagen Sie ehrlich, was nicht mehr geht.' },
            { label: 'Fehler 2: Angehörige übernehmen die Antworten', text: 'Der Gutachter soll die Person selbst beurteilen können. Wenn Sie als Angehörige*r ständig einspringen, wird das als gute Kommunikationsfähigkeit gewertet.' },
            { label: 'Fehler 3: Keine Dokumentation vorbereiten', text: 'Ein Pflegetagebuch über mindestens eine Woche zeigt konkret, wo der Bedarf besteht. Befunde, Arztberichte, Medikamentenliste — alles griffbereit auf dem Tisch.' },
            { label: 'Fehler 4: Den Termin auf einen guten Tag legen', text: 'Viele Demente sind morgens orientierter als nachmittags. Wenn Sie morgens den Termin vereinbaren, sieht der Gutachter den Klienten vielleicht in seinem besten Moment — und unterschätzt den Bedarf.' },
          ],
        },
        {
          heading: 'Checkliste für den MDK-Termin',
          list: [
            'Pflegetagebuch über 1-2 Wochen (was wird gemacht, wann, wie lange).',
            'Liste aller Medikamente (Name, Dosis, Häufigkeit).',
            'Alle aktuellen Arztberichte und Befunde.',
            'Hilfsmittelübersicht (Rollator, Bett, Inkontinenz-Versorgung).',
            'Liste aller Pflegehilfen, die bereits geleistet werden.',
            'Schwerbehindertenausweis (falls vorhanden).',
            'Versicherungskarte und Pflegegradantrag.',
          ],
          paragraphs: ['Wenn möglich: eine Person dabeihaben, die mitschreibt — nicht antwortet.'],
        },
        {
          heading: 'Wenn Sie unsicher sind',
          paragraphs: ['Wir bieten Begleitung bei MDK-Terminen an. Unser*e Mitarbeiter*in nimmt am Termin teil, stellt fundierte Fragen, fügt Beobachtungen hinzu, schützt vor Unterbewertung. Die Konditionen besprechen wir im Erstgespräch.'],
        },
      ],
      faq: [
        { question: 'Darf jemand beim MDK-Termin dabei sein?', answer: 'Ja. Es ist sogar empfohlen — sowohl eine Angehörige als auch eine externe Begleitung wie wir.' },
        { question: 'Was passiert, wenn ich mit dem Bescheid nicht einverstanden bin?', answer: 'Sie können innerhalb von 4 Wochen formlos Widerspruch einlegen.' },
        { question: 'Wie oft kann der Pflegegrad neu begutachtet werden?', answer: 'Bei Verschlechterung jederzeit. Bei einer Routine-Wiederholung in der Regel alle 1-2 Jahre.' },
        { question: 'Wer entscheidet am Ende über den Pflegegrad?', answer: 'Die Pflegekasse — auf Basis des MDK-Gutachtens. Sie kann theoretisch davon abweichen, tut es aber selten.' },
        { question: 'Was kostet die Vorbereitung?', answer: 'Erstgespräch kostenlos. Tiefere Beratung und MDK-Begleitung kalkulieren wir nach Aufwand und Setting — die jeweilige Größenordnung erfahren Sie direkt im Erstgespräch.' },
      ],
      cta: { text: 'Pflegeberatung anfragen', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Pflegegrad beantragen', href: '/themen/pflegegrad-beantragen' },
        { label: 'Pflegeberatung Berlin', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === Thema 7: Wohnungsauflösung im Pflegefall ================================
  {
    slug: 'wohnungsaufloesung-pflegefall',
    title: 'Wohnungsauflösung im Pflegefall',
    short: 'Wenn die Wohnung aufgelöst werden muss — mit Würde.',
    metaTitle: 'Wohnungsauflösung Pflegefall Berlin – mit Diskretion',
    metaDescription: 'Wohnung auflösen, wenn Pflege kommt: Was wichtig ist, was bleibt, was zu organisieren ist. Mit Empfehlungen für Berlin.',
    h1: 'Wohnungsauflösung im Pflegefall — mit Würde, mit Plan',
    primaryKeyword: 'Wohnungsauflösung Pflegefall',
    detail: {
      intro: [
        'Wenn die Wohnung aufgegeben werden muss, weil Pflege ins Heim oder in eine neue Wohnform umzieht, ist das nie nur eine logistische Aufgabe. Es ist das Ende einer Lebensphase, oft auch das Ende einer Identität. Das verdient mehr Aufmerksamkeit als nur die Frage, wer die Möbel abholt.',
      ],
      sections: [
        {
          heading: 'Wann eine Wohnungsauflösung ansteht',
          list: [
            'Heimumzug — dauerhafter Wechsel in eine stationäre Einrichtung.',
            'Umzug zu Familie — wenn Pflege zu Hause nicht mehr alleine möglich ist.',
            'Umzug in altersgerechtes Wohnen — z. B. Service-Wohnen, betreutes Wohnen.',
            'Nach dem Tod — Erbinnen und Erben müssen die Wohnung leeren.',
          ],
        },
        {
          heading: 'Was zu organisieren ist',
          stronglist: [
            { label: 'Logistik', text: 'Möbel sortieren (behalten, verschenken, verkaufen, entsorgen), Entsorgungsfirma, Wohnungsendreinigung, Schlüsselübergabe.' },
            { label: 'Verträge', text: 'Mietverhältnis kündigen, Strom/Gas/Wasser kündigen, Telefon/Internet kündigen, Rundfunkbeitrag, Versicherungen prüfen.' },
            { label: 'Behördliches', text: 'Ummeldung beim Einwohnermeldeamt, Pflegekasse über neue Adresse informieren, Krankenkasse, Rentenversicherung.' },
            { label: 'Persönliches', text: 'Was sind die wichtigen Dinge, die mit umziehen müssen? Welche Erinnerungsstücke werden behalten? Wer in der Familie bekommt was?' },
          ],
        },
        {
          heading: 'Was wir konkret tun können',
          paragraphs: ['Wir sind kein Möbelhändler und keine Entsorgungsfirma. Aber wir kennen gute Anbieter in Berlin und vermitteln. Was wir konkret bieten:'],
          stronglist: [
            { label: 'Begleitung der pflegebedürftigen Person beim Umzug', text: 'Wir bleiben da, wir beruhigen, wir helfen orientieren. Wir gehen mit ins neue Zuhause und begleiten die ersten Tage.' },
            { label: 'Sortier-Hilfe für Wertsachen', text: 'Mit Diskretion — was an Bargeld, Schmuck, Dokumenten in der Wohnung verstreut ist, sammeln wir mit der Familie zusammen.' },
            { label: 'Organisationshilfe für Angehörige', text: 'Wer nicht in Berlin lebt, kann uns beauftragen, einzelne Termine vor Ort wahrzunehmen (z. B. Schlüsselübergabe an Vermieter, Übergabe an Entsorgungsfirma).' },
          ],
        },
        {
          heading: 'Was es kostet',
          paragraphs: [
            'Pauschalpreise gibt es bei uns nicht für diese Leistung — der Aufwand ist zu individuell. Beratung und Koordination, die Begleitung der pflegebedürftigen Person beim Umzug, das Sortieren der Wertsachen, die Vermittlung externer Anbieter (Entrümpler, Endreinigung) — alle Bausteine werden nach Aufwand kalkuliert. Im Erstgespräch besprechen wir, was wirklich gebraucht wird, und nennen Ihnen eine konkrete Summe pro Baustein.',
            'Kosten externer Anbieter (Entrümpler etc.) legen wir transparent als Anlage zur Rechnung bei.',
          ],
        },
      ],
      faq: [
        { question: 'Können Sie die Wohnung ganz alleine räumen?', answer: 'Wir koordinieren und begleiten — die eigentliche Räumung übernehmen unsere Partner-Firmen.' },
        { question: 'Wie geht das mit Wertgegenständen?', answer: 'Diskret und nachvollziehbar. Wir bilden ein Inventar und übergeben es der Familie. Wertvolles bleibt unter Verschluss bis zur Übergabe.' },
        { question: 'Helfen Sie auch bei Wohnungsauflösung nach einem Todesfall?', answer: 'Ja. Das ist sogar einer der häufigsten Anlässe.' },
        { question: 'Was passiert mit Möbeln, die noch gut sind?', answer: 'Wir vermitteln an gemeinnützige Vereine (Berliner Stadtmission, Caritas, Diakonie) oder seriöse Auktionshäuser, je nach Wert.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegeberatung Berlin', href: '/leistungen/pflegeberatung-berlin' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung', note: 'als Alternative zum Heimumzug' },
      ],
    },
  },
];

export function getThema(slug: string): SeoThema | undefined {
  return THEMEN.find((t) => t.slug === slug);
}
