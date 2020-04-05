import React from 'react';

import * as styles from './BlogWrapper.styles';
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
    title={title}
    description={description}
    slug={slug}
    creator={creator}
    ogImage={ogImage}
    className={styles.root}
  >
    <HeaderBlog />
    <main className={styles.body}>{children}</main>
    <Footer />
  </Layout>
);

export default BlogWrapper;
