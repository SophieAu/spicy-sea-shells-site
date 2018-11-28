import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Body from './Body/Body.js'
import './index.scss';

const App = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
  )

ReactDOM.render(<App />, document.getElementById('root'));
