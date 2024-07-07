
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
     
      screens: {
        'mdd': '880px', // Custom breakpoint
      },
    },
  },
  plugins: [],
}

