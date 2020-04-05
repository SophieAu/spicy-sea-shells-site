import { css } from 'linaria';

import { font } from '../_variables.styles';

export const title = css`
  font-size: 3rem;
  margin: 0;
  text-transform: none;
`;

export const crosspost = css`
  font: ${font.crosspost};
  padding-bottom: 2rem;
`;

export const body = css`
  font-size: 1.25rem;

  p {
    margin: 1rem 0;
  }

  code {
    font-size: 1rem;
  }
  pre {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3), 0 16px 20px 0 rgba(0, 0, 0, 0.14);
  }

  pre.line-numbers {
    font-size: 1rem;
    padding-top: 1rem;

    .line-numbers-rows {
      border-right: none;
      padding: 1rem;
    }
  }
`;
