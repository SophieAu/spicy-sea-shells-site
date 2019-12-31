import './Header.scss';

import React from 'react';

import logo from '../../../data/images/logo_96.png';
import strings from '../../../data/strings';

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
