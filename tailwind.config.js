 // tailwind.config.js
 module.exports = {
    purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
        fontfamily: {
            oswald: "Oswald, sans-serif",
            urbanist: "Urbanist, sans-serif"
        },
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }