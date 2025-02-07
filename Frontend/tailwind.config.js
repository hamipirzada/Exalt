/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "linear-gradient": "linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)",
      },
      animation: {
        'smooth-up-down': 'smoothUpDown 8s ease-in-out infinite',
        'bounce-updown': 'bounceUpDown 3s ease-in-out infinite',
        'slideInFromRightWithAngle': 'slideInFromRightWithAngle 2s ease-out',
        "scrollLeft": "scrollLeft 35s linear infinite",
        "moveDot": "moveDot 6s linear infinite",
        //SMILE CARD IN OODO PRODUCTS
        "moveUpDown": "moveUpDown 3s ease-in-out infinite",
        "quick": "quick 4s ease-in-out infinite",
       

      },
      keyframes: {
        smoothUpDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-115px)' },
          '100%': { transform: 'translateY(0)' },
        },

        bounceUpDown: { 
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px) ' }, 
          '100%': { transform: 'translateY(0)' },
        },


          //ROCKET
        slideInFromRightWithAngle: {
          '0%': {
            transform: 'translateX(100%) rotate(10deg)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0) rotate(0deg)',
            opacity: 1,
          },
        },



        


        
        


     



        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-250%)" },
        },

        quick: {
         "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.8)" },
        },
      


        //DOT

        moveDot: {
          "0%, 100%": { top: "10%", right: "10%" },
          "25%": { top: "10%", right: "calc(100% - 35px)" },
          "50%": { top: "calc(100% - 30px)", right: "calc(100% - 35px)" },
          "75%": { top: "calc(100% - 30px)", right: "10%" },
        },


//SMILE CARD
moveUpDown: {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-20px)' }, 
},





      },
      colors: {
        // "primary": "#a991f7",
        //   "secondary": "#f6d860",
        //   "accent": "#37cdbe",
        //   "neutral": "#3d4451",
        //   "base-100": "#ffffff",
        
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
       
        
      },
      
    
    
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require ('daisyui')],
  daisyui:{
    themes:[
      "retro",
     ]
  },
}
