import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Footer from './Footer'
import Body from './Body'

const HtmlBody = (
    <div className="root">
        <Header />
        <Body />
        <Footer />
    </ div>
);

render(HtmlBody, document.querySelector('#root'));
