export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      fontFamily: {
        Poppins: 'Poppins, sans-serif',
        Barlow: 'Barlow, sans-serif',
        berlin: 'berlin_sans_fb_demibold',
        FontAwesome: 'FontAwesome',
        Flaticon: 'Flaticon',
      },
      screens: {
        '2xl': {
          min: '1537px',
        },
        xxl: {
          min: '1400px',
          max: '1536.98px',
        }, //only for xxl
        xl: {
          min: '1200px',
          max: '1499.98px',
        },
        lg: {
          min: '992px',
          max: '1199.98px',
        },
        md: {
          min: '768px',
          max: '991.98px',
        },
        sm: {
          min: '576px',
          max: '767.98px',
        },
        xsm: {
          min: '0px',
          max: '575.98px',
        },
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen xsm': {
            maxWidth: '100%',
          },
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1260px',
          },
          '@screen xxl': {
            maxWidth: '1300px',
          },
          '@screen 2xl': {
            maxWidth: '1345px',
          },
        },
      });
    },
  ],
};
