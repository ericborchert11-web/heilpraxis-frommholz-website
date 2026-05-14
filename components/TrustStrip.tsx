const ITEMS = [
  { num: '20+', label: 'Jahre Pflegeerfahrung' },
  { num: '24/7', label: 'Verlässlich erreichbar' },
  { num: '§ 3b', label: 'Korrekte Abrechnung' },
  { num: 'Berlin', label: '& Umland' },
];

export function TrustStrip() {
  return (
    <section className="bg-cream-deep border-y border-gold/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 px-6 md:px-12 py-12 max-w-6xl mx-auto">
        {ITEMS.map((item) => (
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
