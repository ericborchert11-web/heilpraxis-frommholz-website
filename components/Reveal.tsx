'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'div' | 'section' | 'p' | 'h1' | 'h2' | 'h3' | 'span';
};

export function Reveal({ children, delay, className = '', as = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  const classes = ['reveal', delay ? `delay-${delay}` : '', visible ? 'visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={classes}>
      {children}
    </Tag>
  );
}
