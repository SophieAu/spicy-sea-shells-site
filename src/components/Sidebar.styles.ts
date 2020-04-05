import { css } from 'linaria';

import { color } from '../_variables.styles';

const sidebarWidth = `22rem`;

export const root = css`
  flex: 0 0 ${sidebarWidth};
  background: ${color.primary};
  color: ${color.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: fixed;
  width: ${sidebarWidth};

  > header {
    margin: 2rem;
  }
`;

export const logo = css`
  padding: 1rem;
  width: 16rem;
`;

export const text = css`
  font-size: 1.875rem;

  p:first-child {
    margin: 2rem 0;
  }
`;

export const footer = css`
  padding-bottom: 0.75rem;
  width: 100%;
`;
