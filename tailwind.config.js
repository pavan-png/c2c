/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00d4ff',
          blue: '#00a8cc',
          navy: '#0a2540',
          slate: '#08111f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 60px -12px rgba(0, 212, 255, 0.30)',
        soft: '0 25px 70px -20px rgba(15, 23, 42, 0.28)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #040b14 0%, #0a2540 34%, #16385e 62%, #111827 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))',
        'footer-gradient': 'linear-gradient(90deg, #020617 0%, #0a2540 55%, #111827 100%)',
      },
    },
  },
  plugins: [],
};
