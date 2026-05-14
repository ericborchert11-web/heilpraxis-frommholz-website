import type { IconKey } from '@/lib/leistungen';

type Props = { iconKey: IconKey; className?: string };

export function LeistungIcon({ iconKey, className = '' }: Props) {
  const common = {
    viewBox: '0 0 56 56',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (iconKey) {
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="28" cy="28" r="20" />
          <path d="M28 16 L28 28 L36 32" />
        </svg>
      );
    case 'home':
      return (
        <svg {...common}>
          <path d="M14 42 L14 22 L28 12 L42 22 L42 42 Z" />
          <path d="M22 42 L22 30 L34 30 L34 42" />
        </svg>
      );
    case 'rotate':
      return (
        <svg {...common}>
          <path d="M10 28 C10 18 18 10 28 10 C38 10 46 18 46 28" />
          <path d="M10 28 L10 38 C10 42 14 46 18 46 L38 46 C42 46 46 42 46 38 L46 28" />
        </svg>
      );
    case 'travel':
      return (
        <svg {...common}>
          <path d="M8 38 L28 18 L48 38" />
          <path d="M14 32 L14 46 L42 46 L42 32" />
          <path d="M24 46 L24 36 L32 36 L32 46" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common}>
          <rect x="12" y="14" width="32" height="28" rx="2" />
          <line x1="18" y1="22" x2="38" y2="22" />
          <line x1="18" y1="28" x2="34" y2="28" />
          <line x1="18" y1="34" x2="36" y2="34" />
        </svg>
      );
    case 'people':
      return (
        <svg {...common}>
          <circle cx="20" cy="22" r="6" />
          <circle cx="36" cy="22" r="6" />
          <path d="M10 42 C10 36 14 32 20 32 C26 32 30 36 30 42" />
          <path d="M26 42 C26 36 30 32 36 32 C42 32 46 36 46 42" />
        </svg>
      );
  }
}
