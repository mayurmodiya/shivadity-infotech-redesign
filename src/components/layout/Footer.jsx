import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/shivaditya-logo.svg';
import { company, navigation, socialLinks } from '../../data/siteData';

const Footer = () => {
  return (
    <footer className="section-shell pb-8 pt-20">
      <div className="glass-panel overflow-hidden rounded-[2rem] border px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5">
              <img src={logo} alt={company.name} className="h-12 w-auto object-contain" />
            </div>
            <h2 className="max-w-md font-heading text-2xl font-semibold text-brand-950">
              Modern websites and digital products that make your business look as capable as it really is.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{company.description}</p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Pages</p>
            <div className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-slate-600 hover:text-brand-950">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.address}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-950 shadow-sm hover:-translate-y-0.5"
                >
                  {item.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {company.name}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
