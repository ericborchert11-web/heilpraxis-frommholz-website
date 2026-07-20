import Link from 'next/link';
import { Reveal } from './Reveal';
import type { Locale } from '@/lib/i18n/config';

const BAUSTEINE = [
  {
    title: 'Dienstpläne',
    text: 'Wer kommt wann? Der aktuelle Dienstplan Ihrer/Ihres Angehörigen — jederzeit einsehbar, immer aktuell.',
  },
  {
    title: 'Rechnungen',
    text: 'Alle Rechnungen übersichtlich an einem Ort, transparent aufgeschlüsselt und jederzeit abrufbar.',
  },
  {
    title: 'Dokumentation',
    text: 'Was ist passiert? Die Pflegedokumentation — nachvollziehbar für berechtigte Angehörige, nah am Alltag Ihrer/Ihres Liebsten.',
  },
];

export function FamilienbereichSection({ lang }: { lang: Locale }) {
  // lang wird ab Aufgabe 12 für die Übersetzung gebraucht.
  void lang;
  return (
    <section id="familienbereich" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-32">
      <Reveal>
        <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">Für Angehörige</span>
      </Reveal>
      <Reveal delay={1} as="h2">
        <span className="block mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-anthracite">
          Ihr Familienbereich — <em className="text-gold-deep not-italic font-medium">immer im Bild,</em> ohne nachfragen zu müssen.
        </span>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-anthracite-soft">
          Pflege betrifft die ganze Familie. In Ihrem geschützten Familienbereich sehen Sie jederzeit, wer wann da ist, was abgerechnet wird und was dokumentiert wurde — an einem Ort, für alle unsere Klient:innen inklusive.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
        {BAUSTEINE.map((b, i) => (
          <Reveal key={b.title} delay={(i + 1) as 1 | 2 | 3}>
            <div className="h-full bg-cream p-8">
              <div className="font-serif text-lg text-gold-deep">{b.title}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-anthracite-soft">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={3}>
        <p className="mt-8 text-[13px] leading-relaxed text-anthracite-light">
          Geschützter, verschlüsselter Zugang — nur für berechtigte Angehörige. Wir richten ihn individuell für Ihre Familie ein.
        </p>
      </Reveal>

      <Reveal delay={4}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/familienbereich"
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            Mehr erfahren →
          </Link>
          <Link
            href="/#kontakt"
            className="inline-block border border-anthracite text-anthracite px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors"
          >
            Im Erstgespräch einrichten
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
