import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-2 text-sm font-medium text-accent-400 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-accent-500/50" />
          {eyebrow}
          <span className="h-px w-8 bg-accent-500/50" />
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
