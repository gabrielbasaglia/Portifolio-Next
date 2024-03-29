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
      screens: {
        xxs: "395px",
        xs: "475px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      boxShadow: {
        "3xl": "10px 10px 10px 0px rgba(0,0,0,0.40)",
      },
      darkmode: "class",
    },
  },

  plugins: [],
};
