import { memo } from 'react';
import { motion } from 'framer-motion';

const LuxuryButton = ({
  children,
  className = '',
  onClick,
  variant = 'solid',
  icon: Icon,
}) => {
  const variantClass =
    variant === 'outline'
      ? 'border border-white/22 bg-white/8 text-white hover:border-cyan-300/50 hover:bg-white/12'
      : variant === 'dark'
        ? 'border border-blue-900/10 bg-[linear-gradient(135deg,#0a1b37,#12356b,#0ea5e9)] text-white hover:brightness-110'
        : 'bg-[linear-gradient(135deg,#2563eb,#3b82f6,#0ea5e9)] text-white';

  return (
    <motion.button
      whileHover={{ y: -5, scale: 1.02, boxShadow: '0 22px 60px rgba(37,99,235,0.25)' }}
      whileTap={{ scale: 0.98, y: -1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-base font-bold shadow-[0_18px_45px_rgba(2,6,23,0.12)] backdrop-blur-xl ${variantClass} ${className}`}
    >
      <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.36),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
      <span className="absolute inset-[1px] rounded-full border border-white/14" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon className="relative z-10 transition duration-500 group-hover:translate-x-1 group-hover:scale-110" size={18} />}
    </motion.button>
  );
};

export default memo(LuxuryButton);
