import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
    a {
        color: ${({color}) => color ? color : 'var(--primaryTextColor)'};
        font-size: ${({fontSize}) => fontSize ? fontSize : '3rem'};

        &:hover {
            color: ${({ hoverColor }) => hoverColor ? hoverColor : "#b6f10e"};
        }
    }
    a + a {
        margin-left: 2rem;
    }
`;

const SocialLinks = ({ color, hoverColor, fontSize }) => (
    <SocialLinksContainer color={color} hoverColor={hoverColor} fontSize={fontSize}>
        <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Link to Facebook account"><FaFacebook /></a>
        <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Link to Instagram account"><FaInstagram /></a>
        <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn account"><FaLinkedin /></a>
    </SocialLinksContainer>
);

export default SocialLinks;