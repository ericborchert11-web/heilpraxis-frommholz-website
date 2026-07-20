import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { QualitaetSection } from '@/components/QualitaetSection';
import { AblaufSection } from '@/components/AblaufSection';
import { FamilienbereichSection } from '@/components/FamilienbereichSection';
import { FaqSection } from '@/components/FaqSection';
import { KontaktSection } from '@/components/KontaktSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <QualitaetSection />
      <AblaufSection />
      <FamilienbereichSection />
      <FaqSection />
      <KontaktSection />
    </>
  );
}
