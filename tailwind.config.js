/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2ede9",
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans'],
      iSerif: ['Instrument Serif', 'serif'],
      inter: ['Inter, sans-serif']
    },
  },
  plugins: [],
};
