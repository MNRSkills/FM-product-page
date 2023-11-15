/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: " hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      whiteNoise: "hsl(0, 0%, 100%)",
      blackNoise: "hsl(0, 0%, 0%)",
      orangePrimary: "hsl(26, 100%, 55%)",
      paleOrangePrimary: "hsl(25, 100%, 94%)",
      overlay: "rgba(0, 0, 0, 0.5)"
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },

      fontFamily: {
        header: ["Kumbh"],
        content: ["Kumbh"],
      },
    },
  },
  plugins: [],
};
