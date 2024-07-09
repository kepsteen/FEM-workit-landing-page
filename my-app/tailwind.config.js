/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghost: "#FCF8FF",
        eucalyptus: "#44FFA1",
        davygrey: "#584D62",
        darkpurple: "#24053E"
      },
      fontFamily: {
        manrope: ['Manrope', 'serif'],
        fraunces: ['Fraunces', 'serif']
      },
      fontSize: {
        "body": ['1.125rem', {lineHeight: '2rem'}],
        "heading-s": ['2rem', {lineHeight: '2.5rem'}],
        "heading-m": ['3.5rem', {lineHeight: '4rem'}],
        "heading-l": ['5rem', {lineHeight: '5rem' }],
      }
    },
  },
  plugins: [],
}
