import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { company, navigation } from '../../data/siteData';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveLink = (href) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`section-shell rounded-[1.75rem] border transition-all duration-300 ${
          scrolled ? 'glass-panel shadow-glass' : 'border-white/60 bg-white/80 shadow-sm backdrop-blur'
        }`}
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6">
          <Link to="/" className="flex min-w-0 flex-1 items-center lg:flex-none">
            <div className="min-w-0">
              <img
                src="/shivaditya-logo.png"
                alt={company.name}
                className="h-8 w-auto max-w-[180px] object-contain sm:h-9 sm:max-w-[220px] lg:max-w-[240px]"
              />
              <p className="mt-0.5 hidden truncate text-[11px] leading-tight text-slate-500 2xl:block">
                {company.tagline}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? 'bg-brand-950 text-white'
                      : 'text-slate-600 hover:bg-white hover:text-brand-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-full bg-brand-950 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-900"
            >
              Contact Us
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-950 shadow-sm lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200/70 px-4 pb-4 lg:hidden"
            >
              <div className="pt-4">
                <div className="rounded-[1.5rem] bg-slate-50/90 p-2">
                  <div className="flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActiveLink(item.href)
                            ? 'bg-brand-950 text-white shadow-soft'
                            : 'text-slate-700 hover:bg-white hover:text-brand-950'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="mt-3 flex w-full items-center justify-center rounded-2xl bg-brand-950 px-4 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-900"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
