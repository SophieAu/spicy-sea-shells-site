import profiles from './profiles';
import type { Author, SocialMediaPlatform } from './types';

export const getSocialMediaHandle = (author: Author, platform: SocialMediaPlatform) => {
  if (platform !== 'twitter') return undefined;
  return profiles
    .find(user => user.id === author)
    ?.socialMedia.find(media => media.platform === platform)?.url;
};

export const sortPlatforms = (a: { platform: string }, b: { platform: string }) =>
  a.platform > b.platform ? 1 : b.platform > a.platform ? -1 : 0;

export const getName = (author: Author) =>
  profiles.find(user => user.id === author)?.baseInfo.name;

/* THESE ARE NWE AND VERY LIKELY COMPLETE TRASH */

export const renderInlineMarkdown = (text: string): string =>
  text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

export const getExcerpt = (body: string, length = 280): string =>
  body.length > length ? body.slice(0, length) + '...' : body;
