import { css } from 'linaria';

import { color, font, FOOTER_HEIGHT } from '../_variables.styles';

export const root = css`
  height: ${FOOTER_HEIGHT};
  text-align: center;

  color: ${color.white};
  font: ${font.footer};

  img {
    display: inline-block;
    height: 2.5rem;
    margin: 0 0 0.5rem -0.5rem;
    vertical-align: middle;
  }
`;

export const defaultFooter = css`
  align-self: flex-start;
  background-color: ${color.footer};
  width: 100vw;
`;
