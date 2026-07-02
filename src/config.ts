export const paths = {
  home: `/`,
  blog: `/blog`,
  about: `/about`,
  articleBase: `/article`,
};

export const articlePath = (slug: string) => `${paths.articleBase}/${slug}`;

export const BASE_URL = "https://spicyseashells.com";
