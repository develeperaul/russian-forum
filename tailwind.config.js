/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  prefix: 'tw-',
  theme: {
    extend: {
      spacing: {
        8.1: '2.11rem',
        5.2: '1.69rem',
        15: '3.75rem',
        27: '6.75rem',
        11: '3.38rem',
      },
    },
    fontSize: {
      title00: '3rem',
      title01: '5.0625rem',
      t00: '1.5rem',
      t01: '2.53125rem',
      t02: '1.25rem',
      t03: '2.10938rem',
      t04: '1.5rem',
      t05: '2rem',
      t06: '2.5rem',
      t07: '2rem',
      t08: '10.125rem',
      t09: '6.75rem',
      t10: '2.25rem',
      t11: '3.79688rem',
      t12: '4rem',
      t13: '2.53125rem',
      t14: '1.6875rem',
      t15: '3.375rem',
      t16: '4.5rem',
      t17: '7.59375rem',
      base: '1rem',
      h00: '6rem',
      h01: '3rem',
    },
    colors: {
      orange: '#FF8E4F',
      red: '#FF5656',
      green: '#21CA63',
      deep: '#534FFF',
      title: '#FAFAFA',
      blue: '#0E2582',
      'blue-light': '#3A56C7',
    },
    letterSpacing: {
      6: '0.0625rem',
      10: '0.10544rem',
      12: '0.125rem',
      21: '0.21094rem',
      25: '0.25rem',
      42: '0.42188rem',
    },
    fontFamily: {
      avenir: 'Avenir',
      ibm: 'IBM',
    },
    screens: {
      lg: '3840px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          // maxWidth: '1440px',
          width: '100%',

          padding: '0 256px 0 0',
          //   marginRight: "auto",
          //   marginLeft: "auto",
          '@media (min-width: 3840px)': {
            padding: '0 0px',
          },
        },
      })
    },
  ],
}
