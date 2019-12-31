import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/about/Header'
import Footer from '../components/_shared/Footer'
import Profiles from '../components/about/Profiles'
import Sidebar from '../components/about/Sidebar'
import './about.scss'
import '../main.scss'
import strings from '../../data/strings'

const About = () => (
  <>
    <Helmet>
      <title>{strings.About.pageTitle}</title>
      <meta name="description" content={strings.About.description} />
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
