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

  // === Thema 2: Verhinderungspflege ============================================
  {
    slug: 'verhinderungspflege',
    title: 'Verhinderungspflege',
    short: 'Bis zu 1.612 € pro Jahr — so nutzen Sie den Anspruch.',
    metaTitle: 'Verhinderungspflege 2026 – Bis 1.612 € jährlich nutzen',
    metaDescription: 'Verhinderungspflege nach § 39 SGB XI: Voraussetzungen, Höhe, Antrag. Wir erklären, wie Sie den Anspruch optimal nutzen.',
    h1: 'Verhinderungspflege — bis zu 1.612 € pro Jahr, oft ungenutzt',
    primaryKeyword: 'Verhinderungspflege',
    detail: {
      intro: [
        'Verhinderungspflege ist eine der wichtigsten Leistungen der gesetzlichen Pflegeversicherung — und gleichzeitig eine der am häufigsten ungenutzten. Wir erklären, was sie ist, wer sie bekommt und wie Sie sie sinnvoll einsetzen.',
      ],
      sections: [
        {
          heading: 'Was ist Verhinderungspflege?',
          paragraphs: [
            'Verhinderungspflege nach § 39 SGB XI ist ein Anspruch, der einspringt, wenn die übliche pflegende Person ausfällt — durch Urlaub, Krankheit, Erholung oder andere Gründe. Bis zu 1.612 € pro Kalenderjahr werden für eine Ersatzpflegekraft übernommen.',
          ],
        },
        {
          heading: 'Wer hat Anspruch?',
          paragraphs: ['Voraussetzungen:'],
          list: [
            'Pflegegrad 2-5 (Pflegegrad 1 reicht nicht).',
            'Die Pflege wird ausgeübt von Angehörigen oder ehrenamtlichen Pflegepersonen.',
            'Die Pflegeperson hat den Pflegebedürftigen mindestens 6 Monate gepflegt („Vorpflegezeit") — diese Hürde fällt seit 2025 weg, die Vorpflegezeit entfällt.',
          ],
        },
        {
          heading: 'Was wir besonders empfehlen',
          stronglist: [
            { label: 'Stundenweise statt blockweise nutzen', text: 'Die 1.612 € lassen sich in viele kleine Einheiten splitten — zum Beispiel: 3 Stunden pro Woche an 50 Wochen ergibt 150 Stunden im Jahr.' },
            { label: 'Auch nach Krankenhaus-Entlassung nutzbar', text: 'Wenn die pflegende Person durch die Klinikentlassung ihres Angehörigen überfordert ist, kann Verhinderungspflege übergangsweise zur Entlastung dienen.' },
            { label: 'Mit Kurzzeitpflege kombinierbar', text: 'Bis zu 50 % des nicht verbrauchten Kurzzeitpflege-Anspruchs (bis zu 806 € extra) lassen sich auf die Verhinderungspflege übertragen. Damit wären theoretisch bis zu 2.418 € möglich.' },
          ],
        },
        {
          heading: 'So beantragen Sie Verhinderungspflege',
          paragraphs: ['Formloser Antrag bei der Pflegekasse:'],
          list: [
            'Wer pflegt normalerweise?',
            'Warum wird Vertretung gebraucht?',
            'Wer übernimmt die Vertretung?',
            'Welche Kosten entstehen?',
          ],
          trailingParagraphs: ['Belege (Rechnung der Ersatzpflegekraft) reichen Sie nachträglich ein. Die Pflegekasse erstattet die Kosten direkt an Sie — nicht an die Ersatzpflegekraft.'],
        },
        {
          heading: 'Verhinderungspflege durch nahe Angehörige',
          paragraphs: [
            'Wichtig zu wissen: Wenn nahe Angehörige (Eltern, Kinder, Geschwister, Ehepartner) die Verhinderungspflege übernehmen, wird nicht der volle Betrag gezahlt — sondern ein deutlich reduzierter Satz (Höhe des Pflegegeldes des Pflegegrads, anteilig).',
            'Wenn die Ersatzpflege durch externe Anbieter erfolgt (wie uns), gilt der volle Betrag.',
          ],
        },
      ],
      faq: [
        { question: 'Wie hoch ist die Verhinderungspflege 2026?', answer: 'Bis zu 1.612 € pro Kalenderjahr. Kombiniert mit ungenutzter Kurzzeitpflege bis zu 2.418 €.' },
        { question: 'Muss die Vertretung professionell sein?', answer: 'Nein. Auch Nachbarn, Freunde oder Sie selbst können als „Vertretung" abgerechnet werden — bei nahen Angehörigen jedoch nur zum Pflegegeld-Satz.' },
        { question: 'Kann ich Sitzwachen über Verhinderungspflege abrechnen?', answer: 'Ja, das ist sogar eine der häufigsten Anwendungen. Wir stellen Ihnen die Rechnung aus, Sie reichen sie bei der Pflegekasse ein.' },
        { question: 'Verfällt der Anspruch, wenn ich ihn nicht nutze?', answer: 'Ja, am Ende des Kalenderjahres. Es lohnt sich, ihn schon im Sommer zu planen, statt zu warten.' },
        { question: 'Gilt das auch bei Pflegegrad 1?', answer: 'Nein. Pflegegrad 1 hat keinen Anspruch auf Verhinderungspflege.' },
      ],
      cta: { text: 'Pflegeberatung anfragen', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Pflegegrad beantragen', href: '/themen/pflegegrad-beantragen' },
        { label: 'Entlastungsbudget', href: '/themen/entlastungsbudget' },
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'oft als Verhinderungspflege abgerechnet' },
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
            { label: 'Nicht erstattungsfähig', text: 'private Hilfen ohne Trägerstatus, klassische Pflegekräfte (das läuft über Pflegegeld/Sachleistung), Heim- oder Krankenhauskosten.' },
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

  // === Thema 5: Demenz-Begleitung ==============================================
  {
    slug: 'demenz-begleitung',
    title: 'Demenz-Begleitung',
    short: 'Was Demenz wirklich braucht — und was nicht hilft.',
    metaTitle: 'Demenz-Begleitung Berlin – Hilfe für Angehörige',
    metaDescription: 'Demenz verstehen und begleiten: Konkrete Tipps für den Alltag mit Demenzerkrankten. Beratung und Begleitung in Berlin.',
    h1: 'Demenz-Begleitung — was wirklich hilft und was nicht',
    primaryKeyword: 'Demenz Begleitung Berlin',
    detail: {
      intro: [
        'Demenz verändert nicht nur die erkrankte Person — sie verändert auch alle, die sie begleiten. Wir teilen Erfahrungen aus über 15 Jahren Demenz-Begleitung in Berlin: Was hilft. Was nicht hilft. Was Sie wissen sollten.',
      ],
      sections: [
        {
          heading: 'Demenz ist nicht eine Krankheit',
          paragraphs: ['Unter „Demenz" werden über 50 verschiedene Erkrankungen zusammengefasst. Die häufigsten:'],
          stronglist: [
            { label: 'Alzheimer-Demenz (ca. 60–70 % aller Fälle)', text: 'langsam fortschreitend, beginnt oft mit Kurzzeitgedächtnis.' },
            { label: 'Vaskuläre Demenz (ca. 15–20 %)', text: 'durch Durchblutungsstörungen, oft stufenweise Verschlechterung.' },
            { label: 'Lewy-Body-Demenz (ca. 5–10 %)', text: 'Mischbild aus Demenz und Parkinson, oft mit Halluzinationen.' },
            { label: 'Frontotemporale Demenz (ca. 5 %)', text: 'oft mit Wesensveränderung als Erstsymptom, eher jüngere Erkrankte.' },
            { label: 'Sekundäre Demenzen', text: 'Mischformen, Folge anderer Erkrankungen.' },
          ],
          trailingParagraphs: ['Die Unterscheidung ist wichtig, weil sich Verlauf und Symptombild stark unterscheiden.'],
        },
        {
          heading: 'Vier Phasen, vier Bedarfe',
          stronglist: [
            { label: 'Phase 1: Leichte Demenz', text: 'Vergisst, sucht Worte, ist beschämt. Braucht diskrete Unterstützung im Hintergrund, Erhaltung von Routinen, respektvollen Umgang mit verlorenem Wissen. Hier ist viel noch alleine möglich.' },
            { label: 'Phase 2: Mittelschwere Demenz', text: 'Schwere Orientierungsprobleme, Wesensveränderung möglich, Hilfe bei Selbstversorgung nötig. Braucht stundenweise oder halbtägige Begleitung, klare Tagesstruktur, geduldige Wiederholung.' },
            { label: 'Phase 3: Schwere Demenz', text: 'Sprachverlust, vollständige Pflegebedürftigkeit, oft Inkontinenz. Braucht 24-Stunden-Betreuung oder Heimplatz, sensorische Stimulation (Berührung, Musik, Düfte), beruhigende Umgebung.' },
            { label: 'Phase 4: Endphase', text: 'Bettlägerigkeit, Schluckstörungen, Sterbeverlauf. Braucht palliative Begleitung, Sterbebegleitung, palliative Symptomkontrolle.' },
          ],
        },
        {
          heading: 'Was wirklich hilft',
          stronglist: [
            { label: 'Routinen', text: 'Demenz frisst Neues. Aber sie respektiert Altes. Ein fester Tagesablauf — Frühstück um 8, Spaziergang um 10, Mittag um 12, Nickerchen um 14, Kaffee um 15:30 — schützt vor Verwirrung und Aggression.' },
            { label: 'Sensorisches', text: 'Wenn Worte und Verstehen schwinden, bleiben Sinne. Musik aus der Jugend. Lavendelduft. Eine raue Decke. Ein warmer Tee, der gerochen werden kann.' },
            { label: 'Berührung', text: 'Hand auf die Hand. Schulter umfassen. Demenz isoliert — Berührung verbindet, auch ohne Worte.' },
            { label: 'Validation statt Korrektur', text: '„Ich gehe gleich zu meiner Mutter" sagt eine 88-Jährige. Falsch: „Deine Mutter ist seit 30 Jahren tot." Richtig: „Ihre Mutter ist Ihnen wichtig. Erzählen Sie mir von ihr."' },
          ],
        },
        {
          heading: 'Was nicht hilft',
          stronglist: [
            { label: 'Vernunft', text: 'Demenz argumentiert nicht. Wer mit Logik kommt, frustriert sich selbst und die erkrankte Person.' },
            { label: 'Konfrontation', text: '„Du hast gerade schon gegessen." Hilft nicht — der Demenzkranke weiß es wirklich nicht mehr.' },
            { label: 'Zu viele Reize', text: 'Fernsehen + Radio + Gespräch + Telefon — das überfordert und löst Unruhe aus. Reduzieren Sie Hintergrundgeräusche.' },
            { label: 'Überforderung der Angehörigen', text: '„Ich schaffe das schon alleine" ist der gefährlichste Satz pflegender Angehöriger. Holen Sie sich Unterstützung, bevor Sie erschöpft sind, nicht danach.' },
          ],
        },
      ],
      faq: [
        { question: 'Ab wann ist Demenz behandlungsbedürftig?', answer: 'Sobald sich Alltag oder Sicherheit verändern. Eine Frühdiagnose hilft, Verlauf zu verlangsamen und Strukturen aufzubauen.' },
        { question: 'Können Demenzkranke noch alleine wohnen?', answer: 'In Phase 1 oft ja, mit Unterstützung. In Phase 2 nur mit klarer Tagesstruktur und stundenweise Begleitung. In Phase 3 in der Regel nicht mehr.' },
        { question: 'Was kostet eine stundenweise Demenz-Begleitung?', answer: 'Stundensätze hängen von der eingesetzten Qualifikation ab; Zuschläge nach § 3b EStG (25 % nachts, 50 % sonn-/feiertags) kommen hinzu. Konkrete Kalkulation im kostenlosen Erstgespräch.' },
        { question: 'Übernimmt die Pflegekasse die Kosten?', answer: 'Nicht direkt — wir rechnen als Selbstzahler-Leistung ab. Pflegegeld und Entlastungsbetrag können aber anteilig genutzt werden.' },
      ],
      cta: { text: 'Pflegeberatung anfragen', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Klinik-Begleitung Berlin', href: '/leistungen/klinik-begleitung-berlin', note: 'für Demenz-Patient*innen im Krankenhaus' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin' },
      ],
    },
  },

  // === Thema 6: Palliativ zu Hause =============================================
  {
    slug: 'palliativ-zuhause',
    title: 'Palliativ zu Hause',
    short: 'Was es braucht, damit das Sterben zu Hause gelingen kann.',
    metaTitle: 'Palliative Versorgung zu Hause Berlin – Wegweiser',
    metaDescription: 'Palliativversorgung zu Hause in Berlin: SAPV, AAPV, Hospizdienste, eigene Begleitung. Wir erklären die Strukturen und Ihre Möglichkeiten.',
    h1: 'Palliativ zu Hause — was es braucht, damit es gelingt',
    primaryKeyword: 'Palliativ zuhause',
    detail: {
      intro: [
        'Die meisten Menschen wollen zu Hause sterben. Die wenigsten schaffen es. Der Unterschied liegt nicht am Wunsch — er liegt an der Organisation. Wir erklären, was es braucht, damit Palliativversorgung zu Hause funktionieren kann.',
      ],
      sections: [
        {
          heading: 'Drei Säulen der häuslichen Palliativversorgung — plus eine vierte',
          stronglist: [
            { label: 'Säule 1: AAPV (Allgemeine Ambulante Palliativversorgung)', text: 'Hausarzt + ambulanter Pflegedienst mit palliativer Erfahrung. Der Standardfall. Funktioniert, wenn die Symptomatik moderat ist.' },
            { label: 'Säule 2: SAPV (Spezialisierte Ambulante Palliativversorgung)', text: 'Ein Palliativ-Team aus Palliativ-Medizinerinnen und -Pflegekräften kommt ins Haus, ist 24/7 erreichbar, übernimmt komplexe Symptomkontrolle. Voraussetzung: Verordnung durch Klinik oder Facharzt. Kosten übernimmt die Krankenkasse.' },
            { label: 'Säule 3: Hospizliche Begleitung', text: 'Ehrenamtliche Hospizdienste kommen in die Wohnung, unterstützen Angehörige, sind da, ohne medizinisch zu sein. Kostenlos.' },
            { label: 'Säule 4: Selbstzahler-1:1-Begleitung (das, was wir leisten)', text: 'Wenn die Familie nicht durchgehend da sein kann, ehrenamtliche Sitzwachen nicht ausreichen, eine zusätzliche verlässliche Anwesenheit gebraucht wird — übernehmen wir.' },
          ],
        },
        {
          heading: 'Wer leitet das alles?',
          paragraphs: [
            'Die Verantwortung für die Palliativversorgung liegt grundsätzlich beim Hausarzt. Bei SAPV koordiniert das SAPV-Team. In der Praxis wird viel von den Angehörigen organisiert — hier helfen wir oft mit, weil Familien in dieser Phase überfordert sind.',
          ],
        },
        {
          heading: 'Was Familien wissen sollten',
          stronglist: [
            { label: 'Sterbenlassen ist kein Versäumnis', text: 'Wenn die Lebensphase zu Ende geht, müssen nicht alle medizinischen Optionen ausgeschöpft werden. Eine Patientenverfügung schützt davor, dass Therapien fortgesetzt werden, die niemand mehr will.' },
            { label: 'Schmerzfreiheit ist möglich', text: 'Eine gute palliative Schmerztherapie führt in fast allen Fällen zu beherrschbarem Leiden. Wenn Sie das Gefühl haben, es ist nicht beherrscht: anderen Arzt holen, SAPV einschalten.' },
            { label: 'Das letzte Atmen kann lange dauern', text: 'Im aktiven Sterbeprozess wird die Atmung oft unregelmäßig, manchmal über Stunden oder Tage. Das beunruhigt Angehörige — ist aber meist kein Leiden für die sterbende Person. Eine erfahrene Begleitung kann hier viel beruhigen.' },
            { label: 'Es gibt nichts zu sagen', text: 'In den letzten Stunden braucht niemand ein großes Gespräch. Anwesenheit reicht. Hand halten reicht.' },
          ],
        },
        {
          heading: 'Was wir konkret beitragen können',
          list: [
            'Nachtwachen, damit die Familie schlafen kann.',
            'Wochenend-Begleitung, damit Angehörige Atempausen bekommen.',
            '24-Stunden-Betreuung in den letzten 2-5 Tagen, wenn der Sterbeprozess begonnen hat.',
            'Begleitung nach dem Tod — bis Bestatter und Arzt da sind.',
          ],
        },
      ],
      faq: [
        { question: 'Wer entscheidet, ob SAPV verordnet wird?', answer: 'Eine Verordnung kommt vom Hausarzt, einer Klinik oder einem Facharzt. Voraussetzung ist eine komplexe palliative Versorgungssituation.' },
        { question: 'Kann man auch ohne SAPV zu Hause palliativ versorgt werden?', answer: 'Ja, mit AAPV (Hausarzt + Pflegedienst) und ergänzenden Hospizdiensten. Wir setzen oft ein, wo das nicht ausreicht.' },
        { question: 'Wie schnell ist eine Sterbebegleitung möglich?', answer: 'Mit 24 Stunden Vorlauf zuverlässig, in Notfällen oft am selben Tag.' },
        { question: 'Übernimmt eine Versicherung unsere Begleitung?', answer: 'In der Regel nicht. Manche private Krankenversicherungen erstatten anteilig — wir geben gerne eine Rechnung mit, die zur Einreichung geeignet ist.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Hospiz-Sitzwachen', href: '/leistungen/hospiz-sitzwachen' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },

  // === Thema 7: Krankenhaus-Begleitung =========================================
  {
    slug: 'krankenhaus-begleitung',
    title: 'Krankenhaus-Begleitung',
    short: 'Wenn jemand zu Hause sicherer ist als alleine im Krankenhaus.',
    metaTitle: 'Krankenhaus-Begleitung Berlin – Sitzwache und Beistand',
    metaDescription: 'Begleitung im Krankenhaus: 1:1-Anwesenheit, Sitzwache, Übersetzung. Für Demenz, Verwirrtheit, Sturzgefahr, Sterbephase.',
    h1: 'Krankenhaus-Begleitung Berlin — wenn alleine im Bett nicht reicht',
    primaryKeyword: 'Krankenhaus Begleitung Berlin',
    detail: {
      intro: [
        'Ein Krankenhausaufenthalt ist für gesunde Menschen schon anstrengend. Für verwirrte, ängstliche oder schwerkranke Menschen kann er traumatisch sein. Unbekannte Stimmen, fremde Geräusche, ständig wechselndes Personal, lange Stunden des Wartens.',
        'Eine 1:1-Begleitung im Krankenhaus macht den Unterschied. Wir kommen ins Krankenhaus, wir bleiben, wir sind da.',
        'Diese Seite erklärt das Thema im Hintergrund. Wer direkt eine private Klinik-Begleitung in Berlin buchen möchte, findet die konkrete Leistungsseite weiter unten in den Verweisen.',
      ],
      sections: [
        {
          heading: 'Wer Krankenhaus-Begleitung braucht',
          stronglist: [
            { label: 'Demenzpatient*innen', text: 'Im Krankenhaus dekompensieren Demenzkranke oft massiv — fremde Umgebung, fehlende Routinen, ständige Reize. Eine vertraute Begleitung beruhigt, vermittelt Sicherheit, kennt die Routinen von zu Hause.' },
            { label: 'Patient*innen mit postoperativer Verwirrtheit (Delir-Risiko)', text: 'Vor allem ältere Menschen nach großen Operationen entwickeln in den ersten 24-72 Stunden oft ein Delir. Eine wache, vertraute Begleitung reduziert die Häufigkeit deutlich.' },
            { label: 'Sterbende Patient*innen', text: 'Auf vielen Stationen ist 1:1-Anwesenheit nicht möglich, aber gewünscht. Wir übernehmen.' },
            { label: 'Patient*innen mit Sprachbarrieren', text: 'Wenn jemand nur eingeschränkt Deutsch spricht, ist eine vertraute, sprachkompetente Begleitperson oft Gold wert — übersetzt für die Visite, vermittelt zwischen Patient und Team.' },
            { label: 'Verängstigte Patient*innen', text: 'Besonders bei längeren Aufenthalten, schweren Diagnosen, häufigen Untersuchungen.' },
          ],
        },
        {
          heading: 'Wie das organisiert wird',
          stronglist: [
            { label: 'Abstimmung mit der Station', text: 'Wir nehmen vor dem ersten Einsatz Kontakt mit der Pflegedienstleitung der Station auf. In der Regel wird eine schriftliche Zustimmung des Patienten oder Vertretungsberechtigten eingeholt.' },
            { label: 'Schichten', text: 'Typische Modelle: 8-Stunden-Schichten (Tag, Spät, Nacht), 12-Stunden-Schichten (Tag/Nacht), oder gezielte Phasen (z. B. erste 48 Stunden nach OP, letzte 24-72 Stunden vor Verlegung).' },
          ],
        },
        {
          heading: 'Was unsere Mitarbeitenden tun (und was nicht)',
          list: [
            'Wache Anwesenheit, Beobachtung des Zustands.',
            'Beruhigen bei Unruhe, Reorientieren bei Verwirrung.',
            'Hilfe bei Mahlzeiten, Trinken anreichen.',
            'Toilettengang-Begleitung (falls Mobilität).',
            'Information der Stationspflege bei Bedarfen.',
            'Information der Familie.',
            'Bei Demenzpatient*innen: Aktivierung im Rahmen der Möglichkeiten.',
          ],
          paragraphs: ['Was wir nicht tun: Wundversorgung, Medikamentengabe, invasive Pflegehandlungen — das macht die Stationspflege.'],
        },
        {
          heading: 'Was es kostet',
          paragraphs: [
            'Stundenweise Krankenhaus-Begleitung wird nach Qualifikation, Tageszeit und Wochentag kalkuliert. Eine durchgehende Begleitung über mehrere Tage (z. B. erste 48 Stunden nach OP, letzte Tage vor Verlegung) wird zur Gesamtsumme zusammengefasst. Zuschläge nach § 3b EStG (Nacht 25 %, Sonn-/Feiertag 50 %) sind transparent ausgewiesen.',
            'Im Erstgespräch klären wir Setting und Dauer und nennen Ihnen eine konkrete Summe für die geplante Begleitung.',
          ],
        },
        {
          heading: 'Versicherungsfragen',
          paragraphs: [
            'Bei einigen privaten Krankenversicherungen sind Begleitperson-Kosten ganz oder anteilig erstattbar — wir geben gerne eine Rechnung mit, die für die Einreichung geeignet ist. Bei der gesetzlichen Krankenkasse besteht in der Regel kein Anspruch.',
          ],
        },
      ],
      faq: [
        { question: 'Lassen Berliner Kliniken externe Sitzwachen zu?', answer: 'Ja, in der Regel mit Zustimmung der Pflegedienstleitung der Station. Wir kümmern uns um die Anmeldung.' },
        { question: 'Wie schnell können Sie auf eine Station kommen?', answer: 'Bei Vorlauf ab 24 Stunden zuverlässig. Bei Notaufnahme-Fällen oft noch am selben Tag.' },
        { question: 'Kann ich eine Begleitung vor einer geplanten OP buchen?', answer: 'Sehr empfehlenswert — wir können dann ab dem ersten Aufwachen einsatzbereit sein.' },
        { question: 'Übernimmt die Krankenkasse?', answer: 'Bei gesetzlichen Kassen normalerweise nicht. Bei einigen privaten Versicherungen teils erstattbar.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Klinik-Begleitung Berlin (Leistung)', href: '/leistungen/klinik-begleitung-berlin', note: 'die buchbare Premium-Begleitung' },
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung' },
      ],
    },
  },

  // === Thema 8: Wohnungsauflösung im Pflegefall ================================
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
