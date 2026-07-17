import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { FaqAccordion } from '@/components/FaqAccordion';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import type { FaqItem } from '@/lib/faq-global';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Familienbereich — geschützter Online-Zugang für Angehörige',
  description:
    'Als Angehörige jederzeit im Bild: Dienstpläne, Rechnungen und Pflegedokumentation im geschützten Familienbereich. Für alle Klient:innen der Heilpraxis Frommholz inklusive.',
  ...pageMeta('/familienbereich'),
  robots: { index: true, follow: true },
};

const FAQ: readonly FaqItem[] = [
  {
    question: 'Wer bekommt Zugang?',
    answer: 'Sie und die Angehörigen, die Sie benennen. Jeder Zugang wird individuell und geschützt eingerichtet.',
  },
  {
    question: 'Was kostet der Familienbereich?',
    answer: 'Nichts extra — er ist für alle unsere Klient:innen inklusive.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'Der Zugang ist geschützt, die Daten werden über eine TLS-verschlüsselte Verbindung übertragen, die Verarbeitung erfolgt nach den Vorgaben der DSGVO, und nur berechtigte Angehörige sehen die Inhalte. Details in unserer Datenschutzerklärung.',
  },
];

export default function FamilienbereichPage() {
  return (
    <PageLayout
      title="Ihr Familienbereich — alles Wichtige an einem geschützten Ort"
      lead="Wenn ein Mensch gepflegt wird, wollen Angehörige wissen, was passiert — auch wenn sie nicht daneben stehen können. Der Familienbereich gibt Ihnen genau das: einen geschützten Online-Zugang zu Dienstplänen, Rechnungen und Dokumentation. Für alle unsere Klient:innen inklusive."
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Familienbereich', href: '/familienbereich' },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Warum ein Familienbereich</h2>
        <p className="mt-3">
          Pflege betrifft nie nur eine Person, sondern die ganze Familie. Gerade wer nicht täglich vor Ort sein kann, möchte trotzdem wissen: Wer ist gerade da? Was wurde gemacht? Was kostet es? Der Familienbereich beantwortet diese Fragen, ohne dass Sie nachtelefonieren müssen — und nimmt Angehörigen ein Stück Sorge ab.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Die drei Bausteine</h2>
        <p className="mt-3">
          <strong className="text-anthracite">Dienstpläne.</strong> Sie sehen, wer wann zu Ihrer/Ihrem Angehörigen kommt — immer aktuell, jederzeit einsehbar.
        </p>
        <p className="mt-3">
          <strong className="text-anthracite">Rechnungen.</strong> Alle Rechnungen an einem Ort, transparent aufgeschlüsselt, mit allen Zuschlägen sichtbar und jederzeit abrufbar.
        </p>
        <p className="mt-3">
          <strong className="text-anthracite">Dokumentation.</strong> Was wurde geleistet und beobachtet? Die Pflegedokumentation ist für berechtigte Angehörige nachvollziehbar — nah am Alltag, ohne Fachchinesisch.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Für alle Klient:innen inklusive</h2>
        <p className="mt-3">
          Der Familienbereich kostet nichts extra. Er gehört zu unserem Verständnis von ehrlicher, transparenter Pflege: Wer uns beauftragt, soll jederzeit sehen können, was passiert — nicht auf Nachfrage, sondern selbstverständlich.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Sicherheit &amp; Datenschutz</h2>
        <p className="mt-3">
          Der Zugang ist geschützt und die Daten werden über eine verschlüsselte (TLS-)Verbindung übertragen. Es sehen ausschließlich die Angehörigen, die Sie berechtigen. Wir verarbeiten die Daten nach den Vorgaben der DSGVO und behandeln die besonders sensiblen Inhalte der Pflegedokumentation mit entsprechender Sorgfalt. Wie wir mit Ihren Daten umgehen, lesen Sie in unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-gold-deep">Datenschutzerklärung</Link>.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Individuell nach Bedarf eingerichtet</h2>
        <p className="mt-3">
          Wir richten den Familienbereich für jede Familie individuell ein und erweitern ihn bei Bedarf — etwa um weitere berechtigte Angehörige oder zusätzliche Inhalte. Was Sie brauchen, setzen wir um.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Häufige Fragen</h2>
        <FaqAccordion items={FAQ} />
      </section>

      <section className="mt-10 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">Zugang im Erstgespräch einrichten</p>
        <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">
          Sie überlegen, ob Betreuung durch uns das Richtige ist? Im kostenlosen Erstgespräch richten wir auf Wunsch gleich Ihren Familienbereich mit ein.
        </p>
        <div className="mt-5">
          <Link
            href="/#kontakt"
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            Erstgespräch anfragen
          </Link>
        </div>
      </section>

      <FaqJsonLd items={FAQ} />
    </PageLayout>
  );
}
