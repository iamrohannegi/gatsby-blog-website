import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BlogPost = styled.div`
    background-color: var(--secondary-bgcolor);
    border-radius: 20px;
    cursor: pointer;
    color: var(--primaryTextColor);
    display: flex;
    margin-bottom: 3rem;
    padding: 2rem;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: translateY(-0.4rem);
        
        box-shadow: 0px 7px 2px 0px var(--postCard-hoverColor);
    }
`;

const ThumbnailContainer = styled.div`
    border-radius: 15px;
    flex-basis: 25%;
    height: 200px;
    overflow: hidden;
`;

const ThumbnailImage = styled.img`
    height: 100%;
    object-fit: cover;  
    width: 100%;
`;

const BlogPostContent = styled.div`
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3rem;
`;

const PublishedDate = styled.p`
    font-weight: bold;
    opacity: 0.5;
    margin: 0 0 1rem 0;
`;

const TitleHeading = styled.h2`
    display: inline-block;
    color: var(--primaryTextColor);
    margin: 0 0 2rem 0;
`;

const Description =  styled.p`
    line-height: 1.5; 
    margin: 0;
    width: 70%;
`;

const BlogPostCard = ({ slug, thumbnailUrl, publishedDate, title, shortDescription}) => {
    return (
        <Link to={`/blog/${slug}`} key={slug}>
            <BlogPost>
                <ThumbnailContainer>
                    <ThumbnailImage src={thumbnailUrl}/>
                </ThumbnailContainer>
                <BlogPostContent>
                    <PublishedDate>{publishedDate}</PublishedDate>
                    <TitleHeading>{title}</TitleHeading>
                    <Description>{shortDescription}</Description>
                </BlogPostContent>
            </BlogPost>
        </Link>
    );
};

export default BlogPostCard;