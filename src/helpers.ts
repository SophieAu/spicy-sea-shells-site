import profiles from '../data/profiles';
import { Author, SocialMediaPlatform } from './types';

export const getSocialMediaHandle = (author: Author, platform: SocialMediaPlatform) => {
  if (platform !== 'twitter') return;

  return profiles
    .find(user => user.id === author)
    ?.socialMedia.find(media => media.platform === platform)?.url;
};

export const getName = (author: Author) => profiles.find(user => user.id === author)?.baseInfo.name;
