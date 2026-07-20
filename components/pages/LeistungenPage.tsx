import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { hasDetail } from '@/lib/leistungen-seo';
import { getLeistungenSeo } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

export function LeistungenPage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const leistungen = getLeistungenSeo(lang);
  return (
    <PageLayout
      title={t.leistungenPage.title}
      lead={t.leistungenPage.lead}
      crumbs={[
        { name: t.crumbs.start, href: localizedHref('/', lang) },
        { name: t.crumbs.leistungen, href: localizedHref('/leistungen', lang) },
      ]}
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none">
        {leistungen.map((l) => {
          const linked = hasDetail(l);
          const className = 'block p-6 bg-cream border border-gold/20 transition-colors';
          const inner = (
            <>
              <h3 className="font-serif text-xl font-medium text-anthracite">{l.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-anthracite-soft">{l.short}</p>
              {linked ? (
                <span className="mt-4 inline-block font-sans text-[11px] uppercase tracking-[1.5px] text-gold-deep border-b border-gold-deep/30 pb-1">
                  {t.leistungenPage.more}
                </span>
              ) : (
                <span className="mt-4 inline-block font-sans text-[10px] uppercase tracking-[1.5px] text-warm-gray italic">
                  {t.leistungenPage.detailPending}
                </span>
              )}
            </>
          );
          return (
            <li key={l.slug}>
              {linked ? (
                <Link href={localizedHref(`/leistungen/${l.slug}`, lang)} className={`${className} hover:border-gold/60`}>
                  {inner}
                </Link>
              ) : (
                <div className={className}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      <p className="mt-10 text-anthracite-soft">
        {t.leistungenPage.outroBefore}{' '}
        <Link href={localizedHref('/#kontakt', lang)} className="underline hover:text-gold-deep">
          {t.leistungenPage.outroLink}
        </Link>
      </p>
    </PageLayout>
  );
}
