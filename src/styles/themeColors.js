import { css } from 'styled-components';

const themeColors = css`

    :root {
        --facebook: #3b5998;
        --linkedin: #0e76a8;
        --instagram: #bc2a8d;
        --twitter: #00acee;
        --mail: #D44638;
    }

    .dark {
        --primary-bgcolor: #21272f;
        --secondary-bgcolor: #2A313B;
        --primaryTextColor: #f4f4f4;
        --secondaryTextColor: #9a9a9a;
        --postCard-hoverColor: #545a62;
        --btn-primaryBgColor: #fff;
        --quote-bgColor: #2A313B;
        --blog-headerBgColor: #2A313B;
        --blog-footerBgColor: #162447;
        --blog-linkColor: rgb(96, 179, 251);
        --blog-underlineBg: rgba(250, 240, 137, 0.16);
        --blog-underlineColor: rgb(250, 240, 137);
        --search-shadowColor: #262626;
    }

    .light {
        --primary-bgcolor: #F6F7FB;
        --secondary-bgcolor:#fff; 
        --primaryTextColor: black;
        --secondaryTextColor: #9a9a9a;
        --postCard-hoverColor: #e9e9e9;
        --btn-primaryBgColor: #fff;
        --quote-bgColor: #e9e9e9;
        --blog-headerBgColor: #2A313B;
        --blog-footerBgColor: #323DA5;
        --blog-linkColor: hsl(208,99%,44%);
        --blog-underlineBg: #fefcbf;
        --blog-underlineColor: #744210;
        --search-shadowColor: #dddee1;
    }
`;

export default themeColors;