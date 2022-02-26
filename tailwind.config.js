module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('https://i.imgur.com/ZBxND1T.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
