import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { type SeoStandort } from '@/lib/standorte';
import { getStandorte } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

function groupByBezirk(standorte: readonly SeoStandort[]): Map<string, SeoStandort[]> {
  const map = new Map<string, SeoStandort[]>();
  for (const s of standorte) {
    if (!map.has(s.bezirk)) map.set(s.bezirk, []);
    map.get(s.bezirk)!.push(s);
  }
  return map;
}

export function StandortePage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const grouped = groupByBezirk(getStandorte(lang));

  return (
    <PageLayout
      title={t.standortePage.title}
      lead={t.standortePage.lead}
      crumbs={[
        { name: t.crumbs.start, href: localizedHref('/', lang) },
        { name: t.crumbs.standorte, href: localizedHref('/standorte', lang) },
      ]}
    >
      {Array.from(grouped.entries()).map(([bezirk, list]) => (
        <section key={bezirk} className="mt-8">
          <h2 className="font-serif text-xl text-anthracite font-light">{bezirk}</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
            {list.map((s) => (
              <li key={s.slug}>
                <Link
                  href={localizedHref(`/standorte/${s.slug}`, lang)}
                  className="block p-5 bg-cream border border-gold/20 hover:border-gold/60 transition-colors"
                >
                  <h3 className="font-serif text-lg font-medium text-anthracite">
                    {s.name}
                    {s.isHauptstandort && (
                      <span className="ml-2 font-sans text-[10px] uppercase tracking-[1.5px] text-gold-deep">
                        {`· ${t.standortePage.hauptstandort}`}
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
        <h2 className="font-serif text-2xl text-anthracite font-light">{t.standortePage.outroHeading}</h2>
        <p className="mt-3">{t.standortePage.outroText}</p>
        <Link
          href={localizedHref('/#kontakt', lang)}
          className="mt-6 inline-block bg-anthracite text-cream px-7 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
        >
          {t.standortePage.outroCta}
        </Link>
      </section>
    </PageLayout>
  );
}
