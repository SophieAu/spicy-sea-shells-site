import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import copy from '../../data/strings';
import { ClassNameProp } from '../types';
import * as styles from './AboutHeader.styles';
import BlogCTA from './BlogCTA';

const strings = copy.Header;

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...aboutHeaderLogo
    }
  }
`;

const AboutHeader: React.FC<ClassNameProp> = ({ className }) => (
  <header className={cx(styles.root, className)}>
    <h1 className={styles.title}>{strings.title}</h1>
    <p className={cx(styles.text, `${styles.intro}-extended`)}>{strings.introExtended}</p>
    <p className={cx(styles.text, `${styles.intro}-short`)}>{strings.introShort}</p>
    <BlogCTA className={cx(styles.text, styles.blog)} />
    <Img
      fluid={useStaticQuery(query).file.childImageSharp.fluid}
      className={styles.logo}
      alt={strings.logoAlt}
      imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
    />
  </header>
);

export default AboutHeader;
