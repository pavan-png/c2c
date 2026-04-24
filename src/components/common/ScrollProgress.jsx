import { memo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    mass: 0.24,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed left-0 right-0 top-0 z-[80] h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500"
    />
  );
};

export default memo(ScrollProgress);
