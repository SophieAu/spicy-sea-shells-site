/* eslint-disable @typescript-eslint/no-var-requires */

const { createHash } = require('crypto');
const { writeFile } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const writeFileAsync = promisify(writeFile);
const { members } = require('./config');

const renderCard = (title, author) =>
  `<head><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" /></head><body style="margin:0"><div style="background-image: url(../../data/img/bg_pattern.webp);width:1080px;height:510px;padding:60px;display: flex;flex-direction: row;justify-content: space-between;"><div style="display: flex;flex-direction: column;justify-content: space-between;margin-right: 60px; align-content: center;"><img src="../../data/img/logo.png" style="width:300px;"/><img src="../../data/img/profiles/${author}_wide.jpg" style="width:180px;height:180px;border-radius: 150px;object-fit: cover;align-self: flex-end;margin-right: 28px;"/></div><div style="display: flex;flex-direction: column;justify-content: space-between;margin-right: 64px; align-content: center;"><p style="font-family:'Source Sans Pro';font-size: 64px;font-weight: 700;margin: 30px 0 0;">${title}</p><p style="font-family:'Source Sans Pro';font-weight: 300;font-size: 40px;font-style: italic;margin-bottom: 64px;">By ${members[author]}</p></div></div></body>`;

async function writeCachedFile(CACHE_DIR, key, contents, extension) {
  const hash = createHash('md5')
    .update(key)
    .digest('hex');

  const absolutePath = resolve(CACHE_DIR, `${hash}.${extension}`);
  await writeFileAsync(absolutePath, contents);
  return absolutePath;
}

/*
 * Takes a post (probably a Gatsby node of some kind), generates some HTML,
 * saves a screenshot, then returns the path to the saved image.
 */
exports.postToImage = async (CACHE_DIR, browser, post) => {
  const { title, author } = post.frontmatter;
  const html = renderCard(title, author);

  const imageFileExtension = 'png';

  const filePath = await writeCachedFile(CACHE_DIR, title, html, 'html');
  const page = await browser.newPage();

  await page.goto(`file://${filePath}`);
  await page.evaluateHandle('document.fonts.ready');
  await page.setViewport({ width: 1200, height: 630 });
  const file = await page.screenshot({ type: imageFileExtension });

  return writeCachedFile(CACHE_DIR, title, file, imageFileExtension);
};
