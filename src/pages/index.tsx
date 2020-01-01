import React from 'react';

import { paths } from '../../data/config';
import strings from '../../data/strings';
import SEO from '../components/_shared/SEO';

const Home = () => (
  <SEO title={strings.Home.pageTitle} description={strings.Home.pageDescription} slug={''}>
    <meta httpEquiv="refresh" content={`0; url=${paths.blog}`} />
  </SEO>
);

export default Home;
