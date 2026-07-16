import { Reveal } from './Reveal';

const CARD_DELAYS: (1 | 2 | 3 | 4 | 5 | 6)[] = [1, 2, 3, 4, 4];

const POINTS = [
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
];

export function QualitaetSection() {
  return (
    <section id="qualitaet" className="bg-anthracite text-cream py-24 px-6 md:px-12 scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold">Qualität & Sicherheit</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light">
            Worauf Sie sich <em className="text-gold not-italic font-medium">verlassen können.</em>
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/85">
            Gute Pflege beginnt bei der Frage, wer zu Ihnen ins Haus kommt — und unter welchen Bedingungen. Das regeln wir sauber, nachprüfbar und ohne Grauzonen.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={CARD_DELAYS[i]}>
              <div className="h-full bg-anthracite p-8">
                <div className="font-serif text-lg text-gold">{p.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/80">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
