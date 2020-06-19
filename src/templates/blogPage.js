import React from 'react';
import styled from 'styled-components';
import { FaCalendar, FaClock, FaQuoteLeft} from 'react-icons/fa';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import GlobalStyles from '../styles/GlobalStyles';
import Container from '../styles/container';
import HeaderBlogPage from '../components/HeaderBlogPage';
import Footer from '../components/Footer';
import Pager from '../components/Pager';
import ShareButton from '../components/ShareButton';


const Wrapper = styled.div`
    display: flex;
    color: var(--primaryTextColor);
    background: var(--primary-bgcolor);
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex-grow: 1;
    color: var(--primaryTextColor);  
`;

const MainContentHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 14rem 0 10rem 0;   
`;

const Title = styled.h1`
    font-size: 7rem;
    margin: 0 0 2rem 0;
`;

const BlogMetadata = styled.div`
    display: flex;    

    div + div {
        margin-left: 2rem;
    }
`;

const BlogMetadataDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    p {
        margin: 0 0 0 1rem;
    }
`;

const MainContentText = styled.div`
    margin-bottom: 12rem;
    h1, h2 {
        margin: 5rem 0 3rem 0;
    }
    p {
        margin-bottom: 3rem;
    }
`;

const MainContentImg = styled.img`
    width:100%;
`;

const Blockquote = styled.blockquote`
    background: var(--quote-bgColor);
    border-left: 8px solid #323DA5;
    margin: 0 0 4rem 0;
    padding: 3rem 2rem;

    span {
        display: inline-block;
        padding: 1rem;
    }
`;

export const query = graphql`
    query( $slug : String! ){
        contentfulBlogPost( slug: { eq: $slug }) {
            title,
            slug,
            publishedDate (formatString: "MMMM Do, YYYY"),
            minuteRead,
            body {
                json
            }
        }
    }
`;

const BlogPage = ({ data, pageContext }) => {

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const src = `${node.data.target.fields.file['en-US'].url}?fm=jpg&fl=progressive&fit=pad&bg=rgb:F6F7FB&w=1200`;
                return <MainContentImg alt={alt} src={src} />
            },
            [BLOCKS.QUOTE]: (node) => (
                <Blockquote>
                    <FaQuoteLeft />
                    <span>
                        {
                            node.content.map(edge => (
                                edge.content[0].value
                            ))
                        }
                    </span>
                </Blockquote>
            )
        }
    };

    return (
        <Wrapper>
            <GlobalStyles blogTemplate />
            <HeaderBlogPage/>

            <MainContent>
                <Container >
                    <article>
                        <MainContentHeader>
                            <Title>{data.contentfulBlogPost.title}</Title>
                            <BlogMetadata>
                                <BlogMetadataDiv>
                                    <FaCalendar />
                                    <p>{data.contentfulBlogPost.publishedDate}</p> 
                                </BlogMetadataDiv>
                                <BlogMetadataDiv>
                                    <FaClock />
                                    <p>{`${data.contentfulBlogPost.minuteRead} min read`}</p>
                                </BlogMetadataDiv>
                                <ShareButton />
                            </BlogMetadata>
                        </MainContentHeader>   
                        <MainContentText>
                            { documentToReactComponents(data.contentfulBlogPost.body.json, options) }
                            <Blockquote>
                                <FaQuoteLeft />
                                <span>We are Groot. - Groot</span>
                            </Blockquote>

                            <ShareButton active fontSizeRem={2.5} gap="2rem" margin="3rem 0"    />
                            <Pager pageContext={pageContext}></Pager>
                        </MainContentText>
                    </article>
                </Container>
            </MainContent>

            <Footer />
        </Wrapper>
    )
}

export default BlogPage;
