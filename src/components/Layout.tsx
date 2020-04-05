import './Layout.scss';

import { cx } from 'linaria';
import React from 'react';

import { slugs } from '../../data/config';
import strings, { Page } from '../../data/strings';
import * as styles from './Layout.styles';
import SEO from './SEO';

export const LayoutWrapper: React.FC<{ page: Page; className?: string }> = ({
  page,
  children,
  className,
}) => (
  <Layout
    title={strings[page].pageTitle}
    description={strings[page].pageDescription}
    slug={slugs[page]}
    id={page}
    className={className}
  >
    {children}
  </Layout>
);

const webpSupportDetection =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

interface Props {
  title: string;
  description: string;
  slug: string;
  id: Page;
  children?: React.ReactNode;
  creator?: string;
  additionalHead?: React.ReactNode;
  ogImage?: string;
  className?: string;
}

const Layout: React.FC<Props> = props => {
  const {
    id,
    title,
    description,
    slug,
    children,
    additionalHead,
    creator,
    ogImage,
    className,
  } = props;

  return (
    <>
      <SEO title={title} description={description} slug={slug} creator={creator} ogImage={ogImage}>
        <script type="text/javascript">{webpSupportDetection}</script>
        {additionalHead}
      </SEO>
      <div id={id} className={cx(styles.root, className)}>
        {children}
      </div>
    </>
  );
};

export default Layout;
