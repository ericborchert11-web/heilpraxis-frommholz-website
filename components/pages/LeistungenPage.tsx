import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { LEISTUNGEN_SEO, hasDetail } from '@/lib/leistungen-seo';
import type { Locale } from '@/lib/i18n/config';

export function LeistungenPage({ lang }: { lang: Locale }) {
  // lang wird ab Aufgabe 12 für die Übersetzung gebraucht.
  void lang;
  return (
    <PageLayout
      title="Unsere Leistungen"
      lead="Acht Wege, in denen wir Menschen in Berlin begleiten — von der Sitzwache im Krankenhaus bis zur 24-Stunden-Betreuung zu Hause. Alle als Selbstzahler-Leistung, mit kleinem festem Team."
      crumbs={[
        { name: 'Start', href: '/' },
        { name: 'Leistungen', href: '/leistungen' },
      ]}
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none">
        {LEISTUNGEN_SEO.map((l) => {
          const linked = hasDetail(l);
          const className = 'block p-6 bg-cream border border-gold/20 transition-colors';
          const inner = (
            <>
              <h3 className="font-serif text-xl font-medium text-anthracite">{l.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-anthracite-soft">{l.short}</p>
              {linked ? (
                <span className="mt-4 inline-block font-sans text-[11px] uppercase tracking-[1.5px] text-gold-deep border-b border-gold-deep/30 pb-1">
                  Mehr erfahren
                </span>
              ) : (
                <span className="mt-4 inline-block font-sans text-[10px] uppercase tracking-[1.5px] text-warm-gray italic">
                  Detail-Seite folgt
                </span>
              )}
            </>
          );
          return (
            <li key={l.slug}>
              {linked ? (
                <Link href={`/leistungen/${l.slug}`} className={`${className} hover:border-gold/60`}>
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
        Sie wissen nicht, welche Leistung passt? Wir hören erst zu, dann beraten wir.{' '}
        <Link href="/#kontakt" className="underline hover:text-gold-deep">
          Erstgespräch anfragen →
        </Link>
      </p>
    </PageLayout>
  );
}
