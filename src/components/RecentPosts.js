import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'; 
import styled from 'styled-components';

import BlogPostCard from './BlogPostCard';
import { StyledButton } from './Button';

const SectionHeading = styled.h2`
    margin: 0 0 3rem 1.4rem;
`;

const StyledLink = styled(StyledButton)`
    background: var(--secondary-bgcolor);
    box-shadow: 0px 7px 2px 0px var(--postCard-hoverColor);
    color: var(--primaryTextColor);
    text-align: center;
    max-width: 15rem;
`;
const RecentPosts = () => {
    const data = useStaticQuery(graphql`
    {
        allContentfulBlogPost ( 
            sort: { fields: publishedDate, order: DESC },
            limit: 3,
        ) {
            edges {
              node {
                title, 
                slug,
                publishedDate (formatString: "MMMM Do, YYYY"),
                shortDescription,
                category,
                thumbnail {
                  title,
                  file {
                    url
                  }
                }
              }
            }
        }
    } 
    `);

    return (
        <section>
            <SectionHeading>Recent Posts</SectionHeading>
            {
                data.allContentfulBlogPost.edges.map(edge => 
                    <BlogPostCard 
                    key={edge.node.slug}
                    slug={edge.node.slug}
                    title={edge.node.title}
                    category={edge.node.category}
                    thumbnailTitle={edge.node.thumbnail.title}
                    thumbnailUrl={edge.node.thumbnail.file.url}
                    publishedDate={edge.node.publishedDate}
                    shortDescription={edge.node.shortDescription}
                    />
                )
            }
            <StyledLink as={Link} to="/blog">More Posts</StyledLink>
        </section>
    );
};


export default RecentPosts;