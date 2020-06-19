import React from 'react';
import { Link } from 'gatsby';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

const PagerWrapper = styled.div `
    display: flex;
    justify-content: ${({ page }) => {
        if(page === 'first') return 'flex-end';
        else if(page === 'middle') return 'space-between';
        else return 'flex-start';
    }};
    padding: 1rem;
`;

const PageLink = styled(Link) `
    background: var(--btn-primaryBgColor);
    border-radius: 20px;
    box-shadow: 0px 7px 2px 0px rgba(233,233,233,0.81);
    display: inline-block;
    padding: 1rem 3rem;
    transition: all 0.2s ease;
    &:hover {
        transform: translateY(-0.4rem);
        color: #fff;
        background: #F52F57;
    }

`
const Pager = ({ pageContext }) => {
    const { previousPagePath, nextPagePath} = pageContext;
    
    const pageType = () => {
        if(previousPagePath && nextPagePath) 
            return 'middle';
        else if (previousPagePath) 
            return 'last';
        else 
            return 'first';
    }

    return ( 
        <PagerWrapper page={pageType()}> 
            { 
                previousPagePath && (
                    <PageLink to={previousPagePath}><FaArrowLeft /></PageLink>
                )
            }
            {
                nextPagePath && (
                    <PageLink to={nextPagePath}><FaArrowRight /></PageLink>
                )
            }
        </PagerWrapper>
    )
};

export default Pager;



