import { memo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import SectionHeading from '../common/SectionHeading';
import { corporatePrograms } from '../../data/siteData';

const CorporateTrainingSection = () => {
  return (
    <AnimatedSection id="corporate" className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          centered
          badge="For Organizations"
          title="Corporate Training Solutions"
          description="Empower your workforce with customized workshops and long-term programs built for real business outcomes."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {corporatePrograms.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.22, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className="rounded-[2rem] border border-blue-50 bg-white p-8 text-center shadow-[0_18px_54px_rgba(15,23,42,0.06)]"
              >
                <div className="mx-auto mb-6 inline-flex rounded-[1.4rem] bg-gradient-to-br from-sky-50 to-blue-50 p-5 text-blue-700 shadow-inner transition duration-150 hover:scale-110">
                  <Icon size={34} />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(CorporateTrainingSection);
