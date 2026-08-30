/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Spatia app palette — mirrors Frontend/src/theme/colors.js so the
        // legal site reads as the same product as the app.
        spatia: {
          bg: '#F6F3EE',
          bgTop: '#F1ECE4',
          surface: '#FFFFFF',
          surface2: '#F6F3EE',
          ink: '#1B1A17',
          ink2: '#57534B',
          ink3: '#9A9488',
          line: '#E7E2D9',
          lineSoft: '#EFEBE3',
          accent: '#BC5B3A',
          accentPress: '#A44E30',
          accentDeep: '#7E3A22',
          accent300: '#E4A188',
          accentSoft: '#F3E3DA',
          accentTint: '#FBF4F0',
          credit: '#C79A45',
          creditSoft: '#F7EFDD',
          success: '#4E7C59',
          successSoft: '#E7EFE9',
          danger: '#C0392B',
          dangerSoft: '#FDECEA',
          dangerLine: '#F5C6BE',
          dark: '#131210',
          darkSurface: '#1C1A16',
          darkLine: '#2E2A24',
          darkInk: '#F4F1EA',
          darkInk2: '#ADA79B',
        },
      },
    },
  },
  plugins: [],
}
