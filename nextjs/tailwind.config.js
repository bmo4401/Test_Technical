/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#0D1117',
        columnBackgroundColor: '#161C22',
      },
      animation: {
        rotate_1: 'spin_1 2s linear infinite',
        rotate_2: 'spin_2 2s linear infinite',
        rotate_3: 'spin_3 2s linear infinite',
        water: 'water 4s ease-in-out infinite',
        slow_spin: 'spin 5s linear infinite',
      },
      keyframes: {
        spin_1: {
          '0%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)' },
          '100%': {
            transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)',
          },
        },
        spin_2: {
          '0%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)' },
          '100%': {
            transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)',
          },
        },
        spin_3: {
          '0%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)' },
          '100%': {
            transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)',
          },
        },
        water: {
          '0%,100%': {
            'clip-path':
              'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
          },

          '50%': {
            'clip-path':
              'polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
