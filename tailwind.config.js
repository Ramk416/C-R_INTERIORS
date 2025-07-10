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
        '.logo-text': {
          '-webkit-text-stroke': '2px white',
          'color': 'transparent',
          'text-shadow': '1px 1px 3px rgba(0, 0, 0, 0.6)',
          'font-family': "'Playfair Display', serif",
        },
      });
    },
  ],
};
