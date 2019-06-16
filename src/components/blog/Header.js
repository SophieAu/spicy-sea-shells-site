import React from 'react'
import { Logo } from '../miniFragments.js'
import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <a href="/blog">
        <span style={{ display: 'none' }}>Homepage / Blog</span>
        <Logo />
      </a>
    </div>
    <nav className="header-nav">
      <a href="/about">About</a>
    </nav>
  </header>
)

export default Header
