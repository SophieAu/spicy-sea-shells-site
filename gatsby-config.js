/* eslint-disable @typescript-eslint/camelcase */

const gatsbyPluginFeedOptions = {
  query: `
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
  }
`,
  feeds: [
    {
      serialize: ({ query: { site, allMarkdownRemark } }) =>
        allMarkdownRemark.edges.map(edge => {
          const { frontmatter, html } = edge.node;

          return Object.assign({}, frontmatter, {
            date: frontmatter.date,
            author: frontmatter.author,
            excerpt: frontmatter.excerpt,
            url: site.siteMetadata.siteUrl + '/blog/' + frontmatter.slug,
            guid: site.siteMetadata.siteUrl + '/blog/' + frontmatter.slug,
            custom_elements: [{ 'content:encoded': html }],
          });
        }),
      query: `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              html
              frontmatter {
                author
                title
                date
                slug
                formattedDate: date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `,
      output: '/rss.xml',
      title: "The Spicy Sea Shells' RSS Feed",
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Spicy Sea Shells`,
    description: `The Home of the Spicy Sea Shells, a tech collective from all over the world.`,
    author: `Spicy Sea Shells`,
    siteUrl: `https://spicyseashells.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: gatsbyPluginFeedOptions,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeStyleHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline' blob:",
          'frame-src': 'https://app.commentbox.io',
        },
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
