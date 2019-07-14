import React from 'react'
import './headerFragments.scss'
import logo from '../../images/logo.png'

export const Title = ({ className }) => <h1 className={className}>Spicy Sea Shells</h1>

export const Intro = ({ className }) => (
  <p className={className}>
    <span className="-extended">Who are we? </span>We are a collective of software developers,
    business analysts and quality analysts
    <span className="-extended"> who met on a training course by ThoughtWorks</span>.
  </p>
)

export const BlogCallToAction = ({ className }) => (
  <p className={className}>
    {`Together we're running the `}
    <a className="cta-link" href="/blog">
      Spicy Blog
    </a>
  </p>
)

export const Logo = ({ className }) => (
  <img className={className} src={logo} alt="Spicy Sea Shells logo" />
)
