import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
    background: var(--btn-primaryBgColor);
    border: none;
    border-radius: 20px;
    box-shadow: 0px 7px 2px 0px rgba(233,233,233,0.81);
    cursor: pointer;
    display: block;
    margin: ${({ margin }) => margin};
    padding: 1rem 3rem;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-0.4rem);
        color: #fff;
        background: ${({hoverBgColor}) => hoverBgColor ? hoverBgColor : "#e76f51"};
    }

    &:active {
        outline: none;
    }
`;

const Button = ({ margin, hoverBgColor, children }) => (
    <StyledButton margin={margin} hoverBgColor={hoverBgColor}>{ children }</StyledButton>
);

export default Button;