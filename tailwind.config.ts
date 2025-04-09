import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: '#3A3A3C',
        input: '#3A3A3C',
        ring: '#B38ADD',
        background: '#a4a4aa',
        foreground: '#121212',
        primary: {
          DEFAULT: '#B38ADD',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#555555',
          foreground: '#ffffff'
        },
        destructive: {
          DEFAULT: '#ff4d4f',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#D3D3D3',
          foreground: '#555555'
        },
        accent: {
          DEFAULT: '#B38ADD',
          foreground: '#ffffff'
        },
        popover: {
          DEFAULT: '#D3D3D3',
          foreground: '#121212'
        },
        card: {
          DEFAULT: '#D3D3D3',
          foreground: '#121212'
        },
        sidebar: {
          DEFAULT: '#a4a4aa',
          foreground: '#D3D3D3',
          primary: '#121212',
          'primary-foreground': '#ffffff',
          accent: '#B38ADD',
          'accent-foreground': '#ffffff',
          border: '#3A3A3C',
          ring: '#B38ADD'
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

