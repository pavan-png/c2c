import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import CourseProgramCard from '../common/CourseProgramCard';
import LuxuryButton from '../common/LuxuryButton';
import SectionHeading from '../common/SectionHeading';
import { careerAccelerationItems, courseCards, featureBadges } from '../../data/siteData';

const CoursesSection = () => {
  return (
    <AnimatedSection id="courses" className="bg-[linear-gradient(180deg,#ffffff_0%,#f5faff_100%)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          centered
          badge="Courses & Internships"
          title="Popular Courses & Training Programs"
          description="Professional learning tracks designed for fast skill-building, real-time project exposure, and career outcomes."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courseCards.map((course, index) => (
            <CourseProgramCard key={course.title} course={course} index={index} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.28 }}
            className="rounded-[2rem] border border-blue-50 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                <BadgeCheck size={22} />
              </div>
              <h3 className="text-xl font-bold tracking-[-0.04em] text-slate-950 sm:text-2xl">Career Acceleration</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {careerAccelerationItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.22, delay: index * 0.03 }}
                  className="rounded-[1.3rem] border border-blue-50 bg-blue-50/60 px-4 py-3.5 text-sm font-semibold text-slate-700"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.28, delay: 0.04 }}
            className="rounded-[2rem] bg-[linear-gradient(135deg,#07162f,#0a2147,#0f3d78)] p-6 text-white shadow-[0_22px_70px_rgba(3,8,24,0.18)] sm:p-8"
          >
            <h3 className="text-2xl font-bold tracking-[-0.05em] sm:text-3xl">Why Choose C2C Courses?</h3>
            <p className="mt-4 text-white/72 text-sm sm:text-base">
              Structured programs, mentor support, placement-driven training, and real project exposure built around what companies actually expect.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {featureBadges.map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/8 px-3.5 py-1.5 text-sm font-semibold text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <LuxuryButton className="mt-7" icon={ArrowRight}>View All Courses</LuxuryButton>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(CoursesSection);
