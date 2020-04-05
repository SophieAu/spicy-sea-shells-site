import { css } from 'linaria';

import { color, fontWeight } from '../_variables.styles';

export const root = css`
  a {
    color: ${color.white};
    font-weight: ${fontWeight.bold};
    text-transform: uppercase;
  }
`;
