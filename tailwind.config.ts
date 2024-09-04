import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        background: "#0B0C15",
        text: "#E2E2EF",
        primary: "#1C1F35",
        secondary: "#2A2E50",
        accent: "#BDBDDB",
      },
      fontSize: {
        // clamp: "clamp(4rem, 15vw, 20rem)",
        clamp: "15vw",
        tw: "clamp(1.5rem, 2vw, 12rem)",
        description: "clamp(1rem, 2vw, 6rem)",
        // buttons: "clamp(1rem, 1vw, 6rem)",
        buttons: "1vw",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
