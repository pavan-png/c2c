import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Megaphone,
  MonitorSmartphone,
  School,
  Sparkles,
} from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const serviceHighlights = [
  'Digital Marketing solutions that grow visibility and conversions',
  'Training & Placement programs designed for real careers',
  'IT & Non-IT Staffing support for fast business hiring',
  'Academic Projects guidance with full implementation support',
  'IT Projects development for startups, teams, and clients',
];

const serviceCards = [
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    accent: 'from-orange-500 to-amber-400',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    shape: 'rounded-[2rem]',
  },
  {
    title: 'Training & Placement',
    icon: GraduationCap,
    accent: 'from-blue-600 to-cyan-400',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    shape: 'rounded-[1.75rem]',
  },
  {
    title: 'IT & Non-IT Staffing',
    icon: BriefcaseBusiness,
    accent: 'from-violet-600 to-fuchsia-400',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    shape: 'rounded-[1.75rem]',
  },
  {
    title: 'Academic Projects',
    icon: School,
    accent: 'from-emerald-500 to-teal-300',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    shape: 'rounded-[1.5rem]',
  },
  {
    title: 'IT Projects',
    icon: MonitorSmartphone,
    accent: 'from-sky-500 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    shape: 'rounded-[1.5rem]',
  },
  {
    title: 'C2C Advantage',
    icon: Sparkles,
    accent: 'from-slate-900 to-slate-700',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    shape: 'rounded-[1.5rem]',
  },
];

const cardMotion = {
  initial: { opacity: 0, y: 24, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.1 },
};

const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="overflow-hidden bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">

        {/* Left panel - full width on mobile, sidebar on lg */}
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#122238_0%,#0f1d31_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(2,6,23,0.28)] sm:px-8 sm:py-10 lg:hidden">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-400"
          >
            <Sparkles size={16} />
            C2C Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.06, duration: 0.3 }}
            className="mt-6 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl"
          >
            Career and business solutions built to move people forward.
          </motion.h2>

          <div className="mt-6 inline-flex flex-col items-center justify-center rounded-full bg-[#050b19] px-8 py-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
            <span className="rounded-full bg-white/20 px-5 py-1.5 text-sm font-medium text-white/90">Premium</span>
            <span className="mt-4 text-[3.5rem] font-black leading-none tracking-[-0.05em] text-white">05</span>
            <span className="mt-1 text-2xl font-bold tracking-[-0.04em] text-white">Services</span>
          </div>
        </div>

        {/* Desktop: side by side */}
        <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.65fr] lg:items-start lg:gap-12">
          {/* Left sidebar */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#122238_0%,#0f1d31_100%)] px-7 py-10 text-white shadow-[0_24px_70px_rgba(2,6,23,0.28)] lg:min-h-[760px]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-400"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/12 text-orange-400">
                <Sparkles size={18} />
              </span>
              C2C Services
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.06, duration: 0.3 }}
              className="mt-8 max-w-md text-4xl font-bold leading-tight tracking-[-0.045em] xl:text-[3.15rem]"
            >
              Career and business solutions built to move people forward.
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mt-10 space-y-5"
            >
              {serviceHighlights.map((item) => (
                <li key={item} className="flex items-start gap-4 text-[1rem] leading-7 text-white/90 xl:text-[1.1rem]">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="mt-12 inline-flex flex-col items-center justify-center rounded-full bg-[#050b19] px-10 py-9 text-center shadow-[0_25px_70px_rgba(0,0,0,0.28)]"
            >
              <span className="rounded-full bg-white/18 px-6 py-2 text-sm font-medium text-white/90">Premium</span>
              <span className="mt-5 text-[4.2rem] font-black leading-none tracking-[-0.05em] text-white">05</span>
              <span className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white">Services</span>
            </motion.div>
          </div>

          {/* Cards grid - desktop */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  {...cardMotion}
                  transition={{ duration: 0.28, delay: index * 0.04, ease: [0.19, 1, 0.22, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group relative overflow-hidden bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] ${card.shape} h-[220px]`}
                >
                  <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,33,0.04),rgba(10,18,33,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold tracking-[-0.035em] text-white drop-shadow-md">{card.title}</h3>
                    <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
                      Explore More
                      <ArrowRight size={15} className="transition duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Cards grid - mobile/tablet */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                {...cardMotion}
                transition={{ duration: 0.28, delay: index * 0.04, ease: [0.19, 1, 0.22, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative h-[200px] overflow-hidden bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] ${card.shape}`}
              >
                <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,33,0.04),rgba(10,18,33,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-base font-bold tracking-[-0.035em] text-white drop-shadow-md">{card.title}</h3>
                  <div className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
                    Explore More <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(ServicesSection);
