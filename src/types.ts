// ---
// User Info

export type UserInfo = {
  image: string;
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
  platform: string;
  url: string;
};

// ---
// Post GraphQL Response

export type Post = {
  node: {
    id: number;
    frontmatter: {
      slug: string;
      title: string;
      author: string;
      date: string;
    };
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

export type SingleGraphQLResponse = {
  data: {
    markdownRemark: {
      frontmatter: {
        slug: string;
        title: string;
        author: string;
        date: string;
      };
      html: string;
    };
  };
};

export type PostFrontmatter = {
  slug: string;
  title: string;
  author: string;
  date: string;
  crosspost?: Crosspost;
};

type Crosspost = {
  url: string;
  site: string;
  hasPrefix: boolean;
};
