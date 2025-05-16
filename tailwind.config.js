// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any other content paths your project uses
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Logo colors extracted from the image
        'bsc': {
          'teal': '#2AAFAD',      // Teal/turquoise figure
          'orange': '#F9A239',    // Orange/yellow figure
          'pink': '#F15A5A',      // Pink/red figure
          'blue': '#2B9CD8',      // Blue base/wave
          'dark': '#333333',      // Dark text color (estimated)
        },
      },
    },
  },
  plugins: [],
}