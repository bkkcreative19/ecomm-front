import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: Raleway, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: Poppins sans-serif;
  }
`;
