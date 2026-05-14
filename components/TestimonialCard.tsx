export type TestimonialData = {
  quote: string;
  initial: string;
  name: string;
  location: string;
};

export function TestimonialCard({ t }: { t: TestimonialData }) {
  return (
    <article className="bg-cream border border-gold/20 p-8">
      <p className="font-serif text-lg leading-relaxed italic text-anthracite-light">„{t.quote}"</p>
      <div className="mt-6 flex items-center gap-4 border-t border-gold/20 pt-5">
        <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center font-serif text-xl text-gold-deep">
          {t.initial}
        </div>
        <div>
          <div className="font-sans text-sm font-medium text-anthracite">{t.name}</div>
          <div className="font-sans text-xs text-warm-gray">{t.location}</div>
        </div>
      </div>
    </article>
  );
}
