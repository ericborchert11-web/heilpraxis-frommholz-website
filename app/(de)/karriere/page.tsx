import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { BUSINESS, pageMeta } from '@/lib/site-config';
import { KARRIERE } from '@/lib/karriere';

export const metadata: Metadata = {
  title: 'Karriere — Pflegejobs Berlin',
  description: 'Pflegejob bei Heilpraxis Frommholz: ohne klassischen Schichtdienst, mit Zeit pro Klient*in, korrekt nach Arbeitsrecht. Auch für Rentner*innen und Quereinsteiger*innen.',
  ...pageMeta('/karriere'),
  robots: { index: true, follow: true },
};

export default function KarriereHubPage() {
  return (
    <PageLayout
      title="Pflegejob bei Heilpraxis Frommholz — anders als der Rest"
      lead="Wir wissen, was Pflegekräfte im Standard-System erleben: Zeitdruck, Schichtdienst-Belastung, körperliche Erschöpfung, das Gefühl, der Arbeit nicht gerecht zu werden. Viele unserer Mitarbeitenden sind aus genau diesen Strukturen zu uns gekommen."
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Karriere', href: '/karriere' },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Was uns von anderen Pflege-Arbeitgebern unterscheidet</h2>
        <dl className="mt-4 space-y-4 text-[15px] leading-relaxed text-anthracite-soft">
          <div>
            <dt className="inline font-medium text-anthracite">Kein klassischer Schichtdienst:</dt>{' '}
            <dd className="inline">Wir arbeiten nicht in 3-Schicht-Rotation mit ständig wechselnden Diensten. Sie bekommen feste Arbeitszeiten, planbare Wochen.</dd>
          </div>
          <div>
            <dt className="inline font-medium text-anthracite">1:1-Betreuung statt Akkord:</dt>{' '}
            <dd className="inline">Sie versorgen pro Schicht eine Person — nicht 10. Sie haben Zeit, Sie haben Ruhe.</dd>
          </div>
          <div>
            <dt className="inline font-medium text-anthracite">Faire Bezahlung:</dt>{' '}
            <dd className="inline">Stundenlöhne deutlich über dem Branchendurchschnitt. Zuschläge nach § 3b EStG (Nacht 25 %, Sonn-/Feiertag 50 %) werden voll ausgezahlt.</dd>
          </div>
          <div>
            <dt className="inline font-medium text-anthracite">Eigene Kraft selbst eingeteilt:</dt>{' '}
            <dd className="inline">Wer 80 % Stelle will, kriegt 80 %. Wer 50 % will, kriegt 50 %. Wir planen lange voraus, damit Sie planen können.</dd>
          </div>
          <div>
            <dt className="inline font-medium text-anthracite">Selbstzahler-Pflege:</dt>{' '}
            <dd className="inline">Wir rechnen nicht über die Kasse ab — das bedeutet keine Bürokratie, keine Minuten-Dokumentation, keine Akkord-Ziele.</dd>
          </div>
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-anthracite font-light">Wer zu uns passt</h2>
        <ul className="mt-4 list-disc list-outside pl-6 space-y-2">
          <li>Examinierte Pflegekräfte aus Kliniken, die nicht mehr im Schichtdienst arbeiten wollen.</li>
          <li>Pflegehilfskräfte mit Erfahrung, die ihre Arbeit so machen wollen, wie es eigentlich richtig ist.</li>
          <li>Sozialpädagog*innen mit Psychiatrie-Erfahrung.</li>
          <li>Quereinsteiger*innen mit Lebenserfahrung (oft die besten Betreuungskräfte).</li>
          <li>Studierende im pflege- oder sozialpädagogischen Bereich (auf Stundenbasis).</li>
          <li>Rentner*innen mit Pflegehintergrund, die noch sinnvoll tätig sein wollen.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-anthracite font-light">Unsere Stellenkonzepte</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
          {KARRIERE.map((k) => (
            <li key={k.slug}>
              <Link
                href={`/karriere/${k.slug}`}
                className="block p-5 bg-cream border border-gold/20 hover:border-gold/60 transition-colors"
              >
                <h3 className="font-serif text-lg font-medium text-anthracite">{k.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-anthracite-soft">{k.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">Wie Sie sich bewerben</p>
        <p className="mt-2 text-[15px] leading-relaxed text-anthracite-soft">
          Lebenslauf per E-Mail an{' '}
          <a href={`mailto:${BUSINESS.email}`} className="underline hover:text-gold-deep">
            {BUSINESS.email}
          </a>
          . Wir melden uns innerhalb von 5 Werktagen. Vorstellungsgespräch in Moabit (Stephanstraße 46) oder telefonisch.
        </p>
      </section>
    </PageLayout>
  );
}
