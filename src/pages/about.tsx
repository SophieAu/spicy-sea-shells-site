import React from 'react';

import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';
import { LayoutWrapper } from '../components/Layout';
import Profiles from '../components/Profiles';
import Sidebar from '../components/Sidebar';
import * as styles from './about.styles';

const About = () => (
  <LayoutWrapper page="about" className={styles.root}>
    <AboutHeader className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <Profiles className={styles.profiles} />
    <Footer className={styles.footer} />
  </LayoutWrapper>
);

export default About;
