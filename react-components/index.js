import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Footer from './Footer'
import Profiles from './Profiles'
import Sidebar from './Sidebar'

const HtmlBody = (
    <>
        <Header />
        <Sidebar />
        <Profiles />
        <Footer />
    </>
);

render(HtmlBody, document.getElementById('root'));
