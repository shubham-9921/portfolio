/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0 50px 25px -24px rgb(0 0 0 / 0.3)'
      }
    },
  },
  plugins: [],
}

