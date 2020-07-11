import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaTag } from 'react-icons/fa';

const BlogPost = styled(Link)`
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

   @media (max-width: 700px) {
       flex-direction: column;
   }

   @media (max-width: 450px) {
       padding: 2rem 1.3rem 1rem 1.3rem;
   }
`;

const ThumbnailImage = styled.img`
    border-radius: 15px;
    flex-basis: ${({ widerflex }) => widerflex ? '50%' : '30%'};
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    @media (max-width: 1550px) {
        flex-basis: 50%;   
    }

    @media (max-width: 700px) {
        max-height: 250px;
        height: 250px;
    }

`;

const BlogPostContent = styled.div`
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    margin: 1.5rem 0;

    @media (max-width: 700px) {
        margin: 2.5rem 0 2rem 0;
        padding: 0 1rem;
    }
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

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
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

    @media (max-width: 400px) {
        margin: 0.5rem 0 0 0;
    }
`;

const TitleHeading = styled.h2`
    display: inline-block;
    color: var(--primaryTextColor);
    margin: 0 0 1rem 0;;
`;

const Description =  styled.p`
    line-height: 1.5; 
    margin: 0;
    width: ${({ widerflex }) => widerflex ? '95%' : '70%'};

    @media (max-width: 1550px) {
        width: 95%;   
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`;

const BlogPostCard = ({ 
    slug, 
    thumbnailUrl,
    publishedDate, 
    title, 
    category, 
    shortDescription, 
    widerflex
}) => {
    return (
        <BlogPost to={`/blog/${slug}`} key={slug}>
            <ThumbnailImage src={thumbnailUrl} widerflex={widerflex}/>

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
    );
};

export default BlogPostCard;