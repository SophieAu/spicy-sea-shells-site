import React from 'react'
import Header from '../components/About/Header.js'
import Footer from '../components/Footer.js'
import Profiles from '../components/About/Profiles.js'
import Sidebar from '../components/About/Sidebar.js'
import '../styles/main.scss'
import '../styles/about.scss'

export default () => (
  <div id="about">
    <Header />
    <Sidebar />
    <Profiles />
    <Footer />
  </div>
)
