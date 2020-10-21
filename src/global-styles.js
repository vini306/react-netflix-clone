import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body{
    font-family: 'Helvetica Neue, Nevetica, Arial, sans-serif';
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smmothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 16px;
  }
`;
