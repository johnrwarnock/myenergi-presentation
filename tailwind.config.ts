import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Overpass', 'sans-serif'],
        body: ['Overpass', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#40ff7a',
          dark: '#00cc55',
          light: '#80ffaa',
        },
      },
      animation: {
        'slide-in': 'slideIn 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-out': 'slideOut 0.3s ease forwards',
        'fade-in': 'fadeIn 0.25s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'draw-line': 'drawLine 1.2s ease forwards',
        'count-up': 'countUp 0.6s ease forwards',
      },
      keyframes: {
        slideIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideOut: {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        drawLine: {
          from: { strokeDashoffset: '300' },
          to: { strokeDashoffset: '0' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
