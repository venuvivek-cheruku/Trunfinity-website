/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}", "./pages/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        subheading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        links: ["Quicksand", "sans-serif"],
        cta: ["Roboto", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        tPrimary: "#000000",
      },
    },
  },
  plugins: [],
};
