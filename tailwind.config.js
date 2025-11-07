/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#14213D',
        accent: '#FCA311',
        light: '#E5E5E5',
        dark: '#14213D',
      },
    },
  },
  plugins: [],
}
