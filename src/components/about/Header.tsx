import './Header.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { BlogCallToAction, Intro, Title } from '../_shared/headerFragments';
import strings from '../../../data/strings';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...aboutHeaderLogo
    }
  }
`;

const Header: React.FC<{ id?: string }> = ({ id }) => (
  <header id={id} className="header">
    <Title className="title" />
    <Intro className="text intro" />
    <BlogCallToAction className="text blog" />
    <Img
      fluid={useStaticQuery(query).file.childImageSharp.fluid}
      className="logo"
      alt={strings.Header.logoAlt}
      imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
    />
  </header>
);

export default Header;
