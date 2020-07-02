import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaAngleDown } from 'react-icons/fa'; 

const FilterDropdownButton = styled.button`
    align-items: center;
    background: var(--secondary-bgcolor);
    border: none;    
    border-radius: 10px;
    cursor: pointer;
    color: var(--secondaryTextColor);
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    transition: all 0.1s ease-in-out;

    &:focus {
        outline: none;
    }
    
    &:hover {
        background: #5B63B3;
        color: #fff;
    }

   svg {
       margin-left: 1rem;
   }
`;

const FilterLink = styled(Link)`
    display: block;
    color: var(--primaryTextColor);
    text-align: center;
    padding: 1.5rem 0.5rem;

    &:hover {
        background: #5B63B3;
        color: #fff;
    }

    &:first-child {
        border-radius: 10px 10px 0 0;
    }

    &:last-child {
        border-radius: 0 0 10px 10px;
    }
`;

const FilterDropdownDiv = styled.div`
    background-color: var(--secondary-bgcolor);   
    border-radius: 10px;
    box-shadow: 1px 5px 6px 3px var(--search-shadowColor);
    display: none;
    position: absolute;
    top: 123%;
    left: 0;
    width: 100%;
    z-index: 1;

    ${FilterLink} + ${FilterLink} {
        border-top: 1px solid var(--primary-bgcolor);
    }

    &:before {
        content: '';
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid var(--secondary-bgcolor);
        position: absolute;
        top: -1.2rem;
        left: 68%;
        height: 0;
        width: 0;
    }
`;

const FilterDiv = styled.div`
    position: relative;
    margin: 0 1.4rem 0 5rem;
    &.show-dropdown ${FilterDropdownDiv} {
        display: block;
    }

    &.show-dropdown ${FilterDropdownButton} {
        background: #5B63B3;
        color: #fff;
    }
`;


const FilterSelect = ({ categories }) => (
    <FilterDiv>
        <FilterDropdownButton onClick={
            (e) => {
                e.currentTarget.parentNode.classList.toggle('show-dropdown');
            }
        }>
            <p>Filter posts</p>
            <FaAngleDown />
        </FilterDropdownButton>
        <FilterDropdownDiv>
            {
                categories.map(category => (
                    <FilterLink to={`/blog/category/${category.toLowerCase().trim().replace(/ /g, '-')}`} key={category}>{ category.trim() }</FilterLink>
                ))
            }    
        </FilterDropdownDiv>
    </FilterDiv>
);

export default FilterSelect;