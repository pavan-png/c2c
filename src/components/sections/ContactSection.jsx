import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import LuxuryButton from '../common/LuxuryButton';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="bg-[linear-gradient(135deg,#07152d_0%,#0a2148_42%,#0d3c74_100%)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8">
        <h2 className="font-display text-3xl font-bold tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to take the next step?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg md:text-xl">
          Whether you&apos;re a student, professional, or business owner — C2C has a solution designed to move you forward.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <LuxuryButton className="w-full text-base sm:w-auto sm:text-lg" icon={ArrowRight}>
            Start Your Journey Today
          </LuxuryButton>
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/8 px-6 py-5 text-left backdrop-blur-xl sm:w-auto sm:px-7">
            <p className="text-sm uppercase tracking-[0.18em] text-white/46">Call us directly</p>
            <a href="tel:+919014555370" className="mt-2 block text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              +91 90145 55370
            </a>
            <p className="mt-1 text-sm text-white/56">Vijayawada, Andhra Pradesh</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(ContactSection);
