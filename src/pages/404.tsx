import React from 'react';

import { slugs } from '../../data/config';
import copy from '../../data/strings';
import Layout from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';
import * as styles from './404.styles';

const strings = copy.notFound;

const NotFoundPage = () => (
  <Layout
    title={strings.pageTitle}
    description={strings.pageDescription}
    slug={slugs.notFound}
    className={styles.root}
  >
    <main className={styles.container}>
      <h1>{strings.heading}</h1>
      <MarkdownWithLink>{strings.body}</MarkdownWithLink>
    </main>
  </Layout>
);

export default NotFoundPage;
