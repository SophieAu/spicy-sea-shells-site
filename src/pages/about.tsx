import React from 'react';

import { slugs } from '../../data/config';
import copy from '../../data/strings';
import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Profiles from '../components/Profiles';
import Sidebar from '../components/Sidebar';
import * as styles from './about.styles';

const strings = copy.about;

const About = () => (
  <Layout
    title={strings.pageTitle}
    description={strings.pageDescription}
    slug={slugs.about}
    className={styles.root}
  >
    <AboutHeader className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <Profiles className={styles.profiles} />
    <Footer className={styles.footer} />
  </Layout>
);

export default About;
