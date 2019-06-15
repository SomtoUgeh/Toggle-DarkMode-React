import styled from "styled-components";
import theme from "styled-theming";

const getBackground = theme.variants("mode", "variant", {
  normal: { light: "#EEE", dark: "#111" },
  default: { light: "green", dark: "red" }
});

export const Heading = styled.h2`
  color: ${getBackground};
`;
