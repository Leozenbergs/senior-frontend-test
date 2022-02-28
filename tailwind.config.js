module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      xs: '240px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#33a6ba',
      'title': '#313e4f',
      'light-grey': '#d1d4d8', // used for descriptions or lead text
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'danger': '#ff7b91',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#989ea7',
      'gray-light': '#d3dce6',
      'background': '#e8edf3',
      'black': '#000',
      'white': '#fff',
      'transparent': 'transparent'
    },
    fontSize: {
      'xs': '.75rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    fontFamily: {
      sans: ['Open Sans', 'Roboto', 'Helvetica'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      // that is animation class
      animation: {
        fadeIn: 'fadeIn .4s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': {
            height: '0px',
            color: '#fff'
          },
          '100%': {
            height: '253px',
            color: '#313e4f'
          },
        }
      }),
    },
  },
  variants: {},
  plugins: [],
}
