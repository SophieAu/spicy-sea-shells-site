import './Header.scss';

import React from 'react';

import { paths } from '../../../data/config';
import logo from '../../../data/images/logo_96.png';
import strings from '../../../data/strings';

const Header = () => (
  <header className="header">
    <a className="header-logo" href={paths.blog} aria-label={strings.Blog.homeLinkAlt}>
      <img src={logo} alt={strings.Header.logoAlt} />
    </a>
    <nav className="header-nav">
      <a href={paths.about}>{strings.Blog.aboutLink}</a>
    </nav>
  </header>
);

export default Header;
