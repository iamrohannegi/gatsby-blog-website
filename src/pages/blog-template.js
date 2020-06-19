import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaCalendar, FaClock, FaShareAlt, FaQuoteLeft, FaFacebook, FaTwitterSquare, FaLinkedin, FaEnvelope, FaCopy } from 'react-icons/fa';

import GlobalStyles from '../styles/GlobalStyles';
import Container from '../styles/container';
import HeaderBlogPage from '../components/HeaderBlogPage';
import Footer from '../components/Footer';


const Wrapper = styled.div`
    display: flex;
    background: #F6F7FB;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex-grow: 1;  
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

const BlogShareContainer = styled.div`
    display: flex;
`;

const ShareButton = styled(BlogMetadataDiv)`
    border: none;
    background: none; 
    cursor: pointer;
    padding: 0;
    margin-right: 1rem;

    &.active {
        color: #F52F57;

        & + div {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
        }
    }

    &:hover {
        color: #FA75A7;
    }
    
    &:focus {
        outline: none;
    }
`; 

const ShareLinksContainer = styled.div`
    display: flex;
    visibility: hidden;
    align-items: center;
    transform: translateX(3rem);
    transition: all 0.2s ease-in-out;
    opacity: 0;

    a + a {
        margin-left: 1rem;
    }                               
`;

const ShareLink = styled.a.attrs(() => ({
    target: '_blank',
    rel: 'noopener noreferrer'
}))`
    display: flex;
    align-items: center;
    font-size: 2.5rem;

    &:hover {
        color: var(--${({ siteName }) => siteName});
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
    object-fit: cover;
    width: 100%;
    height: auto;
    max-height: 600px;
`;

const Blockquote = styled.blockquote`
    background: #e9e9e9;
    border-left: 8px solid #323DA5;
    margin: 0 0 4rem 0;
    padding: 3rem 2rem;

    span {
        display: inline-block;
        padding: 1rem;
    }
`;

const BlogTemplate = () => {
    return (
        <Wrapper>
            <GlobalStyles blogTemplate />
            <HeaderBlogPage />

            <MainContent>
                <Container>
                    <article>
                        <MainContentHeader>
                            <Title>I am Groot</Title>
                            <BlogMetadata>
                                <BlogMetadataDiv>
                                    <FaCalendar />
                                    <p>Jun 21, 2020</p> 
                                </BlogMetadataDiv>
                                <BlogMetadataDiv>
                                    <FaClock />
                                    <p>2 min read</p>
                                </BlogMetadataDiv>
                                <BlogShareContainer>
                                    <ShareButton as="button" onClick={(e) => {
                                        e.currentTarget.classList.toggle('active');
                                    }}>
                                        <FaShareAlt />
                                        <p>Share</p>
                                    </ShareButton>
                                    <ShareLinksContainer>
                                        <ShareLink href="" siteName="facebook"><FaFacebook /></ShareLink>
                                        <ShareLink href="" siteName="twitter"><FaTwitterSquare /></ShareLink>
                                        <ShareLink href="" siteName="linkedin"><FaLinkedin /></ShareLink>
                                        <ShareLink href="" siteName="mail"><FaEnvelope /></ShareLink>
                                        <ShareLink href="" siteName="clipboard"><FaCopy /></ShareLink>
                                    </ShareLinksContainer>
                                </BlogShareContainer>
                        
                            </BlogMetadata>
                        </MainContentHeader>   
                        <MainContentText>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia aspernatur cumque delectus ratione dolores cupiditate soluta nemo fugit, ipsam laudantium sint. Omnis, iste magni veniam unde sunt ratione repellat pariatur quas eveniet dicta minima doloremque quod dolorum laudantium voluptatibus? Nesciunt corrupti quo quidem asperiores aperiam veritatis quod vitae dolor, soluta mollitia corporis architecto nostrum aspernatur exercitationem. Vel, in. Placeat cupiditate accusamus reprehenderit sequi id eligendi perferendis eos, amet maxime exercitationem inventore, est consequatur consequuntur impedit atque debitis adipisci? Vitae doloribus est eos repudiandae architecto aut unde quos non! Quidem reiciendis voluptas officiis doloremque eaque, amet autem alias corporis sit?</p>
                            <Blockquote>
                                <FaQuoteLeft />
                                <span>We are Groot. - Groot</span>
                            </Blockquote>
                            <h2>asdoaskopdaskop</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto minima numquam magni minus totam consequuntur repellendus repudiandae ratione enim labore voluptates amet quia officia pariatur, omnis, illum excepturi? In id libero enim accusamus odit veniam? Tempora ipsam facilis nam aliquam numquam iusto, provident illo nesciunt corporis laborum commodi sequi doloremque architecto laudantium cum rem? Cupiditate excepturi provident ab eum non asperiores hic omnis, impedit blanditiis dolore tempore ducimus aliquid? Voluptates, aperiam neque voluptatum ab atque debitis consequatur culpa molestiae consequuntur saepe pariatur eligendi. Eaque aperiam recusandae ipsam tempore corporis praesentium, tempora debitis placeat, eius cumque magni maiores culpa! Sequi unde voluptates nisi, natus impedit voluptatem beatae. Minima nemo quod quia aperiam distinctio maiores labore in id autem fugiat ex delectus quibusdam expedita perspiciatis, repudiandae corporis praesentium odio excepturi explicabo! Nam fugit animi veniam architecto dolores maiores necessitatibus labore atque eaque accusantium rerum deleniti, excepturi hic enim. Quibusdam quos doloremque ducimus voluptatum libero vel qui praesentium dolores eum nam! Veritatis ipsa harum, veniam iusto laudantium corporis hic placeat voluptas repellat. Suscipit hic cupiditate nulla beatae harum nisi repudiandae, tenetur pariatur consectetur? Doloremque adipisci culpa et quam reprehenderit modi, commodi quia est voluptatibus, enim dicta perferendis quibusdam temporibus veniam nisi. Explicabo!</p>
                            <MainContentImg src="https://source.unsplash.com/random"></MainContentImg>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, recusandae! Rem maxime tempore quae fugit odit nostrum facilis voluptatem cumque pariatur quibusdam magnam sint praesentium obcaecati, et accusamus perspiciatis fugiat eaque dignissimos quisquam consequuntur magni esse dolore nobis. Dolore quos in possimus. Quia labore non sit culpa exercitationem magnam quas?</p>

                            <div>
                                <a href="/">Previous Blog</a>
                                <a href="/">Next Blog</a>
                            </div>
                        </MainContentText>
                    </article>
                </Container>
            </MainContent>

            <Footer />
        </Wrapper>
    )
}

export default BlogTemplate;
