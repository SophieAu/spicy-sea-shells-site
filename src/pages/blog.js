import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/blog/Header.js'
import Footer from '../components/Footer.js'
import Body from '../components/blog/Body.js'
import BodyWrapper from '../components/blog/BodyWrapper.js'
import '../styles/main.scss'
import '../styles/blog.scss'

export default ({ data }) => (
  <div id="blog">
    <Header />
    <BodyWrapper>
      <Body posts={data.allMarkdownRemark.edges} />
    </BodyWrapper>
    <Footer />
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
          }
          excerpt
        }
      }
    }
  }
`
