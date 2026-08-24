import type { FaqItem } from '@/lib/faq-global';

/**
 * Englische Fassung der globalen Startseiten-FAQ. Gleiche Anzahl und
 * Reihenfolge wie `GLOBAL_FAQ` — sonst passt das FAQ-JSON-LD nicht mehr.
 *
 * Deutsche Rechts- und Sozialversicherungsbegriffe bleiben bei der ersten
 * Nennung in Klammern stehen, weil es dafür keine englische Entsprechung gibt.
 * Bewusst ohne Markdown-Sternchen: Die Strings werden als reiner Text
 * ausgegeben (auch ins JSON-LD), Sternchen wären dort sichtbar.
 */
export const GLOBAL_FAQ_EN: readonly FaqItem[] = [
  {
    question: 'What sets Heilpraxis Frommholz apart from other care services?',
    answer:
      'We work on a private-pay basis only — we do not bill the statutory long-term care insurance (Pflegekasse). That allows us to offer one-to-one care in genuine blocks of hours rather than fifteen-minute rounds. Our team is small and permanent, so clients see the same familiar faces throughout. Our owner, Simeon Frommholz, is a Heilpraktiker (a non-medical practitioner licensed under German law) — which means certain services can also be billed as Heilpraktiker services.',
  },
  {
    question: 'Do you bill the statutory long-term care insurance?',
    answer:
      'No. We are a purely private-pay care service. You are welcome to put any care allowance (Pflegegeld) you already receive towards our invoice — that is entirely your decision. We do not bill the Pflegekasse directly for benefits in kind (Sachleistungen).',
  },
  {
    question: 'How quickly can you start?',
    answer:
      'For urgent requests (one-to-one care, night care) often the same day, or within 24 to 48 hours. For longer engagements (round-the-clock care, bridging the wait for a care-home place) we usually need five to ten days’ notice.',
  },
  {
    question: 'Which parts of the city do you cover?',
    answer:
      'Our main areas are Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf and Mitte — but with our office in Moabit (Stephanstraße 46) we work across the whole of Berlin.',
  },
  {
    question: 'What does one-to-one care cost with you?',
    answer:
      'We do not quote flat rates, because situations differ so widely — the level of need, the qualifications required, the time of day and the setting all go into the calculation. In a free initial consultation we listen first, then put a written proposal to you with a binding price. You decide in your own time.',
  },
  {
    question: 'Who are the people who work for you?',
    answer:
      'State-registered nurses, qualified nursing assistants, social pedagogues and care workers with many years of experience. Everyone on our team is directly employed by us under a contract with full social-insurance contributions, speaks German as a native language (or at C1 level at minimum) and has provided an extended criminal record certificate.',
  },
  {
    question: 'Do you also offer round-the-clock care?',
    answer:
      'Yes — but as a lawful rotating-shift arrangement with four to six people in a fixed team, not as a single person living in the house 24/7. That makes our care somewhat more expensive than grey-market offerings, but it is legally sound and fully compliant with employment law.',
  },
  {
    question: 'How is the first conversation arranged?',
    answer:
      'Free, without obligation, and around 60 to 90 minutes long. At your home or by telephone, whichever you prefer. We listen first, then put a written proposal to you with a specific price. You decide in your own time.',
  },
];
