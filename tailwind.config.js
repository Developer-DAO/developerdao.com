
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '48/100': '48%'
      },
      colors: {
        text_color: {
          DEFAULT: '#282c34'
        },
        gray: {
          DEFAULT: 'gray-50',
          light: 'gray-50',
          med: 'gray-300',
          dark: 'gray-800'
        },
        blue: {
          light: '#a2d6f9',
          DEFAULT: '#1e96fc',
          dark: '#072ac8'
        },
        brown: {
          light: '#faf3dd',
          DEFAULT: '#8f8355',
          dark: '#352f1c'
        },
        green: {
          light: '#90f9ac',
          DEFAULT: '#3f9459',
          dark: '#13361e'
        },
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}



