import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SITE } from '@/lib/site-config';
import { BEZIRKE } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-cream/70 pt-20 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-w-7xl mx-auto">
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
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Leistungen</h4>
          <ul className="list-none space-y-2.5">
            {LEISTUNGEN.map((l) => (
              <li key={l.slug}>
                <Link href={`/leistungen/${l.slug}`} className="text-sm hover:text-gold-soft">{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">Pflege in Ihrem Bezirk</h4>
          <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-2">
            {BEZIRKE.map((b) => (
              <li key={b.slug}>
                <Link href={`/pflege-in-${b.slug}`} className="text-[13px] hover:text-gold-soft">
                  {b.name}
                  {b.isHauptstandort && <span className="text-gold/80"> · Hauptstandort</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row md:justify-between text-xs text-warm-gray gap-3">
        <span>© {year} {SITE.name}. Alle Rechte vorbehalten.</span>
        <div className="flex gap-5">
          <Link href="/impressum" className="hover:text-gold-soft">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-gold-soft">Datenschutz</Link>
          <Link href="/ueber-uns" className="hover:text-gold-soft">Über uns</Link>
          <Link href="/karriere" className="hover:text-gold-soft">Karriere</Link>
        </div>
      </div>
    </footer>
  );
}
