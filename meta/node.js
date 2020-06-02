/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);

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
