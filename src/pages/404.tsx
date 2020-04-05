import React from 'react';

import strings from '../../data/strings';
import { LayoutWrapper } from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';
import * as styles from './404.styles';

const NotFoundPage = () => (
  <LayoutWrapper page="notFound" className={styles.root}>
    <main className={styles.container}>
      <h1>{strings.notFound.heading}</h1>
      <MarkdownWithLink>{strings.notFound.body}</MarkdownWithLink>
    </main>
  </LayoutWrapper>
);

export default NotFoundPage;
