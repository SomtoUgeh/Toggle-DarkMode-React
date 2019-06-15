import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }
`;

const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme");

  return savedTheme !== undefined && savedTheme !== null
    ? JSON.parse(savedTheme)
    : { mode: "light" };
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />

        <label htmlFor="theme-controller" className="switch">
          <input
            type="checkbox"
            id="theme-controller"
            onChange={e => setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })}
            checked={theme.mode === "dark" ? true : false}
          />
          <span className="slider round" />
        </label>
      </>
    </ThemeProvider>
  );
};

export default App;
