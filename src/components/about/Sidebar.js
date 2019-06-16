import React from 'react'
import { Intro, BlogCallToAction, Logo } from '../_shared/headerFragments'
import Footer from '../_shared/footerFragment'
import './Sidebar.scss'

export default () => (
  <header className="sidebar-wrapper">
    <div className="sidebar">
      <div className="sidebar-body">
        <Logo className="sidebar-logo" />
        <div className="sidebar-text">
          <Intro className="intro" />
          <BlogCallToAction className="blog-cta" />
        </div>
      </div>
      <Footer className="sidebar-footer" />
    </div>
  </header>
)
