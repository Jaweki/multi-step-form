/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        desktop: '1440px'
      },
      colors: {
        primary: {
          marineBlue: 'hsl(213, 96%, 18%)',
          purplishBlue: 'hsl(243, 100%, 62%)',
          pastelBlue: 'hsl(228, 100%, 84%)',
          lightBlue: 'hsl(206, 94%, 87%)',
          strawberryRed: 'hsl(354, 84%, 57%)',
        },
        neutral: {
          coolGray: 'hsl(231, 11%, 63%)',
          lightGray: 'hsl(229, 24%, 87%)',
          magnolia: 'hsl(217, 100%, 97%)',
          alabaster: 'hsl(231, 100%, 99%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        regular: '400px',
        medium: '500px',
        bold: '700px',
      }
    },
  },
  plugins: [],
}

