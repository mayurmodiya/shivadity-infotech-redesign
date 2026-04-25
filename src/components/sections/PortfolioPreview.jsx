import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/siteData';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

const PortfolioPreview = ({ compact = false }) => {
  const items = compact ? projects.slice(0, 4) : projects;

  return (
    <section id="portfolio" className="section-shell py-20">
      <Reveal>
        <SectionHeading
          badge="Portfolio"
          title="Industry solutions backed by real domain experience"
          description="These portfolio entries now map directly to the industry solution pages on your live website, helping the portfolio feel more relevant, grounded, and trustworthy."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <Link
              to={`/portfolio/${project.slug}`}
              className="group block h-full overflow-hidden rounded-[2rem] bg-white shadow-glass transition duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              <div className="relative h-52 overflow-hidden bg-brand-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(173,160,255,0.45),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(66,83,226,0.4),transparent_35%)]" />
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
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700">
                  View industry details
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
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
