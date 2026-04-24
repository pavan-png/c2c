import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import LuxuryButton from '../common/LuxuryButton';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="bg-[linear-gradient(135deg,#07152d_0%,#0a2148_42%,#0d3c74_100%)] py-24 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <h2 className="font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">Ready to take the next step?</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/68">
          Whether you&apos;re a student, professional, or business owner — C2C has a solution designed to move you forward.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
          <LuxuryButton className="text-lg" icon={ArrowRight}>
            Start Your Journey Today
          </LuxuryButton>
          <div className="rounded-[2rem] border border-white/10 bg-white/8 px-7 py-5 text-left backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/46">Call us directly</p>
            <a href="tel:+919014555370" className="mt-2 block text-3xl font-bold text-white md:text-4xl">
              +91 90145 55370
            </a>
            <p className="mt-2 text-sm text-white/56">Vijayawada, Andhra Pradesh</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(ContactSection);
