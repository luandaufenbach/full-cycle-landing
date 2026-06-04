import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium color system
        primary: {
          DEFAULT: '#2D5016', // Verde terra (títulos, CTAs)
          dark: '#1F3A0F',
          light: '#E8F5E9',
          50: '#F8FAF6',
        },
        secondary: {
          DEFAULT: '#8B7D5E', // Bege natural (acentos)
          light: '#F5F1E8',
        },
        accent: {
          brazil: '#1F4D4D', // Azul-verde (Brasil)
          au: '#D4A574', // Dourado (Austrália)
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          700: '#4A4A4A',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        // Premium typography scale
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-sm': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-sm': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-sm': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // Premium spacing scale
        'safe-mobile': '16px',
        'safe-tablet': '24px',
        'safe-desktop': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
