import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogPostCard from '../components/BlogPostCard';
import Pager from '../components/pager';

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulBlogPost ( 
            sort: { fields: publishedDate, order: DESC },
            limit: $limit,
            skip: $skip
        ) {
            edges {
              node {
                title, 
                slug,
                publishedDate (formatString: "MMMM Do, YYYY"),
                shortDescription,
                thumbnail {
                  file {
                    url
                  }
                }
              }
            }
        }
    } 
`;

const PostList = ({ data, pageContext}) => {
    const posts = data.allContentfulBlogPost.edges;
    return (
        <Layout>
          <h1>Blog</h1>        
          {
            posts.map(edge => (
              <BlogPostCard 
                key={edge.node.slug}
                slug={edge.node.slug}
                title={edge.node.title}
                thumbnailUrl={edge.node.thumbnail.file.url}
                publishedDate={edge.node.publishedDate}
                shortDescription={edge.node.shortDescription}
              />
            ))
          }
          <Pager pageContext={pageContext} />
        </Layout>
    );
};

export default PostList;