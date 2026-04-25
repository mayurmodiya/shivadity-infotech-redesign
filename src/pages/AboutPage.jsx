import { Award, Eye, Target } from 'lucide-react';
import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import { company, highlights } from '../data/siteData';

const pillars = [
  {
    icon: Eye,
    title: 'Clear product vision',
    text: 'We balance visual polish with practical business goals so each project feels intentional, not decorative.',
  },
  {
    icon: Target,
    title: 'Execution with discipline',
    text: 'Reliable delivery, clean communication, and maintainable implementation matter just as much as good design.',
  },
  {
    icon: Award,
    title: 'Long-term partnership',
    text: 'We build systems that can evolve, which means clients can keep improving instead of starting over later.',
  },
];

const AboutPage = () => {
  return (
    <PageShell className="pt-10">
      <PageMeta
        title="About Us | Shivaditya Infotech"
        description="Learn how Shivaditya Infotech approaches digital product strategy, UI/UX, development, and long-term client partnerships."
      />

      <section className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              badge="About Us"
              title="A product-minded technology partner for businesses that want to grow with confidence"
              description={company.description}
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              Positioning the company as a modern product and engineering studio—precise, credible, and built to handle both strategy and execution.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Reveal key={highlight.title} delay={index * 0.08}>
                <article className="glass-panel h-full rounded-[2rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{highlight.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
};

export default AboutPage;
