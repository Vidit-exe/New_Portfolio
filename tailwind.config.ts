// tailwind.config.ts

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // If you use src folder
    "./sections/**/*.{js,ts,jsx,tsx,mdx}", // If you have custom folders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
