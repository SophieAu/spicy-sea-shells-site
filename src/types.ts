export type Author = 'kamala' | 'sophie' | 'jean' | 'jackie' | 'nimish' | 'andrei' | 'ellie';

export type SocialMediaPlatform =
  | 'twitter'
  | 'linkedin'
  | 'medium'
  | 'facebook'
  | 'instagram'
  | 'github'
  | 'dribbble'
  | 'website';

export type UserInfo = {
  id: Author;
  baseInfo: BaseInfo;
  socialMedia: SocialMedia[];
};

type BaseInfo = {
  name: string;
  city: string;
  bio: string;
  bioShort: string;
};

export type SocialMedia = {
  platform: SocialMediaPlatform;
  url: string;
};
