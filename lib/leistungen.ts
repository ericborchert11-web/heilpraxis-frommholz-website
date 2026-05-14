export type IconKey = 'clock' | 'home' | 'rotate' | 'travel' | 'document' | 'people';

export type LeistungSlug =
  | '24h-betreuung'
  | 'alltagsbegleitung'
  | 'verhinderungspflege'
  | 'reisebegleitung'
  | 'pflegeberatung'
  | 'inklusionsberatung';

export type Leistung = {
  slug: LeistungSlug;
  numeral: string;
  title: string;
  iconKey: IconKey;
  card: { lead: string };
  detail: {
    hero: { h1: string; lead: string };
    wasWirTun: string[];
    fuerWen: string[];
    ablauf: { step: string; text: string }[];
    faq: { q: string; a: string }[];
  };
};

const emptyDetail: Leistung['detail'] = {
  hero: { h1: '', lead: '' },
  wasWirTun: [],
  fuerWen: [],
  ablauf: [],
  faq: [],
};

export const LEISTUNGEN: readonly Leistung[] = [
  {
    slug: '24h-betreuung',
    numeral: 'I.',
    title: '24-Stunden-Betreuung',
    iconKey: 'clock',
    card: {
      lead: 'Durchgehende Pflege und Begleitung im eigenen Zuhause, im Wechselschicht-Modell. Mit festem, kleinem Team — damit Vertrauen wachsen kann.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'alltagsbegleitung',
    numeral: 'II.',
    title: 'Alltagsbegleitung',
    iconKey: 'home',
    card: {
      lead: 'Stundenweise Hilfe im Alltag — Einkäufe, Arztbesuche, Spaziergänge, Gesellschaft. Flexibel buchbar, von einer Stunde bis zum ganzen Tag.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'verhinderungspflege',
    numeral: 'III.',
    title: 'Verhinderungspflege',
    iconKey: 'rotate',
    card: {
      lead: 'Wenn pflegende Angehörige eine Auszeit brauchen — Urlaub, Krankheit, oder einfach einmal durchatmen. Wir übernehmen verlässlich.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'reisebegleitung',
    numeral: 'IV.',
    title: 'Reisebegleitung',
    iconKey: 'travel',
    card: {
      lead: 'Begleitete Reisen für pflegebedürftige Menschen — Kur, Familienbesuch, Urlaub. In Kooperation mit unserem Partnerverein „Leben & Pflegen & Reisen".',
    },
    detail: emptyDetail,
  },
  {
    slug: 'pflegeberatung',
    numeral: 'V.',
    title: 'Pflegeberatung',
    iconKey: 'document',
    card: {
      lead: 'Unabhängige Beratung zu Pflegegraden, Leistungsansprüchen und Finanzierung. Wir helfen, sich im System zurechtzufinden — verständlich, in Ruhe.',
    },
    detail: emptyDetail,
  },
  {
    slug: 'inklusionsberatung',
    numeral: 'VI.',
    title: 'Inklusionsberatung',
    iconKey: 'people',
    card: {
      lead: 'Aus jahrelanger Erfahrung in der gemeinnützigen Krankenpflege Frommholz: Beratung zu Teilhabe, Hilfsmitteln, persönlicher Assistenz — für Menschen mit Behinderung und ihre Familien.',
    },
    detail: emptyDetail,
  },
] as const;

export function hasDetailPage(leistung: Leistung): boolean {
  return leistung.detail.hero.h1.length > 0;
}
