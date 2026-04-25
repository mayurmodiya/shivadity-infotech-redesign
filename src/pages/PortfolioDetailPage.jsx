import { ArrowLeft, ArrowUpRight, BadgeCheck, Layers3, Link2, Rocket } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import { getProjectBySlug } from '../data/siteData';

const iconMap = [Rocket, Layers3, Link2];

const PortfolioDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <PageShell className="pt-10">
      <PageMeta
        title={`${project.title} | Portfolio | Shivaditya Infotech`}
        description={project.summary}
      />

      <section className="section-shell py-16">
        <Reveal>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                {project.category}
              </p>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{project.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.results.map((result) => (
                  <span key={result} className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-brand-700 shadow-sm">
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Industry page reference</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                This internal detail page is based on the corresponding industry solution area from your live website and is designed to keep visitors engaged inside the redesigned experience.
              </p>
              <a
                href={project.liveSource}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-950 px-5 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5"
              >
                View Original Industry Page
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Business Challenge', text: project.challenge },
            { title: 'Our Approach', text: project.solution },
            { title: 'Expected Outcomes', text: project.outcomes.join(', ') },
          ].map((item, index) => {
            const Icon = iconMap[index];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="glass-panel h-full rounded-[2rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                    <Icon size={18} />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {project.detailIntro || project.caseStudies ? (
        <section className="section-shell py-20">
          <Reveal>
            <SectionHeading
              badge="Case Study Focus"
              title={`A closer look at ${project.title.toLowerCase()}`}
              description={project.detailIntro || 'Selected examples of how this solution area can be positioned as a stronger portfolio narrative.'}
            />
          </Reveal>

          {project.caseStudies ? (
            <div className="mt-12 grid gap-6">
              {project.caseStudies.map((study, index) => (
                <Reveal key={study.title} delay={index * 0.08}>
                  <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">Case Study {index + 1}</p>
                        <h2 className="mt-4 font-heading text-3xl font-semibold text-ink">{study.title}</h2>
                        <p className="mt-3 text-base leading-8 text-slate-600">{study.subtitle}</p>
                        <p className="mt-5 text-sm leading-7 text-slate-600">{study.summary}</p>
                      </div>

                      <div className="space-y-5">
                        <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                          <h3 className="font-heading text-xl font-semibold text-ink">Challenge</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{study.challenge}</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                          <h3 className="font-heading text-xl font-semibold text-ink">Approach</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{study.approach}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {study.highlights.map((item) => (
                        <div key={item} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                            <BadgeCheck size={18} />
                          </div>
                          <p className="mt-4 text-sm font-semibold leading-7 text-ink">{item}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="section-shell py-20">
        <Reveal>
          <SectionHeading
            badge="Key Capabilities"
            title={`What we typically build for ${project.category.toLowerCase()} products`}
            description="Each of these solution areas can be adapted into a focused case-study page, proposal page, or service landing page later."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {project.features.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.08}>
              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <BadgeCheck size={18} />
                </div>
                <p className="mt-4 text-sm font-semibold leading-7 text-ink">{feature}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
};

export default PortfolioDetailPage;
