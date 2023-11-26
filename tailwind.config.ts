import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1140px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
      screens: {
        sm: "1140px",
        md: "1140px",
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    fontFamily: {
      primary: "var(--font-primary)",
    },
    colors: {
      // default
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      // theme
      primary: {
        DEFAULT: "var(--color-primary)",
      },
      secondary: {
        DEFAULT: "var(--color-secondary)",
      },
      tertiary: {
        DEFAULT: "var(--color-tertiary)",
      },
      brand: {
        DEFAULT: "var(--color-brand)",
        100: "var(--color-brand-100)",
      },
      invert: {
        DEFAULT: "var(--color-invert)",
      },
      error: {
        DEFAULT: "var(--color-error)",
      },
      success: {
        DEFAULT: "var(--color-success)",
      },
      "surface-primary": {
        DEFAULT: "var(--color-surface-primary)",
      },
      "surface-secondary": {
        DEFAULT: "var(--color-surface-secondary)",
      },
      "surface-tertiary": {
        DEFAULT: "var(--color-surface-tertiary)",
      },
      "surface-brand": {
        DEFAULT: "var(--color-surface-brand)",
      },
      "surface-invert": {
        DEFAULT: "var(--color-surface-invert)",
      },
      "surface-error": {
        DEFAULT: "var(--color-surface-error)",
      },
      "surface-success": {
        DEFAULT: "var(--color-surface-success)",
      },
      "surface-accent": {
        DEFAULT: "var(--color-surface-accent)",
      },
    },
  },
  plugins: [],
};
export default config;
