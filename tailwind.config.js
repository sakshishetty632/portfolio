
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // fontFamily: {
        //   poppins: ['var(--font-poppins)']
        // },
        colors: {
          teal: {
            700:'#008080',
            900:'#004D4D'
          },
          yellow: {
            400: '#FEDE00',
          }
        },
        backgroundImage: {
          heropattern: "url(/herobgc.jpg)",
        }
      },
      plugins: [
        require('@tailwindcss/line-clamp'),
      ],
    }
  }
  