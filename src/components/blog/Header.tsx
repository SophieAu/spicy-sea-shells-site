import './Header.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths } from '../../../data/config';
import strings from '../../../data/strings';
import Link from '../Link';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...blogHeaderLogo
    }
  }
`;

const Header = () => (
  <header className="header">
    <Link className="header-logo" to={paths.blog} ariaLabel={strings.Blog.homeLinkAlt}>
      <Img
        className="sidebar-logo"
        fluid={useStaticQuery(query).file.childImageSharp.fluid}
        alt={strings.Header.logoAlt}
      />
    </Link>
    <nav className="header-nav">
      <Link to={paths.about}>{strings.Blog.aboutLink}</Link>
    </nav>
  </header>
);

export default Header;
