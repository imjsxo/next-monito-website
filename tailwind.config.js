/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      width: {
        '2lg': '1180px',
        'banner': '675px',
        'productdetail': '264px',
        'blogthumb': '380px',
        '84': '84px',
        '73': '73%'
      },
      backgroundColor: {
        'blue': '#003459',
        '2ndblue': '#002A48',
        'grey': '#242B33',
        '2black': '#00171F',
        '2grey': '#667479',
        'orange': '#FCEED5',
        'lightblue': '#00A7E7',
        'yellow': '#FFE7BA',
        'lightgrey': '#99A2A5',
        '#CCD1D2': '#CCD1D2'
      },
      fontSize: {
        '4.5xl': '47px',
        '5.5xl': '52px',
        'xxs': '10px'
      },
      objectPosition: {
        '1/3': '30%',
        '1/20': '5%',
        '17': '17%',
        '4/100': '4%'
      },
      boxShadow: {
        'petcard' : '0px 4px 28px -2px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
