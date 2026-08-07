import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff4fa',
          100: '#dbe6f3',
          200: '#bacce8',
          300: '#8baad9',
          400: '#5882c7',
          500: '#3461b4',
          600: '#254a93',
          700: '#1e3c78',
          800: '#1a3363',
          900: '#172b4f', // Biru gelap yang solid, kalem, dan sangat formal
        },
        accent: {
          DEFAULT: '#cc0000',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}

export default config