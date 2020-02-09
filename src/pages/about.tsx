import './about.scss';
import '../main.scss';

import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';
import Profiles from '../components/Profiles';
import SEO from '../components/SEO';
import Sidebar from '../components/Sidebar';

const About = () => (
  <>
    <SEO
      title={strings.About.pageTitle}
      description={strings.About.pageDescription}
      slug={slugs.about}
    />
    <div id="about">
      <AboutHeader id="about-header" />
      <Sidebar />
      <Profiles />
      <Footer />
    </div>
  </>
);

export default About;
