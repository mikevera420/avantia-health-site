import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from Avantia Brand Kit
        cyan: {
          DEFAULT: '#00C4CC',
          50: '#E6FAFB',
          100: '#CCF5F6',
          200: '#99EBEE',
          300: '#66E1E5',
          400: '#33D7DD',
          500: '#00C4CC',
          600: '#009DA3',
          700: '#00767A',
          800: '#004E52',
          900: '#002729',
        },
        green: {
          DEFAULT: '#2DBE6C',
          50: '#E9F9F0',
          100: '#D3F3E1',
          200: '#A7E7C3',
          300: '#7BDBA5',
          400: '#4FCF87',
          500: '#2DBE6C',
          600: '#249856',
          700: '#1B7241',
          800: '#124C2B',
          900: '#092616',
        },
        // Refined grays for better contrast
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          150: '#E9EEF4',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
        'glow-cyan': '0 0 20px rgba(0, 196, 204, 0.3)',
        'glow-green': '0 0 20px rgba(45, 190, 108, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(1deg)' },
          '50%': { transform: 'translate(0, -20px) rotate(0deg)' },
          '75%': { transform: 'translate(-10px, -10px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
