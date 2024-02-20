/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252A34",
        secondary: "#1A202C",
        textPrimary: "#F2F2F2",
        textSecondary: "#22D3EE",
      },
    },
  },

  plugins: [],
};
