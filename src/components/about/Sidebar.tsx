import React from 'react';
import { Intro, BlogCallToAction } from '../_shared/headerFragments';
import Footer from '../_shared/footerFragment';
import './Sidebar.scss';
import strings from '../../../data/strings';
import logo from '../../../data/images/logo_256.png';

const Sidebar = () => (
  <div className="sidebar-wrapper">
    <div className="sidebar">
      <header className="sidebar-body">
        <img className="sidebar-logo" src={logo} alt={strings.Header.logoAlt} />
        <div className="sidebar-text">
          <Intro className="intro" />
          <BlogCallToAction className="blog-cta" />
        </div>
      </header>
      <Footer className="sidebar-footer" />
    </div>
  </div>
);

export default Sidebar;
