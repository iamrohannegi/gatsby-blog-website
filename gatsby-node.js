const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const postListTemplate = path.resolve('./src/templates/blogPostList.js');
    const blogPageTemplate = path.resolve('./src/templates/blogPage.js');
    const categoryBlogList = {};

    const res = await graphql(`
        {
            allContentfulBlogPost( sort: { fields: publishedDate, order: DESC } )
            {
                edges {
                    node {
                        slug,
                        category,
                        title
                    }
                }
            }
        }
    `);
    
    res.data.allContentfulBlogPost.edges.map((edge, idx, edges) => {
        // Separating blogs based on category
        const category = edge.node.category;
        if(category in categoryBlogList) { 
            categoryBlogList[category].push(edge.node);
        } else { 
            categoryBlogList[category] = [edge]; 
        } 

        //Blog Page
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
        });
    });

    const categories = Object.keys(categoryBlogList);

    // Blog List Page
    paginate({
        createPage,
        items: res.data.allContentfulBlogPost.edges,
        itemsPerPage: 3,
        pathPrefix: '/blog',
        component: postListTemplate,
        context: {
            categories
        }
    });


    // Categories List Page
    for(let category of categories){
        const categorySlug = category.toLowerCase().trim().replace(/ /g, '-');
        paginate({
            createPage,
            items: categoryBlogList[category],
            itemsPerPage: 3,
            pathPrefix: `/blog/category/${categorySlug}`,
            component: postListTemplate,
            context: {
                category,
                categories
            }
        });
    };
}

