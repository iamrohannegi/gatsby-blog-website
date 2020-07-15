import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; 
import { BLOCKS, INLINES, MARKS} from '@contentful/rich-text-types';
import BlogPostCard from '../components/BlogPostCard';
import styled from 'styled-components';
import moment from 'moment';

const MainContentImg = styled.picture`
    img {
        width: 100%;
    }
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

const Hyperlink = styled.a.attrs(() => ({
    target: '_blank',
    rel: 'noopener noreferrer'
}))`
    color: var(--blog-linkColor);

    &:hover {
        text-decoration: underline
    }
`;

const Underline = styled.span`
    background: var(--blog-underlineBg);
    color: var(--blog-underlineColor);
`

export default {
    renderMark: {
        [MARKS.UNDERLINE]: (text) => (
            <Underline>{text}</Underline>
        )
    },
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const alt = node.data.target.fields.title['en-US'];
            const src = `${node.data.target.fields.file['en-US'].url}?fm=jpg&fl=progressive&fit=pad&w=1200&q=70`;
            return (
                <MainContentImg>
                    <source media="(min-width: 800px)" srcSet={`${node.data.target.fields.file['en-US'].url}?fm=webp&w=1200&h=500&fit=fill&q=80`} type="image/webp"  />
                    <source media="(min-width: 450px)" srcSet={`${node.data.target.fields.file['en-US'].url}?fm=webp&w=800&h=400&fit=fill&q=80`} type="image/webp"  />
                    <source srcSet={`${node.data.target.fields.file['en-US'].url}?fm=webp&w=400&q=80`} />
                    <img alt={alt} src={src} />
                </MainContentImg>
            )
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node) => (
            <BlogPostCard widerflex
              slug={node.data.target.fields.slug['en-US']}
              title={node.data.target.fields.title['en-US']}
              category={node.data.target.fields.category['en-US']}
              thumbnailUrl={node.data.target.fields.thumbnail['en-US'].fields.file['en-US'].url}
              publishedDate={moment.utc(node.data.target.fields.publishedDate['en-US']).format("MMMM Do, YYYY")}
              shortDescription={node.data.target.fields.shortDescription['en-US']}
            />
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => ( <p className="richtext-paragraph margin-medium-y">{ children }</p>),
        [BLOCKS.UL_LIST]: (node, children) => ( <ul className="richtext-ul margin-medium-y">{ children }</ul>),
        [BLOCKS.OL_LIST]: (node, children) => ( <ol className="richtext-ol margin-medium-y">{ children }</ol>),
        [BLOCKS.HEADING_1]: (node, children) => ( <h1 className="heading h1">{ children }</h1>),
        [BLOCKS.HEADING_2]: (node, children) => ( <h2 className="heading h2">{ children }</h2>),
        [BLOCKS.HEADING_3]: (node, children) => ( <h3 className="heading">{ children }</h3>),
        [BLOCKS.HEADING_4]: (node, children) => ( <h4 className="heading">{ children }</h4>),
        [BLOCKS.HEADING_5]: (node, children) => ( <h5 className="heading">{ children }</h5>),
        [BLOCKS.HEADING_6]: (node, children) => ( <h6 className="heading">{ children }</h6>),
        [BLOCKS.QUOTE]: (node, children) => (
            <Blockquote>
                <FaQuoteLeft />
                <span>{ children }</span>
            </Blockquote>
        ),
        [INLINES.HYPERLINK]: (node, children) => (
            <Hyperlink href={node.data.uri}>{ children }</Hyperlink>
        ),
        [INLINES.ASSET_HYPERLINK]: (node, children) => (
            <Hyperlink></Hyperlink>
        )
    }
};
