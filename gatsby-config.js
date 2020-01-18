/* eslint-disable @typescript-eslint/camelcase */

const members = {
  sophie: 'Sophie Au',
  jean: 'Jean Bauer',
  ellie: 'Elloise Przybylo',
  jackie: 'Jackie Robinson',
  kamala: 'Kamalashree Nagaraj',
  andrei: 'Andrei Cartan',
  nimish: 'Nimish Singh',
};

const transformerRemarkOptions = {
  plugins: [
    `gatsby-remark-prismjs`,
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 970,
      },
    },
  ],
};

const cspOptions = {
  disableOnDev: true,
  mergeStyleHashes: false,
  directives: {
    'style-src': "'self' 'unsafe-inline' blob:",
    'frame-src': 'https://app.commentbox.io',
  },
};

const feedOptions = {
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
            author: members[frontmatter.author],
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

const manifestOptions = {
  name: `spicy-sea-shells`,
  short_name: `s^3`,
  start_url: `/blog`,
  background_color: `#FFFFFF`,
  theme_color: `#ff5555`,
  display: `minimal-ui`,
  icon: `data/img/logo.png`, // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-csp`,
      options: cspOptions,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: feedOptions,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: transformerRemarkOptions,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/data/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/img`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: manifestOptions,
    },
  ],
};
