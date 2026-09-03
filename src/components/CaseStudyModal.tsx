import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '@/data/content';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />
      <div
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/[0.08] bg-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-ink-900/95 backdrop-blur-xl px-6 py-4 md:px-8">
          <div>
            <span className="text-xs font-medium text-accent-400">{project.category}</span>
            <h2 className="text-xl font-bold text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-8 p-6 md:p-8">
          {/* Visual placeholder */}
          <div className="relative h-40 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-ink-800 to-ink-850">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs text-ink-500 tracking-wider uppercase">{project.technology}</span>
            </div>
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-400">Problem</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.problem}</p>
          </div>

          {/* Approach */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-400">Approach</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.approach}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-400">Solution</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.solution}</p>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-400">Technology</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techList.map((tech) => (
                <span key={tech} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-ink-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-400">Key Features</h3>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent-400">Project Outcome</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.result}</p>
          </div>

          {/* Links */}
          <div className="flex gap-3 border-t border-white/[0.06] pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
