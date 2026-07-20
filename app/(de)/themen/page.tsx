import type { Metadata } from 'next';
import { ThemenPage } from '@/components/pages/ThemenPage';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Themen',
  description: 'Pflegegrad, Verhinderungspflege, MDK-Begutachtung, Demenz, Palliativ — Hintergrundwissen für Familien in Berlin, kompakt und ehrlich.',
  ...pageMeta('/themen'),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ThemenPage lang="de" />;
}
