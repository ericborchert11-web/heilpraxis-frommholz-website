import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="px-6 md:px-12 py-24 text-center max-w-2xl mx-auto">
      <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">404</span>
      <h1 className="mt-4 font-serif text-4xl font-light text-anthracite">Diese Seite ist noch nicht da.</h1>
      <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
        Wir bauen die Heilpraxis-Frommholz-Website gerade auf. Einige Seiten existieren noch nicht — sie kommen in den nächsten Etappen.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
      >
        Zur Startseite
      </Link>
    </section>
  );
}
