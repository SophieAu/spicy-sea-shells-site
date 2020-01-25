import { graphql } from 'gatsby';

export const profileTall = graphql`
  fragment profileTall on File {
    childImageSharp {
      fixed(width: 160, height: 320, quality: 90) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const profileWide = graphql`
  fragment profileWide on File {
    childImageSharp {
      fixed(width: 288, height: 180, quality: 90) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;
