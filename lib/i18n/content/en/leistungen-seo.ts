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
  // === Money Page 1: Sitzwachen Berlin =========================================
  'sitzwachen-berlin': {
    slug: 'sitzwachen-berlin',
    title: 'Bedside Companions Berlin',
    short: 'One-to-one presence in hospital, hospice and at home.',
    metaTitle: 'Bedside Companion Berlin – 1:1 Care in Hospital & Home',
    metaDescription:
      'Professional bedside companions in Berlin: hospital, psychiatric wards, hospice, at home. Experienced team, available at short notice. First talk free.',
    h1: 'Bedside companions in Berlin — when no one should be alone',
    primaryKeyword: 'private patient sitter Berlin',
    secondaryKeywords: [
      'hospital sitter Berlin',
      'psychiatric one-to-one care Berlin',
      'overnight care Berlin',
    ],
    detail: {
      intro: [
        'A bedside companion (Sitzwache) means this: someone is there. Not for medical treatment — doctors and nurses do that. But for the presence itself. For the sense that someone stays when the night grows long, when the operation is coming, when the confusion arrives and passes and arrives again.',
        'Heilpraxis Frommholz arranges bedside companions across Berlin — in hospital, on psychiatric wards, in hospices and at home. We have specialised in one-to-one care for over 15 years. People who need a bedside companion have usually been through a great deal already. We understand that in these moments it is less about expertise than about humanity — and our staff bring both.',
        'Part of our bedside companion work we carry together with our non-profit partner association Leben Pflegen Reisen e.V. — above all where nursing competence needs to be joined by voluntary commitment and longer stretches of presence.',
      ],
      sections: [
        {
          heading: 'When a bedside companion makes sense',
          paragraphs: [
            'A bedside companion is more than a chair beside the bed. It protects, it calms, it prevents worse. Typical situations in which our clients call us:',
          ],
          stronglist: [
            {
              label: 'After operations',
              text: 'Postoperative confusion (delirium) is one of the most common complications in older patients. A familiar presence can lower the risk of delirium and support the course of recovery.',
            },
            {
              label: 'Where there is a risk of falling',
              text: 'Someone who becomes restless at night, wants to get up, no longer knows where they are, is at risk of falling. A bedside companion watches, reassures, helps with getting up — and can prevent falls and the injuries that come with them, which can otherwise shape an entire phase of life.',
            },
            {
              label: 'In the dying phase',
              text: 'When it is clear that the end is near, many families do not want their loved one to go alone. But not everyone can be at the bedside without a break. We take the night hours, the weekends, the stretches when you need a rest yourself.',
            },
            {
              label: 'In psychiatric crises',
              text: 'Acute risk of harm to self or others, suicidal phases, severe depressive episodes. One-to-one care protects — and can in some cases help to avoid an involuntary admission.',
            },
            {
              label: 'With dementia',
              text: 'Waking phases at night, the risk of wandering off, disorientation — a bedside companion brings calm to a situation that otherwise wears families down.',
            },
          ],
        },
        {
          heading: 'Where we provide bedside companions',
          paragraphs: [
            'We work across the whole of Berlin. Our base in Moabit (Stephanstraße 46) sits conveniently in the middle of the city — from here we reach Charlottenburg in ten minutes, Wilmersdorf in twelve, Zehlendorf in twenty-five.',
            'We arrange bedside companions in:',
          ],
          stronglist: [
            {
              label: 'Hospitals',
              text: 'Charité (all sites), Vivantes hospitals, Schlosspark-Klinik, Sankt Gertrauden, DRK Kliniken, Lazarus, Helios and every other Berlin hospital.',
            },
            {
              label: 'Psychiatric clinics',
              text: 'Vivantes Wenckebach, St. Hedwig, Schlosspark-Klinik and all acute and day clinics within the city.',
            },
            {
              label: 'Hospices and palliative care wards',
              text: 'in close coordination with the team on site.',
            },
            {
              label: 'Care homes',
              text: 'when families need relief, or when a particular situation calls for one-to-one care.',
            },
            {
              label: 'At home',
              text: 'in familiar surroundings, with everything that makes a home your own.',
            },
          ],
        },
        {
          heading: 'What a bedside companion costs with us',
          paragraphs: [
            'Bedside companions are as a rule a private-pay service. Statutory long-term care insurance (Pflegekasse) does not cover them directly — in some cases respite care (Verhinderungspflege, § 39 SGB XI) or the relief allowance (Entlastungsbetrag, § 45b SGB XI) can be used, and we are glad to advise you on that.',
            'We do not quote flat rates, because the situations differ too much. A night in hospital is calculated differently from a twelve-hour accompaniment at home. In the free first talk we establish what you need and what it will cost. Transparent supplements under § 3b EStG (25 % at night, 50 % on Sundays and public holidays) apply to every assignment.',
          ],
        },
        {
          heading: 'What our bedside companions can do',
          paragraphs: [
            'Our team is mixed: registered nurses, nursing assistants, social workers, care staff with many years of psychiatric experience. Depending on the situation we deploy the appropriate qualification. What they all have in common:',
          ],
          list: [
            'Calm in demanding situations',
            'The ability to observe and to document matter-of-factly',
            'Experience with confusion, aggression and fear',
            'Discretion — what is seen and heard in the home stays there',
          ],
        },
      ],
      faq: [
        {
          question: 'What is the difference between a bedside companion and a nurse?',
          answer:
            'A bedside companion is present, observes, protects and reassures — but does not carry out nursing tasks such as repositioning, wound care or giving medication. Nurses do both; a bedside companion specialises in being there.',
        },
        {
          question: 'Can bedside companions come at night?',
          answer:
            'Yes. Overnight care is one of our most frequent requests. We arrive at the agreed time and stay until morning — if needed for several nights in succession, on a rota within a settled team.',
        },
        {
          question: 'How quickly is a bedside companion available?',
          answer:
            'In emergencies often within 24 hours, sometimes the same day. For assignments that can be planned further ahead (after an operation, for instance) we need only two to three days of notice.',
        },
        {
          question: 'Are the bedside companions professionally qualified?',
          answer:
            'We deploy different qualifications depending on the situation. In medically delicate situations a registered nurse comes. Where presence alone is required, an experienced care worker is often enough. We clarify this in the first talk.',
        },
        {
          question: 'Can we claim the bedside companion through the long-term care insurer?',
          answer:
            'Not directly — we invoice exclusively as a private-pay service. Where a care level (Pflegegrad) has been awarded you can, however, use the relief allowance (125 € per month) or respite care and submit our invoice yourself. We will advise you on what is possible.',
        },
        {
          question: 'Who is liable if something happens?',
          answer:
            'We carry professional indemnity insurance. Damage caused by our staff is settled through that policy.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Hospital Companions Berlin',
          href: '/leistungen/klinik-begleitung-berlin',
          note: 'bedside companions specifically in hospital',
        },
        {
          label: 'Private-Pay Care Service',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'our basic approach',
        },
        {
          label: 'Complex Needs One-to-One Care',
          href: '/leistungen/systemsprenger-betreuung',
          note: 'in complex psychiatric situations',
        },
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
        {
          label: 'Bedside Companions Berlin',
          href: '/leistungen/sitzwachen-berlin',
          note: 'one-to-one company for shorter periods',
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
          label: 'Bedside Companions Berlin',
          href: '/leistungen/sitzwachen-berlin',
          note: 'one-to-one company for shorter periods',
        },
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
          label: 'Hospital Companions Berlin',
          href: '/leistungen/klinik-begleitung-berlin',
          note: 'when continuous company is needed in hospital',
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
          label: 'Bedside Companions Berlin',
          href: '/leistungen/sitzwachen-berlin',
          note: 'one-to-one company by day and by night',
        },
        {
          label: 'Hospice Bedside Companions',
          href: '/leistungen/hospiz-sitzwachen',
          note: 'in the dying phase',
        },
        {
          label: '24-Hour Care',
          href: '/leistungen/24-stunden-betreuung',
          note: 'when more than the night has to be covered',
        },
      ],
    },
  },

  // === Money Page 7: Hospiz-Sitzwachen ========================================
  'hospiz-sitzwachen': {
    slug: 'hospiz-sitzwachen',
    title: 'Hospice Bedside Companions',
    short: 'Presence in the last hours — for the dying person and for the family.',
    metaTitle: 'Hospice Companion Berlin – Company in the Last Days',
    metaDescription:
      'Bedside companions in the hospice, on the palliative ward or at home. Discreet, experienced, dignified. Relief for families in the last hours.',
    h1: 'Hospice bedside companions — someone stays',
    primaryKeyword: 'end of life care companion Berlin',
    secondaryKeywords: [
      'hospice sitter Berlin',
      'palliative care companion Berlin',
      'vigil care Berlin',
    ],
    detail: {
      intro: [
        'There is a particular task within our work: being there when someone is leaving. Not as a clinician — palliative teams do that. But as a waking, quiet presence that asks nothing more than to listen, to hold, to wait.',
        'Hospice bedside companions (Sitzwachen) differ from other bedside companions in one decisive respect: they no longer have a medical aim. It is not about anything getting better. It is about the person not being alone — and about the family not breaking under it.',
        'In this work we cooperate closely with our partner association Leben Pflegen Reisen e.V., whose network of volunteers complements the hours we provide, particularly in the dying phase — so that the family is not left alone when our paid shifts come to an end.',
      ],
      sections: [
        {
          heading: 'Where we provide hospice bedside companions',
          stronglist: [
            {
              label: 'In the hospice',
              text: 'Most hospices in Berlin (Ricam Hospiz, Hospiz Schöneberg-Steglitz, Hospiz Wilmersdorf, Christophorus Hospiz, Lazarus Hospiz and others) have their own structures of volunteer companions. We come in addition — often for clients who wish for continuous company, which goes beyond what the volunteer service can offer.',
            },
            {
              label: 'On the palliative ward',
              text: 'We come into the hospital, in coordination with the nursing team. We are not a competing service — we relieve the nurses by providing the one-to-one presence that is seldom possible in the routine of a ward.',
            },
            {
              label: 'At home',
              text: 'Many people want to die at home — and can, if the family manages to organise it. We often come for the night hours, for the weekends, for the stretches when the family itself feels the exhaustion.',
            },
          ],
        },
        {
          heading: 'What hospice bedside companions do (and do not do)',
          stronglist: [
            {
              label: 'They do',
              text: 'stay awake, observe, speak quietly, read aloud, keep silent, hold a hand, moisten lips, be still. They call the family when it is time. They call the palliative team when the symptoms change.',
            },
            {
              label: 'They do not',
              text: 'adjust pain relief (the doctor does that), carry out nursing in the narrower sense (the care service does that), or offer comfort that rings false. They do not talk about religion unless the dying person begins it. They do not weep aloud when what is called for is holding steady.',
            },
          ],
        },
        {
          heading: 'What sets our staff apart in this work',
          paragraphs: [
            'Hospice bedside companionship is a particular task. We deploy colleagues who:',
          ],
          list: [
            'have experience of the dying phase (a hospice placement, nursing experience, training in bereavement support).',
            'are calm, genuinely calm — not silent out of uncertainty, but quiet by disposition.',
            'have worked through losses of their own, so that it is not their grief filling the room.',
            'do not become agitated by the bodily changes of the dying phase.',
          ],
          trailingParagraphs: [
            'Accompanying someone as they die is not work for beginners. We assign it only to experienced staff.',
          ],
        },
        {
          heading: 'What hospice bedside companions cost',
          paragraphs: [
            'Bedside companions at the end of life often fall within days that are already expensive, in a phase that is already expensive. We charge a reduced end-of-life rate, below our standard — we give you the exact sum for a night shift or for company over several days in the first talk.',
            'Night supplements (25 %) and Sunday and public holiday supplements (50 %) under § 3b EStG are shown transparently.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can you come into the hospice even though there are companions there already?',
          answer:
            'Yes — in agreement with the hospice team. We see ourselves as an addition, not a replacement. Often we bring additional presence in the last 24 hours in particular, because volunteer companions are not available continuously.',
        },
        {
          question: 'How quickly can you come once it becomes clear that the end is near?',
          answer:
            'With 24 hours of notice, yes. In genuinely acute situations (a matter of hours) we try, but we cannot always guarantee it.',
        },
        {
          question: 'Do your staff talk with the dying person about death?',
          answer:
            'Only if the person raises it themselves. We listen. We do not initiate subjects we cannot judge.',
        },
        {
          question: 'Can you also help after the death?',
          answer:
            'If it is wanted, we stay for the first hours after the death. We help to call the doctor to certify the death, we are there for the family, and we hand over to the funeral director. For bereavement support in the weeks that follow we refer you to specialist services.',
        },
        {
          question: 'Are you familiar with different religious traditions?',
          answer:
            'We respect every tradition. Where there are specific rites (the Muslim practice of washing by family members, Orthodox liturgies, the Jewish customs of shiva) we ask the family for clear guidance. We learn quickly, but we assume nothing.',
        },
        {
          question: 'Can you also be there where dying has no religious dimension?',
          answer:
            'Of course. Most of the deaths we attend are secular. We impose nothing religious on anyone who does not want it.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Bedside Companions Berlin',
          href: '/leistungen/sitzwachen-berlin',
          note: 'the general service',
        },
        {
          label: 'Palliative care at home',
          href: '/themen/palliativ-zuhause',
          note: 'background reading',
        },
        {
          label: 'Overnight Care Berlin',
          href: '/leistungen/nachtwachen-berlin',
          note: 'when only the night hours are needed',
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
        {
          label: 'Company in hospital',
          href: '/themen/krankenhaus-begleitung',
          note: 'during hospital stays',
        },
        {
          label: 'Bedside Companions Berlin',
          href: '/leistungen/sitzwachen-berlin',
          note: 'for one-to-one company on the ward',
        },
      ],
    },
  },

  // === Money Page 9: Klinik-Begleitung Berlin ==================================
  'klinik-begleitung-berlin': {
    slug: 'klinik-begleitung-berlin',
    title: 'Hospital Companions Berlin',
    short: 'One-to-one company in hospital — when family cannot be there every moment.',
    metaTitle: 'Hospital Companion Berlin — 1:1 Care on the Ward',
    metaDescription:
      'Private hospital companions in Berlin: one-to-one for your relative where nurses look after 18 patients at once. Dementia, falls risk, after operations.',
    h1: 'Hospital companions in Berlin — when family cannot be there every moment',
    primaryKeyword: 'hospital companion Berlin',
    secondaryKeywords: [
      'private hospital sitter Berlin',
      'dementia support in hospital Berlin',
      'post-operative night sitter Berlin',
      'falls prevention after surgery',
    ],
    detail: {
      intro: [
        'A stay in hospital is often an extreme situation for older people — unfamiliar surroundings, changing staff, long waits after pressing the call button. In ward routine, nurses often look after 18 or more patients at the same time; one-to-one presence is seldom possible.',
        'We accompany your relative privately in hospital: in preparation for rehabilitation, on the night after an operation, where there is dementia or a risk of falling, during longer stays. By the hour or around the clock — as an addition to the hospital staff, not as a replacement for them.',
      ],
      sections: [
        {
          heading: 'What we actually do',
          stronglist: [
            {
              label: 'Being there when the staff cannot be',
              text: 'Nurses often care for 18 or more patients at once across a shift. We are there one-to-one — continuously, awake, observing.',
            },
            {
              label: 'Preventing falls after an operation',
              text: 'Especially at night after an anaesthetic, in confusion, in unfamiliar surroundings. We stay by the bed and help with getting up, before anything happens.',
            },
            {
              label: 'Dementia support in hospital',
              text: 'We know how to handle attempts to leave the bed, loss of orientation, post-operative delirium. A calm presence markedly reduces stress and the need for restraint or sedation.',
            },
            {
              label: 'Helping with food, offering drinks',
              text: 'What hospital staff often cannot do unhurried for lack of time — particularly with people with dementia, who simply “forget” to eat.',
            },
            {
              label: 'An eye on the call button, a point of contact for nurses and doctors',
              text: 'Passing on observations, mediating on the ward round, remembering the questions that are so easily lost in hospital routine.',
            },
            {
              label: 'Company to examinations and transfers',
              text: 'The patient is not left alone in the corridor or while waiting — we stay with them.',
            },
            {
              label: 'Relief for the family',
              text: 'You do not have to rush over every evening after work. You know that someone is there.',
            },
          ],
        },
        {
          heading: 'When does this make sense?',
          paragraphs: ['Four typical situations in which families call us:'],
          stronglist: [
            {
              label: 'After a planned operation',
              text: 'The first two to five nights for safety — the phase with the highest risk of delirium and of falls.',
            },
            {
              label: 'With dementia or confusion',
              text: 'Continuous company for the whole stay, because the hospital environment often makes dementia markedly worse.',
            },
            {
              label: 'During longer stays (more than a week)',
              text: 'By the day or by the hour, where family cannot be there continuously themselves.',
            },
            {
              label: 'In the emergency department',
              text: 'Support at short notice, when no one in the family can get there quickly enough.',
            },
          ],
        },
        {
          heading: 'What sets us apart',
          stronglist: [
            {
              label: 'Experienced nurses, not auxiliary staff',
              text: 'Company in hospital is demanding. These assignments are taken on here only by staff with the relevant professional experience — powers of observation, a calm manner, the ability to deal with confusion and with relatives, and the professional judgement to pass observations on to hospital staff.',
            },
            {
              label: 'A working relationship with nurses and doctors',
              text: 'We know how to move within hospital routine without getting in the way. We report to admissions and to the nurse in charge, agree our hours of presence, and fit into the routine of the ward.',
            },
            {
              label: 'Discreet and dignified',
              text: 'We do not talk about other patients, we complement the ward team respectfully, and we step back when the family is there.',
            },
          ],
        },
      ],
      faq: [
        {
          question: 'What does a private hospital companion cost in Berlin?',
          answer:
            'The cost depends on the number of hours, the proportion of day and night, and the qualification required. We do not quote flat rates, because the situations differ so much. In the free first talk we listen first — then we make a specific, transparent proposal.',
        },
        {
          question: 'Will health insurance cover a hospital companion from a care service?',
          answer:
            'In most cases, no. Statutory health insurance pays for medical treatment in hospital, but not for additional one-to-one care by an external care service. There are exceptions for parents rooming in with children, and in rare special cases. For adults with dementia, a risk of falling or particular care needs, private company in hospital is as a rule a private-pay service. Some private supplementary policies reimburse part of the cost — please clarify this in advance.',
        },
        {
          question: 'What can a private companion in hospital actually do?',
          answer:
            'Be present, keep an eye on the call button and on the patient, help with food and drink, assist with changes of position, provide reassurance in confusion, inform nurses and doctors of observations, accompany the patient to examinations. We do not replace the hospital staff — we add a constantly present, familiar person. Medical tasks (medication, wound care, changing dressings) remain with the hospital staff.',
        },
        {
          question: 'My father is confused after his operation (delirium) — what can we do?',
          answer:
            'Post-operative delirium affects older people above all and often appears in the first nights after an operation. The most effective measure is a calm, familiar presence — studies show that bedside companions can markedly reduce the need for restraint and sedation. If you cannot be there continuously yourself, we take that on. Particularly during the night hours, when confusion often becomes more pronounced.',
        },
        {
          question: 'My mother has dementia and has to go into hospital — how can we help?',
          answer:
            'Hospital stays are especially difficult for people with dementia: unfamiliar surroundings, missing routines, many unknown faces. A constant companion markedly reduces anxiety, attempts to leave the bed and the risk of falling. If the family cannot be there continuously, we take that on — we know how to work with dementia and coordinate closely with the hospital staff. That includes helping with food, which with dementia is so often “forgotten”.',
        },
        {
          question: 'How quickly can you come?',
          answer:
            'For planned stays (an operation, rehabilitation) a few days of notice is best. In acute situations (the emergency department, a sudden need) we try to arrange a first period of company within 24 hours — depending on the day and the time, sometimes sooner. Call us and we will discuss what is possible.',
        },
        {
          question: 'Is a hospital allowed to admit a private companion at all?',
          answer:
            'Yes. Relatives, and companions engaged by relatives, have access to the patient as a matter of course. We of course report to admissions and to the nursing staff and agree our hours of presence. Most Berlin hospitals know the arrangement and cooperate well. In shared rooms we discuss consideration for the other patients.',
        },
        {
          question: 'Can you take on just a single night?',
          answer:
            'Yes. Many of our assignments are exactly that: one, two or three nights straight after an operation, when the risk of a fall or of confusion is highest. We provide longer company over several weeks just as readily.',
        },
        {
          question: 'Which hospitals do you work in?',
          answer:
            'We accompany patients in every Berlin hospital — Charité, Helios, Vivantes, DRK, Park-Klinik Weissensee, St. Joseph, Schlosspark-Klinik, St. Gertrauden and all the others. The focus of our area is the west of Berlin (Zehlendorf, Grunewald, Charlottenburg, Wilmersdorf, Dahlem, Schmargendorf, Westend), but we also work in Mitte, Moabit, Tiergarten and the surrounding area.',
        },
        {
          question: 'Who actually carries out the work — trainees or experienced staff?',
          answer:
            'Experienced nurses with the relevant qualification. Company in hospital is demanding: powers of observation, a calm manner, the ability to deal with confusion and with relatives, and the professional judgement to pass observations on to hospital staff. These assignments are taken on here only by staff with the relevant experience.',
        },
        {
          question: 'What if my mother does not take to your carer?',
          answer:
            'As a rule we become a familiar face within a short time — most patients settle after the first hour. If in an individual case it does not fit, we change the member of staff. Personal chemistry matters a great deal in these situations.',
        },
        {
          question: 'How do we book this?',
          answer:
            'A first telephone call is enough. We establish the situation (a planned operation, acute, ongoing), what is needed (dementia, risk of falling, general insecurity), the extent (day, night, continuous) and the hospital. Within 24 hours you receive a specific proposal.',
        },
      ],
      cta: { text: 'Request a first talk', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Bedside Companions Berlin',
          href: '/leistungen/sitzwachen-berlin',
          note: 'the closest relation — also at home and in the hospice',
        },
        {
          label: 'Company in hospital (background)',
          href: '/themen/krankenhaus-begleitung',
          note: 'when company makes sense, and who needs it',
        },
        {
          label: 'Dementia companionship',
          href: '/themen/demenz-begleitung',
          note: 'background on accompanying people with dementia',
        },
      ],
    },
  },
};
