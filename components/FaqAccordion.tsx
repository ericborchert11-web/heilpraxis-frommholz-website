import type { FaqItem } from '@/lib/faq-global';

/**
 * Accordion-FAQ als native <details>-Elemente. Kein JS nötig, vollständig
 * tastaturbedienbar, gut für SEO (Text immer im DOM verfügbar).
 */
export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <ul className="mt-10 list-none divide-y divide-gold/20 border-y border-gold/20">
      {items.map((item, i) => (
        <li key={i}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-anthracite [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-lg leading-snug">{item.question}</span>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-gold-deep transition-transform group-open:rotate-45"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="pb-6 pr-10 text-[15px] leading-relaxed text-anthracite-soft">
              {item.answer}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
