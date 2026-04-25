import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../shared/ContactForm';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';
import { company } from '../../data/siteData';

const contactItems = [
  { icon: Mail, label: 'Email', value: company.email },
  { icon: Phone, label: 'Phone', value: company.phone },
  { icon: MapPin, label: 'Location', value: company.address },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <SectionHeading
              badge="Contact Us"
              title="Let’s plan the next version of your digital presence"
              description="Whether you’re starting something new or improving what you have, let’s talk about how we can help."
            />

            <div className="mt-8 space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={index * 0.08}>
                    <div className="glass-panel flex items-center gap-4 rounded-[1.5rem] p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-white">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{item.label}</p>
                        <p className="font-medium text-ink">{item.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
