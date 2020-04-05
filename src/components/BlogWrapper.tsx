import './BlogWrapper.scss';

import React from 'react';

import Footer from './Footer';
import HeaderBlog from './HeaderBlog';
import Layout from './Layout';

interface Props {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
  creator?: string;
  children?: React.ReactNode;
}

const BlogWrapper: React.FC<Props> = ({ children, title, description, slug, creator, ogImage }) => (
  <Layout
    id="blog"
    title={title}
    description={description}
    slug={slug}
    creator={creator}
    ogImage={ogImage}
  >
    <HeaderBlog />
    <main className="body">{children}</main>
    <Footer />
  </Layout>
);

export default BlogWrapper;
