import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';

const HamburgerContainer = styled.div`
    display: none; 

    @media only screen and (max-width: 600px) {
        display: block;
    }
`;

const HamburgerButton = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content:center;

    svg {
        font-size: 3rem;
    }
`;



const Menu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const CloseButton = styled(HamburgerButton)`
    color: var(--primaryTextColor);
    position: fixed;
    top: 5vh; 
    left: 6vw;
    opacity: 0.5;
    z-index: 2;
`;
const HamburgerMenu  = () => {
    const [display, setDisplay] = useState(false);

    return (
        <HamburgerContainer>
            <HamburgerButton onClick={() => setDisplay(true)}>
                <FaBars />            
            </HamburgerButton>
            { display && 
                <Menu>
                    <CloseButton onClick={() => setDisplay(false)}>
                        <FaTimes />
                    </CloseButton>
                    <Sidebar hamburger/> 
                </Menu>
            }
        </HamburgerContainer>    
    )   
};

export default HamburgerMenu;