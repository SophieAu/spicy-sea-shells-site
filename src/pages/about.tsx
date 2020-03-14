import './about.scss';

import React from 'react';

import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';
import { LayoutWrapper } from '../components/Layout';
import Profiles from '../components/Profiles';
import Sidebar from '../components/Sidebar';

const About = () => (
  <LayoutWrapper page="about">
    <AboutHeader id="about-header" />
    <Sidebar />
    <Profiles />
    <Footer />
  </LayoutWrapper>
);

export default About;
