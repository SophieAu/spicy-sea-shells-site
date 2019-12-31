import React from 'react';
import { Logo } from '../_shared/headerFragments';
import './Header.scss';
import strings from '../../../data/strings';

const Header = () => (
  <header className="header">
    <a className="header-logo" href="/blog" aria-label={strings.BlogHeader.homeLinkAlt}>
      <Logo />
    </a>
    <nav className="header-nav">
      <a href="/about">{strings.BlogHeader.aboutLink}</a>
    </nav>
  </header>
);

export default Header;
