import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { SITE } from '@/lib/site-config';
import { STANDORTE, type SeoStandort } from '@/lib/standorte';

export const metadata: Metadata = {
  title: 'Standorte in Berlin',
  description: 'Wo wir pflegen in Berlin — Schwerpunkte in Charlottenburg, Wilmersdorf, Zehlendorf, Grunewald und Mitte. Überblick aller Stadtteile.',
  alternates: { canonical: `${SITE.url}/standorte` },
  robots: { index: true, follow: true },
};

function groupByBezirk(standorte: readonly SeoStandort[]): Map<string, SeoStandort[]> {
  const map = new Map<string, SeoStandort[]>();
  for (const s of standorte) {
    if (!map.has(s.bezirk)) map.set(s.bezirk, []);
    map.get(s.bezirk)!.push(s);
  }
  return map;
}

export default function StandorteHubPage() {
  const grouped = groupByBezirk(STANDORTE);

  return (
    <PageLayout
      title="Wo wir pflegen — unsere Schwerpunkte in Berlin"
      lead="Unser Sitz ist in Moabit, Stephanstraße 46. Von hier aus sind wir in 20–30 Minuten in jedem Stadtteil Berlins. Schwerpunkte unserer Arbeit liegen in den westlichen Innenstadt-Bezirken."
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Standorte', href: '/standorte' },
      ]}
    >
      {Array.from(grouped.entries()).map(([bezirk, list]) => (
        <section key={bezirk} className="mt-8">
          <h2 className="font-serif text-xl text-anthracite font-light">{bezirk}</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
            {list.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/standorte/${s.slug}`}
                  className="block p-5 bg-cream border border-gold/20 hover:border-gold/60 transition-colors"
                >
                  <h3 className="font-serif text-lg font-medium text-anthracite">
                    {s.name}
                    {s.isHauptstandort && (
                      <span className="ml-2 font-sans text-[10px] uppercase tracking-[1.5px] text-gold-deep">
                        · Hauptstandort
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-anthracite-soft">{s.hook}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-anthracite font-light">Auch außerhalb dieser Schwerpunkte</h2>
        <p className="mt-3">
          Wir sind grundsätzlich für ganz Berlin verfügbar — mit Anfahrtspauschale außerhalb unserer Kernbezirke. Wenn Sie in einem anderen Berliner Stadtteil wohnen und Pflege brauchen, melden Sie sich gerne. Wir prüfen die Anfrage und sagen ehrlich, ob wir die richtigen sind.
        </p>
        <Link
          href="/#kontakt"
          className="mt-6 inline-block bg-anthracite text-cream px-7 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
        >
          Erstgespräch anfragen
        </Link>
      </section>
    </PageLayout>
  );
}
