import type { CollectionEntry } from "astro:content";
import profiles from "./profiles";
import type { Author, SocialMediaPlatform, UserInfo } from "./types";
import MarkdownIt from "markdown-it";

export const getTwitterHandle = (author: Author) =>
  profiles.find((user) => user.id === author)?.socialMedia.twitter;

export const getName = (author: Author) =>
  profiles.find((user) => user.id === author)!.baseInfo.name;

type SocialMediaTuple = [SocialMediaPlatform, string];
export const getSortedSocialMedia = (socialMedia: UserInfo["socialMedia"]) => {
  const entries = Object.entries(socialMedia) as SocialMediaTuple[];

  const entriesWithTwitterUrl = entries.map((sm) =>
    (sm[0] === "twitter") ? ["twitter", `https://twitter.com/${sm[1]}`] : sm
  ) as SocialMediaTuple[];

  return entriesWithTwitterUrl.sort(([a], [b]) => a.localeCompare(b));
};

export const getExcerpt = (post: CollectionEntry<"posts">, limit?: number) => {
  if (!post.body) return "";

  const excerpt = new MarkdownIt()
    .render(post.body)
    .split("\n")
    .slice(0, 6)
    .map((str: string) => str.replace(/<\/?[^>]+(>|$)/g, "").split("\n"))
    .flat()
    .join(" ");

  return excerpt.slice(0, limit);
};

export const sortPosts = (posts: CollectionEntry<"posts">[]) =>
  posts.toSorted((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
