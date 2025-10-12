import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-reverse': 'float-reverse 3s ease-in-out infinite 1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0) rotate(180deg)' },
          '50%': { transform: 'translateX(-50%) translateY(-10px) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;


