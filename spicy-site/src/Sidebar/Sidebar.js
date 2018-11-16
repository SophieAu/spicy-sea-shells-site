import React from 'react'
import { Intro, BlogCallToAction, Logo, FooterText } from '../miniFragments.js'
import './Sidebar.scss';

const Sidebar = () => (
  <header className="sidebar">
    <div className="sidebar-logo">
      <Logo />
    </div>
    <div className="sidebar-text">
      <Intro />
      <BlogCallToAction />
    </div>
    <div className="sidebar-footer">
      <FooterText />
    </div>
  </header>
);

export default Sidebar
