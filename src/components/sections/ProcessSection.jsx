import { processSteps } from '../../data/siteData';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

const ProcessSection = () => {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            badge="Our Process"
            title="A practical delivery rhythm from first brief to launch"
            description="A clear, proven process from idea to launch—and beyond. Each phase is designed to build confidence and momentum, with a focus on practical outcomes that make your business look as capable as it really is."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="glass-panel rounded-[2rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">0{index + 1}</p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
