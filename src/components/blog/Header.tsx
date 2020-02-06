import './Header.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths } from '../../../data/config';
import strings from '../../../data/strings';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 96, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Header = () => (
  <header className="header">
    <a className="header-logo" href={paths.blog} aria-label={strings.Blog.homeLinkAlt}>
      <Img
        className="sidebar-logo"
        fluid={useStaticQuery(query).file.childImageSharp.fluid}
        alt={strings.Header.logoAlt}
      />
    </a>
    <nav className="header-nav">
      <a href={paths.about}>{strings.Blog.aboutLink}</a>
    </nav>
  </header>
);

export default Header;
