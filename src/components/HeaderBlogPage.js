import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Container from '../styles/container';
import ToggleThemeButton from './ToggleThemeButton';
import HamburgerMenu from './HamburgerMenu';

const Header = styled.header`
    background: var(--blog-headerBgColor);
    color: #fff;
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;    
    nav {
        display: flex;
        
        a + a {
            margin-left: 2rem;
        }
    }

`;

const Heading = styled.h1`
    font-size: 3rem;
    flex: 1 1 0;
    margin: 0;
    padding: 3.5rem 0;

    a {
        color: #fff;
    }

    @media only screen and (max-width: 600px) {
        padding: 2.5rem 1rem;
        text-align: center;
    }

 
`;

const HeaderNav = styled.nav`
    @media only screen and (max-width: 600px){
        display: none;
    }
`;

const HeaderLink = styled(Link)`
    display: block;
    color: #fff;
    font-size: 2rem;
    padding: 0 1rem;
    height: 100%;  
    transition: all 0.1s linear;
    &:hover {
        color: #FE9920;
    }

    @media only screen and (max-width: 600px){
        display: none;
    }
`;

const HeaderBlogPage = () => (
    <Header>
        <Container>
            <HeaderContent>
                <HamburgerMenu />
                <Heading><Link to="/">Robin Singh</Link></Heading>          
                <HeaderNav>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/blog">Blog</HeaderLink>
                    <HeaderLink to="/contact">Contact</HeaderLink>
                </HeaderNav>
                <ToggleThemeButton />
            </HeaderContent>
        </Container>
    </Header>
);

export default HeaderBlogPage;