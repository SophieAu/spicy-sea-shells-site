import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => (
  <Helmet>
    <meta http-equiv="refresh" content="0; url=/blog" />
    <title>Spicy Sea Shells</title>
    <meta
      name="description"
      content={
        'Homepage of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts'
      }
    />
  </Helmet>
)

export default Home
