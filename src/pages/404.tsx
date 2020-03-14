import './404.scss';

import React from 'react';

import strings from '../../data/strings';
import { LayoutWrapper } from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';

const NotFoundPage = () => (
  <LayoutWrapper page="notFound">
    <div>
      <h1>{strings.notFound.heading}</h1>
      <MarkdownWithLink>{strings.notFound.body}</MarkdownWithLink>
    </div>
  </LayoutWrapper>
);

export default NotFoundPage;
