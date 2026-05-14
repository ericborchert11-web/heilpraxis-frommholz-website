import type { FaqItem } from '@/lib/faq-global';

function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function FaqJsonLd({ items }: { items: readonly FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: i.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(data) }}
    />
  );
}
