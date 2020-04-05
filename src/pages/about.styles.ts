import { css } from 'linaria';

import { color, screenSize, SIDEBAR_WIDTH } from '../_variables.styles';

export const profiles = css`
  overflow: scroll;
`;

export const sidebar = css``;
export const header = css``;
export const footer = css`
  @media all ${screenSize.L_MAX} {
    background-color: ${color.footer};
  }
`;

export const root = css`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} calc(100vw - ${SIDEBAR_WIDTH});
  grid-template-rows: repeat(3, auto);

  @media all ${screenSize.XL} {
    height: 100vh;

    .${sidebar}, .${profiles} {
      grid-row: span 3;
    }
    .${header}, .${footer} {
      display: none !important;
    }
  }

  @media all ${screenSize.L_MAX} {
    .${header}, .${footer}, .${profiles} {
      grid-column: span 2;
    }
    .${sidebar} {
      display: none !important;
    }
  }
`;
