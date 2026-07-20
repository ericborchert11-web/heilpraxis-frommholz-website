import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { getThemen } from '@/lib/i18n/content';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function ThemenPage({ lang }: { lang: Locale }) {
  const themen = getThemen(lang);
  return (
    <PageLayout
      title="Themen rund um Pflege"
      lead="Hintergrundwissen zu den Fragen, die viele Familien zuerst haben — Pflegegrad, Leistungsansprüche, Demenz, Sterbephase. Verständlich, ohne Werbe-Floskeln, aus über 15 Jahren Praxis."
      crumbs={[
        { name: 'Start', href: localizedHref('/', lang) },
        { name: 'Themen', href: localizedHref('/themen', lang) },
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
                Weiterlesen
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-anthracite-soft">
        Eine konkrete Frage zur eigenen Situation?{' '}
        <Link href={localizedHref('/leistungen/pflegeberatung-berlin', lang)} className="underline hover:text-gold-deep">
          → Pflegeberatung
        </Link>
      </p>
    </PageLayout>
  );
}
