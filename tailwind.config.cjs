/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: '0.6rem',
      // base: '0.8rem',
      // '5xl': '2.3rem',
    },
    extend: {
      colors: {
        'gradient-color-1': 'rgba(42, 245, 152, 1)',
        'gradient-color-2': 'rgba(0, 158, 253, 1)'
      },
      backgroundImage: {
       'header-cover': "url('./assets/image/bg-cover.png')",
      }
    }
  },
  plugins: [],
};
