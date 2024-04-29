/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: { screens: {
    'sm': '500px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1620px',
    // => @media (min-width: 1536px) { ... }
  },
  extend: {
    screens: {
      'mobile': {'min': '200px', 'max': '640px'}
    },
  
    },
  },
  plugins: [],
}

