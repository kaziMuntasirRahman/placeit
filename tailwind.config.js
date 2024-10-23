/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#71B100',
        bgPrimary: '#1A1D1F',
      },
      fontSize: {
        customSize: '100px'
      },
      fontFamily: {
        primaryFont: 'arial'
      }
    },
  },
  plugins: [require("daisyui")],
}

