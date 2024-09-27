const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Asegúrate de que Tailwind escanee tus archivos
  ],
  theme: {
    extend: {
      backgroundImage: theme => (
        {
          'body-pattern': "url('/assets/images/pattern.png')",
          'banner-pattern': "url('/assets/images/bakbaner.png')",
        }
      ),
      backgroundPosition: {
        'banner-position': "-200px -200px"
      },
      // extender para añadir mas colores
      colors: {
        "blue-light": "#37bcf9",
        "blue-dark": "#0370b9"
      },
      animation: {
        // Uso la animacion animate-spin y la extiendo o modifico
        // spin a la derecha hace referencia a animate-spin
        'spin-slow': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'bg-banner': 'backBanner 10s linear',
        'text-banner': 'showBannerText 10s linear',
        'from-top': 'fromTop 300ms linear',
        'from-top-delay': 'fromTop 400ms linear',
        'from-left': 'fromLeft 400ms linear',
      },
      keyframes: {
        fromBellow: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        fromRight: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(100%)' }
        },

        backBanner: {
          '0%': { 'background-position': '0px 0px' },
          '100%': { 'background-position': '-200px -200px' }
        },
        showBannerText: {
          '0%': {
            transform: 'translateX(-600%) scale(5,5)',
            opacity: 1
          },
          '50%': {
            transform: 'translateX(600%) scale(5,5)',
            opacity: 1
          },
          '75%': {
            transform: 'translateX(-600%) scale(5,5)',
            'text-shadow' : 'none',
            color: 'transparent',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0%) scale(1,1)',
            'text-shadow' : '2px 2px 1px black',
            color: 'white',
            opacity: 1
          },
        },

        fromTop: {
          // '0%': { transform: 'translateY(-150%)' },
          // '100%': { transform: 'translateY(0%)' }
          'from': { transform: 'translateY(-200%)' },
          'to': { transform: 'translateY(10%)' }
        },

        fromTopDelay: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(10%)' }
        },

        fromLeft: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(10%)' }
        },
      },
      screens: {
        // Custom BreakPoint
        'phone': { min: '320px', max: '767.98px' },
        // => @media (min-width: 320px) { ... }

        'tablet': { min: '768px', max: '1198.98px' },
        // => @media (min-width: 768px) { ... }

        'desktop': { min: '1200px' },
        // => @media (min-width: 1200px) { ... }

      },

      boxShadow: {
        header3D : "0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f"
      }
    },


  },
  variants: {
    extend: {
      animation: ['responsive','hover' ,'group-hover'],  // Extiende la variante para animaciones
      animate: ['responsive','hover' ,'group-hover'],
      fontSize: ['responsive','hover' ,'group-hover'],
      scale: ['responsive','hover' ,'group-hover'],
      padding: ['responsive','hover' ,'group-hover'],
    },
  },
  plugins: [],
}

