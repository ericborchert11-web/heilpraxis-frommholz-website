import { notFound } from 'next/navigation';

/**
 * Gegenstück zum deutschen Catch-all: fängt nicht zugeordnete Pfade unterhalb
 * eines gültigen Sprachpräfixes ab, damit sie im jeweiligen Root-Layout landen
 * statt im deutschen. Ohne diese Route fällt `/en/unsinn` auf den deutschen
 * `[...rest]`-Catch-all durch und liefert `<html lang="de">`.
 *
 * Wirkt auf Layout und `<html lang>`; der 404-Text selbst ist noch überall
 * deutsch, weil `NotFoundPage` die `lang`-Prop erst ab Aufgabe 12 auswertet.
 */
export default function CatchAll(): never {
  notFound();
}
