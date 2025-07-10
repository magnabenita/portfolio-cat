/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        walkleft: {
          '0%': { transform: 'translateX(120vw)' },
          '100%': { transform: 'translateX(-150vw)' },
        },
        walkright: {
          '0%': { transform: 'translateX(-150vw) scaleX(-1)' },
          '100%': { transform: 'translateX(120vw) scaleX(-1)' },
        },
      },
      animation: {
        walkleft: 'walkleft 30s linear infinite',
        walkright: 'walkright 30s linear infinite',
      },
    },
  },
  plugins: [],
};
