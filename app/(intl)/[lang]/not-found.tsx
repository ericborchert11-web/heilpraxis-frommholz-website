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
  // Achtung: `NotFoundPage` wertet die Prop derzeit noch gar nicht aus und
  // zeigt in jeder Sprache deutschen Text (siehe Aufgabe 12). Bis dahin ist
  // dieses `lang="en"` nur die Absichtserklärung, nicht die Wirkung.
  return <NotFoundPage lang="en" />;
}
