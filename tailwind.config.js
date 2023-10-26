/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-p' : '#252525',
        'custom-w' : '#FAFAFA',
        'custom-yellow' : '#FBBC05',
        'custom-header-color' : '#252525',
        'custom-sub-heading-color' : '#9B9B9B',
        'nav-color': '#ECECEC',
        'card-bg': '#FFF',
        'card-border': '#D1D1D1',
        'btn-color': '#353A40',
        'sidebar-color': '#BABABA',
        'footer-bg': '#27282B',

      },
      fontFamily:{
        '':'',
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'serif']
      },
      backgroundImage: {
        'gradient-diagonal': 'linear-gradient(177deg, #353A40 -13.49%, #1F1F1F 109.75%)',
      },
    },
  },
  plugins: [],
}