import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
    a {
        color: var(--primaryTextColor);
        font-size: 3rem;

        &:hover {
            color: ${({ hoverColor }) => hoverColor ? hoverColor : "#b6f10e"};
        }
    }
    a + a {
        margin-left: 2rem;
    }
`;

const SocialLinks = ({ color, hoverColor }) => (
    <SocialLinksContainer hoverColor={hoverColor}>
        <a href="/"><FaFacebook /></a>
        <a href="/"><FaInstagram /></a>
        <a href="/"><FaLinkedin /></a>
    </SocialLinksContainer>
);

export default SocialLinks;