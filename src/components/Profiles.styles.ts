import { css } from 'linaria';

import { color, font, screenSize } from '../_variables.styles';

const TALL_CARD_WIDTH = '18rem';
const CARD_BORDER_RADIUS = ' 0.75rem';

export const root = css`
  column-gap: 1rem;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding-top: 2rem;
  width: 100%;
`;

export const card = css`
  background: ${color.white};
  border-radius: ${CARD_BORDER_RADIUS};
  box-shadow: 0 1px 0.25rem 0 rgba(0, 0, 0, 0.3), 0 1rem 1.25rem 0 rgba(0, 0, 0, 0.14);

  display: flex;
  overflow: hidden;
  margin: 2rem 0.5rem;

  @media all ${screenSize.XL} {
    flex-direction: row;
    height: 20rem;
    width: 32.5rem;
  }

  @media all ${screenSize.L} {
    flex-direction: row;
    height: 20rem;
    width: 29rem;
  }

  @media all ${screenSize.M_MAX} {
    flex-direction: column;

    height: 28rem;
    width: ${TALL_CARD_WIDTH};
  }
`;

export const image = css`
  line-height: 0;

  &.-side {
    height: 20rem;
    width: 10rem;
  }

  &.-top {
    height: 11.25rem;
    width: $tall-card-width;
  }

  @media all ${screenSize.L_MIN} {
    &.-top {
      display: none;
    }
  }

  @media all ${screenSize.M_MAX} {
    &.-side {
      display: none;
    }
  }
`;

export const profile = css`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;

  @media all ${screenSize.L_MIN} {
    padding: 2rem 2rem 1.5rem;
  }

  @media all ${screenSize.M_MAX} {
    padding: 1rem;
  }
`;

export const info = css`
  flex: 1;

  @media all ${screenSize.M_MAX} {
    text-align: center;
  }
`;

export const name = css`
  font: ${font.profileName};

  @media all ${screenSize.L_MIN} {
    margin: 0.5rem -1rem 0 0;
  }

  @media all ${screenSize.M_MAX} {
    margin: 0.25rem 0 0;
  }
`;

export const city = css`
  color: ${color.nonHighlightText};
  font: ${font.profileCity};
`;

export const bio = css`
  font: ${font.profileBio};
  margin: 1rem 0 0;

  @media all ${screenSize.L_MIN} {
    &.-short {
      display: none;
    }
  }

  @media all ${screenSize.M_MAX} {
    &.-long {
      display: none;
    }
  }
`;

export const socialMedia = css`
  display: flex;
  list-style-type: none;
  padding-top: 1rem;
  border-top: 1px solid ${color.primaryDim};

  img {
    color: ${color.black};
    height: 1.5rem;
    vertical-align: text-bottom;
  }

  @media all ${screenSize.L_MIN} {
    li:not(:last-child) {
      padding-right: 1.5rem;
    }
  }

  @media all ${screenSize.M_MAX} {
    justify-content: space-evenly;
  }
`;
