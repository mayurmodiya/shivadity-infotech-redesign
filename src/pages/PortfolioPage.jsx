import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/shared/Reveal';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import SectionHeading from '../components/shared/SectionHeading';
import { projects } from '../data/siteData';

const PortfolioPage = () => {
  return (
    <PageShell className="pt-10">
      <PageMeta
        title="Portfolio | Shivaditya Infotech"
        description="Explore selected projects delivered by Shivaditya Infotech across mobile, web, ecommerce, and product engineering."
      />

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Portfolio
              </p>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Projects designed with clarity, built with speed, and delivered with trust.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                A curated set of work spanning mobile apps, web platforms, ecommerce experiences, and product UI refreshes — all aligned
                to our theme system and modern interaction patterns.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
                >
                  View Services
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-950 text-white">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">What you will see</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Each project includes a quick overview, key highlights, tech stack, and a detail view designed to feel premium and consistent with
                    the site theme.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <p className="font-heading text-3xl font-semibold text-brand-950">{projects.length}+</p>
                  <p className="mt-2 text-sm text-slate-600">Featured projects</p>
                </div>
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <p className="font-heading text-3xl font-semibold text-brand-950">Web + Mobile</p>
                  <p className="mt-2 text-sm text-slate-600">Modern UX-led builds</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <Reveal>
          <SectionHeading
            badge="Featured Work"
            title="Project cards with a detail view — built with theme colors and motion"
            description="Click any project to open a dedicated details page with a stronger story, structured highlights, and a clear next step."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <Link
                to={`/portfolio/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                {/* TODO:add after this featureimaplimentation is done */}
                {/* <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/0 to-slate-950/0" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 backdrop-blur">
                    {project.category}
                  </div>
                </div> */}

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-2xl font-semibold text-ink group-hover:text-brand-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 line-clamp-3">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-700 group-hover:gap-3 transition-all">
                    View project details
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default PortfolioPage;

