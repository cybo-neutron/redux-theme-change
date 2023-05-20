/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.slate,
        ternary: colors.zinc,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
