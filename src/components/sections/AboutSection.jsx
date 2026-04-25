import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Rocket } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import { leadership } from '../../data/siteData';

const leadershipCards = [
  { name: leadership.name, role: leadership.role, image: leadership.image },
  {
    name: 'P. Venkatesh',
    role: 'Training & Placement Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
];

const fadeUp = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } };

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="bg-[#23212d] py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        {/* Top grid */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b7add9]">About Us</div>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.1] tracking-[-0.045em] text-[#ece2ff] sm:text-4xl md:text-[3rem]">
              Born to connect talent, built to accelerate careers and business growth.
            </h2>
            <div className="mt-6 space-y-4 text-[1rem] leading-7 text-[#d7d1e6] sm:text-[1.05rem]">
              <p>
                C2C stands for Candidate-to-Corporate. We help students, professionals, startups,
                and companies move faster with industry-focused training, staffing, IT projects,
                digital marketing, and academic support.
              </p>
              <p>
                Since 2018, our team has focused on practical execution — bridging the gap between
                ambition and real opportunity through job-oriented programs, business enablement,
                and hands-on guidance that creates measurable outcomes.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.28, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="rounded-[2rem] bg-[#e8def8] p-6 text-[#5c4ca8] shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8 md:p-10"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7d70bb]">Our Mission</div>
            <h3 className="mt-4 text-2xl font-bold leading-[1.1] tracking-[-0.045em] sm:text-3xl md:text-[2.8rem]">
              To give students, professionals, and organizations the space, tools, and support to do their best work.
            </h3>
            <div className="mt-8 inline-flex rounded-[1.6rem] border border-[#cabdf5] bg-white/35 p-5 shadow-inner">
              <Rocket size={36} strokeWidth={1.8} />
            </div>
          </motion.div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.26, delay: 0.1 }}
          className="mt-16 md:mt-24"
        >
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Our leadership</h3>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:mx-auto md:max-w-2xl">
            {leadershipCards.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, delay: index * 0.04, ease: [0.19, 1, 0.22, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative overflow-hidden rounded-[1.45rem] bg-[#2f2c3d] shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="aspect-[0.84] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 rounded-[1rem] bg-white px-3 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.15)] sm:inset-x-4 sm:bottom-4 sm:px-4">
                  <div>
                    <h4 className="text-[0.85rem] font-semibold tracking-[-0.03em] text-[#17141f] sm:text-[1rem]">{person.name}</h4>
                    <p className="mt-0.5 text-xs text-[#706a83] sm:text-sm">{person.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.26, delay: 0.05 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {['500+ Placements', '120+ Company Connections', 'Industry-Focused Training', 'Business Growth Support'].map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#ddd7ed] backdrop-blur-sm"
            >
              <ArrowUpRight size={14} className="text-[#b8a9ff]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default memo(AboutSection);
