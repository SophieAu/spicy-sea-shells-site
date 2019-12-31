import React from 'react'
import strings from '../../data/strings'
import SEO from '../components/_shared/SEO'

const Home = () => (
  <SEO title={strings.Home.pageTitle} description={strings.Home.description} slug={''}>
    <meta httpEquiv="refresh" content="0; url=/blog" />
  </SEO>
)

export default Home
