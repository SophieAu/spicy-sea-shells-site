import React from 'react'
import { Intro, BlogCallToAction, Logo, FooterText } from '../miniFragments.js'
import './Sidebar.scss'

export default () => (
  <header className="sidebar-wrapper">
    <div className="sidebar">
      <div className="sidebar-body">
        <div className="sidebar-logo">
          <Logo />
        </div>
        <div className="sidebar-text">
          <Intro />
          <BlogCallToAction />
        </div>
      </div>
      <div className="sidebar-footer">
        <FooterText />
      </div>
    </div>
  </header>
)
