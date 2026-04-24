import { memo } from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ id, className = '', contentClassName = '', children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
      className={`section-shell content-auto relative overflow-clip ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-[6%] top-0 h-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </motion.section>
  );
};

export default memo(AnimatedSection);