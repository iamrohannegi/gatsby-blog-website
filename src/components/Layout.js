import React from 'react';
import styled, { keyframes } from "styled-components";
import MediaQuery from 'react-responsive';

import Head from '../components/Head';
import GlobalStyles from '../styles/GlobalStyles';
import Sidebar from './Sidebar';
import HeaderNav from './HeaderBlogPage';

const LoadContentAnim = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const MainContentWrapper = styled.main`
    animation: ${LoadContentAnim} 0.5s ease-in-out forwards;
    background-color: var(--primary-bgcolor);
    color: var(--primaryTextColor);
    margin-left: 300px;             
    min-height: 100vh;
    padding: 4rem;
    transform: translateY(-1rem);
    
    p {
        line-height: 1.5; 
    }
    
    @media only screen and (max-width: 1400px) {
        padding: 4rem 1rem;
    }

    @media only screen and (max-width: 1100px) {
        margin: 0;
        padding: 4rem 0;
        transform: none;                                
    }
`;

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 1400px) {
        max-width: 90%;
    }

    @media only screen and (max-width: 1100px) {
        padding: 0 2rem;
        margin: 0;
        max-width: 100%;
    }

`;


const Layout = ({ title, description, children}) => {
    return (
        <div>
            <GlobalStyles />
            <Head title={title} description={description}/>
            <MediaQuery query="(max-width: 1100px)">
                <HeaderNav/>
            </MediaQuery>
            <MediaQuery query="(min-width: 1101px)">
                <Sidebar />
            </MediaQuery>
            <MainContentWrapper>
                <Container>
                    {children}
                </Container>
            </MainContentWrapper>
        </div>
    );
};

export default Layout;