import React from 'react'
import Header from '../components/blog/Header.js'
import Footer from '../components/Footer.js'
import Body from '../components/blog/Body.js'
import '../styles/main.scss'
import '../styles/blog.scss'

const App = () => (
  <div id="blog">
    <Header />
    <Body />
    <Footer />
  </div>
)

export default App
