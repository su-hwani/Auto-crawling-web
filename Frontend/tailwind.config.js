/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary':['Black Han Sans']
    },
    colors:
    {
      blackBttn: '#000000',
      myWhite: '#ffffff',
      myGray: '#d1d5db',
      myBlue: "#6366f1",
      myGray_bold: '#6b7280'
    }
  },
  plugins: [],
  }
}
