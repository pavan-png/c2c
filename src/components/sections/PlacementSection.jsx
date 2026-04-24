import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UploadCloud } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import LuxuryButton from '../common/LuxuryButton';
import SectionHeading from '../common/SectionHeading';
import { jobOpenings } from '../../data/siteData';

const PlacementSection = () => {
  return (
    <AnimatedSection id="placement" className="bg-[linear-gradient(135deg,#f0f4ff_0%,#e8effe_45%,#f4f6ff_100%)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          badge="Placement & Careers"
          title="From Campus to Corporate"
          description="Structured preparation, interview support, and active openings that help you move from learning to hiring faster."
          theme="light"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">
              <div className="flex gap-5">
                <div className="text-5xl font-bold text-blue-600">98%</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Placement Success Rate</h4>
                  <p className="mt-2 text-slate-500">Last 3 years</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">
              <div className="flex gap-5">
                <div className="text-5xl font-bold text-blue-600">150+</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Active Job Openings</h4>
                  <p className="mt-2 text-slate-500">Across 80+ companies</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900">Upload Your Resume</h4>
              <div className="mt-6 rounded-[2rem] border-2 border-dashed border-blue-200 px-6 py-12 text-center">
                <UploadCloud className="mx-auto text-blue-500" size={42} />
                <p className="mt-4 text-slate-500">Drag & drop your resume or browse your files.</p>
                <LuxuryButton className="mt-6">BROWSE FILES</LuxuryButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.04 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl font-bold tracking-[-0.04em] text-slate-900">Current Job Openings</h3>
            <div className="mt-8 space-y-4">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex flex-col gap-5 rounded-[2rem] border border-blue-100 bg-white px-7 py-6 shadow-sm md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{job.title}</h4>
                    <p className="mt-2 text-slate-500">{job.details}</p>
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
