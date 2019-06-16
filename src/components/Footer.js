import React from 'react'
import './Footer.scss'
import chili from '../images/chili.svg'

export default () => (
  <FooterText />
)

const FooterText = () => (
  <footer className="footer">
    Made with <img src={chili} alt="a chili" /> by the Spicy Sea Shells
  </footer>
)
