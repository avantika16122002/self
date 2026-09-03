import { ArrowRight, PenLine, FileText, SpellCheck, Languages, Mic, FileText as FileTextIcon, Type } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';

const contentServices = [
  { icon: FileText, name: 'YouTube Scripts', desc: 'Structured scripts with hooks and CTAs.' },
  { icon: FileText, name: 'Short-form Scripts', desc: 'Concise scripts for short-form video.' },
  { icon: FileText, name: 'Blog Content', desc: 'SEO-friendly articles and blog posts.' },
  { icon: SpellCheck, name: 'Proofreading', desc: 'Grammar, spelling and clarity checks.' },
  { icon: Languages, name: 'Translation', desc: 'Accurate translation between languages.' },
  { icon: Mic, name: 'Transcription', desc: 'Audio and video to text transcription.' },
  { icon: FileTextIcon, name: 'Product Descriptions', desc: 'Compelling descriptions for products.' },
  { icon: Type, name: 'Formatting', desc: 'Content formatting for publishing.' },
];

const scriptStructure = [
  { label: 'HOOK', desc: 'Grab attention in the first few seconds.', color: 'border-accent-500/30 bg-accent-500/5' },
  { label: 'INTRODUCTION', desc: 'Set context and introduce the topic.', color: 'border-accent-500/20 bg-accent-500/[0.03]' },
  { label: 'MAIN CONTENT', desc: 'Deliver the core value and information.', color: 'border-accent-500/15 bg-accent-500/[0.02]' },
  { label: 'CTA', desc: 'Call to action — tell the viewer what to do next.', color: 'border-accent-500/30 bg-accent-500/5' },
];

export default function ContentLanguage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="container-page relative">
          <Reveal>
            <Badge variant="accent" className="mb-5">
              <PenLine className="h-3.5 w-3.5" />
              Content & Language
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-balance">
              Words That <span className="text-gradient-accent">Work.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-ink-300 text-balance">
              Clear, engaging and professionally formatted written content — from scripts and blogs to translations and transcriptions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Services" title="Content & Language Services" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contentServices.map((service, i) => (
              <Reveal key={service.name} delay={i * 50}>
                <div className="premium-card p-6 h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <service.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample script structure */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader eyebrow="Sample Work" title="Example Script Structure" description="A clear, proven structure for engaging video content." />
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-2xl space-y-4">
            {scriptStructure.map((section, i) => (
              <div key={section.label} className={`rounded-2xl border p-6 ${section.color}`}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-accent-400">{`0${i + 1}`}</span>
                  <span className="text-sm font-bold tracking-wider text-white">{section.label}</span>
                </div>
                <p className="mt-2 text-sm text-ink-300">{section.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Discuss Content
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
