module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%' : {transform: 'translateX(100%)'}
        }
      },
      animation: {
        'fade-left': 'fade-left 0.5s ease-in-out',
        'fade-up': 'fade-up 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
