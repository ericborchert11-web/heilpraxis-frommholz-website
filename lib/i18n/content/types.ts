/** Überlagerung nach deutschem Slug. Fehlende Schlüssel bleiben deutsch. */
export type Overlay<T> = Partial<Record<string, T>>;
