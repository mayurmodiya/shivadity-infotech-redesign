import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ApplicationFormModal from '../components/shared/ApplicationFormModal';
import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import { openings } from '../data/siteData';

const CareersPage = () => {
  const [selectedOpening, setSelectedOpening] = useState(null);

  return (
    <PageShell className="pt-10">
      <PageMeta
        title="Careers | Shivaditya Infotech"
        description="Explore open roles and career opportunities at Shivaditya Infotech."
      />

      <section className="section-shell py-16">
        <Reveal>
          <SectionHeading
            badge="Careers"
            title="Join a team focused on thoughtful products and dependable execution"
            description=""
          />
        </Reveal>

        <div className="mt-12 grid gap-6">
          {openings.map((opening, index) => (
            <Reveal key={opening.title} delay={index * 0.08}>
              <article className="glass-panel flex flex-col gap-5 rounded-[2rem] p-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">{opening.type}</span>
                    <span className="rounded-full bg-accent-100 px-3 py-2 text-xs font-semibold text-accent-700">{opening.location}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">{opening.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{opening.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedOpening(opening)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-5 py-3 font-semibold text-white"
                >
                  Apply now
                  <ArrowRight size={16} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />

      {selectedOpening ? (
        <ApplicationFormModal opening={selectedOpening} onClose={() => setSelectedOpening(null)} />
      ) : null}
    </PageShell>
  );
};

export default CareersPage;
