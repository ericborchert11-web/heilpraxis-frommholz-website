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
        'Einen Teil unserer Sitzwachen-Einsätze tragen wir gemeinsam mit unserem gemeinnützigen Partnerverein Leben Pflegen Reisen e.V. — vor allem dort, wo neben Pflegekompetenz auch ehrenamtliches Engagement und längere Anwesenheitsphasen gefragt sind.',
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
        { label: 'Klinik-Begleitung Berlin', href: '/leistungen/klinik-begleitung-berlin', note: 'Sitzwachen speziell im Krankenhaus' },
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
        { question: 'Können Sie Klientinnen und Klienten mit gesetzlicher Betreuung übernehmen?', answer: 'Ja. Wir arbeiten regelmäßig mit gesetzlichen Betreuern (Berufs- und Familienbetreuern) zusammen. Der Vertrag kommt dann mit dem Betreuer als Vertretungsberechtigtem zustande.' },
        { question: 'Wie schnell können Sie übernehmen?', answer: 'Bei akuten Übernahmen aus der Klinik in der Regel innerhalb von 3-7 Tagen, je nach Komplexität des Settings. Eine schnellere Übernahme ist in Notfällen möglich.' },
        { question: 'Was kostet eine 24-Stunden-Systemsprenger-Betreuung pro Monat ungefähr?', answer: 'Stark unterschiedlich, je nach erforderlicher Qualifikation, Setting und Komplexität. Eine durchgehende 1:1-Betreuung im Wechselschicht-Modell liegt deutlich über klassischer ambulanter Pflege — die genaue Kalkulation bekommen Sie im Erstgespräch nach Bedarfsklärung.' },
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
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'punktuelle 1:1-Begleitung' },
        { label: 'Systemsprenger-Betreuung', href: '/leistungen/systemsprenger-betreuung', note: 'für komplexe Fälle' },
      ],
    },
  },

  // === Money Page 4: 24-Stunden-Betreuung =====================================
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
        { label: 'Klinik-Begleitung Berlin', href: '/leistungen/klinik-begleitung-berlin', note: 'wenn die durchgehende Begleitung im Krankenhaus stattfindet' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nacht abgedeckt werden muss' },
        { label: 'Pflegeberatung', href: '/leistungen/pflegeberatung-berlin', note: 'zu Pflegegrad und Finanzierung' },
      ],
    },
  },
  // === Money Page 5: Pflegeberatung Berlin =====================================
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
  // === Money Page 6: Nachtwachen Berlin =======================================
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
            { label: 'Sturzgefahr', text: 'Wer nachts aufstehen will und nicht mehr sicher steht, gehört nicht ungesichert ins Bett. Eine Nachtwache ist da, wenn aufgestanden wird, hilft, beruhigt — und verhindert die Stürze, die alles ändern.' },
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
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'punktuelle 1:1-Begleitung tags und nachts' },
        { label: 'Hospiz-Sitzwachen', href: '/leistungen/hospiz-sitzwachen', note: 'bei Sterbebegleitung' },
        { label: '24-Stunden-Betreuung', href: '/leistungen/24-stunden-betreuung', note: 'wenn nicht nur die Nacht abgedeckt werden muss' },
      ],
    },
  },
  // === Money Page 7: Hospiz-Sitzwachen ========================================
  {
    slug: 'hospiz-sitzwachen',
    title: 'Hospiz-Sitzwachen',
    short: 'Anwesenheit in den letzten Stunden — für Betroffene und Angehörige.',
    metaTitle: 'Hospiz-Sitzwache Berlin – Begleitung in der Sterbephase',
    metaDescription: 'Sitzwachen im Hospiz, auf der Palliativstation oder zu Hause. Diskret, erfahren, würdevoll. Entlastung für Angehörige in den letzten Stunden.',
    h1: 'Hospiz-Sitzwachen — jemand bleibt da',
    primaryKeyword: 'Hospiz Sitzwache Berlin',
    secondaryKeywords: ['Sterbebegleitung', 'Palliativ-Sitzwache', 'Letzte Stunden Begleitung'],
    detail: {
      intro: [
        'Es gibt einen besonderen Auftrag in unserer Arbeit: Da zu sein, wenn jemand geht. Nicht als medizinische Kraft — dafür gibt es Palliativteams. Sondern als wache, ruhige Anwesenheit, die nicht mehr verlangt als zuhören, halten, warten.',
        'Hospiz-Sitzwachen unterscheiden sich von anderen Sitzwachen in einem entscheidenden Punkt: Sie haben kein medizinisches Ziel mehr. Es geht nicht darum, dass etwas besser wird. Es geht darum, dass der Mensch nicht alleine ist — und dass die Familie dabei nicht zerbricht.',
        'In dieser Arbeit kooperieren wir eng mit unserem Partnerverein Leben Pflegen Reisen e.V., dessen ehrenamtliches Netzwerk gerade bei Sterbebegleitungen die Heilpraxis-Stunden ergänzt — und die Familie nicht allein lässt, wenn unsere bezahlten Schichten zu Ende gehen.',
      ],
      sections: [
        {
          heading: 'Wo wir Hospiz-Sitzwachen anbieten',
          stronglist: [
            { label: 'Im Hospiz', text: 'Die meisten Hospize in Berlin (Ricam Hospiz, Hospiz Schöneberg-Steglitz, Hospiz Wilmersdorf, Christophorus Hospiz, Lazarus Hospiz, u. a.) haben ihre eigenen ehrenamtlichen Sitzwachen-Strukturen. Wir kommen als Ergänzung dazu — oft bei Klientinnen und Klienten, die eine durchgehende Begleitung wünschen, was über das ehrenamtliche Angebot hinausgeht.' },
            { label: 'Auf der Palliativstation', text: 'Wir kommen ins Krankenhaus, in Abstimmung mit dem Pflegeteam. Wir sind kein Konkurrenz-Angebot — wir entlasten die Pflege, indem wir die 1:1-Anwesenheit übernehmen, die im Stationsalltag selten möglich ist.' },
            { label: 'Zu Hause', text: 'Viele Menschen wollen zu Hause sterben — und können das auch, wenn die Familie es organisiert bekommt. Wir kommen dann oft für die Nachtstunden, für die Wochenenden, für die Phasen, in denen die Angehörigen selbst Erschöpfung spüren.' },
          ],
        },
        {
          heading: 'Was Hospiz-Sitzwachen tun (und was nicht)',
          stronglist: [
            { label: 'Sie tun', text: 'wach sein, beobachten, ruhig sprechen, vorlesen, schweigen, Hand halten, Lippen befeuchten, leise sein. Sie rufen die Angehörigen, wenn es Zeit ist. Sie rufen das Palliativteam, wenn die Symptomatik sich verändert.' },
            { label: 'Sie tun nicht', text: 'Schmerzmittel anpassen (das macht der Arzt), Pflege im engeren Sinne durchführen (das macht der Pflegedienst), Trost spenden, der unecht wirkt. Sie reden nicht über Religion, wenn es nicht von der sterbenden Person ausgeht. Sie weinen nicht laut, wenn es um Halten geht.' },
          ],
        },
        {
          heading: 'Was unsere Mitarbeitenden in dieser Arbeit ausmacht',
          paragraphs: ['Hospiz-Sitzwachen sind eine besondere Aufgabe. Wir setzen Kolleginnen und Kollegen ein, die:'],
          list: [
            'Erfahrung mit Sterbebegleitung haben (Hospizpraktikum, Pflegeerfahrung, Trauerbegleitungs-Ausbildung).',
            'ruhig sind, wirklich ruhig — nicht still aus Unsicherheit, sondern still aus Haltung.',
            'mit eigenen Verlusten gearbeitet haben, sodass nicht ihre Trauer im Zimmer steht.',
            'bei körperlichen Veränderungen in der Sterbephase nicht in Hektik geraten.',
          ],
          trailingParagraphs: ['Sterbebegleitung ist keine Anfänger-Aufgabe. Wir vermitteln sie nur an erfahrene Mitarbeitende.'],
        },
        {
          heading: 'Was Hospiz-Sitzwachen kosten',
          paragraphs: [
            'Sitzwachen am Lebensende sind oft schon teure Tage in einer ohnehin teuren Phase. Wir berechnen einen reduzierten Sterbebegleitungs-Tarif, der unter unserem Standard liegt — die genaue Summe für eine Nachtschicht oder mehrtägige Begleitung nennen wir im Erstgespräch.',
            'Nacht- (25 %) und Sonn-/Feiertagszuschläge (50 %) nach § 3b EStG sind transparent ausgewiesen.',
          ],
        },
      ],
      faq: [
        { question: 'Können Sie auch im Hospiz dazukommen, obwohl es dort schon Sitzwachen gibt?', answer: 'Ja — in Absprache mit dem Hospizteam. Wir verstehen uns als Ergänzung, nicht als Ersatz. Oft bringen wir gerade in den letzten 24 Stunden zusätzliche Anwesenheit ein, weil ehrenamtliche Sitzwachen nicht durchgehend verfügbar sind.' },
        { question: 'Wie schnell können Sie kommen, wenn klar wird, dass es zu Ende geht?', answer: 'Wenn wir Vorlauf von 24 Stunden haben, ja. In echten Akutsituationen (wenige Stunden) versuchen wir es, können es aber nicht immer garantieren.' },
        { question: 'Reden Ihre Mitarbeitenden mit dem Sterbenden über den Tod?', answer: 'Nur, wenn der Mensch selbst es initiiert. Wir hören zu. Wir geben keinen Anstoß zu Themen, die wir nicht einschätzen können.' },
        { question: 'Können Sie auch nach dem Tod helfen?', answer: 'Wir bleiben — wenn gewünscht — in den ersten Stunden nach dem Versterben da. Wir helfen, den Notarzt für die Todesfeststellung zu rufen, sind für die Familie da, übergeben an den Bestatter. Trauerbegleitung in den darauffolgenden Wochen vermitteln wir an spezialisierte Stellen.' },
        { question: 'Kennen Sie sich mit verschiedenen religiösen Traditionen aus?', answer: 'Wir respektieren alle Traditionen. Bei spezifischen Riten (z. B. muslimischer Brauch der Waschung durch Familienangehörige, orthodoxe Liturgien, jüdische Bräuche der Schiwa) bitten wir die Familie um klare Hinweise. Wir lernen schnell, aber wir setzen nichts voraus.' },
        { question: 'Können Sie auch bei nicht-religiösen Sterbeprozessen begleiten?', answer: 'Selbstverständlich. Die meisten unserer Sterbebegleitungen sind säkular. Wir machen niemandem etwas religiös, was er nicht selbst will.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'das allgemeine Angebot' },
        { label: 'Palliativ zu Hause', href: '/themen/palliativ-zuhause', note: 'Hintergrundwissen' },
        { label: 'Nachtwachen Berlin', href: '/leistungen/nachtwachen-berlin', note: 'wenn nur die Nachtstunden gebraucht werden' },
      ],
    },
  },
  // === Money Page 8: Reisebegleitung für Senioren =============================
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
        { label: 'Pflegedienst für Selbstzahler', href: '/leistungen/pflegedienst-selbstzahler', note: 'unsere Grundausrichtung' },
        { label: 'Krankenhaus-Begleitung', href: '/themen/krankenhaus-begleitung', note: 'bei Klinikaufenthalten' },
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'für stationäre 1:1-Begleitung' },
      ],
    },
  },

  // === Money Page 9: Klinik-Begleitung Berlin ==================================
  {
    slug: 'klinik-begleitung-berlin',
    title: 'Klinik-Begleitung Berlin',
    short: '1:1-Begleitung im Krankenhaus — wenn Angehörige nicht jeden Moment vor Ort sein können.',
    metaTitle: 'Klinik-Begleitung Berlin — 1:1-Betreuung im Krankenhaus',
    metaDescription: 'Private Klinik-Begleitung in Berlin: Wenn Pflegekräfte 18 Patienten parallel betreuen, sind wir 1:1 für Ihren Angehörigen da. Bei Demenz, Sturzgefahr, nach OPs. Stundenweise bis durchgehend.',
    h1: 'Klinik-Begleitung in Berlin — wenn Angehörige nicht jeden Moment vor Ort sein können',
    primaryKeyword: 'Klinik-Begleitung Berlin',
    secondaryKeywords: ['Krankenhaus Begleitung Berlin', 'private Sitzwache Krankenhaus', 'Demenz Klinik Begleitung', 'Sturzprophylaxe nach OP'],
    detail: {
      intro: [
        'Ein Krankenhausaufenthalt ist für ältere Menschen oft eine Ausnahmesituation — fremde Umgebung, wechselndes Personal, lange Wartezeiten am Klingelknopf. Pflegekräfte versorgen im Stationsalltag oft 18 oder mehr Patientinnen und Patienten parallel; eine 1:1-Anwesenheit ist im Klinikalltag selten möglich.',
        'Wir begleiten Ihre Angehörigen privat im Krankenhaus: zur Vorbereitung auf eine Reha, in der Nacht nach einer Operation, bei Demenz oder Sturzgefahr, bei längeren Aufenthalten. Stundenweise oder rund um die Uhr — als Ergänzung zum Klinikpersonal, nicht als dessen Ersatz.',
      ],
      sections: [
        {
          heading: 'Was wir konkret tun',
          stronglist: [
            { label: 'Da sein, wenn das Personal nicht kann', text: 'Pflegekräfte versorgen oft 18 oder mehr Patientinnen parallel im Schichtdienst. Wir sind 1:1 vor Ort — durchgehend, wach, beobachtend.' },
            { label: 'Sturzprophylaxe nach OP', text: 'Gerade nachts nach Narkose, bei Verwirrtheit, in fremder Umgebung. Wir bleiben am Bett und helfen beim Aufstehen, bevor etwas passiert.' },
            { label: 'Demenz-Begleitung im Krankenhaus', text: 'Wir kennen den Umgang mit Bettflucht, Orientierungsverlust, postoperativem Delir. Eine ruhige Anwesenheit reduziert Stress und den Bedarf an Fixierungen oder Sedierung deutlich.' },
            { label: 'Essen anreichen, Trinken anbieten', text: 'Was Klinikpersonal aus Zeitnot oft nicht in Ruhe leisten kann — gerade bei Demenzkranken, die das Essen schlicht „vergessen".' },
            { label: 'Klingel im Blick, Ansprechpartner für Pflege und Ärzte', text: 'Übermittlung von Beobachtungen, Vermittlung bei der Visite, Gedächtnisstütze für Fragen, die im Klinikalltag oft untergehen.' },
            { label: 'Begleitung zu Untersuchungen und Transporten', text: 'Patientin oder Patient nicht allein auf dem Gang oder beim Warten — wir bleiben dabei.' },
            { label: 'Entlastung der Familie', text: 'Sie müssen nicht jeden Abend nach der Arbeit hetzen. Sie wissen: Jemand ist da.' },
          ],
        },
        {
          heading: 'Wann macht das Sinn?',
          paragraphs: ['Vier typische Situationen, in denen Familien uns rufen:'],
          stronglist: [
            { label: 'Nach geplanter OP', text: 'Erste 2–5 Nächte zur Sicherheit — die Phase mit dem höchsten Delir- und Sturzrisiko.' },
            { label: 'Bei Demenz oder Verwirrtheit', text: 'Dauerhafte Begleitung für die gesamte Aufenthaltszeit, weil die Klinik-Umgebung Demenz oft massiv verschlechtert.' },
            { label: 'Bei längeren Aufenthalten (über eine Woche)', text: 'Tageweise oder stundenweise, dort wo Angehörige nicht durchgehend selbst kommen können.' },
            { label: 'In der Notaufnahme', text: 'Kurzfristige Unterstützung, wenn niemand aus der Familie schnell genug vor Ort sein kann.' },
          ],
        },
        {
          heading: 'Was uns auszeichnet',
          stronglist: [
            { label: 'Erfahrene Pflegekräfte, kein Hilfspersonal', text: 'Klinik-Begleitung ist anspruchsvoll. Diese Einsätze übernehmen bei uns nur Kräfte mit entsprechender Berufserfahrung — Beobachtungsgabe, ruhiges Auftreten, Umgang mit Verwirrtheit und Angehörigen, fachliche Einordnung von Beobachtungen für die Übergabe an Klinikpersonal.' },
            { label: 'Beziehung zur Pflege und zu Ärzten', text: 'Wir wissen, wie man sich im Klinikalltag bewegt, ohne zu stören. Wir melden uns bei Aufnahme und Pflegeleitung an, stimmen Anwesenheitszeiten ab, integrieren uns in die Stationsroutine.' },
            { label: 'Diskret und würdig', text: 'Wir reden nicht über andere Patienten, ergänzen das Stationsteam respektvoll, nehmen uns zurück, wenn die Familie da ist.' },
          ],
        },
      ],
      faq: [
        { question: 'Was kostet eine private Krankenhausbegleitung in Berlin?', answer: 'Die Kosten richten sich nach Stundenumfang, Tag-/Nachtanteil und der erforderlichen Qualifikation. Pauschalpreise nennen wir nicht, weil die Situationen sehr unterschiedlich sind. Im kostenlosen Erstgespräch hören wir erst zu — danach machen wir einen konkreten, transparenten Vorschlag.' },
        { question: 'Übernimmt die Krankenkasse eine Klinik-Begleitung durch einen Pflegedienst?', answer: 'In den meisten Fällen nicht. Die gesetzliche Krankenkasse zahlt die medizinische Versorgung im Krankenhaus, aber keine zusätzliche 1:1-Betreuung durch einen externen Pflegedienst. Ausnahmen gibt es bei „Rooming-In" für Kinder und in seltenen Sonderfällen. Für Erwachsene mit Demenz, Sturzgefahr oder besonderem Betreuungsbedarf ist die private Klinik-Begleitung in der Regel eine Selbstzahlerleistung. Manche private Zusatzversicherungen erstatten anteilig — bitte vorab klären.' },
        { question: 'Was kann eine private Begleitung im Krankenhaus überhaupt tun?', answer: 'Anwesend sein, Klingel und Patient im Blick behalten, Essen und Trinken anreichen, beim Lagewechsel helfen, bei Verwirrtheit beruhigen, Pflegekräfte und Ärzte über Beobachtungen informieren, zu Untersuchungen begleiten. Wir ersetzen nicht das Klinikpersonal — wir ergänzen es um eine ständig anwesende Bezugsperson. Medizinische Aufgaben (Medikation, Wundversorgung, Verbandswechsel) liegen weiter beim Klinikpersonal.' },
        { question: 'Mein Vater hat nach der OP Verwirrtheit (Delir) — was können wir tun?', answer: 'Postoperatives Delir betrifft vor allem ältere Menschen und tritt häufig in den ersten Nächten nach einer Operation auf. Die wirksamste Maßnahme ist eine ruhige, vertraute Anwesenheit — Studien zeigen, dass Sitzwachen den Bedarf an Fixierungen und Sedierung deutlich reduzieren können. Wenn Sie selbst nicht durchgehend vor Ort sein können, übernehmen wir das. Besonders in den Nachtstunden, wenn Verwirrtheit häufig stärker wird.' },
        { question: 'Meine Mutter hat Demenz und muss ins Krankenhaus — wie können wir helfen?', answer: 'Krankenhausaufenthalte sind für Menschen mit Demenz besonders belastend: fremde Umgebung, fehlende Routinen, viele unbekannte Gesichter. Eine konstante Begleitperson reduziert Angst, Bettflucht und Sturzgefahr deutlich. Wenn Familie nicht durchgehend vor Ort sein kann, übernehmen wir die Begleitung — wir kennen den Umgang mit Demenz und stimmen uns eng mit dem Klinikpersonal ab. Auch das Anreichen von Essen, das bei Demenz oft „vergessen" wird, gehört dazu.' },
        { question: 'Wie schnell können Sie kommen?', answer: 'Bei geplanten Aufenthalten (OP, Reha) am besten ein paar Tage Vorlauf. Bei akuten Situationen (Notaufnahme, plötzlicher Bedarf) versuchen wir, innerhalb von 24 Stunden eine erste Begleitung zu organisieren — je nach Wochentag und Tageszeit auch schneller. Rufen Sie uns an, dann besprechen wir, was geht.' },
        { question: 'Darf das Krankenhaus eine private Begleitperson überhaupt zulassen?', answer: 'Ja. Angehörige und von Angehörigen beauftragte Begleitpersonen haben grundsätzlich Zugang zum Patienten. Wir melden uns selbstverständlich bei Aufnahme und Pflegepersonal an und stimmen Anwesenheitszeiten ab. Die meisten Berliner Kliniken kennen das Modell und kooperieren gut. Bei Mehrbettzimmern besprechen wir Rücksichtnahme auf Mitpatienten.' },
        { question: 'Können Sie auch nur eine einzelne Nacht übernehmen?', answer: 'Ja. Viele unserer Einsätze sind genau das: eine, zwei oder drei Nächte direkt nach einer OP, wenn das Risiko für Sturz oder Verwirrtheit am höchsten ist. Längere Begleitungen über mehrere Wochen machen wir genauso.' },
        { question: 'In welchen Krankenhäusern sind Sie tätig?', answer: 'Wir begleiten in allen Berliner Kliniken — Charité, Helios, Vivantes, DRK, Park-Klinik Weissensee, St. Joseph, Schlosspark-Klinik, St. Gertrauden und allen weiteren. Schwerpunkt unseres Einsatzgebietes ist der Berliner Westen (Zehlendorf, Grunewald, Charlottenburg, Wilmersdorf, Dahlem, Schmargendorf, Westend), aber wir sind auch in Mitte, Moabit, Tiergarten und Umland aktiv.' },
        { question: 'Wer macht den Einsatz konkret — Auszubildende oder erfahrene Kräfte?', answer: 'Erfahrene Pflegekräfte mit entsprechender Qualifikation. Klinik-Begleitung ist anspruchsvoll: Beobachtungsgabe, ruhiges Auftreten, Umgang mit Verwirrtheit und Angehörigen, fachliche Einordnung von Beobachtungen für die Übergabe an Klinikpersonal. Diese Einsätze übernehmen bei uns nur Kräfte mit entsprechender Erfahrung.' },
        { question: 'Was, wenn meine Mutter Sie nicht mag?', answer: 'In der Regel sind wir binnen kurzer Zeit ein vertrautes Gesicht — die meisten Patientinnen und Patienten beruhigen sich schon nach der ersten Stunde. Sollte es im Einzelfall nicht passen, tauschen wir die Kraft aus. Persönliche Chemie ist gerade in diesen Situationen wichtig.' },
        { question: 'Wie buchen wir das?', answer: 'Ein erstes Telefonat genügt. Wir klären die Situation (geplante OP, akut, dauerhaft), das Bedarfsbild (Demenz, Sturzgefahr, allgemeine Unsicherheit), den Umfang (Tag, Nacht, durchgehend) und das Krankenhaus. Innerhalb von 24 Stunden bekommen Sie ein konkretes Angebot.' },
      ],
      cta: { text: 'Erstgespräch anfragen', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Sitzwachen Berlin', href: '/leistungen/sitzwachen-berlin', note: 'die engste Verwandtschaft — auch zu Hause und im Hospiz' },
        { label: 'Krankenhaus-Begleitung (Hintergrundwissen)', href: '/themen/krankenhaus-begleitung', note: 'wann eine Begleitung sinnvoll ist, wer sie braucht' },
        { label: 'Demenz-Begleitung', href: '/themen/demenz-begleitung', note: 'Hintergrund zur Begleitung Demenzerkrankter' },
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
