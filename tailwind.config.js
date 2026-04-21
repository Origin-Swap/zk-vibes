/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Courier New"', 'monospace'],
        display: ['"VT323"', '"Courier New"', 'monospace'],
      },
      colors: {
        terminal: {
          green:  '#00ff41',
          dim:    '#00aa2a',
          dark:   '#003b00',
          black:  '#0a0a0a',
          gray:   '#1a1a1a',
          amber:  '#ffb000',
          red:    '#ff2222',
          cyan:   '#00ffff',
          white:  '#c8ffc8',
        },
      },
      animation: {
        'blink':       'blink 1s step-end infinite',
        'glitch':      'glitch 2.5s infinite',
        'glitch2':     'glitch2 3s infinite',
        'scanline':    'scanline 8s linear infinite',
        'flicker':     'flicker 0.15s infinite',
        'typewriter':  'typewriter 3s steps(40) forwards',
        'noise':       'noise 0.5s steps(1) infinite',
        'scroll-up':   'scroll-up 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        glitch: {
          '0%':   { clipPath: 'inset(0 0 98% 0)', transform: 'translate(-4px, 0)' },
          '5%':   { clipPath: 'inset(40% 0 50% 0)', transform: 'translate(4px, 0)' },
          '10%':  { clipPath: 'inset(80% 0 5% 0)',  transform: 'translate(-2px, 0)' },
          '15%':  { clipPath: 'inset(20% 0 70% 0)', transform: 'translate(2px, 0)' },
          '20%':  { clipPath: 'inset(60% 0 30% 0)', transform: 'translate(-4px, 0)' },
          '25%':  { clipPath: 'inset(0 0 100% 0)',   transform: 'translate(0, 0)' },
          '100%': { clipPath: 'inset(0 0 100% 0)',   transform: 'translate(0, 0)' },
        },
        glitch2: {
          '0%':   { clipPath: 'inset(0 0 95% 0)', transform: 'translate(4px, 0)',  color: '#ff2222' },
          '8%':   { clipPath: 'inset(60% 0 30% 0)', transform: 'translate(-4px, 0)', color: '#00ffff' },
          '16%':  { clipPath: 'inset(30% 0 60% 0)', transform: 'translate(2px, 0)',  color: '#ff2222' },
          '20%':  { clipPath: 'inset(0 0 100% 0)', transform: 'translate(0, 0)' },
          '100%': { clipPath: 'inset(0 0 100% 0)', transform: 'translate(0, 0)' },
        },
        scanline: {
          '0%':   { top: '0%' },
          '100%': { top: '100%' },
        },
        flicker: {
          '0%':   { opacity: '0.97' },
          '50%':  { opacity: '0.94' },
          '100%': { opacity: '0.98' },
        },
        noise: {
          '0%':   { backgroundPosition: '0 0' },
          '25%':  { backgroundPosition: '-10px 5px' },
          '50%':  { backgroundPosition: '5px -10px' },
          '75%':  { backgroundPosition: '-5px 10px' },
          '100%': { backgroundPosition: '10px -5px' },
        },
        'scroll-up': {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
