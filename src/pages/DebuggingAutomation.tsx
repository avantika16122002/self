import { ArrowRight, Bug, Terminal, AlertTriangle, Search, Wrench, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';

const debugAreas = [
  'Python Errors',
  'Django Errors',
  'API Problems',
  'Database Errors',
  'JavaScript Problems',
  'Deployment Issues',
  'Docker Problems',
  'Integration Issues',
];

const flowSteps = [
  { icon: AlertTriangle, label: 'BEFORE', desc: 'Error / failing behavior', color: 'text-error-500' },
  { icon: Search, label: 'DIAGNOSE', desc: 'Identify root cause', color: 'text-warning-500' },
  { icon: Wrench, label: 'FIX', desc: 'Implement solution', color: 'text-accent-400' },
  { icon: CheckCircle2, label: 'AFTER', desc: 'Working result', color: 'text-success-500' },
];

export default function DebuggingAutomation() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="container-page relative">
          <Reveal>
            <Badge variant="accent" className="mb-5">
              <Bug className="h-3.5 w-3.5" />
              Debugging & Automation
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-balance">
              Something Broken? <span className="text-gradient-accent">Let's Find Out Why.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-ink-300 text-balance">
              I help identify, troubleshoot and fix technical problems without unnecessary complexity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Debug areas */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="What I Fix" title="Debugging & Troubleshooting Areas" />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {debugAreas.map((area, i) => (
              <Reveal key={area} delay={i * 50}>
                <div className="premium-card flex items-center gap-3 p-5 h-full">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-error-500/10 border border-error-500/20">
                    <Terminal className="h-4 w-4 text-error-500" />
                  </div>
                  <span className="text-sm font-medium text-white">{area}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After visualization */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader eyebrow="Process" title="How Debugging Works" description="A systematic approach to finding and fixing issues." />
        </Reveal>

        <div className="mt-14">
          <div className="grid gap-4 md:grid-cols-4 md:gap-0">
            {flowSteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-ink-850">
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <span className={`mt-4 text-xs font-bold tracking-wider ${step.color}`}>{step.label}</span>
                  <p className="mt-1 text-sm text-ink-300">{step.desc}</p>
                  {i < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full">
                      <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Send Me Your Bug
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
