/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1efff',
          100: '#e4e0ff',
          200: '#cfc6ff',
          300: '#ada0ff',
          400: '#6f67ef',
          500: '#4253e2',
          600: '#4045d5',
          700: '#3e2ec1',
          800: '#3b16ac',
          900: '#3d1f8f',
          950: '#4253e2',
        },
        accent: {
          100: '#ece9ff',
          300: '#c6bcff',
          500: '#5d5ae6',
          700: '#3d30bb',
        },
        ink: '#333333',
        mist: '#f7f6ff',
      },
      boxShadow: {
        soft: '0 25px 80px -32px rgba(59, 22, 172, 0.35)',
        glass: '0 16px 40px rgba(51, 51, 51, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(66, 83, 226, 0.2), transparent 30%), radial-gradient(circle at bottom right, rgba(62, 46, 193, 0.18), transparent 28%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 2.3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
