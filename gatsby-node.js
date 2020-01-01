/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const QUERY = `{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, actions }) =>
  new Promise((resolve, _) => {
    graphql(QUERY).then(result => {
      console.log(JSON.stringify(result, null, 4));

      const nodes = result.data.allMarkdownRemark.edges;
      nodes.forEach(({ node }) => {
        actions.createPage({
          path: 'article/' + node.frontmatter.slug,
          component: path.resolve(`./src/templates/post.tsx`),
          context: { slug: node.frontmatter.slug },
        });
      });

      resolve();
    });
  });

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== `MarkdownRemark`) return;

  actions.createNodeField({
    name: `slug`,
    node,
    value: createFilePath({ node, getNode }),
  });
};
