/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'techLigh-background': "url('../public/images/bgLightTech.jpg')",
        'techDark-background': "url('../public/images/bgTech.jpg')",
        'light-background': "url('../public/images/bgLight.jpg')",
        'dark-background': "url('../public/images/bgDark.jpg')",
      }
    },
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
