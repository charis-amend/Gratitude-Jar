/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:
    {
      transparent: 'transparent',
      current: 'currentColor',
      "Grey-jar": "#515151",
      "Brown-jar": "#938c81",
      "Khaki-jar": "#b4aa99",
      "SageGreen-jar": "#72948a",
      "LightMint-jar": "98b0a9"
    },
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '1000': '1000ms',
        '3000': '3000ms',
        '5000': '5000ms',

      },
      fontSize: {
        "4px": "xxs",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};


