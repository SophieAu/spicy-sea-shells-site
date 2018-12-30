import React from 'react'
import { graphql } from 'gatsby'
import PostList from '../components/blog/PostList.js'
import Wrapper from '../components/blog/Wrapper.js'
import '../styles/main.scss'
import '../styles/blog.scss'

export default ({ data }) => (
  <Wrapper>
    <div className="blog-home">
      <div className="hero-section">
        <h1>Spicy Blog</h1>
        <div className="hero-text">
          <p>
            We're the <a href="/about">Spicy Sea Shells</a> and this is our
            blog.
          </p>
          <p>Some text about what we're writing about in this blog and maybe something about us as a group. I don't know. Think of something.</p>
        </div>
      </div>
      <div className="posts">
        <h1>Latest</h1>
        <PostList posts={data.allMarkdownRemark.edges} />
      </div>
    </div>
  </Wrapper>
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
