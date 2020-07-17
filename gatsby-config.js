const blogQuery = `{
  allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}){
    nodes{
      id,
      title,
      slug,
      publishedDate (formatString: "MMMM Do, YYYY"),
      category
    }
  }
}`;

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.allContentfulBlogPost.nodes,
  }
];


module.exports = {
  siteMetadata: {
    title: 'Robin Singh',
    siteUrl: 'https://jolly-mccarthy-4981ec.netlify.app/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT,
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
          {
            family: `Merriweather`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt'
  ],
}
