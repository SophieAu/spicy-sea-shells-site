import './AboutHeader.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import strings from '../../data/strings';
import BlogCTA from './BlogCTA';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...aboutHeaderLogo
    }
  }
`;

const AboutHeader: React.FC<{ className?: string }> = ({ className }) => (
  <header className={cx('header', className)}>
    <h1 className="title">{strings.Header.title}</h1>
    <p className={'text intro-extended'}>{strings.Header.introExtended}</p>
    <p className={'text intro-short'}>{strings.Header.introShort}</p>
    <BlogCTA className="text blog" />
    <Img
      fluid={useStaticQuery(query).file.childImageSharp.fluid}
      className="logo"
      alt={strings.Header.logoAlt}
      imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
    />
  </header>
);

export default AboutHeader;
