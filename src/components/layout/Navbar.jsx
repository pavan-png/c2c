import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { memo, useMemo, useState } from 'react';
import { navItems } from '../../data/siteData';
import { scrollToSection } from '../../utils/scrollToSection';

const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const desktopItems = useMemo(() => navItems.slice(0, 7), []);

  const handleNavigate = (id) => {
    scrollToSection(id === 'careers' ? 'placement' : id, 118);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9d9de] bg-white shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 border-r border-[#e8e8ec] pr-5 text-left lg:pr-8"
          aria-label="Go to home"
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0b1220,#1f2937)] text-sm font-extrabold tracking-[-0.04em] text-white shadow-[0_10px_25px_rgba(15,23,42,0.16)]">
              C2C
            </div>
            <div>
              <div className="font-display text-[1.9rem] font-bold leading-none tracking-[-0.06em] text-[#1f1f24]">
                C2C
              </div>
              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6b7280]">
                Connect • Grow • Succeed
              </div>
            </div>
          </motion.div>
        </button>

        <nav className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
          {desktopItems.map((item, index) => {
            const targetId = item.id === 'careers' ? 'placement' : item.id;
            const isActive = activeSection === targetId;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate(item.id)}
                className="group relative px-4 py-3 text-[0.98rem] font-semibold text-[#23252b]"
              >
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  {item.label}
                  {['services', 'courses', 'corporate'].includes(targetId) && <ChevronDown size={15} strokeWidth={2.1} className="text-[#6b7280]" />}
                </span>
                <span
                  className={`absolute bottom-[1px] left-4 h-[3px] rounded-full bg-[#2f63f5] transition-all duration-300 ${
                    isActive ? 'w-[calc(100%-2rem)] opacity-100' : 'w-0 opacity-0 group-hover:w-[calc(100%-2rem)] group-hover:opacity-100'
                  }`}
                />
              </motion.button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigate('contact')}
            className="rounded-full bg-[#5b5ce6] px-5 py-2 text-[0.88rem] font-semibold text-white shadow-[0_10px_20px_rgba(91,92,230,0.22)] transition hover:bg-[#4b4cdc]"
          >
            Get In Touch
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7d8df] bg-white text-[#23252b] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <div className="hidden border-t border-[#ececf1] bg-[#fafafb] lg:block">
        <div className="mx-auto flex h-11 max-w-[1440px] items-center gap-4 px-4 text-[0.93rem] text-[#687083] sm:px-6 lg:px-10">
          <button onClick={() => handleNavigate('home')} className="transition hover:text-[#1f1f24]">Home</button>
          <span>/</span>
          <button onClick={() => handleNavigate('courses')} className="transition hover:text-[#1f1f24]">Courses</button>
          <span>/</span>
          <span className="font-medium text-[#1f1f24]">Career & Training Excellence</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#ececf1] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="rounded-xl px-3 py-3 text-left text-base font-medium text-[#23252b] transition hover:bg-[#f6f7fb]"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('contact')}
                className="mt-3 rounded-full bg-[#5b5ce6] px-5 py-3 text-left text-base font-semibold text-white"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Navbar);
