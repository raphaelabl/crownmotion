/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f48fb1',
          hover: '#f06292',
        },
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
        error: '#e74c3c',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('assets/home/home.jpg')",
      },
    },
  },
  plugins: [],
}
