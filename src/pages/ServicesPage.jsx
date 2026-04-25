import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Layers3,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesGrid from '../components/sections/ServicesGrid';
import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import { processSteps, services, stats } from '../data/siteData';

const serviceAdvantages = [
  {
    icon: BrainCircuit,
    title: 'Modern capabilities',
    text: 'From AI workflows to ecommerce and mobile products, we build with current technology choices that support real business use cases.',
  },
  {
    icon: Layers3,
    title: 'Design-led execution',
    text: 'We focus on usability, clarity, and conversion so your product feels polished to users and practical for your team to manage.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable delivery',
    text: 'Clean code, scalable architecture, and transparent communication help projects move faster with less rework.',
  },
];

const engagementModels = [
  {
    title: 'End-to-end project delivery',
    text: 'Ideal for businesses that need strategy, design, development, testing, and launch support in one coordinated flow.',
  },
  {
    title: 'Dedicated development support',
    text: 'A flexible model for teams that already have direction but need dependable implementation capacity and faster execution.',
  },
  {
    title: 'Redesign and modernization',
    text: 'Perfect for outdated websites, legacy dashboards, and product experiences that need a stronger visual and technical foundation.',
  },
];

const industries = [
  'Healthcare',
  'Ecommerce',
  'Education',
  'Logistics',
  'SaaS Platforms',
  'Professional Services',
];

const ServicesPage = () => {
  return (
    <PageShell className="pt-10">
      <PageMeta
        title="Services | Shivaditya Infotech"
        description="Explore AI solutions, web development, ecommerce development, mobile apps, UI/UX strategy, and custom software services from Shivaditya Infotech."
      />

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Services
              </p>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Technology services built to solve business problems, not just ship features.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                We help businesses launch better digital products, modernize outdated systems, and create stronger customer experiences across web, mobile, ecommerce, and AI-enabled platforms.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                    <p className="font-heading text-3xl font-semibold text-brand-950">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-brand-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-100">Service promise</p>
                <p className="mt-4 text-lg leading-8 text-brand-50">
                  We combine design thinking, engineering discipline, and business clarity so the final product feels modern, performs well, and supports growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceAdvantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="glass-panel h-full rounded-[2rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                    <Icon size={18} />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ServicesGrid />

      <section className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionHeading
              badge="How We Work"
              title="A service process designed for clarity, speed, and better outcomes"
              description="Strong service pages do more than list offerings. They show how delivery works, what clients can expect, and why the process reduces risk."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="glass-panel rounded-[2rem] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">0{index + 1}</p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <SectionHeading
                badge="Engagement Models"
                title="Flexible ways to work together"
                description="Whether you need a full project partner or focused technical support, we shape the engagement around your stage, team structure, and delivery goals."
              />
              <div className="mt-8 space-y-4">
                {engagementModels.map((model, index) => (
                  <Reveal key={model.title} delay={index * 0.08}>
                    <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 p-2.5">
                          <BriefcaseBusiness size={18} />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-ink">{model.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{model.text}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <SectionHeading
                badge="Who We Serve"
                title="Built for growing businesses across practical, fast-moving industries"
                description="Our service positioning is intentionally broad enough to support multiple sectors while still sounding specific and trustworthy."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-brand-700 shadow-sm">
                    {industry}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-950 text-white p-2.5">
                    <Rocket size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-ink">Why clients choose this stack</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Our service mix supports startups, SMEs, and scaling teams that need a modern website, a stronger product UI, ecommerce capability, or AI-powered workflows without managing multiple vendors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <Reveal>
          <SectionHeading
            badge="Why This Matters"
            title="What better service delivery changes for your business"
            description="The right technical partner should improve more than visuals. It should support growth, confidence, operations, and long-term maintainability."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            'Launch products faster with clearer requirements, cleaner delivery, and less back-and-forth during execution.',
            'Improve customer trust through modern design, smoother UX, stronger messaging, and more polished digital touchpoints.',
            'Reduce operational friction with custom systems, dashboards, automation, and scalable technical foundations.',
          ].map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <article className="glass-panel h-full rounded-[2rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                  <BadgeCheck size={18} />
                </div>
                <p className="mt-5 text-base leading-8 text-slate-700">{point}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
};

export default ServicesPage;
