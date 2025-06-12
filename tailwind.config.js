/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      darkMode: false,
      boxShadow: {
        brand: '0px 0px 6px #e4e4e5;',
        brand2: 'rgb(67 71 80 / 16%) 0px 0px 12px;',
        brand3: 'rgb(77, 81, 86) 0px 0px 12px;',
        transformControls: '0px 0px 6px #4645453;'
      },
      transitionProperty: {
        'max-height': 'max-height',
        height: 'height'
      },
    },
  },
  plugins: [],
}

