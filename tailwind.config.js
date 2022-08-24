/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Lobster: [
        'Lobster',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
      ],
    },
    extend: {
      colors: {
        'dentibiotest-blue': '#3E64C2',
        'dentibiotest-blue-400': '#7E94CC',
        'dentibiotest-blue-200': '#ECEFF9',
      },
    },
  },
  plugins: [],
};
