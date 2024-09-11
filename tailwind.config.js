/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7C83FD',
          DEFAULT: '#000000',
          dark: '#4A57D8',
        },
        secondary: {
          light: '#f1f5f9',
          DEFAULT: '#6b7280',
          dark: '#FF77D0',
        },
        accent: {
          light: '#FFDE59',
          DEFAULT: '#64748b',
          dark: '#E0BC00',
          bright: '#4378f8',
        },
      },
    },
  },
  plugins: [],
}

