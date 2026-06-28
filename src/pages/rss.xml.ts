import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { blog } from '../strings';
import { getExcerpt } from '../utils';
import { BASE_URL } from '../config';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: blog.pageTitle,
    description: blog.pageDescription,
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: getExcerpt(post),
      link: `${BASE_URL}/article/${post.data.slug}`,
    })),
  });
}
