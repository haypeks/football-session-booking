/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "hero-background": {
          backgroundImage: "url('assets/herobg.jpg')",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
