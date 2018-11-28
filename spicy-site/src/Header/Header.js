import React from "react";
import { Title, Intro, BlogCallToAction, Logo } from "../miniFragments.js";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <div className="header-text">
      <Title />
      <Intro />
      <BlogCallToAction />
    </div>
    <div className="header-logo">
      <Logo />
    </div>
  </header>
);

export default Header;
