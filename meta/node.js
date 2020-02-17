/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);
const fs = require(`fs-extra`);
const { createFileNode } = require(`gatsby-source-filesystem/create-file-node`);
const { postToImage } = require('./social-image');

exports.POSTS_QUERY = `{
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

exports.buildBlogPosts = (nodes, createPage) => {
  const post = resolve(`./src/templates/post.tsx`);

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

exports.createSocialCardImage = async (parentNode, browser, store, actions) => {
  const { createNode, createNodeField, createNodeId } = actions;

  const CACHE_DIR = resolve(`${store.getState().program.directory}/.cache/social/`);
  await fs.ensureDir(CACHE_DIR);

  const ogImagePath = await postToImage(CACHE_DIR, browser, parentNode);
  const imageFileNode = await createFileNode(ogImagePath, createNodeId);
  imageFileNode.parent = parentNode.id;
  createNode(imageFileNode, { name: `gatsby-source-filesystem` });

  createNodeField({
    node: parentNode,
    name: 'socialImage___NODE',
    value: imageFileNode.id,
  });
};
