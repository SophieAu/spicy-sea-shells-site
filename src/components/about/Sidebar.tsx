import './Sidebar.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Footer from '../_shared/footerFragment';
import { BlogCallToAction, Intro } from '../_shared/headerFragments';
import strings from '../../../data/strings';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 256, width: 256, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Sidebar = () => {
  const data = useStaticQuery(query);

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <header className="sidebar-body">
          <Img
            className="sidebar-logo"
            fixed={data.file.childImageSharp.fixed}
            alt={strings.Header.logoAlt}
          />
          <div className="sidebar-text">
            <Intro className="intro" />
            <BlogCallToAction className="blog-cta" />
          </div>
        </header>
        <Footer className="sidebar-footer" />
      </div>
    </div>
  );
};

export default Sidebar;
