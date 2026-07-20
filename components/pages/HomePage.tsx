import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { LeistungenGrid } from '@/components/LeistungenGrid';
import { QualitaetSection } from '@/components/QualitaetSection';
import { AblaufSection } from '@/components/AblaufSection';
import { FamilienbereichSection } from '@/components/FamilienbereichSection';
import { FaqSection } from '@/components/FaqSection';
import { KontaktSection } from '@/components/KontaktSection';
import type { Locale } from '@/lib/i18n/config';

export function HomePage({ lang }: { lang: Locale }) {
  return (
    <>
      <Hero lang={lang} />
      <TrustStrip lang={lang} />
      <LeistungenGrid lang={lang} />
      <QualitaetSection lang={lang} />
      <AblaufSection lang={lang} />
      <FamilienbereichSection lang={lang} />
      <FaqSection lang={lang} />
      <KontaktSection lang={lang} />
    </>
  );
}
