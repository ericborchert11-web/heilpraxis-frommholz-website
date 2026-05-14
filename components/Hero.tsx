import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center px-6 md:px-12 py-20 lg:py-28 min-h-[80vh]">
      <div>
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">
            Pflege & Beratung in ganz Berlin
          </span>
        </Reveal>
        <Reveal delay={1} as="h1">
          <span className="block font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-light text-anthracite mt-5">
            Pflege, die <em className="text-gold-deep not-italic font-medium">zuhört.</em>
            <br />
            Beratung, die trägt.
          </span>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 font-serif text-[clamp(1.15rem,1.8vw,1.45rem)] leading-relaxed text-anthracite-light italic">
            Wir sind nah am Menschen — mit Erfahrung aus über zwei Jahrzehnten Pflege, Beratung und Begleitung in Berlin.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft max-w-xl">
            Stundenweise Alltagsbegleitung, 24-Stunden-Schichtbetreuung, Pflege- und Inklusionsberatung: Wir bringen Ruhe und Fachlichkeit dorthin, wo Menschen sie brauchen — zu Hause, im vertrauten Umfeld, bei Ihnen.
          </p>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#kontakt" className="bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors">
              Erstgespräch anfragen
            </a>
            <a href="#leistungen" className="border border-anthracite text-anthracite px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors">
              Unsere Leistungen
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={2} className="relative">
        <div className="aspect-[4/5] bg-cream-deep border border-gold/30 relative overflow-hidden">
          <div className="absolute inset-4 border border-gold/40 flex items-center justify-center text-center p-8">
            <p className="font-sans text-sm text-warm-gray italic leading-relaxed">
              Hier kommt später ein echtes Foto<br />
              — Begegnung, Wärme, Berliner Lichtsituation —<br />
              <span className="text-xs text-warm-gray-light">Platzhalter</span>
            </p>
          </div>
        </div>
        <div className="mt-6 pl-6 border-l-2 border-gold">
          <p className="font-serif text-lg italic text-anthracite-light leading-relaxed">
            Wir sehen den Menschen. Nicht den Pflegegrad.
          </p>
          <span className="block mt-2 font-sans text-[11px] uppercase tracking-[2px] text-gold-deep">
            — Unser Versprechen
          </span>
        </div>
      </Reveal>
    </section>
  );
}
