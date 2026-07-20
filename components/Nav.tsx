'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site-config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedHref } from '@/lib/i18n/slugs';
import type { Locale } from '@/lib/i18n/config';

export function Nav({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Hängt an `lang`, kann darum nicht mehr auf Modulebene stehen.
  const links = [
    { href: localizedHref('/leistungen', lang), label: t.nav.leistungen },
    { href: localizedHref('/standorte', lang), label: t.nav.standorte },
    { href: localizedHref('/familienbereich', lang), label: t.nav.familienbereich },
    { href: `${localizedHref('/', lang)}#qualitaet`, label: t.nav.qualitaet },
  ];
  const kontaktHref = `${localizedHref('/', lang)}#kontakt`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-[38px] z-[100] flex items-center justify-between px-6 md:px-12 bg-cream/95 backdrop-blur-md border-b border-anthracite/5 transition-all duration-300 ${
        scrolled ? 'h-[68px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]' : 'h-[84px]'
      }`}
    >
      <Link href={localizedHref('/', lang)} className="flex items-center gap-3.5 no-underline">
        <Image src="/logo.png" alt={`${SITE.name} ${t.nav.logoAlt}`} width={56} height={56} className="shrink-0 object-contain" priority />
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[22px] font-medium text-anthracite tracking-wide">Heilpraxis Frommholz</span>
          <span className="font-sans text-[10px] font-normal uppercase tracking-[3px] text-gold-deep mt-0.5">{t.nav.tagline}</span>
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-sans text-[13px] font-normal uppercase tracking-[1.5px] text-anthracite hover:text-gold-deep transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={kontaktHref}
            className="bg-anthracite text-cream px-5 py-2.5 rounded-sm font-sans text-[13px] uppercase tracking-[1.2px] hover:bg-gold-deep transition-colors"
          >
            {t.nav.kontakt}
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className={`block h-[2px] w-6 bg-anthracite transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-[2px] w-6 bg-anthracite transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-[2px] w-6 bg-anthracite transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {open && (
        <ul id="mobile-menu" className="md:hidden absolute left-0 right-0 top-full flex flex-col items-stretch bg-cream border-b border-anthracite/10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-sans text-sm uppercase tracking-[1.5px] text-anthracite border-b border-anthracite/5 hover:bg-cream-deep"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={kontaktHref}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 bg-anthracite text-cream font-sans text-sm uppercase tracking-[1.5px]"
            >
              {t.nav.kontakt}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
