/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'exp8-background': "url('../src/assets/images/ex8.avif')",
      }
    },
    fontFamily: {
      heading: ['Source Serif Pro', 'Georgia', 'serif'],
      title: ['Times New Roman', 'serif'],
      text: ['Roboto', 'Halvetica Neue', 'sans-serif'],
      pargraph: ['Synonym', 'system-ui', 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin 10s linear infinite',
      'bounce': "bounce 2s linear infinite"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
