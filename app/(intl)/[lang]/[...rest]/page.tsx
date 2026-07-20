import { notFound } from 'next/navigation';

/**
 * Gegenstück zum deutschen Catch-all: fängt nicht zugeordnete Pfade unterhalb
 * eines gültigen Sprachpräfixes ab, damit sie im jeweiligen Root-Layout landen
 * statt im deutschen. Ohne diese Route fällt `/en/unsinn` auf den deutschen
 * `[...rest]`-Catch-all durch und liefert `<html lang="de">`.
 *
 * Der 404-Text selbst kommt aus dem Wörterbuch, ist also unter `/en` englisch.
 */
export default function CatchAll(): never {
  notFound();
}
