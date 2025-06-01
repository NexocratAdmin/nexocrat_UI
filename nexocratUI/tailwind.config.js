// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue
        secondary: "#F59E0B", // Custom amber
        brand: {
          light: "#93C5FD",
          dark: "#0d1931",
        },
        border: {
          dark: "#242424",
        },
      },
    },
  },
  plugins: [],
};
