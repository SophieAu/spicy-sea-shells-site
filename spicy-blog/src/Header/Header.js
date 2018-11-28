import React from 'react';
import { Logo } from '../miniFragments.js'
import './Header.scss';

const Header = () => (
  <header className="header-wrapper">
    <div className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <nav className="header-nav">
        <ul>
          <li className="nav-element"><a href="/blog">Blog</a></li>
          <li className="nav-element"><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;