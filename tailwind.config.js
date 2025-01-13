/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/sebu-dev-react-lib/dist/**/*.css", // Füge hier alle anderen Quellen hinzu, in denen du Tailwind-Klassen verwendest
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
