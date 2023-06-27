import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      cream: "#F6F5F1",
      gray: "#98A8B7",
      blue: "#021662",
      carrot: "#27B2C7",
      yellowCream: "#F2D16B",
    },
    fonts: {
      handwriting:
        "'Gochi Hand', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    fontWeights: {
      regular: "300",
      bold: "700",
    },
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1200px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    marginY: (value) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },

  "html, body": {
    fontFamily:
      "'Figtree', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
  },

  body: {
    backgroundColor: "$cream",
  },

  "::-webkit-scrollbar": { width: "10px" },
  "::-webkit-scrollbar-track": {
    background: "transparent",
    borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#95AAB7",
    borderRadius: "5px",
    border: "3px solid #011019",
  },
  "::-webkit-scrollbar-thumb:hover": { background: "#E6F5FE" },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  b: {
    fontWeight: "bold",
  },
});
