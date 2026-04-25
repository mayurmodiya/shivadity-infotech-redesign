import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const CTASection = () => {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-6 py-10 text-white shadow-soft sm:px-8 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(142,183,255,0.3),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(28,200,183,0.3),transparent_28%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-100">Ready to launch</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
                Build a sharper digital presence with a team that understands product, performance, and presentation.
              </h2>
              <p className="mt-4 text-base leading-8 text-brand-100/90">
                Whether you need a modern company website, a custom dashboard, or a customer-facing application, we can map the right next step together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                See Recent Work
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTASection;
