import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

export function TrustStrip({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  // Die Zahl 20+ ist sprachneutral und bleibt im Code, übersetzt wird nur das Label.
  const items = [
    { num: '20+', label: t.trust.yearsLabel },
    { num: t.trust.reachableNum, label: t.trust.reachableLabel },
    { num: t.trust.employedNum, label: t.trust.employedLabel },
    { num: t.trust.regionNum, label: t.trust.regionLabel },
  ];
  return (
    <section className="bg-cream-deep border-y border-gold/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 px-6 md:px-12 py-12 max-w-6xl mx-auto">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-gold-deep">{item.num}</div>
            <div className="mt-2 font-sans text-[11px] uppercase tracking-[2px] text-anthracite-light">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
