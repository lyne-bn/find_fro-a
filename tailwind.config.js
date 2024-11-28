/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Fredoka"', 'sans-serif'],  
    },
    colors: {
      'logo-blue': '#020B56', 
      'logo-green': '#1AE3D9',
      'logo-white':' #EAF6FF',
      'white':'#FFFFFF',
      'red':'#DC1515',
    },
  },
  plugins: [],
}

