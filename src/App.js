import React from "react";
import Home from "./components/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "styled-theming";

import useTheme from "./components/useTheme";
import Switch from "./components/Switch";

// Declaring style modes for elements
const getForeGround = theme("mode", {
  light: "#111",
  dark: "#EEE"
});

const getBackground = theme("mode", {
  light: "#EEE",
  dark: "#111"
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeGround};
  }
`;

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />

        <Switch />
      </>
    </ThemeProvider>
  );
};

export default App;
