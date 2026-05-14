import Link from 'next/link';
import { FaqAccordion } from './FaqAccordion';
import type { SeoLeistungDetail, SeoLeistungSection } from '@/lib/leistungen-seo';

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
      {section.trailingParagraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-[15px] leading-relaxed text-anthracite-soft">
          {p}
        </p>
      ))}
    </section>
  );
}

/**
 * Rendert intro + sections + FAQ + CTA + related links für eine
 * SEO-Detail-Seite (Money-Page oder Themen-Seite). JSON-LD-Wrapper sind
 * Sache der jeweiligen Route, da sie sich unterscheiden (Service vs. Article).
 */
export function SeoDetailContent({ detail }: { detail: SeoLeistungDetail }) {
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
    </>
  );
}
