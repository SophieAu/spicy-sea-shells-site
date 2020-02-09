import './Wrapper.scss';

import React from 'react';

import Footer from '../Footer';
import Header from './Header';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div id="blog">
    <Header />
    <main className="body">{children}</main>
    <Footer />
  </div>
);

export default Wrapper;
