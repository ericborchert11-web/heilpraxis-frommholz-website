'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site-config';

const LINKS = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#haltung', label: 'Unsere Haltung' },
  { href: '/#ablauf', label: 'So läuft es' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-[38px] z-[100] flex items-center justify-between px-6 md:px-12 bg-cream/95 backdrop-blur-md border-b border-anthracite/5 transition-all duration-300 ${
        scrolled ? 'h-[68px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]' : 'h-[84px]'
      }`}
    >
      <Link href="/" className="flex items-center gap-3.5 no-underline">
        <Image src="/logo.png" alt={`${SITE.name} Wappen`} width={56} height={56} className="shrink-0 object-contain" priority />
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[22px] font-medium text-anthracite tracking-wide">Heilpraxis Frommholz</span>
          <span className="font-sans text-[10px] font-normal uppercase tracking-[3px] text-gold-deep mt-0.5">Pflege · Beratung · Begleitung</span>
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {LINKS.map((l) => (
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
            href="/#kontakt"
            className="bg-anthracite text-cream px-5 py-2.5 rounded-sm font-sans text-[13px] uppercase tracking-[1.2px] hover:bg-gold-deep transition-colors"
          >
            Kontakt
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menü öffnen"
        aria-expanded={open}
      >
        <span className={`block h-[2px] w-6 bg-anthracite transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-[2px] w-6 bg-anthracite transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-[2px] w-6 bg-anthracite transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {open && (
        <ul className="md:hidden absolute left-0 right-0 top-full flex flex-col items-stretch bg-cream border-b border-anthracite/10 list-none">
          {LINKS.map((l) => (
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
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="block px-6 py-4 bg-anthracite text-cream font-sans text-sm uppercase tracking-[1.5px]"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
