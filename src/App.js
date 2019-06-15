import React, { useState } from "react";
import Home from "./components/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />

        <label htmlFor="theme-controller" class="switch">
          <input
            type="checkbox"
            id="theme-controller"
            onChange={e => setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })}
          />
          <span class="slider round" />
        </label>
      </>
    </ThemeProvider>
  );
}

export default App;
