import React from "react";
import styled from 'styled-components';
import { Highlight } from "react-instantsearch-dom";
import { Link } from "gatsby";
import { FaTag } from 'react-icons/fa'; 

const SearchResultLink = styled(Link)`
  display: block;
  color: var(--primaryTextColor);
  padding: 1.5rem;
  &:hover {
    cursor: pointer;
    background: #5C64B3;
    color: #fff;
  }
`;

const StyledHighlight = styled(Highlight)`

`;

const SearchResultMetadata = styled.div`
  color: var(--secondaryTextColor);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  padding: 1rem 0 0 0;
  
  @media (max-width: 350px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const SearchResultTag = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  span {
    margin-left: 0.4rem;
  }
`;

const PostPreview = ({ hit }) => (
  <SearchResultLink to={`/blog/${hit.slug}`}>
    <StyledHighlight hit={ hit } attribute="title" />
    <SearchResultMetadata>
      <span>{hit.publishedDate}</span>
      <SearchResultTag>
        <FaTag /> 
        <span>{hit.category}</span>
      </SearchResultTag>
    </SearchResultMetadata>
  </SearchResultLink>
)

export default PostPreview;