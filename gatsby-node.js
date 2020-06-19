const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const postListTemplate = path.resolve('./src/templates/blogPostList.js');
    const blogPageTemplate = path.resolve('./src/templates/blogPage.js');

    const res = await graphql(`
        {
            allContentfulBlogPost( sort: { fields: publishedDate, order: DESC } )
            {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    
    // Blog List Page
    paginate({
        createPage,
        items: res.data.allContentfulBlogPost.edges,
        itemsPerPage: 3,
        pathPrefix: '/blog',
        component: postListTemplate
    });

    // Blog Page
    res.data.allContentfulBlogPost.edges.map((edge, idx, edges) => {
        let previousPagePath, previousPageTitle, nextPagePath, nextPageTitle;
        const prevPage = edges[idx + 1];
        if(prevPage) {
            previousPagePath = `/blog/${prevPage.node.slug}`;
            previousPageTitle = prevPage.node.title;
        }
        const nextPage = edges[idx - 1];
        if(nextPage) {
            nextPagePath = `/blog/${nextPage.node.slug}`;
            nextPageTitle = nextPage.node.title;
        }

        createPage({
            component: blogPageTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                previousPagePath,
                previousPageTitle,
                nextPagePath,
                nextPageTitle
            }
        })
    });
}

