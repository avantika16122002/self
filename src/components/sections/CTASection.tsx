import { ArrowRight, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function CTASection() {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-ink-850 to-ink-900 px-8 py-16 md:px-16 md:py-20">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-500/5 blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl text-balance">
              Let's Get Your Work Done.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-ink-300 sm:text-lg text-balance">
              Whether it's a bug, a backend project, a spreadsheet, a script or a small digital task — send the details.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/contact" size="lg">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/quick-task" size="lg" variant="secondary">
                <Zap className="h-4 w-4" />
                Send a Quick Task
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
