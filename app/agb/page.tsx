import type { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { BUSINESS, SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen für Pflege- und Begleitleistungen der Heilpraxis Frommholz.',
  alternates: { canonical: `${SITE.url}/agb` },
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return (
    <PageLayout
      title="Allgemeine Geschäftsbedingungen"
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'AGB', href: '/agb' },
      ]}
    >
      <p className="text-warm-gray italic">Stand: Mai 2026</p>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 1 Geltungsbereich</h2>
        <p className="mt-3">
          (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Pflege-, Betreuungs- und Begleitleistungen zwischen der {SITE.name} (Inhaber: {BUSINESS.owner}, {BUSINESS.address.streetLong}, {BUSINESS.address.zip} {BUSINESS.address.city}) – nachfolgend &bdquo;Anbieter&ldquo; genannt – und dem Auftraggeber.
        </p>
        <p className="mt-3">
          (2) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 2 Vertragsgegenstand und Leistungsumfang</h2>
        <p className="mt-3">
          (1) Der Anbieter erbringt Pflege- und Betreuungsleistungen für Privatpersonen (Selbstzahler) in deren häuslicher Umgebung oder an einem vom Auftraggeber benannten Ort (z. B. Krankenhaus, Pflegeheim, Hospiz).
        </p>
        <p className="mt-3">
          (2) Der konkrete Leistungsumfang wird in einer schriftlichen Leistungsvereinbarung zwischen Anbieter und Auftraggeber festgelegt.
        </p>
        <p className="mt-3">
          (3) Die Leistungen umfassen je nach Vereinbarung insbesondere:
        </p>
        <ul className="mt-3 list-disc list-outside pl-6 space-y-1">
          <li>Sitzwachen und 1:1-Betreuung</li>
          <li>Stundenweise und mehrstündige Alltagsbegleitung</li>
          <li>24-Stunden-Betreuung im Wechselschichtmodell</li>
          <li>Pflegeberatung</li>
          <li>Begleitung zu Terminen und auf Reisen</li>
          <li>Bei entsprechender Vereinbarung: Heilpraktiker-Leistungen durch den Inhaber</li>
        </ul>
        <p className="mt-3">
          (4) Eine Abrechnung mit der gesetzlichen oder privaten Pflegekasse erfolgt nicht. Der Anbieter rechnet ausschließlich gegenüber dem Auftraggeber als Selbstzahler ab.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 3 Vertragsschluss</h2>
        <p className="mt-3">
          (1) Anfragen über das Kontaktformular, per E-Mail oder telefonisch stellen kein verbindliches Angebot dar.
        </p>
        <p className="mt-3">
          (2) Der Vertrag kommt zustande, wenn beide Parteien die schriftliche Leistungsvereinbarung unterzeichnet haben.
        </p>
        <p className="mt-3">
          (3) Vor Vertragsschluss findet in der Regel ein kostenfreies, unverbindliches Erstgespräch statt.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 4 Vergütung und Zahlungsbedingungen</h2>
        <p className="mt-3">
          (1) Die Vergütung richtet sich nach der individuell vereinbarten Leistung. Die jeweiligen Stunden- oder Schichtsätze werden in der Leistungsvereinbarung schriftlich festgehalten.
        </p>
        <p className="mt-3">(2) Zu- und Abschläge:</p>
        <ul className="mt-3 list-disc list-outside pl-6 space-y-1">
          <li>Nachtzuschlag (22:00 – 06:00): 25 %</li>
          <li>Sonntags- und Feiertagszuschlag: 50 %</li>
          <li>Diese Zuschläge dienen der angemessenen Vergütung der Mitarbeitenden gemäß § 3b EStG.</li>
        </ul>
        <p className="mt-3">(3) Die Abrechnung erfolgt monatlich nachträglich.</p>
        <p className="mt-3">(4) Rechnungen sind innerhalb von 14 Tagen ab Zugang ohne Abzug zur Zahlung fällig.</p>
        <p className="mt-3">(5) Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen.</p>
        <p className="mt-3">
          (6) Umsatzsteuer: Pflegerische Leistungen sind nach § 4 Nr. 16 UStG umsatzsteuerfrei. Heilpraktiker-Leistungen sind nach § 4 Nr. 14 UStG umsatzsteuerfrei.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 5 Pflichten des Anbieters</h2>
        <p className="mt-3">
          (1) Der Anbieter erbringt die vereinbarten Leistungen mit der gebotenen Sorgfalt durch qualifizierte und geeignete Mitarbeitende.
        </p>
        <p className="mt-3">
          (2) Der Anbieter und seine Mitarbeitenden unterliegen der pflegerischen Schweigepflicht. Personenbezogene Daten und Informationen über den Auftraggeber bzw. die betreute Person werden vertraulich behandelt.
        </p>
        <p className="mt-3">
          (3) Der Anbieter bemüht sich um Kontinuität in der Personalbesetzung. Bei Ausfall einer eingesetzten Person (Krankheit, Urlaub) wird – soweit möglich – aus einem festen Team eine vertraute Vertretung gestellt.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 6 Mitwirkungspflichten des Auftraggebers</h2>
        <p className="mt-3">
          (1) Der Auftraggeber stellt dem Anbieter die für die Leistungserbringung notwendigen Informationen (gesundheitliche Situation, Medikation, besondere Bedürfnisse) zur Verfügung.
        </p>
        <p className="mt-3">
          (2) Sofern Schlüssel oder Zugangscodes übergeben werden, ist deren ordnungsgemäße Verwahrung dokumentiert. Die Schlüssel werden ausschließlich für die Leistungserbringung verwendet.
        </p>
        <p className="mt-3">
          (3) Der Auftraggeber sorgt für eine sichere und zumutbare Arbeitsumgebung der Mitarbeitenden.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 7 Absagen und Verhinderung</h2>
        <p className="mt-3">
          (1) Sind vereinbarte Einsätze nicht erforderlich (z. B. Krankenhausaufenthalt der betreuten Person, kurzfristige Verhinderung), ist der Anbieter mindestens 24 Stunden vorher zu informieren.
        </p>
        <p className="mt-3">
          (2) Bei späterer Absage oder Nichtinanspruchnahme kann der Anbieter die vereinbarte Vergütung in Rechnung stellen, wenn die Mitarbeitenden bereits disponiert waren.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 8 Haftung</h2>
        <p className="mt-3">
          (1) Der Anbieter haftet für Schäden, die er oder seine Mitarbeitenden vorsätzlich oder fahrlässig verursacht haben, nach den gesetzlichen Bestimmungen.
        </p>
        <p className="mt-3">
          (2) Für Schäden an Wohnung, Einrichtung oder Eigentum des Auftraggebers besteht eine Berufshaftpflichtversicherung.
        </p>
        <p className="mt-3">
          (3) Die Haftung für leicht fahrlässig verursachte Vermögensschäden ist auf den Betrag begrenzt, der von der Berufshaftpflichtversicherung gedeckt wird.
        </p>
        <p className="mt-3">
          (4) Der Anbieter haftet nicht für Schäden, die durch unrichtige oder unvollständige Angaben des Auftraggebers entstehen.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 9 Kündigung</h2>
        <p className="mt-3">
          (1) Der Vertrag kann von beiden Seiten mit einer Frist von 14 Tagen zum Monatsende ordentlich gekündigt werden.
        </p>
        <p className="mt-3">
          (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
        </p>
        <p className="mt-3">(3) Wichtiger Grund für den Anbieter ist insbesondere:</p>
        <ul className="mt-3 list-disc list-outside pl-6 space-y-1">
          <li>Bedrohung oder Übergriffe gegen Mitarbeitende</li>
          <li>Wiederholter Zahlungsverzug trotz Mahnung</li>
          <li>Verletzung von wesentlichen Mitwirkungspflichten des Auftraggebers</li>
        </ul>
        <p className="mt-3">(4) Wichtiger Grund für den Auftraggeber ist insbesondere:</p>
        <ul className="mt-3 list-disc list-outside pl-6 space-y-1">
          <li>Wiederholte mangelhafte Leistungserbringung trotz Abmahnung</li>
          <li>Verstöße gegen die Schweigepflicht</li>
        </ul>
        <p className="mt-3">(5) Die Kündigung bedarf der Schriftform.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 10 Datenschutz</h2>
        <p className="mt-3">
          Der Anbieter verarbeitet personenbezogene Daten ausschließlich im Rahmen der DSGVO. Einzelheiten regelt die Datenschutzerklärung, einsehbar unter heilpraxis-frommholz.de/datenschutz.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">§ 11 Schlussbestimmungen</h2>
        <p className="mt-3">(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
        <p className="mt-3">
          (2) Erfüllungsort und Gerichtsstand für Kaufleute, juristische Personen des öffentlichen Rechts und öffentlich-rechtliche Sondervermögen ist Berlin.
        </p>
        <p className="mt-3">
          (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.
        </p>
        <p className="mt-3">
          (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Änderung des Schriftformerfordernisses.
        </p>
      </section>
    </PageLayout>
  );
}
