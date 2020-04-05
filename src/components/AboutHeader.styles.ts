import { css } from 'linaria';

import { color, font, screenSize } from '../_variables.styles';

export const root = css`
  background-color: ${color.primary};
  display: grid;
  grid-auto-columns: repeat(2, auto);
  grid-gap: 0.5rem 1rem;
  justify-content: center;
  padding: var(--outside-padding);

  @media all ${screenSize.L_MIN} {
    --header-font-size: 3.5rem;
    --info-font-size: 1.75rem;
    --outside-padding: 2rem;
  }

  @media all ${screenSize.M_MAX} {
    --header-font-size: 2.25rem;
    --info-font-size: 1.5rem;
    --outside-padding: 1rem;
  }
`;

export const intro = css`
  grid-row: 2/3;

  @media all ${screenSize.M_MIN} {
    grid-area: 1 / 2;

    &-short {
      display: none;
    }
  }

  @media all ${screenSize.S_MAX} {
    grid-area: 1 / 3;

    &-extended {
      display: none;
    }
  }
`;

export const blog = css`
  grid-row: 3/4;

  @media all ${screenSize.M_MIN} {
    grid-column: 1 / 2;
  }

  @media all ${screenSize.S_MAX} {
    grid-column: 1 / 3;
  }
`;

export const logo = css`
  height: var(--logo-height);
  width: var(--logo-height);
  grid-column: 2/3;

  @media all ${screenSize.L_MIN} {
    --logo-height: 12rem;
    grid-row: 1 / 4;
  }

  @media all ${screenSize.M} {
    --logo-height: 9rem;
    grid-row: 1 / 4;
  }

  @media all ${screenSize.S_MAX} {
    --logo-height: 3.5rem;
    grid-row: 1 / 2;
  }
`;

export const title = css`
  padding-left: 0.5rem;
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;

  color: ${color.white};
  font: ${font.aboutHeaderTitle};
  text-transform: uppercase;
`;

export const text = css`
  color: ${color.white};
  padding-left: 0.5rem;
  font: ${font.aboutHeaderBody};
`;
