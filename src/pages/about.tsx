import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/about/Header.js'
import Footer from '../components/_shared/Footer.js'
import Profiles from '../components/about/Profiles.js'
import Sidebar from '../components/about/Sidebar.js'
import './about.scss'
import '../main.scss'

const About = () => (
  <>
    <Helmet>
      <title>About | Spicy Sea Shells</title>
      <meta
        name="description"
        content={
          'About page of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts'
        }
      />
    </Helmet>
    <div id="about">
      <Header />
      <Sidebar />
      <Profiles />
      <Footer />
    </div>
  </>
)

export default About
