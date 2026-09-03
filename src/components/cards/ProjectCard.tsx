import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '@/data/content';

interface ProjectCardProps {
  project: ProjectItem;
  onViewCaseStudy: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onViewCaseStudy }: ProjectCardProps) {
  return (
    <div className="premium-card group flex flex-col overflow-hidden">
      {/* Visual header */}
      <div className="relative h-44 overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-ink-800 to-ink-850">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-ink-500 tracking-wider uppercase">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="rounded-md bg-accent-500/10 border border-accent-500/20 px-2.5 py-1 text-xs font-medium text-accent-400">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-xs font-mono text-ink-400">{project.technology}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{project.description}</p>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <button
            onClick={() => onViewCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
          >
            View Case Study
            <ArrowRight className="h-4 w-4" />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
