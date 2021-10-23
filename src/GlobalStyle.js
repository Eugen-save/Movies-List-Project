import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
  margin: 0;
}

button {
  cursor: pointer;
}
body{
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.colors.whisper};
  word-break: break-word;
  }
`;
