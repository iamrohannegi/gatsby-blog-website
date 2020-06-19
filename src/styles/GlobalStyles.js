import { createGlobalStyle, css }from 'styled-components';
import { normalize } from 'styled-normalize';
import themeColors from './themeColors';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

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


    .tall {
        width: 100px;
        height: 200vh;
        background: red;
    }

    ${({ blogTemplate }) => (blogTemplate && css`
        p {
            font-family: 'Merriweather', serif;
            font-size: 2rem;
            line-height: 1.6;
        }

        
        h1 {
            font-size: 4rem;
        }

        h2{
            font-size: 3rem;  
        }
        
    `)}
`;

export default GlobalStyles;