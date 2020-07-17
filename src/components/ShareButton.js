import React from 'react';
import styled from 'styled-components';
import { FaShareAlt, FaFacebook, FaTwitterSquare, FaLinkedin, FaPinterest } from 'react-icons/fa';

const BlogShareContainer = styled.div`
    display: flex;
    margin: ${({ margin }) => margin || '0'};

    @media (max-width: 600px){
        flex-basis: 100%;
    }

    @media (max-width: 340px) {
        flex-wrap: wrap;
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

        @media (max-width: 340px) {
            margin-bottom: ${({ active }) => active && '1.5rem'};
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
    @media (max-width: 600px) {
        font-size: ${({ fontSize }) => (fontSize || '2.5rem')};
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
    

const ShareButton = ({ slug, title, active, fontSizeRem, gap, margin }) => {
    title = encodeURIComponent(title);

    return (
        <BlogShareContainer active={active} margin={margin}>
            {   
                active ? 
                <ShareBtn className="active" active={active} fontSize={fontSizeRem && fontSizeRem+"rem"} gap={gap}> 
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
                <ShareLink href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//jolly-mccarthy-4981ec.netlify.app/blog/${slug}`} aria-label="Share to Facebook"><FaFacebook /></ShareLink>
                <ShareLink href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fjolly-mccarthy-4981ec.netlify.app%2Fblog%2F${slug}&text=Read%20more%20about%20${title}`} aria-label="Share to Twitter"><FaTwitterSquare /></ShareLink>
                <ShareLink href={`http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fjolly-mccarthy-4981ec.netlify.app%2Fblog%2F${slug}&title=Read%20more%20about%20${title}`} aria-label="Share to Linked in"><FaLinkedin /></ShareLink>
                <ShareLink href={`http://www.tumblr.com/share?v=3&u=https%3A%2F%2Fjolly-mccarthy-4981ec.netlify.app%2Fblog%2F${slug}&t=Read%20more%20about%20${title}`} aria-label="Share to Pinterest"><FaPinterest /></ShareLink>
            </ShareLinksContainer>
        </BlogShareContainer>
    );
};

export default ShareButton;