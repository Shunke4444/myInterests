/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heroColor': '#00E5FF',
        'heroDarkBlue': '#011825',
        'heroLightBlue': '#008cab',
        'personaBgBlue': '#000aad',
        'personaLightBlue': '#c0d5e8',
        'personaText' : '#1d384a',
        'personaP': '#3c5668'
      },
      fontFamily: {
        'customFont': ["Orbitron", "serif"],
        '8bitFont': ["Orbitron", "Serif"],
        'personaFont' : ["EB Garamond", "serif"]
      },
      keyframes: {
        grow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        grow: 'grow 3s ease-in-out forwards',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180sdeg, rgba(2,0,36,1) 0%, rgba(0,10,173,1) 27%, rgba(0,212,255,1) 100%)',
      },
    },
  },
  plugins: [],
}