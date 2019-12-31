/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Spicy Sea Shells`,
    description: `The Home of the Spicy Sea Shells, a tech collective from all over the world.`,
    author: `Spicy Sea Shells`,
    siteUrl: `https://spicyseashells.com`,
  },
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-csp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `spicy-sea-shells`,
        short_name: `s^3`,
        start_url: `/blog`,
        background_color: `#FFFFFF`,
        theme_color: `#ff5555`,
        display: `minimal-ui`,
        icon: `data/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
