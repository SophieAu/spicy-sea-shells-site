import { css } from 'linaria';

import { font, fontWeight } from '../_variables.styles';

export const heroTitle = css`
  margin: 0.75rem 0;
  font: ${font.heroTitle};
  text-transform: uppercase;
`;

export const heroText = css`
  font: ${font.heroText};
  margin: 1.5rem 0;

  a {
    font-weight: ${fontWeight.bold};
    text-transform: uppercase;
  }
`;

export const postsTitle = css`
  margin: 3rem 0 1rem;
  font: ${font.postSectionTitle};
  text-transform: uppercase;
`;

export const postList = css`
  li {
    list-style: none;
    padding-bottom: 4rem;
  }
`;

export const postTitle = css`
  a {
    font: ${font.postTitle};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const postExcerpt = css`
  font: ${font.postBody};
`;
