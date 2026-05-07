import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, stats } from '../../data/siteData';
import heroBackground from '../../assets/images/Overlay+Shadow.png';
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
                to="/industry"
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
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <motion.div variants={floating} animate="animate" className="relative overflow-hidden rounded-[2.75rem]">
              <div className="absolute -inset-6 bg-mesh opacity-70 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-white shadow-soft">
                <img
                  src={heroBackground}
                  alt="Modern dashboard illustration"
                  className="h-[520px] w-full select-none object-cover object-center sm:h-[600px] lg:h-[640px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,83,226,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(62,46,193,0.12),transparent_32%)]" />
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-5 top-5 hidden w-[210px] rounded-[1.75rem] bg-white/90 p-4 shadow-glass backdrop-blur sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Client rating</p>
                    <p className="mt-2 font-heading text-4xl font-semibold text-brand-700">4.9</p>
                    <p className="mt-2 text-[13px] font-semibold text-slate-700">1.6k+ positive</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 text-brand-700">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-5 top-5 hidden rounded-[1.75rem] bg-white/90 px-5 py-4 shadow-glass backdrop-blur sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">SEO ready</p>
                    <p className="mt-2 text-[13px] font-semibold text-slate-700">Fast • Secure • Scalable</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 right-6 hidden w-[260px] rounded-[2.25rem] bg-brand-950 px-6 py-6 text-white shadow-soft sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-100">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">Active clients</p>
                    <p className="mt-2 font-heading text-6xl font-semibold leading-none">20+</p>
                  </div>
                </div>
                <div className="mt-4 h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-brand-300 to-accent-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
