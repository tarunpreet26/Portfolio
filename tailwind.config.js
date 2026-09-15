/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020817',
          900: '#050B18',
          800: '#0A1628',
          700: '#0F2040',
          600: '#162B55',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: 'rgba(34,211,238,0.15)',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          glow: 'rgba(168,85,247,0.15)',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #050B18 0%, #0A1628 50%, #0F2040 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(10,22,40,0.8) 0%, rgba(15,32,64,0.6) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,211,238,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(34,211,238,0.5), 0 0 80px rgba(168,85,247,0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34,211,238,0.3)',
        'glow-purple': '0 0 20px rgba(168,85,247,0.3)',
        'glow-blue': '0 0 20px rgba(96,165,250,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(34,211,238,0.1)',
      },
    },
  },
  plugins: [],
}
