import React from 'react';
import { Link } from 'gatsby';
import { FaHome, FaFeatherAlt, FaGrinBeam, FaAddressCard, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import styled from 'styled-components';

import ToggleThemeSlider from './ToggleThemeSlider';

const SidebarContainer = styled.aside`
    background: var(--secondary-bgcolor);
    display: flex;
    color: var(--primaryTextColor);
    flex-direction: column;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
`;

const SidebarHeading = styled.h1`
    padding: 4rem 4rem 4rem 5rem;
    margin-bottom: 5rem;
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
`;

const SidebarFooter = styled.footer`
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

const Sidebar = (props) => {
    return (
        <SidebarContainer>
            <SidebarHeading>Robin Singh</SidebarHeading>

            <SidebarNav>
                <SidebarNavList>
                    <li>
                        <SidebarNavLink to="/" activeClassName="activeLink">
                            <span> Home </span>
                            <FaHome />
                        </SidebarNavLink>
                    </li>
                    <li>
                        <SidebarNavLink to="/blog" activeClassName="activeLink" partiallyActive={true}>
                            <span> Blog </span>
                            <FaFeatherAlt />
                        </SidebarNavLink>
                    </li>
                    <li>
                        <SidebarNavLink to="/about" activeClassName="activeLink">
                            <span> About </span>
                            <FaGrinBeam />
                        </SidebarNavLink>
                    </li>
                    <li>
                        <SidebarNavLink to="/contact" activeClassName="activeLink">
                            <span> Contact </span>
                            <FaAddressCard />
                        </SidebarNavLink>
                    </li>
                </SidebarNavList>
            </SidebarNav>
            
            <SidebarFooter>
                <ToggleThemeSlider />
                <SocialLinksContainer>
                    <p>Social Links</p>
                    <div>
                        <SocialIcon href="https://www.google.com" target="_blank" rel="noopener noreferrer" socialSiteName="facebook">                        
                            <FaFacebook/>
                        </SocialIcon>                        
                        <SocialIcon href="https://www.google.com" target="_blank" rel="noopener noreferrer" socialSiteName="linkedin">                        
                            <FaLinkedin/>
                        </SocialIcon>                        
                        <SocialIcon href="https://www.google.com" target="_blank" rel="noopener noreferrer" socialSiteName="instagram">                        
                            <FaInstagram/>
                        </SocialIcon>                        
                    </div>
                </SocialLinksContainer>
            </SidebarFooter>
        </SidebarContainer>
    );
};

export default Sidebar;