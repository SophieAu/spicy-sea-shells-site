import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { blog } from "../strings";
import { getExcerpt, sortPosts } from "../utils";
import { articlePath, BASE_URL } from "../config";

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = sortPosts(posts);

  return rss({
    title: blog.pageTitle,
    description: blog.pageDescription,
    site: BASE_URL,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: getExcerpt(post),
      link: articlePath(post.data.slug),
    })),
  });
}
