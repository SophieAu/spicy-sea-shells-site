import './Sidebar.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import strings from '../../data/strings';
import BlogCTA from './BlogCTA';
import Footer from './Footer';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...sidebarLogo
    }
  }
`;

const Sidebar = () => (
  <div className="sidebar-wrapper">
    <div className="sidebar">
      <header className="sidebar-body">
        <Img
          className="sidebar-logo"
          fixed={useStaticQuery(query).file.childImageSharp.fixed}
          alt={strings.Header.logoAlt}
        />
        <div className="sidebar-text">
          <p>{strings.Header.introExtended}</p>
          <BlogCTA />
        </div>
      </header>
      <Footer className="sidebar-footer" />
    </div>
  </div>
);

export default Sidebar;