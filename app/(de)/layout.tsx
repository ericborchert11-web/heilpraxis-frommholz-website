import type { Metadata } from 'next';
import '../globals.css';
import { SiteShell } from '@/components/SiteShell';
import { SITE, pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Pflege, 1:1-Betreuung & Begleitung Berlin – ${SITE.name}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  ...pageMeta('/'),
  // Seite bewusst aus Suchmaschinen raus (25.11.2026), zusätzlich zum
  // X-Robots-Tag-Header in next.config.ts. Deckt sich mit Nexts
  // automatischem `noindex` der 404-Seite, widerspricht ihm also nicht mehr.
  robots: { index: false, follow: true },
};

export default function DeRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
