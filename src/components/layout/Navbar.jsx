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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`section-shell rounded-full border transition-all duration-300 ${
          scrolled ? 'glass-panel shadow-glass' : 'border-transparent bg-white/60'
        }`}
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-6 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="min-w-0">
              <img
                src="/shivaditya-logo.png"
                alt={company.name}
                className="h-10 w-auto max-w-[230px] object-contain"
              />
              <p className="truncate text-xs text-slate-500">{company.tagline}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    active ? 'bg-brand-950 text-white' : 'text-slate-600 hover:bg-white hover:text-brand-950'
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
              className="rounded-full bg-brand-950 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-900"
            >
              Start a Project
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-950 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200/70 px-4 pb-4 lg:hidden"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="mt-2 rounded-2xl bg-brand-950 px-4 py-3 text-sm font-semibold text-white"
                >
                  Start a Project
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
