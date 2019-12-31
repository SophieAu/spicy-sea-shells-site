import React from 'react';
import { Logo } from '../_shared/headerFragments';
import './Header.scss';
import strings from '../../../data/strings';

const Header = () => (
  <header className="header">
    <a className="header-logo" href="/blog">
      <span style={{ display: 'none' }}>{strings.BlogHeader.homeLinkAlt}</span>
      <Logo />
    </a>
    <nav className="header-nav">
      <a href="/about">{strings.BlogHeader.aboutLink}</a>
    </nav>
  </header>
);

export default Header;
