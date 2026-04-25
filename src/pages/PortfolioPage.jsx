import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import PortfolioPreview from '../components/sections/PortfolioPreview';

const PortfolioPage = () => {
  return (
    <PageShell className="pt-10">
      <PageMeta
        title="Portfolio | Shivaditya Infotech"
        description="See project directions, sector experience, and digital delivery capabilities from Shivaditya Infotech."
      />

      <section className="section-shell py-16">
        <Reveal>
          <SectionHeading
            badge="Portfolio"
            title="Work shaped around usability, operations, and growth"
            description="Use this structure to publish real client stories over time. The current content is intentionally presentation-ready and easy to replace with actual case studies."
          />
        </Reveal>
      </section>

      <PortfolioPreview />
      <CTASection />
    </PageShell>
  );
};

export default PortfolioPage;
