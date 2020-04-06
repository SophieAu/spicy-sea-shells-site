import React from 'react';

import copy from '../../data/strings';
import { LayoutWrapper } from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';
import * as styles from './404.styles';

const strings = copy.notFound;

const NotFoundPage = () => (
  <LayoutWrapper page="notFound" className={styles.root}>
    <main className={styles.container}>
      <h1>{strings.heading}</h1>
      <MarkdownWithLink>{strings.body}</MarkdownWithLink>
    </main>
  </LayoutWrapper>
);

export default NotFoundPage;
