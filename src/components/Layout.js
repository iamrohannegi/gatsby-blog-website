import React from 'react';
import styled, { keyframes, css } from "styled-components";

import GlobalStyles from '../styles/GlobalStyles';
import Sidebar from './Sidebar';

const LoadContentAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-1rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const MainContentWrapper = styled.main`
    background-color: var(--primary-bgcolor);
    color: var(--primaryTextColor);
    min-height: 100vh;
    padding: 4rem;
    margin-left: 300px;             
    animation: ${LoadContentAnim} 0.5s ease-in-out forwards;
`;

const Container = styled.main`
    max-width: 80%;
    margin: 0 auto;
`;

const Layout = (props) => {
    return (
        <div>
            <GlobalStyles />
            <Sidebar />
            <MainContentWrapper>
                <Container>
                    {props.children}
                </Container>
            </MainContentWrapper>
        </div>
    );
};

export default Layout;