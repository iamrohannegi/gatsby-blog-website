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

    @media (max-width: 475px) {
        flex-wrap: wrap;
    }
`;

const PageLinkButton = styled(Link) `
    background: var(--secondary-bgcolor);
    border-radius: 20px;
    box-shadow: 0px 7px 2px 0px var(--postCard-hoverColor);
    color: var(--primaryTextColor);
    display: inline-block;
    padding: 1rem 3rem;
    transition: all 0.2s ease;
    &:hover {
        transform: translateY(-0.4rem);
        color: #fff;
        background: #5A62B3;
    }
`

const PageLinkCard = styled(({alignItems, ...rest}) => <Link {...rest}/>)`
    color: var(--primaryTextColor);
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems || 'flex-start'};

    &:hover {
        color: #FE9920;
    }

    @media (max-width: 475px) {
        flex-basis: 100%;
        align-items: flex-start;
        margin-bottom: 2rem;
    }
`;

const PageLinkText = styled.span`
    font-family: 'Merriweather', serif;
    font-size: 2rem;
    @media (max-width: 600px){
        font-size: 1.8rem;
    }

    @media (max-width: 475px) {
        padding: 0;
        line-height: 1.2;
    }
`;
const PageLinkNavText = styled(PageLinkText)`
    color: var(--secondaryTextColor);
    margin-bottom: 2rem;

    @media (max-width: 475px) {
        margin: 0 0 0.5rem 0;
    }
`;
const PageLinkTitle = styled(PageLinkText)`
    padding: 0 1rem;
    word-break: break-word;
    line-height: 1.5;
    max-width: 500px;

    @media (max-width: 700px) {
        max-width: 300px;
    }
`;

const PageLinkTitleDiv = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 475px) {
        svg {
            display: none;
        }
    }
`;

const Pager = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, previousPageTitle, nextPageTitle} = pageContext;
    
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
                    previousPageTitle ? 
                        <PageLinkCard to={previousPagePath}>
                            <PageLinkNavText margin="0 0 2rem 0">Previous</PageLinkNavText>
                            <PageLinkTitleDiv>
                                <FaArrowLeft />
                                <PageLinkTitle>{previousPageTitle}</PageLinkTitle>
                            </PageLinkTitleDiv>
                        </PageLinkCard> 
                        :
                        <PageLinkButton to={previousPagePath} aria-label="Previous page">
                            <FaArrowLeft />
                        </PageLinkButton>
                )
            }
            {
                nextPagePath && (
                    nextPageTitle ? 
                        <PageLinkCard to={nextPagePath} alignItems='flex-end'>
                            <PageLinkNavText  margin="0 0 2rem 0">Next</PageLinkNavText>
                            <PageLinkTitleDiv>
                                <PageLinkTitle>{nextPageTitle}</PageLinkTitle>
                                <FaArrowRight />
                            </PageLinkTitleDiv>
                        </PageLinkCard> 
                        :
                        <PageLinkButton to={nextPagePath} aria-label="Next page">
                            <FaArrowRight />
                        </PageLinkButton>
                )
            }
        </PagerWrapper>
    )
};

export default Pager;



