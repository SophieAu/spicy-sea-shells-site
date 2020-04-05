import { css } from 'linaria';

import bgPatternPng from '../../data/img/bg_pattern.png';
import bgPatternWebP from '../../data/img/bg_pattern.webp';

export const root = css`
  background: repeat url(${bgPatternPng});
  min-height: 100vh;

  .webp & {
    background: repeat url(${bgPatternWebP});
  }
`;
