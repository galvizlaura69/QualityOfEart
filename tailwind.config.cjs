import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary-400))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-700))',
          50: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))',
          950: 'hsl(var(--secondary-950))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))'
        },
        quaternary: {
          DEFAULT: 'hsl(var(--quaternary))',
          foreground: 'hsl(var(--quaternary-foreground))'
        },
        active: {
          DEFAULT: 'hsl(var(--active-200))',
          50: 'hsl(var(--active-50))',
          100: 'hsl(var(--active-100))',
          200: 'hsl(var(--active-200))',
          300: 'hsl(var(--active-300))',
          400: 'hsl(var(--active-400))',
          500: 'hsl(var(--active-500))',
          600: 'hsl(var(--active-600))',
          700: 'hsl(var(--active-700))',
          800: 'hsl(var(--active-800))',
          900: 'hsl(var(--active-900))',
          950: 'hsl(var(--active-950))',
          foreground: 'hsl(var(--active-foreground))'
        },
        inactive: {
          DEFAULT: 'hsl(var(--inactive-200))',
          50: 'hsl(var(--inactive-50))',
          100: 'hsl(var(--inactive-100))',
          200: 'hsl(var(--inactive-200))',
          300: 'hsl(var(--inactive-300))',
          400: 'hsl(var(--inactive-400))',
          500: 'hsl(var(--inactive-500))',
          600: 'hsl(var(--inactive-600))',
          700: 'hsl(var(--inactive-700))',
          800: 'hsl(var(--inactive-800))',
          900: 'hsl(var(--inactive-900))',
          950: 'hsl(var(--inactive-950))',
          foreground: 'hsl(var(--inactive-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      const titleUtilities = {
        '.title-sm': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: '600'
        },
        '.title-md': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '700'
        },
        '.title-lg': {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          fontWeight: '700'
        },
        '.title-xl': {
          fontSize: '2.5rem',
          lineHeight: '3.75rem',
          fontWeight: '700'
        },
        '.title-2xl': {
          fontSize: '3.5rem',
          lineHeight: '4.75rem',
          fontWeight: '700'
        }
      }

      addUtilities(titleUtilities)
    })
  ]
}
