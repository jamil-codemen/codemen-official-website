module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "row": "calc(100% + 2rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
