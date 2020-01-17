import './Sidebar.scss';

import React from 'react';

import Footer from '../_shared/footerFragment';
import { BlogCallToAction, Intro } from '../_shared/headerFragments';
import logo from '../../../data/img/logo_256.png';
import strings from '../../../data/strings';

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
