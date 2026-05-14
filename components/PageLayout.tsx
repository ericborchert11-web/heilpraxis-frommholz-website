import type { ReactNode } from 'react';
import { Breadcrumbs } from './SEO/Breadcrumbs';
import { BreadcrumbJsonLd, type Crumb } from './SEO/BreadcrumbJsonLd';

type Props = {
  title: string;
  lead?: string;
  crumbs: readonly Crumb[];
  children: ReactNode;
};

/**
 * Standard-Wrapper für statische Unterseiten. Liefert Breadcrumbs,
 * BreadcrumbList-JSON-LD, H1 und einen `prose`-artigen Container für den
 * Body-Inhalt.
 */
export function PageLayout({ title, lead, crumbs, children }: Props) {
  return (
    <article className="px-6 md:px-12 py-16 max-w-3xl mx-auto scroll-mt-32">
      <Breadcrumbs crumbs={crumbs} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-light text-anthracite">
        {title}
      </h1>
      {lead && (
        <p className="mt-5 text-[17px] leading-relaxed text-anthracite-soft">{lead}</p>
      )}
      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-anthracite-soft">
        {children}
      </div>
    </article>
  );
}
