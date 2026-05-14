/**
 * Recruiting-Seiten (Briefing TEIL 6). Holen Pflegekräfte ab, die *weg vom
 * typischen Pflegejob* wollen. Statt „Wir suchen Pflegefachkräfte" reden
 * wir über das, was Bewerber*innen wirklich umtreibt: Schichtdienst,
 * körperliche Belastung, Zeitdruck, Sinn der Arbeit.
 */

import type { SeoLeistungDetail } from './leistungen-seo';

export type SeoKarriere = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  detail: SeoLeistungDetail;
};

export const KARRIERE: readonly SeoKarriere[] = [
  // === 1. Pflegejob ohne Schichtdienst ========================================
  {
    slug: 'pflegejob-ohne-schichtdienst',
    title: 'Pflegejob ohne Schichtdienst',
    short: 'Endlich Pflege ohne klassischen 3-Schicht-Wechsel.',
    metaTitle: 'Pflegejob ohne Schichtdienst Berlin — Feste Zeiten',
    metaDescription: 'Endlich Pflege ohne klassischen 3-Schicht-Wechsel. Wir bieten feste Schichtmodelle und 1:1-Betreuung in Berlin. Jetzt bewerben.',
    h1: 'Pflegejob ohne Schichtdienst in Berlin',
    primaryKeyword: 'Pflegejob ohne Schichtdienst',
    detail: {
      intro: [
        'Endlich planbare Arbeitszeiten. Ohne Frühdienst um 6 nach Spätdienst bis 22. Ohne 7 Tage am Stück und dann 3 Tage frei und dann wieder 6 Tage. Ohne das Gefühl, dass das Leben außerhalb der Arbeit auf den Dienstplan warten muss.',
        'Wir bei der Heilpraxis Frommholz arbeiten anders. Bei uns gibt es feste Dienstmodelle — und Sie können wählen, was zu Ihrem Leben passt.',
      ],
      sections: [
        {
          heading: 'Welche Modelle wir anbieten',
          stronglist: [
            { label: 'Tagdienst mit festen Stunden', text: 'z. B. Mo-Fr 9-17 oder Di-Fr 8-16:30. Ideal für Mitarbeitende mit Kindern oder anderen Verpflichtungen, die nachts und am Wochenende frei haben wollen.' },
            { label: 'Reine Nachtdienste', text: 'z. B. Mo, Mi, Fr von 22-6 Uhr. Für Menschen, die gerne nachts arbeiten und tagsüber Familie oder andere Aktivitäten haben.' },
            { label: 'Wochenend-Spezialisten', text: 'Sa und So plus 1-2 Werktage. Mit attraktivem Sonntagszuschlag (50 %). Ideal als zweites Standbein.' },
            { label: 'Schicht-Blöcke nach Vereinbarung', text: 'z. B. 3-Tage-Blöcke 12-Stunden-Schichten in der 24-Stunden-Betreuung, dann 3 Tage frei. Klassisches Modell aus der ambulanten Intensivpflege.' },
            { label: 'Bedarfs-Verfügbarkeit', text: 'Sie sagen, wann Sie können, wir planen ein. Mindestens 10-15 Stunden pro Woche.' },
          ],
        },
        {
          heading: 'Was Sie verdienen',
          paragraphs: ['Stundensätze richten sich nach Qualifikation:'],
          stronglist: [
            { label: 'Pflegehilfskraft mit Erfahrung', text: 'ab 18–22 €/h.' },
            { label: 'Examinierte Pflegekraft', text: 'ab 25–30 €/h.' },
            { label: 'Spezialqualifikation (z. B. Palliative Care, Demenzbegleitung)', text: 'ab 28–32 €/h.' },
          ],
          trailingParagraphs: ['Plus Zuschläge: Nacht (22-6 Uhr) 25 %, Sonntag 50 %, Feiertag 100 %.'],
        },
        {
          heading: 'Was Sie tun',
          paragraphs: [
            'Stundenweise oder schichtweise 1:1-Betreuung von Selbstzahler-Klient*innen in Berlin. Konkret: Sitzwachen, Nachtwachen, Begleitung in Krankenhaus und Hospiz, Pflege zu Hause. Klassische ambulante Pflege in mehreren Wohnungen pro Schicht machen wir nicht.',
          ],
        },
        {
          heading: 'Welche Qualifikation Sie mitbringen sollten',
          stronglist: [
            { label: 'Mindestens', text: 'Erfahrung in der Pflege oder Betreuung. Persönliche Eignung (Ruhe, Verlässlichkeit, Diskretion). Polizeiliches Führungszeugnis.' },
            { label: 'Wünschenswert', text: 'Examen als Pflegefachkraft. Erfahrung in Psychiatrie, Palliative Care, Demenzbegleitung. Führerschein.' },
          ],
        },
      ],
      faq: [
        { question: 'Ist das wirklich realistisch — Pflege ohne Schichtdienst?', answer: 'Ja — in unserem Modell. Wir können das, weil wir keine 24/7-Stationsversorgung machen, sondern individuelle Betreuung im Auftrag von Selbstzahlern. Schichtdienst ist keine Notwendigkeit unseres Modells.' },
        { question: 'Verdiene ich weniger als in der Klinik?', answer: 'Brutto pro Stunde meist mehr. Brutto pro Monat hängt von Ihrer Stundenzahl ab — wenn Sie 100 % arbeiten, kommen Sie auf ein Klinik-vergleichbares Einkommen mit deutlich weniger Belastung.' },
        { question: 'Bekomme ich genug Stunden?', answer: 'Wir haben deutlich mehr Anfragen als wir Kräfte haben — Stunden gibt es, soviel Sie wollen.' },
      ],
      cta: { text: 'Jetzt bewerben', href: 'mailto:simeon@heilpraxis-frommholz.de' },
      relatedLinks: [
        { label: 'Alle Stellenkonzepte', href: '/karriere' },
        { label: 'Pflege ohne Zeitdruck', href: '/karriere/pflege-ohne-zeitdruck' },
        { label: 'In der Rente weiterarbeiten', href: '/karriere/in-der-rente-weiterarbeiten' },
      ],
    },
  },

  // === 2. Pflege ohne Zeitdruck ===============================================
  {
    slug: 'pflege-ohne-zeitdruck',
    title: 'Pflege ohne Zeitdruck',
    short: 'Pflege im Stundenmodell statt Akkord — Zeit für die Menschen.',
    metaTitle: 'Pflege ohne Zeitdruck Berlin — Zeit für Menschen',
    metaDescription: 'Pflege im Stundenmodell statt Akkord. Bei uns gibt es echte Zeit für die zu pflegende Person. Selbstzahler-Pflege Berlin.',
    h1: 'Pflegejob ohne Zeitdruck — endlich Zeit für die Menschen',
    primaryKeyword: 'Pflege ohne Zeitdruck',
    detail: {
      intro: [
        'Im klassischen ambulanten Pflegedienst sind 15 Minuten pro Tour-Stopp keine Seltenheit. Frau Müller waschen: 8 Minuten. Herrn Schulze mobilisieren: 6 Minuten. Frau Petersen Insulin geben: 3 Minuten plus 2 Minuten Dokumentation. Im Krankenhaus sieht es ähnlich aus — eine Pflegekraft versorgt 8-12 Patient*innen gleichzeitig.',
        'Das ist kein Pflegeberuf, das ist Pflege-Akkord. Wir machen es anders.',
      ],
      sections: [
        {
          heading: 'Wie wir arbeiten',
          paragraphs: [
            'Bei uns arbeiten Sie in Stunden-Blöcken mit einer Person pro Schicht. Konkret heißt das: Sie haben 4, 6, 8 oder 12 Stunden Zeit für eine einzige zu pflegende Person.',
            'Sie haben Zeit, beim Frühstück zu sitzen, statt nur das Brötchen zu reichen. Sie haben Zeit, gemeinsam zum Bäcker zu spazieren, statt nur die Lagerung im Bett zu wechseln. Sie haben Zeit, das Gespräch zu führen, das Ihre Klient*innen führen wollen — über die Vergangenheit, über die Kinder, über die Sorgen, über die Erinnerungen.',
            'Das ist Pflege, wie sie eigentlich gemeint war.',
          ],
        },
        {
          heading: 'Beispiel: 5 Stunden Begleitung im Hansaviertel',
          stronglist: [
            { label: '09:00', text: 'Ankunft, Schlüssel, leiser Eintritt. Frau Petersen sitzt schon im Sessel.' },
            { label: '09:15', text: 'Gemeinsamer Tee. Plauderei über die Nacht.' },
            { label: '10:00', text: 'Toilettengang, leichte Körperpflege.' },
            { label: '10:30', text: 'Spaziergang im Tiergarten. Frau Petersen geht am Stock, wir nehmen uns Zeit.' },
            { label: '11:30', text: 'Zurück in der Wohnung, Frau Petersen ruht sich aus.' },
            { label: '12:00', text: 'Gemeinsames Mittagessen, vorbereitet von der Tochter.' },
            { label: '13:00', text: 'Lesepause, gemeinsam und still.' },
            { label: '14:00', text: 'Übergabe an die Tochter. Eintrag ins Dokumentations-Heft.' },
          ],
          trailingParagraphs: ['Das ist Pflege. Keine 8 Tour-Stopps, kein gehetztes Aus-der-Tür-Rennen, keine Erschöpfung am Ende der Schicht.'],
        },
        {
          heading: 'Was Sie verdienen',
          paragraphs: ['Stundensätze ab 22 € (Pflegehilfskraft mit Erfahrung) bis 30 € (Examinierte Pflegekraft mit Spezialqualifikation), plus Zuschläge nach § 3b EStG.'],
        },
      ],
      faq: [
        { question: 'Funktioniert das auch bei pflegerisch anspruchsvollen Klient*innen?', answer: 'Ja. Bei höherem Pflegebedarf setzen wir entsprechend qualifizierte Kräfte ein. Der Zeitrahmen bleibt großzügig.' },
        { question: 'Bekomme ich Pausen?', answer: 'Bei Schichten ab 6 Stunden gesetzlich vorgesehen 30 Minuten, bei 9+ Stunden 45 Minuten. Diese sind bei uns vergütet, wenn Sie nicht weg können.' },
        { question: 'Was, wenn ich die zu pflegende Person nicht mag?', answer: 'Das passiert. Sagen Sie uns das — wir wechseln Sie auf eine andere Klientin. Wir machen das nicht heimlich, sondern offen.' },
      ],
      cta: { text: 'Jetzt bewerben', href: 'mailto:simeon@heilpraxis-frommholz.de' },
      relatedLinks: [
        { label: 'Alle Stellenkonzepte', href: '/karriere' },
        { label: 'Pflegejob ohne Schichtdienst', href: '/karriere/pflegejob-ohne-schichtdienst' },
      ],
    },
  },

  // === 3. Pflege ohne körperliche Belastung ====================================
  {
    slug: 'pflege-ohne-koerperliche-belastung',
    title: 'Pflege ohne körperliche Belastung',
    short: 'Sitzwachen und Begleitung statt Lagerung im Akkord.',
    metaTitle: 'Pflege ohne körperliche Belastung Berlin — 1:1 statt Schwerstpflege',
    metaDescription: 'Sitzwachen und Begleitung statt Lagerung im Akkord. Pflegejob mit deutlich reduzierter körperlicher Belastung in Berlin.',
    h1: 'Pflegejob mit deutlich reduzierter körperlicher Belastung',
    primaryKeyword: 'Pflege ohne körperliche Belastung',
    detail: {
      intro: [
        'Klassische Pflege ist körperlich hart. Lagern, Hochziehen, Heben, Mobilisieren — jeden Tag, oft am Limit des Belastbaren. Viele Pflegekräfte müssen mit Mitte 50 raus, weil der Rücken nicht mehr mitmacht.',
        'Bei uns ist das anders. Ein Großteil unserer Tätigkeit ist Anwesenheit, Beobachtung und Begleitung — keine Schwerstarbeit am Bett.',
      ],
      sections: [
        {
          heading: 'Was körperlich anders ist bei uns',
          stronglist: [
            { label: 'Sitzwachen', text: 'Hier ist die Hauptaufgabe das Wachsein und die Anwesenheit. Bei Bedarf wird beruhigt, geholfen, dokumentiert. Physisch wenig anstrengend.' },
            { label: 'Begleitung zu Hause', text: 'Beim Essen begleiten, beim Spaziergang, beim Vorlesen. Es gibt Pflege-Tätigkeiten — aber nicht im Tour-Akkord, sondern mit Zeit.' },
            { label: 'Nachtwachen', text: 'Anwesenheit, Beobachtung, gelegentliche Toiletten-Hilfe. Selten Schwerstpflege.' },
            { label: 'Pflegeberatung', text: 'Beratung im Gespräch — körperlich gar nicht anstrengend.' },
          ],
        },
        {
          heading: 'Wo körperliche Belastung trotzdem vorkommt',
          paragraphs: [
            'Wir machen auch klassische Pflege, vor allem in der 24-Stunden-Betreuung. Wenn Sie ausdrücklich körperliche Belastung vermeiden wollen, klären wir das vor Vertragsabschluss und setzen Sie nur in den weniger belastenden Tätigkeiten ein:',
          ],
          list: [
            'Sitzwachen.',
            'Nachtwachen mit Bereitschaft.',
            'Stundenweise Begleitung.',
            'Pflegeberatung.',
          ],
        },
        {
          heading: 'Wer das suchen sollte',
          list: [
            'Pflegekräfte mit Rückenproblemen, die nicht mehr im Akkord arbeiten können.',
            'Pflegekräfte, die aus der Klinik in einen weniger belastenden Bereich wollen.',
            'Ältere Pflegekräfte, die ihre Berufslaufzeit verlängern wollen.',
            'Pflegekräfte, die aus körperlichen Gründen aus dem Beruf aussteigen würden.',
          ],
        },
        {
          heading: 'Was Sie verdienen',
          paragraphs: ['Wie bei den anderen Stellen: Pflegehilfskraft ab 18-22 €/h, Examinierte ab 25-30 €/h, plus Zuschläge.'],
        },
      ],
      faq: [
        { question: 'Muss ich gar nichts mehr heben?', answer: 'Komplett ohne Heben geht es bei Sitzwachen meistens. Aber: Eine Person kann beim Aufstehen umfallen — dann müssen Sie reagieren. Wir können „nie schwerheben" nicht garantieren, aber „selten schwerheben" schon.' },
        { question: 'Kann ich nach einem Bandscheiben-Vorfall bei Ihnen arbeiten?', answer: 'Ja — viele unserer Mitarbeitenden sind so zu uns gekommen. Wir setzen Sie da ein, wo Sie sicher sind.' },
        { question: 'Werden Sie mich auf 24-Stunden-Schichten setzen?', answer: 'Nur wenn Sie es wollen. Wir haben genug Sitzwachen und Begleitungen, sodass „nur das" für Sie reichen kann.' },
      ],
      cta: { text: 'Jetzt bewerben', href: 'mailto:simeon@heilpraxis-frommholz.de' },
      relatedLinks: [
        { label: 'Alle Stellenkonzepte', href: '/karriere' },
        { label: 'Pflegejob ohne Schichtdienst', href: '/karriere/pflegejob-ohne-schichtdienst' },
        { label: 'In der Rente weiterarbeiten', href: '/karriere/in-der-rente-weiterarbeiten' },
      ],
    },
  },

  // === 4. In der Rente weiterarbeiten ==========================================
  {
    slug: 'in-der-rente-weiterarbeiten',
    title: 'In der Rente weiterarbeiten',
    short: 'Stundenweise, flexibel, mit Sinn — auch nach der Rente in der Pflege.',
    metaTitle: 'Pflegejob für Rentnerinnen Berlin — 1:1-Betreuung',
    metaDescription: 'Auch nach der Rente weiterhin in der Pflege tätig. Stundenweise, flexibel, mit Sinn. Heilpraxis Frommholz Berlin.',
    h1: 'In der Rente weiter in der Pflege arbeiten — mit Sinn, ohne Druck',
    primaryKeyword: 'Pflegejob für Rentner',
    detail: {
      intro: [
        'Sie sind in Rente. Oder kurz davor. Aber Sie wollen noch nicht aufhören — nicht ganz, nicht völlig. Sie wollen etwas tun, was Sinn hat, was Sie beherrschen, was zu Ihrem Leben passt.',
        'Wir suchen Menschen wie Sie. Pflegekräfte und Pflegehilfskräfte mit langjähriger Erfahrung, die in der Rente noch stundenweise tätig sein möchten — oft, weil sie der Pflege etwas zurückgeben wollen, das sie selbst nicht mehr aus dem System schöpfen müssen.',
      ],
      sections: [
        {
          heading: 'Was das für Sie heißt',
          stronglist: [
            { label: 'Sie bestimmen die Zeit', text: '5 Stunden pro Woche? 15? 25? Nach Verfügbarkeit. Wir planen langfristig.' },
            { label: 'Sie bestimmen das Modell', text: 'Sitzwachen am Wochenende? Nachmittag-Begleitungen im Kiez? Nachtwachen, weil Sie eh nicht durchschlafen? Wir finden eine Konstellation, die zu Ihnen passt.' },
            { label: 'Sie haben Erfahrung — wir schätzen das', text: 'Pflegekräfte, die 30 Jahre oder länger im Beruf waren, bringen einen Schatz mit, der nicht durch Schulungen ersetzt werden kann. Wir setzen Sie da ein, wo Ihre Erfahrung gebraucht wird.' },
          ],
        },
        {
          heading: 'Was Sie verdienen',
          paragraphs: [
            'Seit 2023 gilt keine Hinzuverdienstgrenze mehr für Altersrentner*innen. Sie können also so viel arbeiten, wie Sie wollen, ohne dass die Rente gekürzt wird.',
            'Stundensätze: 18–30 €/h je nach Qualifikation. Plus Zuschläge. Mit 10 Stunden pro Woche zu üblichen Sätzen sind 800–1.200 € monatlich brutto realistisch.',
          ],
        },
        {
          heading: 'Was Sie tun',
          paragraphs: [
            'Stundenweise 1:1-Betreuung, oft mit Klient*innen, die zu Ihnen passen — zum Beispiel andere Senior*innen, die jemanden brauchen, mit dem sie auf Augenhöhe reden können.',
            'Viele unserer Klient*innen sind 75+. Eine 68-jährige Pflegerin mit Lebenserfahrung ist da oft besser am Platz als eine 25-jährige Berufsanfängerin.',
          ],
        },
      ],
      faq: [
        { question: 'Muss ich noch versichert sein?', answer: 'Wenn Sie angestellt arbeiten, sind Sie über uns kranken-, renten- und arbeitslosenversichert. Beiträge fließen weiter — bei Renterninnen oft begrenzt sinnvoll, kann aber Rentenansprüche leicht erhöhen.' },
        { question: 'Können Sie meine Steuer- und Sozialversicherungs-Pflichten erklären?', answer: 'Im Erstgespräch ja. Genaues mit Steuerberatung klären, wir kennen die Grundlagen.' },
        { question: 'Was, wenn ich plötzlich aussteigen will?', answer: 'Schreiben Sie uns. Wir lösen den Vertrag nach Absprache auf — keine Mindestlaufzeit, kein Druck.' },
      ],
      cta: { text: 'Jetzt bewerben', href: 'mailto:simeon@heilpraxis-frommholz.de' },
      relatedLinks: [
        { label: 'Alle Stellenkonzepte', href: '/karriere' },
        { label: 'Pflegejob ohne Schichtdienst', href: '/karriere/pflegejob-ohne-schichtdienst' },
        { label: 'Pflege ohne körperliche Belastung', href: '/karriere/pflege-ohne-koerperliche-belastung' },
      ],
    },
  },

  // === 5. Bezahltes Ehrenamt ===================================================
  {
    slug: 'bezahltes-ehrenamt',
    title: 'Bezahltes Ehrenamt: Sitzwachen',
    short: 'Sitzwachen und Begleitung als bezahltes Ehrenamt.',
    metaTitle: 'Bezahltes Ehrenamt Berlin — Sitzwachen mit Sinn',
    metaDescription: 'Sitzwachen und Begleitung als bezahltes Ehrenamt. Ideal für Studierende, Quereinsteiger*innen, Sinnsuchende. Berlin.',
    h1: 'Bezahltes Ehrenamt: Sitzwachen bei Heilpraxis Frommholz',
    primaryKeyword: 'Bezahltes Ehrenamt Berlin',
    detail: {
      intro: [
        'Es gibt Menschen, die nicht in der Pflege ausgebildet sind, aber die das Wesentliche mitbringen: Ruhe, Aufmerksamkeit, Bereitschaft, einfach da zu sein. Wir nennen das „bezahltes Ehrenamt", weil es eine Tätigkeit ist, die im Charakter ehrenamtlich ist — aber bezahlt wird.',
        'Wir suchen solche Menschen für Sitzwachen.',
      ],
      sections: [
        {
          heading: 'Was Sitzwachen tun',
          paragraphs: [
            'Sie sitzen am Bett. Sie sind da. Sie reden, wenn jemand reden will. Sie schweigen, wenn jemand schweigen will. Sie halten die Hand. Sie rufen die Pflege, wenn etwas Pflegerisches ansteht. Sie rufen den Notarzt, wenn etwas Medizinisches ansteht.',
            'Sie tun, was eine vertraute Person tun würde, die zufällig nicht da sein kann.',
          ],
        },
        {
          heading: 'Wer das macht',
          list: [
            'Studierende der Medizin, Psychologie, Sozialer Arbeit, Pflege.',
            'Quereinsteiger*innen mit Lebenserfahrung und ruhigem Temperament.',
            'Menschen, die nach einer Lebenskrise wieder in einen sinnstiftenden Tätigkeitsbereich kommen wollen.',
            'Menschen, die einen kranken oder sterbenden Angehörigen begleitet haben und das in ihre Arbeit einbringen wollen.',
            'Theologiestudierende, junge Seelsorger*innen, Praktizierende meditativer Traditionen.',
            'Schauspielerinnen und Künstlerinnen, die zwischen Engagements ein zweites Standbein wollen.',
          ],
        },
        {
          heading: 'Was Sie verdienen',
          paragraphs: ['Sitzwachen werden bei uns mit 16–20 €/h vergütet, je nach Vorerfahrung. Zuschläge bei Nacht- und Wochenenddiensten: Nacht (22-6) +25 %, Sonntag +50 %.'],
          trailingParagraphs: ['Eine 8-Stunden-Nachtwache am Sonntag bringt also brutto ca. 200–280 €.'],
        },
        {
          heading: 'Was Sie können müssen',
          list: [
            'Im Krisensituationen ruhig bleiben.',
            'Beobachten und sachlich beschreiben (Pflege rufen mit „Frau Müller hat einen Hustenanfall" und nicht „Frau Müller stirbt!").',
            'Diskretion (was in der Wohnung gesehen wird, bleibt dort).',
            'Verlässlichkeit (wenn Sie zugesagt haben, sind Sie da).',
            'Polizeiliches Führungszeugnis vorlegen.',
          ],
        },
        {
          heading: 'Wie das praktisch läuft',
          stronglist: [
            { label: 'Einarbeitung', text: 'Wir geben Ihnen eine kompakte Einführung in 1-2 Tagen (bezahlt). Sie lernen, was zu beobachten ist, wie Sie dokumentieren, wann Sie wen rufen.' },
            { label: 'Erste Einsätze in Begleitung', text: 'Ihre ersten 2-3 Sitzwachen machen Sie zusammen mit einer erfahrenen Kollegin.' },
            { label: 'Dann selbstständig', text: 'Sie bekommen Einsätze über unsere Disposition. Sie sagen, an welchen Tagen Sie wie viele Stunden Zeit haben — wir buchen Sie ein.' },
          ],
        },
      ],
      faq: [
        { question: 'Brauche ich eine Ausbildung?', answer: 'Nein. Lebensreife und Eignung zählen. Pflegerische Tätigkeiten machen Sie nicht.' },
        { question: 'Wie viel kann ich verdienen pro Monat?', answer: 'Mit 6-10 Stunden pro Woche zu üblichen Sätzen sind 350-600 € monatlich realistisch.' },
        { question: 'Kann ich Sitzwachen mit Studium oder Hauptberuf kombinieren?', answer: 'Ja — die meisten Sitzwachen-Schichten finden abends, nachts oder am Wochenende statt. Genau dafür entworfen.' },
      ],
      cta: { text: 'Jetzt bewerben', href: 'mailto:simeon@heilpraxis-frommholz.de' },
      relatedLinks: [
        { label: 'Alle Stellenkonzepte', href: '/karriere' },
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'die Leistung, die Sie übernehmen' },
      ],
    },
  },
];

export function getKarriere(slug: string): SeoKarriere | undefined {
  return KARRIERE.find((k) => k.slug === slug);
}
