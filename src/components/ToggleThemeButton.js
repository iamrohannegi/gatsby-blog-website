import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled from 'styled-components';

import { FaSun, FaMoon } from 'react-icons/fa';



const ToggleCheckboxContainer = styled.div`
    position: relative;
    width: 2.1rem;
    height: 2.1rem;
    margin-left: 2rem;

    svg {
        position: absolute;
        top: 0; 
        left: 0;
        height: 100%;
        width: 100%;  
        transition: 0.2s all ease-in-out;
    }
`;
  
const ToggleCheckbox= styled.input`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    &:hover ~ svg {
        color: #F52F57;
    }
`;

const ToggleThemeButton = ({ onlyIcon }) => {
    return (
        <ThemeToggler>
            {
                ({ theme, toggleTheme }) => (
                    <ToggleCheckboxContainer>
                        <ToggleCheckbox
                            type="checkbox" 
                            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />
                        { theme === 'dark' && <FaSun />}
                        { theme === 'light' && <FaMoon />}
                    </ToggleCheckboxContainer>
                )
            }
        </ThemeToggler>
    );
};

export default ToggleThemeButton;