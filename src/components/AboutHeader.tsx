import './AboutHeader.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import strings from '../../data/strings';
import { BlogCallToAction, Intro, Title } from './headerFragments';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...aboutHeaderLogo
    }
  }
`;

const AboutHeader: React.FC<{ id?: string }> = ({ id }) => (
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

export default AboutHeader;
