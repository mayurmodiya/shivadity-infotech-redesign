import PageMeta from '../components/shared/PageMeta';
import PageShell from '../components/shared/PageShell';
import ContactSection from '../components/sections/ContactSection';

const ContactPage = () => {
  return (
    <PageShell className="pt-10">
      <PageMeta
        title="Contact Us | Shivaditya Infotech"
        description="Contact Shivaditya Infotech for modern website redesigns, custom software, digital products, and development partnerships."
      />
      <ContactSection />
    </PageShell>
  );
};

export default ContactPage;
