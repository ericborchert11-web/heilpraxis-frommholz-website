import type { Overlay } from '../types';
import type { SeoLeistung } from '@/lib/leistungen-seo';

/**
 * Englische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/en` weiterhin auf Deutsch.
 *
 * `slug` sowie alle `href` in `cta` und `relatedLinks` bleiben unverändert:
 * Das sind deutsche Referenzpfade, die `localizedHref` beim Rendern übersetzt.
 */
export const LEISTUNGEN_SEO_EN: Overlay<SeoLeistung> = {
  // === Money Page 1: 1:1-Betreuung zu Hause ====================================
  '1-zu-1-betreuung-berlin': {
    slug: '1-zu-1-betreuung-berlin',
    title: 'One-to-One Care at Home',
    short: 'One carer, one person, undivided attention — by the hour or around the clock, in your own home.',
    metaTitle: 'One-to-One Care Berlin – Private Support at Home',
    metaDescription:
      'Privately funded one-to-one care in Berlin: a constant companion at home, by the hour or around the clock. For dementia, fall risk, the final phase of life. First conversation free.',
    h1: 'One-to-one care at home — undivided attention for one person',
    primaryKeyword: 'one-to-one care Berlin',
    secondaryKeywords: [
      'private carer at home Berlin',
      'dementia one-to-one care Berlin',
      'private pay carer Berlin',
    ],
    detail: {
      intro: [
        'In ordinary home nursing the clock is always in the room. Fifteen minutes for the bathroom, twelve for breakfast, then the next household. What goes first is the thing that matters: time in which nobody has to move on.',
        'One-to-one care means this: one member of staff is there for one person. No round, no parallel patients, no handover in the middle of a conversation. In your own flat, in familiar surroundings, with your own habits. By the hour, for single nights, for a difficult phase, or permanently.',
        'We work exclusively as a private-pay nursing service (*Selbstzahler-Pflegedienst*) with a small, settled team. That is a deliberate choice: it has a price, but it creates the conditions in which this kind of time is possible at all.',
      ],
      sections: [
        {
          heading: 'When one-to-one care is the right answer',
          paragraphs: [
            'Not every situation needs constant company. These usually do:',
          ],
          stronglist: [
            { label: 'Dementia with night-time restlessness', text: 'Getting up, wandering, confusion between day and night. Relatives manage a few weeks of this, then they are finished themselves. A constant companion brings structure back — and sleep for the family.' },
            { label: 'Risk of falling', text: 'Someone who gets up at night and is no longer steady should not be alone in the flat. We are there when they get up, we help in time, and we prevent falls that would otherwise shape a whole phase of life.' },
            { label: 'The final phase of life at home', text: 'Many people would like to die at home. For that to work, the family needs someone who carries the long hours with them — awake, calm, experienced, unhurried.' },
            { label: 'After an operation', text: 'The first nights of recovery are the most critical: confusion, unsteadiness, pain. Company bridges the gap until things are stable again.' },
            { label: 'When relatives reach their limit', text: 'Family carers need nights when they sleep through and days when they do not have to be reachable. We take those hours on, reliably.' },
          ],
        },
        {
          heading: 'What a carer does with us',
          stronglist: [
            { label: 'Be there', text: 'Present, attentive, approachable. Talking when someone wants to talk. Silent when someone wants silence.' },
            { label: 'Observe and make sense of it', text: 'Noticing changes and passing them on plainly — to the family, to the GP, to the nursing service. With more than fifteen years of experience, our staff know what matters and what can wait.' },
            { label: 'Hold the day together', text: 'Helping with food and drink, accompanying trips to the bathroom, helping with repositioning, giving medication as prescribed, keeping things calm and in order.' },
            { label: 'Come along where needed', text: 'To the GP, to a specialist, on a walk, to a family occasion. Nobody waits alone in a corridor.' },
            { label: 'Take the weight off the family', text: 'You do not have to rush over every evening. You know someone is there — and you hear how it went.' },
          ],
        },
        {
          heading: 'Awake company or on-call?',
          paragraphs: ['For the night hours we distinguish two models — the difference shows clearly in the price:'],
          stronglist: [
            { label: 'Active (awake) company', text: 'The carer stays awake throughout, observes actively, documents regularly. Right for acute situations — the dying phase, severe confusion, high risk of falling.' },
            { label: 'On-call', text: 'The carer sleeps in an adjoining room, or in a reclining chair in the same room, and wakes at every sound. Right when the nights are usually quiet but nobody should be left alone.' },
          ],
          trailingParagraphs: ['Which model fits, we settle in the first conversation. Switching is possible at any time if the situation changes.'],
        },
        {
          heading: 'What one-to-one care costs',
          paragraphs: [
            'One-to-one care is a private-pay service. Statutory long-term care insurance does not cover it directly. Where a care level (*Pflegegrad*) is in place, respite care (*Verhinderungspflege*, § 39 SGB XI) or the relief amount (*Entlastungsbetrag*, § 45b SGB XI) can often be used — you submit our invoice yourself. We will advise you on what applies in your case.',
            'We do not quote flat rates, because situations differ too much: the hourly rate depends on the qualification required, on the extent, and on whether it is awake company or on-call. In the free first conversation we listen first, and then make a concrete, transparent proposal with an hourly rate and the likely total.',
            'Supplements under § 3b EStG are stated openly: 25 % at night, 50 % on Sundays and public holidays.',
          ],
        },
      ],
      faq: [
        { question: 'How quickly can you start?', answer: 'For situations that can be planned, two or three days is enough. In acute cases we try to provide a first carer within 24 hours — depending on the day and time, sometimes sooner. Call us and we will tell you honestly what is possible.' },
        { question: 'Can we book single nights only?', answer: 'Yes. Many of our assignments are exactly that: one, two or three nights during a critical phase. Single weekend nights or one fixed night a week work just as well as continuous company over months.' },
        { question: 'Is it always the same person?', answer: 'As far as possible, yes. We work with a small settled team and use two or three carers in rotation for longer assignments, so that a familiar face still comes when someone is ill or on holiday. Constantly changing staff would be the opposite of what one-to-one care is for.' },
        { question: 'What if my mother does not like the person?', answer: 'Then we replace them. Usually the strangeness is gone after the first hour, but personal chemistry is not a side issue in this work. Tell us and we will arrange it without debate.' },
        { question: 'What qualifications do your staff have?', answer: 'It depends on the situation. Where the nursing demands are high, a registered nurse comes. Where it is about presence, attention and daily life, an experienced carer is often the better choice. What your case needs, we settle beforehand — not afterwards.' },
        { question: 'Does health insurance cover this?', answer: 'No. Statutory health insurance pays for medical treatment, not for the continuous presence of a carer. Some private supplementary policies reimburse part of it — worth checking in advance.' },
        { question: 'Do we need a separate room for the carer?', answer: 'For on-call care a sofa, an armchair or a reclining chair is enough — a bed is not necessary. For awake company a chair and a reading light will do. We fit ourselves around your home, not the other way round.' },
        { question: 'What happens in an emergency?', answer: 'The carer calls the emergency doctor (112), informs the relatives and stays with the person until help arrives. What is to be done is agreed in writing with you at the start of the assignment — and, if you wish, with the GP.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Night care Berlin', href: '/leistungen/nachtwachen-berlin', note: 'when only the nights need covering' },
        { label: '24-hour care', href: '/leistungen/24-stunden-betreuung', note: 'continuous cover in rotating shifts' },
        { label: 'Dementia support', href: '/themen/demenz-begleitung', note: 'background on supporting people with dementia' },
      ],
    },
  },

  // === Money Page 2: Systemsprenger-Betreuung ==================================
  'systemsprenger-betreuung': {
    slug: 'systemsprenger-betreuung',
    title: 'Complex Needs One-to-One Care',
    short: 'One-to-one care in complex psychiatric situations.',
    metaTitle: 'Complex Needs 1:1 Care Berlin – Psychiatric Support',
    metaDescription:
      'One-to-one care for people with co-occurring conditions, psychiatric crises and those the standard system cannot hold. Experienced team in Berlin.',
    h1: 'Complex needs one-to-one care — when nothing else fits',
    primaryKeyword: 'complex needs one-to-one care Berlin',
    secondaryKeywords: [
      'psychiatric one-to-one care Berlin',
      'dual diagnosis care at home Berlin',
      'psychiatric crisis support Berlin',
    ],
    detail: {
      intro: [
        'The German word for this work is “Systemsprenger” — literally, someone who breaks the system. It is a harsh term. We are not fond of it — but it names something real: there are people whose needs are so complex that the usual structures cannot hold them. Co-occurring conditions (psychiatric illness and addiction, psychiatric illness and trauma, personality disorders with self-harm). Repeated crisis admissions. Relationships with services that break down again and again. Diagnoses that ought to rule each other out and yet appear together.',
        'This is our speciality. Not because we “can do everything”, but because we have the attitude, the experience and the resources to work with precisely these situations. For over 15 years we have been caring for people in Berlin whom other providers turn away.',
      ],
      sections: [
        {
          heading: 'Who we care for',
          paragraphs: [
            'There is no typical client — but there are recurring constellations. A few anonymised examples from our work:',
          ],
          stronglist: [
            {
              label: 'Co-occurring psychiatric illness and addiction',
              text: 'A young adult with severe psychotic episodes alongside cannabis and alcohol misuse. Inpatient addiction treatment founders on the psychiatric illness, psychiatric admissions founder on the substance use. We provide support at home — with a clear framework, regular contact and a settled key worker.',
            },
            {
              label: 'Acute risk of self-harm at home',
              text: 'A woman in her mid-50s with severe depression, discharged from hospital after several suicide attempts. Her family cannot be there around the clock, and she does not want another admission. We provide 24-hour care on a rotating shift model — until outpatient therapy takes hold.',
            },
            {
              label: 'Supported shared housing breaks down',
              text: 'A person with borderline personality disorder who escalates in every supported flat-share, but who can be stabilised at home — with a designated key worker and a constant team.',
            },
            {
              label: 'Dementia with severe aggression',
              text: 'A person with advanced dementia, still physically strong, whom no care home will keep — but who is manageable in their own flat with calm, experienced support.',
            },
          ],
        },
        {
          heading: 'What makes our support different in such cases',
          stronglist: [
            {
              label: 'A small, settled team',
              text: 'We do not work with a constantly changing roster of freelancers. Each client has two to four key workers who alternate. Trust grows because the same faces come back.',
            },
            {
              label: 'A clear stance, not pity',
              text: 'We are friendly but consistent. Provocation is not met with counter-provocation. Someone who tests us finds reliable limits. That is — paradoxically — often what our clients need most.',
            },
            {
              label: 'Experience in crisis management',
              text: 'Our team knows aggression, suicidality, psychotic episodes, self-harm. We do not panic; we de-escalate, document, and stay in contact with the treating doctor or the court-appointed guardian.',
            },
            {
              label: 'Connected to the wider support system',
              text: 'We work closely with hospitals, community psychiatrists, court-appointed guardians and social psychiatric services. We are not a substitute for a professional treatment team — we are its extended arm in everyday life at home.',
            },
          ],
        },
        {
          heading: 'Who pays for this',
          paragraphs: [
            'Care of this kind is expensive — and it is rarely funded through ordinary channels. The possible routes:',
          ],
          list: [
            'Private payment by the family — where means allow, often the quickest route.',
            'Integration assistance under SGB IX — where a psychological disability is formally recognised, applied for at the responsible district office.',
            'Social assistance under SGB XII — in cases of hardship, once other means have been exhausted.',
            'Private insurance — where entitlements to cover exist.',
          ],
        },
        {
          heading: 'What we do not do',
          paragraphs: ['We are honest: we cannot do everything.'],
          stronglist: [
            {
              label: 'Compulsory measures',
              text: 'are not our remit — where someone poses an acute danger to others and will not accept care voluntarily, that belongs in a hospital with a secure ward.',
            },
            {
              label: 'Detoxification',
              text: 'is not something we do — that belongs in a qualified addiction clinic.',
            },
            {
              label: 'Extended acute psychotherapy',
              text: 'is not our role — we support therapy, we do not replace it.',
            },
          ],
        },
      ],
      faq: [
        {
          question: 'Do you also take on people other care services have turned down?',
          answer:
            'Yes — these are often exactly the enquiries that reach us. We assess each case individually in the first talk.',
        },
        {
          question: 'Can you take on clients under court-appointed guardianship?',
          answer:
            'Yes. We work regularly with court-appointed guardians, both professional guardians and family members. The contract is then concluded with the guardian as the authorised representative.',
        },
        {
          question: 'How quickly can you take over?',
          answer:
            'For acute handovers from hospital, usually within three to seven days, depending on the complexity of the setting. Faster handover is possible in emergencies.',
        },
        {
          question: 'Roughly what does 24-hour one-to-one care of this kind cost per month?',
          answer:
            'It varies considerably, depending on the qualification required, the setting and the complexity. Continuous one-to-one care on a rotating shift model lies well above conventional home nursing — you will receive the precise calculation in the first talk, once needs have been established.',
        },
        {
          question: 'What happens if a client becomes violent?',
          answer:
            'We have clear escalation protocols. Where there is acute danger we call the emergency doctor and, if necessary, the police. This is part of our experience — such situations are demanding, but not unusual.',
        },
        {
          question: 'Do clients have to consent to being cared for?',
          answer:
            'Yes — we never provide care against someone’s will. If a person does not want us in their home, we are not the right people. In such cases we can, however, advise the family on how a court-appointed guardianship might be applied for.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Private-Pay Care Service',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'our basic approach',
        },
      ],
    },
  },

  // === Money Page 3: Pflegedienst für Selbstzahler =============================
  'pflegedienst-selbstzahler': {
    slug: 'pflegedienst-selbstzahler',
    title: 'Private-Pay Care Service',
    short: 'Exceptional care without insurance bureaucracy.',
    metaTitle: 'Private Pay Home Care Berlin – Exclusive 1:1 Nursing',
    metaDescription:
      'Private home care for self-funding families in Berlin. Discreet, flexible, a small settled team. No insurance bureaucracy. First talk without obligation.',
    h1: 'A private-pay care service — care as you would wish it to be',
    primaryKeyword: 'private pay home care Berlin',
    secondaryKeywords: [
      'private nursing care Berlin',
      'English speaking carer Berlin',
      'self funded elderly care Berlin',
    ],
    detail: {
      intro: [
        'Care funded through the statutory insurance has its own logic — billed to the minute, tied to what is claimable, often with changing staff and fixed time slots. That works for many people, but not for everyone.',
        'Anyone paying privately for care may apply different standards: time. Consistency. Discretion. A small team that genuinely knows who you are and what you need. Appointments that fit your life — not the order of a care service’s round.',
        'Heilpraxis Frommholz specialises in exactly this kind of care. We invoice exclusively on a private-pay basis. That is a deliberate decision — it allows us to work without cost pressure and bureaucracy, and to care for our clients as is right, rather than as happens to be claimable.',
      ],
      sections: [
        {
          heading: 'Who comes to us as a private client',
          paragraphs: [
            'Private clients are not defined by any single criterion — but by what they expect. What they have in common:',
          ],
          list: [
            'They want to know who is coming — and would prefer it to be the same person.',
            'They value discretion — no logo on the car, no obvious care vehicle in the drive.',
            'They are willing to pay a market price for good care — but in return they expect not to become part of a piecework system.',
            'They do not want decisions made over their heads — they want to be planned with.',
          ],
        },
        {
          heading: 'What is different here',
          stronglist: [
            {
              label: 'A small, settled team',
              text: 'Each client has two to four regular staff. They know how Frau Müller likes her coffee. They know that Herr Schulze would rather not be spoken to first thing in the morning. This continuity is invaluable — and it is our standard, not a special request.',
            },
            {
              label: 'Time rather than timetable',
              text: 'Instead of fifteen-minute visits we work in blocks: two hours, four hours, half days, whole days, continuous shifts. That leaves room for conversation over breakfast, for a walk in the afternoon, for repositioning done calmly and without haste.',
            },
            {
              label: 'Discretion is the basis of our work',
              text: 'Our staff come in unobtrusive clothing, often in their own cars. For clients in exposed positions (federal ministries, the diplomatic service, business) we make particular arrangements.',
            },
            {
              label: 'Flexibility at no extra charge',
              text: 'If an appointment has to be moved, that is fine. If four hours become six, that is fine. We charge for the time actually worked, not flat rates construed to your disadvantage.',
            },
            {
              label: 'No insurers, no bureaucracy',
              text: 'You receive one invoice a month. Clearly itemised, with supplements under § 3b EStG transparently shown. No negotiating with insurers, no arguments about care levels (Pflegegrad), no assessments by the medical review board (Medizinischer Dienst).',
            },
          ],
        },
        {
          heading: 'What it costs',
          paragraphs: [
            'We do not have flat rates, because our clients have different needs. Hourly company, overnight care and continuous 24-hour care are calculated according to the qualification of the person deployed and the time of day. Supplements under § 3b EStG (25 % at night from 22:00 to 06:00, 50 % on Sundays and public holidays) are shown transparently.',
            'In the free first talk we listen first — then we make a written proposal with a specific hourly rate, a shift plan and a monthly order of magnitude. You decide in your own time.',
          ],
        },
        {
          heading: 'How it begins',
          paragraphs: [
            'A first talk (free of charge, about 60 minutes) at your home or by telephone. You describe the situation to us, and we consider whether we are the right people. If we are, we make a written proposal with the number of hours, a shift plan and a price. You decide in your own time. If you accept, we begin within five to ten days.',
          ],
        },
      ],
      faq: [
        {
          question: 'Why do you not work with the statutory insurers?',
          answer:
            'Because that would mean a fundamentally different logic. Insurance-funded care is costed to the minute, tied to fixed catalogues of services, with flat rates that fall below the real cost of staff. We want to provide good care — and that is only possible where the price is freely agreed.',
        },
        {
          question: 'Can we still use the care allowance?',
          answer:
            'Yes. Where a care level (Pflegegrad) has been awarded, the care allowance (Pflegegeld) is paid into your account — you can use it towards our invoice. That is your decision, not a matter for the insurer.',
        },
        {
          question: 'Are your staff registered nurses?',
          answer:
            'Our team is mixed: registered nurses (three-year training), nursing assistants (one- or two-year training), social workers, qualified care workers. We deploy the appropriate qualification according to need.',
        },
        {
          question: 'Are you reachable at night and at weekends?',
          answer:
            'By telephone, yes — around the clock where necessary. Weekend assignments are part of what we offer.',
        },
        {
          question: 'What happens if the person assigned to us falls ill?',
          answer:
            'A familiar colleague from the settled team steps in. You never have a complete stranger at the door.',
        },
        {
          question: 'Can you also work in care homes?',
          answer:
            'Yes, as additional support — with the home’s agreement. It is more common than people think: families supplement the care provided by the home with our staff, for a few hours in the afternoon for instance.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Complex Needs One-to-One Care',
          href: '/leistungen/systemsprenger-betreuung',
          note: 'for complex situations',
        },
      ],
    },
  },

  // === Money Page 4: 24-Stunden-Betreuung =====================================
  '24-stunden-betreuung': {
    slug: '24-stunden-betreuung',
    title: '24-Hour Care',
    short: 'Round the clock on a rotating shift model — correct under German law.',
    metaTitle: '24-Hour Care Berlin – Round-the-Clock Care at Home',
    metaDescription:
      'Continuous care in your own home: a small settled team, German nurses, correct under employment law. No grey market.',
    h1: '24-hour care in Berlin — without the grey market',
    primaryKeyword: 'live-in care Berlin',
    secondaryKeywords: [
      '24 hour care at home Berlin',
      'round the clock nursing Berlin',
      'legal live-in care Germany',
    ],
    detail: {
      intro: [
        'Many providers advertise “24-hour care” and mean by it a single person living in the house for days or weeks at a stretch. In almost every configuration that is legally a grey market — working time law, minimum wage, social insurance, rest breaks. Recent judgments (Federal Labour Court, European Court of Justice) make it plain: this model does not deliver what it promises. Clients are increasingly held personally liable.',
        'We do it differently.',
        'For us, 24-hour care means a small, settled team of German nurses and care staff on a rotating shift model. Properly registered, properly paid, with night and Sunday supplements under § 3b EStG shown transparently. No hidden costs, no legal risk for you as the client.',
      ],
      sections: [
        {
          heading: 'What our shift model looks like in practice',
          paragraphs: ['A typical example — the reality is always individual:'],
          stronglist: [
            { label: 'Early shift 06:00–14:00', text: 'Nurse Anna.' },
            { label: 'Late shift 14:00–22:00', text: 'Nurse Bernhard.' },
            {
              label: 'Night shift 22:00–06:00',
              text: 'Nurse Carla (on call, or actively awake).',
            },
          ],
        },
        {
          heading: 'Who is in the team',
          paragraphs: ['Our 24-hour teams are made up of:'],
          stronglist: [
            {
              label: 'Registered nurses',
              text: 'for the clinical side (medication, wound care, advice to the family).',
            },
            {
              label: 'Nursing assistants and care workers',
              text: 'for everyday support (hygiene, mobility, activity, meals).',
            },
            {
              label: 'Optionally, social workers or trained dementia companions',
              text: 'where needed.',
            },
          ],
        },
        {
          heading: 'What 24-hour care costs with us',
          paragraphs: [
            'Continuous care with three shifts a day, seven days a week, is a considerable monthly investment. What it costs in a given case depends on three things: whether the night is worked on call or actively awake, what nursing qualification is required (registered nurse, nursing assistant, care worker), and what particular demands there are (ventilation, wound management, challenging behaviour).',
            'In the first talk (60 to 90 minutes, free of charge) we go through the setting in detail and provide a written calculation with a monthly order of magnitude — no flat rates, no surprises.',
          ],
        },
        {
          heading: 'What to watch for with other providers',
          paragraphs: [
            'The market is full of agencies offering “24-hour carers from Eastern Europe”. Legally, these models rest on thin ice:',
          ],
          stronglist: [
            {
              label: 'Working time law',
              text: 'One person cannot lawfully be “present for 24 hours”. Breaks and rest periods have to be observed.',
            },
            {
              label: 'Minimum wage',
              text: 'Where 24 hours of availability a day are expected, many models in effect pay hourly rates well below the minimum wage.',
            },
            {
              label: 'Social insurance',
              text: 'Where self-employed people are posted from elsewhere in the EU, there are considerable compliance risks.',
            },
            {
              label: 'Liability',
              text: 'If the carer breaks a hip on the way to the bathroom, it is the client who may well be liable.',
            },
          ],
        },
      ],
      faq: [
        {
          question: 'How many people are in the team altogether?',
          answer:
            'For 24/7 cover we need four to six people in the settled team — that way holidays, illness and weekends are covered too. But you only ever have one person with you per shift.',
        },
        {
          question: 'Do the staff change often?',
          answer:
            'No. We employ people on long-term contracts. If a team member leaves, we first replace them from a wider pool of colleagues who already know your relative — before anyone genuinely new joins.',
        },
        {
          question: 'Can we agree twelve-hour shifts?',
          answer:
            'Yes, to a limited extent (for long day and night changeovers, for instance). We check whether it is workable under employment law.',
        },
        {
          question: 'Who is liable if the carer breaks something?',
          answer:
            'We carry professional indemnity insurance. Damage is settled through us — not through your household insurance.',
        },
        {
          question: 'Can we start at short notice?',
          answer:
            'For acute handovers (discharge from hospital, for example) we need five to ten days. With a longer planning horizon we can be more individual in our approach.',
        },
        {
          question: 'What happens if our family member dies?',
          answer:
            'On a death the contract ends automatically on the day itself. Hours already worked are invoiced; after that no further costs arise — no minimum term, no notice period.',
        },
        {
          question: 'Can you come for three or four weeks after an operation?',
          answer:
            'Yes. Fixed-term 24-hour assignments (post-operative rehabilitation, convalescence) are a frequent request. The minimum booking is one week.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Private-Pay Care Service',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'our basic approach',
        },
        {
          label: 'Overnight Care Berlin',
          href: '/leistungen/nachtwachen-berlin',
          note: 'when only the night has to be covered',
        },
        {
          label: 'Care Advice',
          href: '/leistungen/pflegeberatung-berlin',
          note: 'on care levels and funding',
        },
      ],
    },
  },

  // === Money Page 5: Pflegeberatung Berlin =====================================
  'pflegeberatung-berlin': {
    slug: 'pflegeberatung-berlin',
    title: 'Care Advice Berlin',
    short: 'Independent, clear, focused on what actually helps.',
    metaTitle: 'Care Advice Berlin – Care Levels, Benefits, Funding',
    metaDescription:
      'Independent care advice in Berlin: applying for a care level, understanding benefits, preparing for the assessment. First talk free of charge.',
    h1: 'Care advice in Berlin — clear, independent, understandable',
    primaryKeyword: 'care advice Berlin',
    secondaryKeywords: [
      'Pflegegrad application help Berlin',
      'German long term care insurance advice',
      'care level assessment support Berlin',
    ],
    detail: {
      intro: [
        'Care has become complicated. Care levels (Pflegegrade), respite care (Verhinderungspflege), the relief budget (Entlastungsbudget), combined benefits, the equipment allowance, short-term residential care, day care, the shared-housing supplement, carer’s support payments — even professionals sometimes lose the thread. We do not.',
        'And because we know how much money is left on the table when the wrong applications are made or the right moment is missed, we offer care advice that genuinely helps — with an emphasis that sets it apart from the standard advice the insurers give: we start from what is needed, not from the catalogue of benefits.',
      ],
      sections: [
        {
          heading: 'What we advise on',
          stronglist: [
            {
              label: 'Applying for a care level, and the assessment',
              text: 'We prepare you for the appointment with the medical review board (Medizinischer Dienst), help to document how much help is needed, and draft the application with you. If the decision falls short, we support you with an objection and with an application for a higher level.',
            },
            {
              label: 'Getting the most from an existing care level',
              text: 'We check whether all the benefits you are entitled to are actually being claimed — several thousand euros a year often go unused because the relief budget, respite care or the equipment allowance are left untouched.',
            },
            {
              label: 'Managing transitions',
              text: 'When discharge from hospital draws closer, when day care or a home care service is being changed, when a care home place has to be found — we help you take the right steps in the right order.',
            },
            {
              label: 'Powers of attorney and advance planning',
              text: 'Lasting power of attorney, guardianship directive, advance healthcare directive — what is genuinely needed, how it has to be worded, where it should be lodged.',
            },
            {
              label: 'Adaptations to the home',
              text: 'Which alterations does statutory long-term care insurance (Pflegekasse) fund (up to 4,000 € per measure)? Which aids does the health insurer pay for? Where is an application worthwhile, and where is it not?',
            },
            {
              label: 'Conflict within the family',
              text: 'When siblings quarrel over the care of their parents, when expectations collide, when guilt blocks decisions — we listen, put things in order, and suggest ways forward.',
            },
          ],
        },
        {
          heading: 'What care advice under § 7a SGB XI is (and what we do differently)',
          paragraphs: [
            'Since 2009 the long-term care insurers have been obliged to offer free care advice. It is an important service — but it has structural weaknesses:',
          ],
          list: [
            'The advisers are employed by the insurer — they cannot make wholly independent recommendations.',
            'Appointments are often short (45 to 60 minutes) and geared to standard topics.',
            'Complex constellations (several care levels within one family, international insurance, transitions between forms of care) are not dealt with in depth.',
          ],
        },
        {
          heading: 'What it costs',
          paragraphs: [
            'The first talk is free and without obligation. For detailed advice, home visits, attendance at the assessment and support with applications we calculate according to the work involved — we tell you the order of magnitude directly in the first talk and confirm it in writing. We do not have flat rates, because the questions differ too much.',
          ],
        },
        {
          heading: 'When care advice is particularly worthwhile',
          list: [
            'Before the first assessment appointment — the preparation often decides a difference of one or two care levels.',
            'When a care level has been refused or set too low — the deadline for an objection has to be met (four weeks).',
            'On discharge from hospital — the first weeks decide how stable the arrangements will be.',
            'When care is suddenly needed (a stroke, a fall) — applying quickly secures benefits backdated to the date of application.',
            'When there is family conflict over the care of a parent.',
          ],
        },
      ],
      faq: [
        {
          question: 'Are you a certified care adviser under § 7a SGB XI?',
          answer:
            'We offer independent private care advice. Formal recognition under § 7a is usually not relevant for our clients, because we do not bill through the insurers. If you would like the official § 7a advice, we are glad to refer you.',
        },
        {
          question: 'Can you come to our home?',
          answer:
            'Yes — home visits are in fact typical. A great deal can only be judged on site.',
        },
        {
          question: 'Do you also help with appealing a care level?',
          answer:
            'Yes. We draft objections and can, where needed, attend the reassessment with you.',
        },
        {
          question: 'Do you know about private long-term care insurance?',
          answer:
            'Yes — private insurers often have different tariff structures and civil-service allowance entitlements. We know the main private long-term care insurers in Berlin.',
        },
        {
          question: 'How long does it take from application to care level?',
          answer:
            'By law five weeks from the date of application; in Berlin currently often six to eight weeks. Benefits are granted backdated to the date of application — which is why applying quickly is worthwhile.',
        },
        {
          question: 'What is the difference between care advice and care coordination?',
          answer:
            'Advice means the structured conveying of knowledge and options. Coordination means actively managing the care situation (making appointments, speaking with services, submitting applications). We offer both — bookable separately.',
        },
        {
          question: 'Can I set care advice against tax?',
          answer:
            'Care costs are deductible as an extraordinary burden above certain thresholds. Advice costs generally are too. Please clarify the details with your tax adviser.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Applying for a care level',
          href: '/themen/pflegegrad-beantragen',
          note: 'the practical guide',
        },
        {
          label: 'The care assessment',
          href: '/themen/mdk-begutachtung',
          note: 'what to expect',
        },
        {
          label: 'Respite care',
          href: '/themen/verhinderungspflege',
          note: 'the entitlement most often underestimated',
        },
      ],
    },
  },

  // === Money Page 6: Nachtwachen Berlin =======================================
  'nachtwachen-berlin': {
    slug: 'nachtwachen-berlin',
    title: 'Overnight Care Berlin',
    short: 'A waking presence when the night grows long.',
    metaTitle: 'Overnight Care Berlin – Safe Company Through the Night',
    metaDescription:
      'Overnight care in Berlin for hospital, hospice and at home. Experienced team, available at once. Also for dementia, falls risk and the dying phase.',
    h1: 'Overnight care in Berlin — safe company through the night',
    primaryKeyword: 'overnight care Berlin',
    secondaryKeywords: [
      'night nurse at home Berlin',
      'night sitter dementia Berlin',
      'falls prevention at night',
    ],
    detail: {
      intro: [
        'At night everything is harder. Confusion, pain, fear, breathlessness — what was manageable by day becomes a threat in the dark. Anyone who is alone is more alone at night. Anyone who is caring is more exhausted at night.',
        'Overnight care (Nachtwache) from Heilpraxis Frommholz takes exactly these hours. From 20:00 or 22:00 until 06:00 or 08:00 in the morning. As a one-off, for a particular phase, or on a lasting basis.',
      ],
      sections: [
        {
          heading: 'When overnight care helps',
          stronglist: [
            {
              label: 'Dementia with restlessness at night',
              text: 'Getting up, wandering, confusion between day and night — this wears families down within a few weeks. Overnight care absorbs the night-time hours and gives the family sleep.',
            },
            {
              label: 'Risk of falling',
              text: 'Someone who wants to get up at night but is no longer steady should not be left unattended in bed. Overnight care is there when they get up, helps, reassures — and can prevent falls that would otherwise change everything.',
            },
            {
              label: 'Company in the last nights',
              text: 'Some people die on a particular night. No one can predict it, but everyone can prepare to be there. Overnight care takes over when the family has to sleep in between.',
            },
            {
              label: 'After discharge from hospital',
              text: 'The first nights at home after a hospital stay are often the most critical. Overnight care bridges the gap until stability returns.',
            },
            {
              label: 'In acute psychological distress',
              text: 'Suicidal phases, severe depressive episodes, states of anxiety — a waking presence protects and at the same time relieves the family.',
            },
          ],
        },
        {
          heading: 'Waking overnight care or sleeping cover?',
          paragraphs: ['We distinguish two models:'],
          stronglist: [
            {
              label: 'Active (waking) overnight care',
              text: 'The member of staff stays awake throughout, observes actively, documents regularly. This makes sense in acute situations (the dying phase, severe confusion, after an operation).',
            },
            {
              label: 'Sleeping overnight cover',
              text: 'The member of staff sleeps in an adjoining room (or in a reclining chair in the same room), but is woken by any sound. This makes sense for clients who usually sleep through but must not be alone.',
            },
          ],
        },
        {
          heading: 'What overnight care costs',
          paragraphs: [
            'The hourly rate depends on whether it is active overnight care (awake throughout, documenting) or sleeping cover (sleeping next door, woken as needed). And on the qualification deployed — a registered nurse or an experienced care worker.',
            'In the first talk we establish what is needed and give you the hourly rate as well as the likely total for the planned shift. Night and Sunday supplements under § 3b EStG are already contained in the rates and shown transparently.',
          ],
        },
      ],
      faq: [
        {
          question: 'At how short a notice can overnight care be arranged?',
          answer: 'In acute situations from the same day; normally with 24 to 48 hours of notice.',
        },
        {
          question: 'Can we book just a single night?',
          answer:
            'Yes. Single nights are possible, as are individual weekend nights or single weeks for a period of rehabilitation.',
        },
        {
          question: 'What happens in a medical emergency?',
          answer:
            'The overnight carer calls the emergency services (112), informs the family, and stays with the person until help arrives. Where breathing deteriorates, consciousness is lost, or a stroke or heart attack is suspected, they act at once.',
        },
        {
          question: 'Does the overnight carer sleep in a bed?',
          answer:
            'With waking overnight care, no. With sleeping cover, yes — in a room set aside for the purpose or in a reclining chair. This is correct under employment law.',
        },
        {
          question: 'Do we need a separate room for the overnight carer?',
          answer:
            'For sleeping cover a sofa, an armchair or a reclining chair is enough — no bed is needed. For waking overnight care a chair in the room is sufficient.',
        },
        {
          question: 'What does the overnight carer actually do?',
          answer:
            'Repositioning, help to the toilet, continence care, giving medication as prescribed, offering drinks, reassurance. More complex clinical tasks (changing dressings, injections) only where a correspondingly qualified member of staff has been booked.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: '24-Hour Care',
          href: '/leistungen/24-stunden-betreuung',
          note: 'when more than the night has to be covered',
        },
      ],
    },
  },


  // === Money Page 8: Reisebegleitung für Senioren =============================
  'reisebegleitung-senioren': {
    slug: 'reisebegleitung-senioren',
    title: 'Travel Companions for Older People',
    short: 'Travelling safely — with medical support where needed.',
    metaTitle: 'Senior Travel Companion – Medically Escorted Travel',
    metaDescription:
      'Travel companions for older people departing from Berlin: rail, air, road. Medical escort available. Discreet, experienced, individually arranged.',
    h1: 'Travel companions for older people — safely on the way',
    primaryKeyword: 'senior travel companion Berlin',
    secondaryKeywords: [
      'medical travel escort Germany',
      'nurse travel companion Berlin',
      'medical repatriation to Berlin',
    ],
    detail: {
      intro: [
        'Travelling is no longer a given in later life. The distances grow longer, the stairs steeper, the connections tighter. Follow-up care after an operation abroad, a family visit in southern Germany, a last journey together with an ill spouse — in situations like these an experienced companion is often what makes the journey possible at all.',
        'Heilpraxis Frommholz offers travel companions for older people departing from Berlin — with a nursing qualification where necessary, or simply as practical help with the journey. It is organised in cooperation with our non-profit partner association Leben Pflegen Reisen e.V., which has been planning and accompanying journeys for people in need of care for years.',
      ],
      sections: [
        {
          heading: 'What we do on accompanied journeys',
          stronglist: [
            {
              label: 'Organising the outward and return journey',
              text: 'Rail tickets, seat reservations, wheelchair assistance, luggage, connections, a hotel part-way if required. We take care of the logistics; you only have to want to arrive.',
            },
            {
              label: 'Accompanying you during the journey',
              text: 'We travel with you — from beginning to end. We help with getting on and off, with the meal in the dining car, with the stop at the motorway services. We keep the tickets, translate at the counter, and steady things when they become hectic.',
            },
            {
              label: 'Medical care on the way',
              text: 'Where there are medical needs (wound care, managing medication, carrying oxygen, giving insulin), we deploy a qualified nurse as the companion.',
            },
            {
              label: 'Hospital transfers',
              text: 'When a relative has to be brought back to Berlin from a hospital abroad, we organise this together with medical transport services — we are the human companion who accompanies the patient from bed to bed.',
            },
          ],
        },
        {
          heading: 'Which journeys we accompany',
          list: [
            'Ordinary journeys for rest and recuperation — spa stays, family visits within Germany or Europe.',
            'Journeys with a medical purpose — hospital stays, travel to rehabilitation, appointments with specialists.',
            'Journeys home — from a care home or hospital back to familiar surroundings.',
            'Last journeys — where there is a wish to see a particular place once more (a birthplace, a family grave, a favourite spot).',
            'Journeys back from abroad — from a holiday interrupted by illness, for instance.',
          ],
        },
        {
          heading: 'How an accompanied journey is organised',
          stronglist: [
            {
              label: 'First talk and planning',
              text: 'We understand what is at stake first, and plan afterwards. This can be by telephone or in person.',
            },
            {
              label: 'Preparation',
              text: 'We check questions of insurance (travel health cover, overseas policies), clarify particular medical circumstances with the GP or the hospital, and obtain the necessary transport documents.',
            },
            {
              label: 'The journey itself',
              text: 'We collect you from your home. We stay until the destination, or until you are handed over to the next responsible person (a relative, a hospital, a hotel concierge).',
            },
            {
              label: 'Afterwards',
              text: 'Where necessary, we organise the return journey or the onward care at the destination.',
            },
          ],
        },
        {
          heading: 'What an accompanied journey costs',
          paragraphs: [
            'Here the calculation becomes complex — it depends on duration, distance and qualification. An accompanied journey within Germany without medical needs is calculated differently from an international journey with a registered nurse, or a hospital transfer involving a medical transport service. After the first talk we make you a written proposal with a daily rate and a total.',
            'Travel costs (rail, air, hotel) are borne separately by the client. We travel in the same class as the person we are accompanying.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can you travel abroad with us?',
          answer:
            'Yes — within the Schengen area without difficulty, to other countries with a little more notice for visa and insurance questions.',
        },
        {
          question: 'What if the client’s condition deteriorates during the journey?',
          answer:
            'If their condition deteriorates we turn at once to the nearest medical care (emergency services, the local hospital). We stay with the person and inform the family.',
        },
        {
          question: 'Can you manage travellers who use a wheelchair?',
          answer:
            'Of course. We arrange the railway’s wheelchair assistance, mobility service points and parking permits. Where needed we bring lightweight portable standing aids.',
        },
        {
          question: 'How far in advance does a travel companion have to be booked?',
          answer:
            'Within Germany from two weeks of notice, internationally from four to six weeks. Acute hospital transfers can be organised in two to three days.',
        },
        {
          question: 'Do you also travel with people who have a care level?',
          answer:
            'Yes — at any care level (Pflegegrad), provided the person is fit to travel (we clarify this beforehand with the GP and the client). At higher care levels we always deploy registered nurses.',
        },
        {
          question: 'What happens if the journey has to be extended?',
          answer:
            'We extend it where needed — an extension is confirmed in writing by email. Daily rates continue to apply.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Private-Pay Care Service',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'our basic approach',
        },
      ],
    },
  },

};
