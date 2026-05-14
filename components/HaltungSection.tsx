import Link from 'next/link';
import { Reveal } from './Reveal';

export function HaltungSection() {
  return (
    <section id="haltung" className="bg-anthracite text-cream py-24 px-6 md:px-12 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
        <div>
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold">Unsere Haltung</span>
          </Reveal>
          <Reveal delay={1} as="h2">
            <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light">
              Pflege ist auch <em className="text-gold not-italic font-medium">eine soziale Aufgabe.</em>
            </span>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-[15px] leading-relaxed text-cream/85">
              Aus der <strong className="text-cream">gemeinnützigen Krankenpflege Frommholz</strong> bringen wir eine Überzeugung mit: Gute Pflege ist nicht nur eine Frage von Fachlichkeit. Sie ist auch eine Frage, wem wir eine Chance geben — als Klient und als Mitarbeiter.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/85">
              Deshalb arbeiten bei uns Menschen, denen das Regelsystem den Wiedereinstieg schwer gemacht hat: Langzeitarbeitslose, Quereinsteigerinnen, FSJler. Wir bilden sie aus, begleiten sie — und merken jeden Tag, wie viel Wärme und Lebenserfahrung sie in die Pflege bringen.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <Link
              href="/soziales-engagement"
              className="inline-block mt-7 font-sans text-[12px] uppercase tracking-[1.5px] text-gold border-b border-gold/30 hover:border-gold pb-1"
            >
              Soziales Engagement →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="bg-anthracite-light border border-gold/30 p-10 text-center">
            <div className="font-serif text-7xl text-gold">7</div>
            <div className="mt-3 font-sans text-[11px] uppercase tracking-[2px] text-cream/80">
              Mitarbeitende aus dem zweiten Arbeitsmarkt
            </div>
            <p className="mt-6 font-serif text-base italic text-cream/85 leading-relaxed">
              „Hier wurde ich nicht als Fall gesehen, sondern als jemand, der etwas beitragen kann."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
