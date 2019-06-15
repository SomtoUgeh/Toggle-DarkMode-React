import React from "react";
import Home from "./components/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = { mode: "dark" }; // controls for theming

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
