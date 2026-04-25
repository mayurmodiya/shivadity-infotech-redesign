import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/siteData';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

const ServicesGrid = ({ compact = false }) => {
  const items = compact ? services.slice(0, 3) : services;

  return (
    <section id="services" className="section-shell py-20">
      <Reveal>
        <SectionHeading
          badge="Services"
          title="Build, launch, and scale products with a reliable tech partner"
          description="Each service area is designed to make Shivaditya Infotech look credible to founders, operators, and businesses seeking a dependable technical partner."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="group glass-panel h-full rounded-[2rem] p-6 hover:-translate-y-2 hover:shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      {compact ? (
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-950 shadow-sm hover:-translate-y-0.5">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default ServicesGrid;
