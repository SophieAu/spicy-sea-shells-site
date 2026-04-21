import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import copy from '../../data/strings';
import { ClassNameProp } from '../types';
import BlogCTA from './BlogCTA';
import Footer from './Footer';
import * as styles from './Sidebar.styles';

const strings = copy.Header;

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...sidebarLogo
    }
  }
`;

const Sidebar: React.FC<ClassNameProp> = ({ className }) => (
  <div className={cx(styles.root, className)}>
    <header>
      <Img
        className={styles.logo}
        fixed={useStaticQuery(query).file.childImageSharp.fixed}
        alt={strings.logoAlt}
      />
      <div className={styles.text}>
        <p>{strings.introExtended}</p>
        <BlogCTA />
      </div>
    </header>
    <Footer className={styles.footer} />
  </div>
);

export default Sidebar;
