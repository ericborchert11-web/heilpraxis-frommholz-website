import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SITE } from '@/lib/site-config';
import { hasDetail } from '@/lib/leistungen-seo';
import { getLeistungenSeo, getStandorte, getThemen } from '@/lib/i18n/content';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

export function Footer({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const leistungen = getLeistungenSeo(lang);
  const themen = getThemen(lang);
  const standorte = getStandorte(lang);
  const year = new Date().getFullYear();
  const isGerman = lang === DEFAULT_LOCALE;

  return (
    <footer className="bg-anthracite text-cream/70 pt-20 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-3.5">
            <Image src="/logo.png" alt={`${SITE.name} ${t.nav.logoAlt}`} width={52} height={52} className="object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-[19px] font-medium text-cream">Heilpraxis Frommholz</span>
              <span className="font-sans text-[10px] uppercase tracking-[3px] text-gold mt-0.5">{t.nav.tagline}</span>
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            {BUSINESS.address.street}<br />
            {BUSINESS.address.zip} {BUSINESS.address.city}<br />
            <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold-soft">{BUSINESS.phoneDisplay}</a><br />
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-soft">{BUSINESS.email}</a>
          </p>
          <p className="mt-3 text-sm">{BUSINESS.hours.label}</p>
          <Link href={localizedHref('/familienbereich', lang)} className="mt-4 inline-block text-sm text-gold hover:text-gold-soft underline">
            {t.footer.familyLink}
          </Link>
        </div>

        <div>
          <h2 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">{t.footer.headingLeistungen}</h2>
          <ul className="list-none space-y-2.5">
            {leistungen.filter(hasDetail).map((l) => (
              <li key={l.slug}>
                <Link href={localizedHref(`/leistungen/${l.slug}`, lang)} className="text-sm hover:text-gold-soft">
                  {l.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href={localizedHref('/leistungen', lang)} className="text-sm hover:text-gold-soft underline">
                {t.footer.allLeistungen}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">{t.footer.headingThemen}</h2>
          <ul className="list-none space-y-2.5">
            {themen.map((thema) => (
              <li key={thema.slug}>
                <Link href={localizedHref(`/themen/${thema.slug}`, lang)} className="text-sm hover:text-gold-soft">
                  {thema.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href={localizedHref('/themen', lang)} className="text-sm hover:text-gold-soft underline">
                {t.footer.allThemen}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] uppercase tracking-[2.5px] text-gold mb-4">{t.footer.headingStandorte}</h2>
          <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-2">
            {standorte.filter((s) => !s.hideInFooter).map((s) => (
              <li key={s.slug}>
                <Link href={localizedHref(`/standorte/${s.slug}`, lang)} className="text-[13px] hover:text-gold-soft">
                  {s.name}
                  {s.isHauptstandort && <span className="text-gold/80"> · {t.footer.hauptstandort}</span>}
                </Link>
              </li>
            ))}
            <li className="col-span-2 pt-1">
              <Link href={localizedHref('/standorte', lang)} className="text-[13px] hover:text-gold-soft underline">
                {t.footer.allStandorte}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row md:justify-between text-xs text-warm-gray gap-3">
        <span>© {year} {SITE.name}. {t.footer.rights}</span>
        {/* Rechtstexte und Karriere gibt es nur auf Deutsch — daher bewusst
            ohne `localizedHref`, das sonst auf die Sprachstartseite umlenkt. */}
        <div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/impressum" className="hover:text-gold-soft">{t.footer.impressum}</Link>
            <Link href="/datenschutz" className="hover:text-gold-soft">{t.footer.datenschutz}</Link>
            <Link href="/agb" className="hover:text-gold-soft">{t.footer.agb}</Link>
            <Link href="/karriere" className="hover:text-gold-soft">{t.footer.karriere}</Link>
            <a
              href="https://zuhause.heilpraxis-frommholz.de"
              target="_blank"
              rel="noopener"
              className="hover:text-gold-soft"
              title={t.footer.schichtplanerTitle}
            >
              {t.footer.schichtplaner}
              <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          </div>
          {!isGerman && t.footer.germanOnlyNote && (
            <p className="mt-3 text-xs text-warm-gray">{t.footer.germanOnlyNote}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
