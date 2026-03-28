/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        primary: "#C9A84C",
        surface: "#1A1A1A",
        "text-primary": "#FFFFFF",
        "text-muted": "#666666",
      },
    },
  },
  plugins: [],
};
