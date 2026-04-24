import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Rocket } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import { leadership } from '../../data/siteData';

const leadershipCards = [
  {
    name: leadership.name,
    role: leadership.role,
    image: leadership.image,
  },
  {
    name: 'P. Venkatesh',
    role: 'Training & Placement Lead',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="bg-[#23212d] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            className="relative pt-6 md:pt-10"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b7add9]">
              About Us
            </div>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#ece2ff] md:text-[3.55rem]">
              Born to connect talent, built to accelerate careers and business growth.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-[1.05rem] leading-8 text-[#d7d1e6]">
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
            className="rounded-[2rem] bg-[#e8def8] p-8 text-[#5c4ca8] shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-12"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7d70bb]">
              Our Mission
            </div>
            <h3 className="mt-5 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.045em] md:text-[3.2rem]">
              To give students, professionals, and organizations the space, tools, and support to do
              their best work.
            </h3>
            <div className="mt-12 inline-flex rounded-[1.6rem] border border-[#cabdf5] bg-white/35 p-5 shadow-inner">
              <Rocket size={40} strokeWidth={1.8} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.26, delay: 0.1 }}
          className="mt-20 md:mt-28"
        >
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">Our leadership</h3>

          <div className="mt-10 mx-auto grid max-w-2xl gap-6 grid-cols-2">
            {leadershipCards.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 34, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, delay: index * 0.04, ease: [0.19, 1, 0.22, 1] }}
                whileHover={{ y: -10, scale: 1.015 }}
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

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-[1rem] bg-white px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.15)]">
                  <div>
                    <h4 className="text-[1rem] font-semibold tracking-[-0.03em] text-[#17141f]">{person.name}</h4>
                    <p className="mt-1 text-sm text-[#706a83]">{person.role}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(35,33,45,0.12),transparent_45%)] opacity-0 transition duration-150 group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.26, delay: 0.05 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {['500+ Placements', '120+ Company Connections', 'Industry-Focused Training', 'Business Growth Support'].map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#ddd7ed] backdrop-blur-sm"
            >
              <ArrowUpRight size={16} className="text-[#b8a9ff]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default memo(AboutSection);
