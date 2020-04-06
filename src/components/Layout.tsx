import { cx } from 'linaria';
import React from 'react';

import * as styles from './Layout.styles';
import SEO from './SEO';

const webpSupportDetection =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  creator?: string;
  ogImage?: string;
  className?: string;
}

const Layout: React.FC<Props> = props => {
  const { title, description, slug, children, creator, ogImage, className } = props;

  return (
    <>
      <SEO title={title} description={description} slug={slug} creator={creator} ogImage={ogImage}>
        <script type="text/javascript">{webpSupportDetection}</script>
      </SEO>
      <div className={cx(styles.root, className)}>{children}</div>
    </>
  );
};

export default Layout;
