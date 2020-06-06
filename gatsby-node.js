/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require('puppeteer');
const { POSTS_QUERY, buildBlogPosts } = require('./meta/node');

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
  buildBlogPosts(result.data.allMdx.edges, actions.createPage);

  console.log();
};
