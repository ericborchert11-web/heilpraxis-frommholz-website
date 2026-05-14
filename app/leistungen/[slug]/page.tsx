import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/SEO/BreadcrumbJsonLd';
import { FaqAccordion } from '@/components/FaqAccordion';
import { FaqJsonLd } from '@/components/SEO/FaqJsonLd';
import { ServiceJsonLd } from '@/components/SEO/JsonLd';
import { SITE } from '@/lib/site-config';
import {
  LEISTUNGEN_SEO,
  hasDetail,
  type SeoLeistung,
  type SeoLeistungSection,
} from '@/lib/leistungen-seo';

type RouteParams = { slug: string };

// Pre-render nur die Seiten mit ausgearbeitetem Detail. Stubs lassen wir
// bewusst als 404 stehen, bis Welle 2 sie befüllt.
export async function generateStaticParams(): Promise<RouteParams[]> {
  return LEISTUNGEN_SEO.filter(hasDetail).map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const l = LEISTUNGEN_SEO.find((x) => x.slug === slug);
  if (!l || !hasDetail(l)) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `${SITE.url}/leistungen/${l.slug}` },
    robots: { index: true, follow: true },
    keywords: [l.primaryKeyword, ...l.secondaryKeywords],
  };
}

function Section({ section }: { section: SeoLeistungSection }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl md:text-3xl font-light text-anthracite">
        {section.heading}
      </h2>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-[15px] leading-relaxed text-anthracite-soft">
          {p}
        </p>
      ))}
      {section.list && section.list.length > 0 && (
        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-[15px] leading-relaxed text-anthracite-soft">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {section.stronglist && section.stronglist.length > 0 && (
        <dl className="mt-4 space-y-4 text-[15px] leading-relaxed text-anthracite-soft">
          {section.stronglist.map((item, i) => (
            <div key={i}>
              <dt className="inline font-medium text-anthracite">{item.label}:</dt>{' '}
              <dd className="inline">{item.text}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

function LeistungDetail({ l }: { l: SeoLeistung }) {
  if (!l.detail) return null;
  const { detail } = l;
  return (
    <>
      {detail.intro.map((p, i) => (
        <p key={i} className="mt-4 text-[16px] leading-relaxed text-anthracite-soft">
          {p}
        </p>
      ))}

      {detail.sections.map((s, i) => (
        <Section key={i} section={s} />
      ))}

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-anthracite">
          Häufig gestellte Fragen
        </h2>
        <FaqAccordion items={detail.faq} />
      </section>

      <section className="mt-12 p-8 bg-cream-deep border border-gold/30">
        <p className="font-serif text-xl text-anthracite font-light">
          Bereit für ein erstes Gespräch?
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-anthracite-soft">
          Kostenlos, unverbindlich, in Ruhe. Wir hören erst zu — und melden uns dann mit
          einem konkreten Vorschlag zurück.
        </p>
        <Link
          href={detail.cta.href}
          className="mt-5 inline-block bg-anthracite text-cream px-7 py-3 font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
        >
          {detail.cta.text}
        </Link>
      </section>

      {detail.relatedLinks.length > 0 && (
        <section className="mt-12 border-t border-gold/20 pt-8">
          <p className="font-sans text-[11px] uppercase tracking-[2px] text-gold-deep">
            Vielleicht interessiert Sie auch
          </p>
          <ul className="mt-4 space-y-2 list-none">
            {detail.relatedLinks.map((r) => (
              <li key={r.href} className="text-[15px] leading-relaxed">
                <Link href={r.href} className="text-anthracite hover:text-gold-deep underline">
                  {r.label}
                </Link>
                {r.note && <span className="text-anthracite-soft"> — {r.note}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <ServiceJsonLd serviceName={l.title} serviceDescription={l.metaDescription} />
      <FaqJsonLd items={detail.faq} />
    </>
  );
}

export default async function LeistungDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const l = LEISTUNGEN_SEO.find((x) => x.slug === slug);
  if (!l || !hasDetail(l)) {
    notFound();
  }

  const crumbs = [
    { name: 'Start', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: l.title, href: `/leistungen/${l.slug}` },
  ];

  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {l.h1}
      </h1>
      <LeistungDetail l={l} />
    </article>
  );
}
