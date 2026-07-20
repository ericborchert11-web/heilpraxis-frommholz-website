import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SITE } from '@/lib/site-config';
import { STANDORTE } from '@/lib/standorte';
import { LEISTUNGEN_SEO, hasDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import type { Locale } from '@/lib/i18n/config';

export function Footer({ lang }: { lang: Locale }) {
  // lang wird ab Etappe 1 / Aufgabe 7 fuer die Uebersetzung gebraucht.
  void lang;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-cream/70 pt-20 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-3.5">
            <Image src="/logo.png" alt={`${SITE.name} Wappen`} width={52} height={52} className="object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-[19px] font-medium text-cream">Heilpraxis Frommholz</span>
              <span className="font-sans text-[10px] uppercase tracking-[3px] text-gold mt-0.5">Pflege · Beratung · Begleitung</span>
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            {BUSINESS.address.street}<br />
            {BUSINESS.address.zip} {BUSINESS.address.city}<br />
            <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold-soft">{BUSINESS.phoneDisplay}</a><br />
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-soft">{BUSINESS.email}</a>
          </p>
          <p className="mt-3 text-sm">{BUSINESS.hours.label}</p>
          <Link href="/familienbereich" className="mt-4 inline-block text-sm text-gold hover:text-gold-soft underline">
            → Familienbereich für Angehörige
          </Link>
        </div>

        <div>
          <h2 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Leistungen</h2>
          <ul className="list-none space-y-2.5">
            {LEISTUNGEN_SEO.filter(hasDetail).map((l) => (
              <li key={l.slug}>
                <Link href={`/leistungen/${l.slug}`} className="text-sm hover:text-gold-soft">
                  {l.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/leistungen" className="text-sm hover:text-gold-soft underline">
                → Alle Leistungen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Themen</h2>
          <ul className="list-none space-y-2.5">
            {THEMEN.map((t) => (
              <li key={t.slug}>
                <Link href={`/themen/${t.slug}`} className="text-sm hover:text-gold-soft">
                  {t.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/themen" className="text-sm hover:text-gold-soft underline">
                → Alle Themen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Pflege in Ihrem Kiez</h2>
          <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-2">
            {STANDORTE.filter((s) => !s.hideInFooter).map((s) => (
              <li key={s.slug}>
                <Link href={`/standorte/${s.slug}`} className="text-[13px] hover:text-gold-soft">
                  {s.name}
                  {s.isHauptstandort && <span className="text-gold/80"> · Hauptstandort</span>}
                </Link>
              </li>
            ))}
            <li className="col-span-2 pt-1">
              <Link href="/standorte" className="text-[13px] hover:text-gold-soft underline">
                → Alle Standorte
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row md:justify-between text-xs text-warm-gray gap-3">
        <span>© {year} {SITE.name}. Alle Rechte vorbehalten.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/impressum" className="hover:text-gold-soft">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-gold-soft">Datenschutz</Link>
          <Link href="/agb" className="hover:text-gold-soft">AGB</Link>
          <Link href="/karriere" className="hover:text-gold-soft">Karriere</Link>
          <a
            href="https://zuhause.heilpraxis-frommholz.de"
            target="_blank"
            rel="noopener"
            className="hover:text-gold-soft"
            title="Mitarbeiterbereich (Schichtplaner) — externe Seite"
          >
            Schichtplaner
            <span aria-hidden="true" className="ml-1">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
