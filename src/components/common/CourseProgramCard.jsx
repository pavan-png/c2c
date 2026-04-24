import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Users } from 'lucide-react';

const CourseProgramCard = ({ course, index = 0 }) => {
  const Icon = course.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.28, delay: index * 0.03, ease: [0.19, 1, 0.22, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group perspective-card motion-gpu relative overflow-hidden rounded-[2rem] border border-blue-50 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2563eb,#38bdf8,#0ea5e9)] opacity-0 transition duration-150 group-hover:opacity-100" />

      <div
        className={`relative overflow-hidden rounded-[1.7rem] bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${course.coverPanel} p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`}
      >
        <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${course.coverGlow} opacity-65 blur-2xl`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.16))]" />
        <div className="relative flex min-h-[220px] flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div className={`inline-flex rounded-[1.25rem] bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${course.iconWrap} p-4 text-white ring-1 ring-white/10 backdrop-blur-xl`}>
              <Icon size={32} />
            </div>
            <div className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-[0_14px_34px_rgba(16,185,129,0.28)]">
              {course.tag}
            </div>
          </div>

          <div className="space-y-2 pt-8">
            <div className="text-4xl font-black tracking-[-0.08em] md:text-5xl">{course.coverTitle}</div>
            <div className="text-lg font-semibold text-white/88">{course.coverSubtitle}</div>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <h3 className="text-[2rem] font-bold tracking-[-0.05em] text-slate-900">{course.title}</h3>
        <p className="mt-3 min-h-[84px] text-lg leading-8 text-slate-600">{course.description}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-slate-500">
          <div className="flex items-center gap-2 text-lg">
            <Clock3 size={18} className="text-blue-600" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Users size={18} className="text-blue-600" />
            <span>{course.mode}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#2563eb,#3b82f6,#1d4ed8)] px-8 py-4 text-xl font-bold text-white shadow-[0_16px_40px_rgba(37,99,235,0.24)]"
        >
          View More
          <ArrowRight className="transition duration-150 group-hover:translate-x-1" size={20} />
        </motion.button>
      </div>
    </motion.article>
  );
};

export default memo(CourseProgramCard);
