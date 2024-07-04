/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      line_color: "var(--line_color)",
      black: "var(--black)",
      blacks: "var(--blacks)",
      whit: "var(--whit)",
      button_color: "var(--button_color)",
      buttons: "var(--buttons)",
      errorColor: "var(--errorColor)",
      blackss: "var(--blackss)",
      textColor: "var(--textColor)",
      nav: "var(--nav)",
    },

    fontFamily:{
      girloy_bold: ['girloy_bold'],
      gilroy_extraBold: ['gilroy_extraBold'],
      girloy_light: ['girloy_light'],
      girloy_medium: ['girloy_medium'],
      girloy_regular: ['girloy_regular'],
      girloy_semiBold: ['girloy_semiBold'],
    },
    
    container:{
      center: true
    },

    extend: {
      screens:{
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        lp: "1320px",
        "2xl": "1400px",
        "3xl": "1620px",
      }
    },
  },
  plugins: [],
}

