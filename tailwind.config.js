/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        accent: "#06B6D4",
        darkgray: "#111827",
        ink: "#1F2937",
        muted: "#6B7280",
        mist: "#F8FAFC"
      },
      boxShadow: {
        soft: "0 18px 50px -26px rgba(15, 23, 42, 0.45)",
        glow: "0 20px 60px -35px rgba(37, 99, 235, 0.75)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      animation: {
        "gradient-shift": "gradientShift 16s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
        "dash-flow": "dashFlow 18s linear infinite"
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        dashFlow: {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(12%)" }
        }
      }
    }
  },
  plugins: []
};
