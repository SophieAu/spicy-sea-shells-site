import { css } from 'linaria';

import { color, font, SIDEBAR_WIDTH } from '../_variables.styles';

export const root = css`
  flex: 0 0 ${SIDEBAR_WIDTH};
  background: ${color.primary};
  color: ${color.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: fixed;
  width: ${SIDEBAR_WIDTH};

  > header {
    margin: 2rem;
  }
`;

export const logo = css`
  padding: 1rem;
  width: 16rem;
`;

export const text = css`
  font: ${font.sidebarBody};

  p:first-child {
    margin: 2rem 0;
  }
`;

export const footer = css`
  padding-bottom: 0.75rem;
  width: 100%;
`;
