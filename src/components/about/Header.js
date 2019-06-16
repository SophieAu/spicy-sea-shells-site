import React from 'react'
import { Title, Intro, BlogCallToAction, Logo } from '../_shared/headerFragments'
import './Header.scss'

export default () => (
  <header className="header">
    <Title className="title" />
    <Intro className="text intro" />
    <BlogCallToAction className="text blog-cta" />
    <Logo className="logo" />
  </header>
)
