import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e', // Ton vert principal
          600: '#16a34a',
          900: '#14532d', // Vert sombre
        },
        dark: {
          900: '#0f172a', // Bleu nuit footer
        }
      },
    },
  },
  plugins: [],
};
export default config;