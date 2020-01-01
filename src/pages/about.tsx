import './about.scss';
import '../main.scss';

import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import Footer from '../components/_shared/Footer';
import SEO from '../components/_shared/SEO';
import Header from '../components/about/Header';
import Profiles from '../components/about/Profiles';
import Sidebar from '../components/about/Sidebar';

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
