import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Container from '../styles/container';
import ToggleThemeButton from '../components/ToggleThemeButton';

const Header = styled.header`
    background: var(--blog-headerBgColor);
    color: #fff;
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    
    a {
        color: #fff;
    }
`;

const HeaderLink = styled(Link)`
    display: block;
    padding: 4rem 1rem;
    color: #fff;
    font-size: 2rem;
    height: 100%;  
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #F52F57;
    }
`;

const HeaderBlogPage = () => (
    <Header>
        <Container>
            <HeaderContent>
                <Heading><Link to="/">Robin Singh</Link></Heading>          
                <nav>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/blog">Blog</HeaderLink>
                    <HeaderLink to="/contact">Contact</HeaderLink>
                </nav>
                <ToggleThemeButton/>
            </HeaderContent>
        </Container>
    </Header>
);

export default HeaderBlogPage;