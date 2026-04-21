import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { blog } from '../strings';

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
      link: `/article/${post.data.slug}`,
    })),
  });
}
