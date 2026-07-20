/**
 * Deutsche Oberflächentexte. Diese Datei ist die Referenz: `Dictionary`
 * ergibt sich aus ihrer Struktur, alle übrigen Sprachen werden dagegen
 * typisiert und müssen vollständig sein.
 *
 * Inhalte (Leistungs-, Standort-, Themen-Texte) stehen NICHT hier, sondern
 * bleiben in lib/leistungen.ts, lib/standorte.ts, lib/themen.ts.
 */
export const de = {
  meta: {
    skipLink: 'Zum Inhalt springen',
    languageSwitcherLabel: 'Sprache wählen',
  },
  a11y: {
    sizeNormal: 'Schriftgröße normal',
    sizeLarge: 'Schriftgröße größer',
    sizeXlarge: 'Schriftgröße sehr groß',
    contrast: 'Kontrast',
    contrastToggle: 'Hochkontrast umschalten',
  },
  /** Brotkrumen-Beschriftungen. Die Pfade selbst laufen über `localizedHref`. */
  crumbs: {
    start: 'Start',
    leistungen: 'Leistungen',
    themen: 'Themen',
    standorte: 'Standorte',
    familienbereich: 'Familienbereich',
    sozialesEngagement: 'Soziales Engagement',
  },
  nav: {
    leistungen: 'Leistungen',
    standorte: 'Standorte',
    familienbereich: 'Familienbereich',
    qualitaet: 'Qualität',
    kontakt: 'Kontakt',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    logoAlt: 'Wappen',
    tagline: 'Pflege · Beratung · Begleitung',
  },
  hero: {
    eyebrow: 'Pflege & Beratung in ganz Berlin',
    h1Line1: 'Pflege, die',
    h1Emphasis: 'zuhört.',
    h1Line2: 'Beratung, die trägt.',
    lead: 'Wir sind nah am Menschen — mit über 15 Jahren Erfahrung in Pflege, Beratung und Begleitung in Berlin.',
    body: 'Stundenweise Alltagsbegleitung, 24-Stunden-Schichtbetreuung, Pflege- und Inklusionsberatung: Wir bringen Ruhe und Fachlichkeit dorthin, wo Menschen sie brauchen — zu Hause, im vertrauten Umfeld, bei Ihnen.',
    ctaContact: 'Erstgespräch anfragen',
    ctaServices: 'Unsere Leistungen',
    ctaCall: 'Anrufen',
    imageAlt: 'Das Team der Heilpraxis Frommholz mit einem Klienten in der häuslichen und stationären Begleitung',
    promise: 'Wir sehen den Menschen. Nicht den Pflegegrad.',
    promiseLabel: '— Unser Versprechen',
  },
  trust: {
    yearsLabel: 'Jahre Pflegeerfahrung',
    reachableNum: '24/7',
    reachableLabel: 'Verlässlich erreichbar',
    employedNum: '100 %',
    employedLabel: 'fest angestellt',
    regionNum: 'Berlin',
    regionLabel: '& Umland',
  },
  leistungenSection: {
    eyebrow: 'Unser Angebot',
    h2Line1: 'Sechs Wege,',
    h2Emphasis: 'nah zu sein.',
    lead: 'Wir betreuen Privatkundinnen und -kunden in ihrer eigenen Häuslichkeit. Manche brauchen nur ein paar Stunden in der Woche, andere eine durchgehende Begleitung — und manche zunächst nur ein gutes Gespräch.',
    all: 'Alle Leistungen ansehen →',
    more: 'Mehr erfahren →',
  },
  qualitaet: {
    eyebrow: 'Qualität & Sicherheit',
    h2Line1: 'Worauf Sie sich',
    h2Emphasis: 'verlassen können.',
    lead: 'Gute Pflege beginnt bei der Frage, wer zu Ihnen ins Haus kommt — und unter welchen Bedingungen. Das regeln wir sauber, nachprüfbar und ohne Grauzonen.',
    points: [
      {
        title: '100 % fest angestellt',
        text: 'Alle Mitarbeitenden sind bei uns sozialversicherungspflichtig angestellt — keine Honorar-Rotation, kein Graumarkt.',
      },
      {
        title: 'Erweitertes Führungszeugnis',
        text: 'Jede Pflegekraft legt ein erweitertes polizeiliches Führungszeugnis vor, bevor sie zu Ihnen ins Haus kommt.',
      },
      {
        title: 'Deutsch auf Augenhöhe',
        text: 'Muttersprache Deutsch oder mindestens C1. Verständigung ist bei uns nie das Problem.',
      },
      {
        title: 'Feste Bezugspersonen',
        text: 'Ein kleines, festes Team: 2–4 vertraute Gesichter je Klient:in statt täglich wechselnder Kräfte.',
      },
      {
        title: '24/7 – legal im Wechselschichtmodell',
        text: 'Rund-um-die-Uhr-Betreuung im legalen Wechselschicht-Team, nicht als Live-in-Graumarkt.',
      },
    ],
  },
  ablauf: {
    eyebrow: 'So läuft es ab',
    h2Line1: 'Drei Schritte,',
    h2Emphasis: 'keine Eile.',
    steps: [
      { title: 'Kennenlernen', text: 'Ein erstes Gespräch — telefonisch oder bei Ihnen zu Hause. Wir hören zu und klären, was wirklich gebraucht wird.' },
      { title: 'Planung', text: 'Gemeinsam mit Ihnen erstellen wir ein passgenaues Pflege- und Begleitkonzept — flexibel, jederzeit anpassbar.' },
      { title: 'Begleitung', text: 'Ein kleines, festes Team begleitet Sie. Mit regelmäßigem Austausch und einer Person, die immer ansprechbar ist.' },
    ],
    outroBefore: 'Und danach bleiben Sie im Bild:',
    outroLink: 'Ihr Familienbereich für Angehörige →',
  },
  familienbereich: {
    eyebrow: 'Für Angehörige',
    h2Line1: 'Ihr Familienbereich —',
    h2Emphasis: 'immer im Bild,',
    h2Line2: 'ohne nachfragen zu müssen.',
    lead: 'Pflege betrifft die ganze Familie. In Ihrem geschützten Familienbereich sehen Sie jederzeit, wer wann da ist, was abgerechnet wird und was dokumentiert wurde — an einem Ort, für alle unsere Klient:innen inklusive.',
    bausteine: [
      { title: 'Dienstpläne', text: 'Wer kommt wann? Der aktuelle Dienstplan Ihrer/Ihres Angehörigen — jederzeit einsehbar, immer aktuell.' },
      { title: 'Rechnungen', text: 'Alle Rechnungen übersichtlich an einem Ort, transparent aufgeschlüsselt und jederzeit abrufbar.' },
      { title: 'Dokumentation', text: 'Was ist passiert? Die Pflegedokumentation — nachvollziehbar für berechtigte Angehörige, nah am Alltag Ihrer/Ihres Liebsten.' },
    ],
    note: 'Geschützter, verschlüsselter Zugang — nur für berechtigte Angehörige. Wir richten ihn individuell für Ihre Familie ein.',
    ctaMore: 'Mehr erfahren →',
    ctaSetup: 'Im Erstgespräch einrichten',
  },
  faq: {
    eyebrow: 'Häufig gestellte Fragen',
    h2Line1: 'Was viele',
    h2Emphasis: 'vorher fragen.',
  },
  kontakt: {
    eyebrow: 'Kontakt aufnehmen',
    h2Line1: 'Beginnen wir mit einem',
    h2Emphasis: 'Gespräch.',
    lead: 'Sie überlegen, ob unsere Begleitung passt? Wir nehmen uns Zeit für ein erstes, unverbindliches Gespräch — am Telefon, per E-Mail oder direkt bei Ihnen.',
    successTitle: 'Danke — wir haben Ihre Nachricht erhalten.',
    successFallback: 'Wir melden uns innerhalb weniger Tage zurück. In dringenden Fällen erreichen Sie uns direkt unter ',
    honeypotLabel: 'Bitte leer lassen',
    requiredNote: '* Pflichtfeld',
    labelName: 'Name *',
    placeholderName: 'Ihr Name',
    labelReach: 'Telefon oder E-Mail *',
    placeholderReach: 'Wie dürfen wir Sie erreichen?',
    labelSubject: 'Worum geht es? *',
    subjects: [
      'Erstgespräch zur Pflege',
      'Sitzwache / Nachtwache',
      '24-Stunden-Betreuung',
      'Pflegeberatung',
      'Reisebegleitung',
      'Hospiz-Sitzwache',
      'Etwas anderes',
    ],
    labelMessage: 'Ihre Nachricht (optional)',
    placeholderMessage: 'Erzählen Sie uns kurz, was Sie umtreibt…',
    consentBefore: '* Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. Hinweise zur Datenverarbeitung finden Sie in der ',
    consentLink: 'Datenschutzerklärung',
    consentAfter: '.',
    submit: 'Nachricht senden',
    submitting: 'Wird gesendet …',
  },
  /**
   * Rückmeldungen der Server-Action `sendContact`. Sie gehen an die
   * anfragende Person und müssen darum in deren Sprache stehen — der
   * Sprachhinweis in der Benachrichtigungsmail ans Team bleibt deutsch.
   *
   * `sendUnavailable` und `sendFailed` enden bewusst mit einem Leerzeichen:
   * die Action hängt E-Mail-Adresse bzw. Telefonnummer und den Punkt an.
   */
  kontaktMeldungen: {
    fieldName: 'Bitte Ihren Namen angeben.',
    fieldContact: 'Bitte Telefon oder E-Mail angeben, damit wir uns melden können.',
    fieldSubject: 'Bitte ein Thema wählen.',
    fieldConsent: 'Bitte der Datenverarbeitung zustimmen.',
    checkFields: 'Bitte überprüfen Sie die markierten Felder.',
    rateLimited: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
    sendUnavailable: 'Versand aktuell nicht möglich. Bitte rufen Sie uns direkt an oder schicken Sie eine E-Mail an ',
    sendFailed: 'Versand fehlgeschlagen. Bitte versuchen Sie es später erneut — oder erreichen Sie uns direkt unter ',
    networkError: 'Netzwerkfehler beim Versand. Bitte später erneut versuchen.',
    success: 'Nachricht angekommen — wir melden uns innerhalb weniger Tage zurück.',
  },
  /** Oberfläche der SEO-Detailseiten (Leistungen, Themen, Standorte). */
  seoDetail: {
    faqHeading: 'Häufig gestellte Fragen',
    ctaTitle: 'Bereit für ein erstes Gespräch?',
    ctaText: 'Kostenlos, unverbindlich, in Ruhe. Wir hören erst zu — und melden uns dann mit einem konkreten Vorschlag zurück.',
    relatedHeading: 'Vielleicht interessiert Sie auch',
  },
  leistungenPage: {
    title: 'Unsere Leistungen',
    lead: 'Acht Wege, in denen wir Menschen in Berlin begleiten — von der Sitzwache im Krankenhaus bis zur 24-Stunden-Betreuung zu Hause. Alle als Selbstzahler-Leistung, mit kleinem festem Team.',
    more: 'Mehr erfahren',
    detailPending: 'Detail-Seite folgt',
    outroBefore: 'Sie wissen nicht, welche Leistung passt? Wir hören erst zu, dann beraten wir.',
    outroLink: 'Erstgespräch anfragen →',
  },
  themenPage: {
    title: 'Themen rund um Pflege',
    lead: 'Hintergrundwissen zu den Fragen, die viele Familien zuerst haben — Pflegegrad, Leistungsansprüche, Demenz, Sterbephase. Verständlich, ohne Werbe-Floskeln, aus über 15 Jahren Praxis.',
    more: 'Weiterlesen',
    outroBefore: 'Eine konkrete Frage zur eigenen Situation?',
    outroLink: '→ Pflegeberatung',
  },
  standortePage: {
    title: 'Wo wir pflegen — unsere Schwerpunkte in Berlin',
    lead: 'Unser Sitz ist in Moabit, Stephanstraße 46. Von hier aus sind wir in 20–30 Minuten in jedem Stadtteil Berlins. Schwerpunkte unserer Arbeit liegen in den westlichen Innenstadt-Bezirken.',
    hauptstandort: 'Hauptstandort',
    outroHeading: 'Auch außerhalb dieser Schwerpunkte',
    outroText: 'Wir sind grundsätzlich für ganz Berlin verfügbar — mit Anfahrtspauschale außerhalb unserer Kernbezirke. Wenn Sie in einem anderen Berliner Stadtteil wohnen und Pflege brauchen, melden Sie sich gerne. Wir prüfen die Anfrage und sagen ehrlich, ob wir die richtigen sind.',
    outroCta: 'Erstgespräch anfragen',
  },
  /**
   * Seite /familienbereich. Die Absätze mit Inline-Link sind in Vor-, Link-
   * und Nachtext zerlegt — ein Platzhalter im Fließtext ginge beim Rendern
   * als React-Knoten nicht mehr auf.
   */
  familienbereichPage: {
    title: 'Ihr Familienbereich — alles Wichtige an einem geschützten Ort',
    lead: 'Wenn ein Mensch gepflegt wird, wollen Angehörige wissen, was passiert — auch wenn sie nicht daneben stehen können. Der Familienbereich gibt Ihnen genau das: einen geschützten Online-Zugang zu Dienstplänen, Rechnungen und Dokumentation. Für alle unsere Klient:innen inklusive.',
    warumH2: 'Warum ein Familienbereich',
    warumText: 'Pflege betrifft nie nur eine Person, sondern die ganze Familie. Gerade wer nicht täglich vor Ort sein kann, möchte trotzdem wissen: Wer ist gerade da? Was wurde gemacht? Was kostet es? Der Familienbereich beantwortet diese Fragen, ohne dass Sie nachtelefonieren müssen — und nimmt Angehörigen ein Stück Sorge ab.',
    bausteineH2: 'Die drei Bausteine',
    bausteine: [
      {
        label: 'Dienstpläne.',
        text: 'Sie sehen, wer wann zu Ihrer/Ihrem Angehörigen kommt — immer aktuell, jederzeit einsehbar.',
      },
      {
        label: 'Rechnungen.',
        text: 'Alle Rechnungen an einem Ort, transparent aufgeschlüsselt, mit allen Zuschlägen sichtbar und jederzeit abrufbar.',
      },
      {
        label: 'Dokumentation.',
        text: 'Was wurde geleistet und beobachtet? Die Pflegedokumentation ist für berechtigte Angehörige nachvollziehbar — nah am Alltag, ohne Fachchinesisch.',
      },
    ],
    inklusiveH2: 'Für alle Klient:innen inklusive',
    inklusiveText: 'Der Familienbereich kostet nichts extra. Er gehört zu unserem Verständnis von ehrlicher, transparenter Pflege: Wer uns beauftragt, soll jederzeit sehen können, was passiert — nicht auf Nachfrage, sondern selbstverständlich.',
    sicherheitH2: 'Sicherheit & Datenschutz',
    sicherheitBefore: 'Der Zugang ist geschützt und die Daten werden über eine verschlüsselte (TLS-)Verbindung übertragen. Es sehen ausschließlich die Angehörigen, die Sie berechtigen. Wir verarbeiten die Daten nach den Vorgaben der DSGVO und behandeln die besonders sensiblen Inhalte der Pflegedokumentation mit entsprechender Sorgfalt. Wie wir mit Ihren Daten umgehen, lesen Sie in unserer',
    sicherheitLink: 'Datenschutzerklärung',
    sicherheitAfter: '.',
    individuellH2: 'Individuell nach Bedarf eingerichtet',
    individuellText: 'Wir richten den Familienbereich für jede Familie individuell ein und erweitern ihn bei Bedarf — etwa um weitere berechtigte Angehörige oder zusätzliche Inhalte. Was Sie brauchen, setzen wir um.',
    faqH2: 'Häufige Fragen',
    faq: [
      {
        question: 'Wer bekommt Zugang?',
        answer: 'Sie und die Angehörigen, die Sie benennen. Jeder Zugang wird individuell und geschützt eingerichtet.',
      },
      {
        question: 'Was kostet der Familienbereich?',
        answer: 'Nichts extra — er ist für alle unsere Klient:innen inklusive.',
      },
      {
        question: 'Wie sicher sind meine Daten?',
        answer:
          'Der Zugang ist geschützt, die Daten werden über eine TLS-verschlüsselte Verbindung übertragen, die Verarbeitung erfolgt nach den Vorgaben der DSGVO, und nur berechtigte Angehörige sehen die Inhalte. Details in unserer Datenschutzerklärung.',
      },
    ],
    ctaTitle: 'Zugang im Erstgespräch einrichten',
    ctaText: 'Sie überlegen, ob Betreuung durch uns das Richtige ist? Im kostenlosen Erstgespräch richten wir auf Wunsch gleich Ihren Familienbereich mit ein.',
    ctaButton: 'Erstgespräch anfragen',
  },
  /**
   * Seite /soziales-engagement. Die Beschriftungen der Karriere-Links sind
   * übersetzt, ihre Ziele bleiben deutsch — darauf weist `footer.germanOnlyNote`
   * allgemein hin.
   */
  sozialesEngagementPage: {
    title: 'Soziales Engagement — Pflege als soziale Aufgabe',
    lead: 'Soziale Verantwortung gehört für uns zur Pflege — ein großer Teil davon läuft heute über unseren gemeinnützigen Partnerverein Leben Pflegen Reisen e.V. Hier zeigen wir, woher diese Haltung kommt und wie die Zusammenarbeit aussieht.',
    vereinH2: 'Getragen mit dem Partnerverein Leben Pflegen Reisen e.V.',
    vereinBefore: 'Für',
    vereinLinkSitzwachen: 'Sitzwachen',
    vereinBetween1: ',',
    vereinLinkHospiz: 'Hospiz-Sitzwachen',
    vereinBetween2: 'und',
    vereinLinkReise: 'Reisebegleitung',
    vereinAfterLinks: 'arbeiten wir eng mit dem gemeinnützigen Verein',
    vereinName: 'Leben Pflegen Reisen e.V.',
    vereinAfter: 'zusammen. Der Verein bringt ein ehrenamtliches Netzwerk und langjährige Erfahrung in der Begleitung pflegebedürftiger Menschen auf Reisen mit — eine Ergänzung zu unseren bezahlten pflegerischen Schichten, die Familien gerade in den letzten Stunden eines Lebens oder auf einer letzten gemeinsamen Reise nicht alleine lässt.',
    teamH2: 'Wer bei uns arbeitet',
    teamText1: 'Bei uns arbeiten Menschen, denen das Regelsystem den Wiedereinstieg schwer gemacht hat: Langzeitarbeitslose, Quereinsteigerinnen mit Lebenserfahrung, ältere Pflegekräfte, die anderswo aussortiert wurden, Menschen aus dem sogenannten zweiten Arbeitsmarkt. Etliche unserer Mitarbeitenden sind über genau diesen Weg zu uns gekommen.',
    teamText2: 'Wir bilden sie aus, begleiten sie, geben ihnen einen Rahmen, in dem sie wachsen können. Und merken jeden Tag, wie viel Wärme, Geduld und Lebenserfahrung sie in die Pflege bringen — Qualitäten, die in standardisierten Stellenprofilen nicht abgefragt werden, in der täglichen Arbeit am Menschen aber den Unterschied machen.',
    herkunftH2: 'Woher unsere Haltung kommt',
    herkunftBefore: 'Die Heilpraxis Frommholz ist aus der gemeinnützigen Krankenpflege Frommholz hervorgegangen — eine gGmbH, die seit Jahren in Berlin Pflege für Menschen organisiert, die im Regelsystem schwer Platz finden. Diese Erfahrung prägt uns bis heute: in der Auswahl unserer Mitarbeitenden, in der Bereitschaft, schwierige Klient-Konstellationen anzunehmen (siehe',
    herkunftLink: 'Systemsprenger-Betreuung',
    herkunftAfter: '), in der Haltung gegenüber Inklusionsfragen.',
    simeonBefore: 'Mehr über die gemeinnützige Schwesterorganisation und die Person Simeon Frommholz auf',
    simeonLink: 'simeonfrommholz.de',
    simeonAfter: '.',
    ausbildungH2: 'Ausbildungs- und Praktikumsplätze',
    ausbildungText: 'Wir bieten regelmäßig Plätze für FSJler*innen und Quereinsteigerinnen mit Pflegeinteresse an. Insbesondere für Menschen, die nach einer Lebenskrise oder einem Berufswechsel in einen sinnstiftenden Tätigkeitsbereich kommen wollen. Auch das ist Teil dessen, was wir unter sozialem Engagement verstehen: Plätze schaffen, an denen Erfahrung gewinnen und einen Beruf finden möglich ist.',
    karriereBefore: 'Konkrete Stellenkonzepte finden Sie auf der',
    karriereLink: 'Karriere-Seite',
    karriereBetween1: '— insbesondere',
    karriereLinkEhrenamt: 'Bezahltes Ehrenamt: Sitzwachen',
    karriereBetween2: 'und',
    karriereLinkRente: 'In der Rente weiterarbeiten',
    karriereAfter: 'sind häufige Einstiege.',
    klientinnenH2: 'Was das für unsere Klient*innen heißt',
    klientinnenText1: 'Wir nehmen Anfragen an, bei denen andere abwinken: schwierige psychiatrische Verläufe, fortgeschrittene Demenz mit herausforderndem Verhalten, komplexe palliative Begleitungen, Klient*innen ohne stabiles soziales Netz. Nicht weil wir alles können — sondern weil wir die Haltung haben, hinzusehen, statt wegzuschauen.',
    klientinnenText2: 'Und wir nehmen uns Zeit, in der eigentlichen Pflegearbeit nicht im 15-Minuten-Takt zu sein. Das ist nur möglich, weil wir als Selbstzahler-Pflegedienst ohne Kassenbürokratie arbeiten — diese Entscheidung hat einen Preis, aber sie schafft den Rahmen, in dem soziale Pflegearbeit überhaupt möglich ist.',
    ctaTitle: 'Mitarbeiten oder Klient*in werden?',
    ctaText: 'Wir freuen uns über Bewerbungen — gerade von Menschen, die anderswo durchs Raster gefallen sind. Und wir hören zu, wenn Sie für sich selbst oder Angehörige Pflege suchen, die mehr ist als Akkord.',
    ctaKarriere: 'Stellenkonzepte ansehen',
    ctaKontakt: 'Erstgespräch anfragen',
  },
  /**
   * Titel und Beschreibung der sechs Übersichtsseiten. `title` ist der
   * VOLLSTÄNDIGE Seitentitel: die Routen setzen ihn als `title.absolute`, die
   * Vorlage aus dem Layout greift also nicht.
   *
   * Verbraucher sind ausschließlich die übersetzten Routen unter `app/(intl)`.
   * Die deutschen Routen tragen ihre eigenen `metadata`-Exporte; die deutschen
   * Werte hier bilden sie nur ab, damit das Wörterbuch vollständig ist.
   */
  indexMeta: {
    home: {
      title: 'Pflege, Sitzwachen & Begleitung Berlin – Heilpraxis Frommholz',
      description: 'Private Pflege, Alltagsbegleitung und Beratung in Berlin und Umland. Stundenweise bis 24/7. Mit Erfahrung, Sorgfalt und Haltung.',
    },
    leistungen: {
      title: 'Leistungen · Heilpraxis Frommholz',
      description: 'Sitzwachen, Pflege für Selbstzahler, 24-Stunden-Betreuung, Pflegeberatung — die Leistungen der Heilpraxis Frommholz in Berlin.',
    },
    themen: {
      title: 'Themen · Heilpraxis Frommholz',
      description: 'Pflegegrad, Verhinderungspflege, MDK-Begutachtung, Demenz, Palliativ — Hintergrundwissen für Familien in Berlin, kompakt und ehrlich.',
    },
    standorte: {
      title: 'Standorte in Berlin · Heilpraxis Frommholz',
      description: 'Wo wir pflegen in Berlin — Schwerpunkte in Charlottenburg, Wilmersdorf, Zehlendorf, Grunewald und Mitte. Überblick aller Stadtteile.',
    },
    familienbereich: {
      title: 'Familienbereich — geschützter Online-Zugang für Angehörige',
      description: 'Als Angehörige jederzeit im Bild: Dienstpläne, Rechnungen und Pflegedokumentation im geschützten Familienbereich. Für alle Klient:innen der Heilpraxis Frommholz inklusive.',
    },
    sozialesEngagement: {
      title: 'Soziales Engagement · Heilpraxis Frommholz',
      description: 'Soziales Engagement der Heilpraxis Frommholz: getragen gemeinsam mit unserem Partnerverein Leben Pflegen Reisen e.V. Pflege als soziale Aufgabe — Herkunft, Haltung, Kooperation.',
    },
  },
  footer: {
    familyLink: '→ Familienbereich für Angehörige',
    headingLeistungen: 'Leistungen',
    headingThemen: 'Themen',
    headingStandorte: 'Pflege in Ihrem Kiez',
    allLeistungen: '→ Alle Leistungen',
    allThemen: '→ Alle Themen',
    allStandorte: '→ Alle Standorte',
    hauptstandort: 'Hauptstandort',
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    agb: 'AGB',
    karriere: 'Karriere',
    schichtplaner: 'Schichtplaner',
    schichtplanerTitle: 'Mitarbeiterbereich (Schichtplaner) — externe Seite',
    /** Nur in den übersetzten Fassungen sichtbar. Auf Deutsch leer. */
    germanOnlyNote: '',
  },
  notFound: {
    eyebrow: '404',
    title: 'Seite nicht gefunden',
    lead: 'Diese Seite existiert nicht (mehr) oder wurde verschoben. Hier geht es weiter:',
    ctaHome: 'Zur Startseite',
    ctaServices: 'Leistungen ansehen',
    ctaContact: 'Kontakt',
    /**
     * Die Telefonnummer steht im Deutschen vor dem Verb, im Englischen dahinter
     * („0151 … anrufen" vs. „Call 0151 …"). Darum zwei Teile statt eines
     * Platzhalters — sonst ergibt eine der beiden Sprachen keinen Satz.
     */
    callBefore: '',
    callAfter: ' anrufen',
  },
} as const;

/**
 * Weitet die Literaltypen aus `as const` auf `string` auf, behält die Struktur
 * aber unverändert bei. Ohne das müsste `en.ts` exakt die deutschen Strings
 * enthalten; mit `as const` bleibt `de` zugleich tief `readonly`.
 *
 * Der Schutz, um den es geht, bleibt bestehen: ein fehlender oder falsch
 * geschriebener Schlüssel in einer Übersetzung ist weiterhin ein Compile-Fehler.
 * Weil die Abbildung homomorph ist, bleiben Tupel Tupel — eine Übersetzung mit
 * vier statt fünf Qualitätspunkten fällt ebenfalls beim Typecheck auf.
 */
type Widen<T> = T extends string ? string : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof de>;
