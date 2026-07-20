import { NotFoundPage } from '@/components/pages/NotFoundPage';

export default function NotFound() {
  // In not-found.tsx sind keine params verfügbar. Englisch als sinnvollste
  // Näherung für alle nicht-deutschen Fassungen.
  return <NotFoundPage lang="en" />;
}
