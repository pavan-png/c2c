import { memo } from 'react';

// Static orbs — no scroll listeners, no blur filters on animated elements
const FloatingOrbs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute left-[4%] top-14 h-72 w-72 rounded-full bg-cyan-400/14 blur-[80px]" />
    <div className="absolute right-[5%] top-28 h-80 w-80 rounded-full bg-fuchsia-400/8 blur-[100px]" />
    <div className="absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-[90px]" />
  </div>
);

export default memo(FloatingOrbs);
