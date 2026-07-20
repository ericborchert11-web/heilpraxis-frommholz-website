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
    <div className="flex items-center gap-1" aria-label={t.meta.languageSwitcherLabel} role="group">
      {LOCALES.map((target, i) => {
        const active = target === lang;
        return (
          <span key={target} className="flex items-center">
            {i > 0 && <span aria-hidden="true" className="px-1 text-cream/30">·</span>}
            <Link
              href={localizedHref(dePath, target)}
              hrefLang={target}
              lang={target}
              aria-current={active ? 'true' : undefined}
              className={
                active
                  ? 'px-1 text-xs tracking-wider text-gold font-medium'
                  : 'px-1 text-xs tracking-wider text-cream/70 hover:text-gold-soft transition'
              }
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
