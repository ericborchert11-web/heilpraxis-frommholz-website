/**
 * Globale FAQ-Sektion für die Startseite (SEO-Mega-Briefing TEIL 7.1).
 * Erscheint mit FaqJsonLd-Schema, damit Google Rich Snippets ausspielen kann.
 */

export type FaqItem = { question: string; answer: string };

export const GLOBAL_FAQ: readonly FaqItem[] = [
  {
    question: 'Was unterscheidet Heilpraxis Frommholz von anderen Pflegediensten?',
    answer:
      'Wir arbeiten ausschließlich für Selbstzahler — ohne Pflegekassen-Abrechnung. Das erlaubt uns 1:1-Betreuung in echten Stundenblöcken statt 15-Minuten-Touren. Unser Team ist klein und fest, sodass Klientinnen und Klienten immer dieselben vertrauten Gesichter sehen. Inhaber Simeon Frommholz ist Heilpraktiker — bestimmte Leistungen können auch als Heilpraktiker-Leistungen abgerechnet werden.',
  },
  {
    question: 'Rechnen Sie mit der Pflegekasse ab?',
    answer:
      'Nein. Wir sind ein reiner Selbstzahler-Pflegedienst. Sie können vorhandenes Pflegegeld nutzen, um unsere Rechnung anteilig zu bezahlen — das ist Ihre Entscheidung. Eine direkte Abrechnung mit der Pflegekasse über Sachleistungen erfolgt nicht.',
  },
  {
    question: 'Wie schnell können Sie starten?',
    answer:
      'Bei akuten Anfragen (1:1-Betreuung, Nachtwachen) oft am gleichen Tag oder innerhalb von 24-48 Stunden. Bei längerfristigen Engagements (24-Stunden-Betreuung, Heimüberbrückung) brauchen wir typischerweise 5-10 Tage Vorlauf.',
  },
  {
    question: 'Welche Stadtteile betreuen Sie?',
    answer:
      'Schwerpunkte sind Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf und Mitte — mit unserem Sitz in Moabit (Stephanstraße 46) sind wir aber in ganz Berlin tätig.',
  },
  {
    question: 'Was kostet 1:1-Betreuung bei Ihnen?',
    answer:
      'Pauschalpreise nennen wir nicht, weil die Situationen sehr unterschiedlich sind — Bedarf, Qualifikation, Tageszeit und Setting fließen in die Kalkulation ein. Im kostenlosen Erstgespräch hören wir erst zu, dann machen wir einen schriftlichen Vorschlag mit verbindlichem Preis. Sie entscheiden in Ruhe.',
  },
  {
    question: 'Wer sind Ihre Mitarbeitenden?',
    answer:
      'Examinierte Pflegekräfte, qualifizierte Pflegehilfskräfte, Sozialpädagoginnen und Sozialpädagogen, Betreuungskräfte mit langjähriger Erfahrung. Alle Mitarbeitenden sind bei uns sozialversicherungspflichtig angestellt, sprechen Muttersprache Deutsch (oder mindestens C1) und haben ein erweitertes polizeiliches Führungszeugnis vorgelegt.',
  },
  {
    question: 'Bieten Sie auch 24-Stunden-Betreuung an?',
    answer:
      'Ja — aber im legalen Wechselschicht-Modell mit 4-6 Mitarbeitenden im festen Team, nicht in Form einer einzelnen Person, die 24/7 im Haus lebt. Das macht unsere Betreuung etwas teurer als Graumarkt-Angebote, aber rechtlich sauber und arbeitsrechtlich korrekt.',
  },
  {
    question: 'Wie ist das erste Gespräch organisiert?',
    answer:
      'Kostenlos, unverbindlich, ca. 60-90 Minuten. Auf Wunsch bei Ihnen zu Hause oder telefonisch. Wir hören erst zu, dann machen wir einen schriftlichen Vorschlag mit konkretem Preis. Sie entscheiden in Ruhe.',
  },
];
