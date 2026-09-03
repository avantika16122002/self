import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  skills: string[];
  cta: string;
  link: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  skills,
  cta,
  link,
  delay = 0,
}: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon] || Icons.Code;

  return (
    <div
      className="premium-card group flex flex-col p-6 md:p-7"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 transition-all duration-300 group-hover:bg-accent-500/15 group-hover:scale-105">
        <IconComponent className="h-6 w-6 text-accent-400" />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.slice(0, 6).map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-ink-300"
          >
            {skill}
          </span>
        ))}
        {skills.length > 6 && (
          <span className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-ink-400">
            +{skills.length - 6} more
          </span>
        )}
      </div>

      <div className="mt-auto pt-6">
        <Link
          to={link}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors group/link"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
