import { SHOW_TESTIMONIALS } from '@/lib/site-config';
import { TestimonialCard, type TestimonialData } from './TestimonialCard';
import { Reveal } from './Reveal';

// PLACEHOLDER — UWG § 5: nie live ohne echte, freigegebene Zitate.
// SHOW_TESTIMONIALS=false hält diesen Block aus dem Output.
const PLACEHOLDER_TESTIMONIALS: TestimonialData[] = [
  {
    quote: 'Nach dem Schlaganfall meiner Mutter wussten wir nicht weiter. Frau Frommholz hat sich Zeit genommen, hat zugehört und einen Plan gemacht, der wirklich zu uns passt — nicht zu einem Standard-Pflegegrad-Schema. Heute haben wir ein festes, kleines Team, das meine Mutter beim Namen kennt. Das gibt uns Ruhe.',
    initial: 'K',
    name: 'Familie K.',
    location: 'Pankow · seit 2025',
  },
  {
    quote: 'Ich hatte lange Angst, fremde Menschen in meine Wohnung zu lassen. Hier kommt nicht jeden Tag jemand anderes, sondern immer dieselben zwei, drei Gesichter. Das ist viel wert. Und mir wurde nie das Gefühl gegeben, dass ich nur ein Auftrag bin.',
    initial: 'H',
    name: 'Frau H., 78 Jahre',
    location: 'Steglitz · seit 2024',
  },
];

export function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <section id="testimonials" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Stimmen</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            Was Menschen über uns <em className="text-gold-deep not-italic font-medium">sagen.</em>
          </span>
        </Reveal>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PLACEHOLDER_TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
