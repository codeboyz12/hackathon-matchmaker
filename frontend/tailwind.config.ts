import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        navy: {
          50:  "#EEF1F8",
          100: "#D4DAE9",
          200: "#A9B5D3",
          300: "#7E90BD",
          400: "#536BA7",
          500: "#2D4A8C",
          600: "#243B70",
          700: "#1B2A5B",
          800: "#121C3D",
          900: "#0A0F22",
        },
      },
    },
  },
  plugins: [],
};

export default config;
