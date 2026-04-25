import { ArrowRight, BookOpenText, BrainCircuit, LayoutGrid, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import { blogPosts } from '../data/siteData';

const blogHighlights = [
  {
    icon: BrainCircuit,
    title: 'AI and automation',
    text: 'Relevant insights on practical AI implementation, workflow automation, and smarter digital operations.',
  },
  {
    icon: LayoutGrid,
    title: 'UX and product thinking',
    text: 'Content focused on websites, interfaces, customer journeys, and design decisions that improve business outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Growth and technology strategy',
    text: 'Articles for business owners and product teams deciding how to scale their digital presence with the right technical foundation.',
  },
];

const BlogPage = () => {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <PageShell className="pt-10">
      <PageMeta
        title="Blog | Shivaditya Infotech"
        description="Read relevant insights from Shivaditya Infotech on AI solutions, ecommerce, UI/UX, product engineering, and website strategy."
      />

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Blog
              </p>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Relevant insights for businesses building with web, mobile, ecommerce, and AI.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                This blog is designed to support trust, SEO relevance, and stronger positioning by publishing useful content around the kinds of digital solutions your clients are actually searching for.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['AI Solutions', 'Ecommerce', 'Web Strategy', 'UI/UX', 'Product Engineering'].map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-brand-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                  <BookOpenText size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Editorial focus</p>
                  <h2 className="font-heading text-2xl font-semibold text-ink">Content that supports business decisions</h2>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {blogHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-ink">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-brand-950 text-white shadow-soft">
            <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">Featured Article</p>
                <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-brand-100">{featuredPost.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white">{featuredPost.category}</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-brand-100">{featuredPost.date}</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-brand-100">{featuredPost.readTime}</span>
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
                >
                  Discuss Similar Solution
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-100">Why this blog matters</p>
                <p className="mt-4 text-base leading-8 text-brand-50">
                  Relevant articles help potential clients understand your thinking, discover your services through search, and trust your team before the first conversation even starts.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-20">
        <Reveal>
          <SectionHeading
            badge="Latest Articles"
            title="Useful content for founders, teams, and growing businesses"
            description="These topics are intentionally aligned with the services you offer, which makes the page more relevant for both visitors and long-term SEO growth."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {otherPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article className="glass-panel h-full rounded-[2rem] p-6">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-500">{post.date}</span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-ink">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">{post.readTime}</span>
                  <button type="button" className="inline-flex items-center gap-2 font-semibold text-brand-700">
                    Read article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-8">
        <Reveal>
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading
                  badge="Content Direction"
                  title="Recommended blog categories for long-term relevance"
                  description="If you continue publishing here, these categories will keep the blog aligned with your services and bring more qualified traffic over time."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'AI tools for business growth',
                  'Website redesign strategy',
                  'Ecommerce performance tips',
                  'Mobile app planning',
                  'UI/UX best practices',
                  'Custom software use cases',
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] bg-white p-5 text-sm font-semibold text-brand-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </PageShell>
  );
};

export default BlogPage;
