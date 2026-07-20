import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { A11yBar } from '@/components/A11yBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MedicalBusinessJsonLd } from '@/components/SEO/JsonLd';
import { a11yInitScript } from '@/lib/a11y-init';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * Gemeinsames HTML-Gerüst beider Root-Layouts. `<html lang>` kann nur in
 * einem Root-Layout gesetzt werden — darum gibt es zwei davon (Route-Groups
 * `(de)` und `(intl)`), die beide diese Komponente rendern.
 */
export function SiteShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const t = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
        <MedicalBusinessJsonLd />
      </head>
      <body className="bg-cream text-anthracite font-sans antialiased">
        <a href="#main" className="skip-link">{t.meta.skipLink}</a>
        <A11yBar lang={lang} />
        <Nav lang={lang} />
        <main id="main" className="pt-[122px]">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
