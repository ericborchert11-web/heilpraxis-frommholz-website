import type { Metadata } from 'next';
import { LeistungenPage } from '@/components/pages/LeistungenPage';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: '1:1-Betreuung, Pflege für Selbstzahler, 24-Stunden-Betreuung, Pflegeberatung — die Leistungen der Heilpraxis Frommholz in Berlin.',
  ...pageMeta('/leistungen'),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LeistungenPage lang="de" />;
}
