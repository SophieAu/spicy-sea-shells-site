/* eslint-disable @typescript-eslint/camelcase */

const hiddenPages = [];

exports.members = {
  sophie: 'Sophie Au',
  jean: 'Jean Bauer',
  ellie: 'Elloise Przybylo',
  jackie: 'Jackie Robinson',
  kamala: 'Kamalashree Nagaraj',
  andrei: 'Andrei Cartan',
  nimish: 'Nimish Singh',
};

exports.siteMetadata = {
  title: `Spicy Sea Shells`,
  description: `The Home of the Spicy Sea Shells, a tech collective from all over the world.`,
  author: `Spicy Sea Shells`,
  siteUrl: `https://spicyseashells.com`,
};

exports.cspOptions = {
  disableOnDev: true,
  mergeStyleHashes: false,
  directives: {
    'style-src': "'self' 'unsafe-inline' blob:",
    'frame-src': 'https://app.commentbox.io',
  },
};

exports.feedOptions = {
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

exports.manifestOptions = {
  name: `spicy-sea-shells`,
  short_name: `s^3`,
  start_url: `/blog`,
  background_color: `#FFFFFF`,
  theme_color: `#ff5555`,
  display: `minimal-ui`,
  icon: `data/img/logo.png`, // This path is relative to the root of the site.
};

exports.robotsTxtOptions = {
  policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }],
};

exports.sitemapOptions = { exclude: hiddenPages };

exports.fileSystemContentOptions = { name: `blog-posts`, path: `${__dirname}/data/content/posts/` };

exports.fileSystemImageOptions = { name: `images`, path: `${__dirname}/data/img` };

exports.transformerRemarkOptions = {
  plugins: [
    `gatsby-remark-prismjs`,
    {
      resolve: 'gatsby-remark-images',
      options: { maxWidth: 970, quality: 90, withWebp: true },
    },
  ],
};
