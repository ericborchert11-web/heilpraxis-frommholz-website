import type { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { BUSINESS, SITE, pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO. Heilpraxis Frommholz, Berlin.',
  ...pageMeta('/datenschutz'),
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <PageLayout
      title="Datenschutzerklärung"
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Datenschutz', href: '/datenschutz' },
      ]}
    >
      <p className="text-warm-gray italic">Stand: Mai 2026</p>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">1. Verantwortlicher</h2>
        <p className="mt-3">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">{SITE.name}</strong>
          <br />
          Inhaber: {BUSINESS.owner}
          <br />
          {BUSINESS.address.streetLong}
          <br />
          {BUSINESS.address.zip} {BUSINESS.address.city}
          <br />
          Telefon: {BUSINESS.phoneDisplay}
          <br />
          E-Mail: {BUSINESS.email}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">2. Allgemeine Hinweise</h2>
        <p className="mt-3">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">3. Datenerfassung auf unserer Website</h2>
        <h3 className="mt-5 font-serif text-xl text-anthracite font-light">3.1 Server-Logfiles</h3>
        <p className="mt-3">
          Unser Hosting-Anbieter (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) erfasst und speichert automatisch Informationen in Server-Logfiles, die Ihr Browser automatisch übermittelt:
        </p>
        <ul className="mt-3 list-disc list-outside pl-6 space-y-1">
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners (anonymisierte IP-Adresse)</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p className="mt-3">
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website).
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Datenübermittlung in die USA:</strong> Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Zusätzlich bestehen Standardvertragsklauseln gemäß Art. 46 DSGVO.
        </p>

        <h3 className="mt-5 font-serif text-xl text-anthracite font-light">3.2 Cookies</h3>
        <p className="mt-3">
          Unsere Website verwendet aktuell <strong className="font-medium text-anthracite">keine</strong> Cookies, die einer Einwilligung bedürfen. Es werden lediglich technisch notwendige Cookies eingesetzt, soweit dies für den Betrieb der Website erforderlich ist.
        </p>
        <p className="mt-3">
          Sollte sich dies ändern, werden wir Sie über einen Cookie-Banner um Ihre Einwilligung bitten und diese Datenschutzerklärung entsprechend anpassen.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">4. Kontaktaufnahme</h2>
        <h3 className="mt-5 font-serif text-xl text-anthracite font-light">4.1 Kontaktformular</h3>
        <p className="mt-3">
          Wenn Sie uns über das Kontaktformular auf unserer Website Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 6 Monaten. Sofern aus der Anfrage ein Behandlungs- bzw. Betreuungsverhältnis entsteht, gelten die gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre nach § 147 AO bzw. 10 Jahre nach Behandlungsende für medizinische Dokumentation gemäß § 630f BGB).
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Auftragsverarbeiter:</strong> Für den technischen Versand der Formularanfragen setzen wir den E-Mail-Dienstleister <strong className="font-medium text-anthracite">Resend, Inc.</strong> (USA) ein. Mit Resend besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Ihre Angaben aus dem Kontaktformular werden zum Zweck der Zustellung an Resend übermittelt und dort verarbeitet.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Datenübermittlung in die USA:</strong> Die Übermittlung erfolgt auf Grundlage von Standardvertragsklauseln gemäß Art. 46 DSGVO sowie, soweit anwendbar, im Rahmen des EU-US Data Privacy Framework.
        </p>

        <h3 className="mt-5 font-serif text-xl text-anthracite font-light">4.2 E-Mail-Anfragen</h3>
        <p className="mt-3">
          Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">5. Geschützter Familienbereich</h2>
        <p className="mt-3">
          Klient:innen und von ihnen berechtigten Angehörigen bieten wir auf Wunsch einen geschützten Online-Zugang (&bdquo;Familienbereich&ldquo;) an, über den Dienstpläne, Rechnungen und Pflegedokumentation eingesehen werden können.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Verarbeitete Daten:</strong> Zugangs- und Authentifizierungsdaten (z. B. Anmeldedaten, ggf. Session-Cookies zur Aufrechterhaltung der Anmeldung) sowie die im Familienbereich einsehbaren Inhalte, insbesondere Dienstpläne, Rechnungen und Pflegedokumentation.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Besondere Kategorien personenbezogener Daten:</strong> Die Pflegedokumentation enthält Gesundheitsdaten im Sinne des Art. 9 DSGVO. Die Verarbeitung dieser besonderen Kategorie personenbezogener Daten erfolgt auf Grundlage der ausdrücklichen Einwilligung der betroffenen Person bzw. der berechtigten Angehörigen (Art. 9 Abs. 2 lit. a DSGVO) im Rahmen des bestehenden Betreuungsverhältnisses.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Rechtsgrundlage im Übrigen:</strong> Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Betreuungs- bzw. Behandlungsvertrags) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), soweit einschlägig.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Zugriff:</strong> Zugriff auf den Familienbereich erhalten ausschließlich die von der Klientin bzw. dem Klienten hierzu berechtigten Angehörigen. Die Übertragung der Daten erfolgt über eine verschlüsselte (TLS-)Verbindung. Die technische Bereitstellung kann über ein internes System bzw. einen entsprechend beauftragten Dienstleister erfolgen; die Auswahl erfolgt unter Berücksichtigung angemessener technischer und organisatorischer Maßnahmen gemäß Art. 32 DSGVO.
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Speicherdauer:</strong> Die im Familienbereich verfügbaren Daten werden im Rahmen der gesetzlichen Aufbewahrungsfristen gespeichert (siehe Ziffer 4.1) und nach Ende des Betreuungsverhältnisses sowie Ablauf der jeweiligen Aufbewahrungsfrist gelöscht.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">6. Hosting</h2>
        <p className="mt-3">
          Diese Website wird bei <strong className="font-medium text-anthracite">Vercel Inc.</strong> (USA) gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Anbieters gespeichert. Hierbei kann es sich auch um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten und vergleichbare Daten handeln.
        </p>
        <p className="mt-3">
          Der Einsatz erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">7. Externe Schriftarten</h2>
        <p className="mt-3">
          Wir setzen Schriftarten lokal über das Next.js-Font-System ein. Die Dateien werden bei jedem Build auf unseren Servern bei Vercel gehostet — es findet <strong className="font-medium text-anthracite">keine direkte Verbindung des Browsers zu Google-Fonts-Servern</strong> statt.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">8. Ihre Rechte als betroffene Person</h2>
        <p className="mt-3">Sie haben jederzeit das Recht auf:</p>
        <ul className="mt-3 list-disc list-outside pl-6 space-y-1">
          <li><strong className="font-medium text-anthracite">Auskunft</strong> über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
          <li><strong className="font-medium text-anthracite">Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
          <li><strong className="font-medium text-anthracite">Löschung</strong> (&bdquo;Recht auf Vergessenwerden&ldquo;, Art. 17 DSGVO)</li>
          <li><strong className="font-medium text-anthracite">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
          <li><strong className="font-medium text-anthracite">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          <li><strong className="font-medium text-anthracite">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li><strong className="font-medium text-anthracite">Widerruf</strong> einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p className="mt-3">
          Bitte wenden Sie sich für die Wahrnehmung dieser Rechte an die unter Punkt 1 genannten Kontaktdaten.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">9. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p className="mt-3">
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns zuständige Behörde ist:
        </p>
        <p className="mt-3">
          <strong className="font-medium text-anthracite">Berliner Beauftragte für Datenschutz und Informationsfreiheit (BlnBDI)</strong>
          <br />
          Friedrichstraße 219
          <br />
          10969 Berlin
          <br />
          Telefon: 030 13889-0
          <br />
          E-Mail: mailbox@datenschutz-berlin.de
          <br />
          Web:{' '}
          <a href="https://www.datenschutz-berlin.de" className="underline hover:text-gold-deep" rel="noopener noreferrer">
            www.datenschutz-berlin.de
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">10. Datensicherheit</h2>
        <p className="mt-3">
          Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-/TLS-Verschlüsselungsverfahren. Erkennbar ist dies am Schloss-Symbol in Ihrem Browser sowie dem Zusatz &bdquo;https://&ldquo; in der Adresszeile.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">11. Aktualität dieser Datenschutzerklärung</h2>
        <p className="mt-3">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Die aktuelle Fassung gilt jeweils ab Veröffentlichung auf dieser Website.
        </p>
      </section>
    </PageLayout>
  );
}
