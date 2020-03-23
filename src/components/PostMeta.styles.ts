import { css } from 'linaria';

import { font, screenSize } from '../_variables.styles';

export const meta = css`
  display: flex;
  font: ${font.postMeta};
  justify-content: space-between;
  margin: 1rem 0;

  @media all ${screenSize.XS} {
    flex-direction: column-reverse;
    margin: 1.25rem 0;
  }
`;

export const date = css`
  @media all ${screenSize.XS} {
    margin-bottom: 0.5rem;
    text-align: right;
  }
`;
