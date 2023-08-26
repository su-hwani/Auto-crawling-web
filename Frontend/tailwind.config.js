/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors:
    {
      blackBttn: '#000000',
      myWhite: '#ffffff',
      myGray: '#d1d5db',
      myBlue: "#6366f1",
      myGray_bold: '#6b7280',
      slate300: '#cbd5e1',
      slate200: '#e2e8f0'
    },
    theme: {
      extend: {
        fontFamily: {
         'primary': ['Black Han Sans'],
        },
      },
    },
  },
  plugins: [],
}

