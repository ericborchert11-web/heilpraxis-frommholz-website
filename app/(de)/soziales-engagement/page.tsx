import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Soziales Engagement',
  description: 'Soziales Engagement der Heilpraxis Frommholz: getragen gemeinsam mit unserem Partnerverein Leben Pflegen Reisen e.V. Pflege als soziale Aufgabe — Herkunft, Haltung, Kooperation.',
  ...pageMeta('/soziales-engagement'),
  robots: { index: true, follow: true },
};

export default function SozialesEngagementPage() {
  return (
    <PageLayout
      title="Soziales Engagement — Pflege als soziale Aufgabe"
      lead="Soziale Verantwortung gehört für uns zur Pflege — ein großer Teil davon läuft heute über unseren gemeinnützigen Partnerverein Leben Pflegen Reisen e.V. Hier zeigen wir, woher diese Haltung kommt und wie die Zusammenarbeit aussieht."
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Soziales Engagement', href: '/soziales-engagement' },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">
          Getragen mit dem Partnerverein Leben Pflegen Reisen e.V.
        </h2>
        <p className="mt-3">
          Für{' '}
          <Link href="/leistungen/sitzwachen-berlin" className="underline hover:text-gold-deep">
            Sitzwachen
          </Link>
          ,{' '}
          <Link href="/leistungen/hospiz-sitzwachen" className="underline hover:text-gold-deep">
            Hospiz-Sitzwachen
          </Link>{' '}
          und{' '}
          <Link href="/leistungen/reisebegleitung-senioren" className="underline hover:text-gold-deep">
            Reisebegleitung
          </Link>{' '}
          arbeiten wir eng mit dem gemeinnützigen Verein <strong className="text-anthracite">Leben Pflegen Reisen e.V.</strong> zusammen. Der Verein bringt ein ehrenamtliches Netzwerk und langjährige Erfahrung in der Begleitung pflegebedürftiger Menschen auf Reisen mit — eine Ergänzung zu unseren bezahlten pflegerischen Schichten, die Familien gerade in den letzten Stunden eines Lebens oder auf einer letzten gemeinsamen Reise nicht alleine lässt.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Wer bei uns arbeitet</h2>
        <p className="mt-3">
          Bei uns arbeiten Menschen, denen das Regelsystem den Wiedereinstieg schwer gemacht hat: Langzeitarbeitslose, Quereinsteigerinnen mit Lebenserfahrung, ältere Pflegekräfte, die anderswo aussortiert wurden, Menschen aus dem sogenannten zweiten Arbeitsmarkt. Etliche unserer Mitarbeitenden sind über genau diesen Weg zu uns gekommen.
        </p>
        <p className="mt-3">
          Wir bilden sie aus, begleiten sie, geben ihnen einen Rahmen, in dem sie wachsen können. Und merken jeden Tag, wie viel Wärme, Geduld und Lebenserfahrung sie in die Pflege bringen — Qualitäten, die in standardisierten Stellenprofilen nicht abgefragt werden, in der täglichen Arbeit am Menschen aber den Unterschied machen.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">
          Woher unsere Haltung kommt
        </h2>
        <p className="mt-3">
          Die Heilpraxis Frommholz ist aus der gemeinnützigen Krankenpflege Frommholz hervorgegangen — eine gGmbH, die seit Jahren in Berlin Pflege für Menschen organisiert, die im Regelsystem schwer Platz finden. Diese Erfahrung prägt uns bis heute: in der Auswahl unserer Mitarbeitenden, in der Bereitschaft, schwierige Klient-Konstellationen anzunehmen (siehe{' '}
          <Link href="/leistungen/systemsprenger-betreuung" className="underline hover:text-gold-deep">
            Systemsprenger-Betreuung
          </Link>
          ), in der Haltung gegenüber Inklusionsfragen.
        </p>
        <p className="mt-3">
          Mehr über die gemeinnützige Schwesterorganisation und die Person Simeon Frommholz auf{' '}
          <a
            href="https://simeonfrommholz.de"
            className="underline hover:text-gold-deep"
            target="_blank"
            rel="noopener"
          >
            simeonfrommholz.de
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Ausbildungs- und Praktikumsplätze</h2>
        <p className="mt-3">
          Wir bieten regelmäßig Plätze für FSJler*innen und Quereinsteigerinnen mit Pflegeinteresse an. Insbesondere für Menschen, die nach einer Lebenskrise oder einem Berufswechsel in einen sinnstiftenden Tätigkeitsbereich kommen wollen. Auch das ist Teil dessen, was wir unter sozialem Engagement verstehen: Plätze schaffen, an denen Erfahrung gewinnen und einen Beruf finden möglich ist.
        </p>
        <p className="mt-3">
          Konkrete Stellenkonzepte finden Sie auf der{' '}
          <Link href="/karriere" className="underline hover:text-gold-deep">
            Karriere-Seite
          </Link>{' '}
          — insbesondere{' '}
          <Link href="/karriere/bezahltes-ehrenamt" className="underline hover:text-gold-deep">
            Bezahltes Ehrenamt: Sitzwachen
          </Link>{' '}
          und{' '}
          <Link href="/karriere/in-der-rente-weiterarbeiten" className="underline hover:text-gold-deep">
            In der Rente weiterarbeiten
          </Link>{' '}
          sind häufige Einstiege.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Was das für unsere Klient*innen heißt</h2>
        <p className="mt-3">
          Wir nehmen Anfragen an, bei denen andere abwinken: schwierige psychiatrische Verläufe, fortgeschrittene Demenz mit herausforderndem Verhalten, komplexe palliative Begleitungen, Klient*innen ohne stabiles soziales Netz. Nicht weil wir alles können — sondern weil wir die Haltung haben, hinzusehen, statt wegzuschauen.
        </p>
        <p className="mt-3">
          Und wir nehmen uns Zeit, in der eigentlichen Pflegearbeit nicht im 15-Minuten-Takt zu sein. Das ist nur möglich, weil wir als Selbstzahler-Pflegedienst ohne Kassenbürokratie arbeiten — diese Entscheidung hat einen Preis, aber sie schafft den Rahmen, in dem soziale Pflegearbeit überhaupt möglich ist.
        </p>
      </section>

      <section className="mt-10 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">Mitarbeiten oder Klient*in werden?</p>
        <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">
          Wir freuen uns über Bewerbungen — gerade von Menschen, die anderswo durchs Raster gefallen sind. Und wir hören zu, wenn Sie für sich selbst oder Angehörige Pflege suchen, die mehr ist als Akkord.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/karriere"
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            Stellenkonzepte ansehen
          </Link>
          <Link
            href="/#kontakt"
            className="inline-block border border-anthracite text-anthracite px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors"
          >
            Erstgespräch anfragen
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
