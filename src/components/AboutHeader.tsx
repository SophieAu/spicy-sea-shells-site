import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import strings from '../../data/strings';
import * as styles from './AboutHeader.styles';
import BlogCTA from './BlogCTA';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...aboutHeaderLogo
    }
  }
`;

const AboutHeader: React.FC<{ className?: string }> = ({ className }) => (
  <header className={cx(styles.root, className)}>
    <h1 className={styles.title}>{strings.Header.title}</h1>
    <p className={cx(styles.text, `${styles.intro}-extended`)}>{strings.Header.introExtended}</p>
    <p className={cx(styles.text, `${styles.intro}-short`)}>{strings.Header.introShort}</p>
    <BlogCTA className={cx(styles.text, styles.blog)} />
    <Img
      fluid={useStaticQuery(query).file.childImageSharp.fluid}
      className={styles.logo}
      alt={strings.Header.logoAlt}
      imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
    />
  </header>
);

export default AboutHeader;
