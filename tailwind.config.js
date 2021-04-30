module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      borderWidth: {
        12: '12px',
        24: '24px'
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
