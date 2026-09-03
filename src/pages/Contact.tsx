import { Mail, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title="Have a Project in Mind?"
              description="Tell me what you need. I'll review the details and get back to you."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="premium-card p-6 md:p-8">
              <ContactForm />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={200} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="premium-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <Mail className="h-5 w-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Email</h3>
                    <a href="mailto:calmpins15@gmail.com" className="text-sm text-ink-300 hover:text-accent-400 transition-colors">
                      calmpins15@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <Clock className="h-5 w-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Response Time</h3>
                    <p className="text-sm text-ink-300">Typically within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <CheckCircle2 className="h-5 w-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">What to Include</h3>
                    <p className="mt-1 text-sm text-ink-300">
                      Share as much detail as possible — the problem, scope, timeline and any relevant files or links.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
