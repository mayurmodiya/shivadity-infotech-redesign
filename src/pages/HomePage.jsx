import CTASection from '../components/shared/CTASection';
import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import ContactSection from '../components/sections/ContactSection';
import HeroSection from '../components/sections/HeroSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const HomePage = () => {
  return (
    <PageShell>
      <PageMeta
        title="Shivaditya Infotech | Modern Digital Product & IT Services"
        description="Shivaditya Infotech creates modern websites, mobile apps, and digital products with polished UX, scalable engineering, and business-first thinking."
      />
      <HeroSection />
      <ServicesGrid compact />
      <ProcessSection />
      <PortfolioPreview compact />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </PageShell>
  );
};

export default HomePage;
