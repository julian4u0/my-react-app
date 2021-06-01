module.exports = {
  // purge: [],
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grayb': '#121212',
        'grayc': '#2a2a2a'
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
