const colors = require('tailwindcss/colors')

module.exports = {
   // mode: 'jit',
   darkMode: 'class',
   purge: [
      './index.html',
      './**/*.html',
      './**/*.js',
   ],
   theme: {
      backgroundPosition: {
         bottom: 'bottom',
        'bottom-4': 'center bottom -8rem',
         center: 'center',
         left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
         right: 'right',
         'right-bottom': 'right bottom',
         'right-top': 'right top',
         top: 'top',
        'top-4': 'center top 1rem',
       },
      letterSpacing: {
         widest: '.5em',
         wider: ' 0.05em',
      },
      fontSize: {
         '2xs': '.5rem',
         'xs': '.75rem',
         'sm': '.875rem',
         'tiny': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
         '3xl': '1.875rem',
         '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
         '7xl': '5rem',
        },

      backgroundSize: {
         'auto': 'auto',
         'cover': 'cover',
         'contain': 'contain',
         '180%': '180%',
         '16': '4rem',
       },
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         orange: colors.orange,
         fuchsia: colors.fuchsia,
         black: colors.black,
         white: colors.white,
         pink: colors.pink,
         green: colors.green,
         gray: colors.gray,
         coolGray: colors.coolGray,
         trueGray: colors.trueGray,
         red: colors.red,
         blue: colors.sky,
         cyan: colors.cyan,
         yellow: colors.amber,
      },    
      boxShadow: {
         sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
         DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
         md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
         lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
         xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
         '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
         inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
         none: 'none',
      },
      dropShadow: {
         'title': '0 3px 3px rgba(0, 0, 0, 0.7)',
      },
      extend: {
         backgroundImage: theme => ({
            'profile-photo': "url('/static/sean-blue.jpg')",
            'app-header': "url('/static/app/app-header.jpg')",
            'app-header-2': "url('/static/app/app-header-2.jpg')",
            'favicon': "url('/static/favicon.jpg')",
            'ig': "url('/static/app/icons/ig.svg')",
            'linkedin': "url('/static/app/icons/linkedin.svg')",
            'github': "url('/static/app/icons/github.svg')",
            'github-2': "url('/static/app/icons/github-2.svg')",
            'email': "url('/static/app/icons/email.svg')",
            'spotify': "url('/static/app/icons/spotify.svg')",
            'plantr': "url('/static/plantr-01.jpg')",
            'moves': "url('/static/moves.jpg')",
            'freelance': "url('/static/freelance/joeanddeb-website.png')",
            'misc': "url('/static/misc.jpg')",
            'merch': "url('/static/merch.jpg')",
            'logos': "url('/static/logos.jpg')",
            'blender': "url('/static/blender.jpg')",


         }),
         keyframes: {
            'menu-up': {
               '0%': {
                  opacity: '1',
                  transform: 'translatey(0px)'
               },
               '100%': {
                  opacity: '0',
                  transform: 'translatey(-30px)'
               },
            },
            'menu-down': {
               '0%': {
                  opacity: '0',
                  transform: 'translatey(-30px)'
               },
               '100%': {
                  opacity: '1',
                  transform: 'translatey(0)'
               },
            },
            'fade-in-down': {
               '0%': {
                  opacity: '0',
                  transform: 'translateY(-30px)'
               },
               '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
               },
            },
            'cc1': {
               '0%, 50%, 100%': { color: 'black' },
               '25%': { color: 'orange' },
               '75%': { color: 'blue' },
            },
            'cc2': {
               '0%, 50%, 100%': { color: 'white' },
               '25%': { color: 'gold' },
               '75%': { color: '#3B82F6' },
            },
            'fadeInDown': {
               '0%': { 
                  opacity: '0', 
                  transform: 'translateY(-30px)',
               },
               '100%': { 
                  opacity: '1',
                  transform: 'translateY(0)',
               },
            },
            'fadeInRight': {
               '0%': { 
                  opacity: '0', 
                  transform: 'translateX(-90px)',
               },
               '100%': { 
                  opacity: '1',
                  transform: 'translateX(0)',
               },
            },
            'fadeInUp': {
               '0%': { 
                  opacity: '0', 
                  transform: 'translateY(60px)',
               },
               '100%': { 
                  opacity: '1',
                  transform: 'translateY(0)',
               },
            },
            'fadeIn': {
               '0%': { 
                  opacity: '0', 
                  transform: 'translateX(0)',
               },
               '100%': { 
                  opacity: '1',
                  transform: 'translateX(0)',
               },
            },
         },
         animation: {
            'menu-down': 'menu-down 0.75s ease-in-out',
            'menu-up': 'menu-up 0.75s ease-in-out',
            'fade-in-down': 'fade-in-down 1.5s ease-in-out',
            'cc1': 'cc1 8s ease-in-out infinite',
            'cc2': 'cc2 8s ease-in-out infinite',
            'fadeInRight': 'fadeInRight .75s ease-in forwards',
            'fadeIn': 'fadeIn .75s ease-in forwards',
         },
   },
   variants: {
      animation: ["motion-safe"],
   },
   plugins: [],
   }
}