/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "1-dark-violet": "#7C5DFA",
        "2-light-violet": "#9277FF",
        "3-dark-black": "#1E2139",
        "4-light-black": "#252945",
        "5-light-gray": "#DFE3FA",
        "6-dark-gray": "#888EB0",
        "7-gray-blue": "#7E88C3",
        "8-very-dark-black": "#0C0E16",
        "9-dark-red": "#EC5757",
        "10-light-red": "#9277FF",
        "11-white": "#F8F8FB",
        "12-black": "#141625",
        "line-color": "#494E6E",
        paid: "#33D69F",
        pending: "#FF8F00",
      },
      width: {
        "side-bar": "103px",
      },
      height: {
        "logo-height": "103px",
      },
      fontSize: {
        md: "1rem",
      },
    },
  },
  plugins: [],
};
