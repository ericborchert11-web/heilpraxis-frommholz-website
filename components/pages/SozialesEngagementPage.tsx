import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

/**
 * /karriere und /karriere/… existieren nur auf Deutsch. Sie laufen bewusst
 * NICHT durch `localizedHref` — das schickte sie auf die Sprachstartseite.
 * Der Fußbereich weist allgemein auf die nur deutschen Seiten hin.
 */
export function SozialesEngagementPage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const p = t.sozialesEngagementPage;

  return (
    <PageLayout
      title={p.title}
      lead={p.lead}
      crumbs={[
        { name: t.crumbs.start, href: localizedHref('/', lang) },
        { name: t.crumbs.sozialesEngagement, href: localizedHref('/soziales-engagement', lang) },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.vereinH2}</h2>
        <p className="mt-3">
          {p.vereinBefore}{' '}
          <Link href={localizedHref('/leistungen/reisebegleitung-senioren', lang)} className="underline hover:text-gold-deep">
            {p.vereinLinkReise}
          </Link>{' '}
          {p.vereinAfterLinks} <strong className="text-anthracite">{p.vereinName}</strong> {p.vereinAfter}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.teamH2}</h2>
        <p className="mt-3">{p.teamText1}</p>
        <p className="mt-3">{p.teamText2}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.herkunftH2}</h2>
        <p className="mt-3">
          {p.herkunftBefore}{' '}
          <Link href={localizedHref('/leistungen/systemsprenger-betreuung', lang)} className="underline hover:text-gold-deep">
            {p.herkunftLink}
          </Link>
          {p.herkunftAfter}
        </p>
        <p className="mt-3">
          {p.simeonBefore}{' '}
          <a
            href="https://simeonfrommholz.de"
            className="underline hover:text-gold-deep"
            target="_blank"
            rel="noopener"
          >
            {p.simeonLink}
          </a>
          {p.simeonAfter}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.ausbildungH2}</h2>
        <p className="mt-3">{p.ausbildungText}</p>
        <p className="mt-3">
          {p.karriereBefore}{' '}
          <Link href="/karriere" className="underline hover:text-gold-deep">
            {p.karriereLink}
          </Link>{' '}
          {p.karriereBetween1}{' '}
          <Link href="/karriere/bezahltes-ehrenamt" className="underline hover:text-gold-deep">
            {p.karriereLinkEhrenamt}
          </Link>{' '}
          {p.karriereBetween2}{' '}
          <Link href="/karriere/in-der-rente-weiterarbeiten" className="underline hover:text-gold-deep">
            {p.karriereLinkRente}
          </Link>{' '}
          {p.karriereAfter}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.klientinnenH2}</h2>
        <p className="mt-3">{p.klientinnenText1}</p>
        <p className="mt-3">{p.klientinnenText2}</p>
      </section>

      <section className="mt-10 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">{p.ctaTitle}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{p.ctaText}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/karriere"
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            {p.ctaKarriere}
          </Link>
          <Link
            href={localizedHref('/#kontakt', lang)}
            className="inline-block border border-anthracite text-anthracite px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-anthracite hover:text-cream transition-colors"
          >
            {p.ctaKontakt}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
