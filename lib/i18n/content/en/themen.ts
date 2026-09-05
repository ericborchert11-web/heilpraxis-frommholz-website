import type { Overlay } from '../types';
import type { SeoThema } from '@/lib/themen';

/**
 * Englische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/en` weiterhin auf Deutsch.
 *
 * Die Zifferfolgen der Beträge, Prozentwerte, Paragraphen und Fristen sind
 * exakt aus dem Deutschen übernommen — die SCHREIBWEISE folgt aber dem
 * Englischen (€1,612 statt 1.612 €, 12.5–26.9 statt 12,5–26,9). Grund: Ein
 * englischsprachiger Leser liest „1.612 €" als eins Komma sechs. Bei einem
 * Ratgeber über Leistungsansprüche ist ein falsch verstandener Betrag der
 * schlimmste denkbare Fehler; die Ziffern bleiben mit dem Bescheid der
 * Pflegekasse abgleichbar.
 */
export const THEMEN_EN: Overlay<SeoThema> = {
  // === Thema 1: Pflegegrad beantragen ==========================================
  'pflegegrad-beantragen': {
    slug: 'pflegegrad-beantragen',
    title: 'Applying for a care level',
    short: 'Step by step, from the application to the decision.',
    metaTitle: 'Applying for a Pflegegrad 2026 – a Berlin guide',
    metaDescription:
      'Applying for a care level (Pflegegrad) in Berlin: the steps, the deadlines, the MDK assessment. A practical guide from 15 years of care advice.',
    h1: 'Applying for a care level — the steps in detail',
    primaryKeyword: 'apply for Pflegegrad',
    detail: {
      intro: [
        'A care level (Pflegegrad) opens the door to benefits that make care affordable: the care allowance (Pflegegeld), benefits in kind (Sachleistungen), respite care (Verhinderungspflege), the relief allowance (Entlastungsbetrag), grants for adapting the home. Before any of it is paid, though, the application has to be filed and the care level formally determined. Here is how that works and what to watch out for.',
      ],
      sections: [
        {
          heading: 'Step 1: file the application with the Pflegekasse',
          paragraphs: [
            'The application goes to the statutory long-term care insurance fund (Pflegekasse) — the body attached to your health insurer. No form is needed; a single line is enough: “Hiermit beantrage ich Leistungen nach dem Pflegeversicherungsgesetz.” (I hereby apply for benefits under the long-term care insurance act.)',
            'Important: the application counts retroactively from the date it is filed. Once the decision arrives, benefits are paid from that day. So send it off quickly, even if you do not yet have all the paperwork together.',
          ],
        },
        {
          heading: 'Step 2: the MDK assessment appointment',
          paragraphs: [
            'Within 4-6 weeks the medical review board (Medizinischer Dienst — MD, in Berlin MD Nord) will get in touch and arrange a home visit. The assessment takes 1-2 hours.',
            'What is assessed: how independent the person still is across 6 areas (mobility; cognitive and communication abilities; behaviour and psychological problems; self-care; coping with the demands of illness and treatment; organising everyday life).',
            'What you should prepare: a care diary (Pflegetagebuch) covering at least 1 week, a list of all medication, all medical findings from the last 2 years, and an overview of aids and equipment.',
          ],
        },
        {
          heading: 'Step 3: the decision and, if needed, an appeal',
          paragraphs: [
            'The decision has to arrive within 5 weeks of the application being filed — a statutory deadline under § 18 SGB XI. If the deadline is missed, you are entitled to 70 € for every week of delay begun.',
            'If the care level comes out too low: you have 4 weeks from receipt of the decision to lodge an objection (Widerspruch). No particular form is required, but it should set out reasons and include new evidence.',
          ],
        },
        {
          heading: 'The care levels at a glance (as of 2026)',
          paragraphs: [
            'Pflegegrad 1 (12.5–26.9 points): no care allowance, no budget for benefits in kind — only the relief allowance and individual benefits.',
            'Pflegegrad 2 (27–47.4 points): 332 € care allowance, 761 € benefits in kind per month.',
            'Pflegegrad 3 (47.5–69.9 points): 573 € care allowance, €1,432 benefits in kind.',
            'Pflegegrad 4 (70–89.9 points): 765 € care allowance, €1,778 benefits in kind.',
            'Pflegegrad 5 (from 90 points): 947 € care allowance, €2,200 benefits in kind.',
            'Plus 125 € relief allowance in each case, and up to €1,612 a year for respite care.',
          ],
        },
      ],
      faq: [
        {
          question: 'How quickly does the care level come through?',
          answer:
            'The statutory limit is 5 weeks from the date of application. In Berlin it currently often takes 6-8 weeks. Benefits are paid retroactively to the date of application.',
        },
        {
          question: 'Can I apply for a care level retroactively?',
          answer:
            'Yes — the application takes effect from the day it is filed. So if you apply today and the decision arrives in 6 weeks, you receive the benefit for those 6 weeks as a back payment.',
        },
        {
          question: 'What happens if the care level is too low?',
          answer:
            'You can lodge an objection within 4 weeks. With reasons — ideally a fresh care diary and medical certificates. We support families through appeals.',
        },
        {
          question: 'Do I already need a doctor’s report to apply?',
          answer:
            'No. But the assessor will want to see findings from the last 2 years. Have them ready before the MDK appointment.',
        },
        {
          question: 'Who helps with the application?',
          answer:
            'We offer care advice that does exactly this: drafting the application, preparing for the MDK appointment, setting out the grounds for an appeal.',
        },
      ],
      cta: { text: 'Request care advice', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Preparing for the MDK assessment', href: '/themen/mdk-begutachtung' },
        { label: 'The relief budget', href: '/themen/entlastungsbudget' },
      ],
    },
  },

  // === Thema 2: Verhinderungspflege ============================================

  // === Thema 3: Entlastungsbudget ==============================================
  entlastungsbudget: {
    slug: 'entlastungsbudget',
    title: 'The relief budget',
    short: '125 € a month — often unused, but yours by right.',
    metaTitle: 'Entlastungsbetrag – using your 125 € a month',
    metaDescription:
      'The relief allowance (Entlastungsbetrag) under § 45b SGB XI: 125 € a month for support. We explain what you can use it for and how billing works.',
    h1: 'The relief budget — 125 € a month, and often unclaimed',
    primaryKeyword: 'German care relief allowance',
    detail: {
      intro: [
        '125 € a month. Over a year that comes to €1,500. This money is yours as soon as a care level of 1 or above is in place — and in most families it goes unused. Here is what you can do with it and how the billing works.',
      ],
      sections: [
        {
          heading: 'What is the relief allowance?',
          paragraphs: [
            'The relief allowance (Entlastungsbetrag) under § 45b SGB XI is an earmarked benefit for “services that relieve the burden of care”. What is meant are offerings that take pressure off the carer and support the person who needs care.',
            'Amount: 125 € a month, from care level (Pflegegrad) 1 upwards.',
          ],
        },
        {
          heading: 'What can I use the money for?',
          paragraphs: [
            'Not for everything. Only services from providers recognised under § 45a SGB XI can be reimbursed — so not just any help you arrange.',
          ],
          stronglist: [
            {
              label: 'Typically used for',
              text: 'supervision by the hour through certified support services, day care (often combined pro rata), short-term residential care (Kurzzeitpflege, up to 50 % transferable), domestic help through recognised services, and everyday-support offerings (dementia companions, everyday helpers).',
            },
            {
              label: 'Not reimbursable',
              text: 'private help without recognised provider status, conventional nursing staff (that runs through the care allowance or benefits in kind), and the costs of a care home or of inpatient treatment.',
            },
          ],
        },
        {
          heading: 'How the billing works',
          paragraphs: [
            'You pay first, the provider issues an invoice, you submit the invoice to the Pflegekasse, and the Pflegekasse reimburses you — up to 125 € a month.',
            'Important: amounts not used up can still be drawn on until 30 June of the following year. So if you do not spend 125 € every month from January to December, you can use the remainder up to 30.06. After that the rest lapses.',
          ],
        },
        {
          heading: 'How we can support you',
          paragraphs: [
            'We are not active as a provider recognised under § 45a SGB XI — that would be a different business model. What we do is advise you on which recognised providers in Berlin are good, and how best to combine your 125 €.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the relief allowance available at care level 1 too?',
          answer:
            'Yes. At Pflegegrad 1 it matters all the more — there are no other cash benefits at that level.',
        },
        {
          question: 'Can I simply take the money in cash?',
          answer:
            'No. You pay the provider, who issues an invoice; the Pflegekasse then reimburses you the amount.',
        },
        {
          question: 'What happens if I do not need 125 € every month?',
          answer:
            'The remainder accumulates and can be used up to 30 June of the following year.',
        },
        {
          question: 'Can you provide this service yourselves?',
          answer:
            'We are not a recognised § 45a provider, but we will help you find a suitable one.',
        },
      ],
      cta: { text: 'Request care advice', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Applying for a care level', href: '/themen/pflegegrad-beantragen' },
      ],
    },
  },

  // === Thema 4: MDK-Begutachtung ===============================================
  'mdk-begutachtung': {
    slug: 'mdk-begutachtung',
    title: 'The MDK assessment',
    short: 'What matters at the appointment with the medical review board.',
    metaTitle: 'Preparing for the MDK assessment – a Berlin guide',
    metaDescription:
      'Before the MDK assessment: what matters, what you should document, which mistakes to avoid. With a checklist for the appointment.',
    h1: 'Preparing for the MDK assessment — what matters',
    primaryKeyword: 'MDK assessment care level',
    detail: {
      intro: [
        'The assessment by the medical review board (Medizinischer Dienst — MD, formerly MDK) decides which care level (Pflegegrad) you receive. And with it whether you get 332 € or 947 € a month in care allowance (Pflegegeld) — and which further benefits you are entitled to.',
        'Good preparation can make the difference between one care level and the next. Here is what matters.',
      ],
      sections: [
        {
          heading: 'What happens at the appointment',
          paragraphs: [
            'The assessor comes to your home. The appointment lasts 1-2 hours. What is rated is how independently the person manages across six modules:',
          ],
          list: [
            'Mobility (10 % weighting) — getting up, walking, climbing stairs.',
            'Cognitive and communication abilities (15 % or 7.5%) — recognising, orienting, making oneself understood.',
            'Behaviour and psychological problems (together with module 2: 15 %) — aggression, anxiety, delusions.',
            'Self-care (40 %) — personal hygiene, eating, dressing.',
            'Coping with, and independently managing, the demands of illness and treatment (20 %) — medication, changing dressings.',
            'Organising everyday life and social contacts (15 %) — planning, occupation, keeping in touch.',
          ],
          trailingParagraphs: [
            'Each module is given a score; together the modules add up to a total that is mapped to a care level.',
          ],
        },
        {
          heading: 'Four common mistakes at the assessment',
          stronglist: [
            {
              label: 'Mistake 1: putting on a brave face',
              text: 'Many people needing care play down their difficulties in front of a stranger — out of pride, out of politeness. The assessor notes that down, and the care level comes out too low. Say honestly what no longer works.',
            },
            {
              label: 'Mistake 2: relatives taking over the answers',
              text: 'The assessor needs to be able to judge the person themselves. If you as a relative keep stepping in, that is recorded as good communication ability.',
            },
            {
              label: 'Mistake 3: preparing no documentation',
              text: 'A care diary covering at least a week shows concretely where the need lies. Findings, doctors’ reports, the medication list — all of it within reach on the table.',
            },
            {
              label: 'Mistake 4: booking the appointment for a good time of day',
              text: 'Many people with dementia are more oriented in the morning than in the afternoon. If you arrange a morning appointment, the assessor may see your relative at their very best — and underestimate the need.',
            },
          ],
        },
        {
          heading: 'Checklist for the MDK appointment',
          list: [
            'A care diary covering 1-2 weeks (what is done, when, for how long).',
            'A list of all medication (name, dose, frequency).',
            'All current doctors’ reports and findings.',
            'An overview of aids and equipment (walking frame, care bed, incontinence supplies).',
            'A list of all care help already being provided.',
            'The severe disability card (Schwerbehindertenausweis), if there is one.',
            'The insurance card and the care level application.',
          ],
          paragraphs: [
            'If possible: have someone present who takes notes — not who answers.',
          ],
        },
        {
          heading: 'If you are unsure',
          paragraphs: [
            'We accompany families to MDK appointments. One of our staff attends, asks informed questions, adds observations and guards against an under-assessment. We discuss the terms in the initial consultation.',
          ],
        },
      ],
      faq: [
        {
          question: 'May someone be present at the MDK appointment?',
          answer:
            'Yes. It is actively recommended — both a relative and an external companion such as ourselves.',
        },
        {
          question: 'What happens if I disagree with the decision?',
          answer: 'You can lodge an informal objection within 4 weeks.',
        },
        {
          question: 'How often can a care level be reassessed?',
          answer:
            'Any time the condition worsens. As a routine review, generally every 1-2 years.',
        },
        {
          question: 'Who ultimately decides the care level?',
          answer:
            'The Pflegekasse — on the basis of the MDK report. It can in theory depart from it, but rarely does.',
        },
        {
          question: 'What does the preparation cost?',
          answer:
            'The initial consultation is free. Deeper advice and attendance at the MDK appointment are costed according to the effort and the setting — you will hear the relevant order of magnitude directly in the initial consultation.',
        },
      ],
      cta: { text: 'Request care advice', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Applying for a care level', href: '/themen/pflegegrad-beantragen' },
        { label: 'Care advice in Berlin', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === Thema 5: Demenz-Begleitung ==============================================

  // === Thema 6: Palliativ zu Hause =============================================


  // === Thema 8: Wohnungsauflösung im Pflegefall ================================
  'wohnungsaufloesung-pflegefall': {
    slug: 'wohnungsaufloesung-pflegefall',
    title: 'Clearing a home when care begins',
    short: 'When a home has to be given up — with dignity.',
    metaTitle: 'Clearing a home in Berlin when care begins',
    metaDescription:
      'Giving up a home when care begins: what matters, what stays, what has to be organised. With recommendations for Berlin.',
    h1: 'Clearing a home when care begins — with dignity, with a plan',
    primaryKeyword: 'house clearance Berlin',
    detail: {
      intro: [
        'When a home has to be given up because care is moving into a residential setting or a new form of housing, it is never merely a logistical task. It is the end of a chapter of life, and often the end of an identity too. That deserves more attention than the question of who collects the furniture.',
      ],
      sections: [
        {
          heading: 'When clearing a home becomes necessary',
          list: [
            'A move into a home — a permanent move to a residential institution.',
            'A move in with family — when care at home is no longer possible alone.',
            'A move into age-appropriate housing — serviced flats, assisted living.',
            'After a death — the heirs have to empty the home.',
          ],
        },
        {
          heading: 'What has to be organised',
          stronglist: [
            {
              label: 'Logistics',
              text: 'Sorting the furniture (keep, give away, sell, dispose of), a clearance firm, the final clean, handing over the keys.',
            },
            {
              label: 'Contracts',
              text: 'Terminating the tenancy, terminating electricity, gas and water, terminating telephone and internet, the broadcasting fee (Rundfunkbeitrag), reviewing insurance policies.',
            },
            {
              label: 'Official matters',
              text: 'Re-registering the address at the residents’ registration office (Einwohnermeldeamt), informing the Pflegekasse of the new address, the health insurer, the pension insurer.',
            },
            {
              label: 'Personal matters',
              text: 'What are the things that matter and have to move as well? Which keepsakes are being kept? Who in the family gets what?',
            },
          ],
        },
        {
          heading: 'What we can do in practice',
          paragraphs: [
            'We are not a furniture dealer and not a clearance firm. But we know good providers in Berlin and put families in touch. What we offer concretely:',
          ],
          stronglist: [
            {
              label: 'Accompanying the person who needs care through the move',
              text: 'We stay, we reassure, we help them find their bearings. We go with them into the new home and are there for the first few days.',
            },
            {
              label: 'Help sorting valuables',
              text: 'Discreetly — whatever cash, jewellery and documents are scattered around the home, we gather together with the family.',
            },
            {
              label: 'Organisational help for relatives',
              text: 'If you do not live in Berlin, you can commission us to attend individual appointments on the spot (handing keys to the landlord, for example, or meeting the clearance firm).',
            },
          ],
        },
        {
          heading: 'What it costs',
          paragraphs: [
            'We do not offer a flat rate for this service — the work involved is too individual. Advice and coordination, accompanying the person who needs care through the move, sorting the valuables, putting you in touch with external providers (house clearance, final clean) — every element is costed according to the effort involved. In the initial consultation we discuss what is genuinely needed and give you a concrete figure for each element.',
            'The costs of external providers (clearance firms and so on) are set out transparently as an annex to the invoice.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can you clear the home entirely on your own?',
          answer:
            'We coordinate and accompany — the clearance itself is carried out by our partner firms.',
        },
        {
          question: 'How does it work with valuables?',
          answer:
            'Discreetly and traceably. We draw up an inventory and hand it to the family. Anything valuable stays locked away until it is handed over.',
        },
        {
          question: 'Do you also help with clearing a home after a death?',
          answer: 'Yes. It is in fact one of the most common occasions.',
        },
        {
          question: 'What happens to furniture that is still good?',
          answer:
            'We pass it on to charitable organisations (Berliner Stadtmission, Caritas, Diakonie) or to reputable auction houses, depending on its value.',
        },
      ],
      cta: { text: 'Request an initial consultation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Care advice in Berlin', href: '/leistungen/pflegeberatung-berlin' },
        {
          label: '24-hour care',
          href: '/leistungen/24-stunden-betreuung',
          note: 'as an alternative to a move into a home',
        },
      ],
    },
  },
};
