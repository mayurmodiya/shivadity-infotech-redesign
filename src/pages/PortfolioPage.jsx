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
            title="Industry-focused digital solutions across high-demand business domains"
            description="This portfolio now highlights the actual sectors Shivaditya Infotech serves, with direct links to your live industry pages for healthcare, fitness, social media, real estate, logistics, ERP, business apps, and lifestyle solutions."
          />
        </Reveal>
      </section>

      <PortfolioPreview />
      <CTASection />
    </PageShell>
  );
};

export default PortfolioPage;
