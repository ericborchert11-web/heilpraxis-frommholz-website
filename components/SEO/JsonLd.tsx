import { BUSINESS, SITE, SERVICE_AREAS } from '@/lib/site-config';

/**
 * `</script>`-safe Stringify. Wenn ein Wert versehentlich `</script>` enthielte,
 * würde der Browser den Script-Tag früh schließen — daher escapen.
 */
function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * Globales Business-Schema. Wird im Root-Layout im <head> gerendert,
 * damit jede Seite das Business als @id referenzieren kann.
 *
 * @type ist absichtlich ein Array: HomeHealthCareService ist der präzise
 * Typ für einen Pflegedienst und triggert in Google den richtigen lokalen
 * Cluster (Krankenpflege, nicht Heilkundler). LocalBusiness als zweiter
 * Eintrag stellt sicher, dass auch Parser, die HomeHealthCareService nicht
 * kennen, das Geschäft weiterhin als lokales Unternehmen erkennen.
 */
export function MedicalBusinessJsonLd() {
  const sameAs = SITE.sameAs.filter((u) => u.length > 0);
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeHealthCareService'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: 'Heilpraxis Frommholz Berlin',
    image: `${SITE.url}${SITE.defaultOgImage}`,
    url: SITE.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetLong,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: SERVICE_AREAS.map((a) => ({ '@type': 'City', name: a })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    founder: {
      '@type': 'Person',
      name: BUSINESS.owner,
      jobTitle: BUSINESS.jobTitle,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(data) }}
    />
  );
}

type ServiceJsonLdProps = {
  serviceName: string;
  serviceDescription: string;
  areaServed?: readonly string[];
};

export function ServiceJsonLd({ serviceName, serviceDescription, areaServed }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE.url}/#business`,
    },
    areaServed: (areaServed ?? ['Berlin']).map((a) => ({ '@type': 'City', name: a })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(data) }}
    />
  );
}
