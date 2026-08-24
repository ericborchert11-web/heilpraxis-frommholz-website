import type { Overlay } from '../types';
import type { SeoStandort } from '@/lib/standorte';

/**
 * Englische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/en` weiterhin auf Deutsch.
 *
 * `slug`, `plz`, `geo`, `name`, `bezirk` sowie `isHauptstandort`/`hideInFooter`
 * bleiben unverändert — Ortsnamen und Strukturflags werden nicht übersetzt.
 * Jeder `href` in `detail.cta` und `detail.relatedLinks` ist ein deutscher
 * Referenzpfad und wird erst beim Rendern lokalisiert.
 *
 * Der Detail-Renderer gibt reinen Text aus (kein Markdown). Deutsche Fachbegriffe
 * stehen darum in runden Klammern statt kursiv: "care level (Pflegegrad)".
 */
export const STANDORTE_EN: Overlay<SeoStandort> = {
  // === 1. Moabit (Hauptstandort) ==============================================
  moabit: {
    slug: 'moabit',
    name: 'Moabit',
    bezirk: 'Mitte',
    plz: ['10551', '10553', '10555', '10557', '10559'],
    geo: { lat: 52.5349, lng: 13.3432 },
    hook: 'Our own address, our own neighbourhood.',
    isHauptstandort: true,
    metaTitle: 'Care & One-to-One Support Moabit — Your Neighbourhood',
    metaDescription: 'Nursing care, one-to-one support and 24-hour care in Moabit. Our address is Stephanstraße 46 — few providers know this neighbourhood as well.',
    h1: 'Nursing care and one-to-one support in Moabit — from your neighbourhood, for your neighbourhood',
    primaryKeyword: 'private nursing care Moabit Berlin',
    detail: {
      intro: [
        'Moabit is home. For more than fifteen years we have worked out of Stephanstraße 46 — in the middle of things, between Wedding, Tiergarten and the Hansaviertel. We know the old apartment buildings between Beusselstraße and Turmstraße. We know the quiet of Wittstocker Straße and the noise around Stephanplatz. We know where the ambulances pull in and which stairwells are difficult to get through.',
        'If you need care in Moabit, we are with you in ten minutes.',
      ],
      sections: [
        {
          heading: 'What we offer in Moabit',
          paragraphs: ['Our full range of services — with the advantage that we are right around the corner:'],
          list: [
            'One-to-one care at home — by the hour or around the clock.',
            '24-hour care with a German-speaking team of carers.',
            'Companionship by the hour for older people.',
            'Care advice — usually in your own home.',
            'Overnight care and company in the final phase of life.',
          ],
        },
        {
          heading: 'What makes Moabit Moabit',
          paragraphs: ['Moabit is mixed. The Beusselkiez and the edge of the Hansaviertel, long-standing tenants and new cafés, families and people living alone. Our clients here are as varied as the neighbourhood itself:',],
          list: [
            'Older women in the large pre-war flats around Huttenstraße, Calvinstraße and Bremer Straße who want some help.',
            'Families in the tenement buildings around Stephanstraße and Stromstraße whose parents are visiting.',
            'Residents of sheltered-housing schemes who would like additional private-pay support.',
            'Families who need dependable company for a relative at short notice.',
          ],
        },
      ],
      faq: [
        { question: 'Can you get to an emergency in Moabit particularly quickly?', answer: 'Yes — we are often with you within 5 to 10 minutes, depending on the time of day and the traffic. For urgent care requests from the immediate neighbourhood, we offer the fastest response anywhere in the city.' },
        { question: 'Which care homes in Moabit do you work in?', answer: 'We come into care homes and sheltered-housing schemes as additional support, when a family wants extra one-to-one hours. We discuss the specific facilities at the first meeting.' },
        { question: 'Do all your staff live in Moabit?', answer: 'No — but many live in the centre of the city. That means short journeys and good local knowledge.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler', note: 'the core of what we do' },
        { label: 'Care advice in Berlin', href: '/leistungen/pflegeberatung-berlin', note: 'often the first point of contact' },
        { label: 'Tiergarten', href: '/standorte/tiergarten', note: 'the neighbouring district' },
        { label: 'Frohnau', href: '/standorte/frohnau', note: 'in the north of Berlin' },
      ],
    },
  },

  // === 2. Tiergarten ===========================================================
  tiergarten: {
    slug: 'tiergarten',
    name: 'Tiergarten',
    bezirk: 'Mitte',
    plz: ['10785', '10787', '10557'],
    geo: { lat: 52.514, lng: 13.351 },
    hook: 'Discretion, and a short journey.',
    metaTitle: 'Care & One-to-One Support Tiergarten — Discreet',
    metaDescription: 'Private-pay home care in Tiergarten. Discreet, a short journey from our base in Moabit. Experienced with embassies and diplomatic households.',
    h1: 'Care in Tiergarten — discreet, quick, close at hand',
    primaryKeyword: 'private nursing care Tiergarten Berlin',
    detail: {
      intro: [
        'Tiergarten is more than a park. It is also a residential district: many embassies have their seat here, the Diplomatic Quarter begins here, and the living arrangements are often unusual — large apartments, official residences, buildings with a concierge.',
        'People who need care in Tiergarten often have particular requirements: discretion, languages, an awareness of protocol, availability at short notice. We are set up for that.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Tiergarten',
          list: [
            'Embassy staff with family members who need care.',
            'Diplomatic missions arranging private-pay care for visiting dignitaries.',
            'Residents of the better apartment buildings around the Großer Tiergarten, Lützowplatz and Hofjägerallee.',
            'People whose care at home has to start afresh at short notice.',
            'Older residents of the sheltered-housing schemes on Klingelhöferstraße and nearby.',
          ],
        },
        {
          heading: 'What matters most for care in Tiergarten',
          stronglist: [
            { label: 'Discretion', text: 'Our staff arrive in plain clothes, with no visible care-service branding. Appointments are not discussed loudly over the telephone. Where needed, we sign additional confidentiality agreements.' },
            { label: 'Languages', text: 'Depending on what is required, we assign carers with good English, French or Spanish.' },
            { label: 'Short notice', text: 'Diplomatic life is planned late. We are set up to start within 24 hours if we have to.' },
            { label: 'Concierge etiquette', text: 'We know how to announce ourselves in buildings with a concierge or security staff, and how to maintain the impression our clients want to keep there.' },
          ],
        },
      ],
      faq: [
        { question: 'Do your staff speak English or other languages?', answer: 'Yes — the team includes carers with fluent business English, and several with French or Spanish. If you have a specific language requirement, we settle it before any contract begins.' },
        { question: 'How secure is confidentiality with diplomatic clients?', answer: 'A carer’s duty of confidentiality is set out in law and written into the contract. For particularly sensitive clients we sign additional confidentiality agreements on top of that.' },
        { question: 'Can you also work in a hotel, if the person needing care is staying there?', answer: 'Yes — this comes up regularly (relatives visiting Berlin who have booked a hotel in Tiergarten). We coordinate with the hotel.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Travel companionship for older people', href: '/leistungen/reisebegleitung-senioren', note: 'often relevant for diplomatic clients travelling home' },
        { label: 'Moabit', href: '/standorte/moabit', note: 'our own base, immediately adjacent' },
      ],
    },
  },

  // === 3. Berlin-Mitte =========================================================
  mitte: {
    slug: 'mitte',
    name: 'Berlin-Mitte',
    bezirk: 'Mitte',
    plz: ['10117', '10115', '10119', '10178', '10179'],
    geo: { lat: 52.52, lng: 13.408 },
    hook: 'Discreet care between the Spreebogen and the Hackescher Markt.',
    metaTitle: 'Home Care Berlin-Mitte — Discreet and Dependable',
    metaDescription: 'Nursing care, one-to-one support and accompaniment in Berlin-Mitte. Private care at home, by the hour or around the clock.',
    h1: 'Care and one-to-one support in Berlin-Mitte — quick to arrive',
    primaryKeyword: 'private nursing care Berlin Mitte',
    detail: {
      intro: [
        'Berlin-Mitte is government, tourism — and a residential district. Long-standing tenants between the Hackescher Markt and Friedrichstraße, newer residents in the buildings at the Spreebogen, older people in the quiet side streets around the Oranienburger and the Große Hamburger Straße.',
        'From our base on Stephanstraße we are in Mitte within minutes. That makes us quick there — including when care has to start at short notice.',
      ],
      sections: [
        {
          heading: 'What we often do in Berlin-Mitte',
          stronglist: [
            { label: 'One-to-one care at home', text: 'Undivided attention in your own flat — for dementia, while recovering from an operation, in the final phase of life.' },
            { label: 'Overnight care in inner-city flats', text: 'In large old flats with long corridors, falling at night is a real risk. We are there when someone gets up.' },
            { label: 'When care at home is starting afresh', text: 'When the situation changes suddenly, families need a bridge. We take on the first days and weeks at home, often on 12- or 24-hour models.' },
            { label: 'Care advice in Mitte flats', text: 'We come to you and talk things through with the family and the GP.' },
          ],
        },
        {
          heading: 'Journey times from Moabit',
          paragraphs: [
            'By car along Invalidenstraße into Mitte: about 7 minutes. To the residential areas between Friedrichstraße and Alexanderplatz: 10 to 15 minutes.',
          ],
        },
      ],
      faq: [
        { question: 'How quickly can you be in Mitte?', answer: 'Usually within 10 to 15 minutes. For a first assignment we need two or three days’ notice; in acute situations we try to manage it within 24 hours.' },
        { question: 'Can we arrange care in advance of a planned procedure?', answer: 'We strongly recommend it. For scheduled procedures we reserve the carer for the days immediately afterwards — exactly the period with the highest risk of confusion and falls.' },
        { question: 'Do you also work in the new flats on the Spreebogen?', answer: 'Yes. Concierge, underground parking, lifts — that is everyday work for us. We agree access and hours with you in advance and arrive discreetly.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Moabit', href: '/standorte/moabit', note: 'immediately adjacent' },
      ],
    },
  },

  // === 4. Hansaviertel =========================================================
  hansaviertel: {
    slug: 'hansaviertel',
    name: 'Hansaviertel',
    bezirk: 'Mitte',
    plz: ['10557'],
    geo: { lat: 52.518, lng: 13.343 },
    hook: 'Quiet presence in the architects’ quarter.',
    metaTitle: 'Home Care Hansaviertel — In the Green Centre',
    metaDescription: 'Nursing care, one-to-one support and accompaniment in the Hansaviertel. Quiet presence for older residents of its landmark apartment buildings.',
    h1: 'Care in the Hansaviertel — in the quiet quarter between Tiergarten and the Spree',
    primaryKeyword: 'private home care Hansaviertel Berlin',
    detail: {
      intro: [
        'The Hansaviertel is one of Berlin’s singular quarters. Built in 1957 for the Interbau international building exhibition, with work by Niemeyer, Aalto, Gropius and Eiermann — a candidate for UNESCO World Heritage status. But it is also an ordinary residential district with one particularity: many of the original residents have grown old here. The flats often have small floor plans, and the residents often live alone.',
        'We come to the Hansaviertel because we know the quarter. From Bahnhof Bellevue, from Altonaer Straße, from Klopstockstraße — all of it is ten minutes from our base in Moabit.',
      ],
      sections: [
        {
          heading: 'Who comes to us in the Hansaviertel',
          list: [
            'Original residents of the Interbau flats, now very elderly and often living alone.',
            'People needing care in the flats of the Caritas housing scheme on Händelallee.',
            'Older residents with an interest in art and culture, who moved here to be within reach of cultural Berlin.',
            'Widows and widowers who want to stay in the flat they know but need some help.',
          ],
        },
        {
          heading: 'What is most often needed in the Hansaviertel',
          stronglist: [
            { label: 'Companionship by the hour', text: 'for older people living alone — not every day, but regularly. Two or three hours: a walk through the Tiergarten together, lunch together, reading aloud from a book.' },
            { label: 'Weekend cover', text: 'When there is a cleaner during the week and volunteer visitors, but the weekend is empty — we step in.' },
            { label: 'Overnight care where there is anxiety', text: 'In small flats where getting up to the bathroom at night brings a fear of falling.' },
            { label: 'Accompaniment to cultural events', text: 'Some clients still want to go to a concert, to the theatre, to an exhibition — with an experienced companion, that remains possible.' },
          ],
        },
      ],
      faq: [
        { question: 'My father lives alone in the Hansaviertel and refuses to move into a home. What is possible?', answer: 'A good deal. Two or three hours of companionship a day, plus overnight care two or three nights a week, is often enough to make a small flat safe. At the first meeting we work out what makes sense.' },
        { question: 'Are the flats in the Hansaviertel suitable for care?', answer: 'Mostly not — they are small, often with narrow doorways. Even so, care at home is possible here in most cases, usually with small structural adaptations, some of which are paid for by the statutory long-term care insurance (Pflegekasse).' },
        { question: 'Can you come just once a week?', answer: 'Yes — we accept a minimum of two to three hours a week where the arrangement is a long-term one.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Overnight care in Berlin', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Care advice', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === 5. Charlottenburg =======================================================
  charlottenburg: {
    slug: 'charlottenburg',
    name: 'Charlottenburg',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['10585', '10587', '10589', '10623', '10625', '10627', '10629'],
    geo: { lat: 52.516, lng: 13.302 },
    hook: 'Discerning private-pay clients between the Schloss and the Kudamm.',
    metaTitle: 'Home Care Charlottenburg — Private-Pay, Discreet',
    metaDescription: 'Nursing care and one-to-one support in Charlottenburg. An experienced team, close at hand — from the Schlosspark to the Kurfürstendamm.',
    h1: 'Home care in Charlottenburg — for discerning private-pay clients',
    primaryKeyword: 'private nursing care Charlottenburg Berlin',
    detail: {
      intro: [
        'Charlottenburg is large. From the Schlosspark in the north to the Kurfürstendamm in the south, from the Spree in the east to the Lietzensee in the west — tens of thousands of flats, many of them pre-war, and a considerable number of them fine to exceptional. People who live here and need care usually have a clear idea of what that care should look like.',
        'We have been working in Charlottenburg for more than fifteen years. We know our clients around Olivaer Platz, in the flats by the Lietzensee, in the buildings between Bismarckstraße and Kantstraße.',
      ],
      sections: [
        {
          heading: 'What defines care in Charlottenburg',
          stronglist: [
            { label: 'Discerning, but never intrusive', text: 'Our clients in Charlottenburg are often cultivated, academically minded, with a clear sense of style and discretion. We assign staff whose manner and language suit these homes.' },
            { label: 'Continuity', text: 'Charlottenburg is where our long-standing clients are. Many families work with us for years, sometimes across generations. The regular team knows the family, knows their preferences, knows the flat.' },
            { label: 'A private matter', text: 'We arrive without visible branding, usually in our own cars, and leave no conspicuous trace in the stairwell.' },
          ],
        },
        {
          heading: 'Journey from Moabit',
          paragraphs: ['From Stephanstraße via Otto-Suhr-Allee to Schloss Charlottenburg in 10 to 12 minutes. To the Kurfürstendamm, 15 to 20 minutes depending on the time of day.'],
        },
      ],
      faq: [
        { question: 'Will you come to older buildings with no lift?', answer: 'Yes. Our staff are willing to climb three or four flights where necessary. For people who can no longer manage stairs themselves, we look at whether structural changes make sense (a stairlift, for example).' },
        { question: 'We employ a care assistant from abroad — could she be taken on by you?', answer: 'Taking someone on is possible if she was properly employed by you under employment law. Where the arrangement sits in a grey area (self-employed, or posted from abroad), taking her on is not possible — but we can fill the gap in care with our own staff.' },
        { question: 'Can you also work in the exclusive sheltered-housing schemes on the Kurfürstendamm?', answer: 'Yes. We have worked with most of them already. We do not take over the in-house care — but additional one-to-one hours, overnight care and individual companionship are exactly what we do.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'immediately adjacent' },
        { label: 'Westend', href: '/standorte/westend' },
      ],
    },
  },

  // === 6. Wilmersdorf ==========================================================
  wilmersdorf: {
    slug: 'wilmersdorf',
    name: 'Wilmersdorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['10707', '10709', '10711', '10713', '10715', '10717', '10719', '10779', '10789'],
    geo: { lat: 52.487, lng: 13.314 },
    hook: 'Books, high ceilings, continuity.',
    metaTitle: 'Home Care Wilmersdorf — Discreet and Exclusive',
    metaDescription: 'Private-pay care in Wilmersdorf. Discreet, with a settled team — for the pre-war flats around Olivaer Platz and Ludwigkirchplatz.',
    h1: 'Care in Wilmersdorf — in a quarter of old flats and old learning',
    primaryKeyword: 'private home care Wilmersdorf Berlin',
    detail: {
      intro: [
        'Wilmersdorf is a district with a character of its own. The grand late-nineteenth-century buildings between Olivaer Platz, the Bayerisches Viertel, the Volkspark and Ludwigkirchplatz have housed Berlin’s educated middle class for generations — lawyers, doctors, professors, art historians. Those residents are growing old, often very old. And they usually want to stay in their flats.',
        'We have been providing care in Wilmersdorf for years. We know what these flats look like — high ceilings, dark furniture, libraries full of books, a patina that tells a story. And we know what care in such a flat should look like: respectful, quiet, and careful not to damage the character of the place.',
      ],
      sections: [
        {
          heading: 'What we do particularly well in Wilmersdorf',
          stronglist: [
            { label: 'Companionship for academics living alone', text: 'Often without children, often with siblings, nephews or nieces far away. Someone alone in a five-room flat in Wilmersdorf usually needs more than care — they need someone who can hold up their end of a conversation.' },
            { label: 'Round-the-clock care in large flats', text: 'Where there are many rooms, a 24/7 team can be accommodated comfortably without getting in each other’s way. A bedroom for the night shift, quiet rooms for breaks.' },
            { label: 'Discretion towards the other residents', text: 'The community in these buildings is often close-knit. We arrive unobtrusively, avoid drawing attention and protect our clients’ privacy.' },
          ],
        },
      ],
      faq: [
        { question: 'My father is 92 and refuses a care service because he does not want strangers in the flat. What can we do?', answer: 'A common situation. We take it slowly — often with a first visit where no care happens at all, only a conversation. Our staff are experienced at building trust. The resistance usually dissolves within a few visits.' },
        { question: 'Can you accompany a concert-goer to a performance?', answer: 'Yes — in Wilmersdorf this is almost a speciality of ours. Accompaniment to the Berliner Philharmonie, the Deutsche Oper, the concert halls — with staff who are at ease with the music and the etiquette.' },
        { question: 'What does round-the-clock care cost in a six-room pre-war flat?', answer: 'The size of the flat makes no difference to the price — what matters is the qualification required for each shift and whether the night is worked actively or on call. You will get a concrete monthly figure at the first meeting, once we have established what is needed.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf' },
      ],
    },
  },

  // === 7. Westend ==============================================================
  westend: {
    slug: 'westend',
    name: 'Westend',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14050', '14052', '14053', '14055', '14057', '14059'],
    geo: { lat: 52.515, lng: 13.275 },
    hook: 'Villas, large houses, deep roots.',
    metaTitle: 'Home Care Westend — The Quiet Villa Streets',
    metaDescription: 'Care in the Westend, between the Olympiastadion and the Lietzensee. Discreet, to a high standard — for the villas and the larger houses.',
    h1: 'Care in the Westend — in the quiet villa streets',
    primaryKeyword: 'private nursing care Westend Berlin',
    detail: {
      intro: [
        'The Westend is a Berlin of its own. Quiet streets, old villas, gardens, gravel drives, communities that have settled over decades. Families have lived here for generations — alongside newer buyers who want to become part of that. People who grow old here generally want to stay. People who come to need care look for arrangements that suit the dignity of the house.',
        'We are here often. We know Reichsstraße and Akazienallee, Lindenallee and the side streets off Spandauer Damm.',
      ],
      sections: [
        {
          heading: 'Care in Westend houses',
          stronglist: [
            { label: 'Large properties', text: 'Round-the-clock care in a 200-square-metre villa works differently from care in a 60-square-metre flat. Several floors, long distances, often large gardens — all of that has to be thought through in advance.' },
            { label: 'Lives with a great deal in them', text: 'Someone growing old in a Westend house usually has a long life behind them, held in the furniture, the pictures, the books. Our staff are practised at working with such biographies.' },
            { label: 'Household staff and carers together', text: 'Many Westend families have employed housekeepers and gardeners for decades. When we join, we have to fit into those arrangements.' },
            { label: 'Dying well', text: 'Someone who has grown old in a Westend house often wants to die there too. We accompany people through that in these houses — with everything it takes, from palliative care to the last day.' },
          ],
        },
      ],
      faq: [
        { question: 'We have a very large house. Do we need more staff?', answer: 'Not necessarily. One person per shift can look after a large house, provided the person needing care is settled in a manageable part of it. Where someone is very mobile (dementia, a tendency to wander), working with two people can make sense.' },
        { question: 'Can care take place on the terrace or in the garden?', answer: 'In summer, gladly. Our staff are flexible about it.' },
        { question: 'How discreetly do your staff arrive?', answer: 'In their own cars (no care-service branding), in plain clothes, at agreed times. For particularly sensitive clients we agree the approach and parking in advance.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg', note: 'the neighbouring district' },
      ],
    },
  },

  // === 8. Grunewald ============================================================
  grunewald: {
    slug: 'grunewald',
    name: 'Grunewald',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14193', '14195'],
    geo: { lat: 52.485, lng: 13.262 },
    hook: 'The highest discretion, for clients in the public eye.',
    metaTitle: 'Home Care Grunewald — The Highest Discretion',
    metaDescription: 'Private home care in Grunewald. Absolute discretion, a small settled team, experience with clients who live in the public eye.',
    h1: 'Home care in Grunewald — with the highest discretion',
    primaryKeyword: 'private nursing care Grunewald Berlin',
    detail: {
      intro: [
        'The people who live in Grunewald do not wish to appear in the newspaper. Residents whose names you know — or deliberately do not. Houses set behind walls, hedges and security systems. And underneath all of it: needs for care that are as human as anywhere else, but with particular demands on discretion.',
        'Someone looking for care in Grunewald is not looking for the nearest available provider. They are looking for a team that understands what confidentiality actually means. We have worked for years with clients from business, politics, academia and the arts.',
      ],
      sections: [
        {
          heading: 'What sets care in Grunewald apart',
          stronglist: [
            { label: 'Confidentiality is the basis of the work', text: 'We work with extended confidentiality agreements, which our staff sign. We do not pass on the identity of a client even to colleagues within our own team who have no reason to know.' },
            { label: 'Presence without a footprint', text: 'We arrive in our own cars and park as the client instructs (often nearby rather than directly outside the house). We leave without the neighbours knowing that anyone is being cared for.' },
            { label: 'A small, settled team', text: 'For clients with high confidentiality requirements we work with three or four selected regular staff — no rotating pool of carers, no trainees.' },
            { label: 'Experience with security staff', text: 'Some houses have security services, concierges or guards. Our staff know how to announce themselves and how to conduct themselves.' },
            { label: 'Willingness to put things in writing', text: 'Non-disclosure agreements, detailed data-protection arrangements — in Grunewald these are more often standard than elsewhere.' },
          ],
        },
      ],
      faq: [
        { question: 'Can you guarantee absolute confidentiality?', answer: 'A carer’s duty of confidentiality is set out in law — any breach is a criminal offence. For particularly sensitive clients we add written confidentiality agreements with contractual penalties. Even so: nobody can promise 100 per cent, because people are people. We do everything that can be done.' },
        { question: 'Can your staff provide background checks?', answer: 'All our staff have produced an enhanced criminal-record certificate (no more than three months old). Where there are particular requirements, staff undergo additional background checks.' },
        { question: 'Will you conclude contracts through solicitors?', answer: 'Yes — many clients in Grunewald have the contract handled by their law firm. That is no difficulty for us.' },
        { question: 'Can payment be arranged through an escrow account?', answer: 'We accept the usual payment methods (bank transfer and, where appropriate, SEPA direct debit). For more complex payment arrangements we agree the terms individually.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Westend', href: '/standorte/westend' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf', note: 'immediately adjacent' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'neighbouring' },
      ],
    },
  },

  // === 9. Zehlendorf ===========================================================
  zehlendorf: {
    slug: 'zehlendorf',
    name: 'Zehlendorf',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14163', '14165', '14167', '14169'],
    geo: { lat: 52.432, lng: 13.255 },
    hook: 'Quiet family streets, houses, gardens.',
    metaTitle: 'Home Care Zehlendorf — Family Care in the Green',
    metaDescription: 'Home care and one-to-one support in Zehlendorf. An experienced team that knows the quiet streets from Mexikoplatz to the Krumme Lanke.',
    h1: 'Home care in Zehlendorf — family care in green surroundings',
    primaryKeyword: 'private home care Zehlendorf Berlin',
    detail: {
      intro: [
        'Zehlendorf is family Berlin. Detached houses, terraced houses, large gardens, quiet streets, schools, trees. Families here often live with the generations close together — grandparents in a flat within their daughter’s house, the daughter and son-in-law with the grandchildren in the main part. Or grandparents alone in the large family house after the children have moved out.',
        'We know Zehlendorf. We work from Mexikoplatz, the Krumme Lanke and Onkel-Tom-Straße, from the Schlachtensee to Argentinische Allee.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Zehlendorf',
          stronglist: [
            { label: 'Multi-generation households', text: 'Grandparents live in their own part of the family house. The family helps as much as it can — but at some point that is no longer enough. We add to it without disturbing the family character of the house.' },
            { label: 'Widows and widowers left on their own', text: 'In the large family house, with the children gone — a daughter in Munich, a son in Frankfurt. Who calls in? We do.' },
            { label: 'Parents who have taken in their own parents', text: 'A sudden need for care, often with dementia, and no local network for the person who has moved in. We help build one.' },
            { label: 'Academic families', text: 'Staff of the nearby Freie Universität, foundation employees, researchers from Berlin’s research institutes.' },
          ],
        },
        {
          heading: 'What is distinctive about care in Zehlendorf',
          stronglist: [
            { label: 'Accepting the longer journey', text: 'From Moabit to Zehlendorf is 25 to 35 minutes. We accept that, because continuity matters more to our clients than saving on call-out charges.' },
            { label: 'Getting there by car', text: 'Many Zehlendorf addresses are only really reachable by car. Our staff have a licence and a car.' },
            { label: 'Time in the garden', text: 'Many of our Zehlendorf clients spend their days in the garden. Being with them there is part of the work — from a walk on the terrace to gardening together, for as long as their strength allows.' },
          ],
        },
      ],
      faq: [
        { question: 'We live on Onkel-Tom-Straße. Will you come to the small terraced houses too?', answer: 'Of course. The size of the home makes no difference to us.' },
        { question: 'Can your staff help in the garden?', answer: 'Actual gardening is not our job — there are garden services for that. But taking clients out into the garden, settling them into a deckchair, watching the roses together — all of that is part of our work.' },
        { question: 'We want to bring my mother, who lives in Bavaria, to us in Zehlendorf. How do we organise that?', answer: 'We can help. Travel companionship from Bavaria, care in Zehlendorf once she arrives, and setting up the whole arrangement. A first conversation four to six weeks before the planned move is ideal.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Dahlem', href: '/standorte/dahlem' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'neighbouring' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'neighbouring' },
      ],
    },
  },

  // === 10. Dahlem ==============================================================
  dahlem: {
    slug: 'dahlem',
    name: 'Dahlem',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14195'],
    geo: { lat: 52.456, lng: 13.288 },
    hook: 'Academic in character, shaped by the university.',
    metaTitle: 'Home Care Dahlem — Academic in Character, Discreet',
    metaDescription: 'Private home care in Dahlem. For academics, university families and the better residential streets. Discreet and capable.',
    h1: 'Home care in Dahlem — in the university quarter',
    primaryKeyword: 'private nursing care Dahlem Berlin',
    detail: {
      intro: [
        'Dahlem is academic Berlin. The Freie Universität, the Botanischer Garten, the Max Planck Institute for Human Development, the Max Planck Institute for the History of Science, the John F. Kennedy School. People who live in Dahlem usually belong to one of these institutions or have some connection to it. The area is quiet, full of old trees, and notably well kept — and it is ageing.',
        'Many of the professors who moved to Dahlem in the sixties, seventies and eighties are now at an age where care comes into the picture. We come to them.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Dahlem',
          list: [
            'Emeritus professors of the Freie Universität who have grown old in the houses near the campus.',
            'Families connected to the Max Planck institutes, often with academic backgrounds of their own.',
            'Members of diplomatic families from the nearby consular quarter.',
            'Families whose parents have moved to them in Dahlem from other university towns.',
          ],
        },
        {
          heading: 'What defines care in Dahlem',
          stronglist: [
            { label: 'Intellectual company', text: 'Academics often want, even when they need care, to talk to someone who can follow them. Our staff read, argue and keep up with what is going on — this is not standard care, it is a meeting of minds.' },
            { label: 'Flats full of books', text: 'Dahlem homes are often lined with books. Here people are read to, books are discussed, scholarship is valued as a way of life. Our team knows how to work with that.' },
            { label: 'International clients', text: 'Many Dahlem families have international backgrounds — American, British, French, Dutch. Where needed, we assign English-speaking carers or carers with other relevant languages.' },
            { label: 'Discretion within the university community', text: 'Talk too freely in Dahlem about a colleague’s private life and it will get back to her. Our team understands that.' },
          ],
        },
      ],
      faq: [
        { question: 'Do your staff speak English?', answer: 'Several members of the team speak fluent business English. If you have a specific requirement, we settle it before any contract begins.' },
        { question: 'My father still reads a great deal. Can you assign staff who are comfortable with books?', answer: 'Of course. We take biographical and intellectual background into account when choosing who to assign.' },
        { question: 'What is your experience of dementia in an academic setting?', answer: 'Dementia is dementia — it makes no distinction for an academic background. What does differ is how people meet it: academics often fight the illness for longer and feel particularly wounded by difficulty finding words. We handle that sensitively.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'immediately adjacent' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'neighbouring' },
        { label: 'Support with dementia', href: '/themen/demenz-begleitung' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'just over the city boundary' },
      ],
    },
  },

  // === 11. Schmargendorf =======================================================
  schmargendorf: {
    slug: 'schmargendorf',
    name: 'Schmargendorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14193', '14199'],
    geo: { lat: 52.476, lng: 13.29 },
    hook: 'A comfortable quarter between Wilmersdorf and Grunewald.',
    metaTitle: 'Home Care Schmargendorf — Rooted in the Quarter',
    metaDescription: 'Care in Schmargendorf, the quarter between Wilmersdorf and Grunewald. Discreet, with a working knowledge of the local arrangements.',
    h1: 'Home care in Schmargendorf — in a quiet residential quarter',
    primaryKeyword: 'private home care Schmargendorf Berlin',
    detail: {
      intro: [
        'Schmargendorf lies between Wilmersdorf and Grunewald — geographically and socially. It is not quite as prominent as Grunewald, but comfortable. The flats are often pre-war, some from the 1890s, some from the 1920s. Long-established Berlin families live here, often in the same buildings for two or three generations.',
        'We have looked after clients in Schmargendorf for years — the quarter is one of the areas we work in most.',
      ],
      sections: [
        {
          heading: 'What is typical of Schmargendorf',
          stronglist: [
            { label: 'Family roots', text: 'Many flats have been in the same family for generations. Care here is often also about preserving a family’s way of living.' },
            { label: 'Less public than Grunewald', text: 'Unlike Grunewald, the residents here tend to be business owners, mid-sized-company families and senior professionals — not in the public eye, but comfortably off and clear about what they want.' },
            { label: 'Medium-sized flats', text: 'Three- and four-room flats are typical, rather than the very large family properties of the Westend or Grunewald.' },
          ],
        },
        {
          heading: 'What makes care in Schmargendorf work',
          stronglist: [
            { label: 'Reliability without display', text: 'Our clients here want no performance and no special arrangements — they want dependable, good care from people who respect their history.' },
            { label: 'By the hour rather than all-in', text: 'Compared with Grunewald, round-the-clock arrangements are less common in Schmargendorf. Daytime companionship, overnight care and targeted hourly visits are more usual.' },
            { label: 'Care advice with a sense of proportion', text: 'Families often want to know how to get the most out of a care level (Pflegegrad), what respite care (Verhinderungspflege) can do, and how the coming years can be planned for.' },
          ],
        },
      ],
      faq: [
        { question: 'Can you come for just three or four hours in the afternoon?', answer: 'Yes — in fact that is often exactly what people here want. An afternoon from two until six for a walk, coffee and conversation is a typical arrangement.' },
        { question: 'What does overnight care cost?', answer: 'The hourly rate depends on the qualification required and on whether the night is worked actively (awake throughout) or on call. Night and Sunday supplements under § 3b of the Income Tax Act are included. You will get a firm figure for the shift you have in mind at the first meeting.' },
        { question: 'We want someone who stays with my father long term and does not keep changing. Is that possible?', answer: 'That is precisely our model. We work with small settled teams of two to four people who take turns. The client is not faced with a new face every day.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'immediately adjacent' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'immediately adjacent' },
        { label: 'Overnight care in Berlin', href: '/leistungen/nachtwachen-berlin' },
      ],
    },
  },

  // === 12. Nikolassee ==========================================================
  nikolassee: {
    slug: 'nikolassee',
    name: 'Nikolassee',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14109', '14129', '14163'],
    geo: { lat: 52.434, lng: 13.201 },
    hook: 'The villa colony by the lake.',
    hideInFooter: true,
    metaTitle: 'Home Care Nikolassee — Discreet in the Villa Colony',
    metaDescription: 'Private home care in Nikolassee: care, one-to-one support and 24-hour care for the villa colony by the Schlachtensee and Nikolassee.',
    h1: 'Home care in Nikolassee — by the lake, in the villa colony',
    primaryKeyword: 'private nursing care Nikolassee Berlin',
    detail: {
      intro: [
        'Nikolassee was laid out from 1901 as a villa colony on the edge of the Grunewald — between the Schlachtensee and the Nikolassee, with large plots, old trees and a quiet that is rare in Berlin. People who own a house here usually bought it decades ago or took it over from their parents. The colony has grown old along with its residents.',
        'That is exactly where the need for care comes from: owners who do not want to leave their house by the lake, and do not have to. We come to them — to the place where they have spent their lives, rather than moving them into an institution.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Nikolassee',
          list: [
            'Older homeowners who have lived in the villa colony for decades and wish to stay.',
            'Couples where one partner comes to need care and the other needs relief.',
            'Adult children who do not live in Berlin themselves and are looking for dependable care for their parents by the lake.',
            'People in the early stages of dementia, for whom familiar surroundings by the water are an anchor.',
          ],
        },
        {
          heading: 'What defines care in Nikolassee',
          stronglist: [
            { label: 'A house, not a flat', text: 'Care here usually takes place in a detached house over several floors. Stairs, the garden, the path down to the lake — we shape the arrangement around the actual house, not around a standard flat.' },
            { label: 'The pull of the lakes', text: 'The daily walk to the Schlachtensee or the Nikolassee is part of life for many people here. We go with them for as long as it is possible — movement in familiar places keeps people steady longer than any programme.' },
            { label: 'Discretion within the colony', text: 'In a small villa colony, everyone knows everyone. Our team keeps a low profile, arrives without a branded car, and respects that neighbourhood here also means visibility.' },
          ],
        },
      ],
      faq: [
        { question: 'Can you go with my father on his daily walk to the Schlachtensee?', answer: 'Yes. Accompanied walks are among the things we do most often here. We adjust the pace and the route to how he is that day, and we are at his side if he is unsteady or at risk of falling.' },
        { question: 'The house has several floors — is that a problem for care?', answer: 'No, but we look at it during the first visit. We can also advise on how daily life might be brought onto one floor, or which aids would make the stairs safer.' },
        { question: 'How quickly can you get here from Moabit in an emergency?', answer: 'For spontaneous urgent calls, the honest figure to plan with is 20 to 30 minutes. That is why we work here with fixed, pre-arranged shifts rather than a minute-by-minute response — so that someone is already there when it matters.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'neighbouring' },
        { label: 'Grunewald', href: '/standorte/grunewald' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },

  // === 13. Wannsee =============================================================
  wannsee: {
    slug: 'wannsee',
    name: 'Wannsee',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14109'],
    geo: { lat: 52.421, lng: 13.163 },
    hook: 'By the water, in peace.',
    hideInFooter: true,
    metaTitle: 'Home Care Wannsee — Care by the Water, Discreet',
    metaDescription: 'Private home care in Wannsee: care, one-to-one support and 24-hour care in the villa and waterside properties by the Großer Wannsee.',
    h1: 'Home care in Wannsee — staying at home by the water',
    primaryKeyword: 'private nursing care Wannsee Berlin',
    detail: {
      intro: [
        'Wannsee is water, woodland and space. Between the Großer Wannsee and the Havel lie generous villas, waterside plots and quiet streets at the far south-western edge of Berlin. People who live here have usually chosen the seclusion deliberately — and do not want to give it up in old age.',
        'For care, that means going to where public transport thins out and the distances grow. Long-settled older residents in the waterside properties are our typical clients here — people who want to stay in their house by the lake for as long as they possibly can.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Wannsee',
          list: [
            'Older villa owners in the waterside and woodland properties who want to be cared for at home.',
            'Couples where care given by one partner is reaching its limits.',
            'Relatives organising things from a distance who need dependable care on the ground.',
            'People with substantial care needs, for whom round-the-clock care at home is the alternative to a care home.',
          ],
        },
        {
          heading: 'What defines care in Wannsee',
          stronglist: [
            { label: 'Secluded settings', text: 'Waterside properties are often at the end of long drives, and some paths lead through the garden down to the shore. Our team plans for those distances and brings what the day requires.' },
            { label: 'Round-the-clock arrangements', text: 'Because of the location and the often higher level of need, continuous care is more common here than elsewhere. We work with small settled teams, so that someone familiar is there at night as well.' },
          ],
        },
      ],
      faq: [
        { question: 'How quickly can you be in Wannsee?', answer: 'For a first assignment we normally need two or three days’ notice. In acute situations we try to manage it within 24 hours — we plan the journey in advance so that we arrive on time.' },
        { question: 'Our house is right on the water with a long drive — will you still come?', answer: 'Yes. We regularly look after addresses in secluded waterside settings. All we need is to know the access and the parking in advance, so that every shift starts smoothly.' },
        { question: 'Is the journey from Moabit even worth it for you?', answer: 'Yes — we cover Wannsee deliberately. With a journey time of 25 to 35 minutes we plan shifts in advance and in sensible blocks; brief 20-minute visits are less practical here than longer, dependable ones.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'neighbouring' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'over the city boundary' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Potsdam', href: '/standorte/potsdam', note: 'across the Havel' },
      ],
    },
  },

  // === 14. Frohnau =============================================================
  frohnau: {
    slug: 'frohnau',
    name: 'Frohnau',
    bezirk: 'Reinickendorf',
    plz: ['13465'],
    geo: { lat: 52.640, lng: 13.291 },
    hook: 'The garden suburb in the north.',
    hideInFooter: true,
    metaTitle: 'Home Care Frohnau — The Northern Garden Suburb',
    metaDescription: 'Private home care in Frohnau: care, one-to-one support and 24-hour care in the garden suburb in northern Berlin. Dependable, despite the distance.',
    h1: 'Home care in Frohnau — in the garden suburb in the north',
    primaryKeyword: 'private home care Frohnau Berlin',
    detail: {
      intro: [
        'Frohnau is Berlin’s northernmost Ortsteil — planned from scratch in 1910 as a garden suburb, with wide streets of detached houses, a great deal of greenery and a pronounced quiet. The houses have often been in the same family for generations, and the owners are retired. People who grow old here almost never want to leave the garden suburb.',
        'To be honest: Frohnau lies at the very edge of the area we cover. From our base in Moabit it is around 25 to 35 minutes via the A111. That is why we deliberately plan longer, fixed shifts here rather than short visits — so that care is dependable and the travelling time does not weigh on every single call.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Frohnau',
          list: [
            'Older homeowners in the streets of detached houses who wish to stay at home.',
            'Retired couples where one partner comes to need care.',
            'Adult children living further away who are organising dependable care for their parents in the north.',
            'People with dementia, for whom the familiar, quiet garden suburb is an important anchor.',
          ],
        },
        {
          heading: 'What defines care in Frohnau',
          stronglist: [
            { label: 'House and garden', text: 'Care here almost always takes place in the family’s own house and garden. Paths, stairs and the outdoors are part of daily life — we shape the arrangement around the house as it actually is.' },
            { label: 'Planning rather than call-outs', text: 'Because of the location out to the north, we work with fixed rotas and small teams. That keeps the days calm and makes sure someone familiar is always there.' },
            { label: 'Home on their own terms', text: 'Our clients in Frohnau are mostly independent people with clear ideas of their own. We support them without taking over, and keep their familiar routines going for as long as possible.' },
          ],
        },
      ],
      faq: [
        { question: 'Frohnau is a long way north — will you still look after us?', answer: 'Yes. We cover Frohnau deliberately, but we plan longer, fixed shifts. That keeps care dependable and economically sensible, even though the journey from Moabit takes around half an hour.' },
        { question: 'Is there a surcharge because of the distance?', answer: 'Depending on the scale of the arrangement, a travel charge may apply for the longer journey. We tell you openly at the first meeting, before any contract exists — there are no hidden costs with us.' },
        { question: 'Can you also provide continuous care in the house?', answer: 'Yes. Out at the edge of the city, longer or continuous shifts are often the most practical solution. We work with small settled teams, so that even with round-the-clock care there is not a constant stream of new faces in the house.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Moabit', href: '/standorte/moabit', note: 'our own base' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Support with dementia', href: '/themen/demenz-begleitung' },
      ],
    },
  },

  // === 15. Kleinmachnow ========================================================
  kleinmachnow: {
    slug: 'kleinmachnow',
    name: 'Kleinmachnow',
    bezirk: 'Potsdam-Mittelmark (Brandenburg)',
    plz: ['14532'],
    geo: { lat: 52.408, lng: 13.225 },
    hook: 'Right on the city boundary.',
    hideInFooter: true,
    metaTitle: 'Home Care Kleinmachnow — Just Over the Boundary',
    metaDescription: 'Private home care in Kleinmachnow: care, one-to-one support and 24-hour care in the municipality on Berlin’s edge. We cross the boundary.',
    h1: 'Home care in Kleinmachnow — just over the boundary in Brandenburg',
    primaryKeyword: 'private nursing care Kleinmachnow',
    detail: {
      intro: [
        'Kleinmachnow is in Brandenburg, in the district of Potsdam-Mittelmark — but it borders directly on Berlin-Zehlendorf. The municipality of some 20,000 people grew considerably after 1990: many villas, detached houses and comfortably off families who value being near Berlin while having more green and more quiet. Some of those arrivals are now of retirement age; others have always lived here.',
        'For us, Kleinmachnow means working beyond the city boundary. Because the municipality adjoins Zehlendorf directly, it is easy to reach from the south-western areas we cover — the border between Berlin and Brandenburg is more a line on the map here than a real distance.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Kleinmachnow',
          list: [
            'Older owners of the many villas and detached houses who want to be cared for at home.',
            'Families who moved here after 1990 and whose parents are now coming to need care.',
            'Couples where care given by one partner needs relieving.',
            'Relatives looking for a private provider with a Berlin connection rather than a purely regional solution.',
          ],
        },
        {
          heading: 'What defines care in Kleinmachnow',
          stronglist: [
            { label: 'Brandenburg, but right on the edge', text: 'Kleinmachnow belongs administratively to Brandenburg but sits door to door with Zehlendorf. For care that means short journeys from our south-western areas — with the quieter, more village-like surroundings still intact.' },
            { label: 'Houses and gardens', text: 'The typical Kleinmachnow address is a detached house with a plot of land. Stairs, the garden and the paths around it are part of daily life; we shape the care around the house as it actually is.' },
            { label: 'Clarity about the journey', text: 'Because we cross the city boundary, we plan shifts ahead and in sensible blocks. That keeps care dependable without the travelling time eating into the visit.' },
          ],
        },
      ],
      faq: [
        { question: 'Do you really cross the city boundary?', answer: 'Yes. Kleinmachnow is part of our regular area. We build the journey into our planning, so the time agreed is the time we spend with you.' },
        { question: 'Kleinmachnow is in Brandenburg — do you actually work there?', answer: 'Yes. We cross the city boundary to Kleinmachnow regularly. Because the municipality borders directly on Zehlendorf, it is easy to reach from the south-western areas we cover.' },
        { question: 'Does crossing the state boundary cost extra?', answer: 'Depending on the scale of the arrangement, a travel charge may apply. We discuss it openly at the first meeting, before you decide — with nothing hidden.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'just over the boundary' },
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Potsdam', href: '/standorte/potsdam' },
        { label: 'Private-pay home care service', href: '/leistungen/pflegedienst-selbstzahler' },
      ],
    },
  },

  // === 16. Potsdam =============================================================
  potsdam: {
    slug: 'potsdam',
    name: 'Potsdam',
    bezirk: 'Landeshauptstadt Brandenburg',
    plz: ['14467', '14469', '14471', '14473', '14476', '14478', '14480', '14482'],
    geo: { lat: 52.399, lng: 13.066 },
    hook: 'The state capital among the lakes.',
    metaTitle: 'Home Care Potsdam — Private Care in the Capital',
    metaDescription: 'Private home care in Potsdam: care, one-to-one support and 24-hour care in Babelsberg, the Berliner Vorstadt and the lakeside streets.',
    h1: 'Home care in Potsdam — in the state capital among the lakes',
    primaryKeyword: 'private nursing care Potsdam',
    hideInFooter: true,
    detail: {
      intro: [
        'Potsdam is the capital of Brandenburg — an independent city of around 180,000 people, with a historic centre, broad lakeside settings and prosperous villa quarters such as Babelsberg and the Berliner Vorstadt. In those quarters by the lakes and in the quiet residential streets live many older and well-off people who do not want to give up their homes when care becomes necessary.',
        'For us, Potsdam is honestly the furthest point of the area we cover: from Moabit it is roughly 35 to 50 minutes via the A115 and the AVUS, depending on traffic. We cover Potsdam deliberately — but with longer, fixed shifts and, depending on the scale, a travel charge discussed openly in advance. The distance is too great for brief visits; for dependable, planned care it works perfectly well.',
      ],
      sections: [
        {
          heading: 'Who comes to us in Potsdam',
          list: [
            'Older owners in the villa quarters of Babelsberg and the Berliner Vorstadt who wish to stay at home.',
            'Residents of the quiet lakeside streets in the west of the city with high expectations of their care.',
            'Relatives looking for a discreet private provider with a Berlin connection.',
            'Couples where care given by one partner is reaching its limits.',
          ],
        },
        {
          heading: 'What defines care in Potsdam',
          stronglist: [
            { label: 'Large, quiet properties', text: 'The typical address in Babelsberg or the Berliner Vorstadt is a generous house with a garden, often near the water or a park. We fit the care to that setting rather than forcing it into a standard pattern.' },
            { label: 'Planning rather than reacting', text: 'Because of the distance from Moabit, we work in Potsdam with fixed rotas and small teams. That makes care dependable and ensures that someone familiar is always there.' },
          ],
        },
      ],
      faq: [
        { question: 'Do you come as far as Potsdam?', answer: 'Yes, Potsdam is part of our area — Babelsberg, the Berliner Vorstadt and the lakeside streets as much as the city centre. We plan for the longer journey; it does not come out of your care time.' },
        { question: 'Potsdam is a fair distance from Berlin — do you really work there?', answer: 'Yes, though honestly it is at the edge of our area. From Moabit it is 35 to 50 minutes. That is why we plan Potsdam with longer, fixed shifts rather than short visits — so that care is dependable and the travelling time is well spent.' },
        { question: 'Is there a travel charge for Potsdam?', answer: 'Depending on the scale of the arrangement, yes. We give you the full terms at the first meeting, before you commit to anything. There are no hidden extras with us.' },
      ],
      cta: { text: 'Request a first conversation', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'across the Havel' },
        { label: 'Round-the-clock care', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },
};
