import Link from 'next/link';
import { Reveal } from './Reveal';
import type { Locale } from '@/lib/i18n/config';

const STEPS = [
  {
    num: 'I',
    title: 'Kennenlernen',
    text: 'Ein erstes Gespräch — telefonisch oder bei Ihnen zu Hause. Wir hören zu und klären, was wirklich gebraucht wird.',
  },
  {
    num: 'II',
    title: 'Planung',
    text: 'Gemeinsam mit Ihnen erstellen wir ein passgenaues Pflege- und Begleitkonzept — flexibel, jederzeit anpassbar.',
  },
  {
    num: 'III',
    title: 'Begleitung',
    text: 'Ein kleines, festes Team begleitet Sie. Mit regelmäßigem Austausch und einer Person, die immer ansprechbar ist.',
  },
];

export function AblaufSection({ lang }: { lang: Locale }) {
  // lang wird ab Aufgabe 12 für die Übersetzung gebraucht.
  void lang;
  return (
    <section id="ablauf" className="bg-cream-deep py-24 px-6 md:px-12 scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">So läuft es ab</span>
        </Reveal>
        <Reveal delay={1} as="h2">
          <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
            Drei Schritte, <em className="text-gold-deep not-italic font-medium">keine Eile.</em>
          </span>
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {STEPS.map((s, i) => (
          <Reveal key={s.num} delay={((i + 1) as 1 | 2 | 3)}>
            <div className="text-center">
              <div className="font-serif text-6xl font-light text-gold-deep tracking-wide">{s.num}</div>
              <h3 className="mt-4 font-serif text-2xl font-medium text-anthracite">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-[14px] text-anthracite-light text-center max-w-2xl mx-auto">
        Und danach bleiben Sie im Bild:{' '}
        <Link href="/familienbereich" className="text-gold-deep underline hover:text-gold">
          Ihr Familienbereich für Angehörige →
        </Link>
      </p>
    </section>
  );
}
