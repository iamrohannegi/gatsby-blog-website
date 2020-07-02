import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaTag } from 'react-icons/fa';

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
    flex-basis: ${({ widerflex }) => widerflex ? '50%' : '25%'};
    height: 200px;
    overflow: hidden;
`;

const ThumbnailImage = styled.img`
    height: 100%;
    object-fit: cover;  
    width: 100%;
`;

const BlogMetadata = styled.div`
    color: var(--secondaryTextColor);
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 0 0 2rem 0;
    p {
        margin: 0;
    }
`;

const BlogCategory = styled.div`
    align-items: center;
    display: flex;
    margin-left: 2rem; 
    color: var(--secondaryTextColor);

    p {
        margin-left: 0.5rem;
    }
`;

const BlogPostContent = styled.div`
    flex-basis:  ${({ widerflex }) => widerflex ? '50%' : '75%'};
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    margin: 1.5rem 0;
`;

const TitleHeading = styled.h2`
    display: inline-block;
    color: var(--primaryTextColor);
    margin: 0 0 1rem 0;;
`;

const Description =  styled.p`
    line-height: 1.5; 
    margin: 0;
    width: ${({ widerflex }) => widerflex ? '100%' : '70%'};
`;

const BlogPostCard = ({ slug, thumbnailUrl, publishedDate, title, category, shortDescription, widerflex}) => {
    return (
        <Link to={`/blog/${slug}`} key={slug}>
            <BlogPost>
                <ThumbnailContainer widerflex={widerflex}>
                    <ThumbnailImage src={thumbnailUrl}/>
                </ThumbnailContainer>
                <BlogPostContent widerflex={widerflex}>
                    <TitleHeading>{title}</TitleHeading>
                    <BlogMetadata>
                        <p>{publishedDate}</p>
                        <BlogCategory>
                            <FaTag />
                            <p>{ category }</p>
                        </BlogCategory>
                    </BlogMetadata>
                    <Description widerflex={widerflex}>{shortDescription}</Description>
                </BlogPostContent>
            </BlogPost>
        </Link>
    );
};

export default BlogPostCard;