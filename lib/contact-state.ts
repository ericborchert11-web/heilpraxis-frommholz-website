/**
 * Zustandstyp des Kontaktformulars — bewusst NICHT in der Server-Action.
 *
 * Eine Datei mit `'use server'` darf ausschließlich async-Funktionen
 * exportieren. Solange `initialContactState` dort stand, lief zwar der Build
 * durch, das Absenden schlug in Produktion aber mit HTTP 500 fehl
 * („A 'use server' file can only export async functions, found object").
 * Typ und Startwert liegen deshalb hier und werden von beiden Seiten
 * importiert.
 */

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<'name' | 'contact' | 'subject' | 'consent', string>>;
};

export const initialContactState: ContactState = { status: 'idle' };
