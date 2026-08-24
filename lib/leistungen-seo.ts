/**
 * SEO-Money-Page-Daten aus dem SEO-Mega-Briefing (Welle 1).
 *
 * Bewusst getrennt von `lib/leistungen.ts`, das die 6 Karten der Startseite
 * speist (siehe Memory `seo-briefing-vs-repo-conflicts`). Konsolidierung
 * dieser beiden Quellen ist eine spätere Entscheidung.
 */

export type SeoLeistungSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** "**Label:** Text"-Pattern: Begriff fett + erläuternder Block */
  stronglist?: Array<{ label: string; text: string }>;
  /** Paragraphen, die NACH list/stronglist erscheinen sollen */
  trailingParagraphs?: string[];
};

export type SeoLeistungDetail = {
  intro: string[];
  sections: SeoLeistungSection[];
  faq: Array<{ question: string; answer: string }>;
  cta: { text: string; href: string };
  relatedLinks: Array<{ label: string; href: string; note?: string }>;
};

export type SeoLeistung = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Wenn nicht gesetzt: Card ohne Link, kein eigener Route-Eintrag in generateStaticParams */
  detail?: SeoLeistungDetail;
};

export const LEISTUNGEN_SEO: readonly SeoLeistung[] = [
  // === Money Page 1: 1:1-Betreuung zu Hause ==================================
  {
    slug: '1-zu-1-betreuung-berlin',
    title: '1:1-Betreuung zu Hause',
    short: 'Eine Person, ein Mensch, ungeteilte Aufmerksamkeit — stundenweise bis rund um die Uhr in der eigenen Wohnung.',
    metaTitle: '1:1-Betreuung Berlin – private Begleitung zu Hause',
    metaDescription: 'Privat gezahlte 1:1-Betreuung in Berlin: eine feste Bezugsperson zu Hause, stundenweise bis durchgehend. Bei Demenz, Sturzgefahr, in der letzten Lebensphase. Erstgespräch kostenlos.',
    h1: '1:1-Betreuung zu Hause — ungeteilte Aufmerksamkeit für einen Menschen',
    primaryKeyword: '1:1-Betreuung Berlin',
    secondaryKeywords: ['private Betreuung zu Hause Berlin', 'Einzelbetreuung Demenz Berlin', 'Betreuungskraft Selbstzahler Berlin'],
    detail: {
      intro: [
        'In der ambulanten Pflege ist die Uhr immer im Raum. Fünfzehn Minuten für den Toilettengang, zwölf für das Frühstück, dann der nächste Haushalt. Was dabei zuerst verloren geht, ist das, worauf es ankommt: Zeit, in der niemand weitermuss.',
        '1:1-Betreuung heißt: Eine Mitarbeiterin ist für einen einzigen Menschen da. Keine Tour, keine Parallelversorgung, keine Übergabe mitten im Gespräch. In der eigenen Wohnung, in vertrauter Umgebung, mit den eigenen Gewohnheiten. Stundenweise, für einzelne Nächte, für eine schwierige Phase oder dauerhaft.',
        'Wir arbeiten ausschließlich als Selbstzahler-Pflegedienst mit einem kleinen festen Team. Das ist eine bewusste Entscheidung: Sie hat einen Preis, aber sie schafft den Rahmen, in dem diese Art von Zeit überhaupt möglich ist.',
      ],
      sections: [
        {
          heading: 'Wann 1:1-Betreuung der richtige Weg ist',
          paragraphs: [
            'Nicht jede Situation braucht eine ständige Begleitung. Diese hier tun es meistens:',
          ],
          stronglist: [
            { label: 'Demenz mit nächtlicher Unruhe', text: 'Aufstehen, Wandern, Verwirrung über Tag und Nacht. Angehörige halten das wenige Wochen durch, dann sind sie selbst am Ende. Eine feste Begleitperson bringt Struktur zurück — und Schlaf für die Familie.' },
            { label: 'Sturzgefahr', text: 'Wer nachts aufsteht und nicht mehr sicher steht, gehört nicht allein in die Wohnung. Wir sind da, wenn aufgestanden wird, helfen rechtzeitig und beugen Stürzen vor, die sonst eine ganze Lebensphase prägen.' },
            { label: 'Die letzte Lebensphase zu Hause', text: 'Viele Menschen möchten zu Hause sterben. Damit das gelingt, braucht die Familie jemanden, der die langen Stunden mitträgt — wach, ruhig, erfahren, ohne Hektik.' },
            { label: 'Nach einer Operation', text: 'Die ersten Nächte in der Genesungsphase sind die kritischsten: Verwirrtheit, Unsicherheit beim Aufstehen, Schmerz. Eine Begleitung überbrückt, bis Stabilität zurück ist.' },
            { label: 'Wenn Angehörige an ihre Grenze kommen', text: 'Pflegende Angehörige brauchen Nächte, in denen sie durchschlafen, und Tage, an denen sie nicht erreichbar sein müssen. Wir übernehmen diese Stunden verlässlich.' },
          ],
        },
        {
          heading: 'Was eine Betreuungskraft bei uns tut',
          stronglist: [
            { label: 'Da sein', text: 'Anwesend, aufmerksam, ansprechbar. Reden, wenn jemand reden will. Schweigen, wenn jemand schweigen will.' },
            { label: 'Beobachten und einordnen', text: 'Veränderungen bemerken und sachlich weitergeben — an die Familie, an den Hausarzt, an den Pflegedienst. Aus über 15 Jahren Erfahrung wissen unsere Kräfte, was wichtig ist und was warten kann.' },
            { label: 'Den Alltag halten', text: 'Essen und Trinken anreichen, Toilettengänge begleiten, beim Lagewechsel helfen, Medikamente nach Plan geben, für Ruhe und Ordnung sorgen.' },
            { label: 'Begleiten, wohin es nötig ist', text: 'Zum Hausarzt, zum Facharzt, zum Spaziergang, zur Familienfeier. Niemand wartet allein im Flur.' },
            { label: 'Die Familie entlasten', text: 'Sie müssen nicht jeden Abend hetzen. Sie wissen: Jemand ist da, und Sie erfahren, was war.' },
          ],
        },
        {
          heading: 'Wache Begleitung oder Bereitschaft?',
          paragraphs: ['Für die Nachtstunden unterscheiden wir zwei Modelle — der Unterschied schlägt deutlich auf den Preis durch:'],
          stronglist: [
            { label: 'Aktive (wache) Begleitung', text: 'Die Mitarbeiterin bleibt durchgehend wach, beobachtet aktiv, dokumentiert regelmäßig. Sinnvoll bei akuten Situationen — Sterbephase, schwere Verwirrtheit, hohe Sturzgefahr.' },
            { label: 'Bereitschaft', text: 'Die Mitarbeiterin schläft in einem angrenzenden Raum oder in einem Schlafstuhl im selben Zimmer und wird bei jedem Geräusch geweckt. Sinnvoll, wenn nachts meist Ruhe herrscht, aber niemand allein bleiben soll.' },
          ],
          trailingParagraphs: ['Welches Modell passt, klären wir im Erstgespräch. Wechseln ist jederzeit möglich, wenn sich die Lage ändert.'],
        },
        {
          heading: 'Was 1:1-Betreuung kostet',
          paragraphs: [
            '1:1-Betreuung ist eine Selbstzahler-Leistung. Die gesetzliche Pflegekasse übernimmt sie nicht direkt. Bei vorhandenem Pflegegrad lassen sich aber häufig die Verhinderungspflege (§ 39 SGB XI) oder der Entlastungsbetrag (§ 45b SGB XI) einsetzen — Sie reichen unsere Rechnung dann selbst ein. Wir beraten Sie, was in Ihrem Fall möglich ist.',
            'Pauschalpreise nennen wir nicht, weil die Situationen zu unterschiedlich sind: Der Stundensatz hängt von der erforderlichen Qualifikation, vom Umfang und davon ab, ob es eine wache Begleitung oder eine Bereitschaft ist. Im kostenlosen Erstgespräch hören wir erst zu und machen danach einen konkreten, transparenten Vorschlag mit Stundensatz und voraussichtlicher Gesamtsumme.',
            'Zuschläge nach § 3b EStG weisen wir offen aus: nachts 25 %, sonn- und feiertags 50 %.',
          ],
        },
      ],
      faq: [
        { question: 'Wie schnell können Sie anfangen?', answer: 'Bei planbaren Situationen genügen zwei bis drei Tage Vorlauf. In akuten Fällen versuchen wir, innerhalb von 24 Stunden eine erste Begleitung zu stellen — je nach Wochentag und Tageszeit auch schneller. Rufen Sie an, dann sagen wir Ihnen ehrlich, was geht.' },
        { question: 'Können wir nur einzelne Nächte buchen?', answer: 'Ja. Viele Einsätze sind genau das: eine, zwei oder drei Nächte in einer kritischen Phase. Einzelne Wochenendnächte oder eine feste Nacht pro Woche gehen ebenso wie eine durchgehende Begleitung über Monate.' },
        { question: 'Ist es immer dieselbe Person?', answer: 'So weit es geht, ja. Wir arbeiten mit einem kleinen festen Team und setzen bei längeren Begleitungen zwei bis drei Kräfte im Wechsel ein, damit auch bei Krankheit oder Urlaub ein vertrautes Gesicht kommt. Ständig wechselndes Personal wäre das Gegenteil dessen, wofür 1:1-Betreuung da ist.' },
        { question: 'Was, wenn meine Mutter die Person nicht mag?', answer: 'Dann tauschen wir sie aus. Meistens ist die Fremdheit nach der ersten Stunde vorbei, aber persönliche Chemie ist in dieser Arbeit kein Nebenaspekt. Sagen Sie uns Bescheid, wir organisieren das ohne Diskussion.' },
        { question: 'Welche Qualifikation haben die Kräfte?', answer: 'Das richtet sich nach der Situation. Bei pflegerisch anspruchsvollen Lagen kommt eine examinierte Pflegefachkraft. Wo es um Anwesenheit, Aufmerksamkeit und Alltag geht, ist eine erfahrene Betreuungskraft oft die bessere Wahl. Was Ihr Fall braucht, klären wir vorher — nicht hinterher.' },
        { question: 'Übernimmt die Krankenkasse das?', answer: 'Nein. Die gesetzliche Krankenkasse zahlt medizinische Behandlung, nicht die durchgehende Anwesenheit einer Betreuungsperson. Manche privaten Zusatzversicherungen erstatten anteilig — das lohnt sich vorab zu klären.' },
        { question: 'Brauchen wir ein eigenes Zimmer für die Betreuungskraft?', answer: 'Bei Bereitschaft reicht ein Sofa, ein Sessel oder ein Schlafstuhl — ein Bett ist nicht nötig. Bei wacher Begleitung genügt ein Stuhl und Licht zum Lesen. Wir richten uns nach Ihrer Wohnung, nicht umgekehrt.' },
        { question: 'Was passiert in einem Notfall?', answer: 'Die Betreuungskraft verständigt den Notarzt (112), informiert die Angehörigen und bleibt bei der Person, bis Hilfe da ist. Was zu tun ist, wird bei Beginn der Begleitung mit Ihnen und — sofern gewünscht — mit dem Hausarzt schriftlich festgelegt.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nächte abgedeckt werden müssen' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung', note: 'durchgehende Versorgung im Wechseldienst' },
        { label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung', note: 'Hintergrund zur Begleitung Demenzerkrankter' },
      ],
    },
  },
  // === Money Page 2: Systemsprenger-Betreuung ================================
  {
    slug: 'systemsprenger-betreuung',
    title: 'Systemsprenger-Betreuung',
    short: '1:1-Betreuung bei komplexen psychiatrischen Verläufen.',
    metaTitle: 'Systemsprenger-Betreuung Berlin – Spezialisierte 1:1-Pflege',
    metaDescription: '1:1-Betreuung für komorbide Patientinnen und Patienten, psychiatrische Notfälle und Menschen, die im Regelsystem keinen Platz finden. Erfahrenes Team in Berlin.',
    h1: 'Systemsprenger-Betreuung — wenn nichts anderes mehr passt',
    primaryKeyword: 'Systemsprenger Betreuung Berlin',
    secondaryKeywords: ['1:1 Betreuung Psychiatrie', 'Komorbidität Pflege', 'Psychiatrische Krise'],
    detail: {
      intro: [
        '„Systemsprenger" ist ein hartes Wort. Wir mögen es nicht besonders — aber es benennt eine Realität: Es gibt Menschen, deren Bedarf so komplex ist, dass die üblichen Strukturen sie nicht halten können. Komorbidität (Psychiatrie und Sucht, Psychiatrie und Trauma, Persönlichkeitsstörungen mit Selbstverletzung). Wiederholte Kriseneinweisungen. Beziehungsabbrüche mit Hilfesystemen. Diagnosen, die sich gegenseitig ausschließen sollten und doch zusammen auftreten.',
        'Wir sind darauf spezialisiert. Nicht weil wir „alles können", sondern weil wir die Haltung, die Erfahrung und die Ressourcen haben, mit genau diesen Situationen umzugehen. Seit über 15 Jahren betreuen wir in Berlin Menschen, bei denen andere Anbieter abwinken.',
      ],
      sections: [
        {
          heading: 'Wer von uns betreut wird',
          paragraphs: [
            'Es gibt kein typisches Klientel — aber wiederkehrende Konstellationen. Ein paar Beispiele aus unserer Arbeit, anonymisiert:',
          ],
          stronglist: [
            { label: 'Komorbide Psychiatrie und Sucht', text: 'Ein junger Erwachsener mit schweren psychotischen Episoden, gleichzeitig Cannabis- und Alkoholmissbrauch. Stationäre Suchttherapien scheitern an der Psychiatrie, psychiatrische Aufenthalte am Konsum. Wir begleiten zu Hause — mit klarem Rahmen, regelmäßigen Kontakten, fester Bezugsperson.' },
            { label: 'Akute Eigengefährdung im häuslichen Umfeld', text: 'Eine Frau Mitte 50, schwere Depression, nach mehreren Suizidversuchen aus der Klinik entlassen. Angehörige können nicht 24/7 da sein, eine erneute Aufnahme will sie nicht. Wir stellen 24-Stunden-Betreuung im Wechselschichtmodell — bis die ambulante Therapie greift.' },
            { label: 'Wohngemeinschaftliches Wohnen scheitert', text: 'Ein Mensch mit Borderline-Persönlichkeitsstörung, der in jeder betreuten WG eskaliert, aber zu Hause stabilisiert werden kann — mit fester Bezugsbetreuung und konstantem Team.' },
            { label: 'Demenz mit schwerer Aggressivität', text: 'Eine Person mit fortgeschrittener Demenz, körperlich noch fit, in keinem Pflegeheim mehr gehalten — aber in der eigenen Wohnung mit einer ruhigen, erfahrenen Betreuung handhabbar.' },
          ],
        },
        {
          heading: 'Was unsere Betreuung in solchen Fällen ausmacht',
          stronglist: [
            { label: 'Festes kleines Team', text: 'Wir arbeiten nicht mit ständig wechselnden Honorarkräften. Bei jeder Klientin und jedem Klienten gibt es 2-4 Bezugspersonen, die sich abwechseln. Vertrauen wächst, weil dieselben Gesichter wiederkommen.' },
            { label: 'Klare Haltung, kein Mitleid', text: 'Wir sind freundlich, aber konsequent. Wer provoziert, kriegt keine Gegenprovokation. Wer testet, erfährt verlässliche Grenzen. Das ist — paradox — oft das, was unsere Klientinnen und Klienten am meisten brauchen.' },
            { label: 'Erfahrung im Krisenmanagement', text: 'Unser Team kennt Aggression, Suizidalität, psychotische Episoden, Selbstverletzung. Wir geraten nicht in Panik, wir deeskalieren, dokumentieren, halten Kontakt zur behandelnden Ärztin oder zum gesetzlichen Betreuer.' },
            { label: 'Vernetzung mit Hilfesystemen', text: 'Wir arbeiten eng mit Kliniken, niedergelassenen Psychiaterinnen und Psychiatern, gesetzlichen Betreuern, sozialpsychiatrischen Diensten zusammen. Wir sind nicht der Ersatz für ein professionelles Behandlungsteam — wir sind dessen verlängerter Arm im häuslichen Alltag.' },
          ],
        },
        {
          heading: 'Wer das bezahlt',
          paragraphs: [
            'Systemsprenger-Betreuung ist teuer — und sie wird selten regulär finanziert. Mögliche Wege:',
          ],
          list: [
            'Selbstzahlung durch Familie/Angehörige — bei wirtschaftlicher Leistungsfähigkeit oft der schnellste Weg.',
            'Eingliederungshilfe nach SGB IX — bei anerkannter seelischer Behinderung, beantragt beim zuständigen Bezirksamt.',
            'Sozialhilfe nach SGB XII — in Härtefällen, wenn andere Mittel ausgeschöpft sind.',
            'Private Versicherungen — wenn Versorgungsansprüche bestehen.',
          ],
        },
        {
          heading: 'Was wir nicht leisten',
          paragraphs: [
            'Wir sind ehrlich: Wir können nicht alles.',
          ],
          stronglist: [
            { label: 'Zwangsmaßnahmen', text: 'sind nicht unser Auftrag — wenn jemand akut fremdgefährdet ist und sich nicht freiwillig versorgen lässt, gehört das in eine Klinik mit geschlossener Station.' },
            { label: 'Sucht-Entzug', text: 'machen wir nicht — das gehört in qualifizierte Suchtkliniken.' },
            { label: 'Längere Akutpsychotherapie', text: 'ist nicht unsere Rolle — wir begleiten Therapie, ersetzen sie nicht.' },
          ],
        },
      ],
      faq: [
        { question: 'Nehmen Sie auch Klienten auf, die andere Pflegedienste abgelehnt haben?', answer: 'Ja — oft sind es genau diese Anfragen, die zu uns kommen. Wir prüfen jeden Fall einzeln im Erstgespräch.' },
        { question: 'Können Sie Klientinnen und Klienten mit gesetzlicher Betreuung übernehmen?', answer: 'Ja. Wir arbeiten regelmäßig mit gesetzlichen Betreuern (Berufs- und Familienbetreuern) zusammen. Der Vertrag kommt dann mit dem Betreuer als Vertretungsberechtigtem zustande.' },
        { question: 'Wie schnell können Sie übernehmen?', answer: 'Bei akuten Übernahmen aus der Klinik in der Regel innerhalb von 3-7 Tagen, je nach Komplexität des Settings. Eine schnellere Übernahme ist in Notfällen möglich.' },
        { question: 'Was kostet eine 24-Stunden-Systemsprenger-Betreuung pro Monat ungefähr?', answer: 'Stark unterschiedlich, je nach erforderlicher Qualifikation, Setting und Komplexität. Eine durchgehende 1:1-Betreuung im Wechselschicht-Modell liegt deutlich über klassischer ambulanter Pflege — die genaue Kalkulation bekommen Sie im Erstgespräch nach Bedarfsklärung.' },
        { question: 'Was passiert, wenn ein Klient gewalttätig wird?', answer: 'Wir haben klare Eskalationsprotokolle. Bei akuter Gefährdung verständigen wir Notarzt und ggf. Polizei. Das ist Teil unserer Erfahrung — solche Situationen sind anstrengend, aber nicht ungewöhnlich.' },
        { question: 'Müssen Klientinnen und Klienten einer Betreuung zustimmen?', answer: 'Ja — es gibt keine Zwangsbetreuung durch uns. Wenn jemand uns nicht in der Wohnung haben will, sind wir nicht zuständig. In solchen Fällen können wir aber Angehörige beraten, wie sie ggf. eine gesetzliche Betreuung anregen.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'ungeteilte Aufmerksamkeit zu Hause' },
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
      ],
    },
  },

  // === Money Page 3: Pflegedienst für Selbstzahler ===========================
  {
    slug: 'pflegedienst-selbstzahler',
    title: 'Pflegedienst für Selbstzahler',
    short: 'Exklusive Pflege ohne Kassenbürokratie.',
    metaTitle: 'Pflegedienst Selbstzahler Berlin – Exklusive 1:1-Pflege',
    metaDescription: 'Privater Pflegedienst für Selbstzahler in Berlin. Diskret, flexibel, kleines festes Team. Keine Kassenbürokratie. Erstgespräch unverbindlich.',
    h1: 'Pflegedienst für Selbstzahler — Pflege, wie Sie sie sich wünschen',
    primaryKeyword: 'Pflegedienst Selbstzahler Berlin',
    secondaryKeywords: ['Privatpflege Berlin', 'Exklusive Pflege', 'Pflege ohne Kasse'],
    detail: {
      intro: [
        'Pflege über die Kasse hat ihre Logik — minutengenau, abrechnungsfähig, oft mit wechselndem Personal und festen Zeitfenstern. Das funktioniert für viele, aber nicht für alle.',
        'Wer Pflege als Selbstzahler bezieht, darf andere Maßstäbe anlegen: Zeit. Beständigkeit. Diskretion. Ein kleines Team, das wirklich kennt, wer Sie sind und was Sie brauchen. Termine, die zu Ihrem Leben passen — nicht zur Tour-Reihenfolge eines Pflegedienstes.',
        'Die Heilpraxis Frommholz ist auf genau diese Art von Pflege spezialisiert. Wir rechnen ausschließlich als Selbstzahler ab. Das ist eine bewusste Entscheidung — sie erlaubt uns, ohne Kostendruck und Bürokratie zu arbeiten und unsere Klientinnen und Klienten so zu versorgen, wie es richtig ist, nicht wie es gerade abrechenbar wäre.',
      ],
      sections: [
        {
          heading: 'Wer als Selbstzahler zu uns kommt',
          paragraphs: [
            'Selbstzahlende Klientinnen und Klienten unterscheiden sich nicht in einem Kriterium — sondern in ihrer Haltung. Was sie verbindet:',
          ],
          list: [
            'Sie wollen wissen, wer kommt — und das soll möglichst die gleiche Person bleiben.',
            'Sie schätzen Diskretion — kein Logo am Wagen, kein offensichtliches Pflege-Auto in der Hofeinfahrt.',
            'Sie sind bereit, für gute Pflege einen Marktpreis zu zahlen — dafür erwarten sie aber, dass sie nicht Teil eines Akkord-Systems werden.',
            'Sie wollen nicht, dass über sie hinweg entschieden wird — sondern dass mit ihnen geplant wird.',
          ],
        },
        {
          heading: 'Was bei uns anders ist',
          stronglist: [
            { label: 'Kleines festes Team', text: 'Bei jeder Klientin und jedem Klienten gibt es 2-4 Stammkräfte. Sie wissen, wie Frau Müller ihren Kaffee mag. Sie wissen, dass Herr Schulze morgens nicht gleich angesprochen werden möchte. Diese Kontinuität ist unbezahlbar — und sie ist Standard, kein Sonderwunsch.' },
            { label: 'Zeit statt Takt', text: 'Statt 15-Minuten-Pflegeeinsätzen arbeiten wir in Blöcken: 2 Stunden, 4 Stunden, halbe Tage, ganze Tage, durchgehende Schichten. So bleibt Raum für das Gespräch beim Frühstück, für den Spaziergang am Nachmittag, für die ruhige Lagerung ohne Hetze.' },
            { label: 'Diskretion ist Geschäftsgrundlage', text: 'Unsere Mitarbeitenden kommen in unauffälliger Kleidung, oft mit dem eigenen Auto. Bei Klientinnen und Klienten aus exponierten Bereichen (Bundesministerium, Diplomatie, Wirtschaft) treffen wir besondere Vereinbarungen.' },
            { label: 'Flexibilität ohne Aufpreis', text: 'Wenn ein Termin verschoben werden muss, geht das. Wenn aus 4 Stunden 6 Stunden werden, geht das. Wir berechnen tatsächliche Zeit, keine Pauschalen, die zu Ihrem Nachteil ausgelegt werden.' },
            { label: 'Keine Kasse, keine Bürokratie', text: 'Sie bekommen eine Rechnung im Monat. Klar aufgegliedert, mit Zuschlägen nach § 3b EStG transparent ausgewiesen. Kein Verhandeln mit Kassen, keine Pflegegrad-Diskussionen, keine MDK-Begutachtungen.' },
          ],
        },
        {
          heading: 'Was es kostet',
          paragraphs: [
            'Pauschalpreise haben wir nicht, weil unsere Klientinnen und Klienten unterschiedliche Bedarfe haben. Stundenweise Begleitung, Nachtwachen und durchgehende 24-Stunden-Betreuung werden je nach Qualifikation der eingesetzten Person und je nach Tageszeit kalkuliert. Zuschläge nach § 3b EStG (25 % nachts von 22:00–06:00, 50 % sonn- und feiertags) sind transparent ausgewiesen.',
            'Im kostenlosen Erstgespräch hören wir erst zu — danach machen wir einen schriftlichen Vorschlag mit konkretem Stundensatz, Schichtplan und monatlicher Größenordnung. Sie entscheiden in Ruhe.',
          ],
        },
        {
          heading: 'Wie es startet',
          paragraphs: [
            'Erstgespräch (kostenlos, ca. 60 Minuten) bei Ihnen zu Hause oder telefonisch. Sie schildern uns die Situation, wir prüfen, ob wir die richtigen sind. Wenn ja, machen wir einen schriftlichen Vorschlag mit Stundenzahl, Schichtplan, Preis. Sie entscheiden in Ruhe. Wenn Sie zusagen, starten wir innerhalb von 5-10 Tagen.',
          ],
        },
      ],
      faq: [
        { question: 'Warum kein Kassenbezug?', answer: 'Weil das eine grundsätzlich andere Logik wäre. Kassenpflege ist minutengenau kalkuliert, an feste Leistungskataloge gebunden, mit Pauschalen, die unter dem echten Personalkostenaufwand liegen. Wir wollen gute Pflege machen — das geht nur, wenn der Preis frei verhandelt wird.' },
        { question: 'Können wir trotzdem Pflegegeld nutzen?', answer: 'Ja. Wenn ein Pflegegrad vorliegt, wird das Pflegegeld auf Ihr Konto überwiesen — Sie können damit anteilig unsere Rechnung bezahlen. Das ist Ihre Entscheidung, keine Kassen-Sache.' },
        { question: 'Sind Ihre Mitarbeitenden examinierte Pflegekräfte?', answer: 'Unser Team ist gemischt: examinierte Pflegekräfte (3-jährige Ausbildung), Pflegehilfskräfte (1- oder 2-jährige Ausbildung), Sozialpädagoginnen und Sozialpädagogen, qualifizierte Betreuungskräfte. Je nach Bedarf setzen wir die passende Qualifikation ein.' },
        { question: 'Sind Sie auch nachts und am Wochenende erreichbar?', answer: 'Telefonisch ja — im Bedarfsfall durchgehend. Einsätze im Wochenenddienst sind Teil unseres Angebots.' },
        { question: 'Was passiert bei Krankheit der eingesetzten Person?', answer: 'Aus dem festen Team übernimmt eine vertraute Vertretung. Sie haben nie eine komplett fremde Person vor der Tür stehen.' },
        { question: 'Können Sie auch in Pflegeheimen tätig werden?', answer: 'Ja, als Zusatz-Betreuung — mit Zustimmung der Einrichtung. Das ist häufiger als man denkt: Familien stocken die Heimbetreuung mit unseren Mitarbeitenden auf, etwa für stundenweise Begleitung am Nachmittag.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'ungeteilte Aufmerksamkeit zu Hause' },
        { label: 'Systemsprenger-Betreuung', href: '/leistungen/systemsprenger-betreuung', note: 'für komplexe Fälle' },
      ],
    },
  },

  // === Money Page 4: 24-Stunden-Betreuung ====================================
  {
    slug: '24-stunden-betreuung',
    title: '24-Stunden-Betreuung',
    short: 'Rund um die Uhr im Wechselschichtmodell — korrekt nach deutschem Recht.',
    metaTitle: '24-Stunden-Betreuung Berlin – Rund um die Uhr zu Hause',
    metaDescription: 'Durchgehende Betreuung im eigenen Zuhause: kleines festes Team, deutsche Pflegekräfte, korrekt nach Arbeitsrecht. Kein Graumarkt.',
    h1: '24-Stunden-Betreuung in Berlin — ohne Graumarkt',
    primaryKeyword: '24-Stunden-Betreuung Berlin',
    secondaryKeywords: ['Rund-um-die-Uhr Pflege', 'Häusliche Pflege Berlin', '24h-Pflege legal'],
    detail: {
      intro: [
        'Viele Anbieter werben mit „24-Stunden-Pflege" und meinen damit eine einzelne Person, die für mehrere Tage oder Wochen am Stück im Haus lebt. Rechtlich ist das in fast allen Konstellationen Graumarkt — Arbeitszeitgesetz, Mindestlohn, Sozialversicherung, Pausenregelung. Aktuelle Gerichtsurteile (BAG, EuGH) machen deutlich: Dieses Modell hält nicht, was es verspricht. Auftraggeber haften zunehmend persönlich.',
        'Wir machen das anders.',
        'Bei uns bedeutet 24-Stunden-Betreuung: Ein kleines festes Team deutscher Pflegekräfte und Betreuungskräfte im Wechselschicht-Modell. Korrekt angemeldet, korrekt bezahlt, Nacht- und Sonntagszuschläge gemäß § 3b EStG transparent ausgewiesen. Keine versteckten Kosten, keine rechtlichen Risiken für Sie als Auftraggeber.',
      ],
      sections: [
        {
          heading: 'Wie unser Schichtmodell konkret aussieht',
          paragraphs: ['Ein typisches Beispiel — die Realität ist immer individuell:'],
          stronglist: [
            { label: 'Frühschicht 06:00–14:00', text: 'Pflegekraft Anna.' },
            { label: 'Spätschicht 14:00–22:00', text: 'Pflegekraft Bernhard.' },
            { label: 'Nachtschicht 22:00–06:00', text: 'Pflegekraft Carla (Rufbereitschaft oder aktive Wache).' },
          ],
        },
        {
          heading: 'Wer im Team ist',
          paragraphs: ['Unsere 24-Stunden-Teams bestehen aus:'],
          stronglist: [
            { label: 'Examinierten Pflegekräften', text: 'für die fachliche Pflege (Medikamente, Wundversorgung, Beratung der Angehörigen).' },
            { label: 'Pflegehilfskräften und Betreuungskräften', text: 'für die alltägliche Begleitung (Hygiene, Mobilisation, Beschäftigung, Essen).' },
            { label: 'Optional: Sozialpädagoginnen/-pädagogen oder geschulten Demenz-Begleitungen', text: 'bei Bedarf.' },
          ],
        },
        {
          heading: 'Was 24-Stunden-Betreuung bei uns kostet',
          paragraphs: [
            'Eine durchgehende Betreuung mit drei Schichten pro Tag, sieben Tage die Woche, ist eine erhebliche monatliche Investition. Was sie konkret kostet, hängt von drei Faktoren ab: ob die Nacht in Bereitschaft oder aktiv gefahren wird, welche Qualifikation pflegerisch nötig ist (Examinierte Pflegekraft, Pflegehilfskraft, Betreuungskraft), und welche besonderen Anforderungen es gibt (Beatmung, Wundmanagement, herausforderndes Verhalten).',
            'Im Erstgespräch (60–90 Minuten, kostenlos) gehen wir das Setting konkret durch und liefern eine schriftliche Kalkulation mit monatlicher Größenordnung — keine Pauschalen, keine Überraschungen.',
          ],
        },
        {
          heading: 'Worauf Sie bei anderen Anbietern achten sollten',
          paragraphs: ['Es gibt im Markt zahlreiche Vermittler, die „24-Stunden-Kräfte aus Osteuropa" anbieten. Diese Modelle bewegen sich rechtlich auf dünnem Eis:'],
          stronglist: [
            { label: 'Arbeitszeitgesetz', text: 'Eine Person darf nicht legal „24 Stunden präsent" sein. Pausen und Ruhezeiten müssen eingehalten werden.' },
            { label: 'Mindestlohn', text: 'Bei 24 Stunden Bereitschaft pro Tag werden in vielen Modellen faktisch Stundensätze deutlich unter Mindestlohn gezahlt.' },
            { label: 'Sozialversicherung', text: 'Bei Entsendung von Selbständigen aus dem EU-Ausland bestehen erhebliche Compliance-Risiken.' },
            { label: 'Haftung', text: 'Wenn die Pflegekraft sich auf dem Weg zur Toilette die Hüfte bricht, haftet im Zweifelsfall der Auftraggeber.' },
          ],
        },
      ],
      faq: [
        { question: 'Wie viele Personen sind insgesamt im Team?', answer: 'Für eine 24/7-Versorgung brauchen wir 4-6 Personen im festen Team — so sind auch Urlaub, Krankheit und Wochenenden gedeckt. Sie haben aber pro Schicht immer nur eine Person vor sich.' },
        { question: 'Wechselt das Personal oft?', answer: 'Nein. Wir arbeiten mit langfristigen Anstellungsverhältnissen. Wenn ein Teammitglied wegfällt, ersetzen wir zuerst aus einem erweiterten Pool von Kolleginnen und Kollegen, die Ihre Klientinnen und Klienten schon kennen — bevor ein wirklich neuer Mensch dazukommt.' },
        { question: 'Können wir auch Schichten von 12 Stunden vereinbaren?', answer: 'Ja, das ist in begrenztem Maß möglich (z. B. bei langen Tag-/Nachtwechseln). Wir prüfen, ob das arbeitsrechtlich umsetzbar ist.' },
        { question: 'Wer haftet, wenn die Pflegekraft etwas kaputt macht?', answer: 'Wir sind berufshaftpflichtversichert. Schäden werden über uns abgewickelt — nicht über Ihre Hausratversicherung.' },
        { question: 'Können wir kurzfristig starten?', answer: 'Bei akuten Übernahmen (z. B. Entlassung aus der Klinik) brauchen wir 5-10 Tage. Bei langfristigem Planungshorizont können wir individueller eingehen.' },
        { question: 'Was passiert, wenn unser Familienmitglied stirbt?', answer: 'Bei Versterben endet der Vertrag automatisch zum Tag des Versterbens. Offene Stunden werden noch abgerechnet, danach sind keine Kosten mehr fällig — keine Restlaufzeit, keine Kündigungsfrist.' },
        { question: 'Können Sie auch nach einer OP für 3-4 Wochen kommen?', answer: 'Ja. Befristete 24-Stunden-Einsätze (postoperative Reha, Genesungsphase) sind ein häufiges Anliegen. Mindestbuchung ist eine Woche.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nacht abgedeckt werden muss' },
        { label: 'Pflegeberatung', href: '/leistungen/pflegeberatung-berlin', note: 'zu Pflegegrad und Finanzierung' },
      ],
    },
  },
  // === Money Page 5: Pflegeberatung Berlin ===================================
  {
    slug: 'pflegeberatung-berlin',
    title: 'Pflegeberatung Berlin',
    short: 'Unabhängig, verständlich, mit Blick auf das, was wirklich hilft.',
    metaTitle: 'Pflegeberatung Berlin – Pflegegrad, Leistungen, Finanzierung',
    metaDescription: 'Unabhängige Pflegeberatung in Berlin: Pflegegrad beantragen, Leistungen verstehen, MDK vorbereiten. Erstgespräch kostenlos.',
    h1: 'Pflegeberatung in Berlin — klar, unabhängig, verständlich',
    primaryKeyword: 'Pflegeberatung Berlin',
    secondaryKeywords: ['§7a SGB XI', 'Pflegegrad beantragen', 'MDK Beratung'],
    detail: {
      intro: [
        'Pflege ist kompliziert geworden. Pflegegrade, Verhinderungspflege, Entlastungsbudget, Kombinationsleistung, Hilfsmittelpauschale, Kurzzeitpflege, Tagespflege, Wohngruppenzuschlag, Pflegeunterstützungsgeld — selbst Fachkräfte verlieren manchmal den Überblick. Wir nicht.',
        'Und weil wir wissen, wie viel Geld auf der Strecke bleibt, wenn man die falschen Anträge stellt oder den richtigen Zeitpunkt verpasst, bieten wir Pflegeberatung an, die wirklich nützt — mit einem Schwerpunkt, der sich von der Standard-Kassenberatung unterscheidet: Wir denken vom Bedarf her, nicht vom Leistungskatalog.',
      ],
      sections: [
        {
          heading: 'Wofür wir konkret beraten',
          stronglist: [
            { label: 'Pflegegrad-Antrag und MDK-Begutachtung', text: 'Wir bereiten Sie auf den Termin mit dem Medizinischen Dienst vor, helfen bei der Dokumentation des Hilfebedarfs, formulieren mit Ihnen den Antrag. Bei nicht ausreichendem Bescheid unterstützen wir bei Widerspruch und Höherstufung.' },
            { label: 'Leistungsoptimierung bei vorhandenem Pflegegrad', text: 'Wir prüfen, ob alle zustehenden Leistungen tatsächlich abgerufen werden — oft bleiben mehrere Tausend Euro jährlich liegen, weil Entlastungsbudget, Verhinderungspflege oder Hilfsmittelpauschale nicht genutzt werden.' },
            { label: 'Übergänge gestalten', text: 'Wenn aus dem Krankenhaus die Entlassung näher rückt, wenn Tagespflege oder ambulanter Dienst gewechselt wird, wenn ein Heimplatz gesucht werden muss — wir helfen, die richtigen Schritte in der richtigen Reihenfolge zu tun.' },
            { label: 'Vollmachten und Vorsorge', text: 'Vorsorgevollmacht, Betreuungsverfügung, Patientenverfügung — was wirklich gebraucht wird, wie es formuliert sein muss, wo es hinterlegt gehört.' },
            { label: 'Bauliche Anpassungen', text: 'Was an Umbauten finanziert die Pflegekasse (bis 4.000 € pro Maßnahme)? Welche Hilfsmittel zahlt die Krankenkasse? Wo lohnt der Antrag, wo nicht?' },
            { label: 'Familieninterne Konflikte', text: 'Wenn Geschwister sich um die Pflege der Eltern streiten, wenn Erwartungen aneinanderprallen, wenn Schuldgefühle die Entscheidungen blockieren — wir hören zu, ordnen, schlagen Wege vor.' },
          ],
        },
        {
          heading: 'Was Pflegeberatung nach § 7a SGB XI ist (und was wir anders machen)',
          paragraphs: [
            'Pflegekassen sind seit 2009 verpflichtet, eine kostenlose Pflegeberatung anzubieten. Diese Beratung ist eine wichtige Leistung — aber sie hat strukturelle Schwächen:',
          ],
          list: [
            'Die Beraterinnen und Berater sind bei der Kasse angestellt — sie können nicht vollkommen unabhängig empfehlen.',
            'Die Termine sind oft kurz (45-60 Minuten) und auf Standardthemen ausgerichtet.',
            'Komplexe Konstellationen (mehrere Pflegegrade in der Familie, internationale Versicherung, Übergänge zwischen Versorgungsformen) werden nicht in der Tiefe bearbeitet.',
          ],
        },
        {
          heading: 'Was es kostet',
          paragraphs: [
            'Das Erstgespräch ist kostenlos und unverbindlich. Für ausführliche Beratung, Hausbesuche, MDK-Begleitung und Antragsbegleitung kalkulieren wir nach Aufwand — die jeweilige Größenordnung nennen wir Ihnen direkt im Erstgespräch und halten sie schriftlich fest. Pauschalpreise haben wir nicht, weil die Anliegen zu unterschiedlich sind.',
          ],
        },
        {
          heading: 'Wann Pflegeberatung sich besonders lohnt',
          list: [
            'Vor dem ersten MDK-Termin — die Vorbereitung entscheidet oft über einen oder zwei Pflegegrade Unterschied.',
            'Bei abgelehntem oder zu niedrigem Pflegegrad — hier ist Widerspruchsfrist einzuhalten (4 Wochen!).',
            'Bei Krankenhausentlassung — die ersten Wochen sind entscheidend für die Versorgungsstabilität.',
            'Bei plötzlichem Pflegebedarf (Schlaganfall, Sturz) — schnelle Antragstellung sichert rückwirkende Leistungen ab Antragstellung.',
            'Bei familiären Konflikten über die Pflege der Eltern.',
          ],
        },
      ],
      faq: [
        { question: 'Sind Sie Pflegeberater*in nach § 7a SGB XI?', answer: 'Wir bieten unabhängige private Pflegeberatung an. Die formale Anerkennung nach § 7a ist für unsere Klientinnen und Klienten meist nicht relevant, weil wir nicht über die Kasse abrechnen. Sollten Sie die offizielle § 7a-Beratung wollen, vermitteln wir Sie gerne weiter.' },
        { question: 'Können Sie auch in unserer Wohnung kommen?', answer: 'Ja — Hausbesuche sind sogar typisch. Vieles lässt sich nur vor Ort beurteilen.' },
        { question: 'Helfen Sie auch beim Pflegegrad-Widerspruch?', answer: 'Ja. Wir formulieren Widersprüche und können bei Bedarf auch zur erneuten Begutachtung dazukommen.' },
        { question: 'Kennen Sie sich auch mit privater Pflegeversicherung aus?', answer: 'Ja — private Versicherer haben oft andere Tarifstrukturen und Beihilfeansprüche. Wir kennen die wichtigsten privaten Pflegeversicherer in Berlin.' },
        { question: 'Wie lange dauert es vom Antrag bis zum Pflegegrad?', answer: 'Gesetzlich 5 Wochen ab Antragsdatum, in Berlin aktuell oft 6-8 Wochen. Leistungen werden rückwirkend zum Antragsdatum gewährt — deshalb lohnt eine schnelle Antragstellung.' },
        { question: 'Was ist der Unterschied zwischen Pflegeberatung und Pflegekoordination?', answer: 'Beratung = strukturierte Vermittlung von Wissen und Optionen. Koordination = aktives Management der Pflegesituation (Termine machen, mit Diensten sprechen, Anträge stellen). Wir bieten beides — getrennt buchbar.' },
        { question: 'Kann ich Pflegeberatung von der Steuer absetzen?', answer: 'Pflegekosten sind als außergewöhnliche Belastung ab gewissen Schwellen absetzbar. Beratungskosten in der Regel auch. Details mit Ihrer Steuerberatung klären.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegegrad beantragen', href: '/themen/pflegegrad-beantragen', note: 'die konkrete Anleitung' },
        { label: 'MDK-Begutachtung', href: '/themen/mdk-begutachtung', note: 'was Sie erwartet' },
        { label: 'Verhinderungspflege', href: '/themen/verhinderungspflege', note: 'der oft unterschätzte Anspruch' },
      ],
    },
  },
  // === Money Page 6: Nachtwachen Berlin ======================================
  {
    slug: 'nachtwachen-berlin',
    title: 'Nachtwachen Berlin',
    short: 'Eine wache Anwesenheit, wenn die Nacht lang wird.',
    metaTitle: 'Nachtwache Berlin – Sichere Begleitung durch die Nacht',
    metaDescription: 'Nachtwachen in Berlin für Krankenhaus, Hospiz und zu Hause. Erfahrenes Team, sofort verfügbar. Auch für Demenz, Sturzgefahr, Sterbebegleitung.',
    h1: 'Nachtwachen in Berlin — sichere Begleitung durch die Nacht',
    primaryKeyword: 'Nachtwache Berlin',
    secondaryKeywords: ['Nachtbegleitung', 'Sturzprophylaxe nachts', 'Demenz Nachtruhe'],
    detail: {
      intro: [
        'Nachts wird vieles schwerer. Verwirrtheit, Schmerz, Angst, Atemnot — was tagsüber zu handhaben war, wird im Dunkeln zur Bedrohung. Wer alleine ist, ist nachts noch alleiner. Wer pflegt, ist nachts noch erschöpfter.',
        'Eine Nachtwache von der Heilpraxis Frommholz übernimmt genau diese Stunden. Von 20:00 oder 22:00 Uhr bis 06:00 oder 08:00 Uhr morgens. Bei Bedarf einmalig, für eine bestimmte Phase, oder dauerhaft.',
      ],
      sections: [
        {
          heading: 'Wann eine Nachtwache hilft',
          stronglist: [
            { label: 'Demenz mit nächtlicher Unruhe', text: 'Aufstehen, Wandern, Verwirrung über Tag und Nacht — das zermürbt Angehörige innerhalb weniger Wochen. Eine Nachtwache fängt die nächtlichen Phasen ab und schafft Schlaf für die Familie.' },
            { label: 'Sturzgefahr', text: 'Wer nachts aufstehen will und nicht mehr sicher steht, gehört nicht ungesichert ins Bett. Eine Nachtwache ist da, wenn aufgestanden wird, hilft, beruhigt — und kann Stürzen vorbeugen, die sonst alles ändern.' },
            { label: 'Sterbebegleitung in den letzten Nächten', text: 'Manche Menschen sterben in einer bestimmten Nacht. Niemand kann das vorhersagen, aber alle können sich darauf einstellen, dass sie da sind. Eine Nachtwache übernimmt, wenn die Familie zwischendurch schlafen muss.' },
            { label: 'Nach Klinikentlassung', text: 'Die ersten Nächte zu Hause nach einem Krankenhausaufenthalt sind oft die kritischsten. Eine Nachtwache überbrückt, bis Stabilität zurückgekehrt ist.' },
            { label: 'Bei akuter psychischer Belastung', text: 'Suizidale Phasen, schwere depressive Episoden, Angstzustände — eine wache Anwesenheit schützt und entlastet gleichzeitig die Angehörigen.' },
          ],
        },
        {
          heading: 'Wache Nachtwache oder Bereitschaftsnachtwache?',
          paragraphs: ['Wir unterscheiden zwei Modelle:'],
          stronglist: [
            { label: 'Aktive (wache) Nachtwache', text: 'Die Mitarbeiterin bleibt durchgehend wach, beobachtet aktiv, dokumentiert regelmäßig. Sinnvoll bei akuten Situationen (Sterbephase, schwere Verwirrtheit, post-OP).' },
            { label: 'Bereitschaftsnachtwache', text: 'Die Mitarbeiterin schläft in einem angrenzenden Raum (oder in einem Schlafstuhl im selben Zimmer), wird aber bei jedem Geräusch geweckt. Sinnvoll bei Klientinnen und Klienten, die meist durchschlafen, aber nicht alleine sein dürfen.' },
          ],
        },
        {
          heading: 'Was eine Nachtwache kostet',
          paragraphs: [
            'Der Stundensatz hängt davon ab, ob es eine aktive Nachtwache ist (durchgehend wach, dokumentierend) oder eine Bereitschaftsnachtwache (Schlaf im Nebenraum, bei Bedarf geweckt). Und davon, welche Qualifikation eingesetzt wird — examinierte Pflegekraft oder erfahrene Betreuungskraft.',
            'Im Erstgespräch klären wir den konkreten Bedarf und nennen Ihnen den Stundensatz sowie die voraussichtliche Gesamtsumme für die geplante Schicht. Nacht- und Sonntagszuschläge nach § 3b EStG sind in den Sätzen bereits enthalten und transparent ausgewiesen.',
          ],
        },
      ],
      faq: [
        { question: 'Wie kurzfristig kann eine Nachtwache organisiert werden?', answer: 'In Akutsituationen ab demselben Tag, normal ab 24-48 Stunden Vorlauf.' },
        { question: 'Können wir nur eine einzelne Nacht buchen?', answer: 'Ja. Einzelnachtwachen sind möglich, ebenso einzelne Wochenend-Nächte oder einzelne Wochen für die Reha-Phase.' },
        { question: 'Was passiert in einem medizinischen Notfall?', answer: 'Die Nachtwache verständigt den Notarzt (112), informiert die Angehörigen, bleibt bei der Person bis zum Eintreffen. Bei Verschlechterung der Atmung, Bewusstlosigkeit, Verdacht auf Schlaganfall oder Herzinfarkt wird sofort gehandelt.' },
        { question: 'Schläft die Nachtwache im Bett?', answer: 'Bei wacher Nachtwache: nein. Bei Bereitschaftsnachtwache: ja — im Bereitschaftsraum oder einem Schlafstuhl. Das ist arbeitsrechtlich korrekt.' },
        { question: 'Brauchen wir einen separaten Raum für die Nachtwache?', answer: 'Bei Bereitschaft: ein Sofa, ein Sessel, ein Schlafstuhl reicht — kein Bett notwendig. Bei wacher Nachtwache reicht ein Stuhl im Zimmer.' },
        { question: 'Welche Tätigkeiten übernimmt die Nachtwache?', answer: 'Lagerung, Toilettengang-Begleitung, Inkontinenz-Versorgung, Medikamentengabe nach Plan, Trinken anreichen, beruhigen. Komplexere medizinische Tätigkeiten (Verbandswechsel, Injektionen) nur, wenn entsprechend qualifizierte Kraft gebucht ist.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'wenn es nicht bei den Nächten bleibt' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung', note: 'wenn nicht nur die Nacht abgedeckt werden muss' },
      ],
    },
  },
  // === Money Page 7: Reisebegleitung für Senioren ============================
  {
    slug: 'reisebegleitung-senioren',
    title: 'Reisebegleitung für Senioren',
    short: 'Sicher reisen — mit medizinischer Begleitung, wenn nötig.',
    metaTitle: 'Reisebegleitung Senioren – Medizinisch begleitete Reisen',
    metaDescription: 'Reisebegleitung für Seniorinnen und Senioren ab Berlin: Bahn, Flug, Auto. Medizinische Begleitung möglich. Diskret, erfahren, individuell.',
    h1: 'Reisebegleitung für Senioren — sicher unterwegs',
    primaryKeyword: 'Reisebegleitung Senioren Berlin',
    secondaryKeywords: ['Medizinische Reisebegleitung', 'Senioren-Begleitservice', 'Begleitete Heimreise'],
    detail: {
      intro: [
        'Reisen ist im Alter nicht mehr selbstverständlich. Die Wege werden länger, die Treppen steiler, die Anschlüsse knapper. Eine OP-Nachsorge im Ausland, ein Familienbesuch in Süddeutschland, die letzte gemeinsame Reise mit dem erkrankten Ehepartner — in solchen Situationen ist eine erfahrene Begleitung oft das, was eine Reise überhaupt erst möglich macht.',
        'Die Heilpraxis Frommholz bietet Reisebegleitung für Seniorinnen und Senioren ab Berlin an — mit medizinischer Qualifikation, wenn nötig, oder als reine Reisehilfe. Organisiert wird das in Kooperation mit unserem gemeinnützigen Partnerverein Leben Pflegen Reisen e.V., der seit Jahren Reisen für pflegebedürftige Menschen plant und begleitet.',
      ],
      sections: [
        {
          heading: 'Was wir bei Reisebegleitungen tun',
          stronglist: [
            { label: 'Hin- und Rückreise organisieren', text: 'Bahntickets, Sitzplätze, Rollstuhl-Service, Gepäckmanagement, Anschlüsse, ggf. Hotel in der Mitte. Wir kümmern uns um die Logistik, Sie müssen nur ankommen wollen.' },
            { label: 'Während der Reise begleiten', text: 'Wir reisen mit Ihnen — vom Anfang bis zum Ende. Wir helfen beim Ein- und Aussteigen, bei der Mahlzeit im Speisewagen, bei der Toilettenpause auf der Raststätte. Wir bewahren die Tickets auf, übersetzen am Schalter, beruhigen, wenn es hektisch wird.' },
            { label: 'Medizinische Versorgung unterwegs', text: 'Wenn medizinische Bedarfe bestehen (Wundversorgung, Medikamenten-Management, Sauerstoff-Mitführung, Insulin-Gabe), setzen wir eine qualifizierte Pflegekraft als Begleitung ein.' },
            { label: 'Krankenhausverlegungen', text: 'Wenn ein*e Angehörige*r aus einem Krankenhaus im Ausland nach Berlin zurückgebracht werden muss, organisieren wir das in Zusammenarbeit mit Rettungstransport-Diensten — wir sind die menschliche Begleitperson, die die Patientin oder den Patienten von Bett zu Bett begleitet.' },
          ],
        },
        {
          heading: 'Welche Reisen wir begleiten',
          list: [
            'Klassische Erholungsreisen — z. B. Kurreisen, Familienbesuche in Deutschland oder Europa.',
            'Medizinisch motivierte Reisen — Klinikaufenthalte, Reha-Anfahrt, Spezialistenbesuche.',
            'Heimführungen — aus Pflegeheimen oder Krankenhäusern zurück in die vertraute Umgebung.',
            'Letzte Reisen — wenn der Wunsch besteht, noch einmal an einen bestimmten Ort zu kommen (z. B. Geburtsort, Familiengrab, Lieblingsplatz).',
            'Reisen aus dem Ausland zurück — z. B. von einer Urlaubsreise, die durch Krankheit unterbrochen wurde.',
          ],
        },
        {
          heading: 'Wie eine Reisebegleitung organisiert ist',
          stronglist: [
            { label: 'Erstgespräch und Planung', text: 'Wir verstehen erst, worum es geht, dann planen wir. Das kann telefonisch oder vor Ort sein.' },
            { label: 'Vorbereitung', text: 'Wir prüfen Versicherungsfragen (Reisekrankenversicherung, Auslandsreisepolice), klären medizinische Sondersituationen mit Hausarzt oder Klinik ab, beschaffen Transportdokumente.' },
            { label: 'Durchführung', text: 'Wir holen Sie zu Hause ab. Wir bleiben bis zum Zielort oder bis zur Übergabe an die nächste verantwortliche Person (z. B. Verwandte, Klinik, Hotel-Concierge).' },
            { label: 'Nachbereitung', text: 'Wenn nötig, organisieren wir die Rückreise oder die Anschlussversorgung am Zielort.' },
          ],
        },
        {
          heading: 'Was Reisebegleitung kostet',
          paragraphs: [
            'Hier wird die Kalkulation komplex — es kommt auf Dauer, Strecke und Qualifikation an. Eine innerdeutsche Reisebegleitung ohne medizinischen Bedarf wird anders kalkuliert als eine internationale Reise mit examinierter Pflegekraft oder eine Krankenhausverlegung mit Rettungstransport-Anbindung. Wir machen Ihnen nach dem Erstgespräch einen schriftlichen Vorschlag mit Tagessatz und Gesamtsumme.',
            'Reisekosten (Bahn, Flug, Hotel) trägt der Auftraggeber separat. Wir reisen in derselben Klasse wie die zu begleitende Person.',
          ],
        },
      ],
      faq: [
        { question: 'Können Sie auch ins Ausland mitreisen?', answer: 'Ja — in den Schengen-Raum problemlos, in andere Länder mit etwas Vorlauf für Visa- und Versicherungsfragen.' },
        { question: 'Was, wenn der Klient sich während der Reise medizinisch verschlechtert?', answer: 'Bei Verschlechterung wenden wir uns sofort an die nächste medizinische Versorgung (Notarzt, lokales Krankenhaus). Wir bleiben bei der Person und informieren die Angehörigen.' },
        { question: 'Können Sie auch mit Rollstuhl-Reisenden umgehen?', answer: 'Selbstverständlich. Wir organisieren Rollstuhl-Service der Bahn, Hilfsstationen, Park-Berechtigungen. Bei Bedarf bringen wir leichte mobile Aufstehhilfen mit.' },
        { question: 'Wie weit im Voraus muss eine Reisebegleitung gebucht werden?', answer: 'Innerdeutsch ab 2 Wochen Vorlauf, international ab 4-6 Wochen. Akute Krankenhausverlegungen können auch in 2-3 Tagen organisiert werden.' },
        { question: 'Übernehmen Sie auch Reisen mit Pflegegrad-Personen?', answer: 'Ja — in jeder Pflegegradstufe, sofern reisefähig (das klären wir vorab mit Hausarzt und Klient*in). Mit höheren Pflegegraden setzen wir grundsätzlich examinierte Kräfte ein.' },
        { question: 'Was passiert, wenn die Reise verlängert werden muss?', answer: 'Wir verlängern bei Bedarf — eine schriftliche Verlängerung wird per Mail bestätigt. Tagespreise gelten weiter.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: '1:1-Betreuung zu Hause', href: '/leistungen/1-zu-1-betreuung-berlin', note: 'ungeteilte Aufmerksamkeit zu Hause' },
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
      ],
    },
  },

] as const;

export function getSeoLeistung(slug: string): SeoLeistung | undefined {
  return LEISTUNGEN_SEO.find((l) => l.slug === slug);
}

export function hasDetail(l: SeoLeistung): boolean {
  return l.detail !== undefined;
}

export function leistungenWithDetail(): SeoLeistung[] {
  return LEISTUNGEN_SEO.filter(hasDetail);
}
