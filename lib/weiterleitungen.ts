/**
 * Sitzwachen und begleitete Reisen sind Sache des gemeinnützigen Vereins
 * Leben Pflegen Reisen e.V., nicht der Heilpraxis. Damit beide Domains sich
 * nicht länger auf denselben Suchanfragen gegenseitig ausbieten, gibt die
 * Heilpraxis diese Adressen an den Verein ab.
 *
 * 301 statt 410: Eine dauerhafte Weiterleitung überträgt die aufgebaute
 * Ranking-Kraft an das Ziel, ein 410 wirft sie weg. Die vier Sprachfassungen
 * zeigen auf dieselbe deutsche Vereinsseite — der Verein hat keine
 * Übersetzungen, und ein Sprachbruch ist besser als eine tote Adresse.
 *
 * Absichtlich getrennt von `proxy.ts`: Die Proxy-Datei soll laut Next-16-Doku
 * genau eine Funktion plus `config` exportieren.
 */
const VEREIN = 'https://lebenpflegenreisen.de';

export const WEITERLEITUNGEN: Record<string, string> = {
  // Sitzwachen — das Angebot im Überblick
  '/leistungen/sitzwachen-berlin': `${VEREIN}/sitzwachen/`,
  '/en/services/bedside-companion-berlin': `${VEREIN}/sitzwachen/`,
  '/es/servicios/acompanamiento-al-paciente-berlin': `${VEREIN}/sitzwachen/`,
  '/it/servizi/assistenza-al-capezzale-berlino': `${VEREIN}/sitzwachen/`,

  // Hospiz- und Sterbebegleitung
  '/leistungen/hospiz-sitzwachen': `${VEREIN}/beistand-lebensende/`,
  '/en/services/hospice-companion-care': `${VEREIN}/beistand-lebensende/`,
  '/es/servicios/acompanamiento-en-hospicio': `${VEREIN}/beistand-lebensende/`,
  '/it/servizi/accompagnamento-in-hospice': `${VEREIN}/beistand-lebensende/`,

  // Begleitung in der Klinik
  '/leistungen/klinik-begleitung-berlin': `${VEREIN}/sitzwache-krankenhaus/`,
  '/en/services/hospital-companion-berlin': `${VEREIN}/sitzwache-krankenhaus/`,
  '/es/servicios/acompanamiento-hospitalario-berlin': `${VEREIN}/sitzwache-krankenhaus/`,
  '/it/servizi/accompagnamento-ospedaliero-berlino': `${VEREIN}/sitzwache-krankenhaus/`,

  '/themen/krankenhaus-begleitung': `${VEREIN}/sitzwache-krankenhaus/`,
  '/en/guides/hospital-support': `${VEREIN}/sitzwache-krankenhaus/`,
  '/es/guias/acompanamiento-hospitalario': `${VEREIN}/sitzwache-krankenhaus/`,
  '/it/guide/accompagnamento-ospedaliero': `${VEREIN}/sitzwache-krankenhaus/`,

  // Reisebegleitung
  '/leistungen/reisebegleitung-senioren': `${VEREIN}/betreute-seniorenreisen/`,
  '/en/services/senior-travel-companion': `${VEREIN}/betreute-seniorenreisen/`,
  '/es/servicios/acompanante-de-viaje-para-mayores': `${VEREIN}/betreute-seniorenreisen/`,
  '/it/servizi/accompagnatore-di-viaggio-anziani': `${VEREIN}/betreute-seniorenreisen/`,

  // Nachtwachen
  '/leistungen/nachtwachen-berlin': `${VEREIN}/nachtwache-krankenhaus/`,
  '/en/services/night-care-berlin': `${VEREIN}/nachtwache-krankenhaus/`,
  '/es/servicios/atencion-nocturna-berlin': `${VEREIN}/nachtwache-krankenhaus/`,
  '/it/servizi/assistenza-notturna-berlino': `${VEREIN}/nachtwache-krankenhaus/`,

  // Verhinderungspflege — Ratgeber
  '/themen/verhinderungspflege': `${VEREIN}/verhinderungspflege/`,
  '/en/guides/respite-care': `${VEREIN}/verhinderungspflege/`,
  '/es/guias/cuidado-de-respiro': `${VEREIN}/verhinderungspflege/`,
  '/it/guide/assistenza-sostitutiva': `${VEREIN}/verhinderungspflege/`,

  // Demenz
  '/themen/demenz-begleitung': `${VEREIN}/sitzwache-demenz/`,
  '/en/guides/dementia-support': `${VEREIN}/sitzwache-demenz/`,
  '/es/guias/acompanamiento-en-demencia': `${VEREIN}/sitzwache-demenz/`,
  '/it/guide/accompagnamento-nella-demenza': `${VEREIN}/sitzwache-demenz/`,

  // Palliativ zu Hause
  '/themen/palliativ-zuhause': `${VEREIN}/beistand-lebensende/`,
  '/en/guides/palliative-care-at-home': `${VEREIN}/beistand-lebensende/`,
  '/es/guias/cuidados-paliativos-en-casa': `${VEREIN}/beistand-lebensende/`,
  '/it/guide/cure-palliative-a-domicilio': `${VEREIN}/beistand-lebensende/`,
};
