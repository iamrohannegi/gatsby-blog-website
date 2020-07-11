import React, { useState } from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, connectStateResults } from 'react-instantsearch-dom';

import SearchInput from './SearchInput';
import PostPreview from './PostPreview';
import PoweredBy from './PoweredByAlgolia';

const SearchBarWrapper = styled.div`
    position: relative;

    @media (max-width: 700px) {
        margin-top: 1.5rem;
        padding: 0 1.4rem;
        order: 1;
        flex-basis: 100%;
    }
`;

const SearchResultHeader = styled.p`
    margin: 0;
    padding: 2rem 1.5rem 1rem 1.5rem;
    color: var(--secondaryTextColor);
`;

const HitsWrapper = styled.div`
    background: var(--secondary-bgcolor);
    border-radius: 15px;
    box-shadow: 1px 5px 6px 3px var(--search-shadowColor);
    display: ${({ show }) => show ? "block" : "none"};
    position: absolute;
    top: 130%;
    left: -15%;
    width: 130%;
    z-index: 2;

    &:before {
        content: '';
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid var(--secondary-bgcolor);
        position: absolute;
        top: -1rem;
        left: 20%;
        height: 0;
        width: 0;
    }

    
    @media (max-width: 700px) {
        width: 100%;
        left: 0;
    }
`;

const StyledHits = styled(Hits)`
    max-height: 300px;
    overflow-y: auto;

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        border-bottom: 1px solid var(--primary-bgcolor);
    }
`;

const Results = connectStateResults(
    ({ searchState: state, searchResults: res, children }) =>
      (res && res.nbHits > 0 ? children : (<SearchResultHeader>{`No results for '${state.query}'`}</SearchResultHeader>))
);

const Stats = connectStateResults(
    ({ searchResults: res }) => res && res.nbHits > 0 && (
        <SearchResultHeader>{`${res.nbHits} result${res.nbHits > 1 ? `s` : ``} found`}</SearchResultHeader>)
);


const SearchBar = () => {
    const searchClient = algoliasearch('LKN3NXXYLP', '6ed86ad04fbb742ace166f1742282173');
    const [query, setQuery] = useState(``);
    const [focus, setFocus] = useState(false);
  

    return (
        <SearchBarWrapper>
            <InstantSearch searchClient={searchClient} indexName="Blog" onSearchStateChange={({ query }) => setQuery(query)}>
                <SearchInput onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => {setFocus(false)}, 100)}/>
                <HitsWrapper show={query.length > 0 && !(query.trim() === '') && focus}>
                    <Stats />
                    <Results>
                        <StyledHits hitComponent={PostPreview} />
                    </Results>
                    <PoweredBy />
                </HitsWrapper>
            </InstantSearch>
        </SearchBarWrapper>
    );
};

export default SearchBar;