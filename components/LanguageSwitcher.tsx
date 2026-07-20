'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_LABEL, LOCALE_NAME, type Locale } from '@/lib/i18n/config';
import { deHrefFrom, localizedHref } from '@/lib/i18n/slugs';
import { getDictionary } from '@/lib/i18n/dictionaries';

/**
 * Führt auf dieselbe Seite in der Zielsprache. Der aktuelle Pfad wird dafür
 * erst auf seinen deutschen Referenzpfad zurückgerechnet. Seiten, die es in
 * der Zielsprache nicht gibt (Karriere, Rechtstexte), landen auf deren
 * Startseite — `localizedHref` regelt das.
 *
 * Bewusst echte Links statt eines Dropdowns: crawlbar, mit Tastatur bedienbar,
 * kein JavaScript nötig, um zu funktionieren.
 */
export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? '/';
  const t = getDictionary(lang);
  const dePath = deHrefFrom(pathname, lang);

  return (
    // `self-stretch`/`items-stretch`: die Links füllen die vorhandene
    // Zeilenhöhe der Leiste, vergrößern sie aber nicht — die Leistenhöhe ist
    // fix, weil SiteShell Nav und Inhalt daran ausrichtet.
    <div
      className="flex items-stretch self-stretch gap-0 sm:gap-1"
      aria-label={t.meta.languageSwitcherLabel}
      role="group"
    >
      {LOCALES.map((target, i) => {
        const active = target === lang;
        return (
          <span key={target} className="flex items-stretch">
            {/* Trenner kosten auf schmalen Viewports zu viel Platz. */}
            {i > 0 && <span aria-hidden="true" className="hidden sm:flex sm:items-center px-1 text-cream/30">·</span>}
            <Link
              href={localizedHref(dePath, target)}
              hrefLang={target}
              lang={target}
              aria-current={active ? 'true' : undefined}
              className={`flex items-center px-1 text-[11px] tracking-normal sm:text-xs sm:tracking-wider ${
                active
                  ? 'text-gold font-medium'
                  : 'text-cream/70 hover:text-gold-soft transition'
              }`}
            >
              <span className="sr-only">{LOCALE_NAME[target]}</span>
              <span aria-hidden="true">{LOCALE_LABEL[target]}</span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}
