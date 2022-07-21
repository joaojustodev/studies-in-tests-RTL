import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",

      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray600: "hsl(206,10%,44%)",

      purple100: "hsl(252,100%,99%)",
      purple200: "hsl(252,100%,98%)",
      purple300: "hsl(252,100%,94%)",
      purple400: "hsl(252,75%,84%)",
      purple500: "hsl(252,78%,60%)",
      purple600: "hsl(252,80%,53%)",
    },
    space: {
      1: ".2rem",
      2: ".5rem",
      3: "1rem",
      4: "1.25rem",
      5: "1.5rem",
      6: "1.75rem",
      7: "2rem",
      8: "2.25rem",
      9: "2.625rem",
    },
    sizes: {
      1: ".2rem",
      2: ".5rem",
      3: "1rem",
      4: "1.25rem",
      5: "1.5rem",
      6: "1.75rem",
      7: "2rem",
      8: "2.25rem",
      9: "2.625rem",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "28px",
      7: "32px",
      8: "36px",
      9: "42px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
  media: {
    bp1: "(min-width: 599px)",
    bp2: "(min-width: 959.95px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1280px)",
    bp5: "(min-width: 1400px)",
  },
});

export const globalStyles = globalCss({
  ":root": {
    "--header-height": "48px",
    "--sidemenu-width": "220px",
  },

  "*, *::after, *::before": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});
