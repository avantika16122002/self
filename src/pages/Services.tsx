import { Link } from 'react-router-dom';
import { Code, Bug, Database, PenLine, Zap, ArrowRight, type LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  services: { name: string; description: string; deliverables: string[] }[];
}

const categories: ServiceCategory[] = [
  {
    icon: Code,
    title: 'Technical',
    services: [
      { name: 'Python Development', description: 'Custom Python applications, scripts and backend logic.', deliverables: ['Python scripts', 'Backend modules', 'APIs'] },
      { name: 'Django Development', description: 'Full-stack Django web applications with database integration.', deliverables: ['Django projects', 'Web apps', 'Admin panels'] },
      { name: 'FastAPI Development', description: 'Modern, fast APIs with automatic documentation.', deliverables: ['REST APIs', 'API documentation', 'Microservices'] },
      { name: 'REST APIs', description: 'Design and build RESTful APIs for any application.', deliverables: ['API endpoints', 'Documentation', 'Authentication'] },
      { name: 'Backend Development', description: 'Server-side logic, database design and system architecture.', deliverables: ['Backend systems', 'Database schemas', 'Server logic'] },
      { name: 'Database Development', description: 'PostgreSQL and MongoDB database design and optimization.', deliverables: ['Schemas', 'Queries', 'Migrations'] },
      { name: 'Bug Fixing', description: 'Identify and fix bugs in existing codebases.', deliverables: ['Fixed code', 'Bug reports', 'Test cases'] },
      { name: 'Debugging', description: 'Deep debugging of Python, Django and API issues.', deliverables: ['Root cause analysis', 'Fixes', 'Documentation'] },
      { name: 'Automation', description: 'Automate repetitive tasks and workflows.', deliverables: ['Automation scripts', 'Pipelines', 'Schedulers'] },
      { name: 'Web Scraping', description: 'Extract data from websites at scale.', deliverables: ['Scrapers', 'Cleaned data', 'APIs'] },
      { name: 'API Integration', description: 'Connect third-party APIs and services.', deliverables: ['Integrations', 'Webhooks', 'Adapters'] },
      { name: 'Docker', description: 'Containerize applications for consistent deployment.', deliverables: ['Dockerfiles', 'Compose files', 'Images'] },
      { name: 'Cloud Deployment', description: 'Deploy applications to AWS and cloud platforms.', deliverables: ['Deployments', 'CI/CD', 'Infrastructure'] },
    ],
  },
  {
    icon: Database,
    title: 'Data',
    services: [
      { name: 'Data Entry', description: 'Accurate data entry into any system or format.', deliverables: ['Entered data', 'Spreadsheets', 'Databases'] },
      { name: 'Data Cleaning', description: 'Clean, standardize and organize messy datasets.', deliverables: ['Clean datasets', 'Reports', 'Pipelines'] },
      { name: 'Excel', description: 'Advanced Excel formulas, formatting and automation.', deliverables: ['Spreadsheets', 'Formulas', 'Dashboards'] },
      { name: 'Google Sheets', description: 'Google Sheets setup, formulas and automation.', deliverables: ['Sheets', 'Scripts', 'Templates'] },
      { name: 'PDF Conversion', description: 'Convert PDF to Word, Excel or other formats.', deliverables: ['Converted files', 'Formatted docs'] },
      { name: 'Data Collection', description: 'Gather and compile data from various sources.', deliverables: ['Collected data', 'Reports'] },
      { name: 'Web Research', description: 'Thorough online research on any topic.', deliverables: ['Research reports', 'Data sets'] },
      { name: 'Typing', description: 'Fast, accurate typing and transcription.', deliverables: ['Typed documents', 'Transcripts'] },
      { name: 'Document Formatting', description: 'Professional formatting for any document.', deliverables: ['Formatted docs', 'Templates'] },
    ],
  },
  {
    icon: PenLine,
    title: 'Content',
    services: [
      { name: 'Script Writing', description: 'Engaging scripts for videos and presentations.', deliverables: ['Scripts', 'Outlines'] },
      { name: 'YouTube Scripts', description: 'Structured YouTube video scripts with hooks and CTAs.', deliverables: ['Video scripts', 'Storylines'] },
      { name: 'Blog Writing', description: 'SEO-friendly blog content and articles.', deliverables: ['Articles', 'Blog posts'] },
      { name: 'Proofreading', description: 'Check grammar, spelling and clarity.', deliverables: ['Proofread content', 'Edits'] },
      { name: 'Translation', description: 'Accurate translation between languages.', deliverables: ['Translated documents'] },
      { name: 'Transcription', description: 'Audio and video transcription services.', deliverables: ['Transcripts', 'Subtitles'] },
      { name: 'Content Formatting', description: 'Format content for publishing and readability.', deliverables: ['Formatted content', 'Templates'] },
    ],
  },
  {
    icon: Zap,
    title: 'Quick Tasks',
    services: [
      { name: 'Small Technical Fixes', description: 'Quick fixes for minor technical issues.', deliverables: ['Fixed issues', 'Short reports'] },
      { name: 'Online Research', description: 'Quick research on specific topics.', deliverables: ['Research summaries'] },
      { name: 'File Conversion', description: 'Convert files between formats.', deliverables: ['Converted files'] },
      { name: 'Simple Scripts', description: 'Small automation or utility scripts.', deliverables: ['Scripts'] },
      { name: 'Copy-Paste Work', description: 'Repetitive data copy-paste tasks.', deliverables: ['Compiled data'] },
      { name: 'Digital Assistance', description: 'General digital task assistance.', deliverables: ['Task completion'] },
      { name: 'Formatting', description: 'Format documents, sheets or content.', deliverables: ['Formatted files'] },
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="What Can We Help You Get Done?"
              description="From code and debugging to data, content and everyday digital tasks — explore the full range of services."
            />
          </Reveal>
        </div>
      </section>

      {categories.map((category, catIdx) => (
        <section key={category.title} className={`py-16 md:py-20 ${catIdx % 2 === 1 ? 'border-y border-white/[0.06] bg-ink-900/30' : ''}`}>
          <div className="container-page">
            <Reveal>
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                  <category.icon className="h-6 w-6 text-accent-400" />
                </div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{category.title}</h2>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, i) => (
                <Reveal key={service.name} delay={i * 50}>
                  <div className="premium-card group p-6 h-full">
                    <h3 className="text-base font-semibold text-white">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{service.description}</p>
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Deliverables</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <span key={d} className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-ink-300">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors">
                      Get a Quote
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
