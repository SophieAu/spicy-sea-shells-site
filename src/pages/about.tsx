import React from 'react'
import Header from '../components/about/Header'
import Footer from '../components/_shared/Footer'
import Profiles from '../components/about/Profiles'
import Sidebar from '../components/about/Sidebar'
import './about.scss'
import '../main.scss'
import strings from '../../data/strings'
import SEO from '../components/_shared/SEO'

const About = () => (
  <>
    <SEO title={strings.About.pageTitle} description={strings.About.description} slug="about" />
    <div id="about">
      <Header />
      <Sidebar />
      <Profiles />
      <Footer />
    </div>
  </>
)

export default About
