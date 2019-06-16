import React from 'react'
import { Logo } from '../_shared/headerFragments'
import './Header.scss'

const Header = () => (
  <header className="header">
    <a className="header-logo" href="/blog">
      <span style={{ display: 'none' }}>Homepage / Blog</span>
      <Logo />
    </a>
    <nav className="header-nav">
      <a href="/about">About</a>
    </nav>
  </header>
)

export default Header
