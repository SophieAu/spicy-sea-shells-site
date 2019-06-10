import React from 'react'
import { Intro, BlogCallToAction, Logo, FooterText } from '../miniFragments.js'
import './Sidebar.scss'

export default () => (
  <header className="sidebar-wrapper">
    <div className="sidebar">
      <div className="sidebar-body">
        <div className="sidebar-logo">
          <Logo className="logo" />
        </div>
        <div className="sidebar-text">
          <Intro className="intro" />
          <BlogCallToAction className="blog-cta" />
        </div>
      </div>
      <div className="sidebar-footer">
        <FooterText />
      </div>
    </div>
  </header>
)
