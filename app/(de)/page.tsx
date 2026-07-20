import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';

// Steht bewusst hier statt im Root-Layout: dort galt es auch für die
// 404-Seite und widersprach Nexts automatischem `noindex`. Alle übrigen
// deutschen Seiten setzen `robots` ohnehin selbst.
export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function Page() {
  return <HomePage lang="de" />;
}
