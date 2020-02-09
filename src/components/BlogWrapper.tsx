import './BlogWrapper.scss';

import React from 'react';

import BlogHeader from './BlogHeader';
import Footer from './Footer';
import Layout from './Layout';

interface Props {
  title: string;
  description: string;
  slug: string;
  creator?: string;
  children?: React.ReactNode;
}

const BlogWrapper: React.FC<Props> = ({ children, title, description, slug, creator }) => (
  <Layout id="blog" title={title} description={description} slug={slug} creator={creator}>
    <BlogHeader />
    <main className="body">{children}</main>
    <Footer />
  </Layout>
);

export default BlogWrapper;
