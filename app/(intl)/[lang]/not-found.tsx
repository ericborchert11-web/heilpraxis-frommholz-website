import { NotFoundPage } from '@/components/pages/NotFoundPage';

export default function NotFound() {
  // `not-found.tsx` bekommt in Next 16 keinerlei Props — die API-Referenz sagt
  // ausdrücklich: "not-found.js or global-not-found.js components do not accept
  // any props." Die aktuelle Sprache ist hier also nicht zu ermitteln, auch
  // nicht über den `[lang]`-Parameter des umgebenden Segments.
  //
  // Deshalb fest `en` als nächstliegende Näherung für alle nicht-deutschen
  // Fassungen. Das umgebende Root-Layout setzt `<html lang>` trotzdem korrekt
  // je Sprache, weil dort params verfügbar sind.
  //
  // Praktische Folge: `/en/unsinn` zeigt die englische 404-Seite, `/es/unsinn`
  // und `/it/unsinn` ebenfalls die englische — für Spanisch und Italienisch
  // gibt es ohnehin noch kein Wörterbuch, sie fallen sonst auf Deutsch zurück.
  return <NotFoundPage lang="en" />;
}
