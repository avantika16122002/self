import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database, Cpu, Globe, Workflow, Boxes, Plug, Terminal } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';

const techList = [
  'Python', 'Django', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis', 'Celery', 'Docker', 'AWS', 'JavaScript', 'React',
];

const buildItems = [
  { icon: Plug, title: 'API', desc: 'RESTful APIs with authentication, documentation and testing.' },
  { icon: Server, title: 'Backend System', desc: 'Server-side logic, business rules and data processing.' },
  { icon: Cpu, title: 'Dashboard', desc: 'Admin dashboards and internal management interfaces.' },
  { icon: Workflow, title: 'Automation Tool', desc: 'Automate workflows, schedules and repetitive processes.' },
  { icon: Database, title: 'Database System', desc: 'Schema design, queries, migrations and optimization.' },
  { icon: Boxes, title: 'Internal Tool', desc: 'Custom tools for teams and internal operations.' },
  { icon: Globe, title: 'Web Application', desc: 'Full-stack web apps with frontend and backend.' },
  { icon: Terminal, title: 'Integration', desc: 'Connect third-party services, APIs and platforms.' },
];

const process = [
  { num: '01', title: 'Understand', desc: 'Understand your requirements, goals and constraints.' },
  { num: '02', title: 'Plan', desc: 'Plan the architecture, timeline and deliverables.' },
  { num: '03', title: 'Build', desc: 'Build the solution with clean, maintainable code.' },
  { num: '04', title: 'Test', desc: 'Test for correctness, edge cases and performance.' },
  { num: '05', title: 'Deliver', desc: 'Deliver with documentation and support for handoff.' },
];

export default function SoftwareDevelopment() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="container-page relative">
          <Reveal>
            <Badge variant="accent" className="mb-5">
              <Code className="h-3.5 w-3.5" />
              Software Development
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-balance">
              Build. Integrate. <span className="text-gradient-accent">Automate.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-ink-300 text-balance">
              From backend systems and APIs to full web applications — DevAssist Studio builds reliable, maintainable software using modern technologies.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {techList.map((tech) => (
                <span key={tech} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-sm font-mono text-ink-200">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8">
              <Button to="/contact" size="lg">
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What I Can Build */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Capabilities" title="What I Can Build" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {buildItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="premium-card group p-6 h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 transition-transform group-hover:scale-105">
                    <item.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader eyebrow="Process" title="From Idea to Delivery" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="premium-card h-full p-6">
                <span className="font-display text-3xl font-bold text-accent-500/30">{step.num}</span>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
