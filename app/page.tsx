import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { HaltungSection } from '@/components/HaltungSection';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LeistungenGrid />
      <HaltungSection />
      <Testimonials />
    </>
  );
}
