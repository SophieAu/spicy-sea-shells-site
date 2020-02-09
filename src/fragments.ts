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

export const aboutHeaderLogo = graphql`
  fragment aboutHeaderLogo on File {
    childImageSharp {
      fluid(maxHeight: 384, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

export const sidebarLogo = graphql`
  fragment sidebarLogo on File {
    childImageSharp {
      fixed(height: 256, width: 256, quality: 90) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`;

export const blogHeaderLogo = graphql`
  fragment blogHeaderLogo on File {
    childImageSharp {
      fluid(maxHeight: 96, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

export const singlePost = graphql`
  fragment singlePost on MarkdownRemark {
    frontmatter {
      title
      author
      date(formatString: "DD MMMM YYYY")
      slug
      crosspost {
        url
        site
        hasPrefix
      }
    }
    excerpt
    html
  }
`;

export const postList = graphql`
  fragment postList on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          author
          date(formatString: "DD MMMM YYYY")
          slug
        }
        excerpt(pruneLength: 280)
      }
    }
  }
`;
