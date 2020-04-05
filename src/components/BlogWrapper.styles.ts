import { css } from 'linaria';

import { color, screenSize } from '../_variables.styles';

export const body = css`
  background: ${color.white};

  flex: 1;
  width: calc(100vw - 2 * var(--padding));
  max-width: calc(var(--content-width) - 2 * var(--padding));
  padding: var(--padding);

  @media all ${screenSize.M_MIN} {
    --padding: 4rem;
  }

  @media all ${screenSize.S_MAX} {
    --padding: 1rem;
  }
`;

export const root = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
