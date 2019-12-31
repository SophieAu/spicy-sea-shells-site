import React from 'react'
import { Title, Intro, BlogCallToAction, Logo } from '../_shared/headerFragments'
import './Header.scss'

const Header = () => (
  <header className="header">
    <Title className="title" />
    <Intro className="text intro" />
    <BlogCallToAction className="text blog-cta" />
    <Logo className="logo" />
  </header>
)

export default Header
