/* eslint-disable @typescript-eslint/camelcase */

const hiddenPages = [];

const members = {
  sophie: 'Sophie Au',
  jean: 'Jean Bauer',
  ellie: 'Elloise Przybylo',
  jackie: 'Jackie Robinson',
  kamala: 'Kamalashree Nagaraj',
  andrei: 'Andrei Cartan',
  nimish: 'Nimish Singh',
};

const renderCard = ({ title, author }) =>
  `<head><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" /></head><body style="margin:0"><div style="background-image: url(../../data/img/bg_pattern.webp);width:1080px;height:510px;padding:60px;display: flex;flex-direction: row;justify-content: space-between;"><div style="display: flex;flex-direction: column;justify-content: space-between;margin-right: 60px; align-content: center;"><img src="../../data/img/logo.png" style="width:300px;"/><img src="../../data/img/profiles/${author}_wide.jpg" style="width:180px;height:180px;border-radius: 150px;object-fit: cover;align-self: flex-end;margin-right: 28px;"/></div><div style="display: flex;flex-direction: column;justify-content: space-between;margin-right: 64px; align-content: center;"><p style="font-family:'Source Sans Pro';font-size: 64px;font-weight: 700;margin: 30px 0 0;">${title}</p><p style="font-family:'Source Sans Pro';font-weight: 300;font-size: 40px;font-style: italic;margin-bottom: 64px;">By ${members[author]}</p></div></div></body>`;

exports.members = members;

exports.siteMetadata = {
  title: `Spicy Sea Shells`,
  description: `The Home of the Spicy Sea Shells, a tech collective from all over the world.`,
  author: `Spicy Sea Shells`,
  siteUrl: `https://spicyseashells.com`,
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
      serialize: ({ query: { site, allMdx } }) =>
        allMdx.edges.map(edge => {
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
        allMdx(
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

exports.filesystemContentOptions = {
  name: `blog-posts`,
  path: `${__dirname}/../data/content/posts/`,
};

exports.filesystemImageOptions = { name: `images`, path: `${__dirname}/../data/img` };

exports.mdxOptions = {
  extensions: [`.mdx`, `.md`],
  gatsbyRemarkPlugins: [
    `gatsby-remark-prismjs`,
    {
      resolve: 'gatsby-remark-images',
      options: { maxWidth: 970, quality: 90, withWebp: true },
    },
  ],
};

exports.socialImageOptions = { design: renderCard };
