import React from 'react'
import './footerFragment.scss'
import chili from '../../images/chili.svg'

export default ({ className }) => (
  <footer className={`${className || ''}`}>
    Made with <img src={chili} alt="a chili" /> by the Spicy Sea Shells
  </footer>
)
