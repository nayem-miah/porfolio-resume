


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: '#333', // Replace with the desired color
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Ensure this plugin is required
  ],
  safelist: ['text-text'], // Add any custom class names here
}

