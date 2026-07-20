'use client';

import { useState } from 'react';
import { BUSINESS } from '@/lib/site-config';
import type { Locale } from '@/lib/i18n/config';

type Size = 'normal' | 'large' | 'xlarge';

export function A11yBar({ lang }: { lang: Locale }) {
  // lang wird ab Etappe 1 / Aufgabe 7 fuer die Uebersetzung gebraucht.
  void lang;
  const [size, setSize] = useState<Size>(() =>
    typeof window !== 'undefined'
      ? ((localStorage.getItem('hpf:a11y:size') as Size | null) ?? 'normal')
      : 'normal'
  );
  const [contrast, setContrast] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('hpf:a11y:contrast') === '1' : false
  );

  const applySize = (next: Size) => {
    const root = document.documentElement;
    root.classList.remove('a11y-large', 'a11y-xlarge');
    if (next === 'large') root.classList.add('a11y-large');
    if (next === 'xlarge') root.classList.add('a11y-xlarge');
    localStorage.setItem('hpf:a11y:size', next);
    setSize(next);
  };

  const toggleContrast = () => {
    const next = !contrast;
    document.documentElement.classList.toggle('a11y-contrast', next);
    localStorage.setItem('hpf:a11y:contrast', next ? '1' : '0');
    setContrast(next);
  };

  const btnBase =
    'border border-cream/20 px-2.5 py-1 text-xs font-normal tracking-wider rounded-sm transition hover:border-gold hover:text-gold-soft';
  const btnActive = 'bg-gold !text-anthracite !border-gold';

  return (
    <div className="fixed inset-x-0 top-0 z-[200] flex items-center justify-between bg-anthracite px-6 py-2 text-cream text-xs border-b border-gold">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex items-center gap-2.5 font-normal tracking-wide hover:text-gold-soft"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-gold">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        {BUSINESS.phoneDisplay}
      </a>
      <div className="flex items-center gap-1.5">
        <button onClick={() => applySize('normal')} className={`${btnBase} ${size === 'normal' ? btnActive : ''}`} aria-label="Schriftgröße normal" aria-pressed={size === 'normal'}>A</button>
        <button onClick={() => applySize('large')} className={`${btnBase} ${size === 'large' ? btnActive : ''}`} aria-label="Schriftgröße größer" aria-pressed={size === 'large'}>A+</button>
        <button onClick={() => applySize('xlarge')} className={`${btnBase} ${size === 'xlarge' ? btnActive : ''}`} aria-label="Schriftgröße sehr groß" aria-pressed={size === 'xlarge'}>A++</button>
        <button onClick={toggleContrast} className={`${btnBase} ${contrast ? btnActive : ''}`} aria-label="Hochkontrast umschalten" aria-pressed={contrast}>Kontrast</button>
      </div>
    </div>
  );
}
