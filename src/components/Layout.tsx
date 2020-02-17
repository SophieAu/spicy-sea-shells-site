import './Layout.scss';

import React from 'react';

import SEO from './SEO';

const webpSupportDetection =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

interface Props {
  title: string;
  description: string;
  slug: string;
  id: 'about' | 'blog';
  children?: React.ReactNode;
  creator?: string;
  additionalHead?: React.ReactNode;
  ogImage?: string;
}

const Layout: React.FC<Props> = props => {
  const { id, title, description, slug, children, additionalHead, creator, ogImage } = props;

  return (
    <>
      <SEO title={title} description={description} slug={slug} creator={creator} ogImage={ogImage}>
        <script>{webpSupportDetection}</script>
        {additionalHead}
      </SEO>
      <div id={id}>{children}</div>
    </>
  );
};

export default Layout;
