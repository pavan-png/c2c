import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UploadCloud } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import LuxuryButton from '../common/LuxuryButton';
import SectionHeading from '../common/SectionHeading';
import { jobOpenings } from '../../data/siteData';

const PlacementSection = () => {
  return (
    <AnimatedSection id="placement" className="bg-[linear-gradient(135deg,#f0f4ff_0%,#e8effe_45%,#f4f6ff_100%)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          badge="Placement & Careers"
          title="From Campus to Corporate"
          description="Structured preparation, interview support, and active openings that help you move from learning to hiring faster."
          theme="light"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Stats + upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3 }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-600 sm:text-5xl">98%</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 sm:text-xl">Placement Success Rate</h4>
                  <p className="mt-1 text-slate-500 text-sm">Last 3 years</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-600 sm:text-5xl">150+</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 sm:text-xl">Active Job Openings</h4>
                  <p className="mt-1 text-slate-500 text-sm">Across 80+ companies</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <h4 className="text-lg font-bold text-slate-900 sm:text-xl">Upload Your Resume</h4>
              <div className="mt-5 rounded-[2rem] border-2 border-dashed border-blue-200 px-6 py-10 text-center">
                <UploadCloud className="mx-auto text-blue-500" size={38} />
                <p className="mt-3 text-slate-500 text-sm">Drag & drop your resume or browse your files.</p>
                <LuxuryButton className="mt-5">BROWSE FILES</LuxuryButton>
              </div>
            </div>
          </motion.div>

          {/* Job openings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.04 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900 sm:text-3xl">Current Job Openings</h3>
            <div className="mt-6 space-y-4">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex flex-col gap-4 rounded-[2rem] border border-blue-100 bg-white px-5 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 sm:text-xl">{job.title}</h4>
                    <p className="mt-1 text-slate-500 text-sm">{job.details}</p>
                  </div>
                  <LuxuryButton icon={ArrowRight}>Apply Now</LuxuryButton>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(PlacementSection);
