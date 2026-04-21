import profiles from './profiles';
import type { Author, SocialMediaPlatform, UserInfo } from './types';

export const getTwitterUrl = (author: Author) =>
  profiles.find(user => user.id === author)?.socialMedia.twitter;

export const getName = (author: Author) =>
  profiles.find(user => user.id === author)!.baseInfo.name;

type SocialMediaTuple = [SocialMediaPlatform, string]
export const getSortedSocialMedia = (socialMedia: UserInfo["socialMedia"]) =>
  (Object.entries(socialMedia) as SocialMediaTuple[]).sort(([a]: SocialMediaTuple, [b]: SocialMediaTuple) => a.localeCompare(b));
//TODO: FIX THE !. IT SHOULDN'T BE THERE!!!!!

/* THESE ARE NWE AND VERY LIKELY COMPLETE TRASH */

export const renderInlineMarkdown = (text: string): string =>
  text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

export const getExcerpt = (body: string, length = 280): string =>
  body.length > length ? body.slice(0, length) + '...' : body;
