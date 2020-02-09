import './Wrapper.scss';

import React from 'react';

import BlogHeader from './BlogHeader';
import Footer from './Footer';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div id="blog">
    <BlogHeader />
    <main className="body">{children}</main>
    <Footer />
  </div>
);

export default Wrapper;
