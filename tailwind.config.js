module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        mobile: { max: "760px" },
        tab: { min: "761px", max: "1199px" },
        lap: "1200px",
      },
    },
  },
  plugins: [],
};
