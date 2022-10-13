/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      black: "#aaa",
      white: "#fff",

      //GRAY
      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-400": "#7c7c8a",
      "gray-200": "#c4c4cc",
      "gray-100": "#e1e1e6",

      //CYAN
      "cyan-500": "#81d8f7",

      //GREEN
      "green-900": "#016a3d",
      "green-500": "#04d361",
      "green-200": "#3fff95",

      //PURPLE
      "purple-500": "#633bbc",
    },
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
