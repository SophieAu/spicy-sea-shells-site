import React from 'react'
import './miniFragments.scss'
import chili from '../images/chili.svg'
import logo from '../images/logo.png'

export const Title = () => <h1>Spicy Sea Shells</h1>

export const Intro = () => (
  <p className="intro">
    <span className="intro-extended">Who are we? </span>We are a collective of software developers,
    business analysts and quality analysts
    <span className="intro-extended"> who met on a training course by ThoughtWorks</span>.
  </p>
)

export const BlogCallToAction = () => (
  <p className="blog-cta">
    Together we're running the <a href="/blog">Spicy Blog</a>
  </p>
)

export const Logo = () => <img src={logo} alt="Spicy Sea Shells logo" />

export const FooterText = () => (
  <p className="footer-text">
    Made with <img src={chili} alt="a chili" /> by the Spicy Sea Shells
  </p>
)
