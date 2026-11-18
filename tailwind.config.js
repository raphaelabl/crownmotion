/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Markenfarben (unverändert): Rosa + Pink-Akzent + Schwarz/Anthrazit
        primary: {
          DEFAULT: '#f5b3c9',
          hover: '#f06292',
        },
        blush: {
          50: '#fef7f9',
          100: '#fdeef3',
          200: '#fadbe6',
          300: '#f5b3c9',
          400: '#f28fb1',
          500: '#f06292',
        },
        ink: {
          DEFAULT: '#2c2c2c',
          900: '#1d1b1c',
          700: '#3a3638',
          500: '#6b6467',
          300: '#a59ea1',
        },
        cream: '#fffbfc',
        text: {
          primary: '#2c2c2c',
          secondary: '#333',
          tertiary: '#555',
          muted: '#666',
          light: '#ccc',
          lighter: '#999',
        },
        bg: {
          primary: '#fff',
          secondary: '#f8f8f8',
          tertiary: '#f5f5f5',
        },
        border: {
          light: '#e5e5e5',
          medium: '#eee',
          dark: '#ddd',
        },
        footer: {
          bg: '#2c2c2c',
          text: '#f5f5f5',
          border: '#444',
        },
        error: '#d64545',
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        arch: '999px 999px 0 0',
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      maxWidth: {
        site: '1320px',
      },
    },
  },
  plugins: [],
}
