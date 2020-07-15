import React from 'react';
import { Link } from 'gatsby';
import { FaHome, FaFeatherAlt, FaGrinBeam, FaAddressCard, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import styled, { css } from 'styled-components';

import ToggleThemeSlider from './ToggleThemeSlider';

const SidebarContainer = styled.aside`
    align-items: ${({ hamburger }) => hamburger && 'center'};
    background: var(--secondary-bgcolor);
    display: flex;
    color: var(--primaryTextColor);
    flex-direction: column;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    width: ${({ hamburger }) => hamburger ? '100%' : '300px' };
`;

const SidebarHeading = styled.h1`
    padding: ${({ hamburger }) => hamburger ? '8rem 0 0rem 0' : '4rem 4rem 4rem 5rem'};
    margin-bottom: 5rem;

    ${({ hamburger }) => hamburger && css`
        text-align: center;
        width: 100vw;
    `};
`
const SidebarNav = styled.nav`
    flex-grow: 1;
    margin-bottom: 10rem;
`;

const SidebarNavList = styled.ul`
    padding: 0;
`;

const SidebarNavLink = styled(Link)`
    align-items: center;
    border-right: 6px solid var(--secondary-bgcolor); 
    color: var(--secondaryTextColor);
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 2.5rem 5rem 2.5rem 5rem;

    &.activeLink {
        border-color: #5A62B3; 
        background: var(--primary-bgcolor);
        color: var(--primaryTextColor);
        font-weight: bold;

        &:hover {
            background: var(--primary-bgcolor);
            border-color: #5A62B3; 
        }
    }

    &:hover {
        background: #eee;
        border-color: #eee;
    }

    ${({ hamburger }) => hamburger && css`
        border: none;
        width: 100vw;
    `};
`;

const SidebarFooter = styled.footer`
    display: ${({ hamburger }) => hamburger && 'none'};
    padding-left: 5rem;
`;

const SocialLinksContainer = styled.div`
    position: relative;
    margin-bottom: 5rem;
    padding-bottom: 2rem;
    font-size: 1.8rem;
`;

const SocialIcon = styled.a`
    font-size: 2.5rem;
    color: grey;
    margin-right: 1.2rem;

    &:hover {
        color: var(--${({ socialSiteName }) => socialSiteName});
    }
`;

const Sidebar = ({ hamburger }) => {
    return (
        <SidebarContainer hamburger={hamburger}>
            <SidebarHeading hamburger={hamburger}>Robin Singh</SidebarHeading>

            <SidebarNav>
                <SidebarNavList >
                    <li>
                        <SidebarNavLink to="/" activeClassName="activeLink" hamburger={hamburger ? 1: 0}>
                            <span> Home </span>
                            <FaHome />
                        </SidebarNavLink>
                    </li>
                    <li>
                        <SidebarNavLink to="/blog" activeClassName="activeLink" partiallyActive={(!hamburger)} hamburger={hamburger ? 1: 0}> 
                            <span> Blog </span>
                            <FaFeatherAlt />
                        </SidebarNavLink>
                    </li>
                    <li>
                        <SidebarNavLink to="/about" activeClassName="activeLink" hamburger={hamburger ? 1: 0}>
                            <span> About </span>
                            <FaGrinBeam />
                        </SidebarNavLink>
                    </li>
                    <li>
                        <SidebarNavLink to="/contact" activeClassName="activeLink" hamburger={hamburger ? 1: 0}>
                            <span> Contact </span>
                            <FaAddressCard />
                        </SidebarNavLink>
                    </li>
                </SidebarNavList>
            </SidebarNav>
            
            {
                (!hamburger) && 
                <SidebarFooter>
                    <ToggleThemeSlider />
                    <SocialLinksContainer>
                        <p>Social Links</p>
                        <div>
                            <SocialIcon href="https://www.google.com" target="_blank" rel="noopener noreferrer" socialSiteName="facebook" aria-label="Facebook">                        
                                <FaFacebook/>
                            </SocialIcon>                        
                            <SocialIcon href="https://www.google.com" target="_blank" rel="noopener noreferrer" socialSiteName="linkedin" aria-label="Linked in">                        
                                <FaLinkedin/>
                            </SocialIcon>                        
                            <SocialIcon href="https://www.google.com" target="_blank" rel="noopener noreferrer" socialSiteName="instagram" aria-label="Instagram">                        
                                <FaInstagram/>
                            </SocialIcon>                        
                        </div>
                    </SocialLinksContainer>
                </SidebarFooter>  
            }
        </SidebarContainer>
    );
};

export default Sidebar;