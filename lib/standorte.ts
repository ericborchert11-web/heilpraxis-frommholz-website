/**
 * Stadtteilseiten (Briefing TEIL 5). Ersetzt das frühere `bezirke.ts`-
 * Modell: dort waren es 12 Berliner Verwaltungsbezirke, hier sind es
 * 11 Ortsteile/Quartiere, weil Ortsteil-Keywords (Wilmersdorf, Grunewald,
 * Zehlendorf etc.) bei Pflegeanfragen häufiger gesucht werden als
 * Doppelbezirks-Namen wie „Charlottenburg-Wilmersdorf".
 */

import type { SeoLeistungDetail } from './leistungen-seo';

export type SeoStandort = {
  slug: string;
  name: string;
  bezirk: string;
  /** Postleitzahlen, die im Standort liegen — gut für Local SEO + Schema */
  plz: readonly string[];
  /** Tracking-Geo für lokale Suchanfragen */
  geo: { lat: number; lng: number };
  hook: string;
  isHauptstandort?: boolean;
  /** Aus der Footer-Standortliste ausblenden (Anbindung via Index + Nachbarn). */
  hideInFooter?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  detail: SeoLeistungDetail;
};

export const STANDORTE: readonly SeoStandort[] = [
  // === 1. Moabit (Hauptstandort) ==============================================
  {
    slug: 'moabit',
    name: 'Moabit',
    bezirk: 'Mitte',
    plz: ['10551', '10553', '10555', '10557', '10559'],
    geo: { lat: 52.5349, lng: 13.3432 },
    hook: 'Unser Sitz, unser Kiez.',
    isHauptstandort: true,
    metaTitle: 'Pflege & 1:1-Betreuung Moabit — ansässig in Ihrem Kiez',
    metaDescription: 'Pflege, 1:1-Betreuung und 24h-Betreuung in Moabit. Wir sind ansässig in der Stephanstraße 46 — kennen Ihren Kiez wie kaum ein anderer Anbieter.',
    h1: 'Pflege und 1:1-Betreuung in Moabit — aus Ihrem Kiez für Ihren Kiez',
    primaryKeyword: 'Pflegedienst Moabit',
    detail: {
      intro: [
        'Moabit ist unser Zuhause. Seit über 15 Jahren sitzen wir in der Stephanstraße 46 — mitten zwischen Wedding, Tiergarten und Hansaviertel. Wir kennen die Altbauten zwischen Beusselstraße und Turmstraße. Wir kennen die Stille der Wittstocker Straße und das Lärmen am Stephanplatz. Wir wissen, wo die Krankenwagen einfahren und welche Hausflure schwer zugänglich sind.',
        'Wenn Sie in Moabit Pflege brauchen, sind wir in zehn Minuten bei Ihnen.',
      ],
      sections: [
        {
          heading: 'Was wir in Moabit anbieten',
          paragraphs: ['Unser komplettes Leistungsspektrum — mit dem Vorteil, dass wir hier direkt um die Ecke sind:'],
          list: [
            '1:1-Betreuung zu Hause — stundenweise bis rund um die Uhr.',
            '24-Stunden-Betreuung mit deutschem Pflegekräfte-Team.',
            'Stundenweise Begleitung für Seniorinnen und Senioren.',
            'Pflegeberatung — oft bei Ihnen zu Hause.',
            'Nachtwachen und Begleitung in der letzten Lebensphase.',
          ],
        },
        {
          heading: 'Was Moabit besonders macht',
          paragraphs: ['Moabit ist heterogen. Beusselkiez und Hansaviertel-Nähe, alte Mieterschaft und neue Hipsterläden, Familien und Singles. Auch unsere Klientinnen und Klienten in Moabit sind so verschieden wie der Kiez selbst:'],
          list: [
            'Seniorinnen in den großen Altbau-Wohnungen rund um die Hutten-, Calvin- und Bremer Straße, die Hilfe wollen.',
            'Familien in den Mietshäusern um Stephan- und Stromstraße, deren Eltern zu Besuch sind.',
            'Bewohner der Seniorenwohnanlagen, die zusätzliche Selbstzahler-Betreuung möchten.',
            'Familien, die für einen Angehörigen kurzfristig eine verlässliche Begleitung brauchen.',
          ],
        },
      ],
      faq: [
        { question: 'Sind Sie bei einem Notfall in Moabit besonders schnell vor Ort?', answer: 'Ja — wir sind oft in 5-10 Minuten bei Ihnen, je nach Tageszeit und Verkehrslage. Für akute Betreuungsanfragen aus dem unmittelbaren Kiez bieten wir die schnellste Reaktion im gesamten Stadtgebiet.' },
        { question: 'Welche Pflegeheime in Moabit unterstützen Sie?', answer: 'Wir kommen als Zusatz-Betreuung in Pflegeheime und Service-Wohnanlagen, wenn die Familie zusätzliche 1:1-Stunden wünscht. Über die konkreten Einrichtungen sprechen wir im Erstgespräch.' },
        { question: 'Sind Ihre Mitarbeitenden alle aus Moabit?', answer: 'Nein — aber viele wohnen in der Stadtmitte. Das bedeutet kurze Anfahrtswege und gute lokale Kenntnis.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
        { label: 'Pflegeberatung Berlin', href: '/leistungen/pflegeberatung-berlin', note: 'oft als Erstkontakt' },
        { label: 'Tiergarten', href: '/standorte/tiergarten', note: 'der angrenzende Stadtteil' },
        { label: 'Frohnau', href: '/standorte/frohnau', note: 'im Norden Berlins' },
      ],
    },
  },

  // === 2. Tiergarten ===========================================================
  {
    slug: 'tiergarten',
    name: 'Tiergarten',
    bezirk: 'Mitte',
    plz: ['10785', '10787', '10557'],
    geo: { lat: 52.514, lng: 13.351 },
    hook: 'Diskretion und kurze Wege.',
    metaTitle: 'Pflege & 1:1-Betreuung Tiergarten — schnell, diskret',
    metaDescription: 'Pflegedienst für Selbstzahler in Tiergarten. Diskret, mit kurzen Wegen von unserem Standort in Moabit. Auch für Botschaften und Diplomatie.',
    h1: 'Pflege in Tiergarten — diskret, schnell, vor Ort',
    primaryKeyword: 'Pflegedienst Tiergarten',
    detail: {
      intro: [
        'Tiergarten ist nicht nur ein Park. Es ist auch ein Stadtteil, in dem viele Botschaften residieren, in dem das Diplomatische Viertel beginnt, in dem die Wohnsituationen oft besonders sind — große Apartments, Repräsentations-Wohnungen, Wohngebäude mit Concierge.',
        'Wer in Tiergarten Pflege braucht, hat oft besondere Anforderungen: Diskretion, sprachliche Kompetenz, Sensibilität für protokollarische Situationen, kurzfristige Verfügbarkeit. Wir sind darauf eingestellt.',
      ],
      sections: [
        {
          heading: 'Wer in Tiergarten zu uns kommt',
          list: [
            'Botschaftsangehörige mit pflegebedürftigen Familienmitgliedern.',
            'Diplomatische Vertretungen, die für reisende Würdenträger Selbstzahler-Pflege organisieren.',
            'Bewohner der gehobenen Apartmentkomplexe rund um Großer Tiergarten, Lützowplatz, Hofjägerallee.',
            'Menschen, deren Versorgung zu Hause kurzfristig neu beginnen muss.',
            'Seniorinnen aus den Service-Wohnanlagen in der Klingelhöferstraße und Umgebung.',
          ],
        },
        {
          heading: 'Was bei Pflege in Tiergarten besonders wichtig ist',
          stronglist: [
            { label: 'Diskretion', text: 'Mitarbeitende erscheinen in unauffälliger Kleidung, ohne sichtbares Pflege-Logo. Termine werden nicht laut am Telefon kommuniziert. Bei Bedarf treffen wir besondere Vertraulichkeitsvereinbarungen.' },
            { label: 'Sprachliche Kompetenz', text: 'Wir setzen je nach Anforderung Pflegekräfte mit guten Englisch-, Französisch- oder Spanischkenntnissen ein.' },
            { label: 'Kurzfristigkeit', text: 'Diplomatischer Alltag plant kurz. Wir sind darauf eingestellt, auch innerhalb von 24 Stunden zu starten.' },
            { label: 'Concierge-Etikette', text: 'Wir wissen, wie wir uns in Häusern mit Concierge oder Sicherheitsdienst anmelden, und wie wir den Eindruck wahren, den unsere Auftraggeber dort haben wollen.' },
          ],
        },
      ],
      faq: [
        { question: 'Können Ihre Mitarbeitenden Englisch oder andere Sprachen?', answer: 'Ja — im Team sind Pflegekräfte mit verhandlungssicherem Englisch, einige mit Französisch- oder Spanischkenntnissen. Bei spezifischen Sprachanforderungen klären wir das vor Vertragsbeginn.' },
        { question: 'Wie sicher ist die Schweigepflicht bei diplomatischen Klientinnen und Klienten?', answer: 'Pflegerische Schweigepflicht ist gesetzlich vorgegeben und vertraglich festgeschrieben. Bei besonders sensiblen Klientinnen und Klienten unterzeichnen wir zusätzliche Vertraulichkeitsvereinbarungen.' },
        { question: 'Können Sie auch in Hotels arbeiten, wenn dort eine pflegebedürftige Person Gast ist?', answer: 'Ja — das kommt regelmäßig vor (Familienangehörige auf Berlin-Besuch, die ein Hotel im Tiergarten gebucht haben). Wir stimmen uns mit dem Hotel ab.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Reisebegleitung für Senioren', href: '/leistungen/reisebegleitung-senioren', note: 'oft für Heimreisen diplomatischer Klient*innen relevant' },
        { label: 'Moabit', href: '/standorte/moabit', note: 'unser direkt angrenzender Standort' },
      ],
    },
  },

  // === 3. Berlin-Mitte =========================================================
  {
    slug: 'mitte',
    name: 'Berlin-Mitte',
    bezirk: 'Mitte',
    plz: ['10117', '10115', '10119', '10178', '10179'],
    geo: { lat: 52.52, lng: 13.408 },
    hook: 'Diskrete Betreuung zwischen Spreebogen und Hackeschem Markt.',
    metaTitle: 'Pflegedienst Berlin-Mitte — diskret & verlässlich',
    metaDescription: 'Pflege, 1:1-Betreuung und Begleitung in Berlin-Mitte. Private Versorgung zu Hause, stundenweise bis rund um die Uhr.',
    h1: 'Pflege und 1:1-Betreuung in Berlin-Mitte — schnell vor Ort',
    primaryKeyword: 'Pflegedienst Berlin Mitte',
    detail: {
      intro: [
        'Berlin-Mitte ist Verwaltung, Tourismus — und Wohnstadtteil. Alte Mieterinnen zwischen Hackeschem Markt und Friedrichstraße, neue Bewohner in den Neubauten am Spreebogen, Seniorinnen in den stillen Seitenstraßen rund um die Oranienburger und die Große Hamburger Straße.',
        'Von unserem Standort in der Stephanstraße sind wir in wenigen Minuten in Mitte. Das macht uns dort schnell — auch dann, wenn eine Versorgung kurzfristig beginnen muss.',
      ],
      sections: [
        {
          heading: 'Was wir in Berlin-Mitte oft tun',
          stronglist: [
            { label: '1:1-Betreuung zu Hause', text: 'Ungeteilte Aufmerksamkeit in der eigenen Wohnung — bei Demenz, in der Genesungsphase nach einer Operation, in der letzten Lebensphase.' },
            { label: 'Nachtwachen in den Wohnungen der Innenstadt', text: 'Gerade in großen Altbauwohnungen mit langen Fluren ist nächtliche Sturzgefahr ein Thema. Wir sind da, wenn aufgestanden wird.' },
            { label: 'Wenn die Versorgung zu Hause neu beginnt', text: 'Wenn sich die Lage plötzlich ändert, brauchen Familien eine Brücke. Wir übernehmen die ersten Tage und Wochen zu Hause, oft mit 12- oder 24-Stunden-Modellen.' },
            { label: 'Pflegeberatung in Mitte-Wohnungen', text: 'Wir kommen zu Ihnen, sprechen mit Familie und Hausarzt.' },
          ],
        },
        {
          heading: 'Anfahrtszeit von Moabit',
          paragraphs: [
            'Mit dem Auto über die Invalidenstraße nach Mitte: ca. 7 Minuten. Zu den Wohngegenden zwischen Friedrichstraße und Alexanderplatz: 10-15 Minuten.',
          ],
        },
      ],
      faq: [
        { question: 'Wie schnell sind Sie in Mitte vor Ort?', answer: 'In der Regel in 10-15 Minuten. Für einen ersten Einsatz brauchen wir zwei bis drei Tage Vorlauf, in akuten Situationen versuchen wir es innerhalb von 24 Stunden.' },
        { question: 'Können wir eine Betreuung schon vor einem geplanten Eingriff verabreden?', answer: 'Sehr empfehlenswert. Bei planbaren Eingriffen reservieren wir die Begleitung fest für die ersten Tage danach — genau die Zeit mit dem höchsten Risiko für Verwirrtheit und Stürze.' },
        { question: 'Arbeiten Sie auch in den Neubauwohnungen am Spreebogen?', answer: 'Ja. Concierge, Tiefgarage, Aufzug — das ist für uns Alltag. Wir stimmen Zutritt und Anwesenheitszeiten vorab mit Ihnen ab und kommen unauffällig.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin' },
        { label: 'Moabit', href: '/standorte/moabit', note: 'direkt angrenzend' },
      ],
    },
  },

  // === 4. Hansaviertel =========================================================
  {
    slug: 'hansaviertel',
    name: 'Hansaviertel',
    bezirk: 'Mitte',
    plz: ['10557'],
    geo: { lat: 52.518, lng: 13.343 },
    hook: 'Stille Anwesenheit im Architekturviertel.',
    metaTitle: 'Pflegedienst Hansaviertel — im grünen Zentrum',
    metaDescription: 'Pflege, 1:1-Betreuung und Begleitung im Hansaviertel. Stille Anwesenheit für ältere Bewohner in den Apartmenthäusern der Stadtarchitektur.',
    h1: 'Pflege im Hansaviertel — im stillen Quartier zwischen Tiergarten und Spree',
    primaryKeyword: 'Pflegedienst Hansaviertel',
    detail: {
      intro: [
        'Das Hansaviertel ist eines der besonderen Viertel Berlins. Entstanden 1957 zur Internationalen Bauausstellung (Interbau), mit Bauten von Niemeyer, Aalto, Gropius, Eiermann — ein UNESCO-Welterbe-Kandidat. Aber auch ein ganz normaler Wohnstadtteil mit einer Besonderheit: Viele der Erstbewohner sind hier alt geworden. Die Wohnungen haben oft kleine Grundrisse, die Bewohner sind oft alleinstehend.',
        'Wir kommen ins Hansaviertel, weil wir das Quartier kennen. Vom Bahnhof Bellevue, von der Altonaer Straße, von der Klopstockstraße — es ist alles 10 Minuten von unserem Standort in Moabit.',
      ],
      sections: [
        {
          heading: 'Wer im Hansaviertel zu uns kommt',
          list: [
            'Erstbewohner der Interbau-Apartments, jetzt im hohen Alter, oft alleinstehend.',
            'Pflegebedürftige in den Wohnungen der Caritas-Wohnanlage in der Händelallee.',
            'Ältere Kunst- und Kulturinteressierte, die im Hansaviertel gewohnt haben, um die kulturelle Mitte Berlins erreichen zu können.',
            'Witwen und Witwer, die in der gewohnten Wohnung bleiben wollen, aber Hilfe brauchen.',
          ],
        },
        {
          heading: 'Was im Hansaviertel oft gebraucht wird',
          stronglist: [
            { label: 'Stundenweise Begleitung', text: 'für alleinstehende Senioren — nicht jeden Tag, aber regelmäßig. 2-3 Stunden, gemeinsamer Spaziergang durch den Tiergarten, gemeinsames Mittagessen, ein Buch vorlesen.' },
            { label: 'Wochenend-Sicherheit', text: 'Wenn unter der Woche eine Putzhilfe da ist und ehrenamtliche Besuche, aber das Wochenende leer ist — wir übernehmen.' },
            { label: 'Nachtwachen bei Unsicherheit', text: 'In kleinen Wohnungen, in denen das Aufstehen zur Toilette nachts mit Sturzangst verbunden ist.' },
            { label: 'Begleitung bei Kulturveranstaltungen', text: 'Manche Klient*innen wollen weiter ins Konzert, ins Theater, zur Ausstellung — mit Begleitung durch eine erfahrene Person ist das möglich.' },
          ],
        },
      ],
      faq: [
        { question: 'Mein Vater wohnt alleine im Hansaviertel und will nicht ins Heim. Was ist möglich?', answer: 'Vieles. Mit 2-3 Stunden Begleitung pro Tag plus einer Nachtwache an 2-3 Tagen pro Woche lässt sich in kleinen Wohnungen oft ein sicheres Setting schaffen. Im Erstgespräch klären wir, was sinnvoll ist.' },
        { question: 'Sind die Wohnungen im Hansaviertel pflegegerecht?', answer: 'Größtenteils nein — sie sind klein, oft mit schmalen Türen. Trotzdem ist Pflege zu Hause hier in den meisten Fällen möglich, oft mit kleinen baulichen Anpassungen, die teilweise von der Pflegekasse bezahlt werden.' },
        { question: 'Können Sie auch nur einmal pro Woche kommen?', answer: 'Ja — wir akzeptieren auch Mindestumfänge von 2-3 Stunden pro Woche, wenn es um langfristige Begleitung geht.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'oft auf Stundenbasis' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Pflegeberatung', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === 5. Charlottenburg =======================================================
  {
    slug: 'charlottenburg',
    name: 'Charlottenburg',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['10585', '10587', '10589', '10623', '10625', '10627', '10629'],
    geo: { lat: 52.516, lng: 13.302 },
    hook: 'Gehobene Selbstzahler-Klientel zwischen Schloss und Kudamm.',
    metaTitle: 'Pflegedienst Charlottenburg — Selbstzahler, 1:1-Betreuung',
    metaDescription: 'Pflege und 1:1-Betreuung in Charlottenburg. Erfahrenes Team, kurze Wege — von Schloss-Park bis Kurfürstendamm.',
    h1: 'Pflegedienst Charlottenburg — für anspruchsvolle Selbstzahler',
    primaryKeyword: 'Pflegedienst Charlottenburg',
    detail: {
      intro: [
        'Charlottenburg ist groß. Vom Schlosspark im Norden bis zum Kurfürstendamm im Süden, von der Spree im Osten bis zum Lietzensee im Westen — Zehntausende von Wohnungen, viele davon Altbau, in beträchtlichen Teilen gehoben bis exklusiv. Wer hier wohnt und Pflege braucht, hat meist klare Vorstellungen davon, wie diese Pflege aussehen soll.',
        'Wir sind seit über 15 Jahren in Charlottenburg unterwegs. Wir kennen die Klient*innen rund um den Olivaer Platz, in den Wohnungen am Lietzensee, in den Häusern zwischen Bismarckstraße und Kantstraße.',
      ],
      sections: [
        {
          heading: 'Was Pflege in Charlottenburg ausmacht',
          stronglist: [
            { label: 'Anspruchsvoll, aber unaufdringlich', text: 'Unsere Klient*innen in Charlottenburg sind oft kultiviert, akademisch geprägt, mit einer klaren Vorstellung von Stil und Diskretion. Wir setzen Mitarbeitende ein, die sprachlich und im Auftreten in diese Wohnungen passen.' },
            { label: 'Beständigkeit', text: 'Charlottenburg ist Stammkundschaft. Viele Familien arbeiten über Jahre mit uns, manchmal über Generationen. Das feste Team kennt die Familie, kennt die Vorlieben, kennt die Wohnung.' },
            { label: 'Privater Charakter', text: 'Wir kommen ohne sichtbares Logo, oft mit dem eigenen Auto, ohne in den Hausfluren auffällige Spuren zu hinterlassen.' },
          ],
        },
        {
          heading: 'Anfahrt von Moabit',
          paragraphs: ['Von der Stephanstraße über die Otto-Suhr-Allee in 10-12 Minuten am Schloss Charlottenburg. Bis zum Kurfürstendamm 15-20 Minuten je nach Tageszeit.'],
        },
      ],
      faq: [
        { question: 'Kommen Sie auch in die alten Mietshäuser ohne Aufzug?', answer: 'Ja. Unsere Mitarbeitenden sind bereit, ggf. 3-4 Stockwerke ohne Aufzug zu erreichen. Für pflegebedürftige Personen, die nicht mehr eigenständig treppensteigen können, klären wir, ob bauliche Veränderungen sinnvoll sind (z. B. Treppenlift).' },
        { question: 'Wir haben eine Pflegehilfskraft aus dem Ausland — kann sie unter Ihre Anstellung übernommen werden?', answer: 'Eine Übernahme ist möglich, wenn die Person bei Ihnen arbeitsrechtlich sauber angestellt war. Bei Grauzonen-Konstellationen (selbständig, entsandt) ist eine „Übernahme" nicht möglich, wir können aber die Versorgungslücke mit eigenem Personal füllen.' },
        { question: 'Können Sie auch in den exklusiven Service-Wohnanlagen am Kurfürstendamm arbeiten?', answer: 'Ja. Mit den meisten Anlagen haben wir bereits zusammengearbeitet. Die Hauspflege übernehmen wir nicht — aber zusätzliche 1:1-Stunden, Nachtwachen, individuelle Begleitung sind unser Geschäft.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'direkt angrenzend' },
        { label: 'Westend', href: '/standorte/westend' },
      ],
    },
  },

  // === 6. Wilmersdorf ==========================================================
  {
    slug: 'wilmersdorf',
    name: 'Wilmersdorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['10707', '10709', '10711', '10713', '10715', '10717', '10719', '10779', '10789'],
    geo: { lat: 52.487, lng: 13.314 },
    hook: 'Bildungsbürgertum, Altbauten, Beständigkeit.',
    metaTitle: 'Pflegedienst Wilmersdorf — Diskret, exklusiv',
    metaDescription: 'Pflege für Selbstzahler in Wilmersdorf. Diskret, in fester Teambesetzung — für die Altbau-Wohnungen rund um Olivaer und Ludwigkirchplatz.',
    h1: 'Pflege in Wilmersdorf — im Altbau-Quartier mit Bildungsbürgertum',
    primaryKeyword: 'Pflegedienst Wilmersdorf',
    detail: {
      intro: [
        'Wilmersdorf ist ein Stadtteil mit Charakter. Die großen Gründerzeit-Altbauten zwischen Olivaer Platz, Bayerischem Viertel, Volkspark und Ludwigkirchplatz sind seit Generationen Wohnsitz von Berliner Bildungsbürgertum — Anwältinnen, Medizinern, Professorinnen, Kunsthistorikern. Die Bewohner werden alt, oft sehr alt. Und sie wollen oft in ihrer Wohnung bleiben.',
        'Wir sind seit Jahren mit Pflege in Wilmersdorf vertraut. Wir wissen, wie diese Wohnungen aussehen — hohe Decken, dunkle Möbel, Bibliotheken voller Bücher, Patina, die Geschichte erzählt. Und wir wissen, wie die Pflege in solchen Wohnungen aussehen sollte: respektvoll, leise, ohne den Wohnungs-Charakter zu beschädigen.',
      ],
      sections: [
        {
          heading: 'Was wir in Wilmersdorf besonders gut können',
          stronglist: [
            { label: 'Begleitung von alleinstehenden Akademikerinnen und Akademikern', text: 'Oft ohne Kinder, oft mit weiten Wegen zu den Geschwistern oder Neffen/Nichten. Wer in Wilmersdorf eine 5-Zimmer-Wohnung bewohnt und alleine ist, braucht oft mehr als Pflege — braucht auch Gesprächspartner, die mitdenken können.' },
            { label: '24-Stunden-Betreuung in großen Wohnungen', text: 'Wo viele Räume sind, kann auch ein 24/7-Team gut untergebracht werden, ohne sich aufeinander zu stoßen. Schlafzimmer für die Nachtschicht, ruhige Räume für die Pausen.' },
            { label: 'Diskretion gegenüber Hausgemeinschaften', text: 'Altbau-Hausgemeinschaften sind oft sehr eng. Wir kommen unauffällig, vermeiden das Auffallen, schützen die Privatsphäre.' },
          ],
        },
      ],
      faq: [
        { question: 'Mein Vater ist 92 und will keinen Pflegedienst, weil er keine „fremden Leute" in der Wohnung haben will. Was tun?', answer: 'Häufige Situation. Wir gehen das langsam an — oft mit einem ersten Besuch, in dem nichts gepflegt wird, nur ein Gespräch geführt. Unsere Mitarbeitenden sind erfahren im Aufbau von Vertrauen. Oft löst sich der Widerstand innerhalb weniger Besuche.' },
        { question: 'Können Sie Klassik-Hörerinnen bei Konzertbesuchen begleiten?', answer: 'Ja — das ist sogar eine unserer Spezialitäten in Wilmersdorf. Begleitung zur Berliner Philharmonie, zur Deutschen Oper, in die Konzerthäuser — mit Mitarbeitenden, die mit der Musik und der Etikette vertraut sind.' },
        { question: 'Was kostet eine 24-Stunden-Betreuung in einer 6-Zimmer-Altbauwohnung?', answer: 'Die Wohnungsgröße ändert nichts am Preis — entscheidend ist die erforderliche Qualifikation pro Schicht und ob die Nacht aktiv oder in Bereitschaft gefahren wird. Konkrete monatliche Größenordnung bekommen Sie im Erstgespräch nach Bedarfsklärung.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf' },
      ],
    },
  },

  // === 7. Westend ==============================================================
  {
    slug: 'westend',
    name: 'Westend',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14050', '14052', '14053', '14055', '14057', '14059'],
    geo: { lat: 52.515, lng: 13.275 },
    hook: 'Villen, große Wohnungen, langes Wurzeln.',
    metaTitle: 'Pflegedienst Westend — Stille Villenviertel',
    metaDescription: 'Pflege im Westend, zwischen Olympia-Stadion und Lietzensee. Diskret, mit gehobenen Ansprüchen — für die Villen und großen Wohnungen.',
    h1: 'Pflege im Westend — in den stillen Villenstraßen',
    primaryKeyword: 'Pflegedienst Westend',
    detail: {
      intro: [
        'Das Westend ist ein eigenes Berlin. Stille Straßen, alte Villen, Gärten, Kies-Auffahrten, lange gewachsene Hausgemeinschaften. Hier wohnen Familien seit Generationen — oder neue Käufer, die in die Tradition einsteigen wollen. Wer hier alt wird, will in der Regel bleiben. Wer pflegebedürftig wird, sucht Lösungen, die zur Würde des Hauses passen.',
        'Wir sind hier oft unterwegs. Wir kennen die Reichsstraße und die Akazienallee, die Lindenallee und die Spandauer Damm-Querstraßen.',
      ],
      sections: [
        {
          heading: 'Pflege in Westend-Häusern',
          stronglist: [
            { label: 'Große Anwesen', text: 'Eine 24-Stunden-Betreuung in einer 200qm-Villa läuft anders ab als in einer 60qm-Wohnung. Mehrere Stockwerke, große Distanzen, oft auch große Gärten — all das muss bei der Betreuung mitgedacht werden.' },
            { label: 'Inhaltsreiche Lebensgeschichten', text: 'Wer in einem Westend-Haus alt wird, hat oft ein langes Leben hinter sich, das in Möbeln, Bildern, Büchern gespeichert ist. Unsere Mitarbeitenden sind im Umgang mit solchen Biografien geübt.' },
            { label: 'Haushaltsangestellte und Pflegekräfte gemeinsam', text: 'Viele Westend-Familien beschäftigen seit Jahrzehnten Haushaltshilfen und Gartenmitarbeiter. Wenn wir dazustoßen, müssen wir uns in diese Strukturen einfügen.' },
            { label: 'Stilvolles Sterben', text: 'Wer im Westend-Haus alt geworden ist, will oft auch dort sterben. Wir begleiten Sterbeprozesse in diesen Häusern — mit allem, was es braucht, von palliativer Pflege bis zum letzten Tag.' },
          ],
        },
      ],
      faq: [
        { question: 'Wir haben eine sehr große Wohnung. Brauchen wir mehr Personal?', answer: 'Nicht zwingend. Eine Schicht-Person betreut auch ein großes Haus, sofern die zu pflegende Person an einer überschaubaren Stelle untergebracht ist. Bei sehr mobilen Pflegebedürftigen (Demenz, Weglaufgefahr) kann es sinnvoll sein, mit zwei Personen zu arbeiten.' },
        { question: 'Können wir Pflege auf der Terrasse oder im Garten machen?', answer: 'Im Sommer gerne. Unsere Mitarbeitenden sind flexibel.' },
        { question: 'Wie diskret kommen Ihre Mitarbeitenden an?', answer: 'Mit dem eigenen Auto (kein Pflegedienst-Logo), in unauffälliger Kleidung, zu vereinbarten Zeiten. Bei besonders sensiblen Klientinnen und Klienten sprechen wir die Anfahrtswege ab.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg', note: 'angrenzender Stadtteil' },
      ],
    },
  },

  // === 8. Grunewald ============================================================
  {
    slug: 'grunewald',
    name: 'Grunewald',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14193', '14195'],
    geo: { lat: 52.485, lng: 13.262 },
    hook: 'Höchste Diskretion, exponierte Klientel.',
    metaTitle: 'Pflegedienst Grunewald — Höchste Diskretion',
    metaDescription: 'Privater Pflegedienst in Grunewald. Maximale Diskretion, kleines festes Team, Erfahrung mit exponierter Klientel.',
    h1: 'Pflegedienst Grunewald — mit höchster Diskretion',
    primaryKeyword: 'Pflegedienst Grunewald',
    detail: {
      intro: [
        'In Grunewald wohnen Menschen, die nicht in der Zeitung stehen wollen. Bewohner, deren Namen man kennt — oder bewusst nicht kennt. Häuser, die hinter Mauern, Hecken und Sicherheitsanlagen liegen. Und unter all dem: Pflegebedürfnisse, die genauso menschlich sind wie überall — aber mit besonderen Anforderungen an Diskretion.',
        'Wer in Grunewald Pflege sucht, sucht nicht den nächstbesten Anbieter. Er sucht ein Team, das versteht, was Vertraulichkeit wirklich heißt. Wir arbeiten seit Jahren mit Klientinnen und Klienten aus exponierten Bereichen — Wirtschaft, Politik, Wissenschaft, Kunst.',
      ],
      sections: [
        {
          heading: 'Was Pflege in Grunewald von anderen Stadtteilen unterscheidet',
          stronglist: [
            { label: 'Schweigepflicht ist Geschäftsgrundlage', text: 'Wir arbeiten mit erweiterten Vertraulichkeitsvereinbarungen, die unsere Mitarbeitenden unterzeichnen. Wir geben Klient*innen-Identitäten nicht einmal innerhalb des eigenen Teams an unbefugte Kolleg*innen weiter.' },
            { label: 'Anwesenheit ohne Fußabdruck', text: 'Wir kommen mit dem eigenen Auto, parken auf Anweisung der Klient*innen (oft in der Nähe, nicht direkt vor dem Haus). Wir verlassen das Haus, ohne dass Nachbarn wissen, dass jemand versorgt wird.' },
            { label: 'Kleines, festes Team', text: 'Bei Klient*innen mit hoher Vertraulichkeitsanforderung arbeiten wir mit 3-4 ausgewählten Stammkräften — keine wechselnden Pool-Mitarbeitenden, keine Praktikant*innen.' },
            { label: 'Erfahrung mit Sicherheitspersonal', text: 'In manchen Häusern gibt es Sicherheitsdienste, Concierges, Wächter. Unsere Mitarbeitenden wissen, wie sie sich anmelden, wie sie sich verhalten.' },
            { label: 'Bereitschaft zu schriftlichen Vereinbarungen', text: 'Geheimhaltungsvereinbarungen (NDA-Klauseln), ausführliche Datenschutz-Regelungen — all das ist in Grunewald häufiger als anderswo Standard.' },
          ],
        },
      ],
      faq: [
        { question: 'Können Sie absolute Vertraulichkeit garantieren?', answer: 'Pflegerische Schweigepflicht ist gesetzlich vorgegeben — jeder Verstoß ist strafbar. Bei besonders sensiblen Klient*innen ergänzen wir die Schweigepflicht durch schriftliche Vertraulichkeitsvereinbarungen mit Vertragsstrafen. Trotzdem: 100 % Garantie kann niemand geben, weil Menschen Menschen sind. Wir tun, was sich tun lässt.' },
        { question: 'Können Ihre Mitarbeitenden Hintergrund-Checks vorweisen?', answer: 'Alle Mitarbeitenden haben ein erweitertes polizeiliches Führungszeugnis (maximal 3 Monate alt) vorgelegt. Bei besonderen Anforderungen unterziehen sich Mitarbeitende zusätzlichen Background-Checks.' },
        { question: 'Akzeptieren Sie auch Vertragsabschlüsse über Rechtsanwälte?', answer: 'Ja — viele Klient*innen in Grunewald lassen den Vertrag über ihre Anwaltskanzlei abwickeln. Das ist für uns problemlos.' },
        { question: 'Können wir auch Bezahlung über Treuhand-Konten organisieren?', answer: 'Wir akzeptieren übliche Zahlungswege (Überweisung, ggf. SEPA-Lastschrift). Bei komplexen Zahlungs-Konstruktionen klären wir die Konditionen individuell.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Westend', href: '/standorte/westend' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf', note: 'direkt angrenzend' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'benachbart' },
      ],
    },
  },

  // === 9. Zehlendorf ===========================================================
  {
    slug: 'zehlendorf',
    name: 'Zehlendorf',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14163', '14165', '14167', '14169'],
    geo: { lat: 52.432, lng: 13.255 },
    hook: 'Ruhige Familien-Gegend, Häuser, Gärten.',
    metaTitle: 'Pflegedienst Zehlendorf — Familienpflege im Grünen',
    metaDescription: 'Pflegedienst und 1:1-Betreuung in Zehlendorf. Erfahrenes Team, das die ruhigen Straßen von Mexikoplatz bis Krumme Lanke kennt.',
    h1: 'Pflegedienst Zehlendorf — Familienpflege in grüner Umgebung',
    primaryKeyword: 'Pflegedienst Zehlendorf',
    detail: {
      intro: [
        'Zehlendorf ist Familien-Berlin. Einfamilienhäuser, Reihenhäuser, große Gärten, ruhige Straßen, Schulen, Bäume. Hier wohnen Familien, in denen die Generationen eng beieinander leben — Großeltern in einer Etagenwohnung im Haus der Tochter, die Tochter und Schwiegersohn mit Enkeln im Hauptwohnbereich. Oder die Großeltern allein im großen Familienhaus, nachdem die Kinder ausgezogen sind.',
        'Wir kennen Zehlendorf. Wir sind ab Mexikoplatz, Krumme Lanke, Onkel-Tom-Straße, vom Schlachtensee bis zur Argentinischen Allee unterwegs.',
      ],
      sections: [
        {
          heading: 'Wer in Zehlendorf zu uns kommt',
          stronglist: [
            { label: 'Mehrgenerationenhäuser', text: 'Großeltern leben in einem eigenen Bereich des Familienhauses. Familie hilft, so viel sie kann — aber irgendwann reicht das nicht mehr. Wir ergänzen, ohne den familiären Charakter zu stören.' },
            { label: 'Alleinerbende Witwen und Witwer', text: 'Im großen Familienhaus, die Kinder sind ausgezogen, Tochter in München, Sohn in Frankfurt. Wer kommt vorbei? Wir.' },
            { label: 'Eltern, die ihre eigenen Eltern aufgenommen haben', text: 'Plötzlicher Pflegebedarf, oft mit Demenz, ohne lokales soziales Netz für die Aufgenommenen. Wir helfen, das aufzubauen.' },
            { label: 'Akademikerfamilien', text: 'Universitätsangehörige der nahegelegenen FU, Stiftungsangestellte, Wissenschaftler*innen aus den Berliner Forschungseinrichtungen.' },
          ],
        },
        {
          heading: 'Was Pflege in Zehlendorf besonders ausmacht',
          stronglist: [
            { label: 'Lange Anfahrtswege akzeptieren', text: 'Von Moabit nach Zehlendorf sind es 25-35 Minuten. Wir akzeptieren das, weil die Kontinuität für die Klient*innen wichtiger ist als Anfahrtspauschalen.' },
            { label: 'Auto-Kompatibilität', text: 'Viele Zehlendorf-Adressen sind nur mit dem Auto gut erreichbar. Unsere Mitarbeitenden haben Führerschein und Auto.' },
            { label: 'Garten-Begleitung', text: 'Viele Zehlendorf-Klient*innen verbringen ihre Lebensspanne im Garten. Begleitung dahin gehört dazu — vom Spaziergang auf der Terrasse bis zum gemeinsamen Gärtnern, soweit die Kräfte reichen.' },
          ],
        },
      ],
      faq: [
        { question: 'Wir wohnen in der Onkel-Tom-Straße. Können Sie auch in die kleinen Reihenhäuser?', answer: 'Selbstverständlich. Die Größe der Wohnung spielt für uns keine Rolle.' },
        { question: 'Können Ihre Mitarbeitenden auch im Garten helfen?', answer: 'Die eigentliche Gartenarbeit ist nicht unsere Aufgabe — dafür gibt es Gartenservices. Aber die Begleitung der Klient*innen in den Garten, das Hineinsetzen in den Liegestuhl, das gemeinsame Beobachten der Rosen — all das gehört zu unserer Arbeit.' },
        { question: 'Wir wollen unsere Mutter, die in Bayern lebt, zu uns nach Zehlendorf holen. Wie organisieren wir das?', answer: 'Wir helfen. Reisebegleitung von Bayern hierher, anschließende Betreuung in Zehlendorf, Aufbau der Versorgungsstruktur. Erstgespräch am besten 4-6 Wochen vor dem geplanten Umzug.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Dahlem', href: '/standorte/dahlem' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'benachbart' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'benachbart' },
      ],
    },
  },

  // === 10. Dahlem ==============================================================
  {
    slug: 'dahlem',
    name: 'Dahlem',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14195'],
    geo: { lat: 52.456, lng: 13.288 },
    hook: 'Akademisch geprägt, Universitäts-Umfeld.',
    metaTitle: 'Pflegedienst Dahlem — Akademisch geprägt, diskret',
    metaDescription: 'Privater Pflegedienst in Dahlem. Für Akademikerinnen, Universitätsangehörige, gehobene Wohnviertel. Diskret und kompetent.',
    h1: 'Pflegedienst Dahlem — im akademischen Quartier',
    primaryKeyword: 'Pflegedienst Dahlem',
    detail: {
      intro: [
        'Dahlem ist Akademie. Die Freie Universität, der Botanische Garten, das Max-Planck-Institut für Bildungsforschung, das Max-Planck-Institut für Wissenschaftsgeschichte, die John-F.-Kennedy-Schule. Wer in Dahlem wohnt, gehört oft zu einer dieser Institutionen oder hat einen Bezug dazu. Die Gegend ist still, baumbestanden, beträchtlich gepflegt — und sie altert.',
        'Viele Professorinnen und Professoren, die in den 60er, 70er, 80er Jahren nach Dahlem zogen, sind jetzt in einem Alter, in dem Pflege ins Spiel kommt. Wir kommen zu ihnen.',
      ],
      sections: [
        {
          heading: 'Wer in Dahlem zu uns kommt',
          list: [
            'Emeritierte Professorinnen und Professoren der FU, die in den Universitäts-nahen Wohnungen alt geworden sind.',
            'Familienangehörige der Max-Planck-Institute, oft selbst mit akademischem Hintergrund.',
            'Diplomaten-Angehörige aus dem nahegelegenen Konsulatsviertel.',
            'Familien, deren Eltern aus anderen Universitätsstädten zu ihnen nach Dahlem gezogen sind.',
          ],
        },
        {
          heading: 'Was Pflege in Dahlem ausmacht',
          stronglist: [
            { label: 'Geistiger Anspruch', text: 'Akademiker*innen wollen oft auch im Pflegealter mit Menschen reden, die mitdenken können. Unsere Mitarbeitenden lesen, diskutieren, kennen aktuelle Themen — das ist nicht „Standard-Pflege", sondern ein Match auf der gleichen Wellenlänge.' },
            { label: 'Bibliotheks-Wohnungen', text: 'Dahlemer Wohnungen sind oft mit Büchern voll. Hier wird vorgelesen, hier wird über Bücher gesprochen, hier wird Wissenschaft als Lebensinhalt geschätzt. Unser Team weiß damit umzugehen.' },
            { label: 'Internationale Klient*innen', text: 'Viele Dahlem-Familien haben internationale Hintergründe — amerikanisch, britisch, französisch, niederländisch. Bei Bedarf setzen wir englischsprachige oder anderweitig sprachkompetente Pflegekräfte ein.' },
            { label: 'Diskretion gegenüber Universitäts-Communities', text: 'Wer in Dahlem zu lange über das Privatleben einer Kollegin spricht, hört von ihr selbst zurück. Unser Team versteht das.' },
          ],
        },
      ],
      faq: [
        { question: 'Können Ihre Mitarbeitenden Englisch sprechen?', answer: 'Im Team gibt es mehrere Mitarbeitende mit verhandlungssicherem Englisch. Bei spezifischen Anforderungen klären wir das vor Vertragsbeginn.' },
        { question: 'Mein Vater liest immer noch viel. Können Sie Mitarbeitende einsetzen, die mit Büchern umgehen können?', answer: 'Selbstverständlich. Wir berücksichtigen biografische und intellektuelle Hintergründe bei der Personalauswahl.' },
        { question: 'Wie ist Ihre Erfahrung mit Demenz im akademischen Umfeld?', answer: 'Demenz ist Demenz — sie macht keinen Unterschied beim akademischen Hintergrund. Was sich aber unterscheidet, ist der Umgang damit: Akademiker*innen kämpfen oft länger gegen die Krankheit an, fühlen sich besonders gekränkt durch Wortsuche-Schwierigkeiten. Wir gehen sensibel damit um.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'direkt angrenzend' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'benachbart' },
        { label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'grenznah' },
      ],
    },
  },

  // === 11. Schmargendorf =======================================================
  {
    slug: 'schmargendorf',
    name: 'Schmargendorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14193', '14199'],
    geo: { lat: 52.476, lng: 13.29 },
    hook: 'Gut situiertes Quartier zwischen Wilmersdorf und Grunewald.',
    metaTitle: 'Pflegedienst Schmargendorf — Im Quartier verwurzelt',
    metaDescription: 'Pflege in Schmargendorf, dem Quartier zwischen Wilmersdorf und Grunewald. Diskret, mit Kenntnis der lokalen Strukturen.',
    h1: 'Pflegedienst Schmargendorf — im ruhigen Wohnquartier',
    primaryKeyword: 'Pflegedienst Schmargendorf',
    detail: {
      intro: [
        'Schmargendorf liegt zwischen Wilmersdorf und Grunewald — räumlich und sozial. Es ist nicht ganz so prominent wie Grunewald, aber gut situiert. Die Wohnungen sind oft Altbau, manchmal aus der Gründerzeit, manchmal aus den 20er Jahren. Hier wohnen langjährige Berliner Familien, oft seit zwei oder drei Generationen in den gleichen Häusern.',
        'Wir betreuen seit Jahren Klient*innen in Schmargendorf — das Quartier gehört zu unseren Stammgebieten.',
      ],
      sections: [
        {
          heading: 'Was in Schmargendorf typisch ist',
          stronglist: [
            { label: 'Familiäre Wurzeln', text: 'Viele Wohnungen sind seit Generationen in Familienhand. Bei Pflege geht es oft auch um den Erhalt eines Familien-Habitus.' },
            { label: 'Geringere Bekanntheit der Bewohnerinnen', text: 'Anders als in Grunewald wohnen hier oft Selbständige, Mittelständler, höhere Angestellte — nicht in der Öffentlichkeit, aber mit komfortablen Mitteln und klaren Vorstellungen.' },
            { label: 'Mittlere Wohnungsgrößen', text: 'Drei- bis Vier-Zimmer-Wohnungen sind typisch, nicht die ganz großen Familienanwesen wie in Westend oder Grunewald.' },
          ],
        },
        {
          heading: 'Was Pflege in Schmargendorf gut macht',
          stronglist: [
            { label: 'Beständigkeit ohne Extravaganz', text: 'Unsere Klient*innen hier wollen keine Show, keine Sondernotwendigkeiten — sie wollen verlässliche, gute Pflege von Menschen, die ihre Geschichte respektieren.' },
            { label: 'Stundenweise statt Pauschal', text: 'Im Vergleich zu Grunewald sind in Schmargendorf 24-Stunden-Betreuungen seltener. Häufiger sind Tagesbegleitungen, Nachtwachen, gezielte stundenweise Einsätze.' },
            { label: 'Pflegeberatung mit Augenmaß', text: 'Familien wollen oft wissen, wie sie das Optimum aus dem Pflegegrad herausholen können, was Verhinderungspflege kann, wie die nächsten Jahre planbar gemacht werden können.' },
          ],
        },
      ],
      faq: [
        { question: 'Können Sie auch nur für 3-4 Stunden am Nachmittag kommen?', answer: 'Ja — das ist sogar oft das gewünschte Modell hier. Eine Nachmittagsbegleitung von 14-18 Uhr für gemeinsamen Spaziergang, Kaffee und Gespräch ist typisch.' },
        { question: 'Was kostet eine Nachtwache?', answer: 'Der Stundensatz hängt von der Qualifikation und davon ab, ob die Nacht aktiv (durchgehend wach) oder in Bereitschaft gefahren wird. Nacht- und Sonntagszuschläge nach § 3b EStG sind enthalten. Konkrete Summe für die geplante Schicht bekommen Sie im Erstgespräch.' },
        { question: 'Wir wollen für die Pflege unseres Vaters jemanden, der dauerhaft bleibt und nicht häufig wechselt. Geht das?', answer: 'Genau das ist unser Modell. Wir setzen kleine feste Teams ein (2-4 Personen), die sich abwechseln. Der Klient hat nicht jeden Tag ein neues Gesicht vor sich.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'direkt angrenzend' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'direkt angrenzend' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin' },
      ],
    },
  },

  // === 12. Nikolassee ==========================================================
  {
    slug: 'nikolassee',
    name: 'Nikolassee',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14109', '14129', '14163'],
    geo: { lat: 52.434, lng: 13.201 },
    hook: 'Villenkolonie am See.',
    hideInFooter: true,
    metaTitle: 'Pflegedienst Nikolassee — diskret in der Villenkolonie',
    metaDescription: 'Privater Pflegedienst in Nikolassee: Pflege, 1:1-Betreuung und 24h-Betreuung für die Villenkolonie am Schlachtensee und Nikolassee. Diskret und verlässlich.',
    h1: 'Pflegedienst Nikolassee — am See, in der Villenkolonie',
    primaryKeyword: 'Pflegedienst Nikolassee',
    detail: {
      intro: [
        'Nikolassee wurde ab 1901 als Villenkolonie am Rand des Grunewalds angelegt — zwischen Schlachtensee und Nikolassee, mit großen Grundstücken, alten Baumbeständen und einer Ruhe, die man in Berlin selten findet. Wer hier ein Haus besitzt, hat es oft vor Jahrzehnten gekauft oder von den Eltern übernommen. Die Kolonie ist mit ihren Bewohnerinnen und Bewohnern alt geworden.',
        'Genau daraus entsteht der Pflegebedarf: Eigentümerinnen und Eigentümer, die ihr Haus am See nicht verlassen wollen und auch nicht müssen. Wir kommen zu ihnen — dorthin, wo sie ihr Leben verbracht haben, statt sie in eine Einrichtung zu verlegen.',
      ],
      sections: [
        {
          heading: 'Wer in Nikolassee zu uns kommt',
          list: [
            'Ältere Hauseigentümer*innen, die seit Jahrzehnten in der Villenkolonie leben und dort bleiben möchten.',
            'Ehepaare, bei denen ein Partner pflegebedürftig wird und der andere Entlastung braucht.',
            'Erwachsene Kinder, die selbst nicht in Berlin wohnen und eine verlässliche Betreuung für die Eltern am See suchen.',
            'Menschen mit beginnender Demenz, für die die vertraute Umgebung am Wasser ein Anker ist.',
          ],
        },
        {
          heading: 'Was Pflege in Nikolassee ausmacht',
          stronglist: [
            { label: 'Haus statt Wohnung', text: 'Pflege findet hier meist im Einfamilienhaus über mehrere Etagen statt. Treppen, Garten, Wege zum See — wir stimmen die Betreuung auf die tatsächliche Wohnsituation ab, nicht auf eine Standard-Wohnung.' },
            { label: 'Bindung an die Seenlage', text: 'Der tägliche Weg an den Schlachtensee oder Nikolassee gehört für viele zum Leben. Wir begleiten diese Spaziergänge, solange es geht — Bewegung an vertrauten Orten hält länger stabil als jedes Programm.' },
            { label: 'Diskretion in der Kolonie', text: 'In einer überschaubaren Villenkolonie kennt man einander. Unser Team tritt zurückhaltend auf, ohne Firmenwagen-Show, und respektiert, dass Nachbarschaft hier auch Öffentlichkeit bedeutet.' },
          ],
        },
      ],
      faq: [
        { question: 'Können Sie meinen Vater auf seinen täglichen Weg an den Schlachtensee begleiten?', answer: 'Ja. Begleitete Spaziergänge gehören zu unseren häufigsten Einsätzen hier. Wir passen Tempo und Strecke an die Tagesform an und sind auch bei Unsicherheit oder Sturzgefahr an der Seite.' },
        { question: 'Das Haus hat mehrere Etagen — ist das ein Problem für die Pflege?', answer: 'Nein, aber wir schauen es uns im Erstgespräch an. Wir beraten auch, wie sich der Alltag auf eine Etage verlagern lässt oder welche Hilfsmittel Treppen sicherer machen.' },
        { question: 'Wie schnell sind Sie im Notfall aus Moabit da?', answer: 'Für spontane Akuteinsätze ist die Fahrzeit von 20-30 Minuten ehrlich einzuplanen. Deshalb arbeiten wir hier mit festen, vorab geplanten Diensten statt mit Minutenreaktion — so ist immer jemand vor Ort, wenn es zählt.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'benachbart' },
        { label: 'Grunewald', href: '/standorte/grunewald' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },

  // === 13. Wannsee =============================================================
  {
    slug: 'wannsee',
    name: 'Wannsee',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14109'],
    geo: { lat: 52.421, lng: 13.163 },
    hook: 'Am Wasser, in Ruhe.',
    hideInFooter: true,
    metaTitle: 'Pflegedienst Wannsee — Pflege am Wasser, diskret',
    metaDescription: 'Privater Pflegedienst in Wannsee: Pflege, 1:1-Betreuung und 24h-Betreuung in den Villen- und Wasserlagen am Großen Wannsee. Verlässlich und diskret.',
    h1: 'Pflegedienst Wannsee — am Wasser zu Hause bleiben',
    primaryKeyword: 'Pflegedienst Wannsee',
    detail: {
      intro: [
        'Wannsee ist Wasser, Wald und Weite. Zwischen Großem Wannsee und Havel liegen großzügige Villen, Wassergrundstücke und ruhige Straßen am äußersten Südwestrand Berlins. Wer hier wohnt, hat sich meist bewusst für die Abgeschiedenheit entschieden — und will sie auch im Alter nicht aufgeben.',
        'Für die Pflege heißt das: Wir kommen dorthin, wo der öffentliche Nahverkehr dünn wird und die Wege lang werden. Etablierte, ältere Anwohnerinnen und Anwohner in den Wasserlagen sind unsere typischen Klient*innen — Menschen, die in ihrem Haus am See bleiben möchten, so lange es geht.',
      ],
      sections: [
        {
          heading: 'Wer in Wannsee zu uns kommt',
          list: [
            'Ältere Villenbesitzer*innen in den Wasser- und Waldlagen, die zu Hause versorgt werden wollen.',
            'Ehepaare, bei denen die häusliche Pflege durch einen Partner an ihre Grenzen kommt.',
            'Angehörige, die aus der Ferne organisieren und eine feste Betreuung vor Ort brauchen.',
            'Menschen mit hohem Pflegebedarf, für die eine 24-Stunden-Begleitung im eigenen Haus die Alternative zum Heim ist.',
          ],
        },
        {
          heading: 'Was Pflege in Wannsee ausmacht',
          stronglist: [
            { label: 'Abgeschiedene Lagen', text: 'Wassergrundstücke liegen oft am Ende langer Zufahrten, mancher Weg führt durch den Garten bis ans Ufer. Unser Team stellt sich auf diese Wege ein und bringt mit, was für den Tag gebraucht wird.' },
            { label: '24-Stunden-Modelle', text: 'Wegen der Lage und des oft höheren Pflegebedarfs sind hier durchgehende Betreuungen häufiger als anderswo. Wir arbeiten mit festen, kleinen Teams, damit auch nachts jemand Vertrautes da ist.' },
          ],
        },
      ],
      faq: [
        { question: 'Wie schnell sind Sie in Wannsee vor Ort?', answer: 'Für einen ersten Einsatz brauchen wir in der Regel zwei bis drei Tage Vorlauf. In akuten Situationen versuchen wir es innerhalb von 24 Stunden — die Anfahrt planen wir vor, damit wir pünktlich da sind.' },
        { question: 'Unser Haus liegt direkt am Wasser mit langer Zufahrt — kommen Sie trotzdem?', answer: 'Ja. Wir betreuen regelmäßig Adressen in abgelegenen Wasserlagen. Wichtig ist nur, dass wir die Zufahrt und Parksituation vorab kennen, damit jeder Dienst reibungslos beginnt.' },
        { question: 'Lohnt sich der Weg aus Moabit für Sie überhaupt?', answer: 'Ja — wir betreuen Wannsee bewusst mit. Bei der Fahrzeit von 25-35 Minuten planen wir Dienste im Voraus und in sinnvollen Blöcken; kurze Stippvisiten von 20 Minuten sind hier weniger praktikabel als längere, verlässliche Einsätze.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'benachbart' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'jenseits der Stadtgrenze' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Potsdam', href: '/standorte/potsdam', note: 'über die Havel' },
      ],
    },
  },

  // === 14. Frohnau =============================================================
  {
    slug: 'frohnau',
    name: 'Frohnau',
    bezirk: 'Reinickendorf',
    plz: ['13465'],
    geo: { lat: 52.640, lng: 13.291 },
    hook: 'Gartenstadt im Norden.',
    hideInFooter: true,
    metaTitle: 'Pflegedienst Frohnau — Gartenstadt im Berliner Norden',
    metaDescription: 'Privater Pflegedienst in Frohnau: Pflege, 1:1-Betreuung und 24h-Betreuung in der Gartenstadt im Norden Berlins. Verlässliche Versorgung, auch bei weiter Anfahrt.',
    h1: 'Pflegedienst Frohnau — in der Gartenstadt im Norden',
    primaryKeyword: 'Pflegedienst Frohnau',
    detail: {
      intro: [
        'Frohnau ist der nördlichste Ortsteil Berlins — 1910 als Gartenstadt am Reißbrett geplant, mit weiten Einfamilienhaus-Straßen, viel Grün und einer ausgesprochenen Ruhe. Die Häuser sind oft seit Generationen in Familienhand, die Eigentümerinnen und Eigentümer im Ruhestand. Wer hier alt wird, will die Gartenstadt in aller Regel nicht mehr verlassen.',
        'Ehrlich gesagt: Frohnau liegt am äußersten Rand unseres Einsatzgebiets. Von unserem Sitz in Moabit sind es rund 25-35 Minuten über die A111. Deshalb planen wir hier bewusst mit festen, längeren Diensten statt mit kurzen Visiten — so ist die Betreuung verlässlich, und die Wegzeit fällt nicht bei jedem Einsatz neu ins Gewicht.',
      ],
      sections: [
        {
          heading: 'Wer in Frohnau zu uns kommt',
          list: [
            'Ältere Hauseigentümer*innen in den Einfamilienhaus-Straßen, die zu Hause bleiben möchten.',
            'Ehepaare im Ruhestand, bei denen ein Partner pflegebedürftig wird.',
            'Erwachsene Kinder, die weiter entfernt wohnen und eine verlässliche Betreuung der Eltern im Norden organisieren.',
            'Menschen mit Demenz, für die die vertraute, ruhige Gartenstadt ein wichtiger Halt ist.',
          ],
        },
        {
          heading: 'Was Pflege in Frohnau ausmacht',
          stronglist: [
            { label: 'Haus und Garten', text: 'Pflege findet hier fast immer im eigenen Haus mit Garten statt. Wege, Treppen und Außenbereich gehören zum Alltag — wir richten die Betreuung an der realen Wohnsituation aus.' },
            { label: 'Planbarkeit statt Spontaneinsatz', text: 'Wegen der nördlichen Randlage arbeiten wir mit festen Dienstplänen und kleinen Teams. Das gibt Ruhe im Ablauf und stellt sicher, dass immer jemand Vertrautes vor Ort ist.' },
            { label: 'Selbstbestimmtes Zuhause', text: 'Die Frohnauer Klient*innen sind meist eigenständige Menschen mit klaren Vorstellungen. Wir unterstützen, ohne zu bevormunden, und halten die gewohnten Abläufe so lange wie möglich aufrecht.' },
          ],
        },
      ],
      faq: [
        { question: 'Frohnau liegt weit im Norden — betreuen Sie uns trotzdem?', answer: 'Ja. Wir fahren Frohnau bewusst an, planen aber mit festen, längeren Diensten. So bleibt die Betreuung verlässlich und wirtschaftlich sinnvoll, obwohl die Anfahrt aus Moabit rund eine halbe Stunde dauert.' },
        { question: 'Fällt wegen der Entfernung ein Aufschlag an?', answer: 'Je nach Einsatzumfang kann für die weite Anfahrt eine Anfahrtspauschale anfallen. Wir sagen Ihnen das offen im Erstgespräch, bevor irgendein Vertrag zustande kommt — versteckte Kosten gibt es bei uns nicht.' },
        { question: 'Können Sie auch eine durchgehende Betreuung im Haus stellen?', answer: 'Ja. Gerade in der Randlage sind längere oder durchgehende Einsätze oft die praktikabelste Lösung. Wir arbeiten mit kleinen festen Teams, damit auch bei einer 24-Stunden-Betreuung nicht ständig neue Gesichter im Haus sind.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Moabit', href: '/standorte/moabit', note: 'unser Sitz' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung' },
      ],
    },
  },

  // === 15. Kleinmachnow ========================================================
  {
    slug: 'kleinmachnow',
    name: 'Kleinmachnow',
    bezirk: 'Potsdam-Mittelmark (Brandenburg)',
    plz: ['14532'],
    geo: { lat: 52.408, lng: 13.225 },
    hook: 'Direkt an der Stadtgrenze.',
    hideInFooter: true,
    metaTitle: 'Pflegedienst Kleinmachnow — grenznah in Brandenburg',
    metaDescription: 'Privater Pflegedienst in Kleinmachnow: Pflege, 1:1-Betreuung und 24h-Betreuung in der Gemeinde direkt an der Berliner Grenze. Einsatz über die Stadtgrenze.',
    h1: 'Pflegedienst Kleinmachnow — grenznah in Brandenburg',
    primaryKeyword: 'Pflegedienst Kleinmachnow',
    detail: {
      intro: [
        'Kleinmachnow liegt in Brandenburg, im Landkreis Potsdam-Mittelmark — aber es grenzt direkt an Berlin-Zehlendorf. Die Gemeinde mit rund 20.000 Einwohnern ist nach 1990 stark gewachsen: viele Villen, Einfamilienhäuser und gut situierte Familien, die die Nähe zu Berlin bei mehr Grün und Ruhe schätzen. Ein Teil dieser Zuzügler ist inzwischen im Rentenalter, ein anderer Teil hat hier immer schon gewohnt.',
        'Für uns ist Kleinmachnow ein Einsatz über die Stadtgrenze hinaus. Weil die Gemeinde unmittelbar an Zehlendorf anschließt, ist sie von unseren Südwest-Gebieten aus gut erreichbar — die Grenze zwischen Berlin und Brandenburg ist hier eher eine Linie auf der Karte als eine echte Distanz.',
      ],
      sections: [
        {
          heading: 'Wer in Kleinmachnow zu uns kommt',
          list: [
            'Ältere Eigentümer*innen der zahlreichen Villen und Einfamilienhäuser, die zu Hause versorgt werden wollen.',
            'Familien, die nach 1990 zugezogen sind und deren Eltern nun pflegebedürftig werden.',
            'Ehepaare, bei denen die häusliche Pflege durch einen Partner Entlastung braucht.',
            'Angehörige, die einen privaten Anbieter mit Berliner Anbindung suchen statt einer rein regionalen Lösung.',
          ],
        },
        {
          heading: 'Was Pflege in Kleinmachnow ausmacht',
          stronglist: [
            { label: 'Brandenburg, aber grenznah', text: 'Kleinmachnow gehört verwaltungsrechtlich zu Brandenburg, liegt aber Tür an Tür mit Zehlendorf. Für die Betreuung heißt das kurze Wege von unseren Südwest-Standorten — und trotzdem ein Umfeld mit dörflicherer Ruhe.' },
            { label: 'Haus- und Gartenlagen', text: 'Die typische Kleinmachnower Adresse ist ein Einfamilienhaus mit Grundstück. Treppen, Garten und Wege gehören zum Alltag; wir richten die Pflege an der konkreten Wohnsituation aus.' },
            { label: 'Klarheit bei den Wegen', text: 'Weil wir über die Stadtgrenze fahren, planen wir Dienste vorausschauend und in sinnvollen Blöcken. So bleibt die Betreuung verlässlich, ohne dass die Fahrzeit den Einsatz auffrisst.' },
          ],
        },
      ],
      faq: [
        { question: 'Fahren Sie wirklich über die Stadtgrenze?', answer: 'Ja. Kleinmachnow gehört zu unserem festen Einsatzgebiet. Die Anfahrt kalkulieren wir vorher ein, damit die vereinbarte Zeit auch die Zeit ist, in der wir bei Ihnen sind.' },
        { question: 'Kleinmachnow liegt in Brandenburg — sind Sie überhaupt dort tätig?', answer: 'Ja. Wir fahren regelmäßig über die Stadtgrenze nach Kleinmachnow. Weil die Gemeinde direkt an Zehlendorf grenzt, ist sie von unseren Südwest-Gebieten aus gut erreichbar.' },
        { question: 'Kostet die Fahrt über die Landesgrenze extra?', answer: 'Je nach Umfang des Einsatzes kann eine Anfahrtspauschale anfallen. Wir besprechen das offen im Erstgespräch, bevor Sie sich entscheiden — ohne versteckte Posten.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'grenznah' },
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Potsdam', href: '/standorte/potsdam' },
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler' },
      ],
    },
  },

  // === 16. Potsdam =============================================================
  {
    slug: 'potsdam',
    name: 'Potsdam',
    bezirk: 'Landeshauptstadt Brandenburg',
    plz: ['14467', '14469', '14471', '14473', '14476', '14478', '14480', '14482'],
    geo: { lat: 52.399, lng: 13.066 },
    hook: 'Landeshauptstadt an den Seen.',
    hideInFooter: true,
    metaTitle: 'Pflegedienst Potsdam — private Pflege in der Landeshauptstadt',
    metaDescription: 'Privater Pflegedienst in Potsdam: Pflege, 1:1-Betreuung und 24h-Betreuung in Babelsberg, Berliner Vorstadt und den Seenlagen. Diskret, auch bei weiter Anfahrt.',
    h1: 'Pflegedienst Potsdam — in der Landeshauptstadt an den Seen',
    primaryKeyword: 'Pflegedienst Potsdam',
    detail: {
      intro: [
        'Potsdam ist die Landeshauptstadt Brandenburgs — eine kreisfreie Stadt mit rund 180.000 Einwohnern, historischer Mitte, weiten Seenlagen und wohlhabenden Villenvierteln wie Babelsberg und der Berliner Vorstadt. In diesen Quartieren an den Seen und in den ruhigen Wohnstraßen leben viele ältere Menschen und Besserverdienende, die ihr Zuhause auch bei Pflegebedarf nicht aufgeben wollen.',
        'Für uns ist Potsdam ehrlicherweise der am weitesten entfernte Punkt unseres Einsatzgebiets: Von Moabit sind es je nach Verkehr etwa 35-50 Minuten über A115 und AVUS. Wir betreuen Potsdam bewusst mit — aber mit festen, längeren Diensten und, je nach Umfang, einer transparent besprochenen Anfahrtspauschale. Für kurze Stippvisiten ist die Strecke zu weit; für verlässliche, geplante Betreuung ist sie gut machbar.',
      ],
      sections: [
        {
          heading: 'Wer in Potsdam zu uns kommt',
          list: [
            'Ältere Eigentümer*innen in den Villenvierteln Babelsberg und Berliner Vorstadt, die zu Hause bleiben möchten.',
            'Bewohner*innen der ruhigen Seenlagen im Westen der Stadt mit gehobenem Pflegeanspruch.',
            'Angehörige, die einen diskreten privaten Anbieter mit Berliner Anbindung suchen.',
            'Ehepaare, bei denen die häusliche Pflege durch einen Partner an ihre Grenzen stößt.',
          ],
        },
        {
          heading: 'Was Pflege in Potsdam ausmacht',
          stronglist: [
            { label: 'Große, ruhige Anwesen', text: 'Die typische Adresse in Babelsberg oder der Berliner Vorstadt ist ein großzügiges Haus mit Garten, oft in Wasser- oder Parknähe. Wir stellen die Betreuung auf diese Wohnsituation ein, statt sie in ein Standard-Raster zu pressen.' },
            { label: 'Planung statt Reaktion', text: 'Wegen der Entfernung aus Moabit arbeiten wir in Potsdam mit festen Dienstplänen und kleinen Teams. Das macht die Betreuung verlässlich und sorgt dafür, dass immer jemand Vertrautes vor Ort ist.' },
          ],
        },
      ],
      faq: [
        { question: 'Kommen Sie auch bis nach Potsdam?', answer: 'Ja, Potsdam gehört zu unserem Einsatzgebiet — Babelsberg, Berliner Vorstadt und die Seenlagen ebenso wie die Innenstadt. Die längere Anfahrt planen wir ein, sie geht nicht von Ihrer Betreuungszeit ab.' },
        { question: 'Potsdam ist von Berlin ein gutes Stück entfernt — betreuen Sie dort wirklich?', answer: 'Ja, aber ehrlich gesagt am Rand unseres Gebiets. Von Moabit sind es 35-50 Minuten. Deshalb planen wir Potsdam mit festen, längeren Diensten statt mit kurzen Visiten — so ist die Betreuung verlässlich und die Wegzeit sinnvoll eingesetzt.' },
        { question: 'Fällt für Potsdam eine Anfahrtspauschale an?', answer: 'Je nach Umfang des Einsatzes ja. Wir sagen Ihnen die Konditionen vollständig im Erstgespräch, bevor Sie sich festlegen. Versteckte Zusatzkosten gibt es bei uns nicht.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'über die Havel' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },
];

export function getStandort(slug: string): SeoStandort | undefined {
  return STANDORTE.find((s) => s.slug === slug);
}
