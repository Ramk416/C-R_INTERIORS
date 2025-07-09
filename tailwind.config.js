/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.stroke-text': {
        '-webkit-text-stroke': '1px white',
        'color': 'white',
      },
      '.shadow-text': {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    });
  },
],
};
