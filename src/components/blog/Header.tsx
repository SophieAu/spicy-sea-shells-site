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
        fixed(height: 96, width: 96, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(query);

  return (
    <header className="header">
      <a className="header-logo" href={paths.blog} aria-label={strings.Blog.homeLinkAlt}>
        <Img
          className="sidebar-logo"
          fixed={data.file.childImageSharp.fixed}
          alt={strings.Header.logoAlt}
        />
      </a>
      <nav className="header-nav">
        <a href={paths.about}>{strings.Blog.aboutLink}</a>
      </nav>
    </header>
  );
};

export default Header;
