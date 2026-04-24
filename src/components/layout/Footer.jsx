import { memo } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white py-16 text-slate-800 border-t border-slate-100">
      {/* CTA section */}
      <div className="relative mx-auto max-w-4xl px-5 text-center mb-16 md:px-8">
        <div className="flex justify-center mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-[radial-gradient(circle_at_30%_30%,#7dd3fc,#38bdf8_55%,#1d4ed8)] text-sm font-bold text-white shadow-[0_18px_40px_rgba(14,165,233,0.35)]">
            ✦
          </div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Book An Appointment Today</h2>
        <p className="mt-4 text-slate-500 text-lg">
          Book an appointment with our handpicked mental health and wellness experts whenever or wherever you want!
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3b3ef0] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_32px_rgba(59,62,240,0.28)] transition duration-150 hover:bg-[#2d30d4]"
        >
          Book Appointment →
        </button>
      </div>

      {/* Footer links */}
      <div className="relative mx-auto max-w-7xl grid gap-10 px-5 border-t border-slate-100 pt-12 md:px-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Contact */}
        <div>
          <h5 className="mb-5 text-sm font-bold text-slate-900">Contact</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">📞</span>
              602–774–4735
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">📍</span>
              <span>Vijayawada, Andhra Pradesh</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">✉️</span>
              hello@c2c.in
            </li>
          </ul>
        </div>

        {/* Navigate */}
        <div>
          <h5 className="mb-5 text-sm font-bold text-slate-900">Navigate</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            {['Services', 'Success Stories', 'Discover', 'Care', 'Download App'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection('home')} className="transition duration-150 hover:text-slate-800">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div>
          <h5 className="mb-5 text-sm font-bold text-slate-900">Solution</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            {['Get in Touch', 'Technology', "Who're We?", 'Expertise'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection('home')} className="transition duration-150 hover:text-slate-800">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h5 className="mb-5 text-sm font-bold text-slate-900">Discover</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            {['Latest News', 'New Arrivals', 'Solution', 'Gain Profession', 'Career'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection('home')} className="transition duration-150 hover:text-slate-800">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h5 className="mb-5 text-sm font-bold text-slate-900">Follow Us</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            {[
              { label: 'Facebook', Icon: Facebook },
              { label: 'Instagram', Icon: Instagram },
              { label: 'LinkedIn', Icon: Linkedin },
              { label: 'Twitter', Icon: Twitter },
            ].map(({ label, Icon }) => (
              <li key={label}>
                <button className="flex items-center gap-2 transition duration-150 hover:text-slate-800">
                  <Icon size={14} />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-5 pt-6 text-xs text-slate-400 md:px-8">
        <span>©Copyright <span className="text-[#3b3ef0]">C2C Solutions</span> All rights reserved. 2026</span>
        <div className="flex gap-6">
          <button className="hover:text-slate-600 transition duration-150">Privacy &amp; Policy</button>
          <button className="hover:text-slate-600 transition duration-150">Terms &amp; Condition</button>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
