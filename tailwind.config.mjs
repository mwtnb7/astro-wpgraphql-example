/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', '**/@wp-block-tools/styles/**/*.js'],
  theme: {
    screens: {
      sm: '0px',
      md: '750px',
      lg: '950px',
      xl: '1140px',
      '2xl': '1440px'
    },
    variants: {
      extend: {
        backgroundColor: ['active']
      }
    },
    extend: {
      colors: {
        primary: '#25774c',
        secondary: '#000'
      }
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: {
        50: '#f0f9f3',
        100: '#daf1e0',
        200: '#b8e2c6',
        300: '#89cca4',
        400: '#57b07d',
        500: '#359461',
        600: '#25774c',
        700: '#1d5f3e',
        800: '#194c32',
        900: '#163e2b',
        950: '#0b2318'
      },
      secondary: '#000',
      danger: '#e3342f'
    })
  },
  plugins: []
};
