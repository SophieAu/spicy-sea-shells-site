import React from 'react'
import { Helmet } from 'react-helmet'
import strings from '../../data/strings'

const Home = () => (
  <Helmet htmlAttributes={{ lang: 'en' }}>
    <meta httpEquiv="refresh" content="0; url=/blog" />
    <title>{strings.Home.pageTitle}</title>
    <meta name="description" content={strings.Home.description} />
  </Helmet>
)

export default Home
