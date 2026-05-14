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
  // === Money Page 1: Sitzwachen Berlin =========================================
  {
    slug: 'sitzwachen-berlin',
    title: 'Sitzwachen Berlin',
    short: '1:1-Anwesenheit im Krankenhaus, Hospiz und zu Hause.',
    metaTitle: 'Sitzwache Berlin – 1:1-Betreuung Krankenhaus & Zuhause',
    metaDescription: 'Professionelle Sitzwachen in Berlin: Krankenhaus, Psychiatrie, Hospiz, zu Hause. Erfahrenes Team, kurzfristig verfügbar. Erstgespräch kostenlos.',
    h1: 'Sitzwachen in Berlin — wenn niemand alleine sein soll',
    primaryKeyword: 'Sitzwache Berlin',
    secondaryKeywords: ['Sitzwache Krankenhaus', 'Sitzwache Psychiatrie', 'Nachtwache Berlin'],
    detail: {
      intro: [
        'Eine Sitzwache bedeutet: Jemand ist da. Nicht zur medizinischen Versorgung — dafür gibt es Ärztinnen und Pflegekräfte. Sondern für die Anwesenheit selbst. Für das Gefühl, dass jemand bleibt, wenn die Nacht lang wird, wenn die Operation ansteht, wenn die Verwirrtheit kommt und wieder geht.',
        'Die Heilpraxis Frommholz vermittelt Sitzwachen in Berlin — im Krankenhaus, in der Psychiatrie, im Hospiz und zu Hause. Wir sind seit über 15 Jahren auf 1:1-Betreuung spezialisiert. Wer eine Sitzwache braucht, hat oft schon viel hinter sich. Wir verstehen, dass es in diesen Momenten weniger um Fachlichkeit als um Menschlichkeit geht — und unsere Mitarbeitenden bringen beides mit.',
      ],
      sections: [
        {
          heading: 'Wann eine Sitzwache sinnvoll ist',
          paragraphs: [
            'Eine Sitzwache ist mehr als ein Stuhl neben dem Bett. Sie schützt, sie beruhigt, sie verhindert Schlimmeres. Typische Situationen, in denen unsere Klientinnen und Klienten uns rufen:',
          ],
          stronglist: [
            { label: 'Nach Operationen', text: 'Postoperative Verwirrtheit (Delir) ist eine der häufigsten Komplikationen bei älteren Patientinnen und Patienten. Eine vertraute Anwesenheit reduziert das Risiko deutlich — und beschleunigt die Genesung.' },
            { label: 'Bei Sturzgefahr', text: 'Wer nachts unruhig wird, aufstehen will, sich nicht mehr orientiert, ist sturzgefährdet. Eine Sitzwache beobachtet, beruhigt, hilft beim Aufstehen — und verhindert Brüche, die sonst eine ganze Lebensphase entscheiden.' },
            { label: 'In der Sterbephase', text: 'Wenn klar ist, dass es zu Ende geht, wollen viele Angehörige nicht, dass ihre Liebsten allein gehen. Aber nicht jeder kann durchgehend am Bett sein. Wir übernehmen die Nachtstunden, die Wochenenden, die Phasen, in denen Sie selbst Pause brauchen.' },
            { label: 'Bei psychiatrischen Krisen', text: 'Akute Eigen- oder Fremdgefährdung, suizidale Phasen, schwere depressive Episoden. Eine 1:1-Betreuung schützt — und kann eine Zwangseinweisung verhindern.' },
            { label: 'Bei Demenz', text: 'Nächtliche Wachphasen, Weglaufgefahr, Orientierungslosigkeit — eine Sitzwache bringt Ruhe in eine Situation, die Angehörige sonst zermürbt.' },
          ],
        },
        {
          heading: 'Wo wir Sitzwachen anbieten',
          paragraphs: [
            'Wir sind in ganz Berlin unterwegs. Unser Sitz in Moabit (Stephanstraße 46) liegt verkehrsgünstig in der Mitte der Stadt — von hier erreichen wir Charlottenburg in zehn Minuten, Wilmersdorf in zwölf, Zehlendorf in fünfundzwanzig.',
            'Wir vermitteln Sitzwachen in:',
          ],
          stronglist: [
            { label: 'Krankenhäusern', text: 'Charité (alle Standorte), Vivantes-Kliniken, Schlosspark-Klinik, Sankt Gertrauden, DRK Kliniken, Lazarus, Helios und allen anderen Berliner Häusern.' },
            { label: 'Psychiatrischen Kliniken', text: 'Vivantes Wenckebach, St. Hedwig, Schlosspark-Klinik und allen Akut- und Tageskliniken im Stadtgebiet.' },
            { label: 'Hospizen und Palliativstationen', text: 'in enger Abstimmung mit dem dortigen Team.' },
            { label: 'Pflegeheimen', text: 'wenn Angehörige Entlastung brauchen oder eine besondere Situation eine 1:1-Betreuung erfordert.' },
            { label: 'Zu Hause', text: 'in der vertrauten Wohnung, mit allem, was eine eigene Umgebung ausmacht.' },
          ],
        },
        {
          heading: 'Was eine Sitzwache bei uns kostet',
          paragraphs: [
            'Sitzwachen sind in der Regel Selbstzahler-Leistungen. Die gesetzliche Pflegekasse übernimmt sie nicht direkt — in manchen Fällen lässt sich die Verhinderungspflege (§ 39 SGB XI) oder der Entlastungsbetrag (§ 45b SGB XI) nutzen, dazu beraten wir Sie gerne.',
            'Pauschalpreise nennen wir nicht, weil die Situationen zu unterschiedlich sind. Eine Nachtsitzwache im Krankenhaus ist anders zu kalkulieren als eine 12-Stunden-Begleitung zu Hause. Im kostenlosen Erstgespräch klären wir, was Sie brauchen und was es konkret kostet. Transparente Zuschläge nach § 3b EStG (25 % nachts, 50 % sonn- und feiertags) gelten bei allen Einsätzen.',
          ],
        },
        {
          heading: 'Was unsere Sitzwachen können',
          paragraphs: [
            'Unser Team ist gemischt: examinierte Pflegekräfte, Pflegehilfskräfte, Sozialpädagoginnen und Sozialpädagogen, Betreuungskräfte mit langjähriger psychiatrischer Erfahrung. Je nach Situation setzen wir die passende Qualifikation ein. Was alle gemeinsam haben:',
          ],
          list: [
            'Ruhe in herausfordernden Situationen',
            'Fähigkeit zur Beobachtung und sachlichen Dokumentation',
            'Erfahrung im Umgang mit Verwirrtheit, Aggression, Angst',
            'Diskretion — was in der Wohnung gesehen und gehört wird, bleibt dort',
          ],
        },
      ],
      faq: [
        { question: 'Was ist der Unterschied zwischen einer Sitzwache und einer Pflegekraft?', answer: 'Eine Sitzwache ist anwesend, beobachtet, schützt und beruhigt — sie übernimmt aber keine pflegerischen Tätigkeiten wie Lagerung, Wundversorgung oder Medikamentengabe. Pflegekräfte tun beides; eine Sitzwache spezialisiert sich auf die Anwesenheit.' },
        { question: 'Können Sitzwachen auch nachts kommen?', answer: 'Ja. Nachtwachen sind eine unserer häufigsten Anfragen. Wir kommen ab Dienstbeginn zur vereinbarten Uhrzeit und bleiben bis morgens — bei Bedarf auch über mehrere Nächte hintereinander mit Wechseldienst im festen Team.' },
        { question: 'Wie schnell ist eine Sitzwache verfügbar?', answer: 'In Notfällen oft innerhalb von 24 Stunden, manchmal noch am selben Tag. Bei längerfristig planbaren Einsätzen (z. B. nach einer OP) brauchen wir nur 2-3 Tage Vorlauf.' },
        { question: 'Sind die Sitzwachen fachlich qualifiziert?', answer: 'Je nach Situation setzen wir unterschiedliche Qualifikationen ein. Bei medizinisch heiklen Situationen kommt eine examinierte Kraft. Bei reiner Anwesenheit reicht oft eine erfahrene Betreuungskraft. Wir klären das im Erstgespräch.' },
        { question: 'Können wir die Sitzwache über die Pflegekasse abrechnen?', answer: 'Nein, direkt nicht — wir rechnen ausschließlich als Selbstzahler-Leistung ab. Sie können aber bei vorhandenem Pflegegrad den Entlastungsbetrag (125 € monatlich) oder die Verhinderungspflege nutzen und uns die Rechnung dann selbst einreichen. Wir beraten Sie, was möglich ist.' },
        { question: 'Wer haftet, wenn etwas passiert?', answer: 'Wir sind berufshaftpflichtversichert. Schäden, die durch unsere Mitarbeitenden verschuldet sind, werden über diese Versicherung abgewickelt.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
        { label: 'Systemsprenger-Betreuung', href: '/leistungen/systemsprenger-betreuung', note: 'bei komplexen psychiatrischen Verläufen' },
      ],
    },
  },

  // === Money Page 2: Systemsprenger-Betreuung ==================================
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
        { question: 'Können Sie Klientinnen und Klienten mit gesetzlicher Betreuung übernehmen?', answer: 'Ja. Wir arbeiten regelmäßig mit gesetzlichen Betreuern (Berufs- und Familienbetreuern) zusammen. Der Vertrag kommt dann mit dem Betreuer als Vertretungsberechtigten zustande.' },
        { question: 'Wie schnell können Sie übernehmen?', answer: 'Bei akuten Übernahmen aus der Klinik in der Regel innerhalb von 3-7 Tagen, je nach Komplexität des Settings. Eine schnellere Übernahme ist in Notfällen möglich.' },
        { question: 'Was kostet eine 24-Stunden-Systemsprenger-Betreuung pro Monat ungefähr?', answer: 'Sehr unterschiedlich, je nach erforderlicher Qualifikation und Setting. Realistisch sind 12.000–20.000 € pro Monat für eine durchgehende 1:1-Betreuung im Wechselschicht-Modell. Wir geben im Erstgespräch eine konkrete Kalkulation.' },
        { question: 'Was passiert, wenn ein Klient gewalttätig wird?', answer: 'Wir haben klare Eskalationsprotokolle. Bei akuter Gefährdung verständigen wir Notarzt und ggf. Polizei. Das ist Teil unserer Erfahrung — solche Situationen sind anstrengend, aber nicht ungewöhnlich.' },
        { question: 'Müssen Klientinnen und Klienten einer Betreuung zustimmen?', answer: 'Ja — es gibt keine Zwangsbetreuung durch uns. Wenn jemand uns nicht in der Wohnung haben will, sind wir nicht zuständig. In solchen Fällen können wir aber Angehörige beraten, wie sie ggf. eine gesetzliche Betreuung anregen.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'punktuelle 1:1-Begleitung' },
      ],
    },
  },

  // === Money Page 3: Pflegedienst für Selbstzahler =============================
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
            'Pauschalpreise haben wir nicht, weil unsere Klientinnen und Klienten unterschiedliche Bedarfe haben. Realistisch sollten Sie kalkulieren:',
          ],
          list: [
            'Stundenweise Begleitung tagsüber: ab 38–45 €/h (je nach Qualifikation).',
            'Nachtwache: ab 42–48 €/h.',
            '24-Stunden-Betreuung im Wechselschichtmodell: ca. 12.000–15.000 €/Monat.',
            'Zuschläge nach § 3b EStG: 25 % nachts (22-6 Uhr), 50 % sonn- und feiertags.',
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
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'punktuelle 1:1-Begleitung' },
        { label: 'Systemsprenger-Betreuung', href: '/leistungen/systemsprenger-betreuung', note: 'für komplexe Fälle' },
      ],
    },
  },

  // === Stubs (Welle 2 — Cards im Hub, noch keine Detail-Seite) ================
  {
    slug: '24-stunden-betreuung',
    title: '24-Stunden-Betreuung',
    short: 'Rund um die Uhr im Wechselschichtmodell — korrekt nach deutschem Recht.',
    metaTitle: '24-Stunden-Betreuung Berlin – Rund um die Uhr zu Hause',
    metaDescription: 'Durchgehende Betreuung im eigenen Zuhause: kleines festes Team, deutsche Pflegekräfte, korrekt nach Arbeitsrecht. Kein Graumarkt.',
    h1: '24-Stunden-Betreuung in Berlin — ohne Graumarkt',
    primaryKeyword: '24-Stunden-Betreuung Berlin',
    secondaryKeywords: ['Rund-um-die-Uhr Pflege', 'Häusliche Pflege Berlin', '24h-Pflege legal'],
  },
  {
    slug: 'pflegeberatung-berlin',
    title: 'Pflegeberatung Berlin',
    short: 'Unabhängig, verständlich, mit Blick auf das, was wirklich hilft.',
    metaTitle: 'Pflegeberatung Berlin – Pflegegrad, Leistungen, Finanzierung',
    metaDescription: 'Unabhängige Pflegeberatung in Berlin: Pflegegrad beantragen, Leistungen verstehen, MDK vorbereiten. Erstgespräch kostenlos.',
    h1: 'Pflegeberatung in Berlin — klar, unabhängig, verständlich',
    primaryKeyword: 'Pflegeberatung Berlin',
    secondaryKeywords: ['§7a SGB XI', 'Pflegegrad beantragen', 'MDK Beratung'],
  },
  {
    slug: 'nachtwachen-berlin',
    title: 'Nachtwachen Berlin',
    short: 'Eine wache Anwesenheit, wenn die Nacht lang wird.',
    metaTitle: 'Nachtwache Berlin – Sichere Begleitung durch die Nacht',
    metaDescription: 'Nachtwachen in Berlin für Krankenhaus, Hospiz und zu Hause. Erfahrenes Team, sofort verfügbar. Auch für Demenz, Sturzgefahr, Sterbebegleitung.',
    h1: 'Nachtwachen in Berlin — sichere Begleitung durch die Nacht',
    primaryKeyword: 'Nachtwache Berlin',
    secondaryKeywords: ['Nachtbegleitung', 'Sturzprophylaxe nachts', 'Demenz Nachtruhe'],
  },
  {
    slug: 'hospiz-sitzwachen',
    title: 'Hospiz-Sitzwachen',
    short: 'Anwesenheit in den letzten Stunden — für Betroffene und Angehörige.',
    metaTitle: 'Hospiz-Sitzwache Berlin – Begleitung in der Sterbephase',
    metaDescription: 'Sitzwachen im Hospiz, auf der Palliativstation oder zu Hause. Diskret, erfahren, würdevoll. Entlastung für Angehörige in den letzten Stunden.',
    h1: 'Hospiz-Sitzwachen — jemand bleibt da',
    primaryKeyword: 'Hospiz Sitzwache Berlin',
    secondaryKeywords: ['Sterbebegleitung', 'Palliativ-Sitzwache', 'Letzte Stunden Begleitung'],
  },
  {
    slug: 'reisebegleitung-senioren',
    title: 'Reisebegleitung für Senioren',
    short: 'Sicher reisen — mit medizinischer Begleitung, wenn nötig.',
    metaTitle: 'Reisebegleitung Senioren – Medizinisch begleitete Reisen',
    metaDescription: 'Reisebegleitung für Seniorinnen und Senioren ab Berlin: Bahn, Flug, Auto. Medizinische Begleitung möglich. Diskret, erfahren, individuell.',
    h1: 'Reisebegleitung für Senioren — sicher unterwegs',
    primaryKeyword: 'Reisebegleitung Senioren Berlin',
    secondaryKeywords: ['Medizinische Reisebegleitung', 'Senioren-Begleitservice', 'Begleitete Heimreise'],
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
