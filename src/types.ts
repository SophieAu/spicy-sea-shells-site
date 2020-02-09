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
