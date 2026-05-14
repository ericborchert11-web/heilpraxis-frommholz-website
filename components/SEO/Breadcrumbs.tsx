import Link from 'next/link';
import { Fragment } from 'react';
import type { Crumb } from './BreadcrumbJsonLd';

export function Breadcrumbs({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <nav aria-label="Brotkrumen" className="font-sans text-[12px] text-anthracite-light">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <Fragment key={c.href}>
              <li>
                {isLast ? (
                  <span aria-current="page" className="text-anthracite">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-gold-deep">
                    {c.name}
                  </Link>
                )}
              </li>
              {!isLast && <li className="text-gold/50">/</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
