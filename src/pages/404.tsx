import './404.scss';

import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import Layout from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';

const NotFoundPage = () => (
  <Layout
    title={strings.NotFound.pageTitle}
    description={strings.NotFound.pageDescription}
    slug={slugs.notFound}
    id="notFound"
  >
    <div>
      <h1>{strings.NotFound.heading}</h1>
      <MarkdownWithLink>{strings.NotFound.body}</MarkdownWithLink>
    </div>
  </Layout>
);

export default NotFoundPage;
