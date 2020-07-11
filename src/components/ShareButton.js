import React from 'react';
import styled, { css }from 'styled-components';
import { FaShareAlt, FaFacebook, FaTwitterSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const BlogShareContainer = styled.div`
    display: flex;
    margin: ${({ margin }) => margin || '0'};

    @media only screen and (max-width: 600px){
        flex-basis: 100%;
        margin ${({ active }) => (!active) && "1rem 0 0 0"};
    }
`;

const ShareBtn = styled.button`
    align-items: center;
    background: none; 
    border: none;
    color: var(--primaryTextColor);
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: ${({ gap }) => gap || '1rem'};



    &.active {
        color: #FE9920;

        & + div {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
        }    
    }

    &:hover {
        color: #FE9920;
    }
    
    &:focus {
        outline: none;
    }

    .shareText {
        font-family: 'Merriweather', serif;
        font-size: ${({ fontSize }) => (fontSize || '1.8rem')};
        margin: 0 0 0 1rem;
    }
`; 

const ShareLinksContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: ${({ fontSize }) => (fontSize || '2rem')};
    transform: translateX(3rem);
    transition: all 0.2s ease-in-out;
    opacity: 0;
    visibility: hidden;
    
    a + a {
        margin-left: ${({ gap }) => gap || '1rem'};
    }                               
`;

const ShareLink = styled.a.attrs(() => ({
    target: '_blank',
    rel: 'noopener noreferrer'
}))`
    align-items: center;
    color: var(--primaryTextColor);
    display: flex;

    &:hover {
        color: var(--${({ siteName }) => siteName});
    }
`;
    

const ShareButton = ({ active, fontSizeRem, gap, margin }) => (
    <BlogShareContainer active={active} margin={margin}>
        {   
            active ? 
            <ShareBtn className="active" fontSize={fontSizeRem && fontSizeRem+"rem"} gap={gap}> 
                <FaShareAlt />
                <span className="shareText">Share</span>
            </ShareBtn>
            :
            <ShareBtn onClick={(e) => {
                e.currentTarget.classList.toggle('active');
            }} fontSize={fontSizeRem && fontSizeRem+"rem"} gap={gap}> 
                <FaShareAlt />
                <span className="shareText">Share</span>
            </ShareBtn>
        }
        <ShareLinksContainer fontSize={fontSizeRem && (fontSizeRem+0.5)+"rem"} gap={gap}>
            <ShareLink href="" siteName="facebook"><FaFacebook /></ShareLink>
            <ShareLink href="" siteName="twitter"><FaTwitterSquare /></ShareLink>
            <ShareLink href="" siteName="linkedin"><FaLinkedin /></ShareLink>
            <ShareLink href="" siteName="mail"><FaEnvelope /></ShareLink>
        </ShareLinksContainer>
    </BlogShareContainer>
);

export default ShareButton;