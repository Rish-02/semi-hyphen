/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-colour": "#040404",
        "border-lines": "#3a506b",
        greytext: "#919191",
        grey: "#979daa",
        "sub-primary": "#5bc0be",
        darkcyan: "#298c8a",
        slategray: "#617591",
        gray: {
          "100": "#07100e",
          "200": "#011210",
        },
        white: "#fff",
        lightgray: "rgba(211, 216, 222, 0.5)",
        "button-green": "#167e6e",
        darkgray: "#a9a9a9",
        "primary-colour": "#6fffe9",
        "light-black": "#1d1d1d",
      },
      spacing: {},
      fontFamily: {
        sarabun: "Sarabun",
        poppins: "Poppins",
        "train-one": "'Train One'",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xs": "8px",
      "181xl": "200px",
      "61xl": "80px",
      "31xl": "50px",
      xl: "20px",
      xs: "12px",
      base: "16px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "5xl": "24px",
      lgi: "19px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      "17xl": "36px",
      "3xl": "22px",
      "27xl": "46px",
      "16xl": "35px",
      "13xl": "32px",
      "7xl": "26px",
      "sm-3": "13.3px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
