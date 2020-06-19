import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled from 'styled-components';

const ThemeToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 5rem 0 0;
    margin-bottom: 4rem;
    font-size: 1.6rem;
    span {
        margin-right: 8rem;
    }
`;

const ToggleTheme = () => {
    return (
        <ThemeToggler>
            {
                ({ theme, toggleTheme }) => (
                    <ThemeToggleContainer>
                        <span>Dark Mode</span>
                        <input 
                            type="checkbox" 
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />
                    </ThemeToggleContainer>
                )
            }
        </ThemeToggler>
    );
};

export default ToggleTheme;