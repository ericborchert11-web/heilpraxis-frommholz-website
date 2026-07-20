import type { Metadata } from 'next';
import { FamilienbereichPage } from '@/components/pages/FamilienbereichPage';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Familienbereich — geschützter Online-Zugang für Angehörige',
  description:
    'Als Angehörige jederzeit im Bild: Dienstpläne, Rechnungen und Pflegedokumentation im geschützten Familienbereich. Für alle Klient:innen der Heilpraxis Frommholz inklusive.',
  ...pageMeta('/familienbereich'),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <FamilienbereichPage lang="de" />;
}
