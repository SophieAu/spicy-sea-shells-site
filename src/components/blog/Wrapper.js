import React from 'react'
import Footer from '../Footer'
import Header from './Header'
import './Wrapper.scss'

export default ({ children }) => (
  <div id="blog">
    <Header />
    <main className="body">{children}</main>
    <Footer />
  </div>
)
