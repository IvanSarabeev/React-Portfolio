/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'Light-background': "url('../public/images/bgLightTech.jpg')",
        'Dark-background': "url('../public/images/bgTech.jpg')",
        'light-background': "url('../public/images/bgLight.jpg')",
        'dark-background': "url('../public/images/bgDark.jpg')",
        'exp-background': "url('../public/images/ex1.avif')",
        'exp2-background': "url('../public/images/ex2.avif')",
        'exp3-background': "url('../public/images/ex3.avif')",
        'exp4-background': "url('../public/images/ex6.avif')",
        'exp8-background': "url('../public/images/ex8.avif')",
      }
    },
    fontFamily: {
      heading: ['Source Serif Pro', 'Georgia', 'serif'],
      title: ['Times New Roman', 'serif'],
      text: ['Roboto', 'Halvetica Neue', 'sans-serif'],
      pargraph: ['Synonym', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
