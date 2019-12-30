import React from 'react'
import './footerFragment.scss'
import chili from '../../images/chili.svg'

const FooterFragment: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={className}>
    Made with <img src={chili} alt="a chili" /> by the Spicy Sea Shells
  </footer>
)

export default FooterFragment
