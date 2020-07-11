import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import themeColors from './themeColors';

const GlobalStyles = createGlobalStyle`
    ${ normalize }
    ${ themeColors }    
    
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        min-height: 100vh;
        background: var(--primary-bgcolor);
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default GlobalStyles;