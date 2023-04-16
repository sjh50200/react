import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
`;
