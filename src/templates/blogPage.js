import React from 'react';
import styled from 'styled-components';
import { FaCalendar, FaClock, FaTag} from 'react-icons/fa';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import GlobalStyles from '../styles/GlobalStyles';
import Head from '../components/Head';
import Container from '../styles/container';
import HeaderBlogPage from '../components/HeaderBlogPage';
import Footer from '../components/Footer';
import Pager from '../components/Pager';
import ShareButton from '../components/ShareButton';
import options from '../contentful/options';

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
    margin-bottom: 8rem;

    @media (max-width: 475px) {
        margin-bottom: 3rem;
    }
`;

const MainContentHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 14rem 0 10rem 0;
    
    @media only screen and (max-width: 600px){
        padding: 10rem 0;
    }

    @media only screen and (max-width: 350px){
        padding: 5rem 0 0 0;
        margin-bottom: 5rem;
    }   
`;

const Title = styled.h1`
    font-size: 7rem;
    margin: 0 0 2rem 0;

    @media only screen and (max-width: 420px){
        font-size: 5.5rem;
    }
`;

const CategoryLink = styled(Link)`
    align-items: center;
    display: inline-flex;
    color: var(--primaryTextColor);
   
    p {
        font-family: 'Merriweather', serif;
        font-size: 1.8rem;
        line-height: 1.8;
        margin: 0 0 0 1rem;
    }

    &:hover {
        color:  #FE9920;
    }
`;

const BlogMetadata = styled.div`
    display: flex;    

    div + div {
        margin-left: 2rem;
    }
    
    @media only screen and (max-width: 600px){
        flex-wrap: wrap;    
        
        div:last-child {
            margin: 0.5rem 0 0 0;
        }
    }

    @media only screen and (max-width: 355px){
        flex-direction: column;
        align-items: flex-start;
        div + div{
            margin: 0;
        }
    }
`;

const BlogMetadataDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    p {
        font-family: 'Merriweather', serif;
        font-size: 1.8rem;
        line-height: 1.8;
        margin: 0 0 0 1rem;
    }
`;

const MainContentText = styled.section`
    margin-bottom: 8rem;
    
    .richtext-paragraph {
        font-family: 'Merriweather', serif;
        font-size: 1.8rem;
        line-height: 1.8;
    }

    .heading{
        margin: 5rem 0 3rem 0;
        word-break: break-all;
    }

    .h1{
        font-size: 4rem;
    }
    
    .h2{
        font-size: 3rem;  
    } 

    .margin-medium-y {
        margin: 2rem 0;
    }

    .richtext-ul li{
        list-style-type: disc;
    }

    .richtext-ol li{
        list-style-type: decimal;
    }

    li {
        p {
            margin: 1rem 0;
        }
    }
`;


export const query = graphql`
    query( $slug : String! ){
        contentfulBlogPost( slug: { eq: $slug }) {
            title,
            slug,
            publishedDate (formatString: "MMMM Do, YYYY"),
            minuteRead,
            category,
            body {
                json
            }
        }
    }
`;

const BlogPage = ({ data, pageContext }) => {

    return (
        <Wrapper>
            <GlobalStyles />
            <Head title={`${data.contentfulBlogPost.title} | Robin Singh`}>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <HeaderBlogPage/>

            <MainContent>
                <Container >
                    <article>
                        <MainContentHeader>
                            <Title>{data.contentfulBlogPost.title}</Title>
                            <div>
                                <CategoryLink to={`/blog/category/${data.contentfulBlogPost.category.toLowerCase().trim().replace(/ /g, '-')}`}>
                                    <FaTag />
                                    <p>{ data.contentfulBlogPost.category }</p>
                                </CategoryLink>
                            </div>
                            <BlogMetadata>
                                <BlogMetadataDiv>
                                    <FaCalendar />
                                    <p>{data.contentfulBlogPost.publishedDate}</p> 
                                </BlogMetadataDiv>
                                <BlogMetadataDiv>
                                    <FaClock />
                                    <p>{`${data.contentfulBlogPost.minuteRead} min read`}</p>
                                </BlogMetadataDiv>
                                <ShareButton slug={data.contentfulBlogPost.slug}/>
                            </BlogMetadata> 
                        </MainContentHeader>

                        <MainContentText>
                            { documentToReactComponents(data.contentfulBlogPost.body.json, options) }
                        </MainContentText>
                        <ShareButton active slug={data.contentfulBlogPost.slug} fontSizeRem={2.5} gap="2rem" margin="3rem 0" />
                        <Pager pageContext={pageContext}></Pager>
                    </article>
                </Container>
            </MainContent>

            <Footer />
        </Wrapper>
    )
}

export default BlogPage;
