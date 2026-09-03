import { ArrowRight, Bug, FileOutput, Table, Search, Code, FileText, Download, Type, Languages, Wrench } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';

const examples = [
  { icon: Bug, label: 'Fix a small bug' },
  { icon: FileOutput, label: 'Convert a file' },
  { icon: Table, label: 'Clean a spreadsheet' },
  { icon: Search, label: 'Research information' },
  { icon: Code, label: 'Write a small script' },
  { icon: FileText, label: 'Format a document' },
  { icon: Download, label: 'Extract data' },
  { icon: Type, label: 'Type information' },
  { icon: Languages, label: 'Translate text' },
  { icon: Wrench, label: 'Complete repetitive digital work' },
];

export default function QuickTask() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="container-page relative">
          <Reveal>
            <Badge variant="accent" className="mb-5">
              Quick Tasks
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-balance">
              Small Task? <span className="text-gradient-accent">Send It Anyway.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-ink-300 text-balance">
              Not every project needs a complicated process. If you have a small digital task, send the details and I'll tell you how I can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Examples */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Examples" title="What Counts as a Quick Task?" />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {examples.map((example, i) => (
              <Reveal key={example.label} delay={i * 40}>
                <div className="premium-card flex flex-col items-center gap-3 p-6 text-center h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <example.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <span className="text-sm font-medium text-white">{example.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">Ready to Send Your Task?</h2>
            <p className="mt-4 text-base text-ink-300 text-balance">
              Describe what you need and I'll let you know if it's something I can help with.
            </p>
            <div className="mt-8">
              <Button to="/contact" size="lg">
                Describe Your Task
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
