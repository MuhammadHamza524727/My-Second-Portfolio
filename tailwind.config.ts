import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },


      fontFamily: {
        caveat: ['var(--font-caveat)'],
        nunito: ['var(--font-nunito)']


      },
      animation: {
        bump: 'bump  0.6s ease-in-out',
        bounce: 'bounce 0.6s infinite',
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        
      },
      keyframes: {
        bump: {


          '0%': { transform: 'scale(1)' },           // Start at normal size
          '20%': { transform: 'scale(0.8)' },        // Shrink slightly
          '50%': { transform: 'scale(1.2) translateY(-5px)' }, // Bump up and grow
          '70%': { transform: 'scale(1.1) translateY(-2px)' }, // Slightly settle down
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: '1' },
          "50%": { opacity: '0.5' },
        },
      },
      screens: {
        'sm': '100px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },




    },


  },
  plugins: [],
};
export default config;
