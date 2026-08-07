/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sawitto-blue': '#1E3A8A', // Warna biru dongker (Navy) elegan
        'sawitto-red': '#B91C1C',  // Warna merah bata yang kalem tapi tegas
        'sawitto-light': '#F8FAFC', // Warna latar belakang putih tulang/abu sangat muda
      },
      fontFamily: {
        // Bisa diganti dengan font Google Fonts pilihanmu nanti
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}