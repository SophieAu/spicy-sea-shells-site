import React from 'react'
import { Intro, BlogCallToAction, Logo } from '../_shared/headerFragments'
import Footer from '../_shared/footerFragment'
import './Sidebar.scss'

const Sidebar = () => (
  <div className="sidebar-wrapper">
    <div className="sidebar">
      <header className="sidebar-body">
        <Logo className="sidebar-logo" />
        <div className="sidebar-text">
          <Intro className="intro" />
          <BlogCallToAction className="blog-cta" />
        </div>
      </header>
      <Footer className="sidebar-footer" />
    </div>
  </div>
)

export default Sidebar
