/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'xs':'320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors:{
      Primary:'#252734',
      secendary:'#2A2C39',
      third:'#282A37',
      tsecendary:'#858792',
    },
    fontFamily: {
      cormorant:'Cormorant Garamond',
      robotoS:'Roboto Slab',
      
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

