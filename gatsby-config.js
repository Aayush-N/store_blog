require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `The Store Project | Create an Ecommerce Store in One Click`,
    name: `The Store Project`,
    siteUrl: `https://thestoreproject.com/blog/`,
    description: `The easiest way to create an Ecommerce store and website`,
    hero: {
      heading: `The Store Project | Blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/thestoreproject`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/the.store.project`,
      },
    ],
  },
  pathPrefix: `/blog`,
  plugins: [
    {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          //local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
