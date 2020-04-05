import { css } from 'linaria';

import { color } from '../_variables.styles';
import bgPatternPng from '../../data/img/bg_pattern.png';
import bgPatternWebP from '../../data/img/bg_pattern.webp';

export const root = css`
  min-height: 100vh;

  background: repeat url(${bgPatternPng});

  .webp & {
    background: repeat url(${bgPatternWebP});
  }
`;

export const globals = css`
  :global() {
    :root {
      --content-width: 66rem;

      font-size: 16px;
    }

    h1,
    h2,
    h4,
    p,
    ul {
      margin: 0;
      padding: 0;
    }

    body {
      background: ${color.primary};
      color: ${color.black};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
    }

    a {
      color: ${color.black};
    }
  }
`;
