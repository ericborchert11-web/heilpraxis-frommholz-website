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
