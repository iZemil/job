import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import './global.css';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
        color-scheme: dark;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Roboto', 'Arial', sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
