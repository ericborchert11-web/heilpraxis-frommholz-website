import { NextResponse, type NextRequest } from 'next/server';
import { WEITERLEITUNGEN } from '@/lib/weiterleitungen';

/**
 * Heißt `proxy` und nicht mehr `middleware`: Next.js 16 hat die Konvention
 * umbenannt, die alte Form ist deprecated.
 */
export function proxy(request: NextRequest) {
  const pfad = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  const ziel = WEITERLEITUNGEN[pfad];
  if (ziel) {
    return NextResponse.redirect(ziel, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/leistungen/:slug', '/themen/:slug', '/:lang(en|es|it)/:segment/:slug'],
};
