import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths } from '../../data/config';
import strings from '../../data/strings';
import * as styles from './HeaderBlog.styles';
import Link from './Link';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...blogHeaderLogo
    }
  }
`;

const HeaderBlog = () => (
  <header className={styles.root}>
    <Link className={styles.logo} to={paths.blog} ariaLabel={strings.blog.homeLinkAlt}>
      <Img fluid={useStaticQuery(query).file.childImageSharp.fluid} alt={strings.Header.logoAlt} />
    </Link>
    <nav className={styles.nav}>
      <Link to={paths.about}>{strings.blog.aboutLink}</Link>
    </nav>
  </header>
);

export default HeaderBlog;
