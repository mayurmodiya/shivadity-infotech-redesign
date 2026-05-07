import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industry } from '../../data/siteData';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

const IndustryPreview = ({ compact = false, showHeading = true }) => {
  const items = compact ? industry.slice(0, 6) : industry;

  return (
    <section id="industry" className="section-shell py-20">
      {showHeading ? (
        <Reveal>
          <SectionHeading
            badge="Industry"
            title="Industry solutions backed by real domain experience"
            description="These portfolio entries now map directly to the industry solution pages on your live website, helping the portfolio feel more relevant, grounded, and trustworthy."
          />
        </Reveal>
      ) : null}

      <div className={`${showHeading ? 'mt-12' : ''} grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3`}>
        {items.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Reveal key={industry.title} delay={index * 0.08}>
              <Link
                to={`/industry/${industry.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-500">
                    {Icon ? <Icon size={32} /> : null}
                  </div>
                  <h4 className="text-xl font-bold tracking-[0.1em] text-slate-900 uppercase">{industry.category}</h4>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 text-3xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mb-6 text-md leading-relaxed text-slate-500 line-clamp-3">
                    {industry.summary}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2 mb-8">
                    {industry.results.slice(0, 3).map((result) => (
                      <span key={result} className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600">
                        {result}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 font-bold text-brand-600 group-hover:gap-3 transition-all">
                    View details
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      {compact ? (
        <div className="mt-10">
          <Link to="/industry" className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5">
            View Full Industry
            <ArrowRight size={18} />
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default IndustryPreview;
