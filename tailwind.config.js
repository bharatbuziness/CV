module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  content: [],
  theme: {
    extend: {},
  },
  images: {
    deviceSizes: [320, 375, 425, 640, 768, 828, 1080, 1200, 1920, 2048, 3840],
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require("tailwind-scrollbar-hide"),
  ],
};
