/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require('puppeteer');
const { POSTS_QUERY, buildBlogPosts, createSocialCardImage } = require('./meta/node');

let browser = null;

exports.onPreInit = async () => {
  browser = await puppeteer.launch({ headless: true });
};

exports.onPostBuild = async () => {
  await browser.close();
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(POSTS_QUERY);

  console.log('\nCreating Blog Posts...');
  buildBlogPosts(result.data.allMarkdownRemark.edges, actions.createPage);

  console.log();
};

exports.onCreateNode = async ({ node, actions, createNodeId, store }) => {
  if (node.internal.type !== 'MarkdownRemark') return;

  try {
    await createSocialCardImage(node, browser, store, { ...actions, createNodeId });
  } catch (e) {
    console.warn(e);
  }
};
