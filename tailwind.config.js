/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSansXFaNum"],
      },
      colors: {
        "main-bg": "#F8F8F8",
        lightDark: "#747893",
      },
    },
  },
  plugins: [],
};
