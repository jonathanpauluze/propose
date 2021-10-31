import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background-color: ${lighten('0.05', '#FF6B6B')};
    filter: brightness(.9)
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FFE66D;
    /* outline: 1px solid slategrey; */
  }
`;