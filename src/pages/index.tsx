import React from 'react';

import { paths, slugs } from '../../data/config';
import strings from '../../data/strings';
import SEO from '../components/SEO';

const Home = () => (
  <SEO title={strings.Home.pageTitle} description={strings.Home.pageDescription} slug={slugs.home}>
    <meta httpEquiv="refresh" content={`0; url=${paths.blog}`} />
  </SEO>
);

export default Home;
