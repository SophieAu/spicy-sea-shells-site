import './about.scss';
import '../main.scss';

import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import Header from '../components/about/Header';
import Profiles from '../components/about/Profiles';
import Sidebar from '../components/about/Sidebar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const About = () => (
  <>
    <SEO
      title={strings.About.pageTitle}
      description={strings.About.pageDescription}
      slug={slugs.about}
    />
    <div id="about">
      <Header id="about-header" />
      <Sidebar />
      <Profiles />
      <Footer />
    </div>
  </>
);

export default About;
