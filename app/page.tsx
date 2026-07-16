import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { QualitaetSection } from '@/components/QualitaetSection';
import { Testimonials } from '@/components/Testimonials';
import { AblaufSection } from '@/components/AblaufSection';
import { FaqSection } from '@/components/FaqSection';
import { KontaktSection } from '@/components/KontaktSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <QualitaetSection />
      <Testimonials />
      <AblaufSection />
      <FaqSection />
      <KontaktSection />
    </>
  );
}
