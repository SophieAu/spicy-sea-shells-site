import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import strings from '../../data/strings';
import BlogCTA from './BlogCTA';
import Footer from './Footer';
import * as styles from './Sidebar.styles';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...sidebarLogo
    }
  }
`;

interface Props {
  className: string;
}

const Sidebar: React.FC<Props> = ({ className }) => (
  <div className={cx(styles.root, className)}>
    <header>
      <Img
        className={styles.logo}
        fixed={useStaticQuery(query).file.childImageSharp.fixed}
        alt={strings.Header.logoAlt}
      />
      <div className={styles.text}>
        <p>{strings.Header.introExtended}</p>
        <BlogCTA />
      </div>
    </header>
    <Footer className={styles.footer} />
  </div>
);

export default Sidebar;
