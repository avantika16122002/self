import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import FAQItem from '@/components/cards/FAQItem';
import CTASection from '@/components/sections/CTASection';
import { faqItems } from '@/data/content';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Answers to common questions about working with DevAssist Studio."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal delay={100}>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-white/[0.06] bg-ink-850/50 px-6 md:px-8">
              {faqItems.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-ink-300">Still have questions?</p>
            <div className="mt-4">
              <Button to="/contact" size="md">
                Get in Touch
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
