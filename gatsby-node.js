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

const buildBlogPosts = (nodes, createPage) => {
  const post = path.resolve(`./src/templates/post.tsx`);

  nodes.forEach(({ node }) => {
    const slug = node.frontmatter.slug;
    createPage({
      path: `article/${slug}`,
      component: post,
      context: { slug },
    });
    console.log(slug);
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(QUERY);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  console.log('\nCreating Blog Posts...');
  buildBlogPosts(result.data.allMarkdownRemark.edges, actions.createPage);

  console.log();
};

// For the RSS feed
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== `MarkdownRemark`) return;
  actions.createNodeField({
    name: `slug`,
    node,
    value: createFilePath({ node, getNode }),
  });
};
