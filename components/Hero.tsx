import Image from 'next/image';
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
            Wir sind nah am Menschen — mit über 15 Jahren Erfahrung in Pflege, Beratung und Begleitung in Berlin.
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
        <div className="aspect-[3/2] bg-cream-deep border border-gold/30 relative overflow-hidden">
          <Image
            src="/hero-team.jpg"
            alt="Das Team der Heilpraxis Frommholz mit einem Klienten in der häuslichen und stationären Begleitung"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
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
