/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '3xs': ['0.5625rem', { lineHeight: '0.75rem' }], // 9px / 12px
        '2xs': ['0.6875rem', { lineHeight: '0.9375rem' }], // 11px / 15px
        xs: ['0.75rem', { lineHeight: '1.125rem' }], // 13px / 18px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 15px / 20px
        md: ['1rem', { lineHeight: '1.5rem' }], // 17px / 24px
        lg: ['1rem', { lineHeight: '1.5rem' }], // 17px / 24px
        xl: ['1.3125rem', { lineHeight: '1.875rem' }], // 21px / 30px
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      colors: {
        primary: {
          100: '#FCE4EC',
          200: '#F8BBD0',
          300: '#F48FB1',
          400: '#F06292',
          500: '#EC407A',
          600: '#E91E63',
          700: '#D81B60',
          800: '#C2185B',
          900: '#AD1457',
        },
        secondary: {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#42A5F5',
          600: '#2196F3',
          700: '#1E88E5',
          800: '#1976D2',
          900: '#1565C0',
        },
        ternary: {
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#66BB6A',
          600: '#4CAF50',
          700: '#43A047',
          800: '#388E3C',
          900: '#2E7D32',
        },
        background: {
          500: '#FFFFFF',
        },
        warning: {
          300: '#FFF8E1',
          400: '#FFECB3',
          500: '#FFD54F',
          600: '#FFC107',
        },
        danger: {
          300: '#FFEBEE',
          400: '#FFCDD2',
          500: '#E57373',
          600: '#D32F2F',
        },
        info: {
          300: '#ECEFF1',
          400: '#CFD8DC',
          500: '#90A4AE',
          600: '#455A64',
        },
      },
      shadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 3px 0px rgba(5, 44, 66, 0.05), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        md: '0px 4px 8px -2px rgba(5, 44, 66, 0.05), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        lg: '0px 12px 16px -4px rgba(5, 44, 66, 0.06), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        xl: '0px 20px 24px -4px rgba(5, 44, 66, 0.07), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        '2xl': '0px 24px 48px -12px rgba(5, 44, 66, 0.12)',
      },
      screens: {
        xs: '360px', // 360 - 499px
        sm: '500px', // 500 - 599px
        md: '600px', // 600 - 959px
        lg: '960px', // 960 - 1023px
        xl: '1024px', // 1024 - 1279px
        '2xl': '1280px', // 1280 - 1679px
      },
    },
  },
  plugins: [],
};
