import { css } from 'linaria';

import { color, font } from '../_variables.styles';

export const root = css`
  background: ${color.primary};
  color: ${color.white};

  height: 100vh;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
