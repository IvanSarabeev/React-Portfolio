/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'exp8-background': "url('../src/assets/images/ex8.avif')",
      }
    },
    fontFamily: { "inter": "Inter, sans-serif" },
    animation: {
      'spin-slow': 'spin 10s linear infinite',
      'bounce': "bounce 2s linear infinite"
    },
  },
}
