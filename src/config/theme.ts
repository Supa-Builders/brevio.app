import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "769px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1536px",
    },
    tokens: {
      colors: {
        primary: {
          100: "#D6E4FF",
          300: "#84A9FF",
          500: "#3366FF ",
          700: "#1939B7 ",
          800: "#102693 ",
        },
        secondary: {
          500: "#FF8C42",
        },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
