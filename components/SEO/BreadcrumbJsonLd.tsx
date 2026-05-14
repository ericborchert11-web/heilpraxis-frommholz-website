import { SITE } from '@/lib/site-config';

function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export type Crumb = { name: string; href: string };

export function BreadcrumbJsonLd({ crumbs }: { crumbs: readonly Crumb[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(data) }}
    />
  );
}
