import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { memo, useEffect, useRef, useState } from 'react';

const labelMap = {
  home: 'Home',
  about: 'About Us',
  services: 'Services',
  courses: 'Courses',
  placement: 'Careers',
  corporate: 'Corporate Training',
  contact: 'Contact',
};

const NavigationTransition = () => {
  const [state, setState] = useState({ active: false, target: 'home' });
  const closeTimerRef = useRef();

  useEffect(() => {
    const handleStart = (event) => {
      const target = event.detail?.target || 'home';
      setState({ active: true, target });
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };

    const handleEnd = (event) => {
      const target = event.detail?.target || 'home';
      closeTimerRef.current = window.setTimeout(() => {
        setState({ active: false, target });
      }, 180);
    };

    window.addEventListener('section:navigate-start', handleStart);
    window.addEventListener('section:navigate-end', handleEnd);

    return () => {
      window.removeEventListener('section:navigate-start', handleStart);
      window.removeEventListener('section:navigate-end', handleEnd);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {state.active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.24 } }}
          className="pointer-events-none fixed inset-0 z-[120]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,8,24,0.7),rgba(5,23,50,0.62),rgba(6,46,92,0.42))] backdrop-blur-[6px]"
          />
          <motion.div
            initial={{ x: '-120%', skewX: -12 }}
            animate={{ x: '120%', skewX: -12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-y-0 left-[-20%] w-[42%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),rgba(56,189,248,0.18),transparent)] blur-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, scale: 1.03, filter: 'blur(8px)' }}
              transition={{ duration: 0.18, ease: [0.19, 1, 0.22, 1] }}
              className="rounded-[2rem] border border-white/16 bg-white/10 px-8 py-6 text-center shadow-[0_22px_70px_rgba(3,8,24,0.28)] backdrop-blur-2xl"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.32em] text-cyan-100">
                <Sparkles size={14} />
                Opening
              </div>
              <div className="font-display text-3xl font-bold tracking-[-0.06em] text-white md:text-5xl">
                {labelMap[state.target] || 'Section'}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(NavigationTransition);
