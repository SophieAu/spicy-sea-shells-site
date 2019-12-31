import React from 'react';
import './Header.scss';
import strings from '../../../data/strings';
import logo from '../../../data/images/logo_96.png';

const Header = () => (
  <header className="header">
    <a className="header-logo" href="/blog" aria-label={strings.BlogHeader.homeLinkAlt}>
      <img src={logo} alt={strings.Header.logoAlt} />
    </a>
    <nav className="header-nav">
      <a href="/about">{strings.BlogHeader.aboutLink}</a>
    </nav>
  </header>
);

export default Header;
