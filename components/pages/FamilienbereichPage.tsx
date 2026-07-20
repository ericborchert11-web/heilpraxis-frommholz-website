import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { FaqAccordion } from '@/components/FaqAccordion';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { localizedHref } from '@/lib/i18n/slugs';
import { getDictionary, hatUebersetzung } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

/**
 * `/datenschutz` existiert nur auf Deutsch und bleibt darum ein deutscher
 * Pfad; die übersetzten Fassungen weisen im Linktext darauf hin.
 */
export function FamilienbereichPage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const p = t.familienbereichPage;

  return (
    <PageLayout
      title={p.title}
      lead={p.lead}
      crumbs={[
        { name: t.crumbs.start, href: localizedHref('/', lang) },
        { name: t.crumbs.familienbereich, href: localizedHref('/familienbereich', lang) },
      ]}
    >
      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.warumH2}</h2>
        <p className="mt-3">{p.warumText}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.bausteineH2}</h2>
        {p.bausteine.map((baustein) => (
          <p className="mt-3" key={baustein.label}>
            <strong className="text-anthracite">{baustein.label}</strong> {baustein.text}
          </p>
        ))}
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.inklusiveH2}</h2>
        <p className="mt-3">{p.inklusiveText}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.sicherheitH2}</h2>
        <p className="mt-3">
          {p.sicherheitBefore}{' '}
          <Link href="/datenschutz" className="underline hover:text-gold-deep">{p.sicherheitLink}</Link>
          {p.sicherheitAfter}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.individuellH2}</h2>
        <p className="mt-3">{p.individuellText}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-anthracite font-light">{p.faqH2}</h2>
        <FaqAccordion items={p.faq} />
      </section>

      <section className="mt-10 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">{p.ctaTitle}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{p.ctaText}</p>
        <div className="mt-5">
          <Link
            href={localizedHref('/#kontakt', lang)}
            className="inline-block bg-anthracite text-cream px-6 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
          >
            {p.ctaButton}
          </Link>
        </div>
      </section>

      {/*
        Strukturierte Daten nur, wenn die FAQ auch in der Seitensprache
        vorliegt — sonst bekäme Google deutsche Inhalte als englische
        deklariert. Sobald eine Sprache übersetzt ist, schaltet sich das
        JSON-LD von selbst zu.
      */}
      {(lang === DEFAULT_LOCALE || hatUebersetzung(lang)) && <FaqJsonLd items={p.faq} />}
    </PageLayout>
  );
}
