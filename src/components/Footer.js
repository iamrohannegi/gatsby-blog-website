import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Container from '../styles/container';
import Button from '../components/Button';

const Svg = styled.svg`    
    display: block;
    fill : var(--blog-footerBgColor);
`;

const FooterContent = styled.div`
    color: #fff;
    background: var(--blog-footerBgColor);
    padding-bottom: 15rem;
`;

const FooterFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
   

    div + div {
        margin-left: 3rem;
    }
`;

const FooterSiteDescription = styled.div`
    flex: 2 2 0;

    p {
        width: 80%;
        margin: 1rem 0;
    }
`;

const NavigationLinks = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;

    ul {
        padding: 0;
        margin: 0;
    }
    
    li {
        margin: 0 0 1.5rem 0;
        padding: 0;
    }

    a {
        color: #fff;
        font-size: 2rem;
        
        &:hover {
            color: #b6f10e;
        }
    }
`;

const FooterFormContainer = styled.div`
    flex: 1 1 0;

    span {
        color: #b6f10e;
    }
    p {
        padding-left: 1rem;
    }

    form {
        padding: 0.2rem 0;
        
        button {
            margin-top: 2.5rem;
            width: 100%;
        }
    }
`;


const FooterFormTextInput = styled.input`
    border: none;
    border-radius: 20px;
    padding: 1rem 2rem;
    outline: none;
    width: 100%;
`;


const SocialLinks = styled.div`
    a {
        color: #fff;
        font-size: 3rem;

        &:hover {
            color: #b6f10e;
        }
    }
    a + a {
        margin-left: 2rem;
    }
`;

const Footer = () => (
    <footer>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></Svg>
        <FooterContent>
            <Container>
                <FooterFlex>
                    <FooterSiteDescription>
                        <h2>Robin Singh</h2>
                        <SocialLinks>
                            <a href=""><FaFacebook /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaLinkedin /></a>
                        </SocialLinks>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem illum ad? Voluptatem labore unde sunt perferendis vel iste, maiores iure, eligendi doloribus necessitatibus nesciunt?</p>
                    </FooterSiteDescription>  
                    <NavigationLinks>
                        <h2>Navigation</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </NavigationLinks>
                    <FooterFormContainer>
                        <h2>Subscribe to my <br /><span>Newsletter</span></h2>
                        <form>
                            <FooterFormTextInput type="email" placeholder="Enter your email"/>
                            <Button margin="2rem 0 0 0" hoverBgColor="#F52F57">Submit</Button>
                        </form>
                    </FooterFormContainer>
                </FooterFlex>
            
            </Container>
        </FooterContent>
    </footer>
);

export default Footer;