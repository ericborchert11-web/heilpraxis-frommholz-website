import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { HaltungSection } from '@/components/HaltungSection';
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
      <HaltungSection />
      <Testimonials />
      <AblaufSection />
      <FaqSection />
      <KontaktSection />
    </>
  );
}
