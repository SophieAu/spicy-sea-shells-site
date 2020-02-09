import './Layout.scss';

import React from 'react';

import SEO from './SEO';

interface Props {
  title: string;
  description: string;
  slug: string;
  id: 'about' | 'blog';
  children?: React.ReactNode;
  creator?: string;
  additionalHead?: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
  const { id, title, description, slug, children, additionalHead, creator } = props;

  return (
    <>
      <SEO title={title} description={description} slug={slug} creator={creator}>
        {additionalHead}
      </SEO>
      <div id={id}>{children}</div>
    </>
  );
};

export default Layout;
