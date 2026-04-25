import { Quote } from 'lucide-react';
import { testimonials } from '../../data/siteData';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

const TestimonialsSection = () => {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <SectionHeading
          badge="Testimonials"
          title="What clients value when the work matters"
          description="We focus on clear communication, reliable delivery, and work that holds up over time. Here’s what our clients say."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.08}>
            <article className="glass-panel h-full rounded-[2rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                <Quote size={20} />
              </div>
              <p className="mt-6 text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="font-heading text-lg font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
