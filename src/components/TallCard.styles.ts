import { css } from 'linaria';

export const image = css`
  line-height: 0;

  &.-top {
    height: 11.25rem;
    width: $tall-card-width;
  }

  &.-side {
    display: none;
  }
`;

export const profile = css`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;
  padding: 0.75rem 1rem 1rem;
  width: $tall-card-width - 2rem;
`;

export const bio = css`
  font: $regular 1rem/1.25rem $font-family;

  &.-short {
    margin: 1rem 0.5rem 0;
  }

  &.-long {
    display: none;
  }
`;

export const info = css`
  height: 100%;
  text-align: center;
`;

export const city = css`
  color: $non-highlight-text;
  font: $regular 1rem $font-family;
`;

export const name = css`
  font: $semi-bold 1.5rem $font-family;
  margin-top: 0.25rem;
`;
