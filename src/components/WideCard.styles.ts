import { css } from 'linaria';

export const info = css`
  height: 100%;
`;

export const name = css`
  margin: 0.5rem -1rem 0 0;
  font: $semi-bold 1.5rem $font-family;
`;

export const city = css`
  color: $non-highlight-text;
  font: $regular 1rem $font-family;
`;

export const bio = css`
  font: $regular 1rem/1.25rem $font-family;

  &.-long {
    margin: 1rem 0 0;
  }

  &.-short {
    display: none;
  }
`;
