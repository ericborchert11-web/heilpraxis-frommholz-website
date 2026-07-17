import Link from 'next/link';
import { BUSINESS } from '@/lib/site-config';

export default function NotFound() {
  return (
    <section className="px-6 md:px-12 py-24 text-center max-w-2xl mx-auto">
      <span className="font-sans text-[11px] uppercase tracking-[3px] text-gold-deep">404</span>
      <h1 className="mt-4 font-serif text-4xl font-light text-anthracite">Seite nicht gefunden</h1>
      <p className="mt-5 text-[15px] leading-relaxed text-anthracite-soft">
        Diese Seite existiert nicht (mehr) oder wurde verschoben. Hier geht es weiter:
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-block bg-anthracite text-cream px-7 py-3.5 rounded-sm font-sans text-sm uppercase tracking-[1.5px] hover:bg-gold-deep transition-colors"
        >
          Zur Startseite
        </Link>
        <Link
          href="/leistungen"
          className="inline-block text-sm text-anthracite hover:text-gold-deep underline"
        >
          Leistungen ansehen
        </Link>
        <Link
          href="/#kontakt"
          className="inline-block text-sm text-anthracite hover:text-gold-deep underline"
        >
          Kontakt
        </Link>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-block text-sm text-anthracite hover:text-gold-deep underline"
        >
          {BUSINESS.phoneDisplay} anrufen
        </a>
      </div>
    </section>
  );
}
