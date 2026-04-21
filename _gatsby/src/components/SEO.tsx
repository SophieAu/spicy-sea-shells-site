import React from 'react';
import { Helmet } from 'react-helmet';

import { BASE_URL, FALLBACK_IMAGE } from '../../data/config';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  creator?: string;
  ogImage?: string;
}

const SEO: React.FC<Props> = ({ title, description, slug, children, creator, ogImage }) => {
  const ogImagePath = `${BASE_URL}${ogImage ?? FALLBACK_IMAGE}`;
  const url = `${BASE_URL}/${slug}`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en', prefix: 'og: http://ogp.me/ns#' }}
      title={title}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: `website` },
        { property: `og:image`, content: ogImagePath },
        { property: `og:url`, content: url },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:url`, content: url },
        { name: `twitter:title`, content: title },
        { name: `twitter:image`, content: ogImagePath },
        { name: `twitter:description`, content: description },
        { name: `twitter:site`, content: creator || '' },
      ]}
    >
      {children}
    </Helmet>
  );
};

export default SEO;
