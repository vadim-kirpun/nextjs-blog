import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.grey500};
    color: #252525;
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: 'Oswald', 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    font: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
