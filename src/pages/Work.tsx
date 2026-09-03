import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import ProjectCard from '@/components/cards/ProjectCard';
import CaseStudyModal from '@/components/CaseStudyModal';
import CTASection from '@/components/sections/CTASection';
import { projects, type ProjectItem } from '@/data/content';

export default function Work() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected Work"
              description="A selection of technical, automation, data and digital projects."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onViewCaseStudy={setSelected} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />

      <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
