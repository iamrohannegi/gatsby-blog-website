import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { StyledButton } from '../components/Button';

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
`;

const StyledVideo = styled.video`
    margin: 4rem 0;
    height: 240;
    width: 300;
`;
const StyledLink = styled(StyledButton)`
    background: var(--secondary-bgcolor);
    box-shadow: 0px 7px 2px 0px var(--postCard-hoverColor);
    color: var(--primaryTextColor);
    max-width: 21rem;
    text-align: center;
`;


const PageNotFound = () => (
    <Layout title="Page Not Found | Robin Singh">
        <h1> Page Not Found </h1>

        <VideoContainer>
            <StyledVideo autoPlay="autoplay" loop muted="muted">
                <source type="video/webm"
                    src="https://res.cloudinary.com/dnlxwbxwh/image/upload/w_300,h_240,c_fill/source_vj6mz8.webm" />
                
                <source type="video/mp4"
                    src="https://res.cloudinary.com/dnlxwbxwh/image/upload/w_300,h_240,c_fill/source_vj6mz8.mp4" />
            </StyledVideo>
            <StyledLink as={Link} to="/blog">Back to Home Page</StyledLink>
        </ VideoContainer>
    </Layout>
);

export default PageNotFound;