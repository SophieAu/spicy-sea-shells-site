export const authorIds = [
  "kamala",
  "sophie",
  "jean",
  "jackie",
  "nimish",
  "andrei",
  "ellie",
] as const;

export type Author = (typeof authorIds)[number];

export type SocialMediaPlatform =
  | "twitter"
  | "linkedin"
  | "medium"
  | "facebook"
  | "instagram"
  | "github"
  | "dribbble"
  | "website";

export type UserInfo = {
  id: Author;
  baseInfo: BaseInfo;
  socialMedia: Partial<Record<SocialMediaPlatform, string>>;
};

type BaseInfo = {
  name: string;
  city: string;
  bio: string;
  bioShort: string;
};
