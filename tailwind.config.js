module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'main-backImg': "url('/img/background.png')",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      spacing: {
        '5px': '5px',
      },
      fontSize: {
        large: ['80px', '80px'],
      },
      height: {
        '96': '24rem',
      }
    },
  },
  plugins: [],
}
