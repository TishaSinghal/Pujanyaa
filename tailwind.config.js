/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#fffdf7',
        customRed: '#6A1110',
        customPink: '#F2E7D3',
        customOr:'#F16845'
      },
    },
  },
  plugins: [],
}

