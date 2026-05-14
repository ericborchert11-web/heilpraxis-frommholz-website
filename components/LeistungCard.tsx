import Link from 'next/link';
import { type Leistung, hasDetailPage } from '@/lib/leistungen';
import { LeistungIcon } from './LeistungIcon';

export function LeistungCard({ leistung }: { leistung: Leistung }) {
  const showLink = hasDetailPage(leistung);

  return (
    <article className="relative p-8 bg-cream border border-gold/20 hover:border-gold/60 transition-colors">
      <span className="absolute top-6 right-6 font-serif text-2xl text-gold/50">{leistung.numeral}</span>
      <div className="text-gold-deep w-14 h-14">
        <LeistungIcon iconKey={leistung.iconKey} className="w-full h-full" />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-medium text-anthracite">{leistung.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-anthracite-soft">{leistung.card.lead}</p>
      {showLink && (
        <Link
          href={`/leistungen/${leistung.slug}`}
          className="inline-block mt-5 font-sans text-[12px] uppercase tracking-[1.5px] text-gold-deep border-b border-gold-deep/30 hover:border-gold-deep pb-1"
        >
          Mehr erfahren
        </Link>
      )}
    </article>
  );
}
