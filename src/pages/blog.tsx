import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PostList from '../components/blog/PostList.js'
import Wrapper from '../components/blog/Wrapper.js'
import { Intro } from '../components/_shared/headerFragments.js'
import './blog.scss'
import '../main.scss'
import { GraphQLResponse } from '../types.js'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "DD MMMM YYYY")
            slug
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <>
    <Helmet>
      <title>Spicy Blog | Spicy Sea Shells</title>
      <meta
        name="description"
        content={
          'Blog of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts'
        }
      />
    </Helmet>
    <Wrapper>
      <div className="blog-home">
        <div className="hero-section">
          <h1>Spicy Blog</h1>
          <div className="hero-text">
            <p>
              We're the <a href="/about">Spicy Sea Shells</a> and this is our blog.
            </p>
            <Intro />
          </div>
        </div>
        <div className="posts">
          <h1>Latest</h1>
          <PostList posts={data.allMarkdownRemark.edges} />
        </div>
      </div>
    </Wrapper>
  </>
)

export default Blog
