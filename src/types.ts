import { FixedObject } from 'gatsby-image';

// ---
// User Info

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

export type BaseInfo = {
  name: string;
  city: string;
  bio: string;
  bioShort: string;
};

export type SocialMedia = {
  platform: SocialMediaPlatform;
  url: string;
};

export type Crosspost = {
  hasPrefix: boolean;
  site: string;
  url: string;
};

// ---
// Image Types

type FixedImage = {
  childImageSharp: {
    fixed: FixedObject;
  };
};

export type ProfilePics = {
  sophie_tall: FixedImage;
  sophie_wide: FixedImage;
  jean_tall: FixedImage;
  jean_wide: FixedImage;
  ellie_tall: FixedImage;
  ellie_wide: FixedImage;
  jackie_tall: FixedImage;
  jackie_wide: FixedImage;
  kamala_tall: FixedImage;
  kamala_wide: FixedImage;
  andrei_tall: FixedImage;
  andrei_wide: FixedImage;
  nimish_tall: FixedImage;
  nimish_wide: FixedImage;
};

// ---
// Post GraphQL Response

export type Post = {
  node: {
    id: number;
    frontmatter: PostFrontmatter;
    excerpt: string;
  };
};

export type GraphQLResponse = {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    };
  };
};

export type PostResponse = {
  data: {
    markdownRemark: {
      frontmatter: PostFrontmatter;
      excerpt: string;
      html: string;
    };
  };
};

export type PostFrontmatter = {
  slug: string;
  title: string;
  author: Author;
  date: string;
  crosspost?: Crosspost;
};

type Crosspost = {
  url: string;
  site: string;
  hasPrefix: boolean;
};
