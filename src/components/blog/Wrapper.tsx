import React from 'react'
import Footer from '../_shared/Footer'
import Header from './Header'
import './Wrapper.scss'

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div id="blog">
    <Header />
    <main className="body">{children}</main>
    <Footer />
  </div>
)

export default Wrapper
