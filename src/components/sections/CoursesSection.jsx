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
    <AnimatedSection id="courses" className="bg-[linear-gradient(180deg,#ffffff_0%,#f5faff_100%)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          centered
          badge="Courses & Internships"
          title="Popular Courses & Training Programs"
          description="Professional learning tracks designed for fast skill-building, real-time project exposure, and career outcomes."
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-3">
          {courseCards.map((course, index) => (
            <CourseProgramCard key={course.title} course={course} index={index} />
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.28 }}
            className="rounded-[2rem] border border-blue-50 bg-white p-8 shadow-[0_18px_54px_rgba(15,23,42,0.06)]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-950">Career Acceleration</h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {careerAccelerationItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.22, delay: index * 0.03 }}
                  className="rounded-[1.3rem] border border-blue-50 bg-blue-50/60 px-5 py-4 text-sm font-semibold text-slate-700"
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
            className="rounded-[2rem] bg-[linear-gradient(135deg,#07162f,#0a2147,#0f3d78)] p-8 text-white shadow-[0_22px_70px_rgba(3,8,24,0.18)]"
          >
            <h3 className="text-3xl font-bold tracking-[-0.05em]">Why Choose C2C Courses?</h3>
            <p className="mt-4 text-white/72">
              Structured programs, mentor support, placement-driven training, and real project exposure built around what companies actually expect.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {featureBadges.map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <LuxuryButton className="mt-8" icon={ArrowRight}>View All Courses</LuxuryButton>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(CoursesSection);
