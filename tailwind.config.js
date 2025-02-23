 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fde047", // Yellow-400
          DEFAULT: "#facc15", // Yellow-500
          dark: "#ca8a04", // Yellow-600
        },
        secondary: {
          light: "#fcd34d", // Amber-300
          DEFAULT: "#fbbf24", // Amber-400
          dark: "#d97706", // Amber-600
        },
      },
      backgroundImage: {
        "yellow-gradient": "linear-gradient(to bottom, #fcd34d, #ca8a04)", // Light Brown → Dark Yellow
        "yellow-radial": "radial-gradient(circle, #facc15, #ca8a04)", // Radial effect
      },
      boxShadow: {
        "yellow-glow": "0px 0px 20px rgba(250, 204, 21, 0.6)", // Glow effect
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  safelist: [
    "bg-yellow-600", "hover:bg-yellow-200",
    "from-yellow-400", "to-yellow-900", "from-amber-400", "to-amber-600",
    "bg-gradient-to-b", "bg-gradient-to-r",
    "text-yellow-900", "text-yellow-700",
    "border-yellow-700", "shadow-yellow-glow",
  ],
  plugins: [],
};
