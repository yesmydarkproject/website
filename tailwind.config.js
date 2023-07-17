/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "focus-ring": "#fced76",
      },
    },
    screens: {
      sm: "30em", // 480px
      md: "48em", // 768px
      lg: "62em", // 992px
      xl: "80em", // 1280px
      "2xl": "96em", // 1536px
    },
    fontFamily: {
      sans: [`"IBM Plex Sans JP"`, `sans-serif`],
    },
  },
  plugins: [],
};
