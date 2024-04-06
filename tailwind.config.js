/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        yellow: "#e5e900",
        gray: "#010101",
      },
      spacing: {},
      fontFamily: {
        leelawadee: "Leelawadee",
        "jetbrains-mono": "'JetBrains Mono'",
      },
      borderRadius: {
        mid: "17px",
        mini: "15px",
        "6xl": "25px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "9xl": "28px",
      "31xl": "50px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
