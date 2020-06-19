import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled from 'styled-components';

import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 5rem 0 0;
    margin-bottom: 4rem;
    font-size: 1.6rem;
`;


const SliderCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    &:checked + label div {
        transform: translateX(24px);
    }
`;

const SliderLabel = styled.label`
    align-items: center;
    background-color: #111;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    position: relative;
    padding: 5px;
    border-radius: 50px;
    width: 50px;
    height: 26px;

    svg {
        color: #fff;
    }
`;

const Ball = styled.div`
    background-color: #fff;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.1s linear;
`;

const ToggleThemeSlider = () => {
    return (
        <ThemeToggler>
            {
                ({ theme, toggleTheme }) => (
                    <ThemeToggleContainer>
                        <span>Theme</span>
                        <div>
                            <SliderCheckbox 
                                type="checkbox" 
                                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                checked={theme === 'dark'}
                                id="checkbox"
                            />
                            <SliderLabel for="checkbox">
                                <FaSun />
                                <FaMoon />
                                <Ball />
                            </SliderLabel>
                        </div>
                        
                    </ThemeToggleContainer>
                )
            }
        </ThemeToggler>
    );
};

export default ToggleThemeSlider;