import './Header.scss';

import React from 'react';

import { BlogCallToAction, Intro, Title } from '../_shared/headerFragments';
import logo56 from '../../../data/images/logo_56.png';
import logo144 from '../../../data/images/logo_144.png';
import logo192 from '../../../data/images/logo_192.png';
import logo from '../../../data/images/logo_256.png';
import strings from '../../../data/strings';

const Header = () => (
  <header className="header">
    <Title className="title" />
    <Intro className="text intro" />
    <BlogCallToAction className="text blog-cta" />
    <picture className="logo">
      <source media="(min-width: 1024px)" srcSet={logo192} type="image/png" />
      <source media="(min-width: 768px)" srcSet={logo144} type="image/png" />
      <source media="(min-width: 0px)" srcSet={logo56} type="image/png" />
      <img src={logo} alt={strings.Header.logoAlt} />
    </picture>
  </header>
);

export default Header;
