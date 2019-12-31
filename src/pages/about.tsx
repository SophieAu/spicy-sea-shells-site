import './about.scss';
import '../main.scss';

import React from 'react';

import strings from '../../data/strings';
import Footer from '../components/_shared/Footer';
import SEO from '../components/_shared/SEO';
import Header from '../components/about/Header';
import Profiles from '../components/about/Profiles';
import Sidebar from '../components/about/Sidebar';

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
);

export default About;
