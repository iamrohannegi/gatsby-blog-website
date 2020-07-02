import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import BlogPostCard from '../components/BlogPostCard';
import Pager from '../components/Pager';
import SearchBar from '../components/SearchBar';
import FilterSelect from '../components/FilterSelect';
import Button from '../components/Button';

export const query = graphql`
    query($skip: Int!, $limit: Int!, $category: String) {
        allContentfulBlogPost ( 
            sort: { fields: publishedDate, order: DESC },
            filter: { category: { eq: $category }},
            limit: $limit,
            skip: $skip
        ) {
            edges {
              node {
                title, 
                slug,
                publishedDate (formatString: "MMMM Do, YYYY"),
                shortDescription,
                category,
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

const Header = styled.header`
    align-items: center;
    display: flex;
    margin: 1.2rem 0 5rem 0;

    h1 {
      margin: 0 0 0 1.4rem;
      flex: 1 1 0;
    }
`;  

const CategoryHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    margin: 9.3rem 0 4rem 1.4rem;

    h2 {    
      color: var(--secondaryTextColor); 
      font-size: 2.5rem; 

      span {
        color: var(--primaryTextColor); 
        font-size: 3rem;
        font-weight: 700;
      }
    }

    @media only screen and (max-width: 1100px){
      margin-top: 2rem;
    }
`;

const RemoveFilter = styled(Link)`
  background: var(--secondary-bgcolor);
  border-radius: 20px;
  box-shadow: 0px 7px 2px 0px var(--postCard-hoverColor);
  color: var(--secondaryTextColor);
  display: inline-block;
  font-size: 1.6rem;
  padding: 1rem 3rem;
  margin: 0 1.4rem 0 0;
  transition: all 0.2s ease;
  &:hover {
      transform: translateY(-0.4rem);
      color: #fff;
      background: #5A62B3;
  }
`;
const PostList = ({ data, pageContext }) => {
    const posts = data.allContentfulBlogPost.edges;
    const { categories, category } = pageContext; 
    return (
        <Layout title="Blog | Robin Singh">
          <Header>
            <h1>Blog</h1>
            <SearchBar />
            <FilterSelect categories={categories} />     
          </Header>
          <section>
            { category && 
              <CategoryHeader>
                <h2>Filtered by <span>{ category }</span></h2>
                <RemoveFilter to="/blog">Remove Filter</RemoveFilter>
              </CategoryHeader>
            }

            {
              posts.map(edge => (
                <BlogPostCard 
                  key={edge.node.slug}
                  slug={edge.node.slug}
                  title={edge.node.title}
                  category={edge.node.category}
                  thumbnailUrl={edge.node.thumbnail.file.url}
                  publishedDate={edge.node.publishedDate}
                  shortDescription={edge.node.shortDescription}
                />
              ))
            }
          </section>
          <Pager pageContext={pageContext} />
        </Layout>
    );
};

export default PostList;