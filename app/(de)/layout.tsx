import type { Metadata } from 'next';
import '../globals.css';
import { SiteShell } from '@/components/SiteShell';
import { SITE, pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Pflege, Sitzwachen & Begleitung Berlin – ${SITE.name}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  ...pageMeta('/'),
  robots: { index: true, follow: true },
};

export default function DeRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
