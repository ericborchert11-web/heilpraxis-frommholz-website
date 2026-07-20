import type { Metadata } from 'next';
import { StandortePage } from '@/components/pages/StandortePage';
import { pageMeta } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Standorte in Berlin',
  description: 'Wo wir pflegen in Berlin — Schwerpunkte in Charlottenburg, Wilmersdorf, Zehlendorf, Grunewald und Mitte. Überblick aller Stadtteile.',
  ...pageMeta('/standorte'),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <StandortePage lang="de" />;
}
