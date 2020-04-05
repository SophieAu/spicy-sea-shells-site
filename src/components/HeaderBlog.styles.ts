import { css } from 'linaria';

import { BLOG_HEADER_HEIGHT, color, font } from '../_variables.styles';

export const root = css`
  --blog-header-height: ${BLOG_HEADER_HEIGHT};
  --padding: max(1rem, calc((100vw - var(--content-width)) / 2));

  background-color: ${color.primary};

  height: var(--blog-header-height);
  width: calc(100vw - var(--padding) * 2);
  padding: 1rem var(--padding);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logo = css`
  height: var(--blog-header-height);
  width: var(--blog-header-height);
`;

export const nav = css`
  margin: 0 4rem 0 1rem;

  a {
    color: ${color.white};
    font: ${font.blogHeaderNav};
    text-decoration: none;
  }
`;
