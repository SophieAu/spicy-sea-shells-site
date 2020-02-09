import './about.scss';

import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Profiles from '../components/Profiles';
import Sidebar from '../components/Sidebar';

const About = () => (
  <Layout
    title={strings.About.pageTitle}
    description={strings.About.pageDescription}
    slug={slugs.about}
    id="about"
  >
    <AboutHeader id="about-header" />
    <Sidebar />
    <Profiles />
    <Footer />
  </Layout>
);

export default About;
