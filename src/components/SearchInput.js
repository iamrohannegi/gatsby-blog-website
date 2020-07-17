import React from "react"
import styled from 'styled-components';
import { connectSearchBox } from "react-instantsearch-dom"
import { FaSearch } from 'react-icons/fa';

const SearchBarDiv = styled.div`
    position: relative;
    svg {
        position: absolute;
        font-size: 2rem;
        top: 22%;
        left: 0;
    }
`;

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid var(--secondaryTextColor);
    color: var(--primaryTextColor);
    font-size: 2rem;
    padding: 1rem 1rem 1rem 3rem;
    &:focus {
        outline: none;
    }


    @media (max-width: 700px) {
      width: 100%;
    }
`;

const SearchInput = connectSearchBox(({ refine, ...rest }) => (
  <SearchBarDiv>
    <FaSearch />
    <Input
      type="text"
      placeholder="Search Blogs"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </SearchBarDiv>
));

export default SearchInput;
