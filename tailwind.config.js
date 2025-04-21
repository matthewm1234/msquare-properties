/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#003C37",
        },
        'notification-unread': '#F0FDF4',  // Custom pastel blue
        'notification-read': '#F9FAFB',
      },
    },
  },
  plugins: [],
};
