/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Ubuntu Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        ubuntu: {
          orange: '#E95420',
          purple: '#772953',
          warmgrey: '#AEA79F',
          coolgreys: {
            100: '#F7F7F7',
            200: '#E6E6E6',
            300: '#CDCDCD',
            400: '#B3B3B3',
            500: '#999999',
            600: '#808080',
            700: '#666666',
            800: '#4D4D4D',
            900: '#333333'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
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
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};