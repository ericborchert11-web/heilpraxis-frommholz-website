import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { getThemen } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

export function ThemenPage({ lang }: { lang: Locale }) {
  const d = getDictionary(lang);
  const themen = getThemen(lang);
  return (
    <PageLayout
      title={d.themenPage.title}
      lead={d.themenPage.lead}
      crumbs={[
        { name: d.crumbs.start, href: localizedHref('/', lang) },
        { name: d.crumbs.themen, href: localizedHref('/themen', lang) },
      ]}
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none">
        {themen.map((t) => (
          <li key={t.slug}>
            <Link
              href={localizedHref(`/themen/${t.slug}`, lang)}
              className="block p-6 bg-cream border border-gold/20 hover:border-gold/60 transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-anthracite">{t.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-anthracite-soft">{t.short}</p>
              <span className="mt-4 inline-block font-sans text-[11px] uppercase tracking-[1.5px] text-gold-deep border-b border-gold-deep/30 pb-1">
                {d.themenPage.more}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-anthracite-soft">
        {d.themenPage.outroBefore}{' '}
        <Link href={localizedHref('/leistungen/pflegeberatung-berlin', lang)} className="underline hover:text-gold-deep">
          {d.themenPage.outroLink}
        </Link>
      </p>
    </PageLayout>
  );
}
