import { css } from 'linaria';

import { font } from '../_variables.styles';

export const root = css`
  display: grid;
  place-items: center;
  text-align: center;
  width: 100vw;
`;

export const container = css`
  padding-bottom: calc(100vh / 3);

  h1 {
    font: ${font.heroTitle};
    padding-bottom: 3rem;
  }

  p {
    font: ${font.heroText};
  }
`;
