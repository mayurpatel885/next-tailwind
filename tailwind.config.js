module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mayurbhai': '#000000',
      },
      backgroundImage: {
        'hero-pattern': "url('/../images/rplus_Skunbanner.jpg')",       
      },
      screens: {
        '9xl': '320px',
        '8xl': '361px',
        '7xl': '501px',
        '6xl': '551px',
        '5xl': '901px',        
        '3xl': '1201px',
        '4xl': '1600px',  
        'mob': {'max': '500px'},
      },  
      fontFamily: {
        'Mulish': ['Mulish'],
      },  
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        "0": "0%",
      },      
    },
  },
  plugins: [],
}
