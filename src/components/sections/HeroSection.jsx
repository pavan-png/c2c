import { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const floatingEase = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f6f6f7] pt-[118px] text-[#1d1d1f]">
      <div className="mx-auto grid min-h-[calc(100vh-118px)] max-w-[1440px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20 xl:gap-16">

        {/* LEFT: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -34, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: floatingEase }}
          className="w-full max-w-[610px] mx-auto lg:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04, duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)] ring-1 ring-[#ececf1]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#111827,#1d4ed8,#8b5cf6)] text-white shadow-[0_10px_20px_rgba(91,92,230,0.2)]">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="text-[0.95rem] font-bold leading-none text-[#1f1f24]">C2C Express</div>
              <div className="mt-1 text-[0.85rem] font-medium text-[#6b7280]">Career Growth • Training • Placement</div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.62, ease: floatingEase }}
            className="font-display text-[2.2rem] font-bold leading-[1.05] tracking-[-0.05em] text-[#1f1f24] sm:text-[3rem] lg:text-[3.8rem] xl:text-[4.4rem]"
          >
            Build careers, learn in real time, and move into better opportunities faster.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.52 }}
            className="mt-6 text-[1rem] leading-[1.65] text-[#3f4653] sm:text-[1.12rem]"
          >
            C2C delivers Digital Marketing, IT &amp; Non-IT Staffing, Training &amp; Placement,
            Academic Projects, and IT Project development with practical learning, real-time
            support, and strong career acceleration across online and offline modes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.48 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('courses', 118)}
              className="rounded-full bg-[#5b5ce6] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_14px_32px_rgba(91,92,230,0.28)] transition hover:bg-[#4d4edf]"
            >
              Explore Courses
            </motion.button>

            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact', 118)}
              className="rounded-full border-2 border-[#1f1f24] bg-transparent px-7 py-3.5 text-[0.98rem] font-semibold text-[#1f1f24] transition hover:bg-[#1f1f24] hover:text-white"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Visual collage — hidden on mobile, shown on lg+ */}
        <motion.div
          initial={{ opacity: 0, x: 34, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.72, delay: 0.12, ease: floatingEase }}
          className="relative mx-auto hidden w-full max-w-[580px] items-center justify-center lg:flex"
        >
          <div className="absolute left-[14%] top-[56%] h-44 w-44 rounded-full bg-[radial-gradient(circle,#c9f0db,transparent_68%)] blur-2xl" />
          <div className="absolute left-[38%] top-[42%] h-60 w-60 rounded-full bg-[radial-gradient(circle,#c8d6ff,transparent_66%)] blur-2xl" />
          <div className="absolute right-[10%] top-[52%] h-48 w-48 rounded-full bg-[radial-gradient(circle,#ffd8df,transparent_70%)] blur-2xl" />

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-[480px] w-full max-w-[560px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ delay: 0.18, duration: 0.58 }}
              className="absolute bottom-[12%] left-[12%] z-10 w-[26%] overflow-hidden rounded-none bg-[#4b3d7c] shadow-[0_18px_50px_rgba(31,41,55,0.18)]"
            >
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Student learner" decoding="async" className="h-[150px] w-full object-cover opacity-95" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="absolute left-[24%] top-[15%] z-30 w-[34%] overflow-hidden rounded-[1.6rem] shadow-[0_20px_60px_rgba(17,24,39,0.12)] ring-1 ring-[#e7e7eb]"
            >
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team collaboration" decoding="async" className="h-[160px] w-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10, rotate: 2 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.62, ease: floatingEase }}
              className="absolute right-[6%] top-[2%] z-40 w-[43%] rounded-[0.9rem] bg-white p-3 shadow-[0_24px_60px_rgba(17,24,39,0.16)] ring-1 ring-[#dedee4]"
            >
              <div className="relative overflow-hidden rounded-[0.35rem] bg-[#efefef]">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" alt="Young professional" fetchPriority="high" decoding="async" className="h-[210px] w-full object-cover" />
              </div>
              <span className="absolute -left-2.5 top-[-8px] h-4 w-4 rounded-full border border-[#d5d7df] bg-white" />
              <span className="absolute -right-2.5 top-[-8px] h-4 w-4 rounded-full border border-[#d5d7df] bg-white" />
              <span className="absolute -left-2.5 bottom-[-8px] h-4 w-4 rounded-full border border-[#d5d7df] bg-white" />
              <span className="absolute -right-2.5 bottom-[-8px] h-4 w-4 rounded-full border border-[#d5d7df] bg-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.36, duration: 0.62 }}
              className="absolute bottom-[28%] left-[43%] z-20 w-[22%] overflow-hidden rounded-none bg-black shadow-[0_18px_46px_rgba(17,24,39,0.16)]"
            >
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" alt="Career portfolio" decoding="async" className="h-[165px] w-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              className="absolute bottom-[28%] right-[11%] z-20 flex h-[130px] w-[130px] items-center justify-center overflow-hidden rounded-full border-[8px] border-black bg-white shadow-[0_20px_48px_rgba(17,24,39,0.16)]"
            >
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" alt="Student profile" decoding="async" className="h-full w-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -12, x: 20 }}
              animate={{ opacity: 1, rotate: -12, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-[11%] left-[27%] z-10 h-4 w-20 rounded-full bg-[#d5d5d8]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
