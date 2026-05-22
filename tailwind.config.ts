import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          950: "#29120b",
          900: "#4b240f",
          800: "#7a3e1d",
          700: "#8f5130",
          100: "#f5eee8"
        },
        cream: "#f5eee8"
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(75, 36, 15, 0.18)",
        soft: "0 18px 40px rgba(75, 36, 15, 0.12)"
      },
      borderRadius: {
        xl: "1.5rem",
        xxl: "2rem"
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top left, rgba(234, 206, 177, 0.16), transparent 32%), linear-gradient(135deg, #4b240f 0%, #7a3e1d 55%, #1f1f1f 100%)"
      }
    }
  },
  plugins: []
};

export default config;
