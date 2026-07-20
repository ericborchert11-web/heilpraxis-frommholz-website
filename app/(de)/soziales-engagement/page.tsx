import type { Metadata } from 'next';
import { SozialesEngagementPage } from '@/components/pages/SozialesEngagementPage';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Soziales Engagement',
  description: 'Soziales Engagement der Heilpraxis Frommholz: getragen gemeinsam mit unserem Partnerverein Leben Pflegen Reisen e.V. Pflege als soziale Aufgabe — Herkunft, Haltung, Kooperation.',
  ...pageMeta('/soziales-engagement'),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SozialesEngagementPage lang="de" />;
}
