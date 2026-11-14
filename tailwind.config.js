/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './constants.tsx',
    './constants/**/*.ts',
    './components/Layout/**/*.{ts,tsx}',
    './components/Sections/**/*.{ts,tsx}',
    './components/UI/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Be Vietnam Pro', 'Inter', 'sans-serif'],
        editorial: ['Playfair Display', 'Be Vietnam Pro', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        inkica: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#2563EB',
          700: '#1E40FF',
          800: '#1E3A8A',
        },
        gold: {
          400: '#38BDF8',
          500: '#1E40FF',
          600: '#1D4ED8',
          primary: '#1E40FF',
          bright: '#0EA5E9',
          deep: '#1E3A8A',
        },
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(15 23 42 / 0.04)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 24s linear infinite',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.92', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
