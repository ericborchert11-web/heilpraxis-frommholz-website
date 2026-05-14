import type { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { BUSINESS, SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum und rechtliche Angaben der ${SITE.name}, Inh. ${BUSINESS.owner}, ${BUSINESS.address.streetLong}, ${BUSINESS.address.zip} ${BUSINESS.address.city}.`,
  alternates: { canonical: `${SITE.url}/impressum` },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <PageLayout
      title="Impressum"
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Impressum', href: '/impressum' },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Angaben gemäß § 5 TMG</h2>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">{SITE.name}</strong>
          <br />
          Inhaber: {BUSINESS.owner}
          <br />
          {BUSINESS.address.streetLong}
          <br />
          {BUSINESS.address.zip} {BUSINESS.address.city}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Kontakt</h2>
        <p className="mt-3">
          Telefon: <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold-deep">{BUSINESS.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-deep">{BUSINESS.email}</a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Berufsbezeichnung:</strong> {BUSINESS.beruf.bezeichnung}
          <br />
          <strong className="font-medium text-anthracite">Verliehen durch:</strong> {BUSINESS.beruf.aufsichtsbehoerde}
          <br />
          <strong className="font-medium text-anthracite">Berufsrechtliche Regelungen:</strong> {BUSINESS.beruf.rechtsgrundlage}
        </p>
        <p className="mt-3">
          Einsehbar unter:{' '}
          <a href={BUSINESS.beruf.rechtsgrundlageUrl} className="underline hover:text-gold-deep" rel="noopener noreferrer">
            gesetze-im-internet.de/heilprg
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Aufsichtsbehörde</h2>
        <p className="mt-3">
          {BUSINESS.beruf.aufsichtsbehoerde}
          <br />
          {BUSINESS.beruf.aufsichtsbehoerdeAdresse}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Berufshaftpflichtversicherung</h2>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Name und Sitz des Versicherers:</strong> {BUSINESS.versicherung.name}
          <br />
          <strong className="font-medium text-anthracite">Geltungsraum:</strong> {BUSINESS.versicherung.geltungsraum}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Umsatzsteuer</h2>
        <p className="mt-3">Umsatzsteuerbefreit nach {BUSINESS.ustBefreiung}.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-3">
          {BUSINESS.owner}
          <br />
          {BUSINESS.address.streetLong}
          <br />
          {BUSINESS.address.zip} {BUSINESS.address.city}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Streitschlichtung</h2>
        <p className="mt-3">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" className="underline hover:text-gold-deep" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p className="mt-3">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Haftung für Inhalte</h2>
        <p className="mt-3">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mt-3">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Haftung für Links</h2>
        <p className="mt-3">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Urheberrecht</h2>
        <p className="mt-3">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">Bildnachweise</h2>
        <p className="mt-3 text-warm-gray italic">[wird ergänzt, sobald Bildmaterial im Einsatz ist]</p>
      </section>
    </PageLayout>
  );
}
