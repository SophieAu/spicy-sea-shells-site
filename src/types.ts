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

export type Crosspost = {
  hasPrefix: boolean;
  site: string;
  url: string;
};

// ---
// Image Types

export type FixedImage = {
  childImageSharp: {
    fixed: FixedObject;
  };
};

// ---
// Post GraphQL Response

type SocialImage = {
  socialImage: {
    childImageSharp: {
      original: {
        src: string;
      };
    };
  };
};

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
      fields: SocialImage;
    };
  };
};

type PostFrontmatter = {
  slug: string;
  title: string;
  author: Author;
  date: string;
  crosspost?: Crosspost;
};
