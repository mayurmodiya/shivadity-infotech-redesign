import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, stats } from '../../data/siteData';
import Reveal from '../shared/Reveal';

const floating = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
};

const HeroSection = () => {
  return (
    <section className="section-shell grid-overlay relative pt-14 lg:pt-20">
      <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <div>
          <Reveal>
            <p className="inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              Modern IT Solutions
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              We build <span className="text-gradient">credible digital experiences</span> for ambitious businesses.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {company.description} This redesign is crafted to feel polished, trustworthy, and current while staying grounded in Shivaditya Infotech’s professional identity.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
              >
                <Play size={16} />
                Explore Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap">
              {['React and modern frontend stacks', 'SEO-friendly semantic structure', 'Responsive by default'].map((item) => (
                <div key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent-700" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-3xl px-5 py-5">
                  <p className="font-heading text-3xl font-semibold text-brand-950">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-xl">
            <motion.div
              variants={floating}
              animate="animate"
              className="glass-panel relative overflow-hidden rounded-[2rem] border p-5 shadow-soft"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,107,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(28,200,183,0.16),transparent_32%)]" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Client Dashboard</p>
                    <p className="mt-1 font-heading text-xl font-semibold text-brand-950">Shivaditya Flow</p>
                  </div>
                  <div className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">Live</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.75rem] bg-brand-950 p-5 text-white">
                    <p className="text-sm text-brand-100">Delivery health</p>
                    <p className="mt-3 font-heading text-4xl font-semibold">96%</p>
                    <div className="mt-6 space-y-3">
                      <div className="h-3 rounded-full bg-white/10">
                        <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-brand-300 to-accent-300" />
                      </div>
                      <div className="flex justify-between text-xs text-brand-100">
                        <span>Design systems</span>
                        <span>82%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Campaign uplift</p>
                      <p className="mt-3 font-heading text-3xl font-semibold text-ink">+48%</p>
                      <p className="mt-3 text-xs text-slate-500">From improved UI hierarchy and stronger CTA clarity.</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Response time</p>
                      <p className="mt-3 font-heading text-3xl font-semibold text-ink">&lt; 24 hrs</p>
                      <p className="mt-3 text-xs text-slate-500">Transparent communication and structured delivery cadence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-12 hidden rounded-3xl bg-white px-4 py-3 shadow-glass sm:block"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">SEO-ready build</p>
              <p className="mt-1 font-semibold text-brand-950">Semantic, fast, accessible</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 right-0 hidden rounded-3xl bg-white px-4 py-3 shadow-glass sm:block"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Motion layer</p>
              <p className="mt-1 font-semibold text-brand-950">Subtle transitions and hover states</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
