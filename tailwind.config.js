/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azure-radiance-50": "#f0f6fe",
        "azure-radiance-100": "#deeafb",
        "azure-radiance-200": "#c4dcf9",
        "azure-radiance-300": "#9bc5f5",
        "azure-radiance-400": "#6ca7ee",
        "azure-radiance-500": "#3d7ee6",
        "azure-radiance-600": "#346adc",
        "azure-radiance-700": "#2b56ca",
        "azure-radiance-800": "#2947a4",
        "azure-radiance-900": "#263e82",
        "azure-radiance-950": "#1c284f",
      },
    },
  },
  plugins: [],
};
