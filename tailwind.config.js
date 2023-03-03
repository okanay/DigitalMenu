/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({opacityValue}) => {

      if (opacityValue !== undefined) {
        return `rgba(var(${variableName}), ${opacityValue})`
      } else {
        return `rgba(var(${variableName}))`
      }
    }
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smPhone': "375px",
        'basePhone': "390px",
        'lgPhone': "414px",
        'xlPhone': "440px",
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors : {
        skin : {
          'theme-fill' : withOpacity('--theme-fill'),
          'theme-text' : withOpacity('--theme-text'),
          'theme-text-muted' : withOpacity('--theme-text-muted'),
          'theme-50' : withOpacity('--theme-50'),
          'theme-100' : withOpacity('--theme-100'),
          'theme-200' : withOpacity('--theme-200'),
          'theme-300' : withOpacity('--theme-300'),
          'theme-400' : withOpacity('--theme-400'),
          'theme-500' : withOpacity('--theme-500'),
          'theme-600' : withOpacity('--theme-600'),
          'theme-700' : withOpacity('--theme-700'),
          'theme-800' : withOpacity('--theme-800'),
          'theme-900' : withOpacity('--theme-900'),
        }
      }
    },
  },
  plugins: [],
}