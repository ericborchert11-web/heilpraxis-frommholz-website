import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { A11yBar } from '@/components/A11yBar';
import { a11yInitScript } from '@/lib/a11y-init';
import { SITE } from '@/lib/site-config';

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

export const metadata: Metadata = {
  title: `${SITE.name} – Private Pflege & Beratung in Berlin`,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
      </head>
      <body className="bg-cream text-anthracite font-sans antialiased">
        <A11yBar />
        <main className="pt-12">{children}</main>
      </body>
    </html>
  );
}
