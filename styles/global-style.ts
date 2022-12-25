import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap');
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
    font-family: "Poppins" sans-serif;
  }
`;
