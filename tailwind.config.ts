import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Ensures dark mode works via class toggling
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#101827",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "sans-serif"],
        display: ["var(--font-clash)", "sans-serif"],
        bitter: ["var(--font-bitter)", "sans-serif"],
        bitterThin: ["var(--font-bitterThin)", "sans-serif"]
      },
      fontSize: {
        '10xl': '10rem', // You can adjust the value as needed
        '11xl': '12rem',
        '12xl': '14rem',
        // Add more sizes if needed
      },
    },
  },
  plugins: [],
};

