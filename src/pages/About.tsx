import { Brain, Eye, MessageSquare, Server, Bug, BookOpen, ShieldCheck, Cpu } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import TestimonialCard from '@/components/cards/TestimonialCard';
import CTASection from '@/components/sections/CTASection';
import { techStack, founderTech } from '@/data/content';

const strengths = [
  { icon: Brain, title: 'Problem Solving', desc: 'Breaking down complex problems into manageable steps.' },
  { icon: Eye, title: 'Attention to Detail', desc: 'Reviewing every task before delivery.' },
  { icon: MessageSquare, title: 'Communication', desc: 'Clear, direct and professional communication.' },
  { icon: Server, title: 'Backend Development', desc: 'Strong foundation in backend technologies.' },
  { icon: Bug, title: 'Debugging', desc: 'Systematic approach to finding and fixing issues.' },
  { icon: BookOpen, title: 'Learning Quickly', desc: 'Adapting to new tools and technologies fast.' },
  { icon: ShieldCheck, title: 'Reliable Delivery', desc: 'Meeting deadlines and delivering consistently.' },
  { icon: Cpu, title: 'Technical Expertise', desc: 'Deep knowledge of Python, Django and modern stack.' },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeader
              eyebrow="About"
              title="Technology Meets Practical Problem Solving."
            />
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500/10 border border-accent-500/20">
                    <span className="font-display text-xl font-bold text-accent-400">AK</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Avantika Kodape</h2>
                    <p className="text-sm text-ink-400">Backend Developer & Freelance Digital Problem Solver</p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink-300">
                  A motivated software developer with experience in Python, Django, FastAPI, REST APIs, databases and cloud technologies, with an interest in building practical and scalable digital solutions.
                </p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-ink-200 mb-3">Experience working with:</p>
                  <div className="flex flex-wrap gap-2">
                    {founderTech.map((tech) => (
                      <span key={tech} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-ink-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((strength) => (
                  <div key={strength.title} className="premium-card p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                      <strength.icon className="h-5 w-5 text-accent-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">{strength.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-400">{strength.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech Stack Wall */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Tools & Technologies"
            description="The technologies behind the work at DevAssist Studio."
          />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="rounded-xl border border-white/[0.08] bg-ink-850/50 px-5 py-3 text-sm font-mono text-ink-200 transition-all duration-300 hover:border-accent-500/30 hover:bg-accent-500/5 hover:text-accent-400"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials placeholder */}
      <section className="border-y border-white/[0.06] bg-ink-900/30 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Testimonials" title="Client Feedback" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <TestimonialCard />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
