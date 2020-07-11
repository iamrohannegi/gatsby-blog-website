import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled from 'styled-components';

import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleCheckboxContainer = styled.div`
    margin-left: 2rem;
    @media only screen and (max-width: 600px) {
        margin: 0;
    }
`;
  
const ToggleCheckbox= styled.input`
    position: absolute;
    opacity: 0;
    
    &:checked + div label:nth-of-type(2) {
        display: none;
    }

    &:checked + div label:nth-of-type(1) {
        display: flex;
    }

`;

const LabelContainer = styled.div`
    display: flex;
`;

const ThemeLabel = styled.label`
    align-items: center;
    border: 2px solid var(--secondaryTextColor);
    border-radius: 5px;
    cursor: pointer;
    display: ${({ theme }) => (theme==="dark") ? 'flex' : 'none'};
    justify-content: center;
    opacity: 0.5;
    font-size: 2rem;
    padding: 0.5rem;

    &:hover {
        opacity: 1;
    }
`;

const ToggleThemeButton = () => {
    return (
        <ThemeToggler>
            {
                ({ theme, toggleTheme }) => (
                    <ToggleCheckboxContainer>
                        <ToggleCheckbox
                            id="theme"
                            type="checkbox" 
                            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />
                        <LabelContainer>
                            <ThemeLabel htmlFor="theme" theme="light"><FaSun /></ThemeLabel>
                            <ThemeLabel htmlFor="theme" theme="dark"><FaMoon /></ThemeLabel>
                        </LabelContainer>
                        
                    </ToggleCheckboxContainer>
                )
            }
        </ThemeToggler>
    );
};

export default ToggleThemeButton;

/*
    { theme === 'dark' && <ThemeLabel for="theme"><FaSun /></ThemeLabel>}
                        { theme === 'light' && <ThemeLabel for="theme"><FaMoon /></ThemeLabel>}
*/