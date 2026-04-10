import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "oikos-blue": "#4169E1",
        "oikos-navy": "#1A2F7A",
        "oikos-orange": "#E8643C",
        "oikos-green": "#10B981",
      },
    },
  },
  plugins: [],
};
export default config;
