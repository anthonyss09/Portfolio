import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "rgb(var(--primary-light))",
        blueLight: "rgb(var(--blue-light))",
        blueMed: "rgb(var(--blue-med))",
        blueVibe: "rgb(var(--blue-vibe))",
        greenLight: "rgb(var(--green-light))",
        purpleLight: "rgb(var(--purple-light))",
        purpleMed: "rgb(var(--purple-med))",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
