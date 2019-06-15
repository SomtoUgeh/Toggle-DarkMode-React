import React from "react";
import { ThemeConsumer } from "styled-components"; //allows update to the theme provider

const Switch = () => {
  return (
    <ThemeConsumer>
      {theme => (
        <label htmlFor="theme-controller" className="switch">
          <input
            type="checkbox"
            id="theme-controller"
            onChange={e =>
              theme.setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
            }
            checked={theme.mode === "dark" ? true : false}
          />
          <span className="slider round" />
        </label>
      )}
    </ThemeConsumer>
  );
};

export default Switch;
