import { ArrowLeft, ArrowRight, CheckCircle2, Layers3, Lightbulb, Target } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import { projects } from '../data/siteData';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <PageShell className="pt-10">
        <section className="section-shell py-20">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Portfolio</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-ink">Project not found</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">The project you are looking for does not exist (or the link is outdated).</p>
            <Link
              to="/portfolio"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5"
            >
              <ArrowLeft size={18} />
              Back to portfolio
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell className="pt-10">
      <PageMeta title={`${project.title} | Portfolio | Shivaditya Infotech`} description={project.summary} />

      <section className="section-shell py-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-950 hover:-translate-y-0.5"
            >
              <ArrowLeft size={18} />
              Portfolio
            </Link>
            <span className="rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              {project.category}
            </span>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div>
              <h1 className="font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{project.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5"
                >
                  Build something similar
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel overflow-hidden rounded-[2rem]">
              <div className="relative h-64 sm:h-72">
                <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/0 to-slate-950/0" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Tech stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <Reveal>
          <SectionHeading
            badge="Project Story"
            title="A clearer narrative — context, challenge, and solution"
            description="This layout is built to feel premium, readable, and on-theme with the rest of the site."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <article className="glass-panel h-full rounded-[2rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                <Layers3 size={18} />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">Context</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.detail.context}</p>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="glass-panel h-full rounded-[2rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                <Target size={18} />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">Challenge</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.detail.challenge}</p>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="glass-panel h-full rounded-[2rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                <Lightbulb size={18} />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">Solution</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.detail.solution}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Highlights</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-ink">What makes this build feel better</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We present the most important wins in a scannable format — aligned to the theme colors and spacing system.
              </p>

              <ul className="mt-8 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 rounded-[1.25rem] bg-white p-4 shadow-sm">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-sm font-medium leading-7 text-slate-700">{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Outcomes</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-ink">Result-focused delivery</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We highlight impact in plain language so the page reads like a credible case story, not a generic showcase.
              </p>

              <div className="mt-8 space-y-3">
                {project.detail.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
};

export default ProjectDetailPage;

