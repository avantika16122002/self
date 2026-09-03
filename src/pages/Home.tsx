import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Bug, Database, PenLine, Zap, ShieldCheck, Eye, Cpu, Layers, MessageSquare, Wrench } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import ServiceCard from '@/components/cards/ServiceCard';
import ProjectCard from '@/components/cards/ProjectCard';
import CTASection from '@/components/sections/CTASection';
import { services, projects, type ProjectItem } from '@/data/content';
import CaseStudyModal from '@/components/CaseStudyModal';

const trustItems = [
  { icon: Code, label: 'Software Development' },
  { icon: Bug, label: 'Bug Fixing' },
  { icon: Zap, label: 'Automation' },
  { icon: Database, label: 'Data Support' },
  { icon: PenLine, label: 'Content & Translation' },
  { icon: Wrench, label: 'Quick Digital Tasks' },
];

const benefits = [
  { icon: ShieldCheck, title: 'Reliable Delivery', description: 'Clear deadlines and professional delivery.' },
  { icon: Eye, title: 'Attention to Detail', description: 'Every task is reviewed before delivery.' },
  { icon: Cpu, title: 'Technical Expertise', description: 'Strong foundation in software development and backend technologies.' },
  { icon: Layers, title: 'Flexible Services', description: 'From quick tasks to complete projects.' },
  { icon: MessageSquare, title: 'Clear Communication', description: 'Simple, direct and professional communication.' },
  { icon: Wrench, title: 'Practical Solutions', description: 'Focus on solving the actual problem rather than overcomplicating it.' },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background visuals */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-600/5 blur-[120px]" />

        <div className="container-page relative">
          <div className="max-w-4xl">
            <Reveal>
              <Badge variant="accent" className="mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                AVAILABLE FOR FREELANCE PROJECTS
              </Badge>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl text-balance">
                Digital Work.{' '}
                <span className="text-gradient-accent">Solved.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl text-balance">
                Software development, debugging, automation, data support and content services — delivered accurately, professionally and on time.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button to="/contact" size="lg">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/work" size="lg" variant="secondary">
                  View My Work
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/[0.06] bg-ink-900/50">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {trustItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <item.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <span className="text-xs font-medium text-ink-300">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="One Studio. Multiple Digital Solutions."
            description="Whether you need a developer, a problem solver, a data assistant or someone to handle a digital task, DevAssist Studio helps you get it done."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <ServiceCard {...service} delay={i * 80} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY DEVASSIST */}
      <section className="border-y border-white/[0.06] bg-ink-900/30">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="Why DevAssist"
              title="Why Clients Choose DevAssist"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 60}>
                <div className="premium-card p-6 h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <benefit.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected Work"
            description="A selection of technical, automation, data and digital projects."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onViewCaseStudy={setSelectedProject} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Button to="/work" variant="secondary" size="md">
              View All Work
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-white/[0.06] bg-ink-900/30">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="Process"
              title="How It Works"
              description="A simple, transparent process from first message to final delivery."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Tell Me What You Need', desc: 'Send your task, problem or project requirements.' },
              { num: '02', title: 'Get a Clear Plan', desc: 'Receive an understanding of the work, timeline and expected deliverables.' },
              { num: '03', title: 'Work Gets Done', desc: 'Development, research, data processing, writing or task completion.' },
              { num: '04', title: 'Review & Delivery', desc: 'You review the result and receive the final deliverables.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="relative h-full">
                  <div className="premium-card h-full p-6">
                    <span className="font-display text-3xl font-bold text-accent-500/30">{step.num}</span>
                    <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Button to="/contact" size="md">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple tasks start small. Complex projects are quoted individually."
            description="Every project is different. Get a quote based on your specific needs."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: 'Quick Task',
              for: ['Small fixes', 'Data entry', 'Typing', 'Formatting', 'Research', 'File conversion'],
              cta: 'Get a Quote',
              link: '/contact',
              featured: false,
            },
            {
              name: 'Standard Project',
              for: ['Automation', 'Data cleaning', 'Scripts', 'Small web features', 'API work', 'Content projects'],
              cta: 'Discuss Project',
              link: '/contact',
              featured: true,
            },
            {
              name: 'Custom Solution',
              for: ['Backend systems', 'Web applications', 'Complex automation', 'Large data tasks', 'Long-term support'],
              cta: 'Request Custom Quote',
              link: '/contact',
              featured: false,
            },
          ].map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                className={`relative h-full rounded-2xl border p-7 transition-all duration-300 ${
                  pkg.featured
                    ? 'border-accent-500/30 bg-accent-500/[0.04] -translate-y-2'
                    : 'border-white/[0.06] bg-ink-850/50 hover:border-white/[0.12]'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
                <ul className="mt-5 space-y-3">
                  {pkg.for.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ink-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button to={pkg.link} size="md" variant={pkg.featured ? 'primary' : 'secondary'} className="w-full">
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
