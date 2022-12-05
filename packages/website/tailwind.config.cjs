/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,svelte}'
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      default: ['Space Mono', 'monospace']
    },
    extend: {
    },
  },
  plugins: [],
}
