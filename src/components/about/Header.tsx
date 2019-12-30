import React from 'react'
import { Title, Intro, BlogCallToAction, Logo } from '../_shared/headerFragments'
import './Header.scss'

const Header = () => (
  <header className="header">
    <Title className="title" />
    <Intro className="text intro" />
    <BlogCallToAction className="text blog-cta" />
    <div className="logo">
      <Logo className="logo" />
    </div>
  </header>
)

export default Header
