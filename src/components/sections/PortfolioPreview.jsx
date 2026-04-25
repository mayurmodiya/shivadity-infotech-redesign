import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/siteData';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

const PortfolioPreview = ({ compact = false }) => {
  const items = compact ? projects.slice(0, 2) : projects;

  return (
    <section id="portfolio" className="section-shell py-20">
      <Reveal>
        <SectionHeading
          badge="Portfolio"
          title="Selected project directions and delivery capabilities"
          description="This section is designed to be replaced with real case studies, but it already frames the business as capable, process-driven, and trusted across domains."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-glass">
              <div className="relative h-52 overflow-hidden bg-brand-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(142,183,255,0.5),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(28,200,183,0.4),transparent_35%)]" />
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-100">{project.category}</p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.results.map((result) => (
                    <span key={result} className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {compact ? (
        <div className="mt-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5">
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default PortfolioPreview;
