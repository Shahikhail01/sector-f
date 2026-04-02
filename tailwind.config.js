/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:    '#0D0906',
        dark2:   '#1A110B',
        dark3:   '#241A12',
        terra:   '#C97A4A',
        'terra-dark': '#A0602E',
        gold:    '#C5963A',
        'gold-light': '#E0BC6A',
        cream:   '#F8F0E3',
        cream2:  '#F0E5D3',
        cream3:  '#E8D9C0',
        stone:   '#8B7355',
        brown:   '#5C3D1E',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee':       'marquee 28s linear infinite',
        'marquee-slow':  'marquee 44s linear infinite',
        'pulse-slow':    'pulse 3s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
        'spin-slow':     'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5963A, #C97A4A)',
        'dark-gradient': 'linear-gradient(180deg, transparent, #0D0906)',
      },
    },
  },
  plugins: [],
};
