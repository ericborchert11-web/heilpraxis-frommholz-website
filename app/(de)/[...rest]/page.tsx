import { notFound } from 'next/navigation';

/**
 * Fängt alle nicht zugeordneten Pfade ab, damit sie im deutschen Root-Layout
 * landen und `not-found.tsx` mit Navigation und Footer gerendert wird.
 * Ohne diese Route zeigt Next bei mehreren Root-Layouts seine nackte
 * Standard-404 — siehe Aufgabe 4.
 */
export default function CatchAll(): never {
  notFound();
}
