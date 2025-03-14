/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        mainBg: "#080808",
        orange: "#F46F51",
        success: '#1DF49A',
        warning: '#E58947',
        error: '#F00'
      }
    },
   
    
  },
  plugins: [
  ],
}

