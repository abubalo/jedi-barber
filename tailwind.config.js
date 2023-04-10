/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/assets/bg.jpg')",
        hero2: "url('../public/assets/img2.jpg')"
      },

      height:{
        
        '10v': "10vh",
        '20v': "20vh",
        '30v': "30vh",
        '40v': "40vh",
        '50v': "50vh",
        '60v': "60vh",
        '70v': "70vh",
        '80v': "80vh",
        '90v': "90vh",
        '100v': "100vh",
    
      }
    },
  },
  plugins: [],
};
