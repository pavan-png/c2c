import React from 'react';
import ReactDOM from 'react-dom/client';
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation} strict>
      <MotionConfig transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }} reducedMotion="never">
        <App />
      </MotionConfig>
    </LazyMotion>
  </React.StrictMode>,
);
