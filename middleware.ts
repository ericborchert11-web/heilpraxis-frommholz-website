import { NextResponse, type NextRequest } from 'next/server';

/**
 * Die Heilpraxis bietet keine 1:1-Betreuung im Krankenhaus mehr an — dieses
 * Feld liegt beim gemeinnützigen Verein Leben Pflegen Reisen e.V. Die vier
 * zugehörigen Seiten sind ersatzlos entfallen.
 *
 * 410 statt 404, damit Suchmaschinen sie zügig aus dem Index nehmen, statt
 * es monatelang weiter zu versuchen. Bewusst keine Weiterleitung: Es gibt
 * keine Seite, die dasselbe verspricht.
 */
const ENTFERNT = new Set([
  '/leistungen/sitzwachen-berlin',
  '/leistungen/hospiz-sitzwachen',
  '/leistungen/klinik-begleitung-berlin',
  '/themen/krankenhaus-begleitung',
  '/en/services/bedside-companion-berlin',
  '/en/services/hospice-companion-care',
  '/en/services/hospital-companion-berlin',
  '/en/guides/hospital-support',
  '/es/servicios/acompanamiento-al-paciente-berlin',
  '/es/servicios/acompanamiento-en-hospicio',
  '/es/servicios/acompanamiento-hospitalario-berlin',
  '/es/guias/acompanamiento-hospitalario',
  '/it/servizi/assistenza-al-capezzale-berlino',
  '/it/servizi/accompagnamento-in-hospice',
  '/it/servizi/accompagnamento-ospedaliero-berlino',
  '/it/guide/accompagnamento-ospedaliero',
]);

export function middleware(request: NextRequest) {
  const pfad = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  if (ENTFERNT.has(pfad)) {
    return new NextResponse(null, { status: 410 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/leistungen/:slug', '/themen/:slug', '/:lang(en|es|it)/:segment/:slug'],
};
