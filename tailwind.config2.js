/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
    },
    screens: {
      xs: "480px",
      lg: "1100px",
    },
  },
  plugins: [],
}
