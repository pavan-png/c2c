import { memo } from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const SectionHeading = ({ badge, title, description, centered = false, theme = 'light' }) => {
  const titleClass = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const descClass = theme === 'dark' ? 'text-white/72' : 'text-slate-600';
  const badgeClass =
    theme === 'dark'
      ? 'border border-cyan-300/18 bg-cyan-300/10 text-cyan-100 shadow-[0_10px_30px_rgba(14,165,233,0.12)]'
      : 'border border-blue-100 bg-blue-50 text-blue-700 shadow-[0_10px_30px_rgba(14,165,233,0.08)]';

  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {badge && (
        <motion.span variants={item} className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-xl ${badgeClass}`}>
          {badge}
        </motion.span>
      )}
      <motion.h2 variants={item} className={`mt-5 font-display text-4xl font-bold tracking-[-0.04em] md:text-6xl ${titleClass}`}>
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={item} className={`mt-5 text-lg leading-8 md:text-xl ${descClass}`}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default memo(SectionHeading);
